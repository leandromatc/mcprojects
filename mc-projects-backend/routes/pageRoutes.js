const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageContoller");

router.get("/", pageController.index);
router.post("/contact-mail", pageController.mail);

module.exports = router;
