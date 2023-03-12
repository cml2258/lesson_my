// pages/game/game.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isGameStart:"true",
    tip:'',
    value: -1,
    title:'',
    count:0,
    res:(Math.random()*100).toFixed(0),//随机数
  },
  getNumber:function(e){
    this.setData({
      value:e.detail.value
    })
    const value = this.data.value
    if(value > 100 || value <0){
      title =  '数据不符合规则，请重新输入！'
    }
    console.log(value,this.data.res)
  },
  submit:function(){
    var random = this.data.res
    const tip = this.data.tip
    var count = this.data.count+1
    var value = this.data.value
    console.log(value)
    const isfalse = true
    
    if(value < random ){
      tip +="第" + count + "回合：" + value +",小了"
      
    }else if( value == random ){
      tip= "第" + count + "回合：" + value +",猜对了"
      isfalse = !isfalse
    }else{
      tip= "第" + count + "回合：" + value +",大了"
    }
    if( count == 8 ) isfalse =!isfalse
    this.setData({
      tip:tip,
      count:count,
      isGameStart:isfalse 
    })
  },
  reStart:function(){
    wx.navigateTo({
      url: '/pages/game/game',
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // this.initial()
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