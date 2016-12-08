import {
  GraphQLNonNull as NonNull,
  GraphQLID as IDType
} from 'graphql'

import UserModel from '../../../models/user'
import ProjectModel from '../../../models/project'

export default {
  name: 'approve_member',
  description: 'appove a project applicant',
  type: IDType,
  args: {
    projectID: {
      type: new NonNull(IDType)
    },
    userID: {
      type: new NonNull(IDType)
    }
  },
  async resolve (root, params, options) {
    const { projectID, userID } = params
    const announceErr = (err) => { if (err) {console.log(err)} }
    // update the user by moving projectID from applicant to member
    UserModel.findByIdAndUpdate(
      userID,
      {
        $push: {
          'projects_as_member': projectID
        },
        $pull: {
          'projects_as_applicant': projectID
        }
      },
      {new: true},
      announceErr
    )
    // update the project by moving userID from applicant to member
    ProjectModel.findByIdAndUpdate(
      projectID,
      {
        $push: {
          'members': userID
        },
        $pull: {
          'applicants': userID
        }
      },
      {new: true},
      announceErr
    )

    // return project ID
    return projectID
  }
}
