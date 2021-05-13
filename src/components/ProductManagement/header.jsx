import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/RemoveUnderline.scss";
const Header = ({ show, setShow }) => {
  const onClick = () => {
    setShow(!show);
  };
  const onClick2 = () => {
    setShow(false);
  };
  return (
    <ul style={{listStyleType:"none"}}>
      <li>
        {show ? (
          <Button
          variant="contained"
          >
          <Link to="/admin/productManagement" onClick={onClick2} className="btn-removeUnderline">
          <a> Back </a>
          </Link>
          </Button>
        ) : (
          <Button
          variant="contained"
          >
            <Link to="/admin/productManagement/addProducts" onClick={onClick}  className="btn-removeUnderline" >
            Add Product
          </Link>
          </Button>

        )}
      </li>
    </ul>
  );
};

export default Header;
