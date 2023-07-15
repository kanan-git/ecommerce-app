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
            title: "RetroGallery | Account Settings", 
            buttons: [
                "profile", // 0
                "password & security", // 1
                "email preferences", // 2
                "payment methods", // 3
                "delete account" // 4
            ]
        }, 
        EN: {}, 
        TR: {}, 
        RU: {}
    }

    const [textDataBaseSTATE, setTextDataBaseSTATE] = useState(textDataBase.AZ)

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
                                <p className="upside__userid"> User ID: 0 </p>
                            </div>

                            <div className="container">
                                <div className="container__profile">
                                    <img src="/asset_library/user_profile_images/profile_guest.png" 
                                    alt="user-image" className="container__profile--image" />
                                    <span className="container__profile--group">
                                        <button className="container__profile--group_buttons">
                                            <img src="/asset_library/symbols_svg/edit-3-svgrepo-com.svg" 
                                            className="container__profile--group_buttons-symbol" />
                                            edit
                                        </button>
                                        <button className="container__profile--group_buttons">
                                            <img src="/asset_library/symbols_svg/xmark-circle-svgrepo-com.svg" 
                                            className="container__profile--group_buttons-symbol" />
                                            remove
                                        </button>
                                    </span>
                                </div>
                                <div className="container__username">
                                    <span className="container__username--name">
                                        name:
                                        <input type="text" className="container__username--name_input" 
                                        placeholder="nameOfTheUser" />
                                    </span>
                                    <span className="container__username--name">
                                        lastname:
                                        <input type="text" className="container__username--name_input" 
                                        placeholder="lastnameOfTheUser" />
                                    </span>
                                </div>
                                <div className="container__gender">
                                    gender:
                                    <select name="gender" id="gender" className="container__gender--input">
                                        <option value="Male" className="container__gender--input_options">
                                            Male
                                        </option>
                                        <option value="Female" className="container__gender--input_options">
                                            Female
                                        </option>
                                    </select>
                                </div>
                                <div className="container__dateofbirth">
                                    date of birth:
                                    <select name="month" id="month" className="container__dateofbirth--input">
                                        <option value="January" className="container__dateofbirth--input_options">
                                            January
                                        </option>
                                        <option value="February" className="container__dateofbirth--input_options">
                                            February
                                        </option>
                                        <option value="March" className="container__dateofbirth--input_options">
                                            March
                                        </option>
                                        <option value="April" className="container__dateofbirth--input_options">
                                            April
                                        </option>
                                        <option value="May" className="container__dateofbirth--input_options">
                                            May
                                        </option>
                                        <option value="June" className="container__dateofbirth--input_options">
                                            June
                                        </option>
                                        <option value="July" className="container__dateofbirth--input_options">
                                            July
                                        </option>
                                        <option value="August" className="container__dateofbirth--input_options">
                                            August
                                        </option>
                                        <option value="September" className="container__dateofbirth--input_options">
                                            September
                                        </option>
                                        <option value="October" className="container__dateofbirth--input_options">
                                            October
                                        </option>
                                        <option value="November" className="container__dateofbirth--input_options">
                                            November
                                        </option>
                                        <option value="December" className="container__dateofbirth--input_options">
                                            December
                                        </option>
                                    </select>
                                    <select name="day" id="day" className="container__dateofbirth--input">
                                        <option value="1" className="container__dateofbirth--input_options">
                                            1
                                        </option>
                                        <option value="2" className="container__dateofbirth--input_options">
                                            2
                                        </option>
                                        <option value="3" className="container__dateofbirth--input_options">
                                            3
                                        </option>
                                        <option value="4" className="container__dateofbirth--input_options">
                                            4
                                        </option>
                                        <option value="5" className="container__dateofbirth--input_options">
                                            5
                                        </option>
                                        <option value="6" className="container__dateofbirth--input_options">
                                            6
                                        </option>
                                        <option value="7" className="container__dateofbirth--input_options">
                                            7
                                        </option>
                                        <option value="8" className="container__dateofbirth--input_options">
                                            8
                                        </option>
                                        <option value="9" className="container__dateofbirth--input_options">
                                            9
                                        </option>

                                        <option value="10" className="container__dateofbirth--input_options">
                                            10
                                        </option>
                                        <option value="11" className="container__dateofbirth--input_options">
                                            11
                                        </option>
                                        <option value="12" className="container__dateofbirth--input_options">
                                            12
                                        </option>
                                        <option value="13" className="container__dateofbirth--input_options">
                                            13
                                        </option>
                                        <option value="13" className="container__dateofbirth--input_options">
                                            13
                                        </option>
                                        <option value="14" className="container__dateofbirth--input_options">
                                            14
                                        </option>
                                        <option value="15" className="container__dateofbirth--input_options">
                                            15
                                        </option>
                                        <option value="16" className="container__dateofbirth--input_options">
                                            16
                                        </option>
                                        <option value="17" className="container__dateofbirth--input_options">
                                            17
                                        </option>
                                        <option value="18" className="container__dateofbirth--input_options">
                                            18
                                        </option>
                                        <option value="19" className="container__dateofbirth--input_options">
                                            19
                                        </option>
                                        <option value="20" className="container__dateofbirth--input_options">
                                            20
                                        </option>
                                        <option value="21" className="container__dateofbirth--input_options">
                                            21
                                        </option>
                                        <option value="22" className="container__dateofbirth--input_options">
                                            22
                                        </option>
                                        <option value="23" className="container__dateofbirth--input_options">
                                            23
                                        </option>
                                        <option value="23" className="container__dateofbirth--input_options">
                                            23
                                        </option>
                                        <option value="24" className="container__dateofbirth--input_options">
                                            24
                                        </option>
                                        <option value="25" className="container__dateofbirth--input_options">
                                            25
                                        </option>
                                        <option value="26" className="container__dateofbirth--input_options">
                                            26
                                        </option>
                                        <option value="27" className="container__dateofbirth--input_options">
                                            27
                                        </option>
                                        <option value="28" className="container__dateofbirth--input_options">
                                            28
                                        </option>
                                        <option value="29" className="container__dateofbirth--input_options">
                                            29
                                        </option>
                                        <option value="30" className="container__dateofbirth--input_options">
                                            30
                                        </option>
                                        <option value="31" className="container__dateofbirth--input_options">
                                            31
                                        </option>
                                    </select>
                                    <select name="year" id="year" className="container__dateofbirth--input">
                                        <option value="2023" className="container__dateofbirth--input_options">
                                            2023
                                        </option>
                                        <option value="1901" className="container__dateofbirth--input_options">
                                            1901
                                        </option>
                                    </select>
                                </div>
                                <button className="container__submit">
                                    <p className="changes_saved"> Successfully saved. </p>
                                    save changes
                                </button>
                            </div>
                        </span>
                        {/* ------------------------------------------------------------------ */}
                        <span className="settings__container--group_parameters" id="1" style={{display: "none"}}>
                            <div className="upside">
                                <h3 className="upside__title"> {textDataBaseSTATE.buttons[1]} </h3>
                                <p className="upside__userid"> User ID: 0 </p>
                            </div>

                            <div className="container">
                                <div className="container__blocks">
                                    current password:
                                    <input type="password" className="container__blocks--input" 
                                    placeholder="enter your current password" />
                                    <img src="#" className="show-password" />
                                </div>
                                <div className="container__blocks">
                                    new password:
                                    <input type="password" className="container__blocks--input" 
                                    placeholder="enter new password" />
                                    <img src="#" className="show-password" />
                                </div>
                                <ul className="container__blocks">
                                    <li className="container__blocks--conditions">
                                        • uiawdiubaioubsdiob
                                    </li>
                                    <li className="container__blocks--conditions">
                                        • hinawiudbpahdopwe
                                    </li>
                                    <li className="container__blocks--conditions">
                                        • awdinawuibovnioenawye
                                    </li>
                                    <li className="container__blocks--conditions">
                                        • giydvlhkdjworhbcv
                                    </li>
                                    <li className="container__blocks--conditions">
                                        • pfirmgycpbqhyydjrtzpobkrmdg
                                    </li>
                                </ul>
                                <div className="container__blocks">
                                    repeat password:
                                    <input type="password" className="container__blocks--input" 
                                    placeholder="repeat new password" />
                                    <img src="#" className="show-password" />
                                </div>
                                <button className="container__submit">
                                    <p className="changes_saved"> Successfully saved. </p>
                                    save changes
                                </button>
                            </div>
                        </span>
                        {/* ------------------------------------------------------------------ */}
                        <span className="settings__container--group_parameters" id="2" style={{display: "none"}}>
                            <div className="upside">
                                <h3 className="upside__title"> {textDataBaseSTATE.buttons[2]} </h3>
                                <p className="upside__userid"> User ID: 0 </p>
                            </div>

                            <div className="container">
                                <div className="container__blocks">
                                    current email:
                                    <input type="email" className="container__blocks--input" 
                                    placeholder="igejjappgejcn@gmail.com" />
                                </div>
                                <div className="container__blocks">
                                    <input type="checkbox" name="agree" id="agree" 
                                    style={{accentColor: "rgb(255,0,0"}} 
                                    className="container__blocks--checkbox" />
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                                <div className="container__blocks">
                                    new email:
                                    <input type="email" className="container__blocks--input" 
                                    placeholder="new email" />
                                </div>
                                <div className="container__blocks">
                                    repeat new email:
                                    <input type="email" className="container__blocks--input" 
                                    placeholder="repeat new email" />
                                </div>
                                <button className="container__submit">
                                    <p className="changes_saved"> Successfully saved. </p>
                                    save changes
                                </button>
                            </div>
                        </span>
                        {/* ------------------------------------------------------------------ */}
                        <span className="settings__container--group_parameters" id="3" style={{display: "none"}}>
                            <div className="upside">
                                <h3 className="upside__title"> {textDataBaseSTATE.buttons[3]} </h3>
                                <p className="upside__userid"> User ID: 0 </p>
                            </div>

                            <div className="container">
                                <div className="container__blocks">
                                    <p className="container__blocks--info">
                                        CURRENT BALANCE: 0.00 ₼
                                    </p>
                                </div>
                                <div className="container__blocks">
                                    Add or change billing information:
                                    <input type="text" className="container__blocks--inputpa" 
                                    placeholder="16 digit number (0123 4567 8901 2345)" />
                                    <input type="text" className="container__blocks--inputpa" 
                                    placeholder="Expire date (MM/YY)" />
                                    <input type="text" className="container__blocks--inputpa" 
                                    placeholder="CVC (123)" />
                                </div>
                                <div className="container__blocks">
                                    Add or change addressline:
                                    <input type="text" className="container__blocks--inputpa" 
                                    placeholder="Dilara Aliyeva st, 28 May, Baku" />
                                </div>
                                <button className="container__submit">
                                    <p className="changes_saved"> Successfully saved. </p>
                                    save changes
                                </button>
                            </div>
                        </span>
                        {/* ------------------------------------------------------------------ */}
                        <span className="settings__container--group_parameters" id="4" style={{display: "none"}}>
                            <div className="upside">
                                <h3 className="upside__title"> {textDataBaseSTATE.buttons[4]} </h3>
                                <p className="upside__userid"> User ID: 0 </p>
                            </div>

                            <div className="container">
                                <div className="container__blocks">
                                    <p className="container__blocks--qu">
                                        are you sure to delete your account ?
                                    </p>
                                    <p className="container__blocks--qu">
                                        type 'DELETE' to confirm:
                                        <input type="text" className="container__blocks--qu_input" />
                                    </p>
                                </div>
                                <button className="container__submit">
                                    <p className="changes_saved"> Successfully saved. </p>
                                    save changes
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