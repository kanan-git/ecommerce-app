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
                {/* <div>
                    ANTİKA SANAT
                        Antika Halı
                        Antika Kilim
                        Antika Tablo, Resim
                        Antika Duvar Halısı
                        Antika Seccade
                        Antika Örtü, Minder
                    ANTİKA FOTOĞRAFÇILIK
                        Antika Fotoğraf Makinesi / Kamera
                        Antika Filmli Fotoğraf Makinesi
                        SLR Fotoğraf Makinesi
                        Antika Fotoğraf Makinesi Aksesuarları
                    ANTİKA MAKİNELER
                        Antika Daktilo
                        Antika Radyo
                        Antika Gramofon
                        Antika Pikap
                        Antika Hesap Makinesi
                        Antika Kahve Makinesi
                        Antika Dikiş Makinesi
                        Antika Telefon
                        Diğer Makineler
                    ANTİKA OBJELER
                        Antika Ağızlık & Pipo
                        Antika Anahtarlık
                        Antika Bardaklar
                        Antika Biblo
                        Antika Çakmak
                        Antika Dürbün
                        Antika Fincan Takımı & Parçaları
                        Antika Kılıç, Bıçak
                        Antika Kutu
                        Antika Müzik Enstrümanları
                        Antika Oyuncak
                        Antika Saat
                        Antika Termometre
                        Antika Tespih
                        Antika Yemek Takımı & Parçaları
                        Diğer Objeler
                    EV DEKORASYON VE TEKSTİL
                        Antika Aynalar
                        Antika Aydınlatma
                        Antika Bahçe & Dış Mimari
                        Antika Bavul, Çanta
                        Antika Dekoratif Objeler
                        Antika Mobilya & Ahşap Ürünler
                        Antika Örtüler
                        Antika Vazo
                        Antika Tekstil
                        Dİğer Antika Ev Ürünleri
                    KOLEKSİYON
                        Antika Cep & Kol Saatleri
                        Antika Dini ve Manevi Eşyalar
                        Antika El Aletleri
                        Antika Kalemler
                        Antika Kol Düğmeleri
                        Diğer Koleksiyonluk Ürünler
                    EFEMERA
                        Antika Fotoğraflar
                        Antika Jetonlar, Biletler ve Telefon Kartları
                        Antika Kartpostallar
                        Antika Kitap & Belgeler
                        Antika Madalyalar, Rozetler
                        Antika Mektuplar
                        Antika Paralar
                        Antika Plak, CD, Kaset
                        Antika Pullar, Zarflar, Kartlar
                        Diğer Efemera
                    KLASİK ARAÇLAR
                        Klasik Otomobiller
                        Klasik Arazi Araçları
                        Klasik Motosikletler
                </div> */}

                {/* header
                carousel

                cards

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