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

export default {
  name: 'new_conversation',
  type: ConversationType,
  args: {
    conversationID: {
      type: new GraphQLNonNull(IDType)
    },
    body: {
      type: new GraphQLNonNull(IDType)
    },
    to: {
      type: new GraphQLNonNull(IDType)
    }
  },
  async resolve (root, params, options) {
    // helper
    function alertMe (err, doc) {
      if (err)
        console.log(err)
      //console.log(doc)
      return;
    }
    //
    const { conversationID, body, to } = params
    const myID = options.user._doc._id
    /**
     * Save the conversation
     *
     * map over the conv to send the from field as username rather than ID
     */
    const conv = new ConversationModel({
      _id: conversationID,
      messages: {
        from: myID,
        body: body
      }
    })
    let newConv =  await conv.save()
    // map
    newConv = await ConversationModel.findById(newConv._id).populate({
      path: 'messages.from',
      model: 'User'
    })

    /**
     * Add pointer to new conversation in both sender and recipient
     */

    let users = [myID, to]
    users.map((userID) => {

      const conversation = {
        data: newConv._id,
        read: true
      }
      UserModel.findByIdAndUpdate(
        userID,
        {$push: {'inbox': conversation}},
        { new: true },
        alertMe
      )
    })

    // return this conversation, so that it can update state
    // fake the read 
    const convAsUser = {
      data: newConv,
      read: false
    }

    return convAsUser
  }
}
