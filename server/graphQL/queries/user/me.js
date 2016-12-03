import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLError
} from 'graphql'

import UserModel from '../../../models/user'
import ProjectModel from '../../../models/project'
import UserType from '../../types/user'
import findProject from '../../libs/project_query'

var ObjectId = require('mongoose').Types.ObjectId;

/*
 * Get the user from the request.user.
 * A user will be there as long as the request-er is authenticated.
 */
export default {
  name: 'me',
  description: 'returns user profile of currently logged in user',
  type: UserType,
  async resolve (root, params, options) {

    const id = options.user._doc._id
    let user = await UserModel.findById(id).exec()
    
    return {user};
    // const projectOwner = await findProject({ 'participants.owner': new ObjectId(params.id) })
    // const projectMember = await findProject({ 'participants.members': new ObjectId(params.id) })
    // const projectApplicant = await findProject({ 'participants.applicants': new ObjectId(params.id) })


    // let me = Object.assign({}, {user: User}, { projects: [...projectOwner, ...projectMember, ...projectApplicant] })
    // return me
  }
}
