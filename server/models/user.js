import mongoose, { Schema } from 'mongoose'
/*
 * The users consists of information from github,
 * there is also a communication preference for later improved matching of individuals
 */
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



export default mongoose.model('user', User)
