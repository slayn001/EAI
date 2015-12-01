var mongoose = require('mongoose');
var Item = require('./models/Item.js');

mongoose.connect('mongodb://localhost/eai', function(){
  console.log('connected.');

  

});
