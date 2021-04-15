import { Button } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { FastField, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import InputField from "./InputField";

export default function AddressForm({
  handleSubmitFromAddress,
  handleNext,
  className,
  activeStep,
  steps,
}) {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    address: Yup.string()
      .max(20, "Must be 20 characters or less")
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
    country: Yup.string()
      .max(10, "Must be characters or less")
      .required("Required"),
  });
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          country: "",
        }}
        validationSchema={validate}
        onSubmit={(values, { setSubmitting, resetForm }) => {
            handleSubmitFromAddress(values);
            handleNext();
            resetForm();
            setSubmitting(false);
        }}
      >
        {(formikProps) => {
          return (
            <>
              <Form>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <FastField
                      name="firstName"
                      component={InputField}
                      label="First name"
                      placeholder="First Name"
                      type="text"
                      autoComplete="given-name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FastField
                      name="lastName"
                      component={InputField}
                      label="Last name"
                      placeholder="Last name"
                      type="text"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FastField
                      name="address"
                      component={InputField}
                      label="Addresse"
                      placeholder="Address"
                      type="text"
                      autoComplete="shipping address-line2"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FastField
                      name="city"
                      component={InputField}
                      label="City"
                      placeholder="City"
                      type="text"
                      autoComplete="shipping address-line2"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FastField
                      name="state"
                      component={InputField}
                      label="State/Province/Region"
                      placeholder="State/Province/Region"
                      type="text"
                      autoComplete="shipping address-line2"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FastField
                      name="zip"
                      component={InputField}
                      label="Zip / Postal code"
                      placeholder="Zip / Postal code"
                      type="text"
                      autoComplete="shipping postal-code"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FastField
                      name="country"
                      component={InputField}
                      label="Country"
                      placeholder="Country"
                      type="text"
                      autoComplete="shipping country"
                    />
                  </Grid>

                  <Grid item xs={10}>
                    <Link to="/cart">Back to cart !</Link>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      className={className}
                    >
                      {activeStep === steps.length - 1 ? "Place order" : "Next"}
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            </>
          );
        }}
      </Formik>
    </React.Fragment>
  );
}
