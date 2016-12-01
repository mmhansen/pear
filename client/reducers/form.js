import * as types from '../actions/types'

const initialState = {
  title: '',
  description: '',
  tags: '',
  timezone: '0',
  communication: 'English'
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
      let name = action.name
      return { ...state, [name]:action.payload };
    default:
      return state;
  }
}
