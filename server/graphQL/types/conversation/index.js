import {
  GraphQLObjectType as ObjectType,
  GraphQLID         as IDType,
  GraphQLBoolean    as BoolType,
  GraphQLString     as StringType
} from 'graphql'

// subtypes
import MessageType from './message'

// conversation type
export default new ObjectType({
  name: 'conversation',
  fields: () => ({
    _id: {
      type: IDType
    },
    read: {
      type: BoolType
    },
    messages: {
      type: new ListType(MessageType)
    }
  })
})
