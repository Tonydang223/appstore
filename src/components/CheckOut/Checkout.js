import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddressForm from "./AddressForm";
import PaymentForm from "./Payment";
import Review from "./Review";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {/* <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "} */}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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

const steps = ["Shipping address", "Payment details", "Review your order"];

export default function Checkout() {
  const { handleClearAll } = useContext(ProductContext);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [isShowing, setIsShowing] = useState(false);
  const [infCus, setInfCus] = useState("");
  const [infShipping, setInfShipping] = useState();
  const handleSubmitFromAddress = (values) => {
    setInfCus(values);
  };
  const handleSubmitFromPayment = (value) => {
    setInfShipping(value);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <AddressForm
            handleSubmitFromAddress={handleSubmitFromAddress}
            handleNext={handleNext}
            activeStep={activeStep}
            steps={steps}
            className={classes.button}
          />
        );
      case 1:
        return (
          <PaymentForm
            handleSubmitFromPayment={handleSubmitFromPayment}
            handleNext={handleNext}
            activeStep={activeStep}
            steps={steps}
            className={classes.button}
          />
        );
      case 2:
        return <Review infCus={infCus} infShipping={infShipping} />;
      default:
        throw new Error("Unknown step");
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setIsShowing(true);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    setIsShowing(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is {uuidv4()}. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
                <Link to="/product" onClick={handleClearAll}>
                  Continue to shopping!
                </Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  {isShowing ? (
                    <>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1
                          ? "Place order"
                          : "Next"}
                      </Button>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
