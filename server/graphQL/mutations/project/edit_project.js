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
    projectID: {
      type: new GraphQLNonNull(GraphQLString)
    },
    field: {
      type: new GraphQLNonNull(GraphQLString)
    },
    value: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  async resolve (root, params, options, ast) {
    const { projectID, field, value } = params
    
    const updatedProject = await ProjectModel
    .findByIdAndUpdate(
      projectID,
      {$set: { [field]: value }},
      { new: true }
    ).exec()

    return updatedProject._id
  }
}
