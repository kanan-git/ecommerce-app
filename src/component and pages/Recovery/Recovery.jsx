import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Recovery.css'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

function Recovery() {
    return (
        <>
            <Header />

            <div className="recovery"> Recovery </div>

            <Footer />
        </>
    )
}

export default Recovery