import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const booking = useLoaderData();
  console.log("booking data", booking);
  return (
    <div>
      <h1 className="text-3xl">Payment</h1>
    </div>
  );
};

export default Payment;
