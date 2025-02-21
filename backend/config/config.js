require("dotenv").config;

module.exports = {
  PORT: process.env.PORT || 3000,
  razorpay: {
    key_id: process.env.key_id,
    key_secret: process.env.key_secret,
  },
};
