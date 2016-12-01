import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt as IntType
} from 'graphql'

import moment from 'moment'
import Options from './options'
import ProjectStatus from './status_enum'

export default new GraphQLObjectType({
  name: 'Details',
  description: 'Project details',
  fields: {
    title: {
      type: GraphQLString,
      resolve: ({details}) => details.title
    },
    repository: {
      type: GraphQLString,
      resolve: ({details}) => details.repository
    },
    description: {
      type: GraphQLString,
      resolve: ({details}) => details.description
    },
    tags: {
      type: new GraphQLList(GraphQLString),
      resolve: ({details}) => details.tags
    },
    status: {
      type: ProjectStatus,
      resolve: ({details}) => details.status
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
      type: Options,
      resolve: ({details}) => details.options
    }
  }
})
