import mongoose, { Schema } from 'mongoose'

/*
 * Subtypes for inbox
 */
const ConversationType = {
  type: String,
  ref: 'Conversation'
}

const conversation = new Schema ({
  data: ConversationType,
  read: Boolean
})

/*
 * Subtypes for playground
 */
const ProjectType = {
  type: Schema.Types.ObjectId,
  ref: 'Project'
}

const project = new Schema({
  data: ProjectType,
  role: String
})


/**
 * User Schema
 *
 * Github:         unique identifiers
 * Communication:  preferences
 * Inbox:          my conversations
 * Playground:     my projects
 *
 */
const User = new Schema({
  github: {
    _id: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true  },
    url: { type: String }
  },
  preferences: {
    timezone: { type: String, default: "0:00" },
    language: { type: String, default: "English" }
  },
  inbox: [conversation],
  playground: [project]
})

/*
 * Create 'Users' collection
 */

export default mongoose.model('User', User)
