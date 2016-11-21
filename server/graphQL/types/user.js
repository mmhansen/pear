import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql'

import Project from './project'

export default new GraphQLObjectType({
  name: 'User',
  description: 'user details',
  fields: () => ({
    _id: {
      type: GraphQLID,
      resolve: (data) => {
        return data.user._id
      }
    },
    username: {
      type: GraphQLString,
      resolve: (data) => {
        return data.user.github.username
      }
    },
    timezone: {
      type: GraphQLString,
      resolve: (data) => {
        return data.user.communication.timezone
      }
    },
    lanuage: {
      type: GraphQLString,
      resolve: (data) => {
        return data.user.communication.language
      }
    },
    projects: {
      type: new GraphQLList(Project)
    }
  })
})
