import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './FAQ.css'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

function FAQ() {
    return (
        <>
            <Header />

            <div className="faq"> FAQ </div>

            <Footer />
        </>
    )
}

export default FAQ