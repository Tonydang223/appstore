import React from 'react'
import {useContext} from 'react'
import { ProductContext } from "../../contexts/ProductContext";
import "../About/Evaluates.scss"
const Review = () => {
    const {products} = useContext(ProductContext)
  
    const bestStar = (val) => {
      return(
        <>
        {val === 5 ?(  
        <>
            <i class="fa fa-star starShow" aria-hidden="true"></i>
            <i class="fa fa-star starShow" aria-hidden="true"></i>
            <i class="fa fa-star starShow" aria-hidden="true"></i>
            <i class="fa fa-star starShow" aria-hidden="true"></i>
            <i class="fa fa-star starShow" aria-hidden="true"></i>
          </>):''}
        </>
      )
    }
    return (
        <div className="evaluate-container">
          <div className="text-top">
          <h1 >Evaluates from customers</h1>
          </div>
                <div className="below-content">
                <div className="top">
                  <h3>The best reviews for us</h3>
                </div>
                <div className="under">
                <div className="reviews">

                  {products.slice(0,3).map((product) => product.rate.filter((review) => review.star>=5).slice(0,2).map(item => {
                    return(
                            <ul key={item.id}>
                      <li>{item.name}</li>
                      <li>{bestStar(item.star)}</li>
                    </ul>
                  
                    )
                  }))}
                  </div>
                </div>
                </div>
          
        </div>
    )
}

export default Review
