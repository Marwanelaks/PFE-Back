const mongoose = require("mongoose")

const users = new mongoose.Schema({
  Name: {
    type: String
  },
  Email: {
    type: String
  },
  Password: {
    type: String
  },
  ProfilePicture: {
    type: String 
  },
  id:{
    type: String 
  }
}) 
 

const UsersModel = mongoose.model("users", users)
module.exports = UsersModel

