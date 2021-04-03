import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import formatCurrency from "../../util";

const ManageProduct = (props) => {
  const {products,removeProduct,updateProduct } = useContext(ProductContext);
  return (
    <div className="productManagement__wrapper--content">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <div className="img">
                  <img src={product.image} alt={product.title} />
                </div>
              </td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <ul>
                  <li>
                      Edit</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li onClick={() =>removeProduct(product.id)}>Delete</li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;
