import {
  GraphQLObjectType as ObjectType,
  GraphQLString     as StringType,
  GraphQLID         as IDType
} from 'graphql'


// message type
export default new ObjectType({
  name: 'message',
  fields: () => ({
    _id: {
      type: IDType
    },
    from: {
      type: StringType,
      resolve: (message) => message.from.github.username
    },
    age: {
      type: StringType,
      resolve: (message) => {
        
        return "10"
      }
    },
    body: {
      type: StringType
    }
  })
})
