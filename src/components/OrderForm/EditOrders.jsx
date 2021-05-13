import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../contexts/ProductContext';

const EditOrders = () => {
    const {cartItems} = useContext(ProductContext);
    const {id} = useParams();
    console.log(id);
    const newItemsOrder = cartItems.filter(item => item.id == id);
    console.log(newItemsOrder);
    return (
        <div>
            
        </div>
    )
}

export default EditOrders
