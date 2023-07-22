import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Breadcrumb.css'

function Breadcrumb() {

    // const [pathLinks, setPathLinks] = useState()

    useEffect(
        () => {
            // var winPathString = window.location.pathname
            // var locationLinks = winPathString.split("/")
            // for(var i=1; i<locationLinks.length; i++) {
            //     return (
            //         <>
            //             <Link> { locationLinks[i] } </Link>
            //         </>
            //     )
            // }
        }, []
    )

    return (
        <section className="breadcrumb">
            <div className="breadcrumb__container">
                {/* {
                    window.location.pathname
                } */}
                ... / ... / ...
            </div>
        </section>
    )
}

export default Breadcrumb