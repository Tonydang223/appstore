import React, { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import { Route, Switch } from "react-router-dom";
import ManageOrder from './ManageOrder';
import '../OrderManagement/Order.scss'
import EditOrders from '../OrderForm/EditOrders';


const OrderManagement = () => {
    return (
        <div className="wrapper-order">
        <div className="wrapper-order-above">
                <h2>Manage Orders</h2>
        </div>
         <div className="wrapper-order-under">
        <Switch>
        <Route exact path="/admin/orderManagement">
         <ManageOrder />
         </Route>
         <Route exact path="/admin/orderManagement/editOrders/:id">
             <EditOrders/>
         </Route>
        </Switch>
        </div>
        </div>


    )
}

export default OrderManagement
