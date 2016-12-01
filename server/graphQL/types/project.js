import {
  GraphQLObjectType,
  GraphQLID
} from 'graphql'

import Participants from './participants'
import Details from './details'

export default new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    participants: {
      type: Participants
    },
    details: {
      type: Details,
      resolve: (project) => project
    }
  })
})
