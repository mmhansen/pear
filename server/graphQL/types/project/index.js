import {
  GraphQLObjectType as ObjectType,
  GraphQLID         as IDType,
  GraphQLString     as StringType
} from 'graphql'
// subtypes
import OptionType from './options'
import SpecType from './spec'
import BoardType from './board'
import PartyType from './party'

// Project type
export default new ObjectType({
  name: 'project',
  fields: () => ({
    _id: {
      type: IDType
    },
    role: {
      type: StringType
    },
    party: {
      type: PartyType
    },
    spec: {
      type: SpecType
    },
    board: {
      type: BoardType,
      resolve: (project) => project
    },
    options: {
      type: OptionType
    }
  })
})
