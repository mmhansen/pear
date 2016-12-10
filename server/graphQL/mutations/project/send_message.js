import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLString as StringType
} from 'graphql'

import ProjectModel from '../../../models/project'

export default {
  name: 'send_message',
  description: 'new project message',
  type: GraphQLID,
  args: {
    projectID: {
      type: new GraphQLNonNull(GraphQLID)
    },
    text: {
      type: new GraphQLNonNull(StringType)
    }
  },
  async resolve (root, params, options) {
    const { projectID, text } = params;
    const announceErr = (err) => { if (err) {console.log(err)} }
    
    ProjectModel.findByIdAndUpdate(
      projectID,
      {
        $push: {
          'messages': {text}
        }
      },
      {new:true, upsert:true},
      announceErr
    )

    return projectID
  }
}
