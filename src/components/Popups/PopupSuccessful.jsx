import React from "react";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "../../css/Popup.scss";
const PopupSuccessful = ({ isPopup, setIsPopup }) => {
  let history = useHistory();
  const handleClick = () => {
    setIsPopup(false);
    history.push("/product");
  };
  return isPopup ? (
    <>
      <Fade top cascade={true}>
        <div className="popup">
          <div className="popup_inner">
            <img
              src="https://www.freeiconspng.com/thumbs/success-icon/success-icon-10.png"
              alt="success"
              width="150px"
              height="150px"
            />
            <h2>Awesome</h2>
            <p>
              Your order has been confirmed. <br />
              Check your email for details !
            </p>
            <button onClick={handleClick}>OK !</button>
          </div>
        </div>
      </Fade>
    </>
  ) : (
    ""
  );
};

export default PopupSuccessful;
