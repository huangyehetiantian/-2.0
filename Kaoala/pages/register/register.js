// pages/register/register.js
var util = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    placehoderFont: "font-size:28rpx",
    getSmsCodeBtnTxt: '获取验证码',
    count:61,
    phoneValue:"",
    inputUserName:"",
    inputPwd:"",
    code:"",
    disabled:true
  },
  getPhoneNum:function(e){
    console.log(e.detail.value)
    var that=this;
    var phonevalue=e.detail.value;
    that.setData({
      phoneValue: phonevalue
    })
  },
  getPwd:function(e){
    var that = this;
    var pwd = e.detail.value;
    that.setData({
      inputPwd: pwd
    });
    console.log(that.data.inputPwd)
  },
  getCode:function(e){
    var that = this;
    var code = e.detail.value;
    that.setData({
      code: code
    });
  },
  checkUserName: function () {
    var phone = util.regexConfig().phone;
    if (phone.test(this.data.phoneValue)) {
      return true;
    } else {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请输入正确的手机号码'
      });
      return false;
    }
  },
  getSmsCode:function(){
    var num = this.data.count;
    var that=this;
     var timer=setInterval(function(){
       if (num>0){
         num--;
         that.setData({ getSmsCodeBtnTxt: num });
       }
       else{
         that.setData({ getSmsCodeBtnTxt: "获取验证码" });
         clearInterval(timer);
       }
     },1000);
  },
  checkPassword: function () {
    var password = this.data.inputPwd;
    if (password.length <= 0) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请设置密码'
      });
      return false;
    } else if (password.length < 6 || password.length > 20) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '密码长度为6-20位字符'
      });
      return false;
    } else {
      return true;
    }
  },
  checkSmsCode: function () {
    var smsCode = this.data.code;
    var tempSmsCode = '000000';
    if (smsCode != tempSmsCode) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请输入正确的短信验证码'
      });
      return false;
    } else {
      return true;
    }
  },
  redirectTo: function () {
    wx.redirectTo({
      url: '../index/index'
    })
  },
  mysubmit: function () {
    var flag = this.checkUserName() && this.checkSmsCode() && this.checkPassword();
    var that = this;
    if (flag) {
      setTimeout(function () {
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 1500
        });;
        that.redirectTo();
      }, 2000);
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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