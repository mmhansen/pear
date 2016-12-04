import {
  GraphQLNonNull,
  GraphQLID as IDType,
  GraphQLString as StringType
} from 'graphql'

import MailModel from '../../../models/mail'
import ConversationType from '../../types/conversation'

export default {
  name: 'send_mail',
  type: IDType,
  args: {
    _id: {
      type: new GraphQLNonNull(IDType)
    },
    to: {
      type: new GraphQLNonNull(IDType)
    },
    body: {
      type: new GraphQLNonNull(StringType)
    }
  },
  async resolve (root, params, options) {
    const from = options.user._doc._id
    const { _id, to, body } = params
    // append the conversation
    let conversation = {
      to,
      from,
      body
    }
    const updatedConversation = await MailModel.findByIdAndUpdate(
      _id,
      {$push: { conversation }},
      { new: true, upsert: true }
    )
    return updatedConversation._id
  }
}
