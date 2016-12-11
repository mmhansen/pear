import mongoose, { Schema }  from 'mongoose'



/*
 * Conversation Subtypes
 */
const UserType = {
  type: Schema.Types.ObjectId,
  ref: 'User'
}
// timestamps for when mail is sent
const message = new Schema({
  from: UserType,
  body: String
}, {
  timestamps: true
})


/**
 * Conversation Schema
 *
 * _id:      sent from client
 * messages: an array of message history
 */
const conversation = new Schema({
  _id: String,
  messages: [message]
})

// create 'Conversations' collection
export default mongoose.model('Conversation', conversation)
