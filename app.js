//app.js



App({
  onLaunch: function () {
    /*wx.setStorage({
      key:'Activity',
      data:dataObj.Activity,
      success:function(res){

      },
      fail:function(res){

      }

    })*/
    
    var storageData=wx.getStorageSync('Activity');
    
    if(!storageData){
      var dataObj=require("data/data.js");
      wx.setStorageSync('Activity',dataObj.Activity);
      wx.clearStorageSync();
    }
  }
  

    // 登录

    // 获取用户信息
   

})