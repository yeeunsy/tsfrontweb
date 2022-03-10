import {  Route, Routes } from 'react-router-dom'
import Join from './pages/join'
import Login from './pages/login' 
import Layout from './layout'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/join' element={<Join />}/>
    </Routes>
  )
}

export default App
