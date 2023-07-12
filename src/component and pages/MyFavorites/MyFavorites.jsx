import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './MyFavorites.css'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

function MyFavorites() {
    return (
        <>
            <Header />

            <div className="myfavorites"> MyFavorites </div>

            <Footer />
        </>
    )
}

export default MyFavorites