import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLString
} from 'graphql'

import ProjectModel from '../../../models/project'

export default {
  description: 'edit an existing project',
  type: GraphQLID,
  args: {
    _id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    field: {
      type: new GraphQLNonNull(GraphQLString)
    },
    data: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  async resolve (root, params, options, ast) {
    const { _id, field, data } = params
    const updatedProject = await ProjectModel
    .findByIdAndUpdate(
      _id,
      {$set: { [field]: data }},
      { new: true }
    ).exec()

    return updatedProject._id
  }
}
