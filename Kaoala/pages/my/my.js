// my.js
var app = getApp();
var util = require("../../utils/util.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    placehoderFont: "font-size:30rpx",
    username:"",
    pwd:"",
  },
  mysubmit:function(){
    var flag= this.checkUserName() && this.checkPassword();
    if(flag){
      this.checkUserInfo();
    }
  },
  getusername:function(e){
     var username = e.detail.value;
     this.setData({
       username: username
     });
  },
  getpwd:function(e){
     var pwd = e.detail.value;
     this.setData({
       pwd:pwd
     })
  },
  checkUserName: function () {
    var email = util.regexConfig().email;
    var phone = util.regexConfig().phone;
    var inputUserName = this.data.username.trim();
    if (email.test(inputUserName) || phone.test(inputUserName)) {
      return true;
    } else {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请输入正确的邮箱或者手机号码'
      });
      return false;
    }
  },
  checkPassword: function () {
    var password = this.data.pwd.trim();
    if (password.length <= 0) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请输入密码'
      });
      return false;
    } else {
      return true;
    }
  },
  checkUserInfo:function(){
     var username=this.data.username;
     var pwd=this.data.pwd;
     var that=this;
     if((username=='admin@163.com' || username == '18561613851')&&pwd=='123456'){
       setTimeout(function(){
         wx.showToast({
           title:"成功",
           icon:"success",
           duration:1500
         })
       },1000);
       wx.redirectTo({
         url: '../index/index'
       })
     }
     else{
       wx.showModal({
         title: '提示',
         showCancel: false,
         content: '请输入正确的邮箱或者手机号码'
       },1000);
       that.data.username="";
       that.data.pwd="";
       that.setData({
         username:username,
         pwd:pwd
       });
       console.log(that.data.username)
     }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
      console.log(userInfo)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})