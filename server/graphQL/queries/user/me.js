import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

import UserModel from '../../../models/user'
import UserType from '../../types/user'

export default {
  name: 'me',
  description: 'returns user profile of currently logged in user',
  type: UserType,
  args: {
    id: {
      name: 'user_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, options) {
    return UserModel
      .findById(params.id)
      .exec()
  }
}
