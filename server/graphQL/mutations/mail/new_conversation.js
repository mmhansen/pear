import {
  GraphQLNonNull,
  GraphQLID as IDType,
  GraphQLString as StringType
} from 'graphql'

import MailModel from '../../../models/mail'
import ConversationType from '../../types/conversation'

export default {
  name: 'new_conversation',
  type: ConversationType,
  args: {
    _id: {
      type: new GraphQLNonNull(IDType)
    },
    to: {
      type: new GraphQLNonNull(IDType)
    },
    from: {
      type: new GraphQLNonNull(IDType)
    },
    body: {
      type: new GraphQLNonNull(StringType)
    }
  },
  async resolve (root, params, options) {
    let { _id, to, from, body } = params
    const conversation = {
      to,
      from,
      body
    }
    const newConversation = new MailModel({ _id, conversation })
    return await newConversation.save()
  }
}
