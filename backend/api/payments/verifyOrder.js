const signature = require("../../middlerwares/signature");

const razInstance = require("../../utils/razorpay.js");

const verifyOrder = async (req, res) => {
  try {
    const order_id = req.body.razorpay_order_id;
    const payment_id = req.body.razorpay_payment_id;
    const razorpaySignature = req.body.razorpay_signature;

    const paySignature = signature(order_id, payment_id);

    if (paySignature === razorpaySignature) {
      res
        .status(200)
        .json({ success: true, message: "Payment verified successfully" });
    } else {
      res.status(400).json({ success: false, message: "Invalid signature" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Payment verification failed" });
  }
};

module.exports = verifyOrder;
