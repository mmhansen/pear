import {
  GraphQLNonNull,
  GraphQLID as IDType,
  GraphQLString as StringType
} from 'graphql'

import MailModel from '../../../models/mail'
import ConversationType from '../../types/conversation'

export default {
  name: 'send_mail',
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
  resolve (root, params, options) {
    let { _id, to, from, body } = params
    let conversation = {
      to,
      from,
      body
    }
    return MailModel.findByIdAndUpdate(
      _id,
      {$push: { conversation }},
      { new: true, upsert: true }
    )
  }
}
