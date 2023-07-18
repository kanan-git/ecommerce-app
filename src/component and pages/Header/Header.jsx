import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Header.css'
import { setCurrentLanguage } from '../../features/counter/languageSlice'

function Header() {
    const root = document.documentElement

    if(JSON.parse(localStorage.getItem("langChoice")) == null) {
        localStorage.setItem("langChoice", JSON.stringify("AZ"))
    }

    const textDataBase = {
        AZ: {
            topside: [
                "ana səhifə", // 0
                "mağaza", // 1
                "bloq", // 2
                "haqqımızda", // 3
                "əlaqə", // 4
                "faq", // 5
                "yardım və dəstək" // 6
            ],
            main: [
                "axtarış...", // 0
                "daxil ol" // 1
            ],
            dropdown: [
                "daxil ol", // 0
                "qeydiyyat", // 1
                "Sifarişlərim", // 2
                "Səbətim", // 3
                "Favorilərim", // 4
                "Parametrlər", // 5
                "Çıxış et" // 6
            ],
            mobmenu: "dili dəyiş"
        },
        EN: {
            topside: [
                "homepage", // 0
                "shop", // 1
                "blog", // 2
                "about us", // 3
                "contact", // 4
                "faq", // 5
                "help & support" // 6
            ],
            main: [
                "search...", // 0
                "sign in" // 1
            ],
            dropdown: [
                "sign in", // 0
                "register", // 1
                "my orders", // 2
                "my cart", // 3
                "my favorites", // 4
                "settings", // 5
                "log out" // 6
            ],
            mobmenu: "change language"
        },
        TR: {
            topside: [
                "ana sayfa", // 0
                "mağaza", // 1
                "blog", // 2
                "hakkımızda", // 3
                "iletişim", // 4
                "sss", // 5
                "yardım ve destek" // 6
            ],
            main: [
                "arama...", // 0
                "giriş" // 1
            ],
            dropdown: [
                "giriş", // 0
                "kayıt ol", // 1
                "siparişlerim", // 2
                "sepetim", // 3
                "favorilerim", // 4
                "ayarlar", // 5
                "çıkış yap" // 6
            ],
            mobmenu: "dili değiştir"
        },
        RU: {
            topside: [
                "домашняя", // 0
                "магазин", // 1
                "блог", // 2
                "о нас", // 3
                "контакт", // 4
                "чзв", // 5
                "помощь и поддержка" // 6
            ],
            main: [
                "поиск...", // 0
                "войти" // 1
            ],
            dropdown: [
                "войти", // 0
                "регистр", // 1
                "мои заказы", // 2
                "моя тележка", // 3
                "мои любимые", // 4
                "настройки", // 5
                "выйти" // 6
            ],
            mobmenu: "изменение языка"
        }
    }
    // var localSavedLang = JSON.parse(localStorage.getItem("langChoice"))
    const [tempUserStatus, setTempUserStatus] = useState("guest") // "0 or any user ID" / "guest"
    const [textDataBaseSTATE, setTextDataBaseSTATE] = useState(textDataBase.AZ)

    const dispatch = useDispatch()

    useEffect(
        () => {
            if(JSON.parse(localStorage.getItem("langChoice")) != null) {
                document.getElementById("language").value = JSON.parse(localStorage.getItem("langChoice"))
                document.getElementById("mob_language").value = JSON.parse(localStorage.getItem("langChoice"))
            }
        }, []
    )

    return (
        <div className="header">
            {/* mobile button */}
            <button className="header__mobilebtn" onClick={
                () => {
                    var btn_bars = document.getElementById("menubtn_bars")
                    var btn_xmark = document.getElementById("menubtn_xmark")
                    var mobile_menu = document.getElementById("mobmenu")
                    if(mobile_menu.style.display == `none`) {
                        btn_bars.style.display = `none`
                        btn_xmark.style.display = `flex`
                        mobile_menu.style.display = `flex`
                    } else {
                        btn_bars.style.display = `flex`
                        btn_xmark.style.display = `none`
                        mobile_menu.style.display = `none`
                    }
                }
            }>
                <img src="/asset_library/symbols_svg/icons8-menu.svg" className="header__mobilebtn--symbol" 
                id="menubtn_bars" />
                <img src="/asset_library/symbols_svg/icons8-close.svg" className="header__mobilebtn--symbol" 
                id="menubtn_xmark" />
            </button>

            {/* mobile only (700), tablet (1000) - display flex, default display none */}
            <div className="header__mobilestatic">
                <Link to="/" className="header__mobilestatic--link">
                    <img src="/asset_library/logo_and_icon/RetroQalereya_transparent_bg_logo.png" 
                    alt="logo" 
                    className="header__mobilestatic--link_logo" />
                </Link>
                <div className="header__mobilestatic--userpanel" onMouseEnter={
                    () => {
                        var UPDropdown = document.getElementById("user_dropdown")
                        // UPDropdown.style.display = `flex`
                        UPDropdown.style.visibility = `visible`
                        UPDropdown.style.opacity = `1.0`
                    }
                } onMouseLeave={
                    () => {
                        var UPDropdown = document.getElementById("user_dropdown")
                        // UPDropdown.style.display = `none`
                        UPDropdown.style.visibility = `hidden`
                        UPDropdown.style.opacity = `0.0`
                    }
                }>
                    {/* if authStatus == "guest" */}
                    {tempUserStatus == "guest" && (
                        <Link to="/login" className="header__mobilestatic--userpanel_profile">
                            <img src="/asset_library/user_profile_images/profile_guest.png" 
                            alt="guest" 
                            className="header__mobilestatic--userpanel_profile-img" />
                            <p className="header__mobilestatic--userpanel_profile-login">
                                {textDataBaseSTATE.main[1]}
                            </p>
                        </Link>
                    )}
                    {/* if authStatus == "userIdHere" */}
                    {tempUserStatus == "0" && (
                        <Link to="/settings" className="header__mobilestatic--userpanel_profile">
                            <img src="/asset_library/user_profile_images/profile_guest.png" 
                            alt="username-here" 
                            className="header__mobilestatic--userpanel_profile-img" />
                            <p className="header__mobilestatic--userpanel_profile-name"> Name <br /> Lastname </p>
                        </Link>
                    )}
                    <div className="header__mobilestatic--userpanel_dropdown" id="user_dropdown">
                        {tempUserStatus == "guest" && (<>
                            <button className="header__mobilestatic--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/sign-in-svgrepo-com.svg" className="header__mobilestatic--userpanel_dropdown-buttons__symbols" />
                                {textDataBaseSTATE.dropdown[0]}
                            </button>
                            <button className="header__mobilestatic--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/register-svgrepo-com.svg" className="header__mobilestatic--userpanel_dropdown-buttons__symbols" />
                                {textDataBaseSTATE.dropdown[1]}
                            </button>
                        </>)}
                        {tempUserStatus == "0" && (<>
                            <button className="header__mobilestatic--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/dollar-svgrepo-com.svg" className="header__mobilestatic--userpanel_dropdown-buttons__symbols" />
                                {textDataBaseSTATE.dropdown[2]}
                            </button>
                            <button className="header__mobilestatic--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/cart-svgrepo-com.svg" className="header__mobilestatic--userpanel_dropdown-buttons__symbols" />
                                {textDataBaseSTATE.dropdown[3]}
                            </button>
                            <button className="header__mobilestatic--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/favorite-svgrepo-com.svg" className="header__mobilestatic--userpanel_dropdown-buttons__symbols" />
                                {textDataBaseSTATE.dropdown[4]}
                            </button>
                            <button className="header__mobilestatic--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/icons8-settings.svg" className="header__mobilestatic--userpanel_dropdown-buttons__symbols" />
                                {textDataBaseSTATE.dropdown[5]}
                            </button>
                            <button className="header__mobilestatic--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/out-profile-ui-user-group-people-svgrepo-com.svg" className="header__mobilestatic--userpanel_dropdown-buttons__symbols" />
                                {textDataBaseSTATE.dropdown[6]}
                            </button>
                        </>)}
                    </div>
                </div>
                <button className="header__mobilestatic--buttons">
                    <img src="/asset_library/symbols_svg/favorite-svgrepo-com.svg" alt="fav" 
                    className="header__mobilestatic--buttons_icon" />
                    {tempUserStatus != "guest" && (
                        <p className="header__mobilestatic--buttons_counter"> 100 </p>
                    )}
                </button>
                <button className="header__mobilestatic--buttons">
                    <img src="/asset_library/symbols_svg/cart-svgrepo-com.svg" alt="cart" 
                    className="header__mobilestatic--buttons_icon" />
                    {tempUserStatus != "guest" && (
                        <p className="header__mobilestatic--buttons_counter"> 0 </p>
                    )}
                </button>
            </div>
            <div className="header__mobilemenu" id="mobmenu">
                <div className="header__mobilemenu--search">
                    <input type="search" className="header__mobilemenu--search_bar" 
                    placeholder={textDataBaseSTATE.main[0]} />
                    <button className="header__mobilemenu--search_btn">
                        <img src="/asset_library/symbols_svg/icons8-search.svg" 
                        className="header__mobilemenu--search_btn-content" />
                    </button>
                </div>
                <div className="header__mobilemenu--links">
                    <Link className="header__mobilemenu--links_items" to="/">
                        <img src="/asset_library/symbols_svg/icons8-home.svg" alt="home" 
                        className="header__mobilemenu--links_items-icons" />
                        {textDataBaseSTATE.topside[0]}
                    </Link>
                    <Link className="header__mobilemenu--links_items" to="/products">
                        <img src="/asset_library/symbols_svg/store-sign-svgrepo-com.svg" alt="market" 
                        className="header__mobilemenu--links_items-icons" />
                        {textDataBaseSTATE.topside[1]}
                    </Link>
                    <Link className="header__mobilemenu--links_items" to="/blog">
                        <img src="/asset_library/symbols_svg/blog-website-svgrepo-com.svg" alt="blog" 
                        className="header__mobilemenu--links_items-icons" />
                        {textDataBaseSTATE.topside[2]}
                    </Link>
                    <Link className="header__mobilemenu--links_items" to="/aboutus">
                        <img src="/asset_library/symbols_svg/icons8-about.svg" alt="about" 
                        className="header__mobilemenu--links_items-icons" />
                        {textDataBaseSTATE.topside[3]}
                    </Link>
                    <Link className="header__mobilemenu--links_items" to="/contact">
                        <img src="/asset_library/symbols_svg/icons8-contacts.svg" alt="contact" 
                        className="header__mobilemenu--links_items-icons" />
                        {textDataBaseSTATE.topside[4]}
                    </Link>
                    <Link className="header__mobilemenu--links_items" to="/faq">
                        <img src="/asset_library/symbols_svg/icons8-speech-bubble.svg" alt="faq" 
                        className="header__mobilemenu--links_items-icons" />
                        {textDataBaseSTATE.topside[5]}
                    </Link>
                    <Link className="header__mobilemenu--links_items" to="/support">
                        <img src="/asset_library/symbols_svg/icons8-support.svg" alt="support" 
                        className="header__mobilemenu--links_items-icons" />
                        {textDataBaseSTATE.topside[6]}
                    </Link>
                </div>
                <div className="header__mobilemenu--language">
                    <p className="header__mobilemenu--language_info">
                        {textDataBaseSTATE.mobmenu}
                    </p>
                    <select name="mob_language" id="mob_language" className="header__mobilemenu--language_langbar" onChange={
                        (e) => {
                            // e.preventDefault()
                            if(e.target.value == "AZ") {
                                setTextDataBaseSTATE(textDataBase.AZ)
                                localStorage.setItem("langChoice", JSON.stringify("AZ"))
                                // dispatch(setCurrentLanguage("AZ"))
                                // dispatch(setCurrentLanguage(textDataBase.AZ))
                                // dispatch(setCurrentLanguage(textDataBaseSTATE.AZ))
                            } else if(e.target.value == "EN") {
                                setTextDataBaseSTATE(textDataBase.EN)
                                localStorage.setItem("langChoice", JSON.stringify("EN"))
                                // dispatch(setCurrentLanguage("EN"))
                                // dispatch(setCurrentLanguage(textDataBase.EN))
                                // dispatch(setCurrentLanguage(textDataBaseSTATE.EN))
                            } else if(e.target.value == "TR") {
                                setTextDataBaseSTATE(textDataBase.TR)
                                localStorage.setItem("langChoice", JSON.stringify("TR"))
                                // dispatch(setCurrentLanguage("TR"))
                                // dispatch(setCurrentLanguage(textDataBase.TR))
                                // dispatch(setCurrentLanguage(textDataBaseSTATE.TR))
                            } else if(e.target.value == "RU") {
                                setTextDataBaseSTATE(textDataBase.RU)
                                localStorage.setItem("langChoice", JSON.stringify("RU"))
                                // dispatch(setCurrentLanguage("RU"))
                                // dispatch(setCurrentLanguage(textDataBase.RU))
                                // dispatch(setCurrentLanguage(textDataBaseSTATE.RU))
                            }
                            // window.location.reload()
                        }
                    }>
                        <option id="opt_mob_az" value="AZ" className="header__mobilemenu--language_langbar-options"> AZ </option>
                        <option id="opt_mob_en" value="EN" className="header__mobilemenu--language_langbar-options"> EN </option>
                        <option id="opt_mob_tr" value="TR" className="header__mobilemenu--language_langbar-options"> TR </option>
                        <option id="opt_mob_ru" value="RU" className="header__mobilemenu--language_langbar-options"> RU </option>
                    </select>
                </div>
            </div>

            {/* default (1920), laptop (1300) - display flex, mobile display none */}
            <div className="header__topside">
                <Link className="header__topside--links" to="/">
                    {textDataBaseSTATE.topside[0]}
                </Link>
                <Link className="header__topside--links" to="/products">
                    {textDataBaseSTATE.topside[1]}
                </Link>
                <Link className="header__topside--links" to="/blog">
                    {textDataBaseSTATE.topside[2]}
                </Link>
                <Link className="header__topside--links" to="/aboutus">
                    {textDataBaseSTATE.topside[3]}
                </Link>
                <Link className="header__topside--links" to="/contact">
                    {textDataBaseSTATE.topside[4]}
                </Link>
                <Link className="header__topside--links" to="/faq">
                    {textDataBaseSTATE.topside[5]}
                </Link>
                <Link className="header__topside--links" to="/support">
                    {textDataBaseSTATE.topside[6]}
                </Link>
            </div>
            <div className="header__main">
                <Link to="/" className="header__main--link">
                    <img src="/asset_library/logo_and_icon/RetroQalereya_transparent_bg_logo.png" 
                    alt="logo" 
                    className="header__main--link_logo" />
                </Link>
                
                <div className="header__main--search">
                    <input className="header__main--search_bar" type="search" 
                    placeholder={textDataBaseSTATE.main[0]} />
                    <img src="/asset_library/symbols_svg/icons8-search.svg" alt="magnifier" 
                    className="header__main--search_button" />
                </div>

                <div className="header__main--pref">
                    <select name="language" id="language" className="header__main--pref_langbar" onChange={
                        (e) => {
                            // e.preventDefault()
                            if(e.target.value == "AZ") {
                                setTextDataBaseSTATE(textDataBase.AZ)
                                localStorage.setItem("langChoice", JSON.stringify("AZ"))
                                // dispatch(setCurrentLanguage("AZ"))
                                // dispatch(setCurrentLanguage(textDataBase.AZ))
                                // dispatch(setCurrentLanguage(textDataBaseSTATE.AZ))
                            } else if(e.target.value == "EN") {
                                setTextDataBaseSTATE(textDataBase.EN)
                                localStorage.setItem("langChoice", JSON.stringify("EN"))
                                // dispatch(setCurrentLanguage("EN"))
                                // dispatch(setCurrentLanguage(textDataBase.EN))
                                // dispatch(setCurrentLanguage(textDataBaseSTATE.EN))
                            } else if(e.target.value == "TR") {
                                setTextDataBaseSTATE(textDataBase.TR)
                                localStorage.setItem("langChoice", JSON.stringify("TR"))
                                // dispatch(setCurrentLanguage("TR"))
                                // dispatch(setCurrentLanguage(textDataBase.TR))
                                // dispatch(setCurrentLanguage(textDataBaseSTATE.TR))
                            } else if(e.target.value == "RU") {
                                setTextDataBaseSTATE(textDataBase.RU)
                                localStorage.setItem("langChoice", JSON.stringify("RU"))
                                // dispatch(setCurrentLanguage("RU"))
                                // dispatch(setCurrentLanguage(textDataBase.RU))
                                // dispatch(setCurrentLanguage(textDataBaseSTATE.RU))
                            }
                            // window.location.reload()
                        }
                    }>
                        <option id="opt_az" value="AZ" className="header__main--pref_langbar-options"> AZ </option>
                        <option id="opt_en" value="EN" className="header__main--pref_langbar-options"> EN </option>
                        <option id="opt_tr" value="TR" className="header__main--pref_langbar-options"> TR </option>
                        <option id="opt_ru" value="RU" className="header__main--pref_langbar-options"> RU </option>
                    </select>
                </div>

                <div className="header__main--userpanel" onMouseEnter={
                            () => {
                                var UPDropdown = document.getElementById("user_dropdown")
                                // UPDropdown.style.display = `flex`
                                UPDropdown.style.visibility = `visible`
                                UPDropdown.style.opacity = `1.0`
                            }
                        } onMouseLeave={
                            () => {
                                var UPDropdown = document.getElementById("user_dropdown")
                                // UPDropdown.style.display = `none`
                                UPDropdown.style.visibility = `hidden`
                                UPDropdown.style.opacity = `0.0`
                            }
                        }>
                    {/* if authStatus == "guest" */}
                    {tempUserStatus == "guest" && (
                        <Link to="/login" className="header__main--userpanel_profile">
                            <img src="/asset_library/user_profile_images/profile_guest.png" 
                            alt="guest" 
                            className="header__main--userpanel_profile-img" />
                            <p className="header__main--userpanel_profile-login">
                                {textDataBaseSTATE.main[1]}
                            </p>
                        </Link>
                    )}
                    {/* if authStatus == "userIdHere" */}
                    {tempUserStatus == "0" && (
                        <Link to="/settings" className="header__main--userpanel_profile">
                            <img src="/asset_library/user_profile_images/profile_guest.png" 
                            alt="username-here" 
                            className="header__main--userpanel_profile-img" />
                            <p className="header__main--userpanel_profile-name"> Name <br /> Lastname </p>
                        </Link>
                    )}
                    <div className="header__main--userpanel_dropdown" id="user_dropdown">
                        {tempUserStatus == "guest" && (<>
                            <button className="header__main--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/sign-in-svgrepo-com.svg" className="header__main--userpanel_dropdown-buttons__symbols" />
                                {textDataBaseSTATE.dropdown[0]}
                            </button>
                            <button className="header__main--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/register-svgrepo-com.svg" className="header__main--userpanel_dropdown-buttons__symbols" />
                                {textDataBaseSTATE.dropdown[1]}
                            </button>
                        </>)}
                        {tempUserStatus == "0" && (<>
                            <button className="header__main--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/dollar-svgrepo-com.svg" className="header__main--userpanel_dropdown-buttons__symbols" />
                                {textDataBaseSTATE.dropdown[2]}
                            </button>
                            <button className="header__main--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/cart-svgrepo-com.svg" className="header__main--userpanel_dropdown-buttons__symbols" />
                                {textDataBaseSTATE.dropdown[3]}
                            </button>
                            <button className="header__main--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/favorite-svgrepo-com.svg" className="header__main--userpanel_dropdown-buttons__symbols" />
                                {textDataBaseSTATE.dropdown[4]}
                            </button>
                            <button className="header__main--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/icons8-settings.svg" className="header__main--userpanel_dropdown-buttons__symbols" />
                                {textDataBaseSTATE.dropdown[5]}
                            </button>
                            <button className="header__main--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/out-profile-ui-user-group-people-svgrepo-com.svg" className="header__main--userpanel_dropdown-buttons__symbols" />
                                {textDataBaseSTATE.dropdown[6]}
                            </button>
                        </>)}
                    </div>
                </div>
                <button className="header__main--buttons">
                    <img src="/asset_library/symbols_svg/favorite-svgrepo-com.svg" alt="fav" 
                    className="header__main--buttons_icon" />
                    {tempUserStatus != "guest" && (
                        <p className="header__main--buttons_counter"> 100 </p>
                    )}
                </button>
                <button className="header__main--buttons">
                    <img src="/asset_library/symbols_svg/cart-svgrepo-com.svg" alt="cart" 
                    className="header__main--buttons_icon" />
                    {tempUserStatus != "guest" && (
                        <p className="header__main--buttons_counter"> 0 </p>
                    )}
                </button>
            </div>
        </div>
    )
}

export default Header