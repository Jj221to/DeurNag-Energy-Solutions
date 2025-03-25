document.addEventListener("DOMContentLoaded", function () {
    const preOrderBtn = document.getElementById("preOrderBtn");

    if (preOrderBtn) {
        preOrderBtn.addEventListener("click", function (event) {
            event.preventDefault();

            // Generate a unique pre-order code
            const preOrderCode = "DN-" + Math.random().toString(36).substring(2, 10).toUpperCase();

            // Get customer email
            const customerEmail = document.getElementById("email").value;

            if (!customerEmail) {
                alert("Please enter your email before pre-ordering.");
                return;
            }

            // Send pre-order code via email
            sendPreOrderEmail(customerEmail, preOrderCode);
        });
    }
});

function sendPreOrderEmail(customerEmail, preOrderCode) {
    // Construct email data
    const emailBody = `Thank you for your pre-order!\n\nYour unique order code is: ${preOrderCode}\n\nWe will contact you soon.`;
    
    // Send email to the customer
    window.open(`mailto:${customerEmail}?subject=Your DeurNag Pre-Order Code&body=${encodeURIComponent(emailBody)}`);

    // Send email to sales@deurnag.com
    setTimeout(() => {
        window.open(`mailto:sales@deurnag.com?subject=New Pre-Order&body=Customer Email: ${customerEmail}%0AOrder Code: ${preOrderCode}`);
    }, 1000);

    alert(`Your pre-order code: ${preOrderCode}\nIt has been sent to your email.`);
}
