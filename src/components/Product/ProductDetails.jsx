import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { UsersContext } from "../../contexts/UsersContext";
import "../../css/ProductDetails.scss";
import formatCurrency from "../../util";
import formatNumber from "../../util2";
import ProductDetailsCount from "./ProductDetailsCount";
import ProductSize from "./ProductSize";
const ProductDetails = () => {
  const { products, handleAddToCartFromDetails } = useContext(ProductContext);
  const { currentUser } = useContext(UsersContext);
  const { id } = useParams();
  const newProducts = products.filter((newProduct) => newProduct._id === id);
  const productId = newProducts.map((product) => product._id);
  const [formValue, setFormValue] = useState({
    count: 0,
    size: "",
    _id: "",
  });

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
      _id: productId[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      handleAddToCartFromDetails(formValue);
      setFormValue({
        count: 0,
        size: "",
        _id: "",
      });
    } else {
      alert("You must to login to do that !");
    }
  };

  return (
    <>
      {newProducts.map((item) => (
        <div className="product__details" key={item._id}>
          <img src={item.image} alt={item.image} />
          <div className="product__details--content">
            <div className="product__content--above">
              <h2>{item.title}</h2>
              <span>{formatCurrency(item.price)}</span>
            </div>
            <div className="product__content--below">
              AvailableSizes:{" "}
              {item.availableSizes.map((item, index) => (
                <div className="availableSizes__Color" key={index}>
                  <ProductSize
                    size={formValue.size}
                    handleChange={handleChange}
                    item={item}
                  />
                </div>
              ))}
              <p>Category: {item.category}</p>
              <p>Description: {item.description}</p>
              <form onSubmit={handleSubmit}>
                <div className="product__below--count">
                  <ProductDetailsCount
                    item={item}
                    count={formValue.count}
                    handleChange={handleChange}
                  />
                </div>
                <div className="product__below--btn">
                  <Link to="/product">Continue Shopping</Link>
                  <button className="cart" onClick={handleSubmit}>
                    Add to cart
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductDetails;
