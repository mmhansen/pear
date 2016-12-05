import * as types from '../actions/types'

const initialState = {
  _id     : '',
  username: '',
  language: '',
  timezone: '',
  mail: [],
  projects_as_owner: [],
  projects_as_member: [],
  projects_as_applicant: [],
}

export default function (state = initialState, action) {
  let name = action.name;
  switch (action.type) {
    case types.GET_USER:
      return {...state, ...action.payload }
    case types.USER_OPTION:
      return { ...state, [name]:action.payload };
    case types.PROJECTS_AS_OWNER:
    case types.PROJECTS_AS_MEMBER:
    case types.PROJECTS_AS_APPLICANT:
      return { ...state, [name]:action.payload };
    default:
      return state;
  }
}
