import {
  GraphQLObjectType as ObjectType,
  GraphQLList       as ListType,
  GraphQLID         as IDType
} from 'graphql'


// Party Type
export default new ObjectType({
  name: 'party',
  fields: () => ({
    owner: {
      type: IDType
    },
    members: {
      type: new ListType(IDType)
    },
    applicants: {
      type: new ListType(IDType)
    }
  })
})
