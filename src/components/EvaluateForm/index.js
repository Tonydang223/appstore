import React, { useContext, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { ProductContext } from "../../contexts/ProductContext";
import { UsersContext } from "../../contexts/UsersContext";
import { v4 as uuidv4 } from "uuid";
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

  const { setCurrentUser, currentUser } = useContext(UsersContext);
  const { updateProduct, products } = useContext(ProductContext);
  const currentProduct = products.filter((element) => element.id === productId);

  const [ratingValue, setRatingValue] = useState({
    id: uuidv4(),
    star: "",
    content: "",
    name: currentUser,
  });

  const [formValue, setFormValue] = useState({
    availableSizes: availableSizes,
    category: category,
    description: description,
    discount: discount,
    id: id,
    image: image,
    price: price,
    title: title,
    rate: rate,
  });
  const ratingChanged = (newRating) => {
    setRatingValue({ ...ratingValue, star: newRating });
  };
  const resetForm = () => {
    setRatingValue({
      id: uuidv4(),
      star: "",
      content: "",
      name: currentUser,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (ratingValue.rating === "" || ratingValue.content === "") {
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
  };
  return (
    <>
      <form>
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
          onChange={(e) =>
            setRatingValue({ ...ratingValue, content: e.target.value })
          }
        />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default EvaluateForm;
