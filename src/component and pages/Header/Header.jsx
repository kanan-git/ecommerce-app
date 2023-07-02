import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Header.css'

function Header() {
    // const root = document.documentElement
    // root.style.setProperty('--default-text-color', 'rgb(255,255,255)')
    return (
        <div className="header">
            <div className="header__topside">
                <Link to="/"> Ana Səhifə </Link>
                <Link to="/products"> Mağaza </Link>
                <Link to="/blog"> Bloq </Link>
                <Link to="/aboutus"> Haqqımızda </Link>
                <Link to="/contact"> Əlaqə </Link>
                <Link to="/faq"> FAQ </Link>
                <Link to="/help"> Yardım və Dəstək </Link>
            </div>
            <div className="header__main">
                <img src={require("../../asset_library/logo_and_icon/RetroQalereya_transparent_bg_logo.png")} 
                alt="logo" 
                className="header__main--logoplace_logo" />
                
                <div className="header__main--search">
                    <input className="header__main--search_bar" type="search" />
                    <button className="header__main--search_button"> ○ </button>
                </div>

                <div className="header__main--userpanel">
                    <div className="header__main--userpanel_guest">
                        <Link className="header__main--userpanel_guest" to="/login"> Daxil ol </Link>
                        <button className="header__main--userpanel_guest"> ■ Səbət </button>
                        <button className="header__main--userpanel_guest"> ♥ Favorilər </button>
                    </div>
                    <div className="header__main--userpanel_profile">
                        <div className="header__main--userpanel_guest">
                            <img src="#" alt="user-name-here" />
                            <p> Name Lastname </p>
                        </div>
                        <button className="header__main--userpanel_guest"> ■ Səbət </button>
                        <button className="header__main--userpanel_guest"> ♥ Favorilər </button>
                    </div>
                </div>

                <div className="header__main--userpanel_dropdown">
                    <button className="header__main--userpanel_dropdown-buttons"> ♪ Daxil ol </button>
                    <button className="header__main--signin_dropdown-buttons"> ↓ Qeydiyyat </button>

                    <button className="header__main--signin_dropdown-buttons"> ▼ Sifarişlərim </button>
                    <button className="header__main--signin_dropdown-buttons"> ■ Səbətim </button>
                    <button className="header__main--signin_dropdown-buttons"> ♥ Favorilərim </button>
                    <button className="header__main--signin_dropdown-buttons"> ☼ Parametrlər </button>
                    <button className="header__main--signin_dropdown-buttons"> → Çıxış et </button>
                </div>

                <div className="header__main--pref">
                    <button className="header__main--prev_lightmode"> ☼ </button>
                    <select name="language" id="language" className="header__main--prev_langbar">
                        <option value="AZ" className="header__main--prev_langbar-options"> AZ </option>
                        <option value="EN" className="header__main--prev_langbar-options"> EN </option>
                        <option value="TR" className="header__main--prev_langbar-options"> TR </option>
                        <option value="RU" className="header__main--prev_langbar-options"> RU </option>
                    </select>
                </div>
            </div>
            <div className="header__navbar">
                ...
            </div>
        </div>
    )
}

export default Header