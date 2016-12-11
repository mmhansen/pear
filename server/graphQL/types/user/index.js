import {
  GraphQLObjectType as ObjectType,
  GraphQLList       as ListType,
  GraphQLID         as IDType
} from 'graphql'

// external types
import ConversationType    from '../conversation'
import ProjectType    from '../project'
// user subtypes
import PreferenceType from './preferences'
import GithubType     from './github'

// user type
export default new ObjectType({
  name: 'user',
  fields: () => ({
    _id: {
      type: IDType
    },
    github: {
      type: GithubType
    },
    preferences: {
      type: PreferenceType
    },
    inbox: {
      type: new ListType(ConversationType)
    },
    playground: {
      type: new ListType(ProjectType)
    }
  })
})
