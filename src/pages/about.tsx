import React from "react";
import { Link } from "react-router-dom";

function GroupBuying () {

    return (
        <div className="mainHome">
            <div className="adminSet">
                <div>
                    <button>추가</button>
                    <div className="modal hidden">
                    <div className="modal__overlay" />
                        <div className="modal__content">
                        <h1>I'm a modal</h1>
                        <button id="close">❎</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="prLine">
            
            </div>
        </div>
    )
}


export default GroupBuying;