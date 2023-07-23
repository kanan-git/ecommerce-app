import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './MyFavorites.css'
// import Header from '../Header/Header.jsx'
// import Footer from '../Footer/Footer.jsx'

function MyFavorites() {
    window.scrollTo(0, 0)

    const textDataBase = {
        AZ: {
            headers: [
                "Məhsullar"
            ],
            buttons: [
                "Səbətim", 
                "Mağazaya keç"
            ],
            table: [
                "Məhsul", 
                "Qiymət"
            ]
        },
        EN: {
            headers: [
                "Products"
            ],
            buttons: [
                "Check Cart", 
                "Go to Store"
            ],
            table: [
                "Product", 
                "Price"
            ]
        },
        TR: {
            headers: [
                "Ürünler"
            ],
            buttons: [
                "Sepete göz at", 
                "Mağazaya git"
            ],
            table: [
                "Ürün", 
                "Fiyat"
            ]
        },
        RU: {
            headers: [
                "Продукты"
            ],
            buttons: [
                "Проверить корзину", 
                "Иди в магазин"
            ],
            table: [
                "Продукт", 
                "Цена"
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

            <section className="myfavorites">
                <div className="myfavorites__container">
                    <div className="myfavorites__container--info">
                        {textDataBaseSTATE.headers[0]}: `10`
                    </div>

                    <table className="myfavorites__container--table">
                        <tr className="myfavorites__container--table_rows">
                            <th className="myfavorites__container--table_rows-cells"> {/* empty */} </th>
                            <th className="myfavorites__container--table_rows-cells"> {/* empty */} </th>
                            <th className="myfavorites__container--table_rows-cells"> {textDataBaseSTATE.table[0]} </th>
                            <th className="myfavorites__container--table_rows-cells"> {textDataBaseSTATE.table[1]} (₼) </th>
                        </tr>

                        <tr className="myfavorites__container--table_rows">
                            <td className="myfavorites__container--table_rows-cells">
                                <button className="myfavorites__container--table_rows-cells__xmark">
                                    <img src="/asset_library/symbols_svg/#" className="myfavorites__container--table_rows-cells__xmark--symbol" />
                                </button>
                            </td>
                            <td className="myfavorites__container--table_rows-cells">
                                object-fit cover
                                <img src="/asset_library/products/#" alt="product-thumbnail" className="myfavorites__container--table_rows-cells__thumbnail" />
                            </td>
                            <td className="myfavorites__container--table_rows-cells"> product full title here </td>
                            <td className="myfavorites__container--table_rows-cells"> 20 </td>
                        </tr>
                        <tr className="myfavorites__container--table_rows">
                            <td className="myfavorites__container--table_rows-cells">
                                <button className="myfavorites__container--table_rows-cells__xmark">
                                    <img src="/asset_library/symbols_svg/#" className="myfavorites__container--table_rows-cells__xmark--symbol" />
                                </button>
                            </td>
                            <td className="myfavorites__container--table_rows-cells">
                                object-fit cover
                                <img src="/asset_library/products/#" alt="product-thumbnail" className="myfavorites__container--table_rows-cells__thumbnail" />
                            </td>
                            <td className="myfavorites__container--table_rows-cells"> product full title here </td>
                            <td className="myfavorites__container--table_rows-cells"> 20 </td>
                        </tr>
                    </table>

                    <div className="myfavorites__container--directions">
                        <Link to="/mycart" className="myfavorites__container--directions_buttons"> ◄ {textDataBaseSTATE.buttons[0]} </Link>
                        <Link to="/products" className="myfavorites__container--directions_buttons"> {textDataBaseSTATE.buttons[1]} ► </Link>
                    </div>
                </div>
            </section>

            {/* <Footer /> */}
        </>
    )
}

export default MyFavorites