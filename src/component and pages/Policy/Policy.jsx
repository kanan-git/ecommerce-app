import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Policy.css'
// import Header from '../Header/Header.jsx'
// import Footer from '../Footer/Footer.jsx'

function Policy() {
    window.scrollTo(0, 0)

    const textDataBase = {
        AZ: {
            title: "RetroQalereya | Gizlilik Siyasəti", 
            headers: [
                "Topladığımız məlumat", 
                "Məlumatdan İstifadə", 
                "Məlumat Paylaşımı", 
                "Məlumat Təhlükəsizliyi", 
                "Kukilər və İzləmə Texnologiyaları", 
                "Uşaqların Məxfiliyi", 
                "Üçüncü tərəfin vebsaytlarına keçidlər", 
                "Məxfilik Siyasətinə Dəyişikliklər", 
                "Bizimlə əlaqə saxlayın"
            ], 
            paragraphs: [
                "Bu Məxfilik Siyasəti [Veb saytınızın adının] veb saytımızdan istifadə edərkən təqdim etdiyiniz şəxsi məlumatı necə topladığını, istifadə etdiyini və qoruduğunu izah edir. Biz sizin məxfiliyinizi qorumaq və şəxsi məlumatlarınızın mühafizəsini təmin etmək öhdəliyi götürürük.", 
                "1.1 Şəxsi məlumat: Veb saytımızdan istifadə etdiyiniz zaman adınız, e-poçt ünvanınız, çatdırılma ünvanınız və telefon nömrəniz kimi müəyyən şəxsi məlumatları toplaya bilərik. Biz yalnız könüllü olaraq bizə təqdim etdiyiniz şəxsi məlumatları toplayırıq.", 
                "1.2 İstifadə Məlumatı: Biz həmçinin IP ünvanınız, brauzerinizin növü, istinad/çıxış səhifələri və ziyarətlərinizin tarixləri/vaxtları daxil olmaqla veb saytımızla qarşılıqlı əlaqəniz haqqında qeyri-şəxsi məlumatları toplaya bilərik. Bu məlumat trendləri təhlil etmək, veb-saytı idarə etmək və demoqrafik məlumat toplamaq üçün istifadə olunur.", 
                "2.1 Şəxsi məlumat: Biz sizin şəxsi məlumatlarınızı sifarişlərinizi emal etmək, alışlarınız haqqında sizinlə əlaqə saxlamaq və müştəri dəstəyini təmin etmək üçün istifadə edə bilərik. Biz həmçinin məlumatınızdan sizə tanıtım e-poçtları və ya xəbər bülletenləri göndərmək üçün istifadə edə bilərik, lakin sizin həmişə belə kommunikasiyalardan imtina etmək seçiminiz olacaq.", 
                "2.2 İstifadə Məlumatı: Veb saytımızı təkmilləşdirmək və təcrübənizi artırmaq üçün istifadə məlumatlarından istifadə edirik. Buraya tendensiyaların təhlili, marketinq kampaniyalarının effektivliyinin monitorinqi, veb saytımızın məzmunu və xüsusiyyətlərinin fərdiləşdirilməsi daxil ola bilər.", 
                "3.1 Üçüncü Tərəf Xidmət Təminatçıları: Biz sizin şəxsi məlumatlarınızı veb saytımızı idarə etməkdə, biznes fəaliyyətlərini həyata keçirməkdə və ya sizə xidmətlər göstərməkdə bizə kömək edən etibarlı üçüncü tərəf xidmət təminatçıları ilə paylaşa bilərik. Bu xidmət təminatçıları müqavilə əsasında məlumatlarınızı qorumaq və ondan yalnız tələb olunan xidmətlərin təmin edilməsi məqsədləri üçün istifadə etmək öhdəliyi daşıyırlar.", 
                "3.2 Hüquqi Tələblər: Biz sizin şəxsi məlumatlarınızı qanunla tələb olunarsa və ya məhkəmə qərarı və ya hökumət araşdırması kimi etibarlı hüquqi sorğuya cavab olaraq açıqlaya bilərik.", 
                "Biz sizin şəxsi məlumatlarınızın təhlükəsizliyinə ciddi yanaşırıq və onu icazəsiz girişdən, dəyişdirilmədən, açıqlanmadan və ya məhv edilmədən qorumaq üçün müvafiq tədbirlər həyata keçirmişik. Bununla belə, internet və ya elektron yaddaş üzərindən heç bir ötürmə üsulu 100% təhlükəsiz deyil və biz onun mütləq təhlükəsizliyinə zəmanət verə bilmərik.", 
                "Baxış təcrübənizi artırmaq, veb sayt trafikini təhlil etmək və məzmunu fərdiləşdirmək üçün kukilərdən və oxşar izləmə texnologiyalarından istifadə edirik. Brauzerinizin parametrləri vasitəsilə kukiləri söndürmək seçiminiz var, lakin lütfən nəzərə alın ki, bu, vebsaytımızın müəyyən funksiyalarını və funksionallığını məhdudlaşdıra bilər.", 
                "Veb saytımız 13 yaşından kiçik uşaqlar üçün nəzərdə tutulmayıb. Biz uşaqlardan bilərəkdən şəxsi məlumatları toplamırıq. Əgər uşaqdan təsadüfən şəxsi məlumat topladığımıza inanırsınızsa, dərhal bizimlə əlaqə saxlayın və biz məlumatı qeydlərimizdən silmək üçün müvafiq addımlar atacağıq.", 
                "Veb saytımızda üçüncü tərəfin vebsaytlarına keçidlər ola bilər. Biz həmin vebsaytların məxfilik təcrübələrinə və ya məzmununa görə məsuliyyət daşımırıq. Hər hansı şəxsi məlumatı təqdim etməzdən əvvəl sizi həmin üçüncü tərəf veb-saytlarının məxfilik siyasətlərini nəzərdən keçirməyi tövsiyə edirik.", 
                "Biz bu Məxfilik Siyasətini istənilən vaxt əvvəlcədən xəbərdarlıq etmədən yeniləmək və ya dəyişdirmək hüququnu özümüzdə saxlayırıq. İstənilən dəyişiklik yenidən işlənmiş Məxfilik Siyasətinin vebsaytımızda yerləşdirilməsindən dərhal sonra qüvvəyə minəcək. Hər hansı yeniləmə üçün bu Məxfilik Siyasətini vaxtaşırı nəzərdən keçirmək sizin məsuliyyətinizdir.", 
                "Bu Məxfilik Siyasəti və ya şəxsi məlumatlarınızın idarə edilməsi ilə bağlı hər hansı sualınız və ya narahatlığınız varsa, [Əlaqə Məlumatınız] ünvanında bizimlə əlaqə saxlayın."
            ]
        }, 
        EN: {
            title: "RetroGallery | Privacy Policy", 
            headers: [
                "Information We Collect", 
                "Use of Information", 
                "Information Sharing", 
                "Data Security", 
                "Cookies and Tracking Technologies", 
                "Children's Privacy", 
                "Links to Third-Party Websites", 
                "Changes to the Privacy Policy", 
                "Contact Us"
            ], 
            paragraphs: [
                "This Privacy Policy explains how [Your Website Name] collects, uses, and protects the personal information you provide when using our website. We are committed to safeguarding your privacy and ensuring that your personal information is protected.", 
                "1.1 Personal Information: When you use our website, we may collect certain personal information, such as your name, email address, shipping address, and phone number. We only collect personal information that you voluntarily provide to us.", 
                "1.2 Usage Data: We may also collect non-personal information about your interaction with our website, including your IP address, browser type, referring/exit pages, and the dates/times of your visits. This information is used to analyze trends, administer the website, and gather demographic information.", 
                "2.1 Personal Information: We may use your personal information to process your orders, communicate with you about your purchases, and provide customer support. We may also use your information to send you promotional emails or newsletters, but you will always have the option to opt-out of such communications.", 
                "2.2 Usage Data: We use usage data to improve our website and enhance your experience. This may include analyzing trends, monitoring the effectiveness of marketing campaigns, and personalizing the content and features of our website.", 
                "3.1 Third-Party Service Providers: We may share your personal information with trusted third-party service providers who assist us in operating our website, conducting business activities, or providing services to you. These service providers are contractually obligated to protect your information and use it solely for the purposes of providing the requested services.", 
                "3.2 Legal Requirements: We may disclose your personal information if required to do so by law or in response to a valid legal request, such as a court order or government investigation.", 
                "We take the security of your personal information seriously and have implemented appropriate measures to protect it against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.", 
                "We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You have the option to disable cookies through your browser settings, but please note that doing so may limit certain features and functionality of our website.", 
                "Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe that we have inadvertently collected personal information from a child, please contact us immediately, and we will take appropriate steps to remove the information from our records.", 
                "Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of those websites. We encourage you to review the privacy policies of those third-party websites before providing any personal information.", 
                "We reserve the right to update or modify this Privacy Policy at any time without prior notice. Any changes will be effective immediately upon posting the revised Privacy Policy on our website. It is your responsibility to review this Privacy Policy periodically for any updates.", 
                "If you have any questions or concerns regarding this Privacy Policy or the handling of your personal information, please contact us at [Your Contact Information]."
            ]
        }, 
        TR: {
            title: "RetroGaleri | Gizlilik Politikası", 
            headers: [
                "Topladığımız Bilgiler", 
                "Bilgilerin Kullanımı", 
                "Bilgi paylaşımı", 
                "Veri güvenliği", 
                "Çerezler ve İzleme Teknolojileri", 
                "Çocukların Gizliliği", 
                "Üçüncü Taraf Web Sitelerine Bağlantılar", 
                "Gizlilik Politikasındaki Değişiklikler", 
                "Bize Ulaşın"
            ], 
            paragraphs: [
                "Bu Gizlilik Politikası, [Web Sitesi Adınız]'ın web sitemizi kullanırken sağladığınız kişisel bilgileri nasıl topladığını, kullandığını ve koruduğunu açıklar. Gizliliğinizi korumaya ve kişisel bilgilerinizin korunmasını sağlamaya kararlıyız.", 
                "1.1 Kişisel Bilgiler: Web sitemizi kullandığınızda, adınız, e-posta adresiniz, gönderim adresiniz ve telefon numaranız gibi belirli kişisel bilgileri toplayabiliriz. Yalnızca bize gönüllü olarak sağladığınız kişisel bilgileri topluyoruz.", 
                "1.2 Kullanım Verileri: IP adresiniz, tarayıcı türünüz, yönlendirme/çıkış sayfalarınız ve ziyaretlerinizin tarihleri/saatleri dahil olmak üzere web sitemizle etkileşiminiz hakkında kişisel olmayan bilgiler de toplayabiliriz. Bu bilgiler eğilimleri analiz etmek, web sitesini yönetmek ve demografik bilgileri toplamak için kullanılır.", 
                "2.1 Kişisel Bilgiler: Kişisel bilgilerinizi siparişlerinizi işlemek, satın alımlarınız hakkında sizinle iletişim kurmak ve müşteri desteği sağlamak için kullanabiliriz. Bilgilerinizi size promosyon e-postaları veya haber bültenleri göndermek için de kullanabiliriz, ancak her zaman bu tür iletişimleri devre dışı bırakma seçeneğiniz olacaktır.", 
                "2.2 Kullanım Verileri: Web sitemizi iyileştirmek ve deneyiminizi geliştirmek için kullanım verilerini kullanırız. Bu, eğilimleri analiz etmeyi, pazarlama kampanyalarının etkinliğini izlemeyi ve web sitemizin içerik ve özelliklerini kişiselleştirmeyi içerebilir.", 
                "3.1 Üçüncü Şahıs Hizmet Sağlayıcılar: Kişisel bilgilerinizi, web sitemizi işletmemizde, ticari faaliyetlerde bulunmamızda veya size hizmet sağlamamızda bize yardımcı olan güvenilir üçüncü şahıs hizmet sağlayıcılarla paylaşabiliriz. Bu hizmet sağlayıcılar, bilgilerinizi korumak ve yalnızca istenen hizmetleri sağlamak amacıyla kullanmak için sözleşmeye bağlıdır.", 
                "3.2 Yasal Gereksinimler: Kişisel bilgilerinizi, kanunen gerekli olması halinde veya mahkeme emri veya hükümet soruşturması gibi geçerli bir yasal talebe yanıt olarak ifşa edebiliriz.", 
                "Kişisel bilgilerinizin güvenliğini ciddiye alıyoruz ve yetkisiz erişime, değiştirilmeye, ifşaya veya imhaya karşı korumak için uygun önlemleri aldık. Ancak, internet veya elektronik depolama üzerinden hiçbir iletim yöntemi %100 güvenli değildir ve mutlak güvenliğini garanti edemeyiz.", 
                "Tarama deneyiminizi geliştirmek, web sitesi trafiğini analiz etmek ve içeriği kişiselleştirmek için tanımlama bilgileri ve benzer izleme teknolojileri kullanıyoruz. Tarayıcı ayarlarınızdan çerezleri devre dışı bırakma seçeneğine sahipsiniz, ancak bunun web sitemizin belirli özelliklerini ve işlevlerini sınırlayabileceğini lütfen unutmayın.", 
                "Web sitemiz 13 yaşın altındaki çocuklara yönelik değildir. Çocuklardan bilerek kişisel bilgi toplamıyoruz. Bir çocuktan istemeden kişisel bilgi topladığımızı düşünüyorsanız, lütfen hemen bizimle iletişime geçin; bilgileri kayıtlarımızdan kaldırmak için uygun adımları atacağız.", 
                "Web sitemiz üçüncü taraf web sitelerine bağlantılar içerebilir. Bu web sitelerinin gizlilik uygulamalarından veya içeriğinden sorumlu değiliz. Herhangi bir kişisel bilgi vermeden önce bu üçüncü taraf web sitelerinin gizlilik politikalarını incelemenizi öneririz.", 
                "Bu Gizlilik Politikasını herhangi bir zamanda önceden haber vermeksizin güncelleme veya değiştirme hakkını saklı tutarız. Herhangi bir değişiklik, revize edilmiş Gizlilik Politikası web sitemizde yayınlandıktan hemen sonra geçerli olacaktır. Herhangi bir güncelleme için bu Gizlilik Politikasını periyodik olarak gözden geçirmek sizin sorumluluğunuzdadır.", 
                "Bu Gizlilik Politikası veya kişisel bilgilerinizin işlenmesi ile ilgili herhangi bir sorunuz veya endişeniz varsa, lütfen [İletişim Bilgileriniz] adresinden bizimle iletişime geçin."
            ]
        }, 
        RU: {
            title: "РетроКалерея | Политика Конфиденциальности", 
            headers: [
                "Информация, которую мы собираем", 
                "Использование информации", 
                "Обмен информацией", 
                "Безопасность данных", 
                "Файлы cookie и технологии отслеживания", 
                "Конфиденциальность детей", 
                "Ссылки на сторонние веб-сайты", 
                "Изменения в Политике конфиденциальности", 
                "Связаться с нами"
            ], 
            paragraphs: [
                "В настоящей Политике конфиденциальности объясняется, как [Имя вашего веб-сайта] собирает, использует и защищает личную информацию, которую вы предоставляете при использовании нашего веб-сайта. Мы стремимся защищать вашу конфиденциальность и обеспечивать защиту вашей личной информации.", 
                "1.1 Личная информация: Когда вы используете наш веб-сайт, мы можем собирать определенную личную информацию, такую как ваше имя, адрес электронной почты, адрес доставки и номер телефона. Мы собираем только личную информацию, которую вы добровольно предоставляете нам.", 
                "1.2 Данные об использовании: мы также можем собирать неличную информацию о вашем взаимодействии с нашим веб-сайтом, включая ваш IP-адрес, тип браузера, страницы перехода/выхода, а также даты/время ваших посещений. Эта информация используется для анализа тенденций, администрирования веб-сайта и сбора демографической информации.", 
                "2.1 Личная информация: мы можем использовать вашу личную информацию для обработки ваших заказов, общения с вами о ваших покупках и предоставления поддержки клиентов. Мы также можем использовать вашу информацию для отправки вам рекламных электронных писем или информационных бюллетеней, но у вас всегда будет возможность отказаться от таких сообщений.", 
                "2.2 Данные об использовании: мы используем данные об использовании, чтобы улучшить наш веб-сайт и сделать его более удобным для вас. Это может включать анализ тенденций, мониторинг эффективности маркетинговых кампаний и персонализацию контента и функций нашего веб-сайта.", 
                "3.1 Сторонние поставщики услуг: мы можем передавать вашу личную информацию доверенным сторонним поставщикам услуг, которые помогают нам в работе нашего веб-сайта, ведении коммерческой деятельности или предоставлении вам услуг. Эти поставщики услуг по договору обязаны защищать вашу информацию и использовать ее исключительно в целях предоставления запрошенных услуг.", 
                "3.2 Юридические требования: мы можем раскрывать вашу личную информацию, если это требуется по закону или в ответ на действительный юридический запрос, такой как постановление суда или государственное расследование.", 
                "Мы серьезно относимся к безопасности вашей личной информации и приняли соответствующие меры для ее защиты от несанкционированного доступа, изменения, раскрытия или уничтожения. Однако ни один метод передачи через Интернет или электронное хранилище не является безопасным на 100%, и мы не можем гарантировать его абсолютную безопасность.", 
                "Мы используем файлы cookie и аналогичные технологии отслеживания для улучшения вашего просмотра, анализа трафика веб-сайта и персонализации контента. У вас есть возможность отключить файлы cookie в настройках вашего браузера, но обратите внимание, что это может ограничить определенные функции и функции нашего веб-сайта.", 
                "Наш веб-сайт не предназначен для детей младше 13 лет. Мы сознательно не собираем личную информацию от детей. Если вы считаете, что мы непреднамеренно получили личную информацию от ребенка, немедленно свяжитесь с нами, и мы предпримем соответствующие шаги для удаления этой информации из наших записей.", 
                "Наш веб-сайт может содержать ссылки на сторонние веб-сайты. Мы не несем ответственности за политику конфиденциальности или содержание этих веб-сайтов. Мы рекомендуем вам ознакомиться с политикой конфиденциальности этих сторонних веб-сайтов, прежде чем предоставлять какую-либо личную информацию.", 
                "Мы оставляем за собой право обновлять или изменять настоящую Политику конфиденциальности в любое время без предварительного уведомления. Любые изменения вступают в силу сразу после публикации пересмотренной Политики конфиденциальности на нашем веб-сайте. Вы обязаны периодически просматривать эту Политику конфиденциальности на предмет любых обновлений.", 
                "Если у вас есть какие-либо вопросы или опасения относительно настоящей Политики конфиденциальности или обработки вашей личной информации, свяжитесь с нами по адресу [Ваша контактная информация]."
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

            <div className="policy">
                <div className="policy__container">
                    <h1 className="policy__container--title">
                        {textDataBaseSTATE.title}
                    </h1>
                    {/* -------------------------------------- */}
                    <p className="policy__container--paragraph">
                        {textDataBaseSTATE.paragraphs[0]}
                    </p>
                    {/* -------------------------------------- */}
                    <h3 className="policy__container--headers">
                        <div className="policy__container--headers_order"> 1 </div>
                        {textDataBaseSTATE.headers[0]}
                    </h3>
                    <p className="policy__container--paragraph">
                        {textDataBaseSTATE.paragraphs[1]}
                    </p>
                    <p className="policy__container--paragraph">
                        {textDataBaseSTATE.paragraphs[2]}
                    </p>
                    {/* -------------------------------------- */}
                    <h3 className="policy__container--headers">
                        <div className="policy__container--headers_order"> 2 </div>
                        {textDataBaseSTATE.headers[1]}
                    </h3>
                    <p className="policy__container--paragraph">
                        {textDataBaseSTATE.paragraphs[3]}
                    </p>
                    <p className="policy__container--paragraph">
                        {textDataBaseSTATE.paragraphs[4]}
                    </p>
                    {/* -------------------------------------- */}
                    <h3 className="policy__container--headers">
                        <div className="policy__container--headers_order"> 3 </div>
                        {textDataBaseSTATE.headers[2]}
                    </h3>
                    <p className="policy__container--paragraph">
                        {textDataBaseSTATE.paragraphs[5]}
                    </p>
                    <p className="policy__container--paragraph">
                        {textDataBaseSTATE.paragraphs[6]}
                    </p>
                    {/* -------------------------------------- */}
                    <h3 className="policy__container--headers">
                        <div className="policy__container--headers_order"> 4 </div>
                        {textDataBaseSTATE.headers[3]}
                    </h3>
                    <p className="policy__container--paragraph">
                        {textDataBaseSTATE.paragraphs[7]}
                    </p>
                    {/* -------------------------------------- */}
                    <h3 className="policy__container--headers">
                        <div className="policy__container--headers_order"> 5 </div>
                        {textDataBaseSTATE.headers[4]}
                    </h3>
                    <p className="policy__container--paragraph">
                        {textDataBaseSTATE.paragraphs[8]}
                    </p>
                    {/* -------------------------------------- */}
                    <h3 className="policy__container--headers">
                        <div className="policy__container--headers_order"> 6 </div>
                        {textDataBaseSTATE.headers[5]}
                    </h3>
                    <p className="policy__container--paragraph">
                        {textDataBaseSTATE.paragraphs[9]}
                    </p>
                    {/* -------------------------------------- */}
                    <h3 className="policy__container--headers">
                        <div className="policy__container--headers_order"> 7 </div>
                        {textDataBaseSTATE.headers[6]}
                    </h3>
                    <p className="policy__container--paragraph">
                        {textDataBaseSTATE.paragraphs[10]}
                    </p>
                    {/* -------------------------------------- */}
                    <h3 className="policy__container--headers">
                        <div className="policy__container--headers_order"> 8 </div>
                        {textDataBaseSTATE.headers[7]}
                    </h3>
                    <p className="policy__container--paragraph">
                        {textDataBaseSTATE.paragraphs[11]}
                    </p>
                    {/* -------------------------------------- */}
                    <h3 className="policy__container--headers">
                        <div className="policy__container--headers_order"> 9 </div>
                        {textDataBaseSTATE.headers[8]}
                    </h3>
                    <p className="policy__container--paragraph">
                        {textDataBaseSTATE.paragraphs[12]}
                    </p>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    )
}

export default Policy