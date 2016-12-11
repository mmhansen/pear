import {
  GraphQLObjectType as ObjectType,
  GraphQLString     as StringType,
  GraphQLInt        as IntType
} from 'graphql'

export default new ObjectType({
  name: 'project',
  fields: () => ({
    language: {
      type: StringType
    },
    max_members: {
      type: IntType
    }
  })
})
