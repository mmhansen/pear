import {
  GraphQLObjectType as ObjectType,
  GraphQLString     as StringType
} from 'graphql'


// message type
export default new ObjectType({
  name: 'message',
  fields: () => ({
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
