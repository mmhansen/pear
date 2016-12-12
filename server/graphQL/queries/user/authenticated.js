import {
  GraphQLBoolean as BoolType
} from 'graphql'

export default {
  name: 'authenticated',
  description: 'returns bool for authenticated or not',
  type: BoolType,
  async resolve (root, params, options) {
    // get the ID of the logged in user
    const id = options.user._doc._id
    // if there is an id, return true, else false
    return (id)
  }
}
