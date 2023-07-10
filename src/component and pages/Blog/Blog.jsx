import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Blog.css'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

function Blog() {
    return (
        <>
            <Header />

            <div className="blog"> Blog </div>

            <Footer />
        </>
    )
}

export default Blog