import {
  GraphQLList,
  GraphQLID  as IDType
} from 'graphql'

import ProjectModel from '../../../models/project'
import getProjection from '../../get_projection'

export default {
  type: new GraphQLList(IDType),
  async resolve (root, params, options) {
    let Projects = await ProjectModel.find({ 'details.status': 'Active' }).exec()

    return Projects.map((a) => a._id)
  }
}
