// // pages/index/begin.js
// Page({

 
//     data: {
       
//     },
//     initial:function(){
//         this.setData({
//             answer:Math.round(Math.random()*100),
//             count:0,
//             tip:'',
//             x:-1,
//             gamestart:true
//         });
//         console.log("答案是："+this.data.answer);
//     },
//     getnum:function(e){
//         this.setData({
//             x:e.detail.value
//         });
//     },
//     guess:function(){
//         let x=this.data.x;
//         this.setData({x:-1});
//         if(x<0){
//             wx.showToast({
//               title: '不能小于0',
//             });
//         }else if(x>100){
//             wx.showToast({
//               title: '不能大于100',
//             });
//         }else{
//             let count = this.data.count+1;
//             let tip = this.data.tip;
//             let answer = this.data.answer;
//             if(x == answer){
//                 tip += '\n第' + count +'回合：'+ x +',猜对了！';
//                 this.setData({gamestart:false});
//             }else if(x>answer){
//                 tip += '\n第' + count +'回合：'+ x +',大了！';
//             }else{
//                 tip += '\n第' + count +'回合：'+ x +',小了！';
//             }
//             if(count == 8){
//                 tip +='\n游戏结束';
//                 this.setData({gamestart:false});
//             }
//             this.setData({
//                 tip:tip,
//                 count:count
//             });
//         }
//     },
//     restartgame:function(){
//         this.initial();
//     },
//     onLoad:function(options){
//         this.initial();
//     }
// })
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
    let value = this.data.value
    // if(value > 100 || value <0){
    //   wx.showToast({
    //     title: '输入错误',
    //   })
    // }
    console.log(value,this.data.res)
  },
  submit:function(){
    var random = this.data.res
    let tip = this.data.tip
    var count = this.data.count+1
    var value = this.data.value
    console.log(value)
    let isfalse = true
    if(value > 100 || value <0){
      wx.showToast({
        title: '输入错误',
      })
      return
    }
    if(value < random ){
      tip +="\n第" + count + "回合：" + value +",小了"
      
    }else if( value == random ){
      tip += "\n第" + count + "回合：" + value +",猜对了"
      isfalse = !isfalse
    }else{
      tip += "\n第" + count + "回合：" + value +",大了"
    }
    if( count == 8 ) isfalse =!isfalse
    this.setData({
      tip:tip,
      count:count,
      isGameStart:isfalse 
    })
  },
  restartgame:function(){
    this.setData({
      isGameStart:"true",
      tip:'',
      value: -1,
      title:'',
      count:0,
      res:(Math.random()*100).toFixed(0)
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