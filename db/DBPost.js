

class DBPost {


  getAccountData() {
    var Account = wx.getStorageSync("Account");
    if (!Account) {
      Account = require('../data/data.js').Account;
      wx.setStorageSync("Account", Account);
    }
    return Account;
  }

  getActivityData() {
    var Activity = wx.getStorageSync("Activity");
    if (!Activity) {
      Activity = require('../data/data.js').Activity;
      wx.setStorageSync("Activity", Activity);
    }
    
    return Activity;
  }

  AddData(data) {
    var Activity=this.getActivityData();
    
    Activity.push(data);
    console.log(Activity);
    console.log(data);
    wx.setStorageSync('Activity', Activity);

  }

  
}
export { DBPost }