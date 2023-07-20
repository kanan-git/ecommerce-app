import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Market.css'
// import Header from '../Header/Header.jsx'
// import Footer from '../Footer/Footer.jsx'

function Market() {
    window.scrollTo(0, 0)
    
    const textDataBase = {
        AZ: {
            textcontents: [
                "Filtr etiketləri", 
                "incəsənət", 
                "fotoqrafiya", 
                "maşınlar", 
                "obyektlər", 
                "bəzək", 
                "kolleksiya", 
                "efemer", 
                "nəqliyyat vasitələri", 
                "Qiymət", 
                "tətbiq et", 
                "Antika / dodemsel", 
                "Antikvar", 
                "Retro", 
                "Vintage", 
                "Əlavə edilmiş tarix", 
                "Qiymət", 
                "Baxış sayı", 
                "arama sonucu", 
                "məzmun bulundu", 
                "daha çox yükləyin"
            ]
        },
        EN: {
            textcontents: [
                "Filter tags", 
                "art", 
                "photography", 
                "machines", 
                "objects", 
                "decoration", 
                "collection", 
                "ephemera", 
                "vehicles", 
                "Price", 
                "apply", 
                "Antika / donemsel", 
                "Antique", 
                "Retro", 
                "Vintage", 
                "Added date", 
                "Price", 
                "View count", 
                "arama sonucu", 
                "içerik bulundu", 
                "load more"
            ]
        },
        TR: {
            textcontents: [
                "Filtre etiketleri", 
                "sanat", 
                "fotoğrafçılık", 
                "makineler", 
                "nesneler", 
                "dekorasyon", 
                "Toplamak", 
                "kısa ömürlü", 
                "Araçlar", 
                "Fiyat", 
                "uygula", 
                "antika / döner", 
                "Antik", 
                "Retro", 
                "Nostaljik", 
                "Eklenme tarihi", 
                "Fiyat", 
                "Görüntüleme sayısı", 
                "arama sonucu", 
                "içerik bulundu", 
                "daha fazla yükle"
            ]
        },
        RU: {
            textcontents: [
                "Теги фильтра", 
                "искусство", 
                "фотография", 
                "машины", 
                "объекты", 
                "украшение", 
                "коллекция", 
                "эфемера", 
                "транспортные средства", 
                "Цена", 
                "применять", 
                "Антика / донемсель", 
                "Античный", 
                "Ретро", 
                "Винтаж", 
                "Дата добавления", 
                "Цена", 
                "Количество просмотров", 
                "арама сонуку", 
                "ичерик булунду", 
                "Загрузи больше"
            ]
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
            <section className="market">
                <div className="market__container">
                    <div className="market__container--filter">
                        <h3 className="market__container--filter_header"> {textDataBaseSTATE.textcontents[0]} </h3>
                        <div className="market__container--filter_block">
                            <p className="market__container--filter_block-tags"> {textDataBaseSTATE.textcontents[1]} </p>
                            <p className="market__container--filter_block-tags"> {textDataBaseSTATE.textcontents[2]} </p>
                            <p className="market__container--filter_block-tags"> {textDataBaseSTATE.textcontents[3]} </p>
                            <p className="market__container--filter_block-tags"> {textDataBaseSTATE.textcontents[4]} </p>
                            <p className="market__container--filter_block-tags"> {textDataBaseSTATE.textcontents[5]} </p>
                            <p className="market__container--filter_block-tags"> {textDataBaseSTATE.textcontents[6]} </p>
                            <p className="market__container--filter_block-tags"> {textDataBaseSTATE.textcontents[7]} </p>
                            <p className="market__container--filter_block-tags"> {textDataBaseSTATE.textcontents[8]} </p>
                        </div>

                        <h3 className="market__container--filter_header"> {textDataBaseSTATE.textcontents[9]} </h3>
                        <div className="market__container--filter_block">
                            <input type="number" min="0" max="max input's min value with variable" 
                            className="market__container--filter_block-input" 
                            placeholder="min: 0"/>
                            <input type="number" min="min input's max value with variable" max="999999" 
                            className="market__container--filter_block-input" 
                            placeholder="max: 999999"/>
                            <button className="market__container--filter_block-button"> {textDataBaseSTATE.textcontents[10]} </button>
                        </div>

                        <h3 className="market__container--filter_header"> {textDataBaseSTATE.textcontents[11]} </h3>
                        <div className="market__container--filter_block">
                            <div className="market__container--filter_block-selection">
                                <input type="checkbox" 
                                className="market__container--filter_block-selection__checkbox" />
                                {textDataBaseSTATE.textcontents[12]}
                            </div>
                            <div className="market__container--filter_block-selection">
                                <input type="checkbox" 
                                className="market__container--filter_block-selection__checkbox" />
                                {textDataBaseSTATE.textcontents[13]} (1950-1975)
                            </div>
                            <div className="market__container--filter_block-selection">
                                <input type="checkbox" 
                                className="market__container--filter_block-selection__checkbox" />
                                {textDataBaseSTATE.textcontents[14]} (1975 or up)
                            </div>
                        </div>
                    </div>
                    <div className="market__container--main">
                        <div className="market__container--main_topside">
                            <span className="market__container--main_topside-group">
                                <button className="market__container--main_topside-group__btn"> grid </button>
                                <button className="market__container--main_topside-group__btn"> list </button>
                            </span>
                            <span className="market__container--main_topside-group">
                                <button className="market__container--main_topside-group__btn"> ▲▼ </button>
                                <select name="sorting" id="sorting" className="market__container--main_topside-group__selector">
                                    <option value="date" className="market__container--main_topside-group__selector--opt">
                                        {textDataBaseSTATE.textcontents[15]}
                                    </option>
                                    <option value="price" className="market__container--main_topside-group__selector--opt">
                                        {textDataBaseSTATE.textcontents[16]}
                                    </option>
                                    <option value="view" className="market__container--main_topside-group__selector--opt">
                                        {textDataBaseSTATE.textcontents[17]}
                                    </option>
                                </select>
                            </span>
                        </div>

                        <div className="market__container--main_products">
                            <h4 className="market__container--main_products-searchinfo">
                                "vazo" {textDataBaseSTATE.textcontents[18]} 14 {textDataBaseSTATE.textcontents[19]}.
                            </h4>
                            <div className="market__container--main_products-cards">
                                <div className="market__container--main_products-cards__image">
                                    <img src="/asset_library/products/product_1_1.png" alt="from api" className="market__container--main_products-cards__image--content" />
                                    <button className="market__container--main_products-cards__image--btn">
                                        <img src="#" className="market__container--main_products-cards__image--btn_symbol" />
                                    </button>
                                </div>
                                <p className="market__container--main_products-cards__title"> from api </p>
                                <strong className="market__container--main_products-cards__price"> 123 ₼ </strong>
                                <p className="market__container--main_products-cards__category"> from api </p>
                            </div>

                            <div className="market__container--main_products-cards">
                                <div className="market__container--main_products-cards__image">
                                    <img src="/asset_library/products/product_1_1.png" alt="from api" className="market__container--main_products-cards__image--content" />
                                    <button className="market__container--main_products-cards__image--btn">
                                        <img src="#" className="market__container--main_products-cards__image--btn_symbol" />
                                    </button>
                                </div>
                                <p className="market__container--main_products-cards__title"> from api </p>
                                <strong className="market__container--main_products-cards__price"> 123 ₼ </strong>
                                <p className="market__container--main_products-cards__category"> from api </p>
                            </div>
                            <div className="market__container--main_products-cards">
                                <div className="market__container--main_products-cards__image">
                                    <img src="/asset_library/products/product_1_1.png" alt="from api" className="market__container--main_products-cards__image--content" />
                                    <button className="market__container--main_products-cards__image--btn">
                                        <img src="#" className="market__container--main_products-cards__image--btn_symbol" />
                                    </button>
                                </div>
                                <p className="market__container--main_products-cards__title"> from api </p>
                                <strong className="market__container--main_products-cards__price"> 123 ₼ </strong>
                                <p className="market__container--main_products-cards__category"> from api </p>
                            </div>
                            <div className="market__container--main_products-cards">
                                <div className="market__container--main_products-cards__image">
                                    <img src="/asset_library/products/product_1_1.png" alt="from api" className="market__container--main_products-cards__image--content" />
                                    <button className="market__container--main_products-cards__image--btn">
                                        <img src="#" className="market__container--main_products-cards__image--btn_symbol" />
                                    </button>
                                </div>
                                <p className="market__container--main_products-cards__title"> from api </p>
                                <strong className="market__container--main_products-cards__price"> 123 ₼ </strong>
                                <p className="market__container--main_products-cards__category"> from api </p>
                            </div>
                            <div className="market__container--main_products-cards">
                                <div className="market__container--main_products-cards__image">
                                    <img src="/asset_library/products/product_1_1.png" alt="from api" className="market__container--main_products-cards__image--content" />
                                    <button className="market__container--main_products-cards__image--btn">
                                        <img src="#" className="market__container--main_products-cards__image--btn_symbol" />
                                    </button>
                                </div>
                                <p className="market__container--main_products-cards__title"> from api </p>
                                <strong className="market__container--main_products-cards__price"> 123 ₼ </strong>
                                <p className="market__container--main_products-cards__category"> from api </p>
                            </div>
                            <div className="market__container--main_products-cards">
                                <div className="market__container--main_products-cards__image">
                                    <img src="/asset_library/products/product_1_1.png" alt="from api" className="market__container--main_products-cards__image--content" />
                                    <button className="market__container--main_products-cards__image--btn">
                                        <img src="#" className="market__container--main_products-cards__image--btn_symbol" />
                                    </button>
                                </div>
                                <p className="market__container--main_products-cards__title"> from api </p>
                                <strong className="market__container--main_products-cards__price"> 123 ₼ </strong>
                                <p className="market__container--main_products-cards__category"> from api </p>
                            </div>
                            <div className="market__container--main_products-cards">
                                <div className="market__container--main_products-cards__image">
                                    <img src="/asset_library/products/product_1_1.png" alt="from api" className="market__container--main_products-cards__image--content" />
                                    <button className="market__container--main_products-cards__image--btn">
                                        <img src="#" className="market__container--main_products-cards__image--btn_symbol" />
                                    </button>
                                </div>
                                <p className="market__container--main_products-cards__title"> from api </p>
                                <strong className="market__container--main_products-cards__price"> 123 ₼ </strong>
                                <p className="market__container--main_products-cards__category"> from api </p>
                            </div>
                        </div>

                        <div className="market__container--main_bottomside">
                            <button className="market__container--main_bottomside-loadmore">
                                {textDataBaseSTATE.textcontents[20]}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Footer /> */}
        </>
    )
}

export default Market