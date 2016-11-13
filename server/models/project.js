import mongoose, { Schema } from 'mongoose'

const project = {
  title: {
    type: String
  },
  description: {
    type: String
  },
  skills: {
    type: [String]
  },
  participants: {
    type: [String]
  },
  date_start: {
    type: String
  },
  date_complete: {
    type: String
  },
  repo: {
    type: String
  },
  owner: {
    type: String
  },
  mentor: {
    type: String
  }
}

const requiredAttrs = ['title', 'description', 'skills', 'participants', 'date_start', 'owner', 'repo'];
requiredAttrs.forEach((attr) => {
  project[attr].required = true;
})

const projectSchema = new Schema(project)
export default mongoose.model('project', projectSchema)
