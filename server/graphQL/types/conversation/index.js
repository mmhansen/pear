import {
  GraphQLObjectType as ObjectType,
  GraphQLID         as IDType,
  GraphQLBoolean    as BoolType,
  GraphQLString     as StringType,
  GraphQLList       as ListType
} from 'graphql'

// subtypes
import MessageType from './message'

// conversation type
export default new ObjectType({
  name: 'conversation',
  fields: () => ({
    _id: {
      type: IDType,
      resolve: (message) => message.data._id
    },
    read: {
      type: BoolType
    },
    messages: {
      type: new ListType(MessageType),
      resolve: (message) => message.data.messages
    }
  })
})
