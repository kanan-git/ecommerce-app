import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './BlogArticle.css'
// import Header from '../Header/Header.jsx'
// import Footer from '../Footer/Footer.jsx'

function BlogArticle() {
    return (
        <>
            {/* <Header /> */}

            <div className="blogarticle">
                <div className="blogarticle__container">
                    <h3 className="blogarticle__container--header"> Lorem ipsum dolor sit amet. </h3>
                    <h6 className="blogarticle__container--synopsis"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, dolore eligendi ipsam nobis quo quisquam. </h6>
                    <img src="/asset_library/blog/#" alt="cover" className="blogarticle__container--image" />
                    <article className="blogarticle__container--article">
                        Lorem ipsum, dolor sit amet consectetur adipisicing.
                        <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing.
                        <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing.
                        <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing.
                        <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing.
                        <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing.
                    </article>
                </div>
                <aside className="blogarticle__menu">
                    <button className="blogarticle__menu--articles"> aioniunopnduw </button>
                    <button className="blogarticle__menu--articles"> madoinirgfjuwrt </button>
                    <button className="blogarticle__menu--articles"> aioniunopnduw </button>
                    <button className="blogarticle__menu--articles"> madoinirgfjuwrt </button>
                    <button className="blogarticle__menu--articles"> aioniunopnduw </button>
                    <button className="blogarticle__menu--articles"> madoinirgfjuwrt </button>
                </aside>
            </div>

            {/* <Footer /> */}
        </>
    )
}

export default BlogArticle