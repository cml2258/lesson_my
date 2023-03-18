// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    radioItems:[
      {name:'大一',value:"大一"},
      {name:'大二',value:"大二"},
      {name:'大三',value:"大三"},
      {name:'大四',value:"大四"}
    ],
    checkBoxItems:[
      {value:"社交"},
      {value:"网购"},
      {value:"学习"},
      {value:"其他"}
    ],
    radioCheck:'',
    checkItem:[],
    time:'',
    use:"",
    views:""
  },
  onSubmit:function(e){
    console.log(e.detail.value)
    let{radioCheck,checkItem,time,use,views} = e.detail.value
    console.log(checkItem)
    this.setData({
      radioCheck:radioCheck,
      checkItem:checkItem,
      time:time,
      use:use,
      views:views
    })
    console.log("你选择的现在大几：" + radioCheck)
    console.log("你选择使用手机的最大用途是：" , this.data.checkItem)
    console.log("你选择的每天使用手机的时间是：" +this.data.time+"小时")
    console.log("你选择的是否使用过微信小程序："+ this.data.use)
    console.log("你输入的对小程序发展前途的看法是" +this.data.views)
 },
 onReset:function(e){
  this.setData({
    radioCheck:'',
    checkItem:'',
    time:0,
    use:"",
    views:""
  })
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
