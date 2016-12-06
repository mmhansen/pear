import * as types from '../types'

export default function (i, tags) {
  tags.splice(i, 1);
  return  {
    type: types.DELETE_TAG,
    payload: tags
  }
}
