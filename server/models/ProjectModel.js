import mongoose, { Schema } from 'mongoose'

/*
 * Subtypes for project
 */
const UserType = {
  type : Schema.Types.ObjectId,
  ref: 'User'
}

const MessageType = new Schema({
  text: String
}, {
  timestamps: true
})

/**
 * Project Schema
 *
 * party:   the participants in a project
 * spec:    the specification
 * board:   information for project members about project status
 * options: non-required fields
 */
const project = new Schema({
  party: {
    owner: UserType,
    members: [UserType],
    applicants: [UserType]
  },
  spec: {
    title: String,
    repository: String,
    description: String,
    tags: [String]
  },
  board: {
    messages: [MessageType],
    status: String
  },
  options: {
    communication: {
      language: String,
      timezone: String
    },
    project: {
      language: String
      max_members: Number
    }
  }
}, {
  timestamps: true
})

// create 'Projects' collection
export default mongoose.model('Project', projectSchema)
