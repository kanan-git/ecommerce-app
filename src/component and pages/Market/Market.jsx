import React, {useState, useEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Market.css'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

function Market() {
    return (
        <>
            <Header />

            <div className="market"> —→ Market ←— </div>

            <Footer />
        </>
    )
}

export default Market