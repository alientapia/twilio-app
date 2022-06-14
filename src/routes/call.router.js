const express = require("express");
const { sendSms } = require("./../controllers/call.controller");

const router = express.Router();
//test send sms
router.get("/send-sms", sendSms);
module.exports = router;
