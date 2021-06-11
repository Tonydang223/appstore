import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../Admin/Admin.scss";
import AccountManagement from "../AccountManagement";
import ContactManagement from "../ContactManagement";
import OrderManagement from "../OrderManagement";
import ProductManagement from "../ProductManagement";
import AdminHeader from "./adminHeader";
const Admin = () => {
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
            <Route path="/admin/accountManagement">
              <AccountManagement />
            </Route>
            <Route path="/admin/contactManagement">
              <ContactManagement />
            </Route>
            <Route path="/admin/orderManagement">
              <OrderManagement />
            </Route>
          </Switch>
        </div>
    </div>
  );
};

export default Admin;
