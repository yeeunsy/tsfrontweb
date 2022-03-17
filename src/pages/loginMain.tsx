import React from "react";
import { Link } from "react-router-dom";

interface PropTypes {
    id: string;
    name: string;
    pw: string;
    setId: (id: string) => void;
    setPw: (pw: string) => void;
    setName: (name: string) => void;
    login: () => void;
    adminLogin: () => void;
}

function LoginMain ({id, pw, setId, setPw, login, adminLogin}: PropTypes) {
    return (
    <>
        <h4>로그인</h4>
        <div className="loginForm">
            <div>
            <div className="loginCol">
                <div>
                    이메일<br/>
                    <input type="text" className="ipInfo" placeholder="example@gmail.com" onChange={(e)=>setId(e.target.value)}></input>
                </div>
                <div>
                    비밀번호<br/>
                    <input type='password' className="ipInfo" placeholder="비밀번호를 입력해주세요." onChange={(e)=>setPw(e.target.value)}></input>
                </div>
                    <button onClick={login} className="loginBtn submitBtn" type="button">로그인</button>
            </div>
            </div>
        </div>
    </>
    );
}

export default LoginMain;