const mongoose = require("mongoose");

const paymentSchema = new mongoose.paymentSchema({
  orderId: { type: String, required: true },
  paymentId: { type: String, required: true },
  signature: { type: String, required: true },
  amount: { type: String, required: true },
  status: { type: String, defualt: "Pending" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = paymentSchema;
