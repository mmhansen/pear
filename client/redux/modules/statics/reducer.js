import * as types from './types'

const initialState = {
  project_data: [],
  user_data: {
    _id: '',
    github: {
      username: ''
    },
    inbox: [],
    playground: []
  }
}

/**
 * Static Data Reducer
 *
 * This is for state that can not be mutated 'directly'
 * That is to say, it is only updated by trips to the server
 *
 */
export default function (state = initialState, action) {
  switch (action.type) {

    case types.INSERT:
      return {...state, [action.key]:action.value}
    
    case types.REMOVE:
      return state;
    default:
      return state;
  }
}
