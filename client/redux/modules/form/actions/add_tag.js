import * as types from '../types'

export default function (tag, tags) {
  return {
    type: types.ADD_TAG,
    payload: {
      id: tags.length + 1,
      text: tag
    }
  }
}
