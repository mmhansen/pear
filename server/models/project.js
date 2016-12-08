import mongoose, { Schema } from 'mongoose'

/*
 * Define the project schema as two parts.
 * First is the participants
 * Second is the details of the project
 * This will allow us to expand the complexity of either without collision of names or too much confusion from 1d objects
 */
const userType = {
  type : Schema.Types.ObjectId,
  ref: 'User'
}

const messageBoard = new Schema({
  text: {
    type: String
  }
},
{timestamps: true})

const project = {
  owner: userType,
  members: [userType],
  applicants: [userType],
  messages: [messageBoard],
  title: { type: String },
  repository: { type: String },
  description: { type: String },
  tags: { type: [String] },
  status: { type: String, enum: ['Active', 'Abandoned'], default: 'Active', required: true },
  options: {
    language: { type: String },
    timezone: { type: String },
    max_members: { type: Number, default: 4 }
  }
}


// const requiredAttrs = ['title', 'description', 'skills', 'participants', 'date_start', 'owner', 'repo'];
// requiredAttrs.forEach((attr) => {
//   project[attr].required = true;
// })

const projectSchema = new Schema(project, { timestamps: true })
export default mongoose.model('Project', projectSchema)
