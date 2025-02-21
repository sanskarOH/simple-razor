const config = require("../config/config");
const Razorpay = require("razorpay");

const razorpayInstance = new Razorpay(config.razorpay);

module.exports = razorpayInstance;
