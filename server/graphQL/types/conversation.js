import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLInt as IntType
} from 'graphql'
import moment from 'moment'

import MailType from './mail'
import UserType from './user'

export default new GraphQLObjectType({
  name: 'conversation',
  description: 'conversation',
  fields: {
    _id: {
      type: GraphQLID
    },
    party: {
      type: new GraphQLList(UserType)
    },
    modified: {
      type: GraphQLString,
      resolve: (conv) => {
        let age = moment(conv.createdAt)
        let now = moment(new Date())

        return now.diff(age, 'days')
      }
    },
    conversation: {
      type: new GraphQLList(MailType)
    }
  }
})
