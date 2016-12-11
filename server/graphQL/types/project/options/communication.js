import {
  GraphQLObjectType as ObjectType,
  GraphQLString     as StringType
} from 'graphql'

export default new ObjectType({
  name: 'communication',
  fields: () => ({
    language: {
      type: StringType
    },
    timezone: {
      type: StringType
    }
  })
})
