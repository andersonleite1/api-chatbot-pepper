const keyWordModel = require('../models/keyWordModel');

const create = async (req, res, next) => {
  try {
    const { displayName } = req.body.queryResult.intent;

    const { code } = await keyWordModel.create(displayName);
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
  create,
  clear
};
