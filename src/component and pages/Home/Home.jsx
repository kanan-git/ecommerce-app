import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Home.css'
// import Header from '../Header/Header.jsx'
// import Footer from '../Footer/Footer.jsx'

function Home() {
    window.scrollTo(0, 0)

    const textDataBase = {
        AZ: {},
        EN: {},
        TR: {
            nav_categ: [
                "ANTİKA SANAT", // 0
                "ANTİKA FOTOĞRAFÇILIK", // 1
                "ANTİKA MAKİNELER", // 2
                "ANTİKA OBJELER", // 3
                "EV DEKORASYON VE TEKSTİL", // 4
                "KOLEKSİYON", // 5
                "EFEMERA", // 6
                "KLASİK ARAÇLAR" // 7
            ],
            nav_tags: [
                "Antika Halı", // a1 | 0
                "Antika Kilim", // a2 | 1
                "Antika Tablo, Resim", // a3 | 2
                "Antika Duvar Halısı", // a4 | 3
                "Antika Seccade", // a5 | 4
                "Antika Örtü, Minder", // a6 | 5
            
                "Antika Fotoğraf Makinesi / Kamera", // b1 | 6
                "Antika Filmli Fotoğraf Makinesi", // b2 | 7
                "SLR Fotoğraf Makinesi", // b3 | 8
                "Antika Fotoğraf Makinesi Aksesuarları", // b4 | 9
            
                "Antika Daktilo", // c1 | 10
                "Antika Radyo", // c2 | 11
                "Antika Gramofon", // c3 | 12
                "Antika Pikap", // c4 | 13
                "Antika Hesap Makinesi", // c5 | 14
                "Antika Kahve Makinesi", // c6 | 15
                "Antika Dikiş Makinesi", // c7 | 16
                "Antika Telefon", // c8 | 17
                "Diğer Makineler", // c9 | 18
            
                "Antika Ağızlık & Pipo", // d1 | 19
                "Antika Anahtarlık", // d2 | 20
                "Antika Bardaklar", // d3 | 21
                "Antika Biblo", // d4 | 22
                "Antika Çakmak", // d5 | 23
                "Antika Dürbün", // d6 | 24
                "Antika Fincan Takımı & Parçaları", // d7 | 25
                "Antika Kılıç, Bıçak", // d8 | 26
                "Antika Kutu", // d9 | 27
                "Antika Müzik Enstrümanları", // d10 | 28
                "Antika Oyuncak", // d11 | 29
                "Antika Saat", // d12 | 30
                "Antika Termometre", // d13 | 31
                "Antika Tespih", // d14 | 32
                "Antika Yemek Takımı & Parçaları", // d15 | 33
                "Diğer Objeler", // d16 | 34
            
                "Antika Aynalar", // e1 | 35
                "Antika Aydınlatma", // e2 | 36
                "Antika Bahçe & Dış Mimari", // e3 | 37
                "Antika Bavul, Çanta", // e4 | 38
                "Antika Dekoratif Objeler", // e5 | 39
                "Antika Mobilya & Ahşap Ürünler", // e6 | 40
                "Antika Örtüler", // e7 | 41
                "Antika Vazo", // e8 | 42
                "Antika Tekstil", // e9 | 43
                "Dİğer Antika Ev Ürünleri", // e10 | 44
            
                "Antika Cep & Kol Saatleri", // f1 | 45
                "Antika Dini ve Manevi Eşyalar", // f2 | 46
                "Antika El Aletleri", // f3 | 47
                "Antika Kalemler", // f4 | 48
                "Antika Kol Düğmeleri", // f5 | 49
                "Diğer Koleksiyonluk Ürünler", // f6 | 50
            
                "Antika Fotoğraflar", // g1 | 51
                "Antika Jetonlar, Biletler ve Telefon Kartları", // g2 | 52
                "Antika Kartpostallar", // g3 | 53
                "Antika Kitap & Belgeler", // g4 | 54
                "Antika Madalyalar, Rozetler", // g5 | 55
                "Antika Mektuplar", // g6 | 56
                "Antika Paralar", // g7 | 57
                "Antika Plak, CD, Kaset", // g8 | 58
                "Antika Pullar, Zarflar, Kartlar", // g9 | 59
                "Diğer Efemera", // g10 | 60
            
                "Klasik Otomobiller", // h1 | 61
                "Klasik Arazi Araçları", // h2 | 62
                "Klasik Motosikletler" // h3 | 63
            ]
        },
        RU: {}
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

            <section className="home">
                <div className="home__container">
                    .
                </div>
            </section>
            
            {/* <Footer /> */}
        </>
    )
}

export default Home