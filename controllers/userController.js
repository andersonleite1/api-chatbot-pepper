const User = require('../models/userModel');

const getUser = async (_req, res, next) => {
  try {
    const { code, user } = await User.getUser();
    return res.status(code).json(user);
  } catch (err) {
    next(err);
  }
};

const clear = async (_req, res, next) => {
  try {
    const { code } = await User.clear();
    return res.status(code).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUser,
  clear
};
