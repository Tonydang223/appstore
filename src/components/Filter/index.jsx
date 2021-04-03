import React, { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import "../../css/Filter.scss";

const Filter = ({ handleSubmit, products }) => {
  const [search, setSearch] = useState("");
  const {
    size,
    sort,
    category,
    handleSortCategory,
    handleFilterProducts,
    handleSortProducts,
  } = useContext(ProductContext);
  const handleSearch = (e) => {
    e.preventDefault();
    handleSubmit(search);
    setSearch("");
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
          <select value={size} onChange={handleFilterProducts}>
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
          <select value={category} onChange={handleSortCategory}>
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
