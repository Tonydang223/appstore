import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = ({ show, setShow }) => {
  const onClick = () => {
    setShow(!show);
  };
  const onClick2 = () => {
    setShow(false);
  };
  return (
    <ul>
      <li>
        {show ? (
          <Link to="/admin/productManagement" onClick={onClick2}>
            Back
          </Link>
        ) : (
          <Link to="/admin/productManagement/addProducts" onClick={onClick}>
            Add Product
          </Link>
        )}
      </li>
    </ul>
  );
};

export default Header;
