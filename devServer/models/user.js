

var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var userdataSchema = new Schema({  
  name:     { type: String },
  age:      { type: Number },
  country:  { type: String },
  sex:   { type: String },
  dateCreated:  {type: Date}

});

module.exports = mongoose.model('User', userdataSchema); 