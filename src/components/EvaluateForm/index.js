import React, { useContext, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { ProductContext } from "../../contexts/ProductContext";
import { UsersContext } from "../../contexts/UsersContext";
import { v4 as uuidv4 } from "uuid";
const EvaluateForm = ({ id }) => {
  const { setCurrentUser, currentUser } = useContext(UsersContext);
  const { updateEvaluate } = useContext(ProductContext);
  console.log(currentUser);
  const [ratingValue, setRatingValue] = useState({
    id: uuidv4(),
    rating: "",
    content: "",
    currentUser: currentUser,
  });
  const ratingChanged = (newRating) => {
    setRatingValue({ ...ratingValue, rating: newRating });
  };
  const resetForm = () => {
    setRatingValue({
      rating: "",
      content: "",
      currentUser: currentUser,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (ratingValue.rating === "" || ratingValue.content === "") {
      alert("you must provide a rating");
    } else {
      updateEvaluate(ratingValue, id);
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
