import {
  GraphQLNonNull,
  GraphQLID as IDType
} from 'graphql'

import UserModel from '../../../models/user'
import ProjectModel from '../../../models/project'

export default {
  name: 'leave_project',
  description: 'Leave the project of which you are currently a member or applicant',
  type: IDType,
  args: {
    projectID: {
      type: new GraphQLNonNull(IDType)
    },
    userID: {
      type: new GraphQLNonNull(IDType)
    }
  },
  async resolve (root, params, options) {

    const { projectID, userID } = params
    const announceErr = (err, doc) => {
      if (err) {
        console.log(err)
      }
    }
    // remove the user from the project
    await ProjectModel.findByIdAndUpdate(
      projectID,
      {
        $pull: {
          'members': userID,
          'applicants': userID
        }
      },
      {new: true},
      announceErr
    )
    // remove the project from the user
    await UserModel.findByIdAndUpdate(
      userID,
      {
        $pull: {
          'projects_as_member': projectID,
          'projects_as_applicant': projectID
        }
      },
      {new: true},
      announceErr
    )
    // return project id
    return projectID
  }
}
