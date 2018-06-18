import{DBPost}from'../../db/DBPost.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
     array1:["运动","饮食","旅行","其他"],
     array2:[2,3,4,5,6,7,8],
     Status: 2,
     Category: "sport",
     Theme: "原点打篮球",
     Picture: "/images/icon/wx_app_news.png",
     Leader: "贾二狗",
     StartDate: "2018-00-00",
     StartTime: "12:00",
     EndDate: "2018-00-00",
     EndTime: "12:00",
     Site: { name: "电子科技大学沙河校区", address: "一环东一段", latitude: 0, longtitude: 10 },
     PeopleNum: 5,
     Detail: "寻一面容姣好者一起约球！",
     Comments: "滚"
  },
  
 /*  bindTextAreaBlur: function (e) {
    console.log(e.detail.value),
      Theme : e.detail.value
  },*/

  bindNameBlur: function (e) {
    this.setData({
      Theme: e.detail.value
    })

  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
 
    })
  }, 

  bindStartDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    
    this.setData({
      StartDate : e.detail.value
    })
  },

  bindStartTimeChange: function (e) {
    console.log("谁哦按")
    this.setData({
      StartTime: e.detail.value
    })
  },

  bindEndDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
  
    this.setData({
      EndDate: e.detail.value,

    })
  },

  bindEndTimeChange: function (e) {
    console.log("谁哦按")
    this.setData({
      EndTime: e.detail.value
    })
  }, 

   bindNumberPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)

    this.setData({
      index2: e.detail.value,

    })
  },


   bindDetailBlur: function (e) {
     this.setData({
       Detail: e.detail.value
     })
   },


  formSubmit: function (e) {
    var dbPost=new DBPost();
    var Activity=new Array;
    var that=this;
    
    console.log(that.data.StartDate);

    var A=
    {
      Theme : that.data.Theme,
      StartDate : that.data.StartDate,
      StartTime : that.data.StartTime,
      EndDate : that.data.EndDate,
      EndTime : that.data.EndTime,
      PeopleNum : that.data.PeopleNum  
       };
    

    
    dbPost.AddData(A);
    
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













 /*Activity:[
      {
        Status: 2,
        Category: "sport",
        Theme: "原点打篮球",
        Picture: "/images/icon/wx_app_news.png",
        Leader: "贾二狗",
        StartDate:"2018-00-00",
        EndDate:"2018-00-00",
        Site: { name: "电子科技大学沙河校区", address: "一环东一段", latitude: 0, longtitude: 10 },
        PeopleNum: 5,
        Detail: "寻一面容姣好者一起约球！",
        Comments: "滚"
    }],*/