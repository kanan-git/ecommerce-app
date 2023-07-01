import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <Link to="/"> Homepage </Link>
            <Link to="/products"> Market </Link>
            {/* <Link to="/login"> Login </Link> */}
            <button> . </button>
            <button> Blog </button>
            <button> About </button>
            <button> Contact </button>
        </div>
    )
}

export default Header