import {
  GraphQLString
} from 'graphql'

import UserModel from '../../../models/user'
import UserType from '../../types/user'

export default {
  name: 'new_user',
  type: UserType,
  args: {
    username: {
      type: GraphQLString
    },
    id: {
      type: GraphQLString
    },
    profileUrl: {
      type: GraphQLString
    }
  },
  async resolve (root, params, options) {
    const newUser = new UserModel({
      'github.username': params.username,
      'github._id': params.id,
      'github.url': params.profileUrl
    })

    return newUser.save()

  }
}
