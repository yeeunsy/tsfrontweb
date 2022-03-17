import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Menu from './menu'
import Footer from './footer'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import './styles/product.css'
import './styles/main.css'
import './styles/menu.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu/>
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
