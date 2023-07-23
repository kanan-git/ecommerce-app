import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Login.css'
// import Header from '../Header/Header.jsx'
// import Footer from '../Footer/Footer.jsx'

function Login() {
    window.scrollTo(0, 0)
    
    const [tempSign, setTempSign] = useState("login") // login register
    const [passInputSwitch, setPassInputSwitch] = useState("show") // show hide

    const textDataBase = {
        AZ: {
            textcontent: [
                "Daxil ol", // 0
                "Qeydiyyatdan keçin", // 1
                "e-poçt", // 2
                "E-poçtunuzu daxil edin", // 3
                "parol", // 4
                "Şifrənizi daxil edin", // 5
                "Şifrəmi yadda saxla", // 6
                "Şifrəni unutmusunuz", // 7
                "Daxil olun", // 8
                "ad", // 9
                "Adınızı daxil edin", // 10
                "Soyad", // 11
                "Soyadınızı daxil edin", // 12
                "Cins", // 13
                "Kişi", // 14
                "Qadın", // 15
                "e-poçt", // 16
                "E-poçtunuzu daxil edin", // 17
                "parol", // 18
                "Şifrənizi daxil edin", // 19
                "Doğum tarixi", // 20
                "Ünvan xətti", // 21
                "məs: Dilarə Əliyeva küç A1, 28 may, Bakı", // 22
                "Ödəniş", // 23
                "16 rəqəm", // 24
                "İstifadə müddəti", // 25 
                "razıyam", // 26
                "Şərtlər və qaydalar", // 27
                "Qeydiyyatdan keçin", // 28
                "E-poçt və ya parol səhvdir", // 29
                "Bu e-poçt artıq mövcuddur", // 30
            ],
            month: [
                "yanvar", 
                "fevral", 
                "mart", 
                "aprel", 
                "may", 
                "iyun", 
                "iyul", 
                "avqust", 
                "sentyabr", 
                "oktyabr", 
                "noyabr", 
                "dekabr", 
            ]
        },
        EN: {
            textcontent: [
                "Login", // 0
                "Register", // 1
                "e-Mail", // 2
                "Enter your email", // 3
                "Password", // 4
                "Enter your password", // 5
                "Remember my password", // 6
                "Forgot password", // 7
                "Sign in", // 8
                "Name", // 9
                "Enter your name", // 10
                "Lastname", // 11
                "Enter your lastname", // 12
                "Gender", // 13
                "Male", // 14
                "Female", // 15
                "e-Mail", // 16
                "Enter your email", // 17
                "Password", // 18
                "Enter your password", // 19
                "Date of birth", // 20
                "Addressline", // 21
                "ex: Dilara Aliyeva st A1, 28 May, Baku", // 22
                "Payment", // 23
                "16 digit", // 24
                "Expire date", // 25 
                "I agree with", // 26
                "Terms & Conditions", // 27
                "Register", // 28
                "Email or password is wrong", // 29
                "This email already exist", // 30
            ],
            month: [
                "January", 
                "February", 
                "March", 
                "April", 
                "May", 
                "June", 
                "July", 
                "August", 
                "September", 
                "October", 
                "November", 
                "December", 
            ]
        },
        TR: {
            textcontent: [
                "Giriş yapmak", 
                "Kayıt olmak", 
                "e-posta", 
                "E-postanızı giriniz", 
                "Şifre", 
                "Şifrenizi girin", 
                "Şifremi Hatırla", 
                "Parolanızı mı unuttunuz", 
                "Kayıt olmak", 
                "İsim", 
                "Adınızı giriniz", 
                "Soy isim", 
                "Soyadınızı giriniz", 
                "Cinsiyet", 
                "Erkek", 
                "Dişi", 
                "e-posta", 
                "E-postanızı giriniz", 
                "Şifre", 
                "Şifrenizi girin", 
                "Doğum tarihi", 
                "Adres satırı", 
                "ör: Dilara Aliyeva st A1, 28 Mayıs, Bakü", 
                "Ödeme", 
                "16 basamak", 
                "Son kullanma tarihi", 
                "katılıyorum", 
                "şartlar ve koşullar", 
                "Kayıt olmak", 
                "E-posta veya şifre yanlış", 
                "Bu e-posta zaten var", 
            ],
            month: [
                "Ocak", 
                "Şubat", 
                "Mart", 
                "Nisan", 
                "Mayıs", 
                "Haziran", 
                "Temmuz", 
                "Ağustos", 
                "Eylül", 
                "Ekim", 
                "Kasım", 
                "Aralık", 
            ]
        },
        RU: {
            textcontent: [
                "Авторизоваться", 
                "Регистр", 
                "электронная почта", 
                "Введите адрес электронной почты", 
                "Пароль", 
                "Введите ваш пароль", 
                "Запомнить мой пароль", 
                "Забыли пароль", 
                "Войти", 
                "Имя", 
                "Введите ваше имя", 
                "Фамилия", 
                "Введите свою фамилию", 
                "Пол", 
                "Мужской", 
                "Женский", 
                "электронная почта", 
                "Введите адрес электронной почты", 
                "Пароль", 
                "Введите ваш пароль", 
                "Дата рождения", 
                "Адресная строка", 
                "пример: улица Дилары Алиевой A1, 28 мая, Баку", 
                "Оплата", 
                "16 цифр", 
                "Годен до", 
                "я согласен с", 
                "Условия", 
                "регистр", 
                "Электронная почта или пароль неверны", 
                "Этот адрес электронной почты уже существует", 
            ],
            month: [
                "январь", 
                "февраль", 
                "март", 
                "апрель", 
                "май", 
                "Июнь", 
                "Июль", 
                "Август", 
                "Сентябрь", 
                "Октябрь", 
                "ноябрь", 
                "Декабрь", 
            ]
        }
    }
    const [textDataBaseSTATE, setTextDataBaseSTATE] = useState(textDataBase.AZ)
    const [daysSTATE, setDaysSTATE] = useState([])
    const [yearsSTATE, setYearsSTATE] = useState([])
    const [VISION_1, setVISION_1] = useState("show") // show hide
    const [VISION_2, setVISION_2] = useState("show") // show hide
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
            
            var daysOfMonth = []
            for(var i=1; i<=31; i++) {
                daysOfMonth.push(i)
            }
            setDaysSTATE(daysOfMonth)

            var yearsRegistered = []
            for(var y=2023; y>1900; y--) {
                yearsRegistered.push(y)
            }
            setYearsSTATE(yearsRegistered)

            // document.getElementById("pass_inp_1").type = "password"
            // document.getElementById("pass_inp_2").type = "password"
        }, []
    )

    return (
        <>
            {/* <Header /> */}

            <section className="auth">
                <div className="auth__container">
                    <div className="auth__container--selections">
                        <button className="auth__container--selections_buttons" id="selection_signin" onClick={
                            (e) => {
                                setTempSign("login")
                                e.target.style.background = `linear-gradient(to right, transparent, var(--retrogallery-custom-colorpick), var(--retrogallery-custom-colorpick), transparent)`
                                e.target.style.color = `var(--only-negative-color)`
                                document.getElementById("selection_signup").style.background = `transparent`
                                document.getElementById("selection_signup").style.color = `var(--default-text-color)`
                            }
                        }> {textDataBaseSTATE.textcontent[0]} </button> {/* full width and height */}
                        <button className="auth__container--selections_buttons" id="selection_signup" onClick={
                            (e) => {
                                setTempSign("register")
                                e.target.style.background = `linear-gradient(to right, transparent, var(--retrogallery-custom-colorpick), var(--retrogallery-custom-colorpick), transparent)`
                                e.target.style.color = `var(--only-negative-color)`
                                document.getElementById("selection_signin").style.background = `transparent`
                                document.getElementById("selection_signin").style.color = `var(--default-text-color)`
                            }
                        }> {textDataBaseSTATE.textcontent[1]} </button> {/* full width and height */}
                    </div>
                    {tempSign == "login" && (
                        <form className="auth__container--form">
                            <div className="auth__container--form_block">
                                {textDataBaseSTATE.textcontent[2]}:
                                <input type="email" className="auth__container--form_block-input" 
                                placeholder={textDataBaseSTATE.textcontent[3]} />
                                {/* <p className="something_wrong">
                                    {textDataBaseSTATE.textcontent[29]}
                                </p> */}
                            </div>
                            <div className="auth__container--form_block">
                                {textDataBaseSTATE.textcontent[4]}:
                                <input type="password" className="auth__container--form_block-input" 
                                placeholder={textDataBaseSTATE.textcontent[5]} id="pass_inp_1" /> {/* type="password" | type="text" */}
                                <img src={"/asset_library/symbols_svg/eye-"+`${VISION_1}`+"-svgrepo-com.svg"} 
                                className="auth__container--form_block-input__switch" onClick={
                                    () => {
                                        if(VISION_1 == "show") {
                                            setVISION_1("hide")
                                            document.getElementById("pass_inp_1").type = "text"
                                        } else {
                                            setVISION_1("show")
                                            document.getElementById("pass_inp_1").type = "password"
                                        }
                                    }
                                } />
                                {/* <p className="something_wrong">
                                    {textDataBaseSTATE.textcontent[29]}
                                </p> */}
                            </div>
                            <div className="auth__container--form_block">
                                <span className="auth__container--form_block-group">
                                    <input type="checkbox" className="auth__container--form_block-checkbox" />
                                    {textDataBaseSTATE.textcontent[6]}
                                </span>
                                <Link to="/recovery" className="auth__container--form_block-link">
                                    {textDataBaseSTATE.textcontent[7]} ?
                                </Link>
                            </div>
                            <div className="auth__container--form_block">
                                <button className="auth__container--form_block-submit">
                                    {textDataBaseSTATE.textcontent[8]}
                                </button>
                            </div>
                        </form>
                    )}
                    {tempSign == "register" && (
                        <form className="auth__container--form">
                            <div className="auth__container--form_block">
                                {textDataBaseSTATE.textcontent[9]}:
                                <input type="text" className="auth__container--form_block-input" 
                                placeholder={textDataBaseSTATE.textcontent[10]} />
                            </div>
                            <div className="auth__container--form_block">
                                {textDataBaseSTATE.textcontent[11]}:
                                <input type="text" className="auth__container--form_block-input" 
                                placeholder={textDataBaseSTATE.textcontent[12]} />
                            </div>
                            <div className="auth__container--form_block">
                                {textDataBaseSTATE.textcontent[13]}:
                                <select name="gender" id="gender" className="auth__container--form_block-selector">
                                    <option value="Male" className="auth__container--form_block-selector__options"> {textDataBaseSTATE.textcontent[14]} </option>
                                    <option value="Female" className="auth__container--form_block-selector__options"> {textDataBaseSTATE.textcontent[15]} </option>
                                </select>
                            </div>
                            <div className="auth__container--form_block">
                                {textDataBaseSTATE.textcontent[16]}:
                                <input type="email" className="auth__container--form_block-input" 
                                placeholder={textDataBaseSTATE.textcontent[17]} />
                                {/* <p className="something_wrong">
                                    {textDataBaseSTATE.textcontent[30]}
                                </p> */}
                            </div>
                            <div className="auth__container--form_block">
                                {textDataBaseSTATE.textcontent[18]}:
                                <input type="password" className="auth__container--form_block-input" 
                                placeholder={textDataBaseSTATE.textcontent[19]} id="pass_inp_2" /> {/* type="password" | type="text" */}
                                <img src={"/asset_library/symbols_svg/eye-"+`${VISION_2}`+"-svgrepo-com.svg"} 
                                className="auth__container--form_block-input__switch" onClick={
                                    () => {
                                        if(VISION_2 == "show") {
                                            setVISION_2("hide")
                                            document.getElementById("pass_inp_2").type = "text"
                                        } else {
                                            setVISION_2("show")
                                            document.getElementById("pass_inp_2").type = "password"
                                        }
                                    }
                                } />
                            </div>
                            <div className="auth__container--form_block">
                                {textDataBaseSTATE.textcontent[20]}:
                                <div className="auth__container--form_block-inputs">
                                    <select name="month" id="month" className="auth__container--form_block-inputs__selector">
                                        {
                                            textDataBaseSTATE.month.map(
                                                (element, index) => {
                                                    return (
                                                        <option value="January" className="auth__container--form_block-inputs__selector--options" key={index}>
                                                            {element}
                                                        </option>
                                                    )
                                                }
                                            )
                                        }
                                    </select>
                                    <select name="day" id="day" className="auth__container--form_block-inputs__selector">
                                        {
                                            daysSTATE.map(
                                                (day) => {
                                                    return (
                                                        <option value={day} className="auth__container--form_block-inputs__selector--options" key={day}>
                                                            {day}
                                                        </option>
                                                    )
                                                }
                                            )
                                        }
                                    </select>
                                    <select name="year" id="year" className="auth__container--form_block-inputs__selector">
                                        {
                                            yearsSTATE.map(
                                                (year) => {
                                                    return (
                                                        <option value={year} className="auth__container--form_block-inputs__selector--options" key={year}>
                                                            {year}
                                                        </option>
                                                    )
                                                }
                                            )
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="auth__container--form_block">
                                {textDataBaseSTATE.textcontent[21]}:
                                <input type="text" className="auth__container--form_block-input" 
                                placeholder={textDataBaseSTATE.textcontent[22]} />
                            </div>
                            <div className="auth__container--form_block">
                                {textDataBaseSTATE.textcontent[23]}:
                                <div className="auth__container--form_block-inputs">
                                    <input type="text" className="auth__container--form_block-inputs__input" 
                                    placeholder={textDataBaseSTATE.textcontent[24]+": 0123-4567-8901-2345"} />
                                    <input type="text" className="auth__container--form_block-inputs__input" 
                                    placeholder={textDataBaseSTATE.textcontent[25]+": MM/YY"} />
                                    <input type="text" className="auth__container--form_block-inputs__input" 
                                    placeholder="CVC: 123" />
                                </div>
                            </div>
                            <div className="auth__container--form_block">
                                <span className="auth__container--form_block-group">
                                    <input type="checkbox" className="auth__container--form_block-checkbox" />
                                    {textDataBaseSTATE.textcontent[26]}
                                    <Link to="/terms" className="auth__container--form_block-checkbox__link"> {textDataBaseSTATE.textcontent[27]} </Link>
                                </span>
                            </div>
                            <div className="auth__container--form_block">
                                <button className="auth__container--form_block-submit">
                                    {textDataBaseSTATE.textcontent[28]}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </section>

            {/* <Footer /> */}
        </>
    )
}

export default Login