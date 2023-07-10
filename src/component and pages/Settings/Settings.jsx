import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Settings.css'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

function Settings() {
    return (
        <>
            <Header />

            <div className="settings"> Settings </div>

            <Footer />
        </>
    )
}

export default Settings