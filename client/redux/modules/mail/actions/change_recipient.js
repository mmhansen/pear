import * as types from '../types'

export default function (recipient) {
  let payload = recipient.split(',')
  payload = {
    userID: payload[0],
    projectID: payload[1],
    title: payload[2]
  }
  return {
    type: types.RECIPIENT,
    payload
  }
}
