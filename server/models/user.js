import mongoose, { Schema } from 'mongoose'
var findOrCreate = require('mongoose-findorcreate')

const User = new Schema({
  email: {
    type: String
  },
  github: {
    _id: { type: String },
    username: { type: String }
  },
  communication: {
    timezone: { type: String, default: "0" },
    language: { type: String, default: "English" }
  }
})


User.plugin(findOrCreate);
export default mongoose.model('user', User)
