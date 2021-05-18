import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { ProductContext } from "../../contexts/ProductContext";
import formatCurrency from "../../util";
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review({
  handleNextStep,
  value,
  setValue,
  handlePrevStep,
}) {
  console.log(value);
  const classes = useStyles();
  const { cartItems, totalPrice, setCartItems, orderDetails, saveOrder } =
    useContext(ProductContext);
  const handleSubmit = (order) => {
    handleNextStep();
    saveOrder(order);
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };
  console.log(cartItems.map((item) => item.count));
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems.map((product) => (
          <ListItem className={classes.listItem} key={product.id}>
            <ListItemText primary={product.title} secondary={product.size} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total (included shipping)" />
          <Typography variant="subtitle1" className={classes.total}>
            {"$" + totalPrice}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            Name : {value.firstName + " " + value.lastName}
          </Typography>{" "}
          <Typography gutterBottom>Address : {value.address}</Typography>
          <Typography gutterBottom>
            Number Phone : {value.phoneNumber}
          </Typography>
          <Typography gutterBottom>City : {value.city}</Typography>
          <Typography gutterBottom>Country : {value.country}</Typography>
          <Typography gutterBottom>Zip : {value.zip}</Typography>{" "}
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>

          <Grid item xs={12} sm={6}>
            {value.nameOfCard ? (
              <Typography gutterBottom>Name : {value.nameOfCard}</Typography>
            ) : (
              ""
            )}
            {value.cardNumber ? (
              <Typography gutterBottom>
                cardNumber : {value.cardNumber}
              </Typography>
            ) : (
              ""
            )}
            {value.Date ? (
              <Typography gutterBottom>Date : {value.expiryDate}</Typography>
            ) : (
              ""
            )}
            {value.Cvv ? (
              <Typography gutterBottom>Cvv : {value.cvv}</Typography>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
        <Button
          ariant="contained"
          color="primary"
          onClick={() => handleSubmit(orderDetails)}
        >
          OK
        </Button>

        <Button ariant="contained" color="primary" onClick={handlePrevStep}>
          Back
        </Button>
      </Grid>
    </React.Fragment>
  );
}
