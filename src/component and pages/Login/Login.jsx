import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Login.css'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

function Login() {
    return (
        <>
            <div className="auth"> —→ Authentication page ←— </div>
        </>
    )
}

export default Login