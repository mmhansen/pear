import mongoose, { Schema } from 'mongoose'
var findOrCreate = require('mongoose-findorcreate')

const User = new Schema({
  email: {
    type: String
  },
  githubId: {
    type: String
  }
})

User.plugin(findOrCreate);


export default mongoose.model('user', User)
