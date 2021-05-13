import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { UsersContext } from "../../contexts/UsersContext";
import "../../css/ProductList.scss";
import Fade from "react-reveal/Fade";
import { Result, Button } from "antd";
import ReactPaginate from "react-paginate";
import "../../css/Pagination.scss";
const ProductList = ({ products }) => {
  const { handleAddToCart, user } = useContext(ProductContext);
  const { currentUser } = useContext(UsersContext);
  const handleAddClick = (product) => {
    if (currentUser) {
      handleAddToCart(product);
    } else {
      alert("You need to login to do that !");
    }
  };
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 8;
  const pageVisited = pageNumber * productPerPage;
  const displayProducts = products
    .slice(pageVisited, pageVisited + productPerPage)
    .map((product) => (
      <li key={product.id}>
        <div className="products__item">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.src} />
          </Link>
          <div className="products__item--content">
            <h3>
              <Link to={`/product/${product.id}`}>{product.title}</Link>
            </h3>
            <div className="products__content--price">
              <span>{product.price} $</span>
              <p>{product.discount} $</p>
            </div>
            <button onClick={() => handleAddClick(product)}>Add to cart</button>
          </div>
        </div>
      </li>
    ));
  const pageCount = Math.ceil(products.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  console.log(products);
  return (
    <>
      <div className="product__list-container">
        {products.length === 0 ? (
          <div className="product__list--error">
            <Result
              status="500"
              title="500"
              subTitle="Sorry, There is no clothes here!."
            />
          </div>
        ) : (
          <>
            <Fade bottom cascade={true}>
              <div className="product__list--content">
                <ul className="products__list">{displayProducts}</ul>
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={products ? "pagination" : "displayNone"}
                  previousLinkClassName={"previousBtn"}
                  nextLinkClassName={"nextBtn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                />
              </div>
            </Fade>
          </>
        )}
      </div>
    </>
  );
};

export default ProductList;
