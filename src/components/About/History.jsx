import React from 'react'
import "../About/History.scss"
import ImageHistory from '../../assets/image/bhis.jpg'
const History = () => {
    return (
        <div className="contaier_history--wrapper">
            <div className="header">
            <h3>History</h3>
            </div>
            <div className="content-below">
                <div className="img-left">
                <img src={ImageHistory} alt=""/>
                </div>
                <div className="content-right">
                <h1>MEET US</h1>
                <p>Online shopping has become a major disruptor in the retail industry as consumers can now search for product information and place product orders across different regions. 
                Online retailers deliver their products directly to the consumers' home, offices or wherever they want. 
                </p>
                </div>
               
            </div>
        </div>
    )
}

export default History
