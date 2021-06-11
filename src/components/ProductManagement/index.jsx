import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./ProductManagement.scss";
import ProductForm from "../ProductsForm";
import EditForm from "../ProductsForm/EditForm";
import Header from "./header";
import ManageProduct from "./ManageProduct";
const ProductManagement = () => {
  const [show, setShow] = useState(false);

  console.log(show);
  return (
    <div className="productManagement__wrapper">
        <div className="productManagement__wrapper--above">
          <Header show={show} setShow={setShow} />
        </div>
        <div className="productManagement__wrapper--below">
          <h2>Manage Products</h2>
          <Switch>
            <Route exact path="/admin/productManagement">
              <ManageProduct show={show} setShow={setShow} />
            </Route>
            <Route exact path="/admin/productManagement/addProducts">
              <ProductForm/>
            </Route>
            <Route exact path="/admin/productManagement/edit/:id">
              <EditForm />
            </Route>
          </Switch>
        </div>
    </div>
  );
};

export default ProductManagement;
