import {
  GraphQLList,
  GraphQLID  as IDType
} from 'graphql'

import ProjectModel from '../../../models/project'
import ProjectType from '../../types/project'

export default {
  type: new GraphQLList(ProjectType),
  resolve (root, params, options) {
    return ProjectModel.find({ 'status': 'Active' }).exec()

  }
}
