// action creator
import { insertIn } from './insert_data'
import { fetchAndInsert } from '../fetchHandler'
// constants
const loadUser = insertIn('user_data')

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
  callback: loadUser,
  query_name: 'me',
  query
}
/**
 * Fetch user on website load and insert into state
 *
 */
export const initialUserFetch = fetchAndInsert(params)
