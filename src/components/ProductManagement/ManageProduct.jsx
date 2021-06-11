import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { useContext, useState } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import TextField from "@material-ui/core/TextField";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import "../../css/RemoveUnderline.scss";
const ManageProduct = ({ show, setShow }) => {
  const { products, removeProduct, updateProduct, setProducts } =
    useContext(ProductContext);
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const searchValue = (val) => {
    const filterSearch = val.filter((product) => {
      if (search === "") {
        return product;
      } else if (
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()) ||
        product.price.toString().includes(search.toLowerCase())
      ) {
        return product;
      }
    });
    return filterSearch;
  };

  const [visible, setVisible] = useState(10);
  const showMoreProducts = () => {
    setVisible((prevValue) => prevValue + 10);
  };

  return (
    <Fade right cascade={true}>
      <div className="productManagement__wrapper--content">
        <TextField
          id="standard-secondary"
          label="Search"
          color="secondary"
          name="search"
          value={search}
          style={{ marginBottom: "50px", width: "200px" }}
          onChange={onChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
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
            {searchValue(products)
              .slice(0, visible)
              .map((product) => (
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

          <tfoot>
            <tr>
              <td className="btn-load">
                {visible < products.length && (
                  <Button onClick={showMoreProducts}>Load more</Button>
                )}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </Fade>
  );
};

export default ManageProduct;
