const num = document.getElementById('number');
const nam = document.getElementById('name');


const req = {
  name: nam,
  number: num,
  email: document.getElementById('email') 
}
async function payNow() {
  try {
    const amount = 150;
    const res = await fetch("http://localhost:3000/api/pay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    });

    const resData = await res.json();

    if (!resData.order) {
      alert("Order creation failed!");
      return;
    }

    const { order, key_id } = resData;

    const options = {
      key: key_id,
      amount: order.amount,
      currency: order.currency,
      name: req.name,
      description: "Test Payment",
      order_id: order.id,
      handler: async function (response) {
        console.log("✅ Payment Success Response:", response);

        const verifyRes = await fetch("http://localhost:3000/api/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });

        const verifyData = await verifyRes.json();
        if (verifyData.success) {
          alert("✅ Payment Verified Successfully!");
        } else {
          alert("❌ Payment Verification Failed!");
        }
      },
      prefill: {
        name: req.name,
        email: req.email,
        contact: req.number,
      },
      theme: {
        color: "#3399cc",
      },
      modal: {
        escape: false,
        backdropclose: false,
        ondismiss: function () {
          alert("❌ Payment was not completed!");
          console.warn("⚠️ User closed the payment window.");
        },
      },
    };

    const rzp = new Razorpay(options);

    rzp.on("payment.failed", function (response) {
      alert("❌ Payment Failed: " + response.error.description);
      console.error("🚨 Payment Failed:", response.error);
    });

    rzp.open();
  } catch (error) {
    console.error("🚨 Error in payment:", error);
  }
}

document.getElementById("button").addEventListener("click", payNow);
