import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Settings.css'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

function Settings() {

    const textDataBase = {
        AZ: {
            title: "RetroGallery | Account Settings", 
            buttons: [
                "profile", // 0
                "password & security", // 1
                "email preferences", // 2
                "notifications", // 3
                "payment methods", // 4
                "delete account" // 5
            ]
        }, 
        EN: {}, 
        TR: {}, 
        RU: {}
    }

    const [textDataBaseSTATE, setTextDataBaseSTATE] = useState(textDataBase.AZ)

    return (
        <>
            <Header />

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
                                                    var sectionIDs = [0, 1, 2, 3, 4, 5]
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
                                        <option value="December" className="container__dateofbirth--input_options">
                                            December
                                        </option>
                                    </select>
                                </div>
                                <button className="container__submit"> save changes </button>
                            </div>
                        </span>

                        <span className="settings__container--group_parameters" id="1" style={{display: "none"}}>
                            <div className="upside">
                                <h3 className="upside__title"> {textDataBaseSTATE.buttons[1]} </h3>
                                <p className="upside__userid"> User ID: 0 </p>
                            </div>

                            <div className="container">
                                .
                            </div>
                        </span>

                        <span className="settings__container--group_parameters" id="2" style={{display: "none"}}>
                            <div className="upside">
                                <h3 className="upside__title"> {textDataBaseSTATE.buttons[2]} </h3>
                                <p className="upside__userid"> User ID: 0 </p>
                            </div>

                            <div className="container">
                                .
                            </div>
                        </span>

                        <span className="settings__container--group_parameters" id="3" style={{display: "none"}}>
                            <div className="upside">
                                <h3 className="upside__title"> {textDataBaseSTATE.buttons[3]} </h3>
                                <p className="upside__userid"> User ID: 0 </p>
                            </div>

                            <div className="container">
                                .
                            </div>
                        </span>

                        <span className="settings__container--group_parameters" id="4" style={{display: "none"}}>
                            <div className="upside">
                                <h3 className="upside__title"> {textDataBaseSTATE.buttons[4]} </h3>
                                <p className="upside__userid"> User ID: 0 </p>
                            </div>

                            <div className="container">
                                .
                            </div>
                        </span>

                        <span className="settings__container--group_parameters" id="5" style={{display: "none"}}>
                            <div className="upside">
                                <h3 className="upside__title"> {textDataBaseSTATE.buttons[5]} </h3>
                                <p className="upside__userid"> User ID: 0 </p>
                            </div>

                            <div className="container">
                                .
                            </div>
                        </span>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Settings