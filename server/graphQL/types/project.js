import {
  GraphQLObjectType,
  graphQLNonNull,
  GraphQLString,
  GraphQLID
} from 'graphql'
import Participants from './participants'
import Details from './details'

export default new GraphQLObjectType({
  name: 'Project',
  fields: {
    _id: {
      type: GraphQLString
    },
    participants: {
      type: Participants
    },
    details: {
      type: Details
    }
  }
})
