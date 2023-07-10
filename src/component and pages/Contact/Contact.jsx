import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Contact.css'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

function Contact() {
    return (
        <>
            <Header />

            <div className="contact"> Contact </div>

            <Footer />
        </>
    )
}

export default Contact