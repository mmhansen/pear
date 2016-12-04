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

export default new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    owner: {
      type: GraphQLID
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
