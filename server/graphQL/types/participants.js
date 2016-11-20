import {
  GraphQLObjectType,
  GraphQLList
} from 'graphql'
import User from './user'

export default new GraphQLObjectType({
  name: 'Participants',
  description: 'Fields for the participants on a project',
  fields: {
    owner: {
      type: User
    },
    members: {
      type: new GraphQLList(User)
    },
    applicants: {
      type: new GraphQLList(User)
    }
  }
})
