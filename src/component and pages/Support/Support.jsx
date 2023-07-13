import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Support.css'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

function Support() {
    return (
        <>
            <Header />

            <div className="support">
                <div className="support__container"></div>
            </div>

            <Footer />
        </>
    )
}

export default Support