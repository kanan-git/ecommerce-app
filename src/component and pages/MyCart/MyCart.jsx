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
    const [tempFakeData, setTempFakeData] = useState([0, 5, 11, 123])
    const [tempFakeAmount, setTempFakeAmount] = useState(1500)
    const [leftBalance, setLeftBalance] = useState(0)
    const [totalSumSTATE, setTotalSumSTATE] = useState(0)
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

            function handleFinalPrice() {
                var y = 0
                var z = tempFakeAmount
                for(var i=0; i<tempFakeData.length; i++) {
                    var x = +document.getElementById("total_" + tempFakeData[i]).textContent
                    y += x
                }
                setTotalSumSTATE(y)
                setLeftBalance(z - y)
                // console.log(totalSumSTATE)
            }
            handleFinalPrice()
        }, []
    )

    return (
        <>
            {/* <Header /> */}

            <section className="mycart">
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

                        {
                            tempFakeData.map(
                                (element, index) => {
                                    return (
                                        <tr className="mycart__container--table_rows" id={"cart_pr_id_" + element} key={index}>
                                            <td className="mycart__container--table_rows-cells">
                                                <button className="mycart__container--table_rows-cells__xmark">
                                                    <img src="/asset_library/symbols_svg/xmark-circle-svgrepo-com.svg" 
                                                    className="mycart__container--table_rows-cells__xmark--symbol" />
                                                </button>
                                            </td>
                                            <td className="mycart__container--table_rows-cells">
                                                <img src="/asset_library/products/product_1_1.png" alt="product-thumbnail" 
                                                className="mycart__container--table_rows-cells__thumbnail" />
                                            </td>
                                            <td className="mycart__container--table_rows-cells"> product full title here </td>
                                            <td className="mycart__container--table_rows-cells" id={"price_" + element}> 20 </td>
                                            <td className="mycart__container--table_rows-cells">
                                                <input type="number" 
                                                className="mycart__container--table_rows-cells__input" 
                                                min="1" max="999" defaultValue="1" onChange={
                                                    (e) => {
                                                        var currentRowPrice = document.getElementById("price_" + element)
                                                        var currentRowTotal = document.getElementById("total_" + element)
                                                        var tempValue = currentRowPrice.textContent
                                                        currentRowTotal.textContent = tempValue * e.target.value

                                                        var y = 0
                                                        var z = tempFakeAmount
                                                        for(var i=0; i<tempFakeData.length; i++) {
                                                            var x = +document.getElementById("total_" + tempFakeData[i]).textContent
                                                            y += x
                                                        }
                                                        setTotalSumSTATE(y)
                                                        setLeftBalance(z - y)
                                                        // console.log(totalSumSTATE)
                                                    }
                                                } />
                                            </td>
                                            <td className="mycart__container--table_rows-cells" id={"total_" + element}> 20 </td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </table>

                    <div className="mycart__container--payment">
                        <p className="mycart__container--payment__price"> {textDataBaseSTATE.headers[1]}: {tempFakeAmount} ₼ </p>
                        <strong className="mycart__container--payment__price"> {textDataBaseSTATE.headers[2]}: -{totalSumSTATE} ₼ </strong>
                        <p className="mycart__container--payment__price"> {textDataBaseSTATE.headers[3]}: {leftBalance} ₼ </p>
                        <button className="mycart__container--payment__button"> {textDataBaseSTATE.buttons[0]} </button>
                    </div>

                    <div className="mycart__container--directions">
                        <Link to="/myfav" className="mycart__container--directions_buttons"> ◄ {textDataBaseSTATE.buttons[1]} </Link>
                        <Link to="/products" className="mycart__container--directions_buttons"> {textDataBaseSTATE.buttons[2]} ► </Link>
                    </div>
                </div>
            </section>

            {/* <Footer /> */}
        </>
    )
}

export default MyCart