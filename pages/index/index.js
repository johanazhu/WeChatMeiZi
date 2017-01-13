// js页面
var page = 1;

Page({
  data:{
    // String1
    meiData : []
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    // String2
    this.onPullDownRefresh();

  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    // String3
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    // String4
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    // String5
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    // String6
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    // String7
    var _this = this;
    wx.request({
      url: 'http://gank.io/api/data/%E7%A6%8F%E5%88%A9/20/1',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        // console.log(res);
        page = 1;

        
        for(var i =0; i<res.data.results.length; i++){
            var time = res.data.results[i].publishedAt.split('T')[0];
            // console.log(time);
             res.data.results[i].publishedAt = time;
        }

      


        _this.setData({
            meiData : res.data.results
        })
        console.log(res);
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
        wx.stopPullDownRefresh();
      }
    })
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    // String8
    var _this = this;
    page += 1;
    wx.request({
      url: 'http://gank.io/api/data/%E7%A6%8F%E5%88%A9/20/'+page,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(page);
        
        for(var i =0; i<res.data.results.length; i++){
            var time = res.data.results[i].publishedAt.split('T')[0];
            // console.log(time);
             res.data.results[i].publishedAt = time;
        }
        
        _this.setData({
          meiData : _this.data.meiData.concat(res.data.results)
        })

         
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },

  onClickImage: function(e){
      var url = e.currentTarget.dataset.url;
      wx.navigateTo({
        url: '../detail/detail?url=' + url
      })
  },

  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})