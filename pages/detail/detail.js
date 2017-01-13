Page({
  data:{
    // String1
    url : '',

  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    // String2
    console.log(options);
    this.setData({
      url : options.url
    })
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
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    // String8
  },
  onSaveImage: function(event){
      var mUrl = "";
      var _this = this;
      mUrl = event.currentTarget.dataset.url;
      console.log(mUrl);
      wx.showModal({
        content: '是否保存妹子照片',
        confirmText	: '保存',
        success: function(res){
          console.log('用户确认点击');
          if(res.confirm){//如果保存的话
              saveImage(mUrl);
              console.log(res.confirm);
              
          }//否则
            
            
        }
      })
  },
//    onSaveClick: function (event) {
//         var mUrl = "";
//         if (event.currentTarget.dataset.url != null)
//             mUrl = event.currentTarget.dataset.url;
//         console.log("download：" + mUrl);
//         saveImage(mUrl);
//     },


  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})

var _this;

function saveImage(mUrl){
  wx.downloadFile({
    url: mUrl,
    type: 'image', // 下载资源的类型，用于客户端识别处理，有效值：image/audio/video
    // header: {}, // 设置请求的 header
    success: function(res){
      // success
      console.log('保存成功')
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 2000
      })

      setTimeout(function(){
        wx.hideToast()
        wx.showToast({
                title: 'great',
                icon: 'success',
                duration: 2000
      })
      },2000)


      // wx.showToast({
      //           title: '成功',
      //           icon: 'success',
      //           duration: 2000
      // })
    },
    fail: function() {
      // fail
    },
    complete: function() {
      // complete
    }
  })
}



// onToastChanged: function (event) {
//         this.setData({ toastHidden: true });
//     },
//     // 长按
//     onlongclick: function () {
//         this.setData({ modalHidden: false });
//     },
//     // 保存
//     onSaveClick: function (event) {
//         var mUrl = "";
//         if (event.currentTarget.dataset.url != null)
//             mUrl = event.currentTarget.dataset.url;
//         console.log("download：" + mUrl);
//         saveImage(mUrl);
//     },
//     // 取消
//     onCancelClick: function (event) {
//         this.setData({ modalHidden: true });
//     },

/**
 * 保存图片
 */
// function saveImage(mUrl) {
//     that.setData({
//         hidden: false,
//         toastHidden: true,
//         modalHidden: true,
//         loadingText: "下载中..."
//     });
//     wx.downloadFile({
//         url: mUrl,
//         type: 'image',
//         success: function (res) {
//             console.log("download success");
//             that.setData({
//                 hidden: true,
//                 toastHidden: false,
//                 toastText: "恭喜你，图片保存成功"
//             });
//         },
//         fail: function (res) {
//             console.log("download fail");
//             that.setData({
//                 hidden: true,
//                 toastHidden: false,
//                 toastText: "保存失败，请稍后再试"
//             });
//         },
//         complete: function (res) {
//             console.log("download complete");
//         }
//     })
// }