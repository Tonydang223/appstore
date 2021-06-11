// import { Star } from "@material-ui/icons";
import Star from "../Star";
import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { UsersContext } from "../../contexts/UsersContext";
import "./ProductDetails.scss";
import EvaluateForm from "../EvaluateForm";
import ProductDetailsCount from "./ProductDetailsCount";
import ProductSize from "./ProductSize";
import ReactPaginate from "react-paginate";
const ProductDetails = () => {
  const { products, handleAddToCartFromDetails } = useContext(ProductContext);
  const { currentUser } = useContext(UsersContext);
  const { id } = useParams();
  // const newProducts = products.filter((newProduct) => newProduct.id === id);
  const newProducts = products.filter((newProduct) => newProduct.id == id);
  const productId = newProducts.map((product) => product.id);
  const [formValue, setFormValue] = useState({
    count: 0,
    size: "",
    id: "",
  });

  const [visible, setVisible] = useState(2);

  const showMoreEvaluates = () => {
    setVisible((prevValue) => prevValue + 2);
  };

  const ShowStar = (numCount) => {
    return (
      <>
        {numCount >= 1 && numCount < 2 ? (
          <>
            <i class="fa fa-star starShow" aria-hidden="true"></i>
          </>
        ) : numCount >= 2 && numCount < 3 ? (
          <>
            <i class="fa fa-star starShow" aria-hidden="true"></i>
            <i class="fa fa-star starShow" aria-hidden="true"></i>
          </>
        ) : numCount >= 3 && numCount < 4 ? (
          <>
            <i class="fa fa-star starShow" aria-hidden="true"></i>
            <i class="fa fa-star starShow" aria-hidden="true"></i>
            <i class="fa fa-star starShow" aria-hidden="true"></i>
          </>
        ) : numCount >= 4 && numCount < 5 ? (
          <>
            <i class="fa fa-star starShow" aria-hidden="true"></i>
            <i class="fa fa-star starShow" aria-hidden="true"></i>
            <i class="fa fa-star starShow" aria-hidden="true"></i>
            <i class="fa fa-star starShow" aria-hidden="true"></i>
          </>
        ) : (
          <>
            <i class="fa fa-star starShow" aria-hidden="true"></i>
            <i class="fa fa-star starShow" aria-hidden="true"></i>
            <i class="fa fa-star starShow" aria-hidden="true"></i>
            <i class="fa fa-star starShow" aria-hidden="true"></i>
            <i class="fa fa-star starShow" aria-hidden="true"></i>
          </>
        )}
      </>
    );
  };
  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
      id: productId[0],
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

  const handleEvaluating = (formValue) => {
    console.log(formValue);
  };

  const countingPercent = (dis, cur) => {
    const percentage = ((parseInt(dis) - parseInt(cur)) / parseInt(dis)) * 100;
    return +percentage.toFixed(1).toLocaleString() + "%";
  };

  const countingSaving = (dis, cur) => {
    const saving = parseInt(dis) - parseInt(cur);
    return saving.toFixed(1).toLocaleString() + "$";
  };

  console.log(countingPercent(90, 69.9));

  return (
    <>
      {newProducts.map((item) => (
        <div className="product__details" key={item._id}>
          <img src={item.image} alt={item.image} />
          <div className="product__details--content">
            <div className="product__content--above">
              <h2>{item.title}</h2>
              <span>${item.price}</span>
            </div>
            <div className="product__content--price">
              <p style={{ color: "red", fontSize: "1.2rem" }}>
                Reduce {countingPercent(item.discount, item.price)} and saving{" "}
                {countingSaving(item.discount, item.price)}
              </p>
            </div>
            <div className="product__content--star">
              <Star rating={item.rate} />
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
          <div className="product_below--evaluates">
            <EvaluateForm productId={item.id} {...item} />
            <div className="list-evaluates">
              {item.rate.slice(0, visible).map((content) => {
                return (
                  <div className="content-evaluates">
                    <h4>{content.name}</h4>
                    <p className="star">{ShowStar(content.star)}</p>
                    <p className="time">{content.time}</p>
                    <p className="content">{content.content}</p>
                  </div>
                );
              })}
              {visible < item.rate.length && (
                <button onClick={showMoreEvaluates}>Load more</button>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductDetails;
