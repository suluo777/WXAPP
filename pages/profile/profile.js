// pages/progile/profile.js
Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'pages/profile/profile'
    }
  },

  data: {
    background: ['/assets/tabbar/lover_1.jpg','/assets/tabbar/lover_2.jpg', '/assets/tabbar/lover_3.jpg','/assets/tabbar/lover_4.jpg', '/assets/tabbar/lover_5.jpg','/assets/tabbar/lover_3.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})