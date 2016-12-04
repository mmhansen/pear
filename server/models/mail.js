import mongoose, { Schema }  from 'mongoose'

const Messages = new Schema({
  from   : { type : Schema.Types.ObjectId },
  to     : { type : Schema.Types.ObjectId },
  body   : { type : String }
})

const UserType = {
  type : Schema.Types.ObjectId,
  ref: 'User'
}

const Conversation = new Schema({
  _id: String,
  parties: [UserType],
  conversation: [Messages]
},{ timestamps: true })


export default mongoose.model('Mail', Conversation)
