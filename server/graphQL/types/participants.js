import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt as IntType
} from 'graphql'
import User from './user'

export default new GraphQLObjectType({
  name: 'Participants',
  description: 'Fields for the participants on a project',
  fields: {
    owner: {
      type: User,
      resolve: (participants) => {
        
        return participants.owner
      }
    },
    members: {
      type: new GraphQLList(User)
    },
    applicants: {
      type: new GraphQLList(User)
    },
    count: {
      type: IntType,
      resolve: (participants) => {
        return participants.members.length + 1;
      }
    }
  }
})
