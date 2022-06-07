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
    const { intent: { displayName }, queryText } = req.body.queryResult;

    const { code } = await keyWordModel.create(displayName, queryText);
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
