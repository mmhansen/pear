/*
 * Bring in all the types
 */
import * as types from '../actions/types'
/*
 * Define this portion of initial application state
 */
let initialState = {
  authenticated: false
};

/*
 * The reducer is a switch statement which handles the action type and returns a new instance of the state
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case types.AUTH_USER:
      return { ...state, authenticated: true };
    case types.UNAUTH_USER:
      return { ...state, authenticated: false }
    default:
      return state;
  }
}
