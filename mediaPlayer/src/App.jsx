
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import History from './pages/History'

import Landing from './pages/Landing'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
      <Header></Header>
      <Routes>
       <Route path ='/' element={<Landing/>} />
       <Route path ='/home' element={<Home />} />
       <Route path ='/history' element={<History />} />
    </Routes>
      <Footer></Footer>

    
    </>
  )
}


export default App
