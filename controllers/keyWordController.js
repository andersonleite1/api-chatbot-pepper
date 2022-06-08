const keyWordModel = require('../models/keyWordModel');
const User = require('../models/userModel');

const getData = async (_req, res, next) => {
  try {
    const { code, data } = await keyWordModel.getData();
    return res.status(code).json(data);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const { intent: { displayName }, parameters, queryText } = req.body.queryResult;

    const username = parameters['username'];

    if(username) await User.create(username);

    const { code } = await keyWordModel.create(displayName, queryText, username);
    return res.status(code).end();
  } catch (err) {
    next(err)
  }
};

const clear = async (_req, res, next) => {
  try {
    const { code } = await keyWordModel.clear();
    return res.status(code).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getData,
  create,
  clear
};
