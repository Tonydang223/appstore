import React, { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { UsersContext } from "../../contexts/UsersContext";
import DetailsIcon from "@material-ui/icons/Details";
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "../Modal";
import TextField from "@material-ui/core/TextField";
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from "@material-ui/icons/Search";
import "../../css/RemoveUnderline.scss";


const ManageOrder = () => {
  const { handleRemoveProduct, orderedItems, deleteOrder } =
    useContext(ProductContext);
  const [hideModal, setHideModal] = useState(true);
  const [orderID, setOrderID] = useState("");
  const toggleModal = () => setHideModal(!hideModal);
  console.log(
    orderedItems.map((item) => {
      return item;
    })
  );
  const handleTab = (orderId) => {
    toggleModal();
    setOrderID(orderId);
  };
  const[searchOrder,setsearchOrder] = useState("")
  const onChange = (e) => {
    e.preventDefault();
    setsearchOrder(e.target.value);
  };
  const searchValueOrder = (val) => {
    const filterOrder = val.filter((item) => {
      if (searchOrder === "") {
        return item;
      } else if  (
        item.firstName.toLowerCase().includes(searchOrder.toLowerCase()) ||
        item.address.toLowerCase().includes(searchOrder.toLowerCase()) ||
        item.phoneNumber.toString().includes(searchOrder.toLowerCase()) 
        // item.nameOfCard.toLowerCase().includes(searchOrder.toLowerCase()) >-1
        // item.cardNumber.toString().includes(searchOrder.toLowerCase())
      ) {
        return item;
      }
    });
    return filterOrder;
  };
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
      margin: 30,
      padding: 20,
    },
    body: {
      fontSize: 13,
    },
    minWidth: {
      minWidth: 100,
      fontWeight: "bold",
      fontSize: 14,
      height: 20,
      fontFamily: "Arial, Helvetica, sans-serif",
    },
    minWidth1: {
      minWidth: 120,
      fontWeight: "bold",
      fontSize: 14,
      fontFamily: "Arial, Helvetica, sans-serif",
    },
    bold: {
      fontWeight: "bold",
      fontSize: 13,
      fontFamily: "Arial, Helvetica, sans-serif",
    },
    paddingLeft: {
      paddingLeft: 37,
      fontWeight: "bold",
      fontSize: 13,
    },
    color: {
      color: "#004040",
      minWidth: 40,
      marginRight: 20
    },
    hover: {
      "&:hover": {
        backgroundColor: "#ffffff",
      },
    },
  });
  const classes = useStyles();
  const configModal = {
    hideModal,
    toggleModal,
    headline: "Detail ordered products",
  };
  const orderDetails = orderedItems.filter((order) => order.id === orderID);
  console.log(orderDetails);
  return (
    <>
     <TextField
          id="standard-secondary"
          label="Search"
          color="secondary"
          name="search"
          value={searchOrder}
          style={{marginBottom:"50px",width:"200px"}}
          onChange={onChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
             )
            }}
        />
      <Modal {...configModal}>
        {/* {orderedItems.map(order=>order.products.map(

        ))} */}
        <TableContainer component={Paper}>
          <Table aria-label="simple table" className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell align="left" className={classes.bold}>
                  Title
                </TableCell>
                <TableCell align="left" className={classes.minWidth}>
                  Image
                </TableCell>
                <TableCell align="left" className={classes.minWidth}>
                  Count
                </TableCell>
                <TableCell align="left" className={classes.minWidth}>
                  Size
                </TableCell>
              </TableRow>
            </TableHead>
            {orderDetails.map((order) =>
              order.products.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>
                    <img src={item.image} style={{width: 90, marginLeft: -25}} alt="itemImage" />
                  </TableCell>
                  <TableCell style={{textAlign: 'left'}}>{item.count}</TableCell>
                  <TableCell style={{textAlign:'left'}}>{item.size}</TableCell>
                </TableRow>
              ))
            )}
          </Table>
        </TableContainer>
      </Modal>
      <TableContainer component={Paper}>
        <Table aria-label="simple table" className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="left" className={classes.bold}>
                ID
              </TableCell>
              <TableCell align="left" className={classes.minWidth}>
                First Name
              </TableCell>
              <TableCell align="left" className={classes.minWidth}>
                Address
              </TableCell>
              <TableCell align="left" className={classes.minWidth}>
                Phone number
              </TableCell>
              <TableCell align="left" className={classes.minWidth1}>
                Ordered Quantity
              </TableCell>
              <TableCell align="left" className={classes.bold}>
                Card Name
              </TableCell>
              <TableCell
                align="left"
                pageSize={7}
                className={classes.bold && classes.minWidth}
              >
                Card Number
              </TableCell>
              <TableCell
                colSpan="2"
                align="left"
                className={classes.bold && classes.paddingLeft}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          {searchValueOrder(orderedItems).map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.firstName}</TableCell>
              <TableCell>{item.address}</TableCell>
              <TableCell>{item.phoneNumber}</TableCell>
              <TableCell align="center">{item.products.length}</TableCell>
              <TableCell>
                {item.nameOfCard ? item.nameOfCard : "None"}
              </TableCell>
              <TableCell>
                {item.cardNumber ? item.cardNumber : "None"}
              </TableCell>
              <TableCell>
                <Button onClick={() => handleTab(item.id)}>
                  {" "}
                  <DetailsIcon />
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  className={classes.color}
                  onClick={() => deleteOrder(item.id)}
                >
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </TableContainer>
    </>
  );
};

export default ManageOrder;
