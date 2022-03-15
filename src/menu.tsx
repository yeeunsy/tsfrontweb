// import React from "react";
// import { Link } from "react-router-dom";

// function Menu () {
//     return (
//         <div className="MainMenu">
//             <Link to="/" className="menuElm">logo</Link>
//             <Link to="/loginMain" className="menuElm">로그인</Link>
//             <Link to="/join" className="menuElm">회원가입</Link>
//         </div>
//     )
// }

// export default Menu;

import React from "react";
import { Link } from "react-router-dom";
import itezFront_logo from "./img/itezFront_logo.png";

function Menu () {
    return (
        <div className="MainMenu">
            <ul className="menuNode">
                <li className="menuHub"><Link to="/" className="menuElm logo"><img src={itezFront_logo}></img></Link></li>
                <li className="menuHub"><Link to="/" className="menuElm">공동 구매</Link></li>
                <li className="menuHub"><Link to="/loginMain" className="menuElm">로그인</Link></li>
                <li className="menuHub"><Link to="/join" className="menuElm">회원가입</Link></li>
            </ul>
        </div>
    )
}

export default Menu;