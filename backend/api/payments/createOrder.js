const razInstance = require("../../utils/razorpay.js");
const config = require("../../config/config");

const createOrder = async (req, res) => {
  try {
    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: `order_reciept_id_${Math.random() * 1000}`,
      payment_capture: 1,
      
    };

    const order = await razInstance.orders.create(options);
    res.status(200).json({
      order,
      key_id: config.key_id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create order" });
  }
};

module.exports = createOrder;
