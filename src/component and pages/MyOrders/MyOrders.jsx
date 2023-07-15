import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './MyOrders.css'
// import Header from '../Header/Header.jsx'
// import Footer from '../Footer/Footer.jsx'

function MyOrders() {
    return (
        <>
            {/* <Header /> */}

            <div className="myorders"> MyOrders </div>

            {/* <Footer /> */}
        </>
    )
}

export default MyOrders