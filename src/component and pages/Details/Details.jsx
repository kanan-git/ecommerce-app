import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Details.css'
// import Header from '../Header/Header.jsx'
// import Footer from '../Footer/Footer.jsx'

function Details() {
    window.scrollTo(0, 0)
    
    const textDataBase = {
        AZ: {
            text: [
                "miqdar", // 0
                "indi al", // 1
                "favorilər", // 2
                "səbət", // 3
                "favorilərə keçid", // 4
                "səbətə keçid", // 5
                "oxşar məhsullar" // 6
            ]
        },
        EN: {
            text: [
                "count", // 0
                "buy now", // 1
                "favorites", // 2
                "cart", // 3
                "check favorites", // 4
                "check cart", // 5
                "related products" // 6
            ]
        },
        TR: {text: [
                "miktar", // 0
                "satın al", // 1
                "favoriler", // 2
                "sepet", // 3
                "favorileri kontrol et", // 4
                "sepeti kontrol et", // 5
                "ilgili ürünler" // 6
            ]},
        RU: {text: [
                "считать", // 0
                "купить сейчас", // 1
                "избранное", // 2
                "тележка", // 3
                "проверить избранное", // 4
                "проверить корзину", // 5
                "сопутствующие товары" // 6
            ]}
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

            <section className="details">
                <div className="details__container">
                    <div className="details__container--visual">
                        <div className="details__container--visual_image">
                            <img src="/asset_library/products/product_1_1.png" alt="" className="details__container--visual_image-content" />
                        </div>
                        <div className="details__container--visual_thumbnails">
                            <div className="details__container--visual_thumbnails-carousel">
                                <div className="details__container--visual_thumbnails-carousel__images">
                                    <img src="/asset_library/products/product_1_1.png" alt="" className="details__container--visual_thumbnails-carousel__images--content" />
                                </div>
                                <div className="details__container--visual_thumbnails-carousel__images">
                                    <img src="/asset_library/products/product_1_1.png" alt="" className="details__container--visual_thumbnails-carousel__images--content" />
                                </div>
                            </div>
                            <div className="details__container--visual_thumbnails-buttons">
                                <button className="details__container--visual_thumbnails-buttons__btn" id="det_crl_prev"> ◄ </button>
                                <button className="details__container--visual_thumbnails-buttons__btn" id="det_crl_next"> ► </button>
                            </div>
                        </div>
                    </div>
                    <div className="details__container--information">
                        <h3 className="details__container--information_title">
                            title from API product
                        </h3>
                        <p className="details__container--information_category">
                            category from API product
                        </p>
                        <strong className="details__container--information_price">
                            price from API product
                        </strong>
                        <div className="details__container--information_count">
                            {textDataBaseSTATE.text[0]}:
                            <input type="number" className="details__container--information_count-input" min="1" max="999" defaultValue="1" />
                        </div>
                        <p className="details__container--information_description">
                            description from API product
                        </p>
                        <div className="details__container--information_buttons">
                            <button className="details__container--information_buttons-btn">
                                <img src="#" className="details__container--information_buttons-btn__symbol" />
                                {textDataBaseSTATE.text[1]}
                            </button>
                            <button className="details__container--information_buttons-btn">
                                <img src="#" className="details__container--information_buttons-btn__symbol" />
                                {textDataBaseSTATE.text[2]}
                            </button>
                            <button className="details__container--information_buttons-btn">
                                <img src="#" className="details__container--information_buttons-btn__symbol" />
                                {textDataBaseSTATE.text[3]}
                            </button>
                        </div>
                        <div className="details__container--information_links">
                            <Link className="details__container--information_links-item"> {textDataBaseSTATE.text[4]} </Link>
                            <Link className="details__container--information_links-item"> {textDataBaseSTATE.text[5]} </Link>
                        </div>
                    </div>

                    <h3 className="details__container--header"> {textDataBaseSTATE.text[6]}: </h3>
                    <div className="details__container--related">    
                        <div className="details__container--related_cards">
                            <div className="details__container--related_cards-image">
                                <img src="#" alt="product_01" className="details__container--related_cards-image__content" />
                            </div>
                            <p className="details__container--related_cards-title"> from api </p>
                            <strong className="details__container--related_cards-price"> from api </strong>
                        </div>

                        <div className="details__container--related_cards">
                            <div className="details__container--related_cards-image">
                                <img src="#" alt="product_01" className="details__container--related_cards-image__content" />
                            </div>
                            <p className="details__container--related_cards-title"> from api </p>
                            <strong className="details__container--related_cards-price"> from api </strong>
                        </div>
                        <div className="details__container--related_cards">
                            <div className="details__container--related_cards-image">
                                <img src="#" alt="product_01" className="details__container--related_cards-image__content" />
                            </div>
                            <p className="details__container--related_cards-title"> from api </p>
                            <strong className="details__container--related_cards-price"> from api </strong>
                        </div>
                        <div className="details__container--related_buttons">
                            <button className="details__container--related_buttons-btn" id="det_rel_crl_prev"> ◄ </button>
                            <button className="details__container--related_buttons-btn" id="det_rel_crl_next"> ► </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* <Footer /> */}
        </>
    )
}

export default Details