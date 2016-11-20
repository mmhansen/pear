import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt
} from 'graphql'

export default new GraphQLInputObjectType({
  name: 'project_options',
  description: 'project option input',
  fields: {
    language: {
      type: GraphQLString
    },
    timezone: {
      type: GraphQLString
    },
    max_members: {
      type: GraphQLInt
    }
  }
})
