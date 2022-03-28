import {  Route, Routes } from 'react-router-dom'
import Join from './pages/join'
import Layout from './layout'
import BusinessInfo from './pages/businessInfo'
import Privacy from './pages/privacy'
import TermsofUse from './pages/termsofuse'
import LoginMain from './pages/loginMain'
import DetailInfo from './pages/detailInfo'
import GroupBuying from './pages/groupbuying'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}/>
      <Route path='/loginMain' element={<LoginMain />}/>
      <Route path='/join' element={<Join />}/>
      <Route path='/businessInfo' element={<BusinessInfo />}/>
      <Route path='/privacy' element={<Privacy />}/>
      <Route path='/termsofUse' element={<TermsofUse />}/>
      <Route path='/detailInfo' element={<DetailInfo />}/>
      <Route path='/groupBuying' element={<GroupBuying />}/>
    </Routes>
  )
}

export default App
