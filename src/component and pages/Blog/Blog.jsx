import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Blog.css'
// import Header from '../Header/Header.jsx'
// import Footer from '../Footer/Footer.jsx'

function Blog() {
    window.scrollTo(0, 0)
    
    const textDataBase = {
        AZ: {
            title: "RetroQalereya | Blog"
        }, 
        EN: { // translate only ui not blog contents or product info
            title: "RetroGallery | Blog"
        },
        TR: {
            title: "RetroGaleri | Blog"
        },
        RU: {
            title: "РетроГалерея | Блог"
        }
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

            <section className="blog">
                <div className="blog__container">
                    <h3 className="blog__container--title">
                        {textDataBaseSTATE.title}
                    </h3>
                    <div className="blog__container--group">
                        <div className="blog__container--group_cards">
                            <img src="/asset_library/blog/#" alt="cover" 
                            className="blog__container--group_cards-image" />
                            <p className="blog__container--group_cards-info">
                                antikalar ve kolleksiyonlar
                            </p>
                        </div>
                        <div className="blog__container--group_cards">
                            <img src="/asset_library/blog/#" alt="cover" 
                            className="blog__container--group_cards-image" />
                            <p className="blog__container--group_cards-info">
                                antikalar ve modern tasarim
                            </p>
                        </div>
                        <div className="blog__container--group_cards">
                            <img src="/asset_library/blog/#" alt="cover" 
                            className="blog__container--group_cards-image" />
                            <p className="blog__container--group_cards-info">
                                antika yatirimi
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <Footer /> */}
        </>
    )
}

export default Blog