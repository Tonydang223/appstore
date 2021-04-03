import React from "react";
const Payment = ({ setIsShowing }) => {
  return (
    <>
      <li onClick={() => setIsShowing(false)}>None</li>
      <li onClick={() => setIsShowing(true)}>
        <i className="fab fa-cc-visa"></i>
        Visa
      </li>
      <li onClick={() => setIsShowing(true)}>
        <i className="fab fa-cc-mastercard"></i>
        Master Card
      </li>
    </>
  );
};

export default Payment;
