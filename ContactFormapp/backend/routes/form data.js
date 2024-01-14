const express = require("express");
const { sendMail, fetchMails } = require("../controllers/form data");
const router = express.Router();

router.post("/send-mail",sendMail);
router.get("/all-mails",fetchMails);


module.exports = router;