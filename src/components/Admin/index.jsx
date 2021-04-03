import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../../css/Admin.scss";
import ContactManagement from "../ContactManagement";
import OrderManagement from "../OrderManagement";
import ProductManagement from "../ProductManagement";
import AdminHeader from "./adminHeader";
const Admin = () => {
  return (
    <div className="admin-wrapper">
      <Router>
        <div className="left-sidebar">
          <AdminHeader />
        </div>
        <div className="admin-content">
          <Switch>
            <Route exact path="/admin/productManagement">
              <ProductManagement />
            </Route>
            <Route exact path="/admin/contactManagement">
              <ContactManagement />
            </Route>
            <Route exact path="/admin/orderManagement">
              <OrderManagement />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Admin;
