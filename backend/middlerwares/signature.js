const crypto = require("cypto");
const config = require("../config/config.js");

const generateSignature = (order_id, payment_id) => {
  return crypto
    .createHmac("sha256", config.razorpay.key_secret)
    .update(order_id + "|" + payment_id)
    .digest("hex");
};
module.exports = generateSignature();
