import React, { useState, useEffect } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { ICurrentUserData, ILoginData, ILoginVars } from "../interfaces";
import { currentUserVar, GET_CURRENT_USER } from "../apollo/cache";

function Discord () { 
  return (
  <div className="discordForm">
    <h4>Discord</h4>
      <div className="">
          
      </div>
  </div>
  );
}

export default Discord;