import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__main">
                <ul className="footer__main--columns">
                    <img src="/asset_library/logo_and_icon/RetroQalereya_transparent_bg_logo.png" 
                    alt="RetroQalereya" className="footer__main--columns_logo" />
                    <p className="footer__main--columns_description"> Lorem ipsum dolor sit amet. </p>
                    <li className="footer__main--columns_info"> content </li>
                    <li className="footer__main--columns_info"> content </li>
                    <li className="footer__main--columns_info"> content </li>
                </ul>
                <ul className="footer__main--columns">
                    <h6 className="footer__main--columns_header"> Mağaza </h6>
                    <li className="footer__main--columns_list"> content </li>
                    <li className="footer__main--columns_list"> content </li>
                </ul>
                <ul className="footer__main--columns">
                    <h6 className="footer__main--columns_header"> Profil </h6>
                    <li className="footer__main--columns_list"> content </li>
                    <li className="footer__main--columns_list"> content </li>
                </ul>
                <ul className="footer__main--columns">
                    <h6 className="footer__main--columns_header"> Dəstək </h6>
                    <li className="footer__main--columns_list"> Gizlilik Siyasəti </li>
                    <li className="footer__main--columns_list"> Qaydalar və Şərtlər </li>
                    <li className="footer__main--columns_list"> FAQ </li>
                    <li className="footer__main--columns_list"> Əlaqə </li>
                    <li className="footer__main--columns_list"> Haqqımızda </li>
                </ul>
                <ul className="footer__main--columns">
                    <h6 className="footer__main--columns_header"> Sosial Media </h6>
                    <li className="footer__main--columns_list"> Instagram </li>
                    <li className="footer__main--columns_list"> YouTube </li>
                    <li className="footer__main--columns_list"> Facebook </li>
                    <li className="footer__main--columns_list"> Twitter </li>
                    {/* <Link to="https://instagram.com" className="footer__main--columns_info">
                        <img src="#" alt="instagram" className="footer__main--columns_info-content" />
                    </Link> */}

                </ul>
            </div>
            <div className="footer__bottom">
                <p className="footer__bottom--rights">
                    © Müəllif hüququ 2023 CODERS.EDU.AZ | Bütün Hüquqları Qorunur.
                </p>
                {/* <span className="footer__bottom--icons">
                    <img src="#" alt="paypal" className="footer__bottom--icons_content" />
                    <img src="#" alt="visa" className="footer__bottom--icons_content" />
                    <img src="#" alt="mastercard" className="footer__bottom--icons_content" />
                    <img src="#" alt="american-express" className="footer__bottom--icons_content" />
                </span> */}
            </div>
        </div>
    )
}

export default Footer