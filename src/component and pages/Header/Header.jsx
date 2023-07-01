import React, {useState, useEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className="header">
            —→ Header component ←—
            <Link to="/"> Homepage </Link>
            <Link to="/products"> Market </Link>
            <Link to="/login"> Login </Link>
        </div>
    )
}

export default Header