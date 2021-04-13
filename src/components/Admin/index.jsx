import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../../css/Admin.scss";
import AccountManagement from "../AccountManagement";
import ContactManagement from "../ContactManagement";
import OrderManagement from "../OrderManagement";
import ProductManagement from "../ProductManagement";
import AdminHeader from "./adminHeader";
const Admin = ({users,setUsers}) => {
  return (
    <div className="admin-wrapper">
        <div className="left-sidebar">
          <AdminHeader />
        </div>
        <div className="admin-content">
          <Switch>
            <Route path="/admin/productManagement">
              <ProductManagement />
            </Route>
            <Route exact path="/admin/accountManagement">
              <AccountManagement />
            </Route>
            <Route exact path="/admin/contactManagement">
              <ContactManagement />
            </Route>
            <Route exact path="/admin/orderManagement">
              <OrderManagement />
            </Route>
          </Switch>
        </div>
    </div>
  );
};

export default Admin;
