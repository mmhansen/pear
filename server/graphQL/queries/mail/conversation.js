import {
  GraphQLID as IDType,
  GraphQLNonNull as NonNullType,
  GraphQLList as ListType
} from 'graphql'

import MailModel from '../../../models/mail'
import UserModel from '../../../models/user'
import ConversationType from '../../types/conversation'

export default {
  name: 'conversation',
  description: 'get converstaion array by ID',
  type: ConversationType,
  args: {
    id: {
      type: new NonNullType(IDType)
    }
  },
  async resolve (root, params, options) {
    return null;
  }
}
