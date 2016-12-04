import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} from 'graphql'

export default new GraphQLObjectType({
  name: 'Options',
  description: 'Project Options',
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
