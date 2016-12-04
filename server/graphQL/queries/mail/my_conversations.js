import {
  GraphQLID as IDType,
  GraphQLNonNull as NonNullType,
  GraphQLList as ListType
} from 'graphql'

import ConversationType from '../../types/conversation'
import UserModel from '../../../models/user'
import MailModel from '../../../models/mail'

export default {
  name: 'my_conversations',
  type: new ListType(ConversationType),
  args: {
    id: {
      type: new NonNullType(IDType)
    }
  },
  async resolve (root, params, options) {
    /*
     * Find each of the mails in which the given id is a participant, return those mails along with the to and from populated
     */
    let { id } = params

    const myConversations = await MailModel
      .find({ $or: [ {'conversation.to': id}, {'conversation.from': id} ] })
      .slice('conversation', 1)
      .populate('conversation.to')
      .populate('conversation.from')
      .exec()

    const convWithParties = myConversations.map((a) => {
      // get the two and from and stick them into an array named party on a

      a.party = [
        a.conversation[0].to,
        a.conversation[0].from
      ]
      return a
    })
    
    return myConversations

  }
}
