import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLID,
  GraphQLList
} from 'graphql'

import OptionsType from './input_options'

export default new GraphQLInputObjectType({
  name: 'project_details',
  descritions: 'fields to create or update project details',
  fields: {
    owner: {
      type: new GraphQLNonNull(GraphQLID)
    },
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    description: {
      type: new GraphQLNonNull(GraphQLString)
    },
    tags: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString))
    },
    status: {
      type: new GraphQLNonNull(GraphQLString)
    },
    repository: {
      type: GraphQLString
    },
    options: {
      type: new GraphQLNonNull(OptionsType)
    }
  }
})
