import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql'

import ProjectType from './project'
import MailType from './conversation'

export default new GraphQLObjectType({
  name: 'User',
  description: 'user details',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    username: {
      type: GraphQLString,
      resolve: (data) => {
        return data.github.username
      }
    },
    timezone: {
      type: GraphQLString,
      resolve: (data) => {
        return data.communication.timezone
      }
    },
    language: {
      type: GraphQLString,
      resolve: (data) => {
        return data.communication.language
      }
    },
    mail: {
      type: new GraphQLList(MailType)
    },
    projects_as_owner: {
      type: new GraphQLList(ProjectType)
    },
    projects_as_member: {
      type: new GraphQLList(ProjectType)
    },
    projects_as_applicant: {
      type: new GraphQLList(ProjectType)
    }
  })
})
