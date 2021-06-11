const express = require("express");
const router = express.Router();
const controller = require("../controllers/park.controller");

router.put("/parkData", controller.set);
router.get("/parkData", controller.get);

module.exports = router;
