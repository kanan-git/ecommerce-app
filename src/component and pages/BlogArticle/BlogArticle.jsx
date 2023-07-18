import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './BlogArticle.css'
// import Header from '../Header/Header.jsx'
// import Footer from '../Footer/Footer.jsx'

function BlogArticle() {
    window.scrollTo(0, 0)
    
    const textDataBase = {
        AZ: {},
        EN: {},
        TR: {},
        RU: {}
    }
    const [textDataBaseSTATE, setTextDataBaseSTATE] = useState(textDataBase.AZ)
    useEffect(
        () => {
            if(JSON.parse(localStorage.getItem("langChoice")) == null) {
                localStorage.setItem("langChoice", JSON.stringify("AZ"))
            } else if(JSON.parse(localStorage.getItem("langChoice")) == "AZ") {
                setTextDataBaseSTATE(textDataBase.AZ)
            } else if(JSON.parse(localStorage.getItem("langChoice")) == "EN") {
                setTextDataBaseSTATE(textDataBase.EN)
            } else if(JSON.parse(localStorage.getItem("langChoice")) == "TR") {
                setTextDataBaseSTATE(textDataBase.TR)
            } else if(JSON.parse(localStorage.getItem("langChoice")) == "RU") {
                setTextDataBaseSTATE(textDataBase.RU)
            }
            function handleLanguage() {
                // console.log( JSON.parse(localStorage.getItem("langChoice")) )
                var selectedLanguage = JSON.parse(localStorage.getItem("langChoice"))
                if(selectedLanguage == "AZ") {
                    setTextDataBaseSTATE(textDataBase.AZ)
                } else if(selectedLanguage == "EN") {
                    setTextDataBaseSTATE(textDataBase.EN)
                } else if(selectedLanguage == "TR") {
                    setTextDataBaseSTATE(textDataBase.TR)
                } else if(selectedLanguage == "RU") {
                    setTextDataBaseSTATE(textDataBase.RU)
                }
            }
            window.addEventListener("change", handleLanguage)
        }, []
    )
    
    return (
        <>
            {/* <Header /> */}

            <section className="blogarticle">
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
            </section>

            {/* <Footer /> */}
        </>
    )
}

export default BlogArticle