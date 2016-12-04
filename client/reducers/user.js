import * as types from '../actions/types'

const initialState = {
  _id     : '',
  username: '',
  language: '',
  timezone: '',
  projects_as_owner: [],
  projects_as_member: [],
  projects_as_applicant: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.GET_USER:
      return {...state, ...action.payload }
    case types.USER_OPTION:
      let name = action.name
      return { ...state, [name]:action.payload };
    default:
      return state;
  }
}
