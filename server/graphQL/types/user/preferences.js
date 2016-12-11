import {
  GraphQLObjectType as ObjectType,
  GraphQLString     as StringType
} from 'graphql'


export default new ObjectType({
  name: 'preferences',
  fields: () => ({
    language: {
      type: StringType
    },
    timezone: {
      type: StringType
    }
  })
})
