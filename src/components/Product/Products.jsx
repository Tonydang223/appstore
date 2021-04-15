import React, { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import "../../css/Products.scss";
import Filter from "../Filter";
import ProductList from "./ProductList";
const Products = () => {
  const { products, handleSearchSubmit, productFilter } = useContext(
    ProductContext
  );
  const handleSubmit = (searchSubmit) => {
    handleSearchSubmit(searchSubmit);
  };
  return (
    <main>
      <Filter products={productFilter(products)} handleSubmit={handleSubmit} />
      <div className="product__container">
        <ProductList products={productFilter(products)} />
      </div>
    </main>
  );
};

export default Products;
