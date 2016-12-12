import axios from 'axios'
import * as types from './types'
/**
 * For inserting into state based on server response
 *
 * returns an action (an object)
 */

export function insertIn (key) {
  return function (value) {
    return {
      type: types.INSERT,
      key,
      value
    }
  }
}
