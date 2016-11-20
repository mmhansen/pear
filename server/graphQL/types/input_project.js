import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

import detailType from './input_details'
import participantsType from './input_participants'

export default new GraphQLInputObjectType({
  name: 'project_input',
  description: 'create or update existing project',
  fields: {
    participants: {
      description: 'participants details',
      type: participantsType
    },
    details: {
      description: 'project details',
      type: detailType
    }
  }
})
