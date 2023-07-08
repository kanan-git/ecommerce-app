import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Header.css'

function Header() {
    const root = document.documentElement
    const [tempUserStatus, setTempUserStatus] = useState("guest") // "0 or any user ID" / "guest"

    useEffect(
        () => {
            const tempValue = prompt("guest | 0")
            setTempUserStatus(tempValue)
        }, []
    )

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
                    Ana Səhifə
                </Link>
                <Link className="header__topside--links" to="/products">
                    {/* <img src="/asset_library/symbols_svg/store-sign-svgrepo-com.svg" alt="market" 
                    className="header__topside--links_icons" /> */}
                    Mağaza
                </Link>
                <Link className="header__topside--links" to="/blog">
                    {/* <img src="/asset_library/symbols_svg/blog-website-svgrepo-com.svg" alt="blog" 
                    className="header__topside--links_icons" /> */}
                    Bloq
                </Link>
                <Link className="header__topside--links" to="/aboutus">
                    {/* <img src="/asset_library/symbols_svg/icons8-about.svg" alt="about" 
                    className="header__topside--links_icons" /> */}
                    Haqqımızda
                </Link>
                <Link className="header__topside--links" to="/contact">
                    {/* <img src="/asset_library/symbols_svg/icons8-contacts.svg" alt="contact" 
                    className="header__topside--links_icons" /> */}
                    Əlaqə
                </Link>
                <Link className="header__topside--links" to="/faq">
                    {/* <img src="/asset_library/symbols_svg/icons8-speech-bubble.svg" alt="faq" 
                    className="header__topside--links_icons" /> */}
                    FAQ
                </Link>
                <Link className="header__topside--links" to="/help">
                    {/* <img src="/asset_library/symbols_svg/icons8-support.svg" alt="support" 
                    className="header__topside--links_icons" /> */}
                    Yardım və Dəstək
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
                    placeholder="Lorem ipsum dolor sit amet consectetur." />
                    <img src="/asset_library/symbols_svg/icons8-search.svg" alt="magnifier" 
                    className="header__main--search_button" />
                </div>

                <div className="header__main--pref">
                    <select name="language" id="language" className="header__main--pref_langbar">
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
                            <p className="header__main--userpanel_profile-login"> Daxil ol </p>
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
                                Daxil ol
                            </button>
                            <button className="header__main--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/register-svgrepo-com.svg" className="header__main--userpanel_dropdown-buttons__symbols" />
                                Qeydiyyat
                            </button>
                        </>)}
                        {tempUserStatus == "0" && (<>
                            <button className="header__main--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/dollar-svgrepo-com.svg" className="header__main--userpanel_dropdown-buttons__symbols" />
                                Sifarişlərim
                            </button>
                            <button className="header__main--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/cart-svgrepo-com.svg" className="header__main--userpanel_dropdown-buttons__symbols" />
                                Səbətim
                            </button>
                            <button className="header__main--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/favorite-svgrepo-com.svg" className="header__main--userpanel_dropdown-buttons__symbols" />
                                Favorilərim
                            </button>
                            <button className="header__main--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/icons8-settings.svg" className="header__main--userpanel_dropdown-buttons__symbols" />
                                Parametrlər
                            </button>
                            <button className="header__main--userpanel_dropdown-buttons">
                                <img src="/asset_library/symbols_svg/out-profile-ui-user-group-people-svgrepo-com.svg" className="header__main--userpanel_dropdown-buttons__symbols" />
                                Çıxış et
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