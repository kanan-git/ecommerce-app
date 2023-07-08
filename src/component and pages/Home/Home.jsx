import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Home.css'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

function Home() {
    return (
        <>
            <Header />
            <div className="home">
                <div>
                    ANTİKA SANAT <br />
                        Antika Halı <br />
                        Antika Kilim <br />
                        Antika Tablo, Resim <br />
                        Antika Duvar Halısı <br />
                        Antika Seccade <br />
                        Antika Örtü, Minder <br />
                    ANTİKA FOTOĞRAFÇILIK <br />
                        Antika Fotoğraf Makinesi / Kamera <br />
                        Antika Filmli Fotoğraf Makinesi <br />
                        SLR Fotoğraf Makinesi <br />
                        Antika Fotoğraf Makinesi Aksesuarları <br />
                    ANTİKA MAKİNELER <br />
                        Antika Daktilo <br />
                        Antika Radyo <br />
                        Antika Gramofon <br />
                        Antika Pikap <br />
                        Antika Hesap Makinesi <br />
                        Antika Kahve Makinesi <br />
                        Antika Dikiş Makinesi <br />
                        Antika Telefon <br />
                        Diğer Makineler <br />
                    ANTİKA OBJELER <br />
                        Antika Ağızlık & Pipo <br />
                        Antika Anahtarlık <br />
                        Antika Bardaklar <br />
                        Antika Biblo <br />
                        Antika Çakmak <br />
                        Antika Dürbün <br />
                        Antika Fincan Takımı & Parçaları <br />
                        Antika Kılıç, Bıçak <br />
                        Antika Kutu <br />
                        Antika Müzik Enstrümanları <br />
                        Antika Oyuncak <br />
                        Antika Saat <br />
                        Antika Termometre <br />
                        Antika Tespih <br />
                        Antika Yemek Takımı & Parçaları <br />
                        Diğer Objeler <br />
                    EV DEKORASYON VE TEKSTİL <br />
                        Antika Aynalar <br />
                        Antika Aydınlatma <br />
                        Antika Bahçe & Dış Mimari <br />
                        Antika Bavul, Çanta <br />
                        Antika Dekoratif Objeler <br />
                        Antika Mobilya & Ahşap Ürünler <br />
                        Antika Örtüler <br />
                        Antika Vazo <br />
                        Antika Tekstil <br />
                        Dİğer Antika Ev Ürünleri <br />
                    KOLEKSİYON <br />
                        Antika Cep & Kol Saatleri <br />
                        Antika Dini ve Manevi Eşyalar <br />
                        Antika El Aletleri <br />
                        Antika Kalemler <br />
                        Antika Kol Düğmeleri <br />
                        Diğer Koleksiyonluk Ürünler <br />
                    EFEMERA <br />
                        Antika Fotoğraflar <br />
                        Antika Jetonlar, Biletler ve Telefon Kartları <br />
                        Antika Kartpostallar <br />
                        Antika Kitap & Belgeler <br />
                        Antika Madalyalar, Rozetler <br />
                        Antika Mektuplar <br />
                        Antika Paralar <br />
                        Antika Plak, CD, Kaset <br />
                        Antika Pullar, Zarflar, Kartlar <br />
                        Diğer Efemera <br />
                    KLASİK ARAÇLAR <br />
                        Klasik Otomobiller <br />
                        Klasik Arazi Araçları <br />
                        Klasik Motosikletler
                </div>

                {/* header
                carousel

                blog
                buttons

                header
                carousel

                left side carousel wide
                right side more button and some info

                ... */}
            </div>
            <Footer />
        </>
    )
}

export default Home