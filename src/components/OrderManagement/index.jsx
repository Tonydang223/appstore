import React, { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'

const OrderManagement = () => {
    const {cartItems} = useContext(ProductContext)
    console.log(cartItems);
    return (
        <div>
            
        </div>
    )
}

export default OrderManagement
