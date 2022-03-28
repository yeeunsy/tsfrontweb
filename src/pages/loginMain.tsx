import React, { useState, useEffect } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { ICurrentUserData, ILoginData, ILoginVars } from "../interfaces";
import { currentUserVar, GET_CURRENT_USER } from "../apollo/cache";

function LoginMain () {
  const LOGIN = gql`
    mutation signInAdminByEveryone($ID: String!, $password: String!) {
      signInAdminByEveryone(id: $ID, password: $password) {
        accessToken
      }
    }
  `;

  const [ID, setID] = useState("");
    const [password, setPassword] = useState("");
    const currentUser = useQuery<ICurrentUserData>(GET_CURRENT_USER);
    const [login, loginResult] = useMutation<ILoginData, ILoginVars>(LOGIN);
  
    useEffect(() => {
      if (loginResult.data?.login) {
        currentUserVar(loginResult.data?.login);
        alert("로그인에 성공했습니다.");
      } else if (loginResult.data?.login === null)
        alert("아이디 또는 비밀번호를 잘못 입력했습니다.");
    }, [loginResult.data, history]);
  
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      e.stopPropagation();
      login({ variables: { ID, password } });
      setID("");
      setPassword("");
    }

  return (
  <>
      <h4>로그인</h4>
      <div className="loginForm">
          <form onSubmit={handleSubmit}>
          <div className="loginCol">
              <div>
                  아이디<br/>
                  <input className="ipInfo"  value={ID}
                      onChange={(e) => setID(e.target.value)}
                      type="text"
                      placeholder="ID"></input>
              </div>
              <div>
                  비밀번호<br/>
                  <input className="ipInfo" value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Choose a safe password"></input>
              </div>
                  <button className="loginBtn submitBtn" type="submit">로그인</button>
          </div>
          </form>
      </div>
  </>
  );
}

export default LoginMain;