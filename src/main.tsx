// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'
// import Menu from './menu'
// import Footer from './footer'
// import { BrowserRouter } from 'react-router-dom'
// import './styles/index.css'
// import './styles/product.css'
// import './styles/main.css'
// import './styles/menu.css'

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Menu/>
//       <App />
//       <Footer />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Menu from './menu'
import { BrowserRouter, Router } from 'react-router-dom'
import './styles/index.css'
import './styles/product.css'
import './styles/main.css'
import './styles/menu.css'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

export const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: "https://apo.itez.io/work/graphql",
});

export const client = new ApolloClient({
  link: httpLink,
  cache: cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
  <React.StrictMode>
    <BrowserRouter>
      <Menu/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
)