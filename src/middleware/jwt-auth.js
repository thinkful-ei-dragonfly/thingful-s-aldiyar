/* eslint-disable strict */
function requireAuth(req, res, next) {
  return res.status(401).json({error: 'Missing bearer token'})
  next()
}

module.exports = {
  requireAuth,
}