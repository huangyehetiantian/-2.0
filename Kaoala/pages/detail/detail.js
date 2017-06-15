// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books:[
      {
        imgurl:"../images/2.jpg",
        itemtitle: "高考地理考A微课堂（套装版）》",
        money: "399",
        buidenum: "87",
        progressnum: "40"
      },
      {
        imgurl: "../images/3.png",
        itemtitle: "《高考地理考A微课堂(套装版)》必修一、必修二、必修三》",
        money: "319",
        buidenum: "37",
        progressnum: "20"
      },
      {
        imgurl: "../images/4.png",
        itemtitle: "《考A真题库最新五年高考地理真题详解》（2012-2016年）",
        money: "346",
        buidenum: "67",
        progressnum: "46"
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  gobuy:function(event){
    var productid = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: "../product-detail/product-detail?id=" + productid
    })
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '考A啦',
    });
    var that = this;
    wx.request({
      url:"http://www.kuaidi100.com/query",
      method:"GET",
      data:{
        type:"yuantong",
        postid: 11111111111
      },
      header:{
        'Accept': 'application/json'
      },
      success: function(res){
        console.log("nihao" + res.data);
         that.data.items = res.data;
      },
      fail: function(){
        console.log("shibai le")
      }
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