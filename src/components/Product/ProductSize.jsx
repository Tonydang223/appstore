import React from "react";

const ProductSize = ({ item, size, handleChange }) => {
  return (
    <>
      {" "}
      <input
        type="radio"
        name="size"
        value={item}
        checked={size === item}
        onChange={handleChange}
      />
      {item}
    </>
  );
};

export default ProductSize;
