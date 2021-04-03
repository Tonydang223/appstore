import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../../css/ProductManagement.scss";
import ProductForm from "../ProductsForm";
import Header from "./header";
import ManageProduct from "./ManageProduct";
const ProductManagement = () => {
  return (
    <div className="productManagement__wrapper">
      <Router>
        <div className="productManagement__wrapper--above">
          <Header />
        </div>
        <div className="productManagement__wrapper--below">
          <h2>Manage Products</h2>
          <Switch>
            <Route exact path="/admin/productManagement">
              <ManageProduct />
            </Route>
            <Route exact path="/admin/productManagement/addProducts">
              <ProductForm/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default ProductManagement;
