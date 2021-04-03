import { Button, Result } from "antd";
import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import "../../css/Cart.scss";
import formatCurrency from "../../util";

const Cart = () => {
  const {
    cartItems,
    handleAddClick,
    handleRemoveClick,
    handleRemoveProduct,
  } = useContext(ProductContext);
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.count, 0);
  const taxPrice = itemPrice * 0.1;
  const taxPrices = taxPrice;
  const shippingPrice = itemPrice > 2000 ? 0 : 50;
  const totalPrice = itemPrice + shippingPrice;
  return (
    <>
      <div className="cart__container">
        {cartItems.length === 0 ? (
          <div className="cart__container--header">
            <Result
              status="404"
              title="404"
              subTitle="Sorry, Your cart is empty !."
              extra={
                <Button type="primary">
                  <Link to="/product">Go back and buy something new !</Link>
                </Button>
              }
            />
          </div>
        ) : (
          <div>
            <Fade left cascade={true}>
              <div className="cart__container--table">
                You have {cartItems.length} in the cart{" "}
                <table className="styled-table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Size</th>
                      <th></th>
                      <th></th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item._id}>
                        <td>
                          <div className="img">
                            <img src={item.image} alt={item.title} />
                          </div>
                        </td>
                        <td>{item.title}</td>
                        <td>{formatCurrency(item.price)}</td>
                        <td>{item.count}</td>
                        <td>{item.size}</td>
                        <td>
                          <div className="table-btn">
                            <button
                              style={{ cursor: "pointer" }}
                              onClick={() => handleAddClick(item)}
                            >
                              +
                            </button>
                            <button
                              style={{ cursor: "pointer" }}
                              onClick={() => handleRemoveClick(item)}
                            >
                              -
                            </button>
                          </div>
                        </td>
                        <td style={{ cursor: "pointer" }}>
                          <img
                            src="https://img.icons8.com/material-rounded/24/000000/filled-trash.png"
                            alt="bin"
                            onClick={() => handleRemoveProduct(item._id)}
                          />
                        </td>
                        <td>{formatCurrency(item.price * item.count)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    {cartItems.length !== 0 && (
                      <tr>
                        <td>
                          <div>
                            Total of Products: {formatCurrency(itemPrice)}
                          </div>
                        </td>
                        <td>
                          <div>Tax: {formatCurrency(taxPrices)}</div>
                        </td>
                        <td>
                          <div>
                            Shipping Price: {formatCurrency(shippingPrice)}
                          </div>
                        </td>
                        <td>
                          <div>Total: {formatCurrency(totalPrice)}</div>
                        </td>
                        <td>
                          <button className="button primary">
                            <Link to="/proceed">Proceed</Link>
                          </button>
                        </td>
                        <td>
                          <button className="button primary">ClearAll</button>
                        </td>
                      </tr>
                    )}
                  </tfoot>
                </table>
              </div>
            </Fade>
            {/* )} */}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
