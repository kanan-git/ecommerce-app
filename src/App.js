import React, {useState, useEffect, useRef} from 'react'
import './global.css'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import Header from './component and pages/Header/Header.jsx'
import Footer from './component and pages/Footer/Footer.jsx'
import About from './component and pages/About/About.jsx'
import Blog from './component and pages/Blog/Blog.jsx'
import BlogArticle from './component and pages/BlogArticle/BlogArticle.jsx'
import Breadcrumb from './component and pages/Breadcrumb/Breadcrumb.jsx'
import Contact from './component and pages/Contact/Contact.jsx'
import Details from './component and pages/Details/Details.jsx'
import FAQ from './component and pages/FAQ/FAQ.jsx'
import Home from './component and pages/Home/Home.jsx'
import Login from './component and pages/Login/Login.jsx'
import Market from './component and pages/Market/Market.jsx'
import MyCart from './component and pages/MyCart/MyCart.jsx'
import MyFavorites from './component and pages/MyFavorites/MyFavorites.jsx'
import MyOrders from './component and pages/MyOrders/MyOrders.jsx'
import Policy from './component and pages/Policy/Policy.jsx'
import PaymentPopup from './component and pages/PaymentPopup/PaymentPopup.jsx'
import Recovery from './component and pages/Recovery/Recovery.jsx'
import Service from './component and pages/Service/Service.jsx'
import ServiceProfiles from './component and pages/ServiceProfiles/ServiceProfiles.jsx'
import Settings from './component and pages/Settings/Settings.jsx'
import SignUpVerify from './component and pages/SignUpVerify/SignUpVerify.jsx'
import Support from './component and pages/Support/Support.jsx'
import SupportMore from './component and pages/SupportMore/SupportMore.jsx'
import Terms from './component and pages/Terms/Terms.jsx'

function App() {

  const location = useLocation()

  return (
    <div className="App">
      {/* {window.location.pathname!="/login" && <Header />} */}

      <Header />
      {location.pathname != "/" && <Breadcrumb />}

      <Routes>
        {/*   + add_user_or_product_id_for_unique_links +   */}
        <Route path="/aboutus" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/article%20id=?" element={<BlogArticle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details" element={<Details />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Market />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/myfav" element={<MyFavorites />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/profile%20id=?" element={<ServiceProfiles />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login/verify" element={<SignUpVerify />} />
        <Route path="/support" element={<Support />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/support/chosen_id_here" element={<SupportMore />} />
        <Route path="/blog/article" element={<BlogArticle />} />
        {/*   + add_user_or_product_id_for_unique_links +   */}
      </Routes>

      {/* <PaymentPopup /> */}

      <Footer />
      
    </div>
  )    
}

export default App
