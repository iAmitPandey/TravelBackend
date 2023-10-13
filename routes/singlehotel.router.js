const express = require("express");
const singleHoterHandler = require("../controllers/singleHotterController");
const router = express.Router();

router.route("/:id").get(singleHoterHandler);

module.exports = router;
