import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Breadcrumb.css'

function Breadcrumb() {
    return (
        <section className="breadcrumb">
            <div className="breadcrumb__container">
                Products   /   Details
            </div>
        </section>
    )
}

export default Breadcrumb