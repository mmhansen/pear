import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

import ProjectModel from '../../../models/project'
import UserModel from '../../../models/user'
import ProjectDetailsInputType from '../../types/input_details'
import ProjectType from '../../types/project'


export default {
  description: 'create a new project',
  type: ProjectType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(ProjectDetailsInputType)
    }
  },
  async resolve (root, params, options) {
    const id = options.user._doc._id
    const User = await UserModel.findById(id).exec()

    const project = new ProjectModel({'details': params.data, 'participants.owner':User._id})
    const newProject = await project.save()

    return newProject
  }
}
