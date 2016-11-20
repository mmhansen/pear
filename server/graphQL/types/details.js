import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql'
import Options from './options'

export default new GraphQLObjectType({
  name: 'Details',
  description: 'Project details',
  fields: {
    title: {
      type: GraphQLString
    },
    repository: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    tags: {
      type: new GraphQLList(GraphQLString)
    },
    status: {
      type: GraphQLString
    },
    options: {
      type: Options
    }
  }
})
