import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
const ManageProduct = ({ show, setShow }) => {
  const { products, removeProduct, updateProduct, setProducts } =
    useContext(ProductContext);

  return (
    <Fade right cascade={true}>
      <div className="productManagement__wrapper--content">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th colSpan="2" style={{ paddingLeft: "50px" }}>
                Actions
              </th>
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
                    <li onClick={() => setShow(true)}>
                      <Link
                        to={`/admin/productManagement/edit/${product.id}`}
                        style={{ color: "#004040" }}
                      >
                        <EditIcon />
                      </Link>
                    </li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <Button>
                      <li
                        onClick={() => removeProduct(product.id)}
                        style={{ color: "#004040" }}
                      >
                        <DeleteIcon />
                      </li>
                    </Button>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fade>
  );
};

export default ManageProduct;
