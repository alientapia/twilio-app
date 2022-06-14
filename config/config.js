const config = {
  accountSid: process.env.TWILIO_ACCOUNT_SID,
  authToken: process.env.TWILIO_AUTH_TOKEN,
  port: process.env.PORT || 3000,
  dbUrl: process.env.DATABASE_URL,
};

module.exports = { config };
