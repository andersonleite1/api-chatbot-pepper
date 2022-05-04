const express = require('express');

const keyWord = require('../controllers/keyWordController');

const router = express.Router();

router
  .get(
    '/',
    keyWord.getData
  )
  .post(
    '/',
    keyWord.create
  )
  .delete(
    '/',
    keyWord.clear
  );

module.exports = router;
