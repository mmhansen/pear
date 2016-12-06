import * as types from './types'

const initialState = {
  projects: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PROJECTS:
      return {...state, projects: action.payload}
    default:
      return state;
  }
}
