import {
  GraphQLObjectType,
  GraphQLID as IDType,
  GraphQLString as StringType
} from 'graphql'

export default new GraphQLObjectType({
  name: 'mail',
  fields: {
    to: {
      type: IDType
    },
    from: {
      type: IDType
    },
    body: {
      type: StringType
    }
  }
})
