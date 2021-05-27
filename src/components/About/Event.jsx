import React from 'react'
import "../About/Event.scss"
import Above from "../../assets/image/above.jpg"
import Left from "../../assets/image/left.jpg"
import Right from "../../assets/image/right.jpg"
const Event = () => {
    return (
        <div className="container-event--contentE">
            <div className="event-letter">
            <h3>Events</h3>
            </div>
            <div className="content-aboveE">
                <div className="imgE-1">
                    <img src={Above} alt=""/>
                </div>
                <div className="contentE1">
                    <div className="inside-content">
                    <div className="field"> <span className="span1">Y</span> <span className="span2">Your Choice</span> </div>
                    <h3>CoiClothing Shop</h3>
                    <p className="time">04/06/2021-07/06/2021</p>
                    <p>Lorem ipsum dolor sit amet, ut sit melius perpetua. Mea ut nusquam albucius scribentur, no quaeque nonumes sed.
                     Inani partem et nam, eam ut eius ornatus habemus. Per in doctus iudicabit, ne omnis veniam dolores has.</p>
                    </div>

                </div>
            </div>
            <div className="content-bottomE">
                <div className="imgE-left">
                    <img src={Left} alt=""/>
                </div>
                <div className="contentE2-between">
                    <h2><span className="span3">B</span>lack <br/> Friday </h2>
                    <p>12/06/2021-14/06/2021</p>
                </div>
                <div className="imgE-right">
                    <img src={Right} alt=""/>
                </div>
            </div>

        </div>
    )
}

export default Event
