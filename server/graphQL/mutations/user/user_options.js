import {
  GraphQLNonNull,
  GraphQLString as StringType,
  GraphQLID as IDType
} from 'graphql'

import UserModel from '../../../models/user'
import UserType from '../../types/user'

export default {
  name: 'user_options',
  type: IDType,
  args: {
    timezone: {
      type: new GraphQLNonNull(StringType)
    },
    language: {
      type: new GraphQLNonNull(StringType)
    }
  },
async resolve (root, params, options) {
    const _id =  options.user._doc._id
    const { timezone, language } = params

    const User = await UserModel.findByIdAndUpdate(
      _id,
      {$set: { 'communication.timezone': timezone, 'communication.language': language }},
      { new: true }
    )
    return User._id
  }
}
