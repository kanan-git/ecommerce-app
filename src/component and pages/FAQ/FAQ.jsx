import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './FAQ.css'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

function FAQ() {

    const textDataBase = {
        AZ: {
            headers: [], 
            questions: [],
            answers: [
                "How can I place an order?", 
                "To place an order, simply browse our website and add the desired products to your cart. Once you have finished shopping, proceed to the checkout page, where you can review your order and provide the necessary information for shipping and payment. Finally, click on the 'Place Order' button to complete your purchase.", 
                
                "What payment methods do you accept?", 
                "We accept [list accepted payment methods], including credit cards, debit cards, and PayPal. Choose the payment method that is most convenient for you during the checkout process.", 
                
                "How long will it take to receive my order?", 
                "The delivery time depends on various factors, such as the shipping destination and the availability of the product. We strive to process and ship all orders as quickly as possible. Once your order has been shipped, you will receive a confirmation email with tracking information to monitor the progress of your package.", 
                
                "Do you ship internationally?", 
                "Yes, we offer international shipping. However, please note that international orders may be subject to customs duties, taxes, or other fees imposed by your country's customs authorities. These additional charges are the responsibility of the buyer.", 
                
                "What is your return policy?", 
                "We want you to be completely satisfied with your purchase. If for any reason you are not satisfied, you may return the item within [number of days] days from the date of delivery. Please refer to our Return Policy for detailed instructions on how to initiate a return and the eligibility criteria.", 
                
                "How do I track my order?", 
                "Once your order has been shipped, we will provide you with a tracking number via email. You can use this tracking number to monitor the delivery status of your package. Simply visit the designated courier's website and enter the tracking number in the appropriate field to track your order.", 
                
                "Are the products on your website authentic?", 
                "Yes, we guarantee the authenticity of all the products listed on our website. We specialize in offering genuine antique items, and we carefully curate our inventory to ensure their authenticity.", 
                
                "Can I cancel or modify my order?", 
                "If you need to cancel or modify your order, please contact our customer support team as soon as possible. While we cannot guarantee that we will be able to accommodate all requests, we will do our best to assist you.", 
                
                "How can I contact your customer support?", 
                "You can reach our customer support team by [list contact methods, such as email or phone]. We are available [mention hours of operation or response time] to assist you with any questions, concerns, or inquiries you may have.", 
                
                "Do you offer gift wrapping or personalized messages?", 
                "Yes, we offer gift wrapping services for an additional fee. During the checkout process, you will have the option to select gift wrapping and add a personalized message to your order. Simply follow the instructions provided to customize your gift."
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

            <div className="faq">
                <div className="faq__container"></div>
            </div>

            <Footer />
        </>
    )
}

export default FAQ