import * as types from '../actions/types'

const initialState = {
  recipient: "",
  conversation: "",
  party: [],
  modified: "",
  mail_history: [],
  my_conversations: []
}

export default function (state=initialState, action) {
  switch (action.type) {
    case types.RECIPIENT:
      return {...state, recipient: action.payload }
    case types.CONVERSATION:
      return {...state, mail_history: action.payload.conversation, party: action.payload.party, modified: action.payload.modified }
    case types.MY_CONVERSATIONS:
      return {...state, my_conversations: action.payload}
    case types.MAIL_CHANGE:
      return {...state, conversation: action.payload}
    default:
      return state;
  }
}
