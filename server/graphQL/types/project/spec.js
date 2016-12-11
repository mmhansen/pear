import {
  GraphQLObjectType as ObjectType,
  GraphQLList       as ListType,
  GraphQLString     as StringType
} from 'graphql'


// Specification Type
export default new ObjectType({
  name: 'spec',
  fields: () => ({
    title: {
      type: StringType
    },
    repository: {
      type: StringType
    },
    description: {
      type: StringType
    },
    tags: {
      type: new ListType(StringType)
    }
  })
})
