import { gql } from "@apollo/client";

export const SignUpUser = gql`
    mutation signUpUserByEveryone(
        $ID: String!
        $password: String!
        $name: String!
    ) {
        signUpUserByEveryone(
        email: $ID
        password: $password
        name: $name
    ){
        email
    }
  }
`;