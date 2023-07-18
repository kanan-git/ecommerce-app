import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Home.css'
// import Header from '../Header/Header.jsx'
// import Footer from '../Footer/Footer.jsx'

function Home() {
    window.scrollTo(0, 0)

    const categorySymbolsPathArr = [
        "/asset_library/symbols_svg/art-palette-svgrepo-com.svg", // 0
        "/asset_library/symbols_svg/photo-camera-svgrepo-com.svg", // 1
        "/asset_library/symbols_svg/sewing-machine-svgrepo-com.svg", // 2
        "/asset_library/symbols_svg/vase-svgrepo-com.svg", // 3
        "/asset_library/symbols_svg/mat-carpet-svgrepo-com.svg", // 4
        "/asset_library/symbols_svg/collection-svgrepo-com.svg", // 5
        "/asset_library/symbols_svg/rectangle-fill-svgrepo-com.svg", // 6
        "/asset_library/symbols_svg/vintage-car-transportation-car-svgrepo-com.svg", // 7
    ]

    const textDataBase = {
        AZ: {
            nav_categ: [
                "Antik Sənət", // 0
                "ANTİK FOTOQRAFİKA", // 1
                "ANTİK MAŞINLAR", // 2
                "ANTİK OYNATLAR", // 3
                "EV DEKORASYONU VƏ TEKSTİL", // 4
                "KOLLEKSİYA", // 5
                "EFEMERA", // 6
                "KLASSİK ALƏTLƏR", // 7
            ],
            nav_tags_0: [
                "Antik Xalça", // a1 | 0
                "Antik Xalça", // a2 | 1
                "Antik Rəsm, Rəsm", // a3 | 2
                "Antik Qobelen", // a4 | 3
                "Qədim namaz xalçası", // a5 | 4
                "Antik Örtük, Yastıq", // a6 | 5
            ],
            nav_tags_1: [
                "Antik Kamera / Videokamera", // b1 | 6
                "Antik film kamerası", // b2 | 7
                "SLR Kamera", // b3 | 8
                "Antik Kamera Aksesuarları", // b4 | 9
            ],
            nav_tags_2: [
                "Qədim yazı makinası", // c1 | 10
                "Antik radio", // c2 | 11
                "Antik qrammofon", // c3 | 12
                "Antik pikap", // c4 | 13
                "Antik Kalkulyator", // c5 | 14
                "Antik Qəhvə Dəmiri", // c6 | 15
                "Antik Tikiş Maşını", // c7 | 16
                "Antik Telefon", // c8 | 17
                "Digər Maşınlar", // c9 | 18
            ],
            nav_tags_3: [
                "Antik Ağızlıq və Boru", // d1 | 19
                "Antik Anahtarlık", // d2 | 20
                "Antik Eynək", // d3 | 21
                "Qədim biblo", // d4 | 22
                "Antik alışqan", // d5 | 23
                "Antik Durbin", // d6 | 24
                "Antik Nəlbəkilər və Hissələr", // d7 | 25
                "Antik Qılınc, Bıçaq", // d8 | 26
                "Antik Qutu", // d9 | 27
                "Antik Musiqi Alətləri", // d10 | 28
                "Antik Oyuncaq", // d11 | 29
                "Antik Saat", // d12 | 30
                "Antik termometr", // d13 | 31
                "Antik təsbeh", // d14 | 32
                "Qədim yemək qabları və parçaları", // d15 | 33
                "Digər Obyektlər", // d16 | 34
            ],
            nav_tags_4: [
                "Antik Güzgülər", // e1 | 35
                "Antik işıqlandırma", // e2 | 36
                "Antik Bağ və Xarici", // e3 | 37
                "Antik Çamadan, Çanta", // e4 | 38
                "Antik dekorativ əşyalar", // e5 | 39
                "Antik Mebel & Taxta Məhsullar", // e6 | 40
                "Antik Qapaqlar", // e7 | 41
                "Antik Vaza", // e8 | 42
                "Antik Tekstil", // e9 | 43
                "Digər antik məişət əşyaları", // e10 | 44
            ],
            nav_tags_5: [
                "Antik Cib və Qol Saatları", // f1 | 45
                "Antik Dini və Ruhani Əşyalar", // f2 | 46
                "Antik Əl Alətləri", // f3 | 47
                "Antik Qələmlər", // f4 | 48
                "Antik qol düymələri", // f5 | 49
                "Digər Kolleksiyalar", // f6 | 50
            ],
            nav_tags_6: [
                "Antik Şəkillər", // g1 | 51
                "Antik Tokenlər, Biletlər və Zəng Kartları", // g2 | 52
                "Antik açıqcalar", // g3 | 53
                "Antik Kitablar və Sənədlər", // g4 | 54
                "Antik medallar, nişanlar", // g5 | 55
                "Antik Məktublar", // g6 | 56
                "Antik sikkələr", // g7 | 57
                "Antik qeydlər, CD, kasetlər", // g8 | 58
                "Antik Markalar, Zərflər, Kartlar", // g9 | 59
                "Digər Efemera", // g10 | 60
            ],
            nav_tags_7: [
                "Klassik Avtomobillər", // h1 | 61
                "Klassik yolsuzluq avtomobilləri", // h2 | 62
                "Klassik Motosikllər", // h3 | 63
            ],
            headers: [
                "Yeni əlavə olunan məhsullar", // 0
                "Bloq məqalələri", // 1
            ]
        },
        EN: {
            nav_categ: [
                "ANTIQUE ART", // 0
                "ANTIQUE PHOTOGRAPHY", // 1
                "ANTIQUE MACHINES", // 2
                "ANTIQUE OBJECTS", // 3
                "HOME DECORATION AND TEXTILE", // 4
                "COLLECTION", // 5
                "EPHEMERA", // 6
                "CLASSIC VEHICLES" // 7
            ],
            nav_tags_0: [
                "Antique Carpet", // a1 | 0
                "Antique Rug", // a2 | 1
                "Antique Painting, Painting", // a3 | 2
                "Antique Tapestry", // a4 | 3
                "Antique prayer rug", // a5 | 4
                "Antique Cover, Cushion", // a6 | 5
            ],
            nav_tags_1: [
                "Antique Camera / Camcorder", // b1 | 6
                "Antique Film Camera", // b2 | 7
                "SLR Camera", // b3 | 8
                "Antique Camera Accessories", // b4 | 9
            ],
            nav_tags_2: [
                "Antique Typewriter", // c1 | 10
                "Antique Radio", // c2 | 11
                "Antique Gramophone", // c3 | 12
                "Antique Pickup", // c4 | 13
                "Antique Calculator", // c5 | 14
                "Antique Coffee Maker", // c6 | 15
                "Antique Sewing Machine", // c7 | 16
                "Antique Telephone", // c8 | 17
                "Other Machines", // c9 | 18
            ],
            nav_tags_3: [
                "Antique Mouthpiece & Pipe", // d1 | 19
                "Antique Keychain", // d2 | 20
                "Antique Glasses", // d3 | 21
                "Antique Trinket", // d4 | 22
                "Antique Lighter", // d5 | 23
                "Antique Binoculars", // d6 | 24
                "Antique Saucers & Parts", // d7 | 25
                "Antique Sword, Knife", // d8 | 26
                "Antique Box", // d9 | 27
                "Antique Musical Instruments", // d10 | 28
                "Antique Toy", // d11 | 29
                "Antique Clock", // d12 | 30
                "Antique Thermometer", // d13 | 31
                "Antique Rosary", // d14 | 32
                "Antique Dinnerware & Pieces", // d15 | 33
                "Other Objects", // d16 | 34
            ],
            nav_tags_4: [
                "Antique Mirrors", // e1 | 35
                "Antique Lighting", // e2 | 36
                "Antique Garden & Exterior", // e3 | 37
                "Antique Suitcase, Bag", // e4 | 38
                "Antique Decorative Objects", // e5 | 39
                "Antique Furniture & Wooden Products", // e6 | 40
                "Antique Covers", // e7 | 41
                "Antique Vase", // e8 | 42
                "Antique Textile", // e9 | 43
                "Other Antique Household Items", // e10 | 44
            ],
            nav_tags_5: [
                "Antique Pocket & Wristwatches", // f1 | 45
                "Antique Religious & Spiritual Items", // f2 | 46
                "Antique Hand Tools", // f3 | 47
                "Antique Pens", // f4 | 48
                "Antique Cufflinks", // f5 | 49
                "Other Collectibles", // f6 | 50
            ],
            nav_tags_6: [
                "Antique Photos", // g1 | 51
                "Antique Tokens, Tickets and Calling Cards", // g2 | 52
                "Antique Postcards", // g3 | 53
                "Antique Books & Documents", // g4 | 54
                "Antique Medals, Badges", // g5 | 55
                "Antique Letters", // g6 | 56
                "Antique Coins", // g7 | 57
                "Antique Records, CDs, Cassettes", // g8 | 58
                "Antique Stamps, Envelopes, Cards", // g9 | 59
                "Other Ephemera", // g10 | 60
            ],
            nav_tags_7: [
                "Classic Cars", // h1 | 61
                "Classic Off-Road Vehicles", // h2 | 62
                "Classic Motorcycles" // h3 | 63
            ],
            headers: [
                "Newly added products", // 0
                "Blog articles" // 1
            ]
        },
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
            nav_tags_0: [
                "Antika Halı", // a1 | 0
                "Antika Kilim", // a2 | 1
                "Antika Tablo, Resim", // a3 | 2
                "Antika Duvar Halısı", // a4 | 3
                "Antika Seccade", // a5 | 4
                "Antika Örtü, Minder", // a6 | 5
            ],
            nav_tags_1: [
                "Antika Fotoğraf Makinesi / Kamera", // b1 | 6
                "Antika Filmli Fotoğraf Makinesi", // b2 | 7
                "SLR Fotoğraf Makinesi", // b3 | 8
                "Antika Fotoğraf Makinesi Aksesuarları", // b4 | 9
            ],
            nav_tags_2: [
                "Antika Daktilo", // c1 | 10
                "Antika Radyo", // c2 | 11
                "Antika Gramofon", // c3 | 12
                "Antika Pikap", // c4 | 13
                "Antika Hesap Makinesi", // c5 | 14
                "Antika Kahve Makinesi", // c6 | 15
                "Antika Dikiş Makinesi", // c7 | 16
                "Antika Telefon", // c8 | 17
                "Diğer Makineler", // c9 | 18
            ],
            nav_tags_3: [
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
            ],
            nav_tags_4: [
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
            ],
            nav_tags_5: [
                "Antika Cep & Kol Saatleri", // f1 | 45
                "Antika Dini ve Manevi Eşyalar", // f2 | 46
                "Antika El Aletleri", // f3 | 47
                "Antika Kalemler", // f4 | 48
                "Antika Kol Düğmeleri", // f5 | 49
                "Diğer Koleksiyonluk Ürünler", // f6 | 50
            ],
            nav_tags_6: [
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
            ],
            nav_tags_7: [
                "Klasik Otomobiller", // h1 | 61
                "Klasik Arazi Araçları", // h2 | 62
                "Klasik Motosikletler" // h3 | 63
            ],
            headers: [
                "Yeni eklenen ürünler", // 0
                "Blog articles" // 1
            ]
        },
        RU: {
            nav_categ: [
                "СТАРИННОЕ ИСКУССТВО", // 0
                "СТАРИННАЯ ФОТОГРАФИЯ", // 1
                "СТАРИННЫЕ МАШИНЫ", // 2
                "АНТИЧНЫЕ ПРЕДМЕТЫ", // 3
                "УКРАШЕНИЕ ДЛЯ ДОМА И ТЕКСТИЛЬ", // 4
                "КОЛЛЕКЦИЯ", // 5
                "ЭФЕМЕРА", // 6
                "КЛАССИЧЕСКИЕ ИНСТРУМЕНТЫ" // 7
            ],
            nav_tags_0: [
                "Античный ковер", // a1 | 0
                "Античный Ковер", // a2 | 1
                "Антикварная живопись, Живопись", // a3 | 2
                "Античный гобелен", // a4 | 3
                "Старинный молитвенный коврик", // a5 | 4
                "Античный чехол, подушка", // a6 | 5
            ],
            nav_tags_1: [
                "Антикварная камера/видеокамера", // b1 | 6
                "Антикварная кинокамера", // b2 | 7
                "Зеркальная камера", // b3 | 8
                "Антикварные аксессуары для фотоаппаратов", // b4 | 9
            ],
            nav_tags_2: [
                "Старинная пишущая машинка", // c1 | 10
                "Античное радио", // c2 | 11
                "Старинный граммофон", // c3 | 12
                "Античный пикап", // c4 | 13
                "Античный калькулятор", // c5 | 14
                "Старинная кофеварка", // c6 | 15
                "Антикварная швейная машина", // c7 | 16
                "Старинный телефон", // c8 | 17
                "Другие машины", // c9 | 18
            ],
            nav_tags_3: [
                "Старинный мундштук и трубка", // d1 | 19
                "Старинный брелок", // d2 | 20
                "Антикварные очки", // d3 | 21
                "Старинная безделушка", // d4 | 22
                "Старинная зажигалка", // d5 | 23
                "Антикварные бинокли", // d6 | 24
                "Антикварные тарелки и запчасти", // d7 | 25
                "Античный меч, нож", // d8 | 26
                "Античная шкатулка", // d9 | 27
                "Старинные музыкальные инструменты", // d10 | 28
                "Антикварная игрушка", // d11 | 29
                "Старинные часы", // d12 | 30
                "Античный термометр", // d13 | 31
                "Античный Розарий", // d14 | 32
                "Антикварная посуда и предметы интерьера", // d15 | 33
                "Другие объекты", // d16 | 34
            ],
            nav_tags_4: [
                "Антикварные зеркала", // e1 | 35
                "Антикварное освещение", // e2 | 36
                "Античный сад и экстерьер", // e3 | 37
                "Антикварный чемодан, сумка", // e4 | 38
                "Антикварные декоративные предметы", // e5 | 39
                "Антикварная мебель и изделия из дерева", // e6 | 40
                "Антикварные обложки", // e7 | 41
                "Античная ваза", // e8 | 42
                "Античный Текстиль", // e9 | 43
                "Другие антикварные предметы домашнего обихода", // e10 | 44
            ],
            nav_tags_5: [
                "Старинные карманные и наручные часы", // f1 | 45
                "Антикварные религиозные и духовные предметы", // f2 | 46
                "Антикварные ручные инструменты", // f3 | 47
                "Антикварные ручки", // f4 | 48
                "Антикварные запонки", // f5 | 49
                "Другие предметы коллекционирования", // f6 | 50
            ],
            nav_tags_6: [
                "Антикварные фотографии", // g1 | 51
                "Старинные жетоны, билеты и визитные карточки", // g2 | 52
                "Старинные открытки", // g3 | 53
                "Антикварные книги и документы", // g4 | 54
                "Антикварные медали, значки", // g5 | 55
                "Старинные письма", // g6 | 56
                "Антикварные монеты", // g7 | 57
                "Старинные пластинки, компакт-диски, кассеты", // g8 | 58
                "Старинные марки, конверты, открытки", // g9 | 59
                "Другая эфемера", // g10 | 60
            ],
            nav_tags_7: [
                "Классические автомобили", // h1 | 61
                "Классические внедорожники", // h2 | 62
                "Классические мотоциклы" // h3 | 63
            ],
            headers: [
                "Недавно добавленные продукты", // 0
                "Статьи блога" // 1
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

            <section className="home">
                <div className="home__container">
                    <div className="home__container--sectors">
                        <div className="home__container--sectors_navbar">
                            {
                                textDataBaseSTATE.nav_categ.map(
                                    (element, index) => {
                                        return (
                                            <button className="home__container--sectors_navbar-button" key={index} onMouseEnter={
                                                () => {
                                                    document.getElementById("nav_drop"+index).style.display = `flex`
                                                }
                                            } onMouseLeave={
                                                () => {
                                                    document.getElementById("nav_drop"+index).style.display = `none`
                                                }
                                            }>
                                                <img src={categorySymbolsPathArr[index]} className="home__container--sectors_navbar-button__symbol" />
                                                {element}
                                                <div className="home__container--sectors_navbar-button__dropdown" id={"nav_drop"+index} style={{display: "none"}}>
                                                    {
                                                        // textDataBaseSTATE.nav_tags_+`${index}`.map(
                                                        textDataBaseSTATE[`nav_tags_${index}`].map(
                                                            (e, i) => {
                                                                return (
                                                                    <button className="home__container--sectors_navbar-button__dropdown--btn" key={i}> {e} </button>
                                                                )
                                                            }
                                                        )
                                                    }
                                                </div>
                                            </button>
                                        )
                                    }
                                )
                            }
                        </div>
                        <div className="home__container--sectors_carousel">
                            <div className="home__container--sectors_carousel-img" id="carousel_img_1">
                                <img src="#" alt="cover-img-1" className="home__container--sectors_carousel-img__content" />
                            </div>
                            <div className="home__container--sectors_carousel-img" id="carousel_img_2">
                                <img src="#" alt="cover-img-2" className="home__container--sectors_carousel-img__content" />
                            </div>
                            <div className="home__container--sectors_carousel-img" id="carousel_img_2">
                                <img src="#" alt="cover-img-3" className="home__container--sectors_carousel-img__content" />
                            </div>

                            <div className="home__container--sectors_carousel-dots">
                                <div className="home__container--sectors_carousel-dots__dot" id="c1_dot_1"></div>
                                <div className="home__container--sectors_carousel-dots__dot" id="c1_dot_1"></div>
                                <div className="home__container--sectors_carousel-dots__dot" id="c1_dot_1"></div>
                            </div>

                            <div className="home__container--sectors_carousel-buttons">
                                <button className="home__container--sectors_carousel-buttons__btn" id="c1_btn_prev"> ◄ </button>
                                <button className="home__container--sectors_carousel-buttons__btn" id="c1_btn_next"> ► </button>
                            </div>
                        </div>
                    </div>

                    <h3 className="home__container--headers"> {textDataBaseSTATE.headers[0]} </h3>
                    <div className="home__container--sectors">
                        <div className="home__container--sectors_cards">
                            <div className="home__container--sectors_cards-image">
                                <img src="#" alt="product_0" className="home__container--sectors_cards-image__content" />
                            </div>
                            <p className="home__container--sectors_cards-title"></p>
                            <strong className="home__container--sectors_cards-price"></strong>
                        </div>
                    </div>

                    <div className="home__container--sectors">
                        <div className="home__container--sectors_slides">
                            <img src="#" alt="categ_cover_1" className="home__container--sectors_slides-img" />
                            <p className="home__container--sectors_slides-title">
                                title
                            </p>
                            <button className="home__container--sectors_slides-button"> see all `categ` products </button>
                        </div>
                        
                        <div className="home__container--sectors_dots">
                            <div className="home__container--sectors_dots-dot"></div>
                        </div>
                        <div className="home__container--sectors_sliders">
                            <button className="home__container--sectors_sliders-btn"> ◄ </button>
                            <button className="home__container--sectors_sliders-btn"> ► </button>
                        </div>
                    </div>

                    <h3 className="home__container--headers"> {textDataBaseSTATE.headers[1]} </h3>
                    <div className="home__container--sectors">
                        <div className="home__container--sectors_blogs">
                            <div className="home__container--sectors_blogs-img">
                                <img src="#" alt="blog_01" className="home__container--sectors_blogs-img__content" />
                            </div>
                            <p className="home__container--sectors_blogs-title"> about what </p>
                            <button className="home__container--sectors_blogs-button"> read article </button>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* <Footer /> */}
        </>
    )
}

export default Home