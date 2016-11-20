import mongoose, { Schema } from 'mongoose'

const project = {
  _id: { type: String },
  participants: {
    owner: { type: Schema.Types.ObjectId, ref: 'user' },
    members: { type: [Schema.Types.ObjectId], ref: 'user' },
    applicants: { type: [Schema.Types.ObjectId], ref: 'user' }
  },
  details: {
    title: { type: String },
    repository: { type: String },
    description: { type: String },
    tags: { type: [String] },
    status: { type: String, enum: ['Active', 'Abandoned'], default: 'Active' },
    options: {
      language: { type: String },
      timezone: { type: String },
      max_members: { type: Number, default: 4 }
    }
  }
}


// const requiredAttrs = ['title', 'description', 'skills', 'participants', 'date_start', 'owner', 'repo'];
// requiredAttrs.forEach((attr) => {
//   project[attr].required = true;
// })

const projectSchema = new Schema(project, { timestamps: true })
export default mongoose.model('project', projectSchema)
