
import UserModel from '../../../models/user'
import UserType from '../../types/user'


export default {
  name: 'me',
  description: 'returns user profile of currently logged in user',
  type: UserType,
  resolve (root, params, options) {
    const id = options.user._doc._id
    const participants = [
      {
        path: 'owner',
        model: 'User'
      },
      {
        path: 'members',
        model: 'User'
      },
      {
        path: 'applicants',
        model: 'User'
      }
    ]
    return UserModel
      .findById(id)
      .populate({
        path: 'projects_as_owner',
        model: 'Project',
        populate: participants
      })
      .populate({
        path: 'projects_as_member',
        model: 'Project',
        populate: participants
      })
      .populate({
        path: 'projects_as_applicant',
        model: 'Project',
        populate: participants
      })
      .populate({
        path: 'mail',
        model: 'Mail',
        populate: {
          path: 'parties',
          model: 'User'
        }
      })
      .exec((err, user) => {
    })
  }
}
