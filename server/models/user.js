import mongoose, { Schema } from 'mongoose'
/*
 * The users consists of information from github,
 * there is also a communication preference for later improved matching of individuals
 */
const ProjectType = {
  type: Schema.Types.ObjectId,
  ref: 'Project'
}
const MailType = {
  type: String,
  ref: 'Mail'
}
const User = new Schema({
  github: {
    _id: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true  },
    url: { type: String }
  },
  communication: {
    timezone: { type: String, default: "0:00" },
    language: { type: String, default: "English" }
  },
  mail: [MailType],
  projects_as_owner: [ProjectType],
  projects_as_member: [ProjectType],
  projects_as_applicant: [ProjectType]
})



export default mongoose.model('User', User)
