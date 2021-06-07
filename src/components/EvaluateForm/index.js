import React, { useContext, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { ProductContext } from "../../contexts/ProductContext";
import { UsersContext } from "../../contexts/UsersContext";
import { v4 as uuidv4 } from "uuid";
import "../EvaluateForm/Evaluate.scss";
import { useHistory } from "react-router";
const EvaluateForm = (props) => {
  const {
    productId,
    availableSizes,
    category,
    description,
    discount,
    id,
    image,
    price,
    title,
    rate,
  } = props;
  const history = useHistory();
  const { setCurrentUser, currentUser } = useContext(UsersContext);
  const { updateProduct, products } = useContext(ProductContext);
  const currentProduct = products.filter((element) => element.id === productId);

  const [ratingValue, setRatingValue] = useState({
    id: uuidv4(),
    star: "",
    content: "",
    name: currentUser,
    time: "",
  });
  const today = new Date();
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "October",
    "Nov",
    "Dec",
  ];
  const date =
    today.getFullYear() +
    "-" +
    months[today.getMonth()] +
    "-" +
    today.getDate() +
    "--" +
    today.toLocaleTimeString();
  const ratingChanged = (newRating) => {
    setRatingValue({ ...ratingValue, star: newRating, time: date });
  };
  const resetForm = () => {
    setRatingValue({
      id: uuidv4(),
      star: "",
      content: "",
      name: currentUser,
      time: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      if (
        ratingValue.rating === "" ||
        ratingValue.content === "" ||
        ratingValue.name === "" ||
        ratingValue.star === "" ||
        ratingValue.time === ""
      ) {
        alert("you must provide a rating");
      } else {
        const rating = rate.push(ratingValue);
        const newValue = {
          availableSizes: availableSizes,
          category: category,
          description: description,
          discount: discount,
          id: id,
          image: image,
          price: price,
          title: title,
          rate: rate,
        };
        updateProduct(newValue);
        resetForm();
      }
    } else {
      alert("you have to login to give your evaluates !");
    }
  };
  return (
    <>
      <div className="EvaluateForm">
        <form>
          <h2>Evaluate {"&"} Review </h2>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
          <textarea
            cols="30"
            rows="10"
            value={ratingValue.content}
            placeholder="Please input any evaluate you want"
            onChange={(e) =>
              setRatingValue({
                ...ratingValue,
                content: e.target.value,
                time: date,
              })
            }
          />
          <br />
          <button className="btn-submit" type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default EvaluateForm;
