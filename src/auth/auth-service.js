/* eslint-disable strict */
const AuthService = {
  getUserWithUserName(db, user_name) {
    return db('thingful_users')
      .where({
        user_name
      })
      .first()
  },

  comparePasswords(password, hash) {
    return bcrypt.compare(password, hash)
  },

  parseBasicToken(token) {
    return Buffer
      .from(token, 'base64')
      .toString()
      .split(':')
  },
};

module.exports = AuthService;