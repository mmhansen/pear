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
      User.findById(id, (err, user) => {
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
        .find({ status: 'Active' })
        .populate('owner')
        .exec((err, projects) => resolve(projects))
    })
  },
  project: (
    {id, project}
  ) => {
    return new Promise((resolve, reject) => {
      Project.findByIdAndUpdate(
        id,
        project,
        { new: true, upsert: true },
        (err, t) => resolve(t)
      )
    })
  },
  members: ({projectId, owner }) => {
    return new classes.Members({projectId, owner})
  }
}
