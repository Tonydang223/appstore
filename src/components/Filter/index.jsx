import React, { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import "../../css/Filter.scss";

const Filter = ({ handleSubmit, products }) => {
  const [search, setSearch] = useState("");
  const {
    size,
    setSize,
    sort,
    category,
    setCategory,
    handleSortCategory,
    handleFilterProducts,
    handleSortProducts,
    setIsFilter,
  } = useContext(ProductContext);
  const handleSearch = (e) => {
    e.preventDefault();
    handleSubmit(search);
    setSearch("");
  };
  const filterHandler = (e) => {
    setSize(e.target.value);
    const productFilter = [...products];
    const product = productFilter.filter(
      (el) => el.availableSizes.indexOf(e.target.value) >= 0
    );
    if (e.target.value === "All") {
      setIsFilter(false);
      handleFilterProducts(productFilter);
    } else {
      setIsFilter(true);
      handleFilterProducts(product);
    }
  };
  const filterCategoryHandler = (e) => {
    const categoryValue = e.target.value;
    setCategory(categoryValue);
    const productsFilter = [...products];
    const product = productsFilter.filter(
      (el) => el.category === categoryValue
    );
    if (categoryValue === "All") {
      setIsFilter(false);
      handleFilterProducts(productsFilter);
    } else {
      setIsFilter(true);
      handleFilterProducts(product);
    }
  };
  const style = {
    display: "flex",
  };
  return (
    <div className="filter__content">
      <div className="filter__content--result">
        {products.length} Products were found
      </div>
      <div className="filter__content--center">
        <div className="search">
          <form onSubmit={handleSearch} style={style}>
            <input
              type="text"
              className="searchTerm"
              placeholder="What are you looking for?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="searchButton">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
      <div className="filter__content--right">
        <div className="filter__content--sort">
          Order{" "}
          <select value={sort} onChange={handleSortProducts}>
            <option value="Latest">Latest</option>
            <option value="Lowest">Lowest</option>
            <option value="Highest">Highest</option>
          </select>
        </div>
        <div className="filter__content--size">
          Filter{" "}
          <select value={size} onChange={filterHandler}>
            <option value="All">All</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
        <div className="filter__content--category">
          Category{" "}
          <select value={category} onChange={filterCategoryHandler}>
            <option value="All">All</option>
            <option value="T-shirts">T-Shirts</option>
            <option value="Coats">Coats</option>
            <option value="Shirts">Shirts</option>
            <option value="Trousers">Trousers</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
