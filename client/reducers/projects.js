import * as types from '../actions/types'

const initialState = {
  projects: {

  },
  active: [],
  primary: 'age',
  secondary: 'newest'
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.ACTIVE:
      return {...state, active:action.payload };
    case types.INSERT_PROJECT:
    /*
     * make a hash table based on the given array of project objects
     */
      let projects = {}
      action.payload.map((a) => {
        projects[a._id] = a
      })
      
      return {...state, projects }
    case types.PRIMARY_SEARCH:
    /*
     * Set the default of the secondary when you change the Primary
     */
     let secondary = "newest"
     if (action.payload == "language") {
       secondary = "javascript"
     }
     return {...state, primary: action.payload, secondary}
    case types.SECONDARY_SEARCH:
      return {...state, secondary: action.payload}
    default:
      return state;
  }
}
