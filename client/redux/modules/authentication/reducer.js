import * as types from './types'
//
let initialState = {
  authenticated: false
};
//
export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_AUTH:
      return { ...state, authenticated: action.value };
    case types.UNAUTH_USER:
      return { ...state, authenticated: false }
    default:
      return state;
  }
}
