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
    // save the project
    const project = new ProjectModel(params.data)
    const newProject = await project.save()
    // add the project id to the user
    const id = options.user._doc._id
    UserModel.findByIdAndUpdate(
      id,
      {$push: { 'projects_as_owner': newProject._id } },
      {new: true},
      (err, user) => {}
    )

    return newProject._id
  }
}
