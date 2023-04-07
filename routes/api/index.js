const express = require('express');
const router = express.Router();

const getBlockCount = require('./v1/getBlockCount');
const ls = require('./v1/ls'); // Import the ls function

router.get('/getBlockCount', getBlockCount);
router.get('/ls', ls); // Add a route for the ls function

module.exports = router;
