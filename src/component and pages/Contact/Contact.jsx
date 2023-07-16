import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Contact.css'
// import Header from '../Header/Header.jsx'
// import Footer from '../Footer/Footer.jsx'

function Contact() {

    const textDataBase = {
        AZ: {
            headers: [
                "Əlaqə məlumatları"
            ], 
            paragraphs: [
                "RetroQalereya ilə bağlı sorğularınızı, rəylərinizi və marağınızı qiymətləndiririk. Xüsusi komandamız hər hansı bir sualınız və ya narahatlığınızla bağlı sizə kömək etmək üçün buradadır. Zəhmət olmasa aşağıda göstərilən əlaqə məlumatlarından istifadə edərək bizimlə əlaqə saxlayın.", 
                "Xüsusi məhsullar və ya sifarişlərlə bağlı sorğular üçün əlaqənizdə məhsulun adı və ya sifariş nömrəsi kimi müvafiq təfərrüatları daxil edin. Komandamız dərhal sizə kömək edəcək və lazım olan məlumatları təqdim edəcəkdir.", 
                "Biz başa düşürük ki, antikvar əşyaların seçilməsi diqqətlə nəzərdən keçirilməsini tələb edir və biz sizə məhsullarımız haqqında ətraflı məlumat və anlayışlar təqdim etməyə hazırıq. Müəyyən bir element haqqında əlavə təfərrüatlar, əlavə şəkillər və ya tarixi kontekst istəyirsinizsə, bizə bildirin. Məlumatlı qərar qəbul etməkdə sizə kömək etməkdən məmnun olarıq.", 
                "Göndərmə, ödəniş variantları və ya geri qaytarma ilə bağlı hər hansı sorğunuz olarsa, komandamız sizə lazımi təlimat və dəstəyi təqdim etməyə hazırdır.", 
                "RetroQalereyaya olan marağınızı yüksək qiymətləndirir və rəyinizi qiymətləndiririk. Xidmətlərimizi təkmilləşdirmək və ya kolleksiyamızı genişləndirmək üçün hər hansı təklifiniz, şərhiniz və ya ideyanız varsa, sizdən eşitmək istərdik. Sizin məlumatınız RetroQalereya təcrübəsini inkişaf etdirməyə və dəyərli müştərilərimizə daha yaxşı xidmət göstərməyə kömək edir.", 
                "Ən son məhsul buraxılışlarımız, eksklüziv tanıtımlarımız və pərdəarxası məzmundan xəbərdar olmaq üçün sosial mediada bizimlə əlaqə saxlayın:", 
                "Nəfis antikvar xəzinələr üçün RetroQalereya-nı seçdiyiniz üçün təşəkkür edirik. Biz sizə yardım etməyi və müstəsna alış-veriş təcrübəsi təqdim etməyi səbirsizliklə gözləyirik."
            ], 
            address: "Dilarə Əliyeva küç. A1, 28 May, Bakı", 
            titles: [
                "Ünvan", 
                "Telefon", 
                "E-poçt"
            ]
        }, 
        EN: {
            headers: [
                "Contact information"
            ], 
            paragraphs: [
                "We value your inquiries, feedback, and interest in RetroQalereya. Our dedicated team is here to assist you with any questions or concerns you may have. Please feel free to reach out to us using the contact information provided below.", 
                "For inquiries related to specific products or orders, please include relevant details such as the item name or order number in your communication. Our team will promptly assist you and provide the information you need.", 
                "We understand that choosing antique pieces requires careful consideration, and we are committed to providing you with detailed information and insights about our products. If you would like further details, additional images, or historical context about a particular item, please let us know. We are happy to assist you in making an informed decision.", 
                "Should you have any inquiries regarding shipping, payment options, or returns, our team is available to provide you with the necessary guidance and support.", 
                "We appreciate your interest in RetroQalereya and value your feedback. If you have any suggestions, comments, or ideas for improving our services or expanding our collection, we would love to hear from you. Your input helps us enhance the RetroQalereya experience and better serve our valued customers.", 
                "Stay connected with us on social media to stay up to date with our latest product releases, exclusive promotions, and behind-the-scenes content:", 
                "Thank you for choosing RetroQalereya as your destination for exquisite antique treasures. We look forward to assisting you and providing you with an exceptional shopping experience."
            ], 
            address: "Dilara Aliyeva st. A1, 28 May, Baku", 
            titles: [
                "Addressline", 
                "Phone", 
                "Email"
            ]
        }, 
        TR: {
            headers: [
                "İletişim bilgileri"
            ], 
            paragraphs: [
                "Sorularınıza, geri bildirimlerinize ve RetroQalereya'ya gösterdiğiniz ilgiye değer veriyoruz. Özel ekibimiz, sahip olabileceğiniz herhangi bir soru veya endişeniz için size yardımcı olmak için burada. Lütfen aşağıdaki iletişim bilgilerini kullanarak bizimle iletişime geçmekten çekinmeyin.", 
                "Belirli ürünler veya siparişlerle ilgili sorular için lütfen ürün adı veya sipariş numarası gibi ilgili ayrıntıları iletişiminize ekleyin. Ekibimiz size hemen yardımcı olacak ve ihtiyacınız olan bilgileri sağlayacaktır.", 
                "Antika parçalar seçmenin dikkatli bir değerlendirme gerektirdiğini anlıyoruz ve size ürünlerimiz hakkında ayrıntılı bilgi ve öngörüler sağlamaya kararlıyız. Belirli bir öğe hakkında daha fazla ayrıntı, ek resim veya tarihsel bağlam istiyorsanız, lütfen bize bildirin. Bilgilendirilmiş bir karar vermenize yardımcı olmaktan mutluluk duyarız.", 
                "Nakliye, ödeme seçenekleri veya iadelerle ilgili herhangi bir sorunuz olursa, ekibimiz size gerekli rehberlik ve desteği sağlamaya hazırdır.", 
                "RetroQalereya'ya gösterdiğiniz ilgi için teşekkür ediyor ve geri bildirimlerinize değer veriyoruz. Hizmetlerimizi geliştirmek veya koleksiyonumuzu genişletmek için herhangi bir öneriniz, yorumunuz veya fikriniz varsa, sizden haber almak isteriz. Verdiğiniz bilgiler, RetroQalereya deneyimini geliştirmemize ve değerli müşterilerimize daha iyi hizmet vermemize yardımcı oluyor.", 
                "En son çıkan ürünlerimizden, özel promosyonlarımızdan ve kamera arkası içeriklerimizden haberdar olmak için sosyal medyada bizimle bağlantıda kalın:", 
                "Enfes antik hazineler için varış noktanız olarak RetroQalereya'yı seçtiğiniz için teşekkür ederiz. Size yardımcı olmak ve size olağanüstü bir alışveriş deneyimi sunmak için sabırsızlanıyoruz."
            ], 
            address: "Dilare Aliyeva sok. A1, 28 May, Bakü", 
            titles: [
                "Adres", 
                "Telefon", 
                "E-posta"
            ]
        }, 
        RU: {
            headers: [
                "Контактная информация"
            ], 
            paragraphs: [
                "Мы ценим ваши запросы, отзывы и интерес к RetroQalereya. Наша преданная команда здесь, чтобы помочь вам с любыми вопросами или проблемами, которые могут у вас возникнуть. Пожалуйста, не стесняйтесь обращаться к нам, используя контактную информацию, указанную ниже.", 
                "Если у вас есть вопросы, связанные с конкретными продуктами или заказами, укажите в своем сообщении соответствующие данные, такие как название товара или номер заказа. Наша команда оперативно поможет вам и предоставит необходимую информацию.", 
                "Мы понимаем, что выбор антикварных предметов требует тщательного рассмотрения, и мы стремимся предоставить вам подробную информацию и информацию о наших продуктах. Если вам нужна дополнительная информация, дополнительные изображения или исторический контекст о конкретном предмете, сообщите нам об этом. Мы будем рады помочь вам принять взвешенное решение.", 
                "Если у вас есть какие-либо вопросы относительно доставки, способов оплаты или возврата, наша команда готова предоставить вам необходимые рекомендации и поддержку.", 
                "Мы ценим ваш интерес к RetroQalereya и ценим ваши отзывы. Если у вас есть какие-либо предложения, комментарии или идеи по улучшению наших услуг или расширению нашей коллекции, мы будем рады услышать от вас. Ваш вклад помогает нам улучшить опыт RetroQalereya и лучше обслуживать наших уважаемых клиентов.", 
                "Оставайтесь на связи с нами в социальных сетях, чтобы быть в курсе наших последних выпусков продуктов, эксклюзивных рекламных акций и закулисного контента:", 
                "Спасибо, что выбрали RetroQalereya в качестве места для изысканных антикварных сокровищ. Мы с нетерпением ждем возможности помочь вам и предоставить вам исключительный опыт покупок."
            ], 
            address: "Ул. Дилары Алиевой. А1, 28 Мая, Баку", 
            titles: [
                "Адрес", 
                "Телефон", 
                "Электронная почта"
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

            <div className="contact">
                <div className="contact__container">
                    <h3 className="contact__container--header">
                        {textDataBaseSTATE.headers[0]}
                    </h3>
                    <p className="contact__container--text">
                        {textDataBaseSTATE.paragraphs[0]}
                        <br />
                        {textDataBaseSTATE.paragraphs[1]}
                        <br />
                        {textDataBaseSTATE.paragraphs[2]}
                    </p>
                    <div className="contact__container--group">
                        <ul className="contact__container--group_info">
                            <li className="contact__container--group_info-text">
                                <img src="/asset_library/symbols_svg/map-marker-svgrepo-com.svg" 
                                className="contact__container--group_info-text__symbol" />
                                {textDataBaseSTATE.titles[0]}: {textDataBaseSTATE.address}
                            </li>
                            <li className="contact__container--group_info-text">
                                <img src="/asset_library/symbols_svg/phone-rotary-svgrepo-com.svg" 
                                className="contact__container--group_info-text__symbol" />
                                {textDataBaseSTATE.titles[1]}: +994 (50) 123-456-789
                            </li>
                            <li className="contact__container--group_info-text">
                                <img src="/asset_library/symbols_svg/email-svgrepo-com.svg" 
                                className="contact__container--group_info-text__symbol" />
                                {textDataBaseSTATE.titles[2]}: info@retrogallery.com
                            </li>
                            <li className="contact__container--group_info-text">
                                <img src="/asset_library/symbols_svg/icons8-instagram.svg" 
                                className="contact__container--group_info-text__symbol" />
                                Instagram: instagram.com/retrogallery
                            </li>
                            <li className="contact__container--group_info-text">
                                <img src="/asset_library/symbols_svg/icons8-youtube.svg" 
                                className="contact__container--group_info-text__symbol" />
                                YouTube: youtube.com/retrogallery
                            </li>
                            <li className="contact__container--group_info-text">
                                <img src="/asset_library/symbols_svg/icons8-facebook.svg" 
                                className="contact__container--group_info-text__symbol" />
                                Facebook: facebook.com/retrogallery
                            </li>
                            <li className="contact__container--group_info-text">
                                <img src="/asset_library/symbols_svg/icons8-twitter.svg" 
                                className="contact__container--group_info-text__symbol" />
                                Twitter: twitter.com/retrogallery
                            </li>
                        </ul>
                        <div className="contact__container--group_mapapi"></div>
                    </div>
                    <p className="contact__container--text">
                        {textDataBaseSTATE.paragraphs[3]}
                        <br />
                        {textDataBaseSTATE.paragraphs[4]}
                        <br />
                        {textDataBaseSTATE.paragraphs[5]}
                        <br />
                        {textDataBaseSTATE.paragraphs[6]}
                    </p>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    )
}

export default Contact