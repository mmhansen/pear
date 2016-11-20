import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString
} from 'graphql'
import Participants from './participants'
import Details from './details'

export default new GraphQLObjectType({
  name: 'Project',
  fields: {
    _id: {
      type: GraphQLID
    },
    participants: {
      type: Participants
    },
    details: {
      type: Details
    }
  }
})
