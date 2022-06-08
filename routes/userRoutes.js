const express = require('express');

const user = require('../controllers/userController');

const router = express.Router();

router
  .get(
    '/',
    user.getUser
  )
  .delete(
    '/',
    user.clear
  );

module.exports = router;
