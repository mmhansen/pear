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
  mail: ''
}

export default function (state = initialState, action) {
  let search;
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
      return {...state, mail:action.value}
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
// /*
//  * Tags
//  */
// case types.ADD_TAG:
//   return {...state, tags: [...state.tags, action.payload]}
// case types.DRAG_TAG:
// case types.DELETE_TAG:
//   return {...state, tags: action.payload }
