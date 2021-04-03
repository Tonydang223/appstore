import { Form, Formik } from "formik";
import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import * as Yup from "yup";
import "../../css/Proceed.scss";
import PopupSuccessful from "../Popups/PopupSuccessful";
import Payment from "./Payment";
import TextField from "./TextField";

const Proceed = ({ setIsProceed }) => {
  // let history = useHistory();
  const [isPopup, setIsPopup] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const handleBackToCart = () => {
    // history.push('/cart')
  }
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Required"),
    street: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    city: Yup.string()
      .max(10, "Must be 10 characters or less")
      .required("Required"),
    state: Yup.string()
      .max(10, "Must be characters or less")
      .required("Required"),
    zip: Yup.string()
      .matches(/^\d{5}$|^\d{5}-\d{4}$/, "ZipCode is invalid")
      .required("Required"),
    // visaCard: Yup.string()
    //   .matches(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/, "visaCard is invalid")
    //   .required("Required"),
    // masterCard: Yup.string()
    //   .matches(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/, "Master Card is invalid")
    //   .required("Required"),
    exp: Yup.string()
      .matches(
        /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
        "Exp is invalid"
      )
      .required("Required"),
    ccv: Yup.string()
      .matches(/^[0-9]{3,4}$/, "Ccv is invalid")
      .required("Required"),
  });
  return (
    <Fade right cascade={true}>
      <div className="wrapper">
        <div className="container">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              street: "",
              city: "",
              state: "",
              zip: "",
              visaCard: "",
              masterCard: "",
              exp: "",
              ccv: "",
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                resetForm();
                setSubmitting(false);
                setIsPopup(!isPopup);
              }, 1000);
            }}
            // onSubmit={(values) => {
            //   // same shape as initial values
            //   console.log(values);
            // }}
            validationSchema={validate}
          >
            {(formikProps) => {
              return (
                <>
                  <Form>
                    <h1>
                      <i className="fas fa-shipping-fast"></i>
                      Shipping Details
                    </h1>
                    <div className="name">
                      <TextField
                        label="First Name"
                        name="firstName"
                        type="text"
                      />
                      <TextField
                        label="Last Name"
                        name="lastName"
                        type="text"
                      />
                    </div>
                    <div className="street">
                      <TextField label="Street" name="street" type="text" />
                      <TextField label="Email" name="email" type="text" />
                    </div>
                    <div className="address-info">
                      <TextField label="City" name="city" type="text" />
                      <TextField label="State" name="state" type="text" />
                      <TextField label="Zip" name="zip" type="text" />
                    </div>
                    <div className="cc-typesOfPayment">
                      <ul>
                        <Payment setIsShowing={setIsShowing} />
                      </ul>
                    </div>
                    {isShowing ? (
                      <>
                        <Fade right cascade={true}>
                          <h1>
                            <i className="far fa-credit-card"></i> Payment
                            Infomations
                          </h1>

                          <div className="cc-num">
                            <TextField
                              label="Credit Card No ."
                              name="visaCard"
                              type="text"
                            />
                          </div>
                          <div className="cc-info">
                            <TextField label="Exp" name="exp" type="text" />
                            <TextField label="Ccv" name="ccv" type="text" />
                          </div>
                        </Fade>
                      </>
                    ) : (
                      " "
                    )}
                    <div className="btns">
                      <button type="submit">
                        {formikProps.isSubmitting ? "Loading..." : "Purchase"}
                      </button>
                      <ul>
                        <li onClick={() => setIsProceed(false)}>
                          Back to cart !
                        </li>
                      </ul>
                    </div>
                  </Form>
                </>
              );
            }}
          </Formik>
        </div>
      </div>
      <PopupSuccessful isPopup={isPopup} setIsPopup={setIsPopup} />
    </Fade>
  );
};

export default Proceed;
