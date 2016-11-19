// locals
import User from '../models/user'
import Project from '../models/project'
//
export class Members {
  constructor({ projectId, owner }) {
    this._id = projectId
    this.owner = owner
    //find project with this id and see if owner matches, if not, return null
  }
  addParticipant({ userId }) {
    return
  }
  removeParticipant({ userId }) {
    return
  }
  addApplicant({ userId }) {
    return
  }
  removeApplicant({ userId }) {
    return
  }
}
