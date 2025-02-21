const razInstance = require("../../utils/razorpay.js");

const createOrder = async (req, res) => {
  try {
    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: `order_reciept_id_${Math.random() * 1000}`,
      payment_capture: 1,
    };

    const order = await razInstance.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json("Failed to create order");
  }
};

module.export = createOrder;
