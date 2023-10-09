const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.post("/mail", contactController.store);

module.exports = router;
