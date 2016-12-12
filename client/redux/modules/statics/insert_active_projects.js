// action creator
import { insertIn } from './insert_data'
import { fetchAndInsert } from '../fetchHandler'

// constants
const insertActiveProjects = insert('project_data')

const query = ` {
  me {
    _id
    github {
      username
    }
    preferences {
      language
      timezone
    }
    inbox {
      _id
      read
      messages {
        _id
        from
        body
      }
    }
  }
}`

const params = {
  callback: insertActiveProjects,
  query_name: 'active_projects',
  query
}
/**
 * Fetch active projects and insert into state
 *
 */
export const fetchActiveProjects = fetchAndInsert(params)
