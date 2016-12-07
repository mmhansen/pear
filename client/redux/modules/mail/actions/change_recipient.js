import * as types from '../types'

export default function (recipient) {
  let payload = recipient.split(',')
  payload = {
    id: payload[0],
    title: payload[1]
  }
  return {
    type: types.RECIPIENT,
    payload
  }
}
