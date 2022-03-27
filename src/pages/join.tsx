import React, { useState, useEffect } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { ICurrentUserData, ISignupData, ISignupVars } from "../interfaces";

const SIGNUP = gql`
  mutation signUpUserByEveryone($ID: String!, $password: String!, $name: String!) {
    signUpUserByEveryone(loginId: $ID, password: $password, phone: $name)
  }
`;

function Signup() {
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [signup, signupResult] = useMutation<ISignupData, ISignupVars>(SIGNUP);
  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    signup({ variables: { ID, password, name } });
    setID("");
    setPassword("");
    setName("");
  }
   

  return (
    <>
        <h4>Itez에 오신걸 환영합니다.</h4>
            <div className="joinForm">
                <form onSubmit={handleSubmit}>
                    <div className="joinCol">
                        <div>
                        이름
                        <input className="form-control ipInfo" value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Name"/>
                        </div>
                        <div>
                        이메일
                        <input className="form-control ipInfo" value={ID}
                        onChange={(e) => setID(e.target.value)}
                        type="text"
                        placeholder="ID"/>
                        </div>
                        <div>
                        비밀번호
                        <input className="form-control ipInfo"value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="PW"/>
                        </div>
                        <button className="joinBtn submitBtn" type="submit">회원가입</button>
                    </div>
                </form>
            </div>
    </>
    );
}

export default Signup;