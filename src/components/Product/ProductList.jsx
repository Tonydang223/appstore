import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import "../../css/ProductList.scss";
import formatCurrency from "../../util";
import Fade from "react-reveal/Fade";
const ProductList = ({ products }) => {
  const { handleAddToCart } = useContext(ProductContext);
  return (
    <>
      <Fade bottom cascade={true}>
        <div className="product__list-container">
          <ul className="products__list">
            {products.map((product) => (
              <li key={product._id}>
                <div className="products__item">
                  <Link to={`/product/${product._id}`}>
                    <img src={product.image} alt={product.src} />
                  </Link>
                  <div className="products__item--content">
                    <h3>
                      <Link to={`/product/${product._id}`}>
                        {product.title}
                      </Link>
                    </h3>
                    <div className="products__content--price">
                      <span>{product.price}</span>
                      <p>{product.discount}</p>
                    </div>
                    <button onClick={() => handleAddToCart(product)}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Fade>
    </>
  );
};

export default ProductList;
