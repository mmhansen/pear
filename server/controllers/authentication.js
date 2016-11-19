import config from '../services/config'
import jwt from 'jwt-simple'
import User from '../models/user'

const makeToken = (id) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: id, iat: timestamp }, config().secret)
}

export function login (req, res, next) {
  let { _id, githubId } = req.user;
  res.okay({
    token: makeToken(githubId)
  })
}
