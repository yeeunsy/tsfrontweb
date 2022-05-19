// import React from "react";
// import { Link } from "react-router-dom";

import React from "react";
import { Link } from "react-router-dom";
import reminisce_logo from "./img/PV_unicorn_happy_edit.png";
import { useQuery } from "@apollo/client";
import { ICurrentUserData } from "./interfaces";
import { GET_CURRENT_USER } from "./apollo/cache";

function Menu () {
    const currentUser = useQuery<ICurrentUserData>(GET_CURRENT_USER);
    const user = currentUser.data?.user;

    return (
        <header className="menuForm">
            <Link to="/" className="logo"><img src={reminisce_logo}></img></Link>
                <ul className="mainMenu">
                    <li className="menuHub"><Link to="/discord" className="menuElm">Discord</Link></li>
                </ul>
        </header> 
    );
}

export default Menu;