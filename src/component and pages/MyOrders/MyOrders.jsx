import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './MyOrders.css'
// import Header from '../Header/Header.jsx'
// import Footer from '../Footer/Footer.jsx'

function MyOrders() {

    const textDataBase = {
        AZ: {
            delivery_status: [
                "göndəriş alındı", 
                "transfer mərkəzində", 
                "çatdırılma şöbəsində", 
                "kuryer çatdırılmasında", 
                "təslim edildi"
            ],
            buttons: [
                "Favorilərim", 
                "Mağazaya keç"
            ],
            table: [
                "Məhsul", 
                "Qiymət", 
                "Miqdar", 
                "Çatdırılma statusu"
            ]
        },
        EN: {
            delivery_status: [
                "shipment received", 
                "at the transfer center", 
                "at the delivery branch", 
                "in courier delivery", 
                "was delivered"
            ],
            buttons: [
                "Check Favorites", 
                "Go to Store"
            ],
            table: [
                "Product", 
                "Price", 
                "Count", 
                "Delivery status"
            ]
        },
        TR: {
            delivery_status: [
                "gönderi alındı", 
                "transfer merkezinde", 
                "teslimat şubesinde", 
                "kurye dağıtımında", 
                "teslim edildi"
            ],
            buttons: [
                "Favorilerine göz at", 
                "Mağazaya git"
            ],
            table: [
                "Ürün", 
                "Fiyat", 
                "Miktar", 
                "Teslimat durumu"
            ]
        },
        RU: {
            delivery_status: [
                "полученный груз", 
                "в центре трансфера", 
                "в отделении доставки", 
                "в курьерской доставке", 
                "Было доставлено"
            ],
            buttons: [
                "Проверить избранное", 
                "Иди в магазин"
            ],
            table: [
                "Продукт", 
                "Цена", 
                "Считать", 
                "Статус доставки"
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

            <div className="myorders">
                <div className="myorders__container">
                    <table className="myorders__container--table">
                        <tr className="myorders__container--table_rows">
                            <th className="myorders__container--table_rows-cells"> {/* empty */} </th>
                            <th className="myorders__container--table_rows-cells"> {textDataBaseSTATE.table[0]} </th>
                            <th className="myorders__container--table_rows-cells"> {textDataBaseSTATE.table[1]} (₼) </th>
                            <th className="myorders__container--table_rows-cells"> {textDataBaseSTATE.table[2]} </th>
                            <th className="myorders__container--table_rows-cells"> {textDataBaseSTATE.table[3]} </th>
                        </tr>

                        <tr className="myorders__container--table_rows">
                            <td className="myorders__container--table_rows-cells">
                                object-fit cover
                                <img src="/asset_library/products/#" alt="product-thumbnail" className="myorders__container--table_rows-cells__thumbnail" />
                            </td>
                            <td className="myorders__container--table_rows-cells"> product full title here </td>
                            <td className="myorders__container--table_rows-cells"> 20 </td>
                            <td className="myorders__container--table_rows-cells"> 1 </td>
                            <td className="myorders__container--table_rows-cells"> {textDataBaseSTATE.delivery_status[0]} </td>
                        </tr>
                        <tr className="myorders__container--table_rows">
                            <td className="myorders__container--table_rows-cells">
                                object-fit cover
                                <img src="/asset_library/products/#" alt="product-thumbnail" className="myorders__container--table_rows-cells__thumbnail" />
                            </td>
                            <td className="myorders__container--table_rows-cells"> product full title here </td>
                            <td className="myorders__container--table_rows-cells"> 20 </td>
                            <td className="myorders__container--table_rows-cells"> 1 </td>
                            <td className="myorders__container--table_rows-cells"> {textDataBaseSTATE.delivery_status[4]} </td>
                        </tr>
                    </table>

                    <div className="myorders__container--directions">
                        <button className="myorders__container--directions_buttons"> ◄ {textDataBaseSTATE.buttons[0]} </button>
                        <button className="myorders__container--directions_buttons"> {textDataBaseSTATE.buttons[1]} ► </button>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    )
}

export default MyOrders