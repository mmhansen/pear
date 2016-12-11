
import UserModel from '../../../models/UserModel'
import UserType from '../../types/user'


export default {
  name: 'me',
  description: 'returns user profile of currently logged in user',
  type: UserType,
  async resolve (root, params, options) {
    // get the ID of the logged in user
    const id = options.user._doc._id
    const User = await UserModel.findById(id).exec()
    /**
     * Populate the User's inbox
     *
     * Map the user populated in the from path to the username value
     */
    const inboxPopulate = {
      path: 'data',
      model: 'Conversation',
      populate: {
        path: 'from',
        model: 'User'
      }
    }
    const userWithInbox = await User.populate(inboxPopulate)

    console.log(userWithInbox);

    return null
    //
    //
    // const participants = [
    //   {
    //     path: 'owner',
    //     model: 'User'
    //   },
    //   {
    //     path: 'members',
    //     model: 'User'
    //   },
    //   {
    //     path: 'applicants',
    //     model: 'User'
    //   }
    // ]
    // return UserModel
    //   .findById(id)
    //
    //   .populate({
    //     path: 'projects_as_owner',
    //     model: 'Project',
    //     populate: participants
    //   })
    //   .populate({
    //     path: 'projects_as_member',
    //     model: 'Project',
    //     populate: participants
    //   })
    //   .populate({
    //     path: 'projects_as_applicant',
    //     model: 'Project',
    //     populate: participants
    //   })
    //   .populate({
    //     path: 'mail',
    //     model: 'Mail',
    //     populate: {
    //       path: 'parties',
    //       model: 'User'
    //     }
    //   })
    //   .exec((err, user) => {
    // })
  }
}
