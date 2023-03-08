// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    content:[{
      id:"1",
      photo:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F76ab00c0-8875-4ea5-9114-c091b31e660a%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1680283623&t=5d6c020662ca7806748d69ce15370d08",
      name:"哆啦美玲",
      text:"呜呜呜呜呜呜呜呜呜呜呜呜wuwu",
      time:"14:09"},
      {
        id:"2",
        photo:"https://img2.baidu.com/it/u=1516415125,3684210222&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
        name:"哆啦美玲",
        text:"呜呜呜呜呜呜呜呜呜呜呜呜wuwu",
        time:"14:09"},
      {
        id:"3",
        photo:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F8d21e2c7-26bc-43ad-86ff-779e5e2f85d9%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1680283623&t=fbb697e8eae75f1219db22cf849e935a",
        name:"哆啦美玲",
        text:"呜呜呜呜呜呜呜呜呜呜呜呜wuwu",
        time:"14:09"},
      { 
        id:"4",
        photo:"https://img2.baidu.com/it/u=357173241,3004569593&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
        name:"哆啦美玲",
        text:"呜呜呜呜呜呜呜呜呜呜呜呜wuwu",
        time:"14:09"},
      {
        id:"5",
        photo:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F413af0d1-1b55-47da-aeb5-314cee982c8a%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1680283623&t=229026aa5c4b8a8bd0a40831d81bd243",
        name:"哆啦美玲",
        text:"呜呜呜呜呜呜呜呜呜呜呜呜wuwu",
        time:"14:09"},
      {
        id:"6",
        photo:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F9120b7bf-334a-41d5-ad71-5c81bbadb12d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1680283623&t=c8ae9624615d2ce2d9d69a7076e2a70d",
        name:"哆啦美玲",
        text:"呜呜呜呜呜呜呜呜呜呜呜呜wuwu",
        time:"14:09"},
      {
        id:"7",
        photo:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fdd56408d-9698-4d45-8aaa-d69f93eaca4d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1680283623&t=0ac9ee8da98f291c18d077bae3e08b4a",
        name:"哆啦美玲",
        text:"呜呜呜呜呜呜呜呜呜呜呜呜wuwu",
        time:"14:09"},
      {
        id:"8",
        photo:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F19ccd8fb-66ee-4d36-b743-b0250be6476f%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1680283623&t=c6741b3c9cbdfffa1b158fe95787e510",
        name:"哆啦美玲",
        text:"呜呜呜呜呜呜呜呜呜呜呜呜wuwu",
        time:"14:09"},
        {
        id:"9",
        photo:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F8d21e2c7-26bc-43ad-86ff-779e5e2f85d9%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1680283623&t=fbb697e8eae75f1219db22cf849e935a",
        name:"哆啦美玲",
        text:"呜呜呜呜呜呜呜呜呜呜呜呜wuwu",
        time:"14:09"},
      {
        id:"10",
        photo:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F76ab00c0-8875-4ea5-9114-c091b31e660a%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1680283623&t=5d6c020662ca7806748d69ce15370d08",
        name:"哆啦美玲",
        text:"呜呜呜呜呜呜呜呜呜呜呜呜wuwu",
        time:"14:09"},
        {
        id:"11",
        photo:"https://www.ssfiction.com/wp-content/uploads/2020/10/20201016_5f898d3964472.jpg",
        name:"哆啦美玲",
        text:"呜呜呜呜呜呜呜呜呜呜呜呜wuwu",
        time:"14:09"},
      {
        id:"12",
        photo:"https://img.poptnc.com/wp-content/uploads/2020/07/1595142004-49459ca42ef69ae.jpg",
        name:"哆啦美玲",
        text:"呜呜呜呜呜呜呜呜呜呜呜呜wuwu",
        time:"14:09"},
        {
        id:"13",
        photo:"https://img13.360buyimg.com/n1/jfs/t1/125460/29/28892/484699/62c931d0Ea6a2158d/f1ec88b62f66cfc8.jpg",
        name:"哆啦美玲",
        text:"呜呜呜呜呜呜呜呜呜呜呜呜wuwu",
        time:"14:09"},
      { 
        id:"14",
        photo:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F15de1db5-d5d7-4d35-93e3-ae05da25564d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1680366400&t=85b231deaefd8a1e9d56babd19546f83",
        name:"哆啦美玲",
        text:"呜呜呜呜呜呜呜呜呜呜呜呜wuwu",
        time:"14:09"},

      
  ],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
 
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
