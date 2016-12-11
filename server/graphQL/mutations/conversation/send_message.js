import {
  GraphQLNonNull,
  GraphQLID as IDType,
  GraphQLString as StringType
} from 'graphql'

// collections
import ConversationModel from '../../../models/ConversationModel'
import UserModel from '../../../models/UserModel'
// types
import ConversationType from '../../types/conversation'
//
export default {
  name: 'send_message',
  type: ConversationType,
  args: {
    conversationID: {
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
    // helper
    function alertMe (err, doc) {
      if (err)
        console.log(err)
      //console.log(doc)
      return doc;
    }

    //
    const { conversationID, body, to } = params
    const myID = options.user._doc._id

    /**
     * append the conversation
     */
    const convToPush = {
      from: myID,
      body
    }
    const upConv = await ConversationModel.findByIdAndUpdate(
      conversationID,
      {
        $push: {
          'messages' :convToPush
        }
      },
      { new: true, upsert: true },
      alertMe
    )


    /**
     * TODO
     * If the user does not have this conversationID in their inbox, they have deleted this conversation
     * add the conversationID back into his inbox, and mark it as unread
     *
     * If the user does have the conversationID, simply mark it as unread
     *
     */
    const Recipient = UserModel.findById(to)
    // make sure the conv is in the user's inbox
    const conversation = {
      data: conversationID,
      read: false
    }
    Recipient.update(
      {
        $addToSet: {
          'inbox': conversation
        }
      },
      {new: true},
      alertMe
    )
    // make it unread
    Recipient.update(
      {'inbox.data': conversationID},
      {
        $set: {
          'inbox.$.read': false
        }
      },
      {new: true},
      alertMe
    )


    // return the new conversation
    const upConvWithFrom = await ConversationModel.findById(conversationID).populate({
      path: 'messages.from',
      model: 'User'
    }).exec();
    const convAsUser = {
      data: upConvWithFrom,
      read: true
    }

    return convAsUser
  }
}
