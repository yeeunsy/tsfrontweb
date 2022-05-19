import {  Route, Routes } from 'react-router-dom'
import Join from './pages/join'
import Layout from './layout'
import BusinessInfo from './pages/businessInfo'
import Privacy from './pages/privacy'
import TermsofUse from './pages/termsofuse'
import Discord from './pages/discord'
import DetailInfo from './pages/detailInfo'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}/>
      <Route path='/discord' element={<Discord />}/>
      <Route path='/join' element={<Join />}/>
      <Route path='/businessInfo' element={<BusinessInfo />}/>
      <Route path='/privacy' element={<Privacy />}/>
      <Route path='/termsofUse' element={<TermsofUse />}/>
      <Route path='/detailInfo' element={<DetailInfo />}/>
    </Routes>
  )
}

export default App
