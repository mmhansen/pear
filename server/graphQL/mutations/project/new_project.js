import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

import ProjectModel from '../../../models/project'
import UserModel from '../../../models/user'
import ProjectDetailsInputType from '../../types/inputs/input_details'


export default {
  description: 'create a new project',
  type: GraphQLID,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(ProjectDetailsInputType)
    }
  },
  async resolve (root, params, options) {
    const userID = options.user._doc._id
    // save the project
    params.data.owner = userID;
    const project = new ProjectModel(params.data)
    const newProject = await project.save()
    // add the project id to the user

    UserModel.findByIdAndUpdate(
      userID,
      {$push: { 'projects_as_owner': newProject._id } },
      {new: true},
      (err, user) => {}
    )

    return newProject._id
  }
}
