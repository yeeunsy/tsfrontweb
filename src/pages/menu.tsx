import React from "react";
import { Link } from "react-router-dom";

function Menu () {
    return (
        <div className="MainMenu">
            <Link to="/" className="menuElm">logo</Link>
            <Link to="/login" className="menuElm">로그인</Link>
            <Link to="/join" className="menuElm">회원가입</Link>
        </div>
    )
}

export default Menu;