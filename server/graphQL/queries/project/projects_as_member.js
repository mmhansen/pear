import {
  GraphQLList
} from 'graphql'

import ProjectType from '../../types/project'
import ProjectModel from '../../../models/project'

export default {
  name: 'projects_as_owner',
  type: new GraphQLList(ProjectType),
  resolve (root, params, options) {
    const id = options.user._doc._id
    return ProjectModel.find({ 'participants.members':id }).exec()
  }
}
