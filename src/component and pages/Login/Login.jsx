import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Login.css'
// import Header from '../Header/Header.jsx'
// import Footer from '../Footer/Footer.jsx'

function Login() {

    const [tempSign, setTempSign] = useState("login") // login register
    const [passInputSwitch, setPassInputSwitch] = useState("show") // show hide

    const textDataBase = {
        AZ: {},
        EN: {},
        TR: {},
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

            <div className="auth">
                <div className="auth__container">
                    <div className="auth__container--selections">
                        <button className="auth__container--selections_buttons" onClick={
                            () => {
                                setTempSign("login")
                            }
                        }> Login </button> {/* full width and height */}
                        <button className="auth__container--selections_buttons" onClick={
                            () => {
                                setTempSign("register")
                            }
                        }> Register </button> {/* full width and height */}
                    </div>
                    {tempSign == "login" && (
                        <form className="auth__container--form">
                            <div className="auth__container--form_block">
                                e-Mail:
                                <input type="email" className="auth__container--form_block-input" 
                                placeholder="Enter your email" />
                                {/* <p className="something_wrong">
                                    Email or password is wrong
                                </p> */}
                            </div>
                            <div className="auth__container--form_block">
                                Password:
                                <input type="password" className="auth__container--form_block-input" 
                                placeholder="Enter your password" /> {/* type="password" | type="text" */}
                                <img src={`"/asset_library/symbols_svg/eye-${passInputSwitch}-svgrepo-com.svg"`} 
                                className="auth__container--form_block-input__switch" onClick={
                                    () => {
                                        setPassInputSwitch("hide")
                                    }
                                } />
                                {/* <p className="something_wrong">
                                    Email or password is wrong
                                </p> */}
                            </div>
                            <div className="auth__container--form_block">
                                <span className="auth__container--form_block-group">
                                    <input type="checkbox" className="auth__container--form_block-checkbox" />
                                    Remember my password
                                </span>
                                <Link to="/" className="auth__container--form_block-link">
                                    Forgot password ?
                                </Link>
                            </div>
                            <div className="auth__container--form_block">
                                <button className="auth__container--form_block-submit">
                                    Sign in
                                </button>
                            </div>
                        </form>
                    )}
                    {tempSign == "register" && (
                        <form className="auth__container--form">
                            <div className="auth__container--form_block">
                                Name:
                                <input type="text" className="auth__container--form_block-input" 
                                placeholder="Enter your name" />
                            </div>
                            <div className="auth__container--form_block">
                                Lastname:
                                <input type="text" className="auth__container--form_block-input" 
                                placeholder="Enter your lastname" />
                            </div>
                            <div className="auth__container--form_block">
                                Gender:
                                <select name="gender" id="gender" className="auth__container--form_block-selector">
                                    <option value="Male" className="auth__container--form_block-selector__options">Male</option>
                                    <option value="Female" className="auth__container--form_block-selector__options">Female</option>
                                </select>
                            </div>
                            <div className="auth__container--form_block">
                                e-Mail:
                                <input type="email" className="auth__container--form_block-input" 
                                placeholder="Enter your email" />
                                {/* <p className="something_wrong">
                                    This email already exist
                                </p> */}
                            </div>
                            <div className="auth__container--form_block">
                                Password:
                                <input type="password" className="auth__container--form_block-input" 
                                placeholder="Enter your password" /> {/* type="password" | type="text" */}
                                <img src={`"/asset_library/symbols_svg/eye-${passInputSwitch}-svgrepo-com.svg"`} 
                                className="auth__container--form_block-input__switch" onClick={
                                    () => {
                                        setPassInputSwitch("hide")
                                    }
                                } />
                            </div>
                            <div className="auth__container--form_block">
                                Date of birth:
                                <div className="auth__container--form_block-inputs">
                                    <select name="month" id="month" className="auth__container--form_block-inputs__selector">
                                        <option value="January" className="auth__container--form_block-inputs__selector--options"> January </option>
                                    </select>
                                    <select name="day" id="day" className="auth__container--form_block-inputs__selector">
                                        <option value="1" className="auth__container--form_block-inputs__selector--options"> 1 </option>
                                    </select>
                                    <select name="year" id="year" className="auth__container--form_block-inputs__selector">
                                        <option value="2023" className="auth__container--form_block-inputs__selector--options"> 2023 </option>
                                    </select>
                                </div>
                            </div>
                            <div className="auth__container--form_block">
                                Addressline:
                                <input type="text" className="auth__container--form_block-input" 
                                placeholder="ex: Dilara Aliyeva st A1, 28 May, Baku" />
                            </div>
                            <div className="auth__container--form_block">
                                Payment:
                                <div className="auth__container--form_block-inputs">
                                    <input type="text" className="auth__container--form_block-inputs__input" 
                                    placeholder="16 digit: 0123-4567-8901-2345" />
                                    <input type="text" className="auth__container--form_block-inputs__input" 
                                    placeholder="Expire date: MM/YY" />
                                    <input type="text" className="auth__container--form_block-inputs__input" 
                                    placeholder="CVC: 123" />
                                </div>
                            </div>
                            <div className="auth__container--form_block">
                                <span className="auth__container--form_block-group">
                                    <input type="checkbox" className="auth__container--form_block-checkbox" />
                                    I agree with
                                    <Link to="/" className="auth__container--form_block-checkbox__link"> Terms & Conditions </Link>
                                    of RetroGallery
                                </span>
                            </div>
                            <div className="auth__container--form_block">
                                <button className="auth__container--form_block-submit">
                                    Register
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>

            {/* <Footer /> */}
        </>
    )
}

export default Login