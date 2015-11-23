var mongoose = require('mongoose');

var ItemSchema = {

  train: Number
  ,eai: String
  ,appName: String
  ,projectManager: String
  ,managerEmail:String
  ,testerEmail:String
  ,server: String
  ,environment: String
  ,cell: String
  ,guideSignOff: Boolean
  ,envSignOff: Boolean
  ,id: String
  ,tgtConvDate: String
  ,envSignOffDate: String
  ,guideSignOffDate: String
  ,cellOwner: Boolean
};

var Item = mongoose.model('Item',ItemSchema, "Items");

module.exports = Item;
