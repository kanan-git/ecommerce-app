import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Header.css'

function Header() {
    const root = document.documentElement

    const textDataBasa = {
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
            ]
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
            ]
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
            ]
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
            ]
        }
    }

    const [tempUserStatus, setTempUserStatus] = useState("guest") // "0 or any user ID" / "guest"
    const [textDataBasaSTATE, setTextDataBaseSTATE] = useState(textDataBasa.AZ)

    // useEffect(
    //     () => {
    //         const tempValue = prompt("guest | 0")
    //         setTempUserStatus(tempValue)
    //     }, []
    // )

    // console.log(window.location.pathname)

    // if(window.innerWidth < "1920") {
    //     alert("MOBILE RESPONSIBILITY WILL BE WORKING SOON")
    // }

    // document.getElementsByClassName("header__main--userpanel")

    return (
        <div className="header">
            <div className="header__topside">
                <Link className="header__topside--links" to="/">
                    {/* <img src="/asset_library/symbols_svg/icons8-home.svg" alt="home" 
                    className="header__topside--links_icons" /> */}
                    {textDataBasaSTATE.topside[0]}
                </Link>
                <Link className="header__topside--links" to="/products">
                    {/* <img src="/asset_library/symbols_svg/store-sign-svgrepo-com.svg" alt="market" 
                    className="header__topside--links_icons" /> */}
                    {textDataBasaSTATE.topside[1]}
                </Link>
                <Link className="header__topside--links" to="/blog">
                    {/* <img src="/asset_library/symbols_svg/blog-website-svgrepo-com.svg" alt="blog" 
                    className="header__topside--links_icons" /> */}
                    {textDataBasaSTATE.topside[2]}
                </Link>
                <Link className="header__topside--links" to="/aboutus">
                    {/* <img src="/asset_library/symbols_svg/icons8-about.svg" alt="about" 
                    className="header__topside--links_icons" /> */}
                    {textDataBasaSTATE.topside[3]}
                </Link>
                <Link className="header__topside--links" to="/contact">
                    {/* <img src="/asset_library/symbols_svg/icons8-contacts.svg" alt="contact" 
                    className="header__topside--links_icons" /> */}
                    {textDataBasaSTATE.topside[4]}
                </Link>
                <Link className="header__topside--links" to="/faq">
                    {/* <img src="/asset_library/symbols_svg/icons8-speech-bubble.svg" alt="faq" 
                    className="header__topside--links_icons" /> */}
                    {textDataBasaSTATE.topside[5]}
                </Link>
                <Link className="header__topside--links" to="/help">
                    {/* <img src="/asset_library/symbols_svg/icons8-support.svg" alt="support" 
                    className="header__topside--links_icons" /> */}
                    {textDataBasaSTATE.topside[6]}
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
                    placeholder={textDataBasaSTATE.main[0]} />
                    <img src="/asset_library/symbols_svg/icons8-search.svg" alt="magnifier" 
                    className="header__main--search_button" />
                </div>

                <div className="header__main--pref">
                    <select name="language" id="language" className="header__main--pref_langbar" onChange={
                        (e) => {
                            if(e.target.value == "AZ") {
                                setTextDataBaseSTATE(textDataBasa.AZ)
                            } else if(e.target.value == "EN") {
                                setTextDataBaseSTATE(textDataBasa.EN)
                            } else if(e.target.value == "TR") {
                                setTextDataBaseSTATE(textDataBasa.TR)
                            } else if(e.target.value == "RU") {
                                setTextDataBaseSTATE(textDataBasa.RU)
                            }
                        }
                    }>
                        <option value="AZ" className="header__main--pref_langbar-options"> AZ </option>
                        <option value="EN" className="header__main--pref_langbar-options"> EN </option>
                        <option value="TR" className="header__main--pref_langbar-options"> TR </option>
                        <option value="RU" className="header__main--pref_langbar-options"> RU </option>
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
                                {textDataBasaSTATE.main[1]}
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
                                {textDataBasaSTATE.dropdown[0]}
                            </button>
                            <button className="header__main--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/register-svgrepo-com.svg" className="header__main--userpanel_dropdown-buttons__symbols" />
                                {textDataBasaSTATE.dropdown[1]}
                            </button>
                        </>)}
                        {tempUserStatus == "0" && (<>
                            <button className="header__main--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/dollar-svgrepo-com.svg" className="header__main--userpanel_dropdown-buttons__symbols" />
                                {textDataBasaSTATE.dropdown[2]}
                            </button>
                            <button className="header__main--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/cart-svgrepo-com.svg" className="header__main--userpanel_dropdown-buttons__symbols" />
                                {textDataBasaSTATE.dropdown[3]}
                            </button>
                            <button className="header__main--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/favorite-svgrepo-com.svg" className="header__main--userpanel_dropdown-buttons__symbols" />
                                {textDataBasaSTATE.dropdown[4]}
                            </button>
                            <button className="header__main--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/icons8-settings.svg" className="header__main--userpanel_dropdown-buttons__symbols" />
                                {textDataBasaSTATE.dropdown[5]}
                            </button>
                            <button className="header__main--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/out-profile-ui-user-group-people-svgrepo-com.svg" className="header__main--userpanel_dropdown-buttons__symbols" />
                                {textDataBasaSTATE.dropdown[6]}
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