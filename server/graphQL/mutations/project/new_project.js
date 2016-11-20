import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

import ProjectModel from '../../../models/project'
import ProjectInputType from '../../types/input_project'
import ProjectType from '../../types/project'

export default {
  description: 'create a new project',
  type: ProjectType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(ProjectInputType)
    }
  },
  async resolve (root, params, options) {
    const project = new ProjectModel(params.data)
    const newProject = await project.save()

    return newProject
  }
}
