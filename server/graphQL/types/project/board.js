import {
  GraphQLObjectType as ObjectType,
  GraphQLList       as ListType,
  GraphQLString     as StringType,
  GraphQLID         as IDType
} from 'graphql'

// subtype for messages
const MessageType = new ObjectType({
  name: 'party_message',
  fields: () => ({
    text: {
      type: StringType
    },
    sent: {
      type: StringType,
      resolve: (project) => {
        // calculate age based on
        // project.createdAt
        return "10"
      }
    }
  })
})

// Board Type
export default new ObjectType({
  name: 'board',
  fields: () => ({
    messages: {
      type: new ListType(MessageType),
      resolve: (project) => project.board.messages
    },
    status: {
      type: StringType,
      resolve: (project) => project.board.status
    },
    age: {
      type: StringType,
      resolve: (project) => {
        // calculate age based on
        // project.createdAt
        return "10"
      }
    }
  })
})
