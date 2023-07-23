import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './BlogArticle.css'
// import Header from '../Header/Header.jsx'
// import Footer from '../Footer/Footer.jsx'

function BlogArticle() {
    window.scrollTo(0, 0)
    
    const textDataBase = {
        AZ: {},
        EN: {},
        TR: {},
        RU: {}
    }
    const [textDataBaseSTATE, setTextDataBaseSTATE] = useState(textDataBase.AZ)
    const [fakeArticleIDs, setFakeArticleIDs] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    const [currentArticle, setCurrentArticle] = useState(0)
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

            function handleArticleButtons() {
                var restOfArticleBtnsArr = []
                for(var i=0; i<fakeArticleIDs.length; i++) {
                    restOfArticleBtnsArr.push(i)
                    document.getElementById("articleBtn_" + i).style.backgroundColor = `var(--default-bg-color)`
                    document.getElementById("articleBtn_" + i).style.transform = `translateX(0px)`
                    document.getElementById("articleBtn_" + i).style.color = `var(--default-text-color)`
                }

                var currentButton = document.getElementById("articleBtn_" + currentArticle)
                currentButton.style.backgroundColor = `var(--dark-color)`
                currentButton.style.transform = `translateX(10px)`
                currentButton.style.color = `var(--only-negative-color)`
            }

            handleArticleButtons()
        }, []
    )
    
    return (
        <>
            {/* <Header /> */}

            <section className="blogarticle">
                <div className="blogarticle__container">
                    <h3 className="blogarticle__container--header"> Lorem ipsum dolor sit amet. </h3>
                    <img src="/asset_library/blog/test_img_1.png" alt="cover" className="blogarticle__container--image" />
                    <article className="blogarticle__container--article">
                        Lorem ipsum, dolor sit amet consectetur adipisicing.
                        <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing.
                        <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing.
                        <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing.
                        <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing.
                        <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing.
                    </article>
                    <aside className="blogarticle__container--menu">
                        {
                            fakeArticleIDs.map(
                                (index) => {
                                    return (
                                        <button className="blogarticle__container--menu_articles" 
                                        key={index} 
                                        id={"articleBtn_" + index}
                                        onClick={
                                            () => {
                                                setCurrentArticle(index)

                                                var restOfArticleBtnsArr = []
                                                for(var i=0; i<fakeArticleIDs.length; i++) {
                                                    restOfArticleBtnsArr.push(i)
                                                    document.getElementById("articleBtn_" + i).style.backgroundColor = `var(--default-bg-color)`
                                                    document.getElementById("articleBtn_" + i).style.transform = `translateX(0px)`
                                                    document.getElementById("articleBtn_" + i).style.color = `var(--default-text-color)`
                                                }
                                
                                                var currentButton = document.getElementById("articleBtn_" + currentArticle)
                                                currentButton.style.backgroundColor = `var(--dark-color)`
                                                currentButton.style.transform = `translateX(10px)`
                                                currentButton.style.color = `var(--only-negative-color)`
                                            }
                                        }>
                                            aioniunopnduwaioniunopnduw madoinirgfjuwrt aioniunopnduw
                                        </button>
                                    )
                                }
                            )
                        }
                    </aside>
                </div>
            </section>

            {/* <Footer /> */}
        </>
    )
}

export default BlogArticle