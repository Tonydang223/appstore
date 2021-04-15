import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { FastField, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import InputField from "./InputField";
export default function PaymentForm({
  handleSubmitFromPayment,
  handleNext,
  className,
  activeStep,
  steps,
}) {
  const styles = {
    fontWeight: "normal",
    fontSize: 12,
    color: "gray",
    fontFamily: "Arial",
  };
  const [open, setOpen] = React.useState(false);
  const validate = Yup.object({
    nameOfCard: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    cardNumber: Yup.string()
      .matches(
        /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
        "VisaCard is invalid"
      )
      .required("Required"),
    expiryDate: Yup.string()
      .matches(
        /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
        "Exp is invalid"
      )
      .required("Required"),
    cvv: Yup.string()
      .matches(/^[0-9]{3,4}$/, "Ccv is invalid")
      .required("Required"),
  });
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Formik
        initialValues={{
          nameOfCard: "",
          cardNumber: "",
          expiryDate: "",
          cvv: "",
        }}
        validationSchema={validate}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleSubmitFromPayment(values);
          resetForm();
          handleNext();
          setSubmitting(false);
        }}
      >
        {(formikProps) => {
          return (
            <>
              <Form>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Button onClick={() => setOpen(!open)}>
                      Online payments
                    </Button>
                    <Button onClick={() => setOpen(false)}>
                      Offline payments
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <p style={styles}>
                      If you want to payment by Visa,Paypal card,... Please
                      press "Online payments" above !
                    </p>
                  </Grid>
                  {open ? (
                    <>
                      {" "}
                      <Grid item xs={12} md={6}>
                        <FastField
                          name="nameOfCard"
                          component={InputField}
                          label="Name Of Card"
                          placeholder="Name Of Card"
                          type="text"
                          autoComplete="cc-name"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FastField
                          name="cardNumber"
                          component={InputField}
                          label="Card Number"
                          placeholder="Card number"
                          type="text"
                          autoComplete="cc-number"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FastField
                          name="expiryDate"
                          component={InputField}
                          label="Expiry date"
                          placeholder="Expiry date"
                          type="text"
                          autoComplete="cc-exp"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FastField
                          name="cvv"
                          component={InputField}
                          label="CVV"
                          placeholder="CVV"
                          type="text"
                          autoComplete="cc-csc"
                        />
                      </Grid>
                      <Grid item xs={7}></Grid>
                      <Grid item xs={5}>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          className={className}
                        >
                          {activeStep === steps.length - 1
                            ? "Place order"
                            : "Payment by online"}
                        </Button>
                      </Grid>
                    </>
                  ) : (
                    ""
                  )}
                </Grid>
              </Form>
            </>
          );
        }}
      </Formik>
    </React.Fragment>
  );
}
