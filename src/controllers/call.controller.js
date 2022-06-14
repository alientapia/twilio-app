const twilio = require("twilio");
const { config } = require("./../../config/config");

module.exports.sendSms = async (req, res) => {
  const twilioSignature = req.headers["x-twilio-signature"];
  const params = req.body;
  const url = "https://localhost:3000";

  const requestIsValid = twilio.validateRequest(
    config.authToken,
    twilioSignature,
    url,
    params
  );
  if (!requestIsValid) {
    return res.status(401).send("Unauthorized");
  }
  res.status(200).send({ message: "send a sms since twilio-appp" });
};
