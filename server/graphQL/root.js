// locals
import User from '../models/user'
import Project from '../models/project'
import * as classes from './classes'
//
const tags = {
    scripting_languages: [],
    communication_languages: [],
    timezones: [],
    project_tags: []
}
//
export const root = {
  tags: () => tags,
  me: ({ id }) => {
    return new Promise ((resolve, reject) => {
      User.findById(id, (err, a) => {
        const user = {}
        user._id = a._id
        user.username = a.github.username
        user.communication = a.communication
        resolve(user)
      })
    })
  },
  oneProject: ({ id }) => {
    return new Promise ((resolve, reject) => {
      Project
        .findById(id)
        .populate()
        .exec((err, project) => {
          reslolve(project)
        })
    })
  },
  activeProjects: () => {
    return new Promise ((resolve, reject) => {
      Project
        .find({ 'details.status': 'Active' })
        .populate('owner')
        .exec((err, projects) => resolve(projects))
    })
  },
  project: ({ id, project } ) => {
    return new Promise((resolve, reject) => {
      let {
        participants: { owner },
        details: {
            title, repository, description, tags, status, options: {language, timezone, max_members }
        }
      } = project

      Project.findByIdAndUpdate(
        id,
        project,
        { new: true, upsert: true, setDefaultsOnInsert: true })
        .populate('participants.owner participants.members participants.applicants')
        .exec((err, p) => {
          //p.participants.owner.username = p.participants.owner.github.username
          resolve(p)
        })
    })
  },
  members: ({ projectId, owner }) => {
    return new classes.Members({projectId, owner})
  },
  id: () => {
    return new Date().valueOf();
  }
}
