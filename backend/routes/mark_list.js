const express = require('express');
const router = express.Router();
const { studentMarkList } = require('../controllers/mark_list')
const { fetchSpecificClass } = require('../controllers/mark_list');
const { validateToken } = require('../JWT');

router.post('/fetchMarkList', validateToken ,studentMarkList);
router.post('/fetchSpecificClass', validateToken ,fetchSpecificClass);

module.exports = router