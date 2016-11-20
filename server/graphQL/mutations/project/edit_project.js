import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLString
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
      type: new GraphQLNonNull(GraphQLString)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(ProjectInputType)
    }
  },
  resolve (root, params, options, ast) {
    return ProjectModel
    .findByIdAndUpdate(
      params._id,
      params.data,
      { new: true }
    ).exec((err, t) =>  console.log(t, err))
  }
}
