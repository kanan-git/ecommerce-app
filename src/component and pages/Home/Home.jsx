import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Home.css'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

function Home() {
    return (
        <>
            <Header />
            <div className="home"> —→ Homepage ←— </div>
            <Footer />
        </>
    )
}

export default Home