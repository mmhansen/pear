import * as types from '../actions/types'

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
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
      let name = action.name
      return { ...state, [name]:action.payload };
    case types.FORM_ERROR:
      return { ...state, error: action.payload }
    case types.CLEAR_FORM:
      return { ...state, ...initialState}
    /*
     * Tags
     */
    case types.ADD_TAG:
      return {...state, tags: [...state.tags, action.payload]}
    case types.DRAG_TAG:
    case types.DELETE_TAG:
      return {...state, tags: action.payload }
    default:
      return state;
  }
}
