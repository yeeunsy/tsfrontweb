import { ApolloClient, createHttpLink, GraphQLRequest, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { currentUserVar } from "../apollo/cache";

// Authenticate using HTTP header

function contextSetter(_: GraphQLRequest, { headers }: any) {
    // get the authentication token from local storage if it exists
    const accessToken = currentUserVar()?.token;
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: accessToken ? accessToken : "",
      },
    };
  }
 
export const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: "https://apo.itez.io/work/graphql",
});

export const client = new ApolloClient({
  link: httpLink,
  cache: cache,
});