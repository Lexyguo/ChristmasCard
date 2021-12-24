// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    safeBottom: 0
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
    this.audioCtx.src = '/media/All I Want For Christmas Is You - Mariah Carey.mp3'
    this.audioCtx.loop = true
    this.audioCtx.seek = 50
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
    const { safeArea: {height,top}, screenHeight} = wx.getSystemInfoSync()
    if ((height+top) == screenHeight) {
      this.setData({
        safeBottom: 110
      })
    }
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
