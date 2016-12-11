import {
  GraphQLObjectType as ObjectType,
  GraphQLString     as StringType
} from 'graphql'


export default new ObjectType({
  name: 'preferences',
  fields: () => ({
    communication: {
      type: StringType
    },
    timezone: {
      type: StringType
    }
  })
})
