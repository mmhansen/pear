import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt as IntType,
  GraphQLID
} from 'graphql'

import moment from 'moment'
import Options from './options'
import ProjectStatus from './status_enum'
import UserType from './user'

export default new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    owner: {
      type: UserType
    },
    members: {
      type: new GraphQLList(UserType)
    },
    applicants: {
      type: new GraphQLList(UserType)
    },
    count: {
      type: IntType,
      resolve: (project) => {
        return project.members + 1
      }
    },
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
      type: ProjectStatus
    },
    age: {
      type: IntType,
      resolve: (project) => {
        let age = moment(project.createdAt)
        let now = moment(new Date())

        return now.diff(age, 'days')
      }
    },
    options: {
      type: Options
    }
  })
})
