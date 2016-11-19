import mongoose, { Schema } from 'mongoose'
var findOrCreate = require('mongoose-findorcreate')

const User = new Schema({
  github: {
    _id: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true  },
    url: { type: String }
  },
  communication: {
    timezone: { type: String, default: "0" },
    language: { type: String, default: "English" }
  }
})


User.plugin(findOrCreate);
export default mongoose.model('user', User)
