const express = require("express");
const hotelHandler = require("../controllers/hotelController");

const router = express.Router();

router.route("/").get(hotelHandler);

module.exports = router;
