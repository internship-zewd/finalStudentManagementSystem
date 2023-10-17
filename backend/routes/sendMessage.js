const express = require('express');
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' });
const { sendMessage, fetchUser } = require('../controller/sendMessage')

router.get('/fetchReceiver', fetchUser);
router.post('/sendMessage', upload.array('files'), sendMessage)

module.exports = router

