import React from "react";

function DetailInfo () {
    return (
        <>
            <div className="detailInfo">
                <div className="buyPr">
                    <img src={'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'}></img>
                    <div className="detailAbout">
                        <div>
                            이름
                        </div>
                        <div>
                            내용
                        </div>
                        <div>
                            가격
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailInfo;