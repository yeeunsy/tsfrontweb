import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'
import Menu from './pages/Menu'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu/>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
