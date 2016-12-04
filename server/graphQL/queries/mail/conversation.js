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
    let id = params.id
    const Conv = await MailModel.findById(id).exec()

    /*
     * Send the user information of the two parties in the conversation
     */

    const party = await Promise.all([
      Conv.conversation[0].to,
      Conv.conversation[0].from
    ].map((a) => {
      return UserModel.findById(a).exec()
    }))

    const Conversation = Object.assign({}, Conv._doc, { party })
    
    return Conversation
  }
}
