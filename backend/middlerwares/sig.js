const config = require('../config/config.js')
const crypto = require('crypto')
console.log(config)
function generateSig(order_id, payment_id){
    const sec = config.razorpay.key_secret
    console.log(sec)
  return crypto
    .createHmac("sha256", sec)
    .update(order_id + "|" + payment_id)
    .digest("hex");
}

const signature = generateSig('order_Q3VA8M18t2HpJo','pay_Q3VAFQW5raT9zw')

console.log(signature)