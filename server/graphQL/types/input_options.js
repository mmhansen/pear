import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql'

export default new GraphQLInputObjectType({
  name: 'project_options',
  description: 'project option input',
  fields: {
    language: {
      type:  new GraphQLNonNull(GraphQLString)
    },
    timezone: {
      type:  new GraphQLNonNull(GraphQLString)
    },
    max_members: {
      type:  new GraphQLNonNull(GraphQLInt)
    }
  }
})
