// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    banners: []
  },
  onLoad(options) {
   console.log(options)
  },
  loadBanners() {
    wx.request({
      url: 'https://www.fastmock.site/mock/d8961ad08d0a40d3b10c788e5f2dac2a/QQ-music/banners',
      success:(res) =>{
        console.log(res);
        const data = res.data.data;
        this.setData({
          banners: data
        })
      }
    })
  },
  gotoDetail(e) {
    const id = e.currentTarget.dataset.id;
    if(id){
      wx.navigateTo({
        url: `/pages/detail/detail?id=${id}`,
      })
    }
  }
})