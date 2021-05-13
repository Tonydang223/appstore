import { CssBaseline, makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import Typography from "@material-ui/core/Typography";
import React, { useState, useContext } from "react";
import AddressForm from "./AddressForm";
import PaymentForm from "./Payment";
import Results from "./Results";
import Review from "./Review";

import { ProductContext } from "../../contexts/ProductContext";
const Checkout = () => {
  const [value, setValue] = useState({});
  const [step, setStep] = useState(0);
  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handlePrevStep = () => {
    setStep(step - 1);
  };
  const steps = ["Shipping address", "Payment details", "Review your order"];
  const useStyles = makeStyles((theme) => ({
    appBar: {
      position: "relative",
    },
    layout: {
      width: "auto",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: "flex",
      justifyContent: "flex-end",
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));
  const { orderDetails, setOrderDetails } = useContext(ProductContext);
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <AddressForm
            handleNextStep={handleNextStep}
            value={orderDetails}
            setValue={setOrderDetails}
          />
        );
      case 1:
        return (
          <PaymentForm
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
            value={orderDetails}
            setValue={setOrderDetails}
          />
        );
      case 2:
        return (
          <Review
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
            setValue={orderDetails}
            value={setOrderDetails}
          />
        );
      case 3:
        return <Results />;
      default:
        throw new Error("Unknown step");
    }
  }
  const classes = useStyles();
  return (
    <>
      <CssBaseline>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={step} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <>{getStepContent(step)}</>
          </Paper>
        </main>
      </CssBaseline>
    </>
  );
};

export default Checkout;
