import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Footer.css'

function Footer() {

    const textDataBase = {
        AZ: {
            description: "Retro Qalereya keçmiş dövrlərin mahiyyətini əks etdirən incə antik məhsullar üçün əsas məkandır. Bizim diqqətlə seçilmiş üzüm xəzinələri kolleksiyamızı araşdırarkən özünüzü əbədi gözəllik dünyasına qərq edin. Nadir mebel parçalarından tutmuş bəzəkli dekor əşyalarına qədər hər bir artefakt tarixin və sənətkarlığın valehedici hekayəsindən bəhs edir. Keçmişin cazibəsini kəşf edin və Retro Qalereya ilə yaşayış məkanınıza nostalji toxunuşu gətirin.",
            titles: [
                "Əlaqə məlumatları", // 0
                "Ünvan", // 1
                "Telefon", // 2
                "E-poçt" // 3
            ],
            location: "Dilarə Əliyeva küç, 28 May, Bakı",
            headers: [
                "Mağaza", // 0
                "Profil", // 1
                "Dəstək", // 2
                "Sosial Media" // 3
            ],
            shop: [
                "Antikvar İncəsənət", // 0
                "Antikvar Fotoqrafiya", // 1
                "Antikvar Maşınlar", // 2
                "Antikvar Əşyalar", // 3
                "Ev Dekorasiyası və Tekstil", // 4
                "Kolleksiya", // 5
                "Efemer", // 6
                "Klassik Alətlər" // 7
            ],
            profile: [
                "Sifarişlər", // 0
                "Favorilər", // 1
                "Səbət", // 2
                "Parametrlər" // 3
            ],
            support: [
                "Gizlilik Siyasəti", // 0
                "Şərtlər və Qaydalar", // 1
                "Tez-Tez Verilən Suallar (FAQ)", // 2
                "Əlaqə", // 3
                "Haqqımızda" // 4
            ],
            rights: "© Müəllif Hüququ 2023 CODERS.EDU.AZ | Bütün Hüquqları Qorunur."
        },
        EN: {
            description: "Retro Gallery is your premier destination for exquisite antique products that capture the essence of bygone eras. Immerse yourself in a world of timeless beauty as you explore our carefully curated collection of vintage treasures. From rare furniture pieces to ornate decor items, each artifact tells a captivating story of history and craftsmanship. Discover the allure of the past and bring a touch of nostalgia to your living space with Retro Gallery.",
            titles: [
                "Contact Information", // 0
                "Location", // 1
                "Phone", // 2
                "Email" // 3
            ],
            location: "Dilara Aliyeva st, 28 May, Baku",
            headers: [
                "Shop", // 0
                "Profile", // 1
                "Support", // 2
                "Sosial Media" // 3
            ],
            shop: [
                "Antique Art", // 0
                "Antique Photography", // 1
                "Antique Machines", // 2
                "Antique Objects", // 3
                "Home Decoration & Textile", // 4
                "Collection", // 5
                "Ephemera", // 6
                "Classic Tools" // 7
            ],
            profile: [
                "Orders", // 0
                "Favorites", // 1
                "Basket", // 2
                "Parameters" // 3
            ],
            support: [
                "Privacy Policy", // 0
                "Terms & Conditions", // 1
                "FAQ", // 2
                "Contact", // 3
                "About Us" // 4
            ],
            rights: "© Copyright 2023 CODERS.EDU.AZ | All Rights Reserved."
        },
        TR: {
            description: "Retro Galeri, geçmiş dönemlerin özünü yakalayan kaliteli antikalar için önde gelen bir destinasyondur. Özenle seçilmiş eski hazine koleksiyonumuzu keşfederken kendinizi zamansız bir güzellik dünyasına kaptırın. Nadir mobilya parçalarından süslü dekor öğelerine kadar her bir eser, tarihin ve işçiliğin büyüleyici bir hikayesini anlatıyor. Retro Galeri ile geçmişin cazibesini keşfedin ve yaşam alanınıza bir nostalji dokunuşu getirin.",
            titles: [
                "İletişim bilgileri", // 0
                "Adres", // 1
                "Telefon", // 2
                "E-posta" // 3
            ],
            location: "Dilara Aliyeva sok., 28 Mayıs, Bakü",
            headers: [
                "Mağaza", // 0
                "Profil", // 1
                "Destek", // 2
                "Sosyal Medya" // 3
            ],
            shop: [
                "Antika Sanat", 
                "Antika Fotoğrafçılık", 
                "Antika Makineler", 
                "Antika Nesneler", 
                "Ev Dekorasyonu ve Tekstili", 
                "Kolleksiyon", 
                "Efemera", 
                "Klasik Araçlar"
            ],
            profile: [
                "Sifarişler", 
                "Favoriler", 
                "Sepet", 
                "Ayarlar"
            ],
            support: [
                "Gizlilik Politikası", 
                "Şartlar ve Koşullar", 
                "SSS", 
                "İletişim", 
                "Hakkımızda"
            ],
            rights: "© Telif Hakkı 2023 CODERS.EDU.AZ | Tüm Hakkları Saklıdır."
        },
        RU: {
            description: "Ретро-галерея — это главное место для прекрасного антиквариата, отражающего суть ушедших эпох. Погрузитесь в мир вневременной красоты, исследуя нашу тщательно отобранную коллекцию старинных сокровищ. От редких предметов мебели до богато украшенных предметов декора, каждый артефакт рассказывает увлекательную историю истории и мастерства. Откройте для себя очарование прошлого и привнесите нотку ностальгии в свое жилое пространство с помощью Retro Gallery.",
            titles: [
                "Контактная информация", // 0
                "Адрес", // 1
                "Телефон", // 2
                "Электронная почта" // 3
            ],
            location: "Ул. Дилары Алиевой, 28 мая, Баку",
            headers: [
                "Магазин", // 0
                "Профиль", // 1
                "Поддерживать", // 2
                "Социальные Медиа" // 3
            ],
            shop: [
                "Античное Искусство", 
                "Антикварная Фотография", 
                "Антикварные Машины", 
                "Антикварные Предметы", 
                "Домашнее Украшение и Текстиль", 
                "Коллекция", 
                "Эфемера", 
                "Классические Инструменты"
            ],
            profile: [
                "Заказы", 
                "Избранное", 
                "Корзина", 
                "Параметры"
            ],
            support: [
                "Политика Конфиденциальности", 
                "Условия", 
                "Часто Задаваемые Вопросы", 
                "Контакт", 
                "О Нас"
            ],
            rights: "© Авторские Права 2023 CODERS.EDU.AZ | Все Права Защищены."
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
        <div className="footer">
            <div className="footer__main">
                <ul className="footer__main--columns">
                    <img src="/asset_library/logo_and_icon/RetroQalereya_transparent_bg_logo.png" 
                    alt="RetroQalereya" className="footer__main--columns_logo" />
                    <p className="footer__main--columns_description"> {textDataBaseSTATE.description} </p>
                    <br />
                    <li className="footer__main--columns_info"> {textDataBaseSTATE.titles[1]}: {textDataBaseSTATE.location} </li>
                    <li className="footer__main--columns_info"> {textDataBaseSTATE.titles[2]}: +994 50 123 45 67 </li>
                    <li className="footer__main--columns_info"> {textDataBaseSTATE.titles[3]}: info@retrogallery.com </li>
                </ul>
                <ul className="footer__main--columns">
                    <h6 className="footer__main--columns_header"> {textDataBaseSTATE.headers[0]} </h6>
                    <li className="footer__main--columns_list"> {textDataBaseSTATE.shop[0]} </li>
                    <li className="footer__main--columns_list"> {textDataBaseSTATE.shop[1]} </li>
                    <li className="footer__main--columns_list"> {textDataBaseSTATE.shop[2]} </li>
                    <li className="footer__main--columns_list"> {textDataBaseSTATE.shop[3]} </li>
                    <li className="footer__main--columns_list"> {textDataBaseSTATE.shop[4]} </li>
                    <li className="footer__main--columns_list"> {textDataBaseSTATE.shop[5]} </li>
                    <li className="footer__main--columns_list"> {textDataBaseSTATE.shop[6]} </li>
                    <li className="footer__main--columns_list"> {textDataBaseSTATE.shop[7]} </li>
                </ul>
                <ul className="footer__main--columns">
                    <h6 className="footer__main--columns_header"> {textDataBaseSTATE.headers[1]} </h6>
                    <li className="footer__main--columns_list"> {textDataBaseSTATE.profile[0]} </li>
                    <li className="footer__main--columns_list"> {textDataBaseSTATE.profile[1]} </li>
                    <li className="footer__main--columns_list"> {textDataBaseSTATE.profile[2]} </li>
                    <li className="footer__main--columns_list"> {textDataBaseSTATE.profile[3]} </li>
                </ul>
                <ul className="footer__main--columns">
                    <h6 className="footer__main--columns_header"> {textDataBaseSTATE.headers[2]} </h6>
                    <li className="footer__main--columns_list"> {textDataBaseSTATE.support[0]} </li>
                    <li className="footer__main--columns_list"> {textDataBaseSTATE.support[1]} </li>
                    <li className="footer__main--columns_list"> {textDataBaseSTATE.support[2]} </li>
                    <li className="footer__main--columns_list"> {textDataBaseSTATE.support[3]} </li>
                    <li className="footer__main--columns_list"> {textDataBaseSTATE.support[4]} </li>
                </ul>
                <ul className="footer__main--columns">
                    <h6 className="footer__main--columns_header"> {textDataBaseSTATE.headers[3]} </h6>
                    <Link to="https://instagram.com" className="footer__main--columns_info">
                        <img src="/asset_library/symbols_svg/icons8-instagram.svg" alt="instagram" className="footer__main--columns_info-content" />
                    </Link>
                    <Link to="https://youtube.com" className="footer__main--columns_info">
                        <img src="/asset_library/symbols_svg/icons8-youtube.svg" alt="youtube" className="footer__main--columns_info-content" />
                    </Link>
                    <Link to="https://facebook.com" className="footer__main--columns_info">
                        <img src="/asset_library/symbols_svg/icons8-facebook.svg" alt="facebook" className="footer__main--columns_info-content" />
                    </Link>
                    <Link to="https://twitter.com" className="footer__main--columns_info">
                        <img src="/asset_library/symbols_svg/icons8-twitter.svg" alt="twitter" className="footer__main--columns_info-content" />
                    </Link>
                </ul>
            </div>
            <div className="footer__bottom">
                <p className="footer__bottom--rights">
                    {textDataBaseSTATE.rights}
                </p>
                <span className="footer__bottom--icons">
                    <img src="/asset_library/symbols_svg/paypal-svgrepo-com.svg" alt="paypal" className="footer__bottom--icons_content" />
                    <img src="/asset_library/symbols_svg/visa-svgrepo-com.svg" alt="visa" className="footer__bottom--icons_content" />
                    <img src="/asset_library/symbols_svg/mastercard-svgrepo-com.svg" alt="mastercard" className="footer__bottom--icons_content" />
                    <img src="/asset_library/symbols_svg/american-express-svgrepo-com.svg" alt="american-express" className="footer__bottom--icons_content" />
                </span>
            </div>
        </div>
    )
}

export default Footer