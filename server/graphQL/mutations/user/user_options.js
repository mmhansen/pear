import {
  GraphQLNonNull,
  GraphQLString as StringType,
  GraphQLID as IDType
} from 'graphql'

import UserModel from '../../../models/user'
import UserType from '../../types/user'

export default {
  name: 'user_options',
  type: UserType,
  args: {
    _id: {
      type: new GraphQLNonNull(IDType)
    },
    timezone: {
      type: new GraphQLNonNull(StringType)
    },
    language: {
      type: new GraphQLNonNull(StringType)
    }
  },
  resolve (root, params, options) {
    let { _id, timezone, language } = params

    return UserModel.findByIdAndUpdate(
      _id,
      {$set: { 'communication.timezone': timezone, 'communication.language': language }},
      { new: true }
    )
  }
}
