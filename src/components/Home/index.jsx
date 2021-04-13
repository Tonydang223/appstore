import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { Link } from "react-router-dom";
import "../../css/Home.scss";
import formatCurrency from "../../util";
import Fade from "react-reveal/Fade";
const Home = () => {
  const { products } = useContext(ProductContext);
  const topProducts = products.slice(0, 6);
  console.log(topProducts);
  return (
    <>
      <Fade bottom cascade={true}>
        <div className="home__container">
          <div className="home__container--above">
            <h1>WELCOME TO COI CLOTHING </h1>
            <h3 className="lead">
              Mục đích của chúng tôi là đưa đến những sản phẩm với chất lượng
              tốt nhất cho khách hàng và khiến họ hạnh phúc !
            </h3>
          </div>
          <div className="home__container--below">
            <div className="home__below--title">
              <h1>Top 6 products</h1>
            </div>
            <div className="home__below--content">
              {topProducts.map((product) => (
                <div className="products__item" key={product._id}>
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Home;
