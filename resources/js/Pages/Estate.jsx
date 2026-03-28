import React, { useEffect, useRef } from 'react'

const PayPalPayment = ({ price, propertyName }) => {
  // We use a ref to tell PayPal exactly where to render the buttons
  const paypalRef = useRef();

  useEffect(() => {
    // 1. Create the script element to load PayPal SDK
    // Note: Replace 'test' with your actual Client ID from the PayPal Developer Dashboard
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=AZHtqD5smpsIlSmvdXH0UzU0va2GF3_LFnho-W7GIwPr8ni0K8tqav7sFwi5yc_YI9qM1NazYkfh--6R&currency=USD`;
    script.async = true;

    script.onload = () => {
      // 2. Initialize the PayPal buttons once the script loads
      window.paypal.Buttons({
        // Style configuration to reduce the height
        style: {
          layout: 'vertical',
          height: 25, // Adjust this value (25-55) to get the perfect "slim" look
        },
        // This function triggers when the user clicks the button
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: propertyName || "Property Purchase",
                amount: {
                  currency_code: "USD",
                  // Reverted to simple string as per your tutorial
                  value: String(price),
                },
              },
            ],
          });
        },
        // This function triggers after the user approves the payment in the popup
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          
          // This is the 'Transaction ID' you mentioned!
          console.log("Payment Successful. Transaction ID: " + order.id);
          
          alert(`Success! Transaction ID: ${order.id}. Thank you for your purchase, ${order.payer.name.given_name}!`);
          
          // You can now send 'order.id' to your backend/database via Inertia or Axios
        },
        // Handles errors during the transaction
        onError: (err) => {
          console.error("PayPal Checkout Error:", err);
          alert("Something went wrong with the payment. Please try again.");
        },
      }).render(paypalRef.current);
    };

    // Add the script to the page so it can load
    document.body.appendChild(script);

    // Cleanup: Remove the script if the user leaves the page
    return () => {
      document.body.removeChild(script);
    };
  }, [price, propertyName]);

  return (
    <div className="w-full mt-1">
      {/* This is where the PayPal and Credit Card buttons will appear */}
      <div ref={paypalRef}></div>
    </div>
  )
}

export default PayPalPayment