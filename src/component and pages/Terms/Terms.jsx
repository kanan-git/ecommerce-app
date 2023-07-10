import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Terms.css'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

function Terms() {
    return (
        <>
            <Header />

            <div className="terms"> Terms </div>

            <Footer />
        </>
    )
}

export default Terms