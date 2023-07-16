import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Settings.css'
// import Header from '../Header/Header.jsx'
// import Footer from '../Footer/Footer.jsx'

function Settings() {
    window.scrollTo(0, 0)

    const textDataBase = {
        AZ: {
            title: "RetroQalereya | Hesab Tənzimləmələri", 
            buttons: [
                "profil", // 0
                "parol və təhlükəsizlik", // 1
                "e-poçt seçimləri", // 2
                "ödəmə metodları", // 3
                "hesabı silin" // 4
            ],
            profile_btn: [
                "redaktə", // 0
                "sil", // 1
                "ad", // 2
                "soyad", // 3
                "cins", // 4
                "Kişi", // 5
                "Qadın", // 6
                "Doğum tarixi", // 7
                "Uğurla yadda saxlanıldı", // 8
                "yadda saxla" // 9
            ],
            password_btn: [
                "Hazırkı şifrə", // 0
                "cari parolunuzu daxil edin", // 1
                "yeni şifrə", // 2
                "yeni parol daxil edin", // 3
                "Ən azı 12 simvol uzunluğunda, lakin 14 və ya daha çox simvol daha yaxşıdır.", // 4
                "Böyük hərflərin, kiçik hərflərin, rəqəmlərin və simvolların birləşməsi.", // 5
                "Lüğətdə və ya bir şəxsin, xarakterin, məhsulun və ya təşkilatın adında tapıla bilən söz deyil.", // 6
                "Əvvəlki parollarınızdan əhəmiyyətli dərəcədə fərqlidir.", // 7
                "Yadda saxlamaq sizin üçün asandır, amma başqaları üçün təxmin etmək çətindir. '6MonkeysRLooking^' kimi yaddaqalan ifadədən istifadə etməyi düşünün.", // 8
                "Parolu təkrarlayın", // 9
                "yeni parolu təkrarlayın" // 10
            ],
            email_btn: [
                "cari e-poçt", // 0
                "yeni Email", // 1
                "yeni Email", // 2
                "yeni e-poçtu təkrarlayın", // 3
                "yeni e-poçtu təkrarlayın", // 4
                "E-poçtumu dəyişdirmək istədiyimə əminəm" // 5
            ],
            payment_btn: [
                "CARİ BALANS", // 0
                "Ödəniş məlumatlarını əlavə edin və ya dəyişdirin", // 1
                "16 rəqəmli nömrə", // 2
                "Bitmə tarixi", // 3
                "Ünvan əlavə edin və ya dəyişdirin", // 4
                "Dilarə Əliyeva küç., 28 May, Bakı" // 5
            ],
            delete_btn: [
                "hesabınızı siləcəyinizə əminsiniz?" ,// 0
                "təsdiq etmək üçün 'DELETE' yazın" // 1
            ],
            topside: "İstifadəçi kodu",
            month: [
                "Yanvar", 
                "Fevral", 
                "Mart", 
                "Aprel", 
                "May", 
                "İyun", 
                "İyul", 
                "Avqust", 
                "Sentyabr", 
                "Oktyabr", 
                "Noyabr", 
                "Dekabr"
            ]
        }, 
        EN: {
            title: "RetroGallery | Account Settings", 
            buttons: [
                "profile", // 0
                "password & security", // 1
                "email preferences", // 2
                "payment methods", // 3
                "delete account" // 4
            ],
            profile_btn: [
                "edit", // 0
                "remove", // 1
                "name", // 2
                "lastname", // 3
                "gender", // 4
                "Male", // 5
                "Female", // 6
                "date of birth", // 7
                "Successfully saved", // 8
                "save changes" // 9
            ],
            password_btn: [
                "current password", // 0
                "enter your current password", // 1
                "new password", // 2
                "enter new password", // 3
                "At least 12 characters long but 14 or more is better.", // 4
                "A combination of uppercase letters, lowercase letters, numbers, and symbols.", // 5
                "Not a word that can be found in a dictionary or the name of a person, character, product, or organization.", // 6
                "Significantly different from your previous passwords.", // 7
                "Easy for you to remember but difficult for others to guess. Consider using a memorable phrase like '6MonkeysRLooking^'.", // 8
                "repeat password", // 9
                "repeat new password" // 10
            ],
            email_btn: [
                "current email", // 0
                "new email", // 1
                "new email", // 2
                "repeat new email", // 3
                "repeat new email", // 4
                "I'm sure to change my email" // 5
            ],
            payment_btn: [
                "CURRENT BALANCE", // 0
                "Add or change billing information", // 1
                "16 digit number", // 2
                "Expire date", // 3
                "Add or change addressline", // 4
                "Dilara Aliyeva st, 28 May, Baku" // 5
            ],
            delete_btn: [
                "are you sure to delete your account ?" ,// 0
                "type 'DELETE' to confirm" // 1
            ],
            topside: "User ID",
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
                "December"
            ]
        }, 
        TR: {
            title: "RetroGaleri | Hesap ayarları", 
            buttons: [
                "profil", // 0
                "şifre ve güvenlik", // 1
                "E-posta Tercihleri", // 2
                "Ödeme yöntemleri", // 3
                "Hesabı sil" // 4
            ],
            profile_btn: [
                "düzenle", // 0
                "kaldır", // 1
                "isim", // 2
                "soy isim", // 3
                "cinsiyet", // 4
                "Erkek", // 5
                "Kadın", // 6
                "doğum tarihi", // 7
                "Başarıyla kaydedildi", // 8
                "değişiklikleri Kaydet" // 9
            ],
            password_btn: [
                "Mevcut Şifre", // 0
                "mevcut şifrenizi girin", // 1
                "Yeni Şifre", // 2
                "yeni şifreyi girin", // 3
                "En az 12 karakter uzunluğunda ancak 14 veya daha fazla olması daha iyidir.", // 4
                "Büyük harfler, küçük harfler, sayılar ve simgelerden oluşan bir kombinasyon.", // 5
                "Bir sözlükte bulunabilecek bir kelime veya bir kişinin, karakterin, ürünün veya kuruluşun adı değil.", // 6
                "Önceki şifrelerinizden önemli ölçüde farklı.", // 7
                "Sizin için hatırlaması kolay ama başkaları için tahmin etmesi zor. '6MonkeysRLooking^' gibi akılda kalıcı bir ifade kullanmayı düşünün.", // 8
                "Şifreyi tekrar girin", // 9
                "Yeni şifreyi tekrar girin" // 10
            ],
            email_btn: [
                "mevcut e-posta", // 0
                "Yeni E-posta", // 1
                "Yeni E-posta", // 2
                "yeni e-postayı tekrarla", // 3
                "yeni e-postayı tekrarla", // 4
                "E-postamı değiştireceğime eminim" // 5
            ],
            payment_btn: [
                "CARİ BAKİYE", // 0
                "Fatura bilgilerini ekleyin veya değiştirin", // 1
                "16 haneli sayı", // 2
                "Son kullanma tarihi", // 3
                "Adres satırı ekle veya değiştir", // 4
                "Dilara Aliyeva sokağı, 28 Mayıs, Bakü" // 5
            ],
            delete_btn: [
                "hesabınızı sileceğinizden emin misiniz?" ,// 0
                "onaylamak için 'DELETE' yazın" // 1
            ],
            topside: "Kullanıcı kimliği",
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
                "Aralık"
            ]
        }, 
        RU: {
            title: "РетроГалерея | Настройки учетной записи", 
            buttons: [
                "профиль", // 0
                "пароль и безопасность", // 1
                "Настройки электронной почты", // 2
                "Способы оплаты", // 3
                "удалить аккаунт" // 4
            ],
            profile_btn: [
                "редактировать", // 0
                "удалять", // 1
                "имя", // 2
                "фамилия", // 3
                "пол", // 4
                "Мужской", // 5
                "Женский", // 6
                "Дата рождения", // 7
                "Успешно сохранено", // 8
                "Сохранить изменения" // 9
            ],
            password_btn: [
                "Текущий пароль", // 0
                "Введите ваш текущий пароль", // 1
                "Новый пароль", // 2
                "Введите новый пароль", // 3
                "Минимум 12 символов, но лучше 14 или больше.", // 4
                "Комбинация прописных и строчных букв, цифр и символов.", // 5
                "Ни слова, которое можно найти в словаре, ни имени человека, персонажа, продукта или организации.", // 6
                "Значительно отличается от ваших предыдущих паролей.", // 7
                "Вам легко запомнить, но трудно догадаться другим. Попробуйте использовать запоминающуюся фразу, например «6MonkeysRLooking^».", // 8
                "Повторите пароль", // 9
                "повторите новый пароль" // 10
            ],
            email_btn: [
                "текущая электронная почта", // 0
                "Новый E-mail", // 1
                "Новый E-mail", // 2
                "повторить новое письмо", // 3
                "повторить новое письмо", // 4
                "Я обязательно изменю свой адрес электронной почты" // 5
            ],
            payment_btn: [
                "ТЕКУЩИЙ БАЛАНС", // 0
                "Добавить или изменить платежную информацию", // 1
                "16-значный номер", // 2
                "Годен до", // 3
                "Добавить или изменить адресную строку", // 4
                "улица Дилары Алиевой, 28 мая, Баку" // 5
            ],
            delete_btn: [
                "Вы уверены, что хотите удалить свой аккаунт?" ,// 0
                "введите «DELETE» для подтверждения" // 1
            ],
            topside: "Пользователь ID",
            month: [
                "Январь", 
                "Февраль", 
                "Март", 
                "Апрель", 
                "Май", 
                "Июнь", 
                "Июль", 
                "Август", 
                "Сентябрь", 
                "Октябрь", 
                "Ноябрь", 
                "Декабрь"
            ]
        }
    }
    const [textDataBaseSTATE, setTextDataBaseSTATE] = useState(textDataBase.AZ)
    const [daysSTATE, setDaysSTATE] = useState([])
    const [yearsSTATE, setYearsSTATE] = useState([])
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
        }, []
    )

    return (
        <>
            {/* <Header /> */}

            <div className="settings">
                <div className="settings__container">
                    <h3 className="settings__container--title">
                        {textDataBaseSTATE.title}
                    </h3>
                    <div className="settings__container--group">
                        <span className="settings__container--group_buttons">
                            {
                                textDataBaseSTATE.buttons.map(
                                    (element, index) => {
                                        return (
                                            <button className="settings__container--group_buttons-btn" id={"btn_"+index} 
                                            key={index} onClick={
                                                (e) => {
                                                    var sectionIDs = [0, 1, 2, 3, 4]
                                                    var currentSection = document.getElementById(index)
                                                    var restOf = []

                                                    for(var i=0; i<sectionIDs.length; i++) {
                                                        if(sectionIDs[i] != index) {
                                                            restOf.push(sectionIDs[i])
                                                        }
                                                    }

                                                    restOf.map(
                                                        (indexFromArray) => {
                                                            document.getElementById(indexFromArray).style.display = `none`
                                                            document.getElementById(`btn_${indexFromArray}`).style.backgroundColor = `var(--default-bg-color)`
                                                            document.getElementById(`btn_${indexFromArray}`).style.color = `var(--default-text-color)`
                                                        }
                                                    )
                                                    currentSection.style.display = `flex`
                                                    e.target.style.backgroundColor = `var(--retrogallery-custom-colorpick)`
                                                    e.target.style.color = `var(--only-negative-color)`
                                                }
                                            }>
                                                {element}
                                            </button>
                                        )
                                    }
                                )
                            }
                        </span>
                        {/* ------------------------------------------------------------------ */}
                        <span className="settings__container--group_parameters" id="0" style={{display: "flex"}}>
                            <div className="upside">
                                <h3 className="upside__title"> {textDataBaseSTATE.buttons[0]} </h3>
                                <p className="upside__userid"> {textDataBaseSTATE.topside}: 0 </p>
                            </div>

                            <div className="container">
                                <div className="container__profile">
                                    <img src="/asset_library/user_profile_images/profile_guest.png" 
                                    alt="user-image" className="container__profile--image" />
                                    <span className="container__profile--group">
                                        <button className="container__profile--group_buttons">
                                            <img src="/asset_library/symbols_svg/edit-3-svgrepo-com.svg" 
                                            className="container__profile--group_buttons-symbol" />
                                            {textDataBaseSTATE.profile_btn[0]}
                                        </button>
                                        <button className="container__profile--group_buttons">
                                            <img src="/asset_library/symbols_svg/xmark-circle-svgrepo-com.svg" 
                                            className="container__profile--group_buttons-symbol" />
                                            {textDataBaseSTATE.profile_btn[1]}
                                        </button>
                                    </span>
                                </div>
                                <div className="container__username">
                                    <span className="container__username--name">
                                        {textDataBaseSTATE.profile_btn[2]}:
                                        <input type="text" className="container__username--name_input" 
                                        placeholder="nameOfTheUser" />
                                    </span>
                                    <span className="container__username--name">
                                        {textDataBaseSTATE.profile_btn[3]}:
                                        <input type="text" className="container__username--name_input" 
                                        placeholder="lastnameOfTheUser" />
                                    </span>
                                </div>
                                <div className="container__gender">
                                    {textDataBaseSTATE.profile_btn[4]}:
                                    <select name="gender" id="gender" className="container__gender--input">
                                        <option value="Male" className="container__gender--input_options">
                                            {textDataBaseSTATE.profile_btn[5]}
                                        </option>
                                        <option value="Female" className="container__gender--input_options">
                                            {textDataBaseSTATE.profile_btn[6]}
                                        </option>
                                    </select>
                                </div>
                                <div className="container__dateofbirth">
                                    {textDataBaseSTATE.profile_btn[7]}:
                                    <select name="month" id="month" className="container__dateofbirth--input">
                                        {
                                            textDataBaseSTATE.month.map(
                                                (element, index) => {
                                                    return (
                                                        <option value="January" className="container__dateofbirth--input_options" key={index}>
                                                            {element}
                                                        </option>
                                                    )
                                                }
                                            )
                                        }
                                    </select>
                                    <select name="day" id="day" className="container__dateofbirth--input">
                                        {
                                            daysSTATE.map(
                                                (day) => {
                                                    return (
                                                        <option value={day} className="container__dateofbirth--input_options" key={day}>
                                                            {day}
                                                        </option>
                                                    )
                                                }
                                            )
                                        }
                                    </select>
                                    <select name="year" id="year" className="container__dateofbirth--input">
                                        {
                                            yearsSTATE.map(
                                                (year) => {
                                                    return (
                                                        <option value={year} className="container__dateofbirth--input_options" key={year}>
                                                            {year}
                                                        </option>
                                                    )
                                                }
                                            )
                                        }
                                    </select>
                                </div>
                                <button className="container__submit">
                                    <p className="changes_saved"> {textDataBaseSTATE.profile_btn[8]}. </p>
                                    {textDataBaseSTATE.profile_btn[9]}
                                </button>
                            </div>
                        </span>
                        {/* ------------------------------------------------------------------ */}
                        <span className="settings__container--group_parameters" id="1" style={{display: "none"}}>
                            <div className="upside">
                                <h3 className="upside__title"> {textDataBaseSTATE.buttons[1]} </h3>
                                <p className="upside__userid"> {textDataBaseSTATE.topside}: 0 </p>
                            </div>

                            <div className="container">
                                <div className="container__blocks">
                                    {textDataBaseSTATE.password_btn[0]}:
                                    <input type="password" className="container__blocks--input" 
                                    placeholder={textDataBaseSTATE.password_btn[1]} />
                                    <img src="#" className="show-password" />
                                </div>
                                <div className="container__blocks">
                                    {textDataBaseSTATE.password_btn[2]}:
                                    <input type="password" className="container__blocks--input" 
                                    placeholder={textDataBaseSTATE.password_btn[3]} />
                                    <img src="#" className="show-password" />
                                </div>
                                <ul className="container__blocks">
                                    <li className="container__blocks--conditions">
                                        • {textDataBaseSTATE.password_btn[4]}
                                    </li>
                                    <li className="container__blocks--conditions">
                                        • {textDataBaseSTATE.password_btn[5]}
                                    </li>
                                    <li className="container__blocks--conditions">
                                        • {textDataBaseSTATE.password_btn[6]}
                                    </li>
                                    <li className="container__blocks--conditions">
                                        • {textDataBaseSTATE.password_btn[7]}
                                    </li>
                                    <li className="container__blocks--conditions">
                                        • {textDataBaseSTATE.password_btn[8]}
                                    </li>
                                </ul>
                                <div className="container__blocks">
                                    {textDataBaseSTATE.password_btn[9]}:
                                    <input type="password" className="container__blocks--input" 
                                    placeholder={textDataBaseSTATE.password_btn[10]} />
                                    <img src="#" className="show-password" />
                                </div>
                                <button className="container__submit">
                                    <p className="changes_saved"> {textDataBaseSTATE.profile_btn[8]}. </p>
                                    {textDataBaseSTATE.profile_btn[9]}
                                </button>
                            </div>
                        </span>
                        {/* ------------------------------------------------------------------ */}
                        <span className="settings__container--group_parameters" id="2" style={{display: "none"}}>
                            <div className="upside">
                                <h3 className="upside__title"> {textDataBaseSTATE.buttons[2]} </h3>
                                <p className="upside__userid"> {textDataBaseSTATE.topside}: 0 </p>
                            </div>

                            <div className="container">
                                <div className="container__blocks">
                                    {textDataBaseSTATE.email_btn[0]}:
                                    <input type="email" className="container__blocks--input" 
                                    placeholder="qwertyuiop@gmail.com" />
                                </div>
                                <div className="container__blocks">
                                    <input type="checkbox" name="agree" id="agree" 
                                    style={{accentColor: "rgb(255,0,0"}} 
                                    className="container__blocks--checkbox" />
                                    {textDataBaseSTATE.email_btn[5]}.
                                </div>
                                <div className="container__blocks">
                                    {textDataBaseSTATE.email_btn[1]}:
                                    <input type="email" className="container__blocks--input" 
                                    placeholder={textDataBaseSTATE.email_btn[2]} />
                                </div>
                                <div className="container__blocks">
                                    {textDataBaseSTATE.email_btn[3]}:
                                    <input type="email" className="container__blocks--input" 
                                    placeholder={textDataBaseSTATE.email_btn[4]} />
                                </div>
                                <button className="container__submit">
                                    <p className="changes_saved"> {textDataBaseSTATE.profile_btn[8]}. </p>
                                    {textDataBaseSTATE.profile_btn[9]}
                                </button>
                            </div>
                        </span>
                        {/* ------------------------------------------------------------------ */}
                        <span className="settings__container--group_parameters" id="3" style={{display: "none"}}>
                            <div className="upside">
                                <h3 className="upside__title"> {textDataBaseSTATE.buttons[3]} </h3>
                                <p className="upside__userid"> {textDataBaseSTATE.topside}: 0 </p>
                            </div>

                            <div className="container">
                                <div className="container__blocks">
                                    <p className="container__blocks--info">
                                        {textDataBaseSTATE.payment_btn[0]}: 0.00 ₼
                                    </p>
                                </div>
                                <div className="container__blocks">
                                    {textDataBaseSTATE.payment_btn[1]}:
                                    <input type="text" className="container__blocks--inputpa" 
                                    placeholder={textDataBaseSTATE.payment_btn[2]+" (0123 4567 8901 2345)"} />
                                    <input type="text" className="container__blocks--inputpa" 
                                    placeholder={textDataBaseSTATE.payment_btn[3]+" (MM/YY)"} />
                                    <input type="text" className="container__blocks--inputpa" 
                                    placeholder="CVC (123)" />
                                </div>
                                <div className="container__blocks">
                                    {textDataBaseSTATE.payment_btn[4]}:
                                    <input type="text" className="container__blocks--inputpa" 
                                    placeholder={textDataBaseSTATE.payment_btn[5]} />
                                </div>
                                <button className="container__submit">
                                    <p className="changes_saved"> {textDataBaseSTATE.profile_btn[8]}. </p>
                                    {textDataBaseSTATE.profile_btn[9]}
                                </button>
                            </div>
                        </span>
                        {/* ------------------------------------------------------------------ */}
                        <span className="settings__container--group_parameters" id="4" style={{display: "none"}}>
                            <div className="upside">
                                <h3 className="upside__title"> {textDataBaseSTATE.buttons[4]} </h3>
                                <p className="upside__userid"> {textDataBaseSTATE.topside}: 0 </p>
                            </div>

                            <div className="container">
                                <div className="container__blocks">
                                    <p className="container__blocks--qu">
                                        {textDataBaseSTATE.delete_btn[0]}
                                    </p>
                                    <p className="container__blocks--qu">
                                        {textDataBaseSTATE.delete_btn[1]}:
                                        <input type="text" className="container__blocks--qu_input" />
                                    </p>
                                </div>
                                <button className="container__submit">
                                    <p className="changes_saved"> {textDataBaseSTATE.profile_btn[8]}. </p>
                                    {textDataBaseSTATE.profile_btn[9]}
                                </button>
                            </div>
                        </span>
                        {/* ------------------------------------------------------------------ */}
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    )
}

export default Settings