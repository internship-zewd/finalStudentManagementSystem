const express = require('express');
const router = express.Router();
const createTestAll = require('../seeders/createTestAll');

router.get('/', (req, res, next) => {
  createTestAll(req, res, next);
});

module.exports = router;
