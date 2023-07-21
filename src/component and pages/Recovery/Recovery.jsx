import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Recovery.css'
// import Header from '../Header/Header.jsx'
// import Footer from '../Footer/Footer.jsx'

function Recovery() {
    window.scrollTo(0, 0)
    
    const textDataBase = {
        AZ: {
            textcontent: [
                "E-poçt", // 0
                "E-poçtunuzu daxil edin", // 1
                "Doğrulama kodu e-poçtunuza göndərildi", // 2
                "Bu e-poçt hələ qeydiyyatdan keçməyib", // 3
                "Yoxlama kodu", // 4
                "Doğrulama kodunu daxil edin", // 5
                "Kodu əldə edin", // 6
                "təqdim", // 7
                "Kod yanlışdır" // 8
            ]
        },
        EN: {
            textcontent: [
                "Email", // 0
                "Enter your email", // 1
                "Verification code sent to your email", // 2
                "This email not registered yet", // 3
                "Verification code", // 4
                "Enter verification code", // 5
                "Get code", // 6
                "Submit", // 7
                "The code is incorrect" // 8
            ]
        },
        TR: {
            textcontent: [
                "E-posta", // 0
                "E-postanızı giriniz", // 1
                "E-postanıza gönderilen doğrulama kodu", // 2
                "Bu e-posta henüz kayıtlı değil", // 3
                "Doğrulama kodu", // 4
                "dogrulama kodunu giriniz", // 5
                "Kodu al", // 6
                "Göndermek", // 7
                "Şifre yanlış" // 8
            ]
        },
        RU: {
            textcontent: [
                "Электронная почта", // 0
                "Введите адрес электронной почты", // 1
                "Код подтверждения отправлен на вашу электронную почту", // 2
                "Этот адрес электронной почты еще не зарегистрирован", // 3
                "Проверочный код", // 4
                "введите код подтверждения", // 5
                "Получить код", // 6
                "Отправлять", // 7
                "Код неверный" // 8
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

            <section className="recovery">
                <div className="recovery__container">
                    <div className="recovery__container--block">
                        {textDataBaseSTATE.textcontent[0]}:
                        <input type="email" className="recovery__container--block_input" 
                        placeholder={textDataBaseSTATE.textcontent[1]} />
                        <p className="alert_text" style={{display: "none"}}>
                            {textDataBaseSTATE.textcontent[2]}
                        </p>
                        <p className="something_is_wrong" style={{display: "none"}}>
                            {textDataBaseSTATE.textcontent[3]}
                        </p>
                    </div>
                    <div className="recovery__container--block">
                        {textDataBaseSTATE.textcontent[4]}:
                        <input type="text" className="recovery__container--block_input" 
                        placeholder={textDataBaseSTATE.textcontent[5]} />
                        <p className="something_is_wrong" style={{display: "none"}}>
                            {textDataBaseSTATE.textcontent[8]}
                        </p>
                    </div>
                    <div className="recovery__container--block">
                        <button className="recovery__container--block_submit">
                            {textDataBaseSTATE.textcontent[6]}
                            {/* {textDataBaseSTATE.textcontent[7]} */}
                        </button>
                    </div>
                </div>
            </section>

            {/* <Footer /> */}
        </>
    )
}

export default Recovery