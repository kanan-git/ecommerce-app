import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Support.css'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

function Support() {

    const textDataBase = {
        symbols_path: [
            "/asset_library/symbols_svg/swap-horizontal-circle-solid-svgrepo-com.svg", 
            "/asset_library/symbols_svg/cargo-truck-svgrepo-com.svg", 
            "/asset_library/symbols_svg/basket-svgrepo-com.svg", 
            "/asset_library/symbols_svg/credit-card-svgrepo-com.svg", 
            "/asset_library/symbols_svg/ticket2-svgrepo-com.svg", 
            "/asset_library/symbols_svg/user-square-svgrepo-com.svg"
        ], 
        AZ: {
            title: "RetroQalereya | Dəstək və Yardım", 
            headers: [
                "ləğv, geri qaytarma, dəyişdirmə", 
                "göndərmə və çatdırılma", 
                "məhsul və mağaza", 
                "ödəniş", 
                "ödəniş təlimatı", 
                "üzvlük"
            ], 
            descriptions: [
                "Ləğv etmə, Geri qaytarma və Mübadilə prosesləri haqqında bilmək üçün lazım olan hər şey.", 
                "Yük və Çatdırılma prosesləri haqqında bilməli olduğunuz hər şey.", 
                "Məhsul və Mağaza haqqında bilməli olduğunuz hər şey.", 
                "Ödəniş prosesi haqqında bilmək lazım olan hər şey.", 
                "Ödəniş haqqında bilmək lazım olan hər şey.", 
                "Üzvlük haqqında bilmək lazım olan hər şey."
            ], 
            other: "hamısını gör"
        }, 
        EN: {
            title: "RetroGallery | Support & Help", 
            headers: [
                "cancellation, refund, change", 
                "shipping and delivery", 
                "product and store", 
                "payment", 
                "payment guide", 
                "membership"
            ], 
            descriptions: [
                "All you need to know about the Cancellation, Refund and Exchange processes.", 
                "All you need to know about Cargo and Delivery processes.", 
                "All you need to know about the Product & Store.", 
                "All you need to know about the payment process.", 
                "All you need to know about payment.", 
                "All you need to know about membership."
            ], 
            other: "see all"
        }, 
        TR: {
            title: "RetroGaleri | Yardım ve Destek", 
            headers: [
                "iptal, iade, değişim", 
                "kargo ve teslimat", 
                "ürün ve mağaza", 
                "ödeme", 
                "ödeme rehberi", 
                "üyelik"
            ], 
            descriptions: [
                "İptal, İade ve Değişim süreçleri hakkında bilmeniz gerekenlerin tamamı.", 
                "Kargo ve Teslimat süreçleri hakkında bilmeniz gerekenlerin tamamı.", 
                "Ürün & Mağaza hakkında bilmeniz gerekenlerin tamamı.", 
                "Ödeme süreci hakkında bilmeniz gerekenlerin tamamı.", 
                "Ödeme hakkında bilmeniz gerekenlerin tamamı.", 
                "Üyelik hakkında bilmeniz gerekenlerin tamamı."
            ], 
            other: "tamamını gör"
        }, 
        RU: {
            title: "РетроГалерея | Поддержка и Помощь", 
            headers: [
                "отмена, возврат, изменение", 
                "доставка и доставка", 
                "продукт и магазин", 
                "оплата", 
                "руководство по оплате", 
                "членство"
            ], 
            descriptions: [
                "Все, что вам нужно знать о процессах отмены, возврата и обмена.", 
                "Все, что вам нужно знать о процессах грузоперевозок и доставки.", 
                "Все, что вам нужно знать о продукте и магазине.", 
                "Все, что вам нужно знать о процессе оплаты.", 
                "Все, что вам нужно знать об оплате.", 
                "Все, что вам нужно знать о членстве."
            ], 
            other: "Увидеть все"
        }
    }

    const [textDataBaseSTATE, setTextDataBaseSTATE] = useState(textDataBase.AZ)

    return (
        <>
            <Header />

            <div className="support">
                <div className="support__container">
                    <h3 className="support__container--title"> {textDataBaseSTATE.title} </h3>
                    <div className="support__container--group">

                        {
                            textDataBaseSTATE.headers.map(
                                (element, index) => {
                                    return (
                                        <div className="support__container--group_cards" key={index}>
                                            <img src={textDataBase.symbols_path[index]} className="support__container--group_cards-symbol" />
                                            <h6 className="support__container--group_cards-header"> {textDataBaseSTATE.headers[index]} </h6>
                                            <p className="support__container--group_cards-description"> {textDataBaseSTATE.descriptions[index]} </p>
                                            <Link className="support__container--group_cards-link" to="/"> {textDataBaseSTATE.other} </Link>
                                        </div>
                                    )
                                }
                            )
                        }

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Support