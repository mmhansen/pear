import {
  GraphQLInputObjectType,
  GraphQLID,
  GraphQLList
} from 'graphql'

export default new GraphQLInputObjectType({
  name: 'participants_input',
  description: 'input owner, members, and applicants',
  fields: {
    owner: {
      type: GraphQLID
    },
    members: {
      type: new GraphQLList(GraphQLID)
    },
    applicants: {
      type: new GraphQLList(GraphQLID)
    }
  }
})
