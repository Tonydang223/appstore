import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ContactsIcon from '@material-ui/icons/Contacts';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';
import { makeStyles} from '@material-ui/core';
const AdminHeader = () => {
  const {url} = useRouteMatch();
  const useStyles = makeStyles({
     icons:{
       fontSize:"18px",
       marginRight:"10px",
       marginBottom:"-2.7px"
     }
  });
  const classes = useStyles();
  return (
    <div>
      <ul>
        <li>
          <Link to="/admin/productManagement"><ShoppingBasketRoundedIcon className={classes.icons}/>Manage Products </Link>
        </li>
        <li>
          <Link to="/admin/accountManagement"><AccountCircleRoundedIcon className={classes.icons}/>Manage Accounts </Link>
        </li>
        <li>
          <Link to="/admin/contactManagement"><ContactsIcon className={classes.icons}/>Manage Contact </Link>
        </li>
        <li>
          <Link  to="/admin/orderManagement"><ShoppingCartRoundedIcon className={classes.icons}/>Manage Order </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminHeader;
