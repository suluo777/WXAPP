App({
  // 生命周期函数
  // 小程序初始化完成后，会执行的生命周期函数
  onLaunch: function () {
    console.log('小程序初始化完成: onLaunch')
    // 异步调用
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
      }
    })
  },
  // 小程序界面显示出来之后会执行的生命周期函数 
  onShow: function (options) {
    console.log('界面显示出来: onShow')
  },
  // 小程序界面隐藏之后会执行的生命周期函数
  onHide: function () {

  },
  // 小程序发生一些错误
  onError: function (msg) {

  }
})