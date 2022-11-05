const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    default:null
  },
  email:{
    type:String,
    unique:true
  },
  password:{
    type:String
  },
  token:{
    type:String
  }
}, {
  timestamps: true,
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;