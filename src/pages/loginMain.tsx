import React, { useState } from "react";
import { Link } from "react-router-dom";

// interface PropTypes {
//     id: string;
//     name: string;
//     pw: string;
//     setId: (id: string) => void;
//     setPw: (pw: string) => void;
//     login: () => void;
//     adminLogin: () => void;
// }

// const [email, setEmail] = useState('');
// const [pw, setPw] = useState('');

function LoginMain () {

    return (
    <>
        <h4>로그인</h4>
        <div className="loginForm">
            <div>
            <div className="loginCol">
                <div>
                    이메일<br/>
                    <input name="email" type="text" className="ipInfo" placeholder="example@gmail.com"></input>
                </div>
                <div>
                    비밀번호<br/>
                    <input name="pw" type='password' className="ipInfo" placeholder="비밀번호를 입력해주세요."></input>
                </div>
                    <button className="loginBtn submitBtn" type="submit">로그인</button>
            </div>
            </div>
        </div>
    </>
    );
}

export default LoginMain;