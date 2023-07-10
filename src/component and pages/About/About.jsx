import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './About.css'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

function About() {
    return (
        <>
            <Header />

            <div className="about"> About </div>

            <Footer />
        </>
    )
}

export default About