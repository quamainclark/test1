const express = require('express');
const router = express.Router();
const controller = require('../controllers/park.controller');

router.put('/setParkData', controller.set);
router.get('/getParkData', controller.get);

module.exports = router;
