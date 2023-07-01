import React, {useState, useEffect, useRef} from 'react'
import './global.css'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
// import Header from './component and pages/Header/Header.jsx'
// import Footer from './component and pages/Footer/Footer.jsx'
import Home from './component and pages/Home/Home.jsx'
import Market from './component and pages/Market/Market.jsx'
import Login from './component and pages/Login/Login.jsx'

function App() {
  // const [pathCondition, setPathCondition] = useState(true)
  // const currentPath = window.location.pathname
  // useEffect(
  //   () => {
  //     currentPath=="/login" ? setPathCondition(false) : setPathCondition(true)
  //   }, []
  // )
  return (
    <div className="App">
      {/* {window.location.pathname!="/login" && <Header />} */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Market />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* {pathCondition && <Footer />} */}
      {/* {!pathCondition && <Footer />} */}
    </div>
  )    
}

export default App
