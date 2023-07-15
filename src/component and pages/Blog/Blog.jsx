import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Blog.css'
// import Header from '../Header/Header.jsx'
// import Footer from '../Footer/Footer.jsx'

function Blog() {

    // const textDataBase = {
    //     AZ: {},
    //     EN: {},
    //     TR: {},
    //     RU: {}
    // }

    // const [textDataBaseSTATE, setTextDataBaseSTATE] = useState(textDataBase.AZ)

    // useEffect(
    //     () => {
    //         var localLangSelection = JSON.parse(localStorage.getItem("langChoice"))
    //         if(localLangSelection == "AZ") {
    //             setTextDataBaseSTATE(textDataBase.AZ)
    //         } else if(localLangSelection == "EN") {
    //             setTextDataBaseSTATE(textDataBase.EN)
    //         } else if(localLangSelection == "TR") {
    //             setTextDataBaseSTATE(textDataBase.TR)
    //         } else if(localLangSelection == "RU") {
    //             setTextDataBaseSTATE(textDataBase.RU)
    //         }
    //     }, []
    // )

    return (
        <>
            {/* <Header /> */}

            <div className="blog">
                <div className="blog__container">
                    <h3 className="blog__container--title">
                        RetroGallery | Blog
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
            </div>

            {/* <Footer /> */}
        </>
    )
}

export default Blog