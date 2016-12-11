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
  name: 'delete_conversation',
  type: IDType,
  args: {
    conversationID: {
      type: new GraphQLNonNull(IDType)
    }
  },
  async resolve (root, params, options) {
    // helper
    function alertMe (err, doc) {
      if (err)
        console.log(err)
      console.log(doc)
      return doc;
    }

    //
    const { conversationID } = params
    const myID = options.user._doc._id

    /**
     * remove conversation from user inbox
     */
    UserModel.findByIdAndUpdate(
      myID,
      {
        $pull: {
          'inbox': {
            '_id': conversationID
          }
        }
      },
      {new:true},
      alertMe
    )


    // return the ID of the conversation to remove
    return conversationID
  }
}
