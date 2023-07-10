import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './MyCart.css'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

function MyCart() {
    return (
        <>
            <Header />

            <div className="mycart"> MyCart </div>

            <Footer />
        </>
    )
}

export default MyCart