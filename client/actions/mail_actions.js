import axios from 'axios'
import * as types from './types'
import cookie from 'react-cookie'
import {browserHistory} from 'react-router'

export function changeRecipient (id) {

  return {
    type: types.RECIPIENT,
    payload: id
  }
}

export function getMail (id) {

  const query = `query
  ($id: ID!) {
    conversation(id: $id) {
      _id
      modified
      party {
        _id
        username
      }
      conversation {
        to
        from
        body
      }
    }
  }`
  const variables = {
    id
  }
  return dispatch => {
    return axios.post('/graphql', {query, variables})
      .then(({data}) => {
        if (Object.keys(data).indexOf('errors') > 0) {
          return;
        }
        dispatch({
          type: types.CONVERSATION,
          payload: data.data.conversation
        })
      })
      .catch((data) => {
        console.log(data)
      })
  }
}

export function getMyConversations () {
  const query = `query
  ($id: ID!) {
    my_conversations(id: $id) {
      _id
      modified
      party {
        _id
        username
      }
    }
  }`
  const token = cookie.load('user')

  const variables =  {
    id: token._id
  }

  return dispatch => {
    return axios.post('/graphql', {query, variables})
    .then(({data}) => {
      dispatch({
        type: types.MY_CONVERSATIONS,
        payload: data.data.my_conversations
      })
    })
    .catch((data) => {
      console.log(data)
    })
  }
}

export function mailTextChange (e) {
  return {
    type: types.MAIL_CHANGE,
    payload: e.target.value
  }
}

export function sendMail({body, to, from, id}) {
  const query = `mutation
  ($id:ID!, $to:ID!, $from:ID!, $body: String!) {
    send_mail(_id: $id, to: $to, from: $from, body: $body) {
      _id
      conversation {
        to
        from
        body
      }
    }
  }`
  const variables = {
    id,
    to,
    from,
    body
  }
  return dispatch => {
    return axios.post('/graphql', {query, variables})
    .then((res) => {
      dispatch({
        type: types.MAIL_CHANGE,
        payload: ''
      })
      browserHistory.push('/mail')
    })
    .catch((res) => {
      console.log(res)
    })
  }

}
