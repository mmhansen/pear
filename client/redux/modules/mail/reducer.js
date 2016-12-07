import * as types from './types'

const initialState = {
  recipient: {
    id: '',
    title: ''
  }
}

export default function (state = initialState, action) {

  switch (action.type) {
    case types.RECIPIENT:
      return {...state, recipient: action.payload}
    default:
      return state;
  }
}
