// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
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
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createInnerAudioContext();
    this.audioCtx.autoplay = true;
    this.audioCtx.src = 'http://antiserver.kuwo.cn/anti.s?rid=MUSIC_56209792&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3'
    this.audioCtx.loop = true
    this.audioCtx.seek = 50
    this.audioCtx.stop()
    this.audioCtx.onPlay(() => {
      console.log('开始播放')
    })

    // setTimeout(() => {
    //   this.audioCtx.stop()
    //   this.audioCtx.seek = 50
    //   this.audioCtx.play()
    //   console.log('重新播放')
    // }, 30 * 1000);
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
