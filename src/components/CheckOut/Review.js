import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { ProductContext } from "../../contexts/ProductContext";
import formatCurrency from "../../util";
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

export default function Review({ infCus, infShipping }) {
  const classes = useStyles();
  const { cartItems, totalPrice } = useContext(ProductContext);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems.map((product) => (
          <ListItem className={classes.listItem} key={product._id}>
            <ListItemText primary={product.title} secondary={product.size} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total (included shipping)" />
          <Typography variant="subtitle1" className={classes.total}>
            {formatCurrency(totalPrice)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            Name : {infCus.firstName + " " + infCus.lastName}
          </Typography>{" "}
          <Typography gutterBottom>Address : {infCus.address}</Typography>
          <Typography gutterBottom>City : {infCus.city}</Typography>
          <Typography gutterBottom>Country : {infCus.country}</Typography>
          <Typography gutterBottom>Zip : {infCus.zip}</Typography>{" "}
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          {infShipping ? (
            <>
              <Grid item xs={12} sm={6}>
                <Typography gutterBottom>
                  Name : {infShipping.nameOfCard}
                </Typography>{" "}
                <Typography gutterBottom>
                  Number : {infShipping.cardNumber}
                </Typography>
                <Typography gutterBottom>
                  Date : {infShipping.expiryDate}
                </Typography>
                <Typography gutterBottom>Cvv : {infShipping.cvv}</Typography>
              </Grid>
            </>
          ) : (
            "There is no any details here! "
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
