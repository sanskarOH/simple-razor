require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  razorpay: {
    key_id: process.env.key_id,
    key_secret: process.env.key_secret,
  },
};
