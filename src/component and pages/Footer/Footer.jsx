import React, {useState, useEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className="footer"> —→ Footer component ←— </div>
    )
}

export default Footer