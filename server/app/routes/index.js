const express = require('express');
const router = express.Router();

// various routes
const parkRoute = require('./park.routes');

router.use('/park', parkRoute);

module.exports = router;
