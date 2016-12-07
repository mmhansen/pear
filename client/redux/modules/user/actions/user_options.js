import * as types from '../types'

export default function (e) {

  return {
    type: types.OPTION_CHANGE,
    name: e.target.name,
    value: e.target.value
  }
}
