import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";

const ProductDetailsCount = ({ item, count, handleChange }) => {
  const { handleAddClick, handleRemoveClick } = useContext(ProductContext);

  return (
    <>
      <h3>Counts</h3>
      <input name="count" type="text" value={count} onChange={handleChange} />
    </>
  );
};

export default ProductDetailsCount;
