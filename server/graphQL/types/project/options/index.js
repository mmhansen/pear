import {
  GraphQLObjectType as ObjectType,
  GraphQLString     as StringType
} from 'graphql'
// subtypes
import CommunicationType from './communication'
import ProjectOptionType from './project_options'
// options typ
export default new ObjectType({
  name: 'options',
  fields: () => ({
    communication: {
      type: CommunicationType
    },
    project: {
      type: ProjectOptionType
    }
  })
})
