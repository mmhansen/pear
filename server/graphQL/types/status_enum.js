import {
  GraphQLEnumType
} from 'graphql'

export default new GraphQLEnumType({
  name: 'project_status',
  description: 'enum project status to active or abandoned',
  values: {
    Active: {
      value: 'Active'
    },
    Abandoned: {
      value: 'Abandoned'
    }
  }
})
