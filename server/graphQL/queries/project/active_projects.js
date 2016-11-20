import {
  GraphQLList
} from 'graphql'

import ProjectModel from '../../../models/project'
import getProjection from '../../get_projection'
import projectType from '../../types/project'

export default {
  type: new GraphQLList(projectType),
  resolve (root, params, options) {
    //const projection = getProjection(options.fieldASTs[0])

    return ProjectModel
      .find({ 'details.status': 'Active' })
      .populate('participants.owner')
      .exec();
  }
}
