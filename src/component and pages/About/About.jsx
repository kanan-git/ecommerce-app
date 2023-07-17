import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './About.css'
// import Header from '../Header/Header.jsx'
// import Footer from '../Footer/Footer.jsx'

function About() {
    window.scrollTo(0, 0)

    const textDataBase = {
        AZ: {
            headers: [
                "Niyə RetroGalereya ?", 
                "Axtardığınız hərşey burada", 
                "Müştəri məmnuniyyəti", 
                "Yardım və dəstək"
            ],
            paragraphs: [
                "Antikvar xəzinələr və üzüm kolleksiyaları üçün əsas məkanınız olan RetroQalereya-ya xoş gəlmisiniz. Biz müxtəlif dövrlərə aid diqqətlə seçilmiş və orijinal antikvar məhsulların geniş çeşidini seçməyə və təklif etməyə həsr olunmuş onlayn mağazayıq.", 
                "RetroQalereya-da biz tarixin bir parçasına sahib olmağın unikal cazibəsini və cazibəsini başa düşürük. Əntiq əşyalara olan həvəsimiz və keyfiyyətli sənətkarlığa sadiqliyimiz bizi keçmiş dövrlərin ruhunu təcəssüm etdirən incə əşyalar kolleksiyasını əldə etməyə və təqdim etməyə sövq edir.", 
                "Bizim inventarımız mebel, zərgərlik, dekor əşyaları, incəsənət əsərləri və s. kimi müxtəlif çeşidli antik məhsullardan ibarətdir. Hər bir əşya öz orijinallığına, sənətkarlığına və estetik dəyərinə görə diqqətlə seçilmişdir. Sizə zamanın sınağından çıxmış və keçmiş nəsillərin hekayələrini daşıyan orijinal parçaları təqdim etməkdən qürur duyuruq.", 
                "İstər həvəskar bir antikvar kolleksiyaçısı, istərsə də evinizə və ya ofisinizə nostalji toxunuşu əlavə etmək istəyən dizayn həvəskarı olmağınızdan asılı olmayaraq, RetroQalereya sizin getdiyiniz məkandır. Bizim seçilmiş seçimimiz sizə şəxsi üslubunuzu və keçmişə olan qiymətinizi əks etdirən unikal xəzinələri kəşf etməyə və əldə etməyə imkan verir.", 
                "RetroQalereya-da biz müştəri məmnuniyyətini prioritetləşdiririk və problemsiz alış-veriş təcrübəsi təqdim etməyi hədəfləyirik. Komandamız hər hansı sorğu ilə bağlı sizə yardım etməyə, məhsullarımız haqqında əlavə məlumat verməyə və satın almanızdan maksimum məmnunluğunuzu təmin etməyə sadiqdir.", 
                "Biz inanırıq ki, əntiq əşyalar həyatımızı gözəlləşdirmək, bizi tarixə bağlamaq və sonsuz gözəlliyi ilə sevinc oyatmaq gücünə malikdir. Məqsədimiz müstəsna antik məhsullar təklif edərək və antikvar həvəskarları birliyini inkişaf etdirməklə bu ehtirası sizinlə bölüşməkdir.", 
                "Antikvar xəzinələr üçün etibarlı mənbəniz kimi RetroQalereya-nı seçdiyiniz üçün təşəkkür edirik. Sizi kolleksiyamızı araşdırmağa və bu qeyri-adi parçalarda qorunan zəngin irsə görə kəşf, nostalji və qiymətləndirmə səyahətinə çıxmağa dəvət edirik.", 
                "Hər hansı bir sualınız, şərhiniz və ya rəyiniz olarsa, bizimlə əlaqə saxlamaqdan çəkinməyin. Biz sizə kömək etmək və antik əşyalar dünyasında təcrübəmizi bölüşmək üçün buradayıq."
            ]
        },
        EN: {
            headers: [
                "Why RetroGallery ?", 
                "You can find anything you want", 
                "Customer satisfaction", 
                "Help & support"
            ],
            paragraphs: [
                "Welcome to RetroQalereya, your premier destination for antique treasures and vintage collectibles. We are an online shop dedicated to curating and offering a wide range of carefully selected and authentic antique products from various eras.", 
                "At RetroQalereya, we understand the unique appeal and charm of owning a piece of history. Our passion for antiques and our commitment to quality craftsmanship drive us to source and present an exquisite collection of items that embody the spirit of bygone times.", 
                "Our inventory includes a diverse range of antique products, such as furniture, jewelry, decor items, artwork, and more. Each item has been meticulously chosen for its authenticity, craftsmanship, and aesthetic value. We take pride in offering you genuine pieces that have stood the test of time and carry the stories of generations past.", 
                "Whether you are an avid antique collector, a design enthusiast seeking a statement piece, or someone looking to add a touch of nostalgia to your home or office, RetroQalereya is your go-to destination. Our curated selection allows you to explore and acquire unique treasures that reflect your personal style and appreciation for the past.", 
                "At RetroQalereya, we prioritize customer satisfaction and aim to provide a seamless shopping experience. Our team is dedicated to assisting you with any inquiries, providing additional information about our products, and ensuring your utmost satisfaction with your purchase.", 
                "We believe that antiques have the power to enhance our lives, connecting us to history and sparking joy through their timeless beauty. Our goal is to share this passion with you by offering exceptional antique products and fostering a community of fellow antique enthusiasts.", 
                "Thank you for choosing RetroQalereya as your trusted source for antique treasures. We invite you to explore our collection and embark on a journey of discovery, nostalgia, and appreciation for the rich heritage preserved in these extraordinary pieces.", 
                "Should you have any questions, comments, or feedback, please do not hesitate to contact us. We are here to assist you and share our expertise in the world of antiques."
            ]
        },
        TR: {
            headers: [
                "Neden RetroGaleri ?", 
                "istediğin her şey burada", 
                "Müşteri memnuniyeti", 
                "Yardım ve Destek"
            ],
            paragraphs: [
                "Antika hazineler ve eski koleksiyon ürünleri için başlıca varış noktanız olan RetroQalereya'ya hoş geldiniz. Çeşitli dönemlerden özenle seçilmiş ve otantik antika ürünlerden oluşan geniş bir yelpazede küratörlük yapmaya ve sunmaya adanmış bir çevrimiçi mağazayız.", 
                "RetroQalereya'da, tarihin bir parçasına sahip olmanın benzersiz cazibesini ve çekiciliğini anlıyoruz. Antikalara olan tutkumuz ve kaliteli işçiliğe olan bağlılığımız, bizi geçmiş zamanların ruhunu somutlaştıran mükemmel bir ürün koleksiyonu bulmaya ve sunmaya yönlendiriyor.", 
                "Envanterimiz, mobilya, mücevher, dekor ürünleri, sanat eserleri ve daha fazlası gibi çok çeşitli antika ürünleri içerir. Her bir parça özgünlüğü, işçiliği ve estetik değeri için titizlikle seçilmiştir. Size zamanın testinden geçen ve geçmiş nesillerin hikayelerini taşıyan orijinal parçalar sunmaktan gurur duyuyoruz.", 
                "İster hevesli bir antika koleksiyoncusu, ister iddialı bir parça arayan bir tasarım meraklısı veya evinize veya ofisinize nostalji dokunuşu katmak isteyen biri olun, RetroQalereya gideceğiniz yer. Küratörlü seçimimiz, kişisel tarzınızı ve geçmişe olan takdirinizi yansıtan benzersiz hazineleri keşfetmenizi ve edinmenizi sağlar.", 
                "RetroQalereya olarak müşteri memnuniyetini ön planda tutuyor ve sorunsuz bir alışveriş deneyimi yaşatmayı amaçlıyoruz. Ekibimiz, ürünlerimiz hakkında ek bilgi sağlamak ve satın alma işleminizden en üst düzeyde memnun kalmanızı sağlamak için her türlü sorunuzda size yardımcı olmaya kendini adamıştır.", 
                "Antikaların hayatlarımızı iyileştirme, bizi tarihe bağlama ve zamansız güzellikleriyle neşe uyandırma gücüne sahip olduğuna inanıyoruz. Amacımız, olağanüstü antika ürünler sunarak ve antika meraklılarından oluşan bir topluluğu teşvik ederek bu tutkuyu sizinle paylaşmaktır.", 
                "Antika hazineler için güvenilir kaynağınız olarak RetroQalereya'yı seçtiğiniz için teşekkür ederiz. Sizi koleksiyonumuzu keşfetmeye ve bu olağanüstü parçalarda korunan zengin miras için bir keşif, nostalji ve takdir yolculuğuna çıkmaya davet ediyoruz.", 
                "Herhangi bir sorunuz, yorumunuz veya geri bildiriminiz varsa, lütfen bizimle iletişime geçmekten çekinmeyin. Size yardımcı olmak ve antika dünyasındaki uzmanlığımızı paylaşmak için buradayız."
            ]
        },
        RU: {
            headers: [
                "Почему РетроГалерея?", 
                "Вы можете найти все, что хотите", 
                "Удовлетворенность клиентов", 
                "Помощь и поддержка"
            ],
            paragraphs: [
                "Добро пожаловать в RetroQalereya, ваш главный магазин антикварных сокровищ и старинных предметов коллекционирования. Мы являемся интернет-магазином, который занимается курированием и предлагает широкий ассортимент тщательно отобранных и подлинных антикварных изделий из разных эпох.", 
                "В RetroQalereya мы понимаем уникальную привлекательность и очарование обладания частичкой истории. Наша страсть к антиквариату и наша приверженность качественному мастерству побуждают нас создавать и представлять изысканную коллекцию предметов, воплощающих дух ушедших времен.", 
                "Наш инвентарь включает в себя широкий спектр антикварных товаров, таких как мебель, украшения, предметы декора, произведения искусства и многое другое. Каждый предмет был тщательно отобран с точки зрения его подлинности, мастерства и эстетической ценности. Мы гордимся тем, что предлагаем вам подлинные изделия, выдержавшие испытание временем и несущие в себе истории прошлых поколений.", 
                "Являетесь ли вы заядлым коллекционером антиквариата, энтузиастом дизайна, ищущим эффектный предмет, или тем, кто хочет добавить нотку ностальгии в свой дом или офис, RetroQalereya — это то, что вам нужно. Наш тщательно подобранный ассортимент позволяет вам исследовать и приобретать уникальные сокровища, отражающие ваш личный стиль и признательность за прошлое.", 
                "В RetroQalereya мы уделяем первостепенное внимание удовлетворенности клиентов и стремимся обеспечить беспроблемный опыт покупок. Наша команда стремится помочь вам с любыми запросами, предоставить дополнительную информацию о наших продуктах и обеспечить максимальное удовлетворение вашей покупкой.", 
                "Мы верим, что антиквариат способен улучшить нашу жизнь, связывая нас с историей и вызывая радость своей вневременной красотой. Наша цель — разделить эту страсть с вами, предлагая исключительные антикварные изделия и создавая сообщество единомышленников-энтузиастов антиквариата.", 
                "Спасибо, что выбрали RetroQalereya в качестве надежного источника антикварных сокровищ. Мы приглашаем вас ознакомиться с нашей коллекцией и отправиться в путешествие, полное открытий, ностальгии и признательности за богатое наследие, сохраненное в этих необычных произведениях искусства.", 
                "Если у вас есть какие-либо вопросы, комментарии или отзывы, пожалуйста, не стесняйтесь обращаться к нам. Мы здесь, чтобы помочь вам и поделиться своим опытом в мире антиквариата."
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

            <div className="about">
                <div className="about__container">

                    <div className="about__container--groups">
                        <h3 className="about__container--groups_header">
                            {textDataBaseSTATE.headers[0]}
                        </h3>
                        <div className="about__container--groups_content">
                            <div className="about__container--groups_content-text">
                                {textDataBaseSTATE.paragraphs[0]}
                                <br />
                                {textDataBaseSTATE.paragraphs[1]}
                            </div>
                            <img src="/asset_library/gallery/img_01.jpg" alt="img_01" 
                            className="div about__container--groups_content-img" />
                        </div>
                    </div>

                    <div className="about__container--groups">
                        <h3 className="about__container--groups_header">
                            {textDataBaseSTATE.headers[1]}
                        </h3>
                        <div className="about__container--groups_content">
                        <img src="/asset_library/gallery/img_02.jpg" alt="img_02" 
                        className="div about__container--groups_content-img" />
                            <div className="about__container--groups_content-text">
                                {textDataBaseSTATE.paragraphs[2]}
                                <br />
                                {textDataBaseSTATE.paragraphs[3]}
                            </div>
                        </div>
                    </div>
                    
                    <div className="about__container--groups">
                        <h3 className="about__container--groups_header">
                            {textDataBaseSTATE.headers[2]}
                        </h3>
                        <div className="about__container--groups_content">
                            <div className="about__container--groups_content-text">
                                {textDataBaseSTATE.paragraphs[4]}
                                <br />
                                {textDataBaseSTATE.paragraphs[5]}
                            </div>
                            <img src="/asset_library/gallery/img_03.jpg" alt="img_03" 
                            className="div about__container--groups_content-img" />
                        </div>
                    </div>

                    <div className="about__container--groups">
                        <h3 className="about__container--groups_header">
                            {textDataBaseSTATE.headers[3]}
                        </h3>
                        <div className="about__container--groups_content">
                        <img src="/asset_library/gallery/img_04.jpg" alt="img_04" 
                        className="div about__container--groups_content-img" />
                            <div className="about__container--groups_content-text">
                                {textDataBaseSTATE.paragraphs[6]}
                                <br />
                                {textDataBaseSTATE.paragraphs[7]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    )
}

export default About