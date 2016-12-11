import {
  GraphQLObjectType as ObjectType,
  GraphQLString     as StringType,
  GraphQLID         as IDType
} from 'graphql'


export default new ObjectType({
  name: 'github',
  fields: () => ({
    username: {
      type: StringType
    },
    _id: {
      type: IDType
    },
    url: {
      type: StringType
    }
  })
})
