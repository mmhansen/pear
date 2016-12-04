import axios from 'axios'
import { browserHistory } from "react-router"
import * as types from '../types'

export default function () {
  return {
    type: types.UNAUTH_USER
  }
}
