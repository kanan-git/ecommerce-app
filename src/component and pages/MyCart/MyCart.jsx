import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './MyCart.css'
// import Header from '../Header/Header.jsx'
// import Footer from '../Footer/Footer.jsx'

function MyCart() {
    window.scrollTo(0, 0)

    const textDataBase = {
        AZ: {
            headers: [
                "Məhsullar", 
                "Cari balansınız", 
                "Yekun məbləğ", 
                "Qalıq balans"
            ],
            buttons: [
                "Hamısını al", 
                "Favorilərim", 
                "Mağazaya keç"
            ],
            table: [
                "Məhsul", 
                "Qiymət", 
                "Miqdar", 
                "Yekun məbləğ"
            ]
        },
        EN: {
            headers: [
                "Products", 
                "Your current balance", 
                "Total price", 
                "Remainin balance"
            ],
            buttons: [
                "Buy all", 
                "Check Favorites", 
                "Go to Store"
            ],
            table: [
                "Product", 
                "Price", 
                "Count", 
                "Sum"
            ]
        },
        TR: {
            headers: [
                "Ürünler", 
                "Mevcut bakiyeniz", 
                "Toplam fiyat", 
                "Kalan bakiye"
            ],
            buttons: [
                "Hepsini al", 
                "Favorilerine göz at", 
                "Mağazaya git"
            ],
            table: [
                "Ürün", 
                "Fiyat", 
                "Miktar", 
                "Toplam"
            ]
        },
        RU: {
            headers: [
                "Продукты", 
                "Ваш текущий баланс", 
                "Итоговая цена", 
                "Остаток средств"
            ],
            buttons: [
                "Купить все", 
                "Проверить избранное", 
                "Иди в магазин"
            ],
            table: [
                "Продукт", 
                "Цена", 
                "Считать", 
                "Сумма"
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

            <div className="mycart">
            <div className="mycart__container">
                    <div className="mycart__container--info">
                        {textDataBaseSTATE.headers[0]}: `10`
                    </div>

                    <table className="mycart__container--table">
                        <tr className="mycart__container--table_rows">
                            <th className="mycart__container--table_rows-cells"> {/* empty */} </th>
                            <th className="mycart__container--table_rows-cells"> {/* empty */} </th>
                            <th className="mycart__container--table_rows-cells"> {textDataBaseSTATE.table[0]} </th>
                            <th className="mycart__container--table_rows-cells"> {textDataBaseSTATE.table[1]} (₼) </th>
                            <th className="mycart__container--table_rows-cells"> {textDataBaseSTATE.table[2]} </th>
                            <th className="mycart__container--table_rows-cells"> {textDataBaseSTATE.table[3]} (₼) </th>
                        </tr>

                        <tr className="mycart__container--table_rows">
                            <td className="mycart__container--table_rows-cells">
                                <button className="mycart__container--table_rows-cells__xmark">
                                    <img src="/asset_library/symbols_svg/#" className="mycart__container--table_rows-cells__xmark--symbol" />
                                </button>
                            </td>
                            <td className="mycart__container--table_rows-cells">
                                object-fit cover
                                <img src="/asset_library/products/#" alt="product-thumbnail" className="mycart__container--table_rows-cells__thumbnail" />
                            </td>
                            <td className="mycart__container--table_rows-cells"> product full title here </td>
                            <td className="mycart__container--table_rows-cells"> 20 </td>
                            <td className="mycart__container--table_rows-cells">
                                <input type="number" 
                                className="mycart__container--table_rows-cells__input" 
                                min="1" max="999" defaultValue="1" />
                            </td>
                            <td className="mycart__container--table_rows-cells"> 100 </td>
                        </tr>
                        <tr className="mycart__container--table_rows">
                            <td className="mycart__container--table_rows-cells">
                                <button className="mycart__container--table_rows-cells__xmark">
                                    <img src="/asset_library/symbols_svg/#" className="mycart__container--table_rows-cells__xmark--symbol" />
                                </button>
                            </td>
                            <td className="mycart__container--table_rows-cells">
                                object-fit cover
                                <img src="/asset_library/products/#" alt="product-thumbnail" className="mycart__container--table_rows-cells__thumbnail" />
                            </td>
                            <td className="mycart__container--table_rows-cells"> product full title here </td>
                            <td className="mycart__container--table_rows-cells"> 20 </td>
                            <td className="mycart__container--table_rows-cells">
                                <input type="number" 
                                className="mycart__container--table_rows-cells__input" 
                                min="1" max="999" defaultValue="1" />
                            </td>
                            <td className="mycart__container--table_rows-cells"> 100 </td>
                        </tr>
                    </table>

                    <div className="mycart__container--payment">
                        <p className="mycart__container--payment__price"> {textDataBaseSTATE.headers[1]}: `1500` ₼ </p>
                        <strong className="mycart__container--payment__price"> {textDataBaseSTATE.headers[2]}: - `1000` ₼ </strong>
                        <i className="mycart__container--payment__price"> {textDataBaseSTATE.headers[3]}: `500` ₼ </i>
                        <button className="mycart__container--payment__button"> {textDataBaseSTATE.buttons[0]} </button>
                    </div>

                    <div className="mycart__container--directions">
                        <button className="mycart__container--directions_buttons"> ◄ {textDataBaseSTATE.buttons[1]} </button>
                        <button className="mycart__container--directions_buttons"> {textDataBaseSTATE.buttons[2]} ► </button>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    )
}

export default MyCart