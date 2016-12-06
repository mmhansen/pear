import * as types from '../types'

export default function (tag, currPos, newPos, tags) {

  // mutate array
  tags.splice(currPos, 1);
  tags.splice(newPos, 0, tag);

  // re-render
  return  {
    type: types.DRAG_TAG,
    payload: tags
  }
}
