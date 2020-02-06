const jwt = require('jsonwebtoken')

const verifyToken = autorizationHeader => {
  try {
    if (autorizationHeader === undefined) return false
    const token = autorizationHeader.split(' ')[1]
    const verifiedToken = jwt.verify(token, process.env.JWT_KEY)
    return verifiedToken
  } catch (error) {
    console.log(error)
  }
}

const signToken = payload => {
  const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '7d' })
  return token
}

module.exports = {
  verifyToken,
  signToken,
}
