import * as types from './types'

const initialState = {
  new_project: {
    title: '',
    description: '',
    tags: [{
      id: 1,
      text: "Javascript"
    }],
    timezone: '',
    communication: '',
    error: ''
  },
  search: {
    primary: 'age',
    secondary: 'newest'
  },
  project_message: '',
  mail: ''
}

export default function (state = initialState, action) {
  let search;
  let project;
  switch (action.type) {
    case types.PRIMARY_SEARCH:
      let secondary = 'newest'
      if(action.value == 'language') {
        secondary = 'javascript'
      }
      search = { ...state.search, primary:action.value, secondary }
      return {...state, search}
    case types.SECONDARY_SEARCH:
      search = { ...state.search, secondary:action.value }
      return {...state, search}
    case types.MAIL_CHANGE:
    case types.PROJECT_MESSAGE:
      return {...state, [action.key]:action.value}
    case types.NEW_PROJECT:
      project = { ...state.new_project, [action.key]:action.value }
      return {...state, new_project: project}
    // tags
    case types.ADD_TAG:
      project = { ...state.new_project, tags: [...state.new_project.tags, action.payload] }
      return {...state, new_project: project}
    case types.DRAG_TAG:
    case types.DELETE_TAG:
      project = { ...state.new_project, tags: action.payload }
      return {...state, new_project: project}
    default:
      return state;
  }
}



// case types.INPUT_CHANGE:
//   let name = action.name
//   return { ...state, [name]:action.payload };
// case types.FORM_ERROR:
//   return { ...state, error: action.payload }
// case types.CLEAR_FORM:
//   return { ...state, ...initialState}
/*
 * Tags
 */
