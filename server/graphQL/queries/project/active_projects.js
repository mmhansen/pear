import {
  GraphQLLIst
} from 'graphql'

import getProjection from '../../get_projection'
import ProjectModel from '../../../models/project'
import projectType from '../../types/project'

export default {
  type: projectType,
  resolve (root, params, options) {
    //const projection = getProjection(options.fieldASTs[0])

    return ProjectModel
      .find({ 'details.status': 'Active' })
      .populate('user')
      .exec();
  }
}
