
import { DBPost } from '../../db/DBPost.js';
Page({

  /**
   * 页面的初始数据
   */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.dbPost = new DBPost();
    var activity,
      sport = new Array(1), sports = new Array(1);
     activity = this.dbPost.getActivityData();
     var i=0,j=0;
    sport.pop();
    
    /* for (; i < activity.length; i++) {
       if (activity[i].Category == "sport" && activity[i].Status == 2) {
         {
            sport.push(activity[i])

         }

       }*/



  /*  var EARTH_RADIUS=638137.0;
    var PI=Math.PI;

    function getRad(d){
      return d*PI/180.0;
    }
    
   function getGreatDistance(lat1,lng1,lat2,lng2){
      var radLat1=getRad(lat1);
      var radLat2=getRad(lat2);
      
      var a = radLat1 - radLat2;
      var b = getRad(lng1) - getRad(lng2);

      var s=2*Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2)+Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
      s = s * EARTH_RADIUS;
      s=Math.round(s*10000)/10000.0;
      return s;
   }
  
   wx.getLocation({
     type: 'wgs84',
     success: function (res) {
        latitude = res.latitude
        longitude = res.longitude
       // speed = res.speed
        //accuracy = res.accuracy
        console.log("getlocation success")
     },
     fail:function(res)
     {
       console.log("getlocation failed")
     },
     complete: function (res) {
       console.log("getlocation complete")
     }
   })

  sports.pop();
  var a=sport[i].Site.latitude;
  var b=sport[i].Site.longtitude;
  var c=latitude;
  var d=longitude;
  for(i=0;i<sport.length;i++)
  {
    sports.push(getGreatDistance(sport[i].Site.latitude, sport[i].Site.longtitude, latitude, longitude));
  }
  
  var j;
  for (j = o; j < sports.length; j++)
  {
   for (i = j; i < sports.length; i++)
    {
     var k=99999999999999;
     var l,s;
     if(sports[i]<k)
     {
       l=i;
     }
   }
   s=sports[j];
   sports[j]=l;
   sports[l]=s;
  }
    
  s=0;
  for(i=0;i<sports.length;i++)
  {
    s=sports[i];
    sports[i]=sport[s];
  }
*/
    this.setData(
      {
        Activity:activity
      }
   )
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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