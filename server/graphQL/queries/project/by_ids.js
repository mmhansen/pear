import {
  GraphQLList,
  GraphQLID as IDType
} from 'graphql'

import ProjectType from '../../types/project'
import ProjectModel from '../../../models/project'

export default {
  name: "projects_by_ids",
  description: "fetch projects based on id array",
  deprecated: true,
  type: new GraphQLList(ProjectType),
  args: {
    ids: {
      name: 'ids',
      type: new GraphQLList(IDType)
    }
  },
  resolve (root, params, options) {

  return params.ids.map((id) => {
      return ProjectModel.findById(id).populate('participants.owner').exec()
    })


  }
}
