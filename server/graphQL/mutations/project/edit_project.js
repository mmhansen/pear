import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

import ProjectModel from '../../../models/project'
import ProjectInputType from '../../types/input_project'
import ProjectType from '../../types/project'

export default {
  description: 'edit an existing project',
  type: ProjectType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(ProjectInputType)
    }
  },
  async resolve (root, params, options, ast) {
    //const oldProject = await ProjectModel.findById(params._id).exec()
    //const modified = Object.assign({ })
    var args = ast.selectionSet.selections.map(selection => selection.name.value);
    console.log(args)

    return ProjectModel
      .findByIdAndUpdate(
        params._id,
        params.data,
      { new: true })
      .exec()
  }
}
