import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

export default new GraphQLObjectType({
  name: 'User',
  description: 'user details',
  fields: {
    _id: {
      type: GraphQLID
    },
    username: {
      type: GraphQLString,
      resolve: (person) => {
        return person.github.username
      }
    },
    timezone: {
      type: GraphQLString,
      resolve: (person) => {
        return person.communication.timezone
      }
    },
    lanuage: {
      type: GraphQLString,
      resolve: (person) => {
        return person.communication.language
      }
    }
  }
})
