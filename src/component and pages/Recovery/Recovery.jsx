import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Recovery.css'
// import Header from '../Header/Header.jsx'
// import Footer from '../Footer/Footer.jsx'

function Recovery() {

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

            <div className="recovery">
                <div className="recovery__container">
                    <div className="recovery__container--block">
                        Email:
                        <input type="email" className="recovery__container--block_input" 
                        placeholder="Enter your email" />
                        {/* <p className="alert_text">
                            Verification code sent to your email
                        </p> */}
                        {/* <p className="something_wrong">
                            This email not registered yet
                        </p> */}
                    </div>
                    {/* <div className="recovery__container--block">
                        Verification code:
                        <input type="text" className="recovery__container--block_input" 
                        placeholder="Enter verification code" />
                    </div> */}
                    <div className="recovery__container--block">
                        <button className="recovery__container--block__submit">
                            Get code
                            {/* Submit */}
                        </button>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    )
}

export default Recovery