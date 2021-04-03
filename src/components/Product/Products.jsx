import React, { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import "../../css/Products.scss";
import Filter from "../Filter";
import ProductList from "./ProductList";
const Products = () => {
  const [isSearch, setIsSearch] = useState(false);
  const { products, searchProduct, handleSearchSubmit } = useContext(
    ProductContext
  );
  const handleSubmit = (searchSubmit) => {
    searchSubmit ? setIsSearch(true) : setIsSearch(false)
    handleSearchSubmit(searchSubmit);
  };
  console.log(isSearch)
  return (
    <main>
      <Filter products={isSearch ? searchProduct : products} handleSubmit={handleSubmit} />
      <div className="product__container">
        <ProductList products={isSearch ? searchProduct : products} />
      </div>
    </main>
  );
};

export default Products;
