import mongoose, { Schema }  from 'mongoose'

const Messages = new Schema({
  from   : { type : Schema.Types.ObjectId, ref: 'user' },
  to     : { type : Schema.Types.ObjectId, ref: 'user' },
  body   : { type : String }
})

const Conversation = new Schema({
  _id: String,
  conversation: [Messages]
},{ timestamps: true })


export default mongoose.model('mail', Conversation)
