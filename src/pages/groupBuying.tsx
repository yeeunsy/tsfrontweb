import React from "react";
import { Link } from "react-router-dom";

function GroupBuying () {

    const imgs: string[] = [
        'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1647163640558-59590f58d407?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1610140755238-fdce8f3be7a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1617076678956-502a1f4a021c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60'
    ]

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
            {imgs.map(v => 
            <div>
                <div className="buyPr">
                    <Link to='/detailInfo' className="about">
                        <div className="prCard">
                            <img className="imgCard" src={v}></img>
                            <p>
                                설명<br/>
                                12,000
                            </p>
                        </div>
                    </Link>
                </div>
            </div>)}
            </div>
        </div>
    )
}


export default GroupBuying;