import * as types from '../actions/types'

const initialState = {
  title: '',
  description: '',
  current_tag: '',
  tags: [{
    id: 1,
    text: "Apples"
  }],
  timezone: '0',
  communication: 'English'
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
      let name = action.name
      return { ...state, [name]:action.payload };
    /*
     * Tags
     */
    case types.ADD_TAG:
      return {...state, tags: [...state.tags, action.payload]}
    case types.DRAG_TAG:
    case types.DELETE_TAG:
      return {...state, tags: action.payload }
    default:
      return state;
  }
}
