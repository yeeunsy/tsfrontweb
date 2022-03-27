import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../apollo/cache";
import { ICurrentUserData } from "../interfaces";
import React from "react";
import { Link } from "react-router-dom";

function MyPage() {
  const currentUser = useQuery<ICurrentUserData>(GET_CURRENT_USER);
  const user = currentUser.data?.user;

  return (
    <div>
      <h2>MyPage</h2>
      <h4>ID</h4>
      <div>{user?.ID}</div>
      <h4>accessToken</h4>
      <div>{user?.token}</div>
      <h4>Name</h4>
      <div>{user?.name}</div>
    </div>
  );
}

export default MyPage;