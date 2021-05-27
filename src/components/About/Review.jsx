import React from 'react'
import {useContext} from 'react'
import { ProductContext } from "../../contexts/ProductContext";
const Review = () => {
    const {evualates} = useContext(ProductContext)
    return (
        <div>
            <h1>Evaludates from customers</h1>
              {evualates.map(element => (
                <div key={element.id}>
                  {element.name} ":" " " {element.content}
                </div>
              ))}
        </div>
    )
}

export default Review
