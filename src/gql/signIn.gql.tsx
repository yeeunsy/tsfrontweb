import gql from 'graphql-tag';

export const SignInUser = gql`
    query signUpUserByEveryone(
        $ID: String!
        $password: String!
    ) {
        signUpUserByEveryone(
            email: $ID
            password: $password
        )
    }
`