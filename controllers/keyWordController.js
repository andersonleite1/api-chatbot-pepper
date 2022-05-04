const keyWordModel = require('../models/keyWordModel');

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
  getData,
  create,
  clear
};
