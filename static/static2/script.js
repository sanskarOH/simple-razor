// document.addEventListener("DOMContentLoaded", function () {
//     const teamMembersContainer = document.getElementById("teamMembersContainer");
//     const addMemberBtn = document.getElementById("addMemberBtn");
//     const registerForm = document.getElementById("registerForm");

//     let memberCount = 0;

//     function addMember() {
//         if (memberCount >= 4) {
//             alert("Maximum 4 members allowed.");
//             return;
//         }
//         memberCount++;

//         const memberDiv = document.createElement("div");
//         memberDiv.classList.add("member");
//         memberDiv.innerHTML = `
//             <h4>Team Member ${memberCount}</h4>
//             <input type="text" name="firstName" placeholder="First Name" required>
//             <input type="text" name="lastName" placeholder="Last Name" required>
//             <input type="text" name="phoneNumber" placeholder="Phone Number" required>
//             <input type="text" name="registrationNumber" placeholder="Registration Number" required>
//             <input type="email" name="srmMailId" placeholder="SRM Mail ID" required>
//             <input type="text" name="department" placeholder="Department" required>
//             <button type="button" class="remove-btn">Remove</button>
//         `;
        
//         memberDiv.querySelector(".remove-btn").addEventListener("click", () => {
//             memberDiv.remove();
//             memberCount--;
//         });

//         teamMembersContainer.appendChild(memberDiv);
//     }

//     addMemberBtn.addEventListener("click", addMember);

//     registerForm.addEventListener("submit", async function (event) {
//         event.preventDefault();

//         const teamName = document.getElementById("teamName").value;
//         const members = Array.from(document.querySelectorAll(".member")).map(member => {
//             return {
//                 firstName: member.querySelector("[name='firstName']").value,
//                 lastName: member.querySelector("[name='lastName']").value,
//                 phoneNumber: member.querySelector("[name='phoneNumber']").value,
//                 registrationNumber: member.querySelector("[name='registrationNumber']").value,
//                 srmMailId: member.querySelector("[name='srmMailId']").value,
//                 department: member.querySelector("[name='department']").value
//             };
//         });

//         if (members.length < 2) {
//             alert("Minimum 2 members required.");
//             return;
//         }

//         const requestBody = { teamName, teamMembers: members };
//         console.log("Request Payload:", JSON.stringify(requestBody, null, 2));

//         try {
//             // Registration API call
//             const response = await fetch("http://localhost:5000/api/hackathon/register", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(requestBody)
//             });

//             const data = await response.json();
            
//             if (!response.ok) {
//                 throw new Error(data.error || `Registration failed: ${response.status} ${response.statusText}`);
//             }
            
//             console.log("Registration successful:", data);

//             // Setup Razorpay
//             const options = {
//                 key: data.key_id,
//                 amount: data.amount,
//                 currency: data.currency,
//                 name: "Hackathon Registration",
//                 description: "Register for Hackathon",
//                 order_id: data.order_id,
//                 handler: async function (razorpayResponse) {
//                     console.log("Razorpay response:", razorpayResponse);
                    
//                     const verificationPayload = {
//                         razorpay_payment_id: razorpayResponse.razorpay_payment_id,
//                         razorpay_order_id: razorpayResponse.razorpay_order_id,
//                         razorpay_signature: razorpayResponse.razorpay_signature
//                     };
                    
//                     console.log("Verification payload:", verificationPayload);
                    
//                     try {
//                         const verifyRes = await fetch("http://localhost:5000/api/hackathon/verify", {
//                             method: "POST",
//                             headers: { "Content-Type": "application/json" },
//                             body: JSON.stringify(verificationPayload)
//                         });
                        
//                         console.log("Verification response status:", verifyRes.status);
                        
//                         // Get the response data
//                         const verifyData = await verifyRes.json();
//                         console.log("Verification response data:", verifyData);
                        
//                         if (!verifyRes.ok) {
//                             throw new Error(verifyData.error || `Verification failed: ${verifyRes.status} ${verifyRes.statusText}`);
//                         }
                        
//                         if (!verifyData.success) {
//                             throw new Error(verifyData.error || "Payment verification failed");
//                         }
                        
//                         alert("Payment verified! Registration complete.");
                        
//                         // Optional: Redirect to success page
//                         // window.location.href = "/success.html";
//                     } catch (error) {
//                         console.error("Verification Error:", error);
//                         alert(`Payment verification failed: ${error.message}`);
//                     }document.addEventListener("DOMContentLoaded", function () {
//     const teamMembersContainer = document.getElementById("teamMembersContainer");
//     const addMemberBtn = document.getElementById("addMemberBtn");
//     const registerForm = document.getElementById("registerForm");

//     let memberCount = 0;

//     function addMember() {
//         if (memberCount >= 4) {
//             alert("Maximum 4 members allowed.");
//             return;
//         }
//         memberCount++;

//         const memberDiv = document.createElement("div");
//         memberDiv.classList.add("member");
//         memberDiv.innerHTML = `
//             <h4>Team Member ${memberCount}</h4>
//             <input type="text" name="firstName" placeholder="First Name" required>
//             <input type="text" name="lastName" placeholder="Last Name" required>
//             <input type="text" name="phoneNumber" placeholder="Phone Number" required>
//             <input type="text" name="registrationNumber" placeholder="Registration Number" required>
//             <input type="email" name="srmMailId" placeholder="SRM Mail ID" required>
//             <input type="text" name="department" placeholder="Department" required>
//             <button type="button" class="remove-btn">Remove</button>
//         `;
        
//         memberDiv.querySelector(".remove-btn").addEventListener("click", () => {
//             memberDiv.remove();
//             memberCount--;
//         });

//         teamMembersContainer.appendChild(memberDiv);
//     }

//     addMemberBtn.addEventListener("click", addMember);

//     registerForm.addEventListener("submit", async function (event) {
//         event.preventDefault();

//         const teamName = document.getElementById("teamName").value;
//         const members = Array.from(document.querySelectorAll(".member")).map(member => {
//             return {
//                 firstName: member.querySelector("[name='firstName']").value,
//                 lastName: member.querySelector("[name='lastName']").value,
//                 phoneNumber: member.querySelector("[name='phoneNumber']").value,
//                 registrationNumber: member.querySelector("[name='registrationNumber']").value,
//                 srmMailId: member.querySelector("[name='srmMailId']").value,
//                 department: member.querySelector("[name='department']").value
//             };
//         });

//         if (members.length < 2) {
//             alert("Minimum 2 members required.");
//             return;
//         }

//         const requestBody = { teamName, teamMembers: members };
//         console.log("Request Payload:", JSON.stringify(requestBody, null, 2));


//         try {
//             const response = await fetch("http://localhost:5000/api/hackathon/register", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(requestBody)
//             });

//             const data = await response.json();
//             if (!response.ok) throw new Error(data.error || "Failed to create order");
//             // console.log(data)

//             // const { order_id, amount, currency, key_id } = data.orderDetails;

//             const options = {
//                 key: data.key_id,
//                 amount: data.amount,
//                 currency: data.currency,
//                 name: "Hackathon Registration",
//                 description: "Register for Hackathon",
//                 order_id: data.order_id,
//                 handler: async function (response) {
//                     try{
//                         const verifyRes = await fetch("http://localhost:5000/api/hackathon/verify", {
//                             method: "POST",
//                             headers: { "Content-Type": "application/json" },
//                             body: JSON.stringify({
//                                 razorpay_payment_id: response.razorpay_payment_id,
//                                 razorpay_order_id: response.razorpay_order_id,
//                                 razorpay_signature: response.razorpay_signature
//                             })
//                         });
//                         console.log(verifyRes)
                        
    
//                         var verifyData = await verifyRes.json();
//                         //console.log(verifyData.ok)
//                         if (!verifyData.ok || !verifyData.success) throw new Error(verifyData.error || "Payment verification failed");
    
//                         alert("Payment verified! Registration complete.");
//                     }catch(error){
//                         console.error("Verification Error:", error);
//                         alert(`❌ ${error.message}`);

//                     }
//                 },
//                 theme: { color: "#3399cc" }
//             };

//             const rzp = new Razorpay(options);
//             rzp.open();
//         } catch (error) {
//             console.error("Error:", error);
//             alert(error.message);
//         }
//     });
// });

//                 },
//                 prefill: {
//                     name: members[0].firstName + " " + members[0].lastName,
//                     email: members[0].srmMailId,
//                     contact: members[0].phoneNumber
//                 },
//                 notes: {
//                     teamName: teamName
//                 },
//                 theme: { color: "#3399cc" }
//             };

//             const rzp = new Razorpay(options);
//             rzp.on('payment.failed', function (response) {
//                 console.error("Payment failed:", response.error);
//                 alert(`Payment failed: ${response.error.description}`);
//             });
//             rzp.open();
            
//         } catch (error) {
//             console.error("Registration Error:", error);
//             alert(`Registration failed: ${error.message}`);
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const teamMembersContainer = document.getElementById("teamMembersContainer");
    const addMemberBtn = document.getElementById("addMemberBtn");
    const registerForm = document.getElementById("registerForm");

    let memberCount = 0;

    function addMember() {
        if (memberCount >= 4) {
            alert("Maximum 4 members allowed.");
            return;
        }
        memberCount++;

        const memberDiv = document.createElement("div");
        memberDiv.classList.add("member");
        memberDiv.innerHTML = `
            <h4>Team Member ${memberCount}</h4>
            <input type="text" name="firstName" placeholder="First Name" required>
            <input type="text" name="lastName" placeholder="Last Name" required>
            <input type="text" name="phoneNumber" placeholder="Phone Number" required>
            <input type="text" name="registrationNumber" placeholder="Registration Number" required>
            <input type="email" name="srmMailId" placeholder="SRM Mail ID" required>
            <input type="text" name="department" placeholder="Department" required>
            <button type="button" class="remove-btn">Remove</button>
        `;
        
        memberDiv.querySelector(".remove-btn").addEventListener("click", () => {
            memberDiv.remove();
            memberCount--;
        });

        teamMembersContainer.appendChild(memberDiv);
    }

    addMemberBtn.addEventListener("click", addMember);

    registerForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const teamName = document.getElementById("teamName").value;
        const members = Array.from(document.querySelectorAll(".member")).map(member => {
            return {
                firstName: member.querySelector("[name='firstName']").value,
                lastName: member.querySelector("[name='lastName']").value,
                phoneNumber: member.querySelector("[name='phoneNumber']").value,
                registrationNumber: member.querySelector("[name='registrationNumber']").value,
                srmMailId: member.querySelector("[name='srmMailId']").value,
                department: member.querySelector("[name='department']").value
            };
        });

        if (members.length < 2) {
            alert("Minimum 2 members required.");
            return;
        }

        const requestBody = { teamName, teamMembers: members };
        console.log("Request Payload:", JSON.stringify(requestBody, null, 2));

        try {
            const response = await fetch("http://localhost:5000/api/hackathon/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestBody)
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || `Registration failed: ${response.status} ${response.statusText}`);
            }
            
            console.log("Registration successful:", data);

            // Setup Razorpay
            const options = {
                key: data.key_id,
                amount: data.amount,
                currency: data.currency,
                name: "Hackathon Registration",
                description: "Register for Hackathon",
                order_id: data.order_id,
                handler: async function (razorpayResponse) {
                    console.log("Razorpay response:", razorpayResponse);
                    
                    const verificationPayload = {
                        razorpay_payment_id: razorpayResponse.razorpay_payment_id,
                        razorpay_order_id: razorpayResponse.razorpay_order_id,
                        razorpay_signature: razorpayResponse.razorpay_signature
                    };
                    
                    console.log("Verification payload:", verificationPayload);
                    
                    try {
                        const verifyRes = await fetch("http://localhost:5000/api/hackathon/verify", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(verificationPayload)
                        });
                        
                        console.log("Verification response status:", verifyRes.status);
                        
                        // Get the response data
                        const verifyData = await verifyRes.json();
                        console.log("Verification response data:", verifyData);
                        
                        if (!verifyRes.ok) {
                            throw new Error(verifyData.error || `Verification failed: ${verifyRes.status} ${verifyRes.statusText}`);
                        }
                        
                        if (!verifyData.success) {
                            throw new Error(verifyData.message || "Payment verification failed");
                        }
                        
                        alert("Payment verified! Registration complete.");
                        window.location.href = "/success.html";
                    } catch (error) {
                        console.error("Verification Error:", error);
                        alert(`Payment verification failed: ${error.message}`);
                    }
                },
                prefill: {
                    name: members[0].firstName + " " + members[0].lastName,
                    email: members[0].srmMailId,
                    contact: members[0].phoneNumber
                },
                notes: {
                    teamName: teamName
                },
                theme: { color: "#3399cc" }
            };

            const rzp = new Razorpay(options);
            rzp.on('payment.failed', function (response) {
                console.error("Payment failed:", response.error);
                alert(`Payment failed: ${response.error.description}`);
            });
            rzp.open();
            
        } catch (error) {
            console.error("Registration Error:", error);
            alert(`Registration failed: ${error.message}`);
        }
    });
});