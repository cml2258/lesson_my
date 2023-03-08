// pages/me/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    FindContent:
    [{
      url: '/pages/story/story.wxml',
      id:"a",
      photo:"/images/fuwu.png",
      text:"服务",
      icon:"https://img2.baidu.com/it/u=924836710,4170635340&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
      friend:"https://img2.baidu.com/it/u=1516415125,3684210222&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400"
    },
    {
      id:"b",
      photo:"/images/kan.png",
      text:"收藏",
      icon:"https://img2.baidu.com/it/u=924836710,4170635340&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    },
    {
      id:"c",
      photo:"https://tse4-mm.cn.bing.net/th/id/OIP-C.PL_flqQs0KsRID-3ozwz5gHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      text:"朋友圈",
      icon:"https://img2.baidu.com/it/u=924836710,4170635340&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
      // icon:"/images/返回2.png",
    },
    {
      id:"d",
      photo:"/images/video.png",
      text:"视频号",
      icon:"https://img2.baidu.com/it/u=924836710,4170635340&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
      // icon:"/images/返回2.png"
      // friend:""
    },
    {
      id:"e",
      photo:"/images/image/card.png",
      text:"卡包",
      // icon:"/images/返回2.png",
      icon:"https://img2.baidu.com/it/u=924836710,4170635340&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    },
    {
      id:"f",
      photo:"/images/video.png",
      text:"表情",
      // icon:"/images/返回2.png",
      icon:"https://img2.baidu.com/it/u=924836710,4170635340&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    },
    {
      id:"g",
      photo:"/images/shezhi.png",
      text:"设置",
      // icon:"/images/返回2.png"
      icon:"https://img2.baidu.com/it/u=924836710,4170635340&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    }]
  },
  bindViewTap:function(e) {
    if(e.currentTarget.dataset.url === "/pages/story/story.wxml"){
    // 获取页面节点信息，进行相应的跳转 ;
        wx.navigateTo({
          url: '/pages/story/story',
        })
      }
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})