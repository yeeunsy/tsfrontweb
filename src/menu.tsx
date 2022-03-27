// import React from "react";
// import { Link } from "react-router-dom";

import React from "react";
import { Link } from "react-router-dom";
import itezFront_logo from "./img/itezFront_logo.png";
import { useQuery } from "@apollo/client";
import { ICurrentUserData } from "./interfaces";
import { GET_CURRENT_USER } from "./apollo/cache";

function Menu () {
    const currentUser = useQuery<ICurrentUserData>(GET_CURRENT_USER);
    const user = currentUser.data?.user;

    return (
        <header className="menuForm">
            <Link to="/" className="logo"><img src={itezFront_logo}></img></Link>
                <ul className="mainMenu">
                    <li className="menuHub"><Link to="/" className="menuElm">공동 구매</Link></li>
                    {user ? (
                    <>
                    <Link to="/logout">로그아웃</Link>{" "}
                    <Link to={`/@${user.ID}`}>내 정보</Link>
                    </>
                ) : (
                    <>
                        <li className="menuHub"><Link to="/loginMain" className="menuElm">로그인</Link></li>
                        <li className="menuHub"><Link to="/join" className="menuElm">회원가입</Link></li>
                    </>
                )}
                </ul>
        </header> 
    );
}

export default Menu;