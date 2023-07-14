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
                            "profile", // 0
                            <br />
                            "profile", // 0
                            <br />
                            "profile", // 0
                            <br />
                            "profile", // 0
                            <br />
                            "profile", // 0
                            <br />
                            "profile", // 0
                        </span>

                        <span className="settings__container--group_parameters" id="1" style={{display: "none"}}>
                            "password & security", // 1
                            <br />
                            "password & security", // 1
                            <br />
                            "password & security", // 1
                            <br />
                            "password & security", // 1
                            <br />
                            "password & security", // 1
                            <br />
                            "password & security", // 1
                        </span>

                        <span className="settings__container--group_parameters" id="2" style={{display: "none"}}>
                            "email preferences", // 2
                            <br />
                            "email preferences", // 2
                            <br />
                            "email preferences", // 2
                            <br />
                            "email preferences", // 2
                            <br />
                            "email preferences", // 2
                            <br />
                            "email preferences", // 2
                        </span>

                        <span className="settings__container--group_parameters" id="3" style={{display: "none"}}>
                            "notifications", // 3
                            <br />
                            "notifications", // 3
                            <br />
                            "notifications", // 3
                            <br />
                            "notifications", // 3
                            <br />
                            "notifications", // 3
                            <br />
                            "notifications", // 3
                        </span>

                        <span className="settings__container--group_parameters" id="4" style={{display: "none"}}>
                            "payment methods", // 4
                            <br />
                            "payment methods", // 4
                            <br />
                            "payment methods", // 4
                            <br />
                            "payment methods", // 4
                            <br />
                            "payment methods", // 4
                            <br />
                            "payment methods", // 4
                        </span>

                        <span className="settings__container--group_parameters" id="5" style={{display: "none"}}>
                            "delete account" // 5
                            <br />
                            "delete account" // 5
                            <br />
                            "delete account" // 5
                            <br />
                            "delete account" // 5
                            <br />
                            "delete account" // 5
                            <br />
                            "delete account" // 5
                        </span>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Settings