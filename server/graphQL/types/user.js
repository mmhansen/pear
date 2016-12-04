import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql'



export default new GraphQLObjectType({
  name: 'User',
  description: 'user details',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    username: {
      type: GraphQLString,
      resolve: (data) => {
        return data.github.username
      }
    },
    timezone: {
      type: GraphQLString,
      resolve: (data) => {
        return data.communication.timezone
      }
    },
    language: {
      type: GraphQLString,
      resolve: (data) => {
        return data.communication.language
      }
    }
  })
})
