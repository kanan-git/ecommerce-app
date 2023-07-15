import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './FAQ.css'
// import Header from '../Header/Header.jsx'
// import Footer from '../Footer/Footer.jsx'

function FAQ() {

    const textDataBase = {
        AZ: {
            title: "RetroQalereya | Tez-tez verilən suallar (FAQ)", 
            questions: [
                "Necə sifariş verə bilərəm?", 
                "Hansı ödəniş üsullarını qəbul edirsiniz?", 
                "Sifarişimi almaq nə qədər vaxt aparacaq?", 
                "Beynəlxalq göndərişlər edirsiniz?", 
                "Qaytarma siyasətiniz nədir?", 
                "Sifarişimi necə izləyə bilərəm?", 
                "Veb saytınızdakı məhsullar orijinaldırmı?", 
                "Sifarişimi ləğv edə və ya dəyişdirə bilərəmmi?", 
                "Müştəri dəstəyinizlə necə əlaqə saxlaya bilərəm?", 
                "Hədiyyə qablaşdırma və ya fərdi mesajlar təklif edirsiniz?"
            ],
            answers: [
                "Sifariş vermək üçün sadəcə saytımıza daxil olub istədiyiniz məhsulları səbətinizə əlavə edin. Alış-verişi bitirdikdən sonra sifarişinizi nəzərdən keçirə və göndərmə və ödəniş üçün lazımi məlumatları təqdim edə biləcəyiniz ödəmə səhifəsinə keçin. Nəhayət, alışınızı tamamlamaq üçün 'Sifariş ver' düyməsini klikləyin.", 
                "Biz kredit kartları, debet kartları və PayPal daxil olmaqla [qəbul edilən ödəniş üsullarının siyahısı] qəbul edirik. Ödəniş prosesi zamanı sizin üçün ən əlverişli olan ödəniş üsulunu seçin.", 
                "Çatdırılma müddəti müxtəlif amillərdən, məsələn, çatdırılma yeri və məhsulun mövcudluğundan asılıdır. Biz bütün sifarişləri mümkün qədər tez emal etməyə və göndərməyə çalışırıq. Sifarişiniz göndərildikdən sonra paketinizin gedişatına nəzarət etmək üçün izləmə məlumatı ilə təsdiq e-poçtu alacaqsınız.", 
                "Bəli, biz beynəlxalq çatdırılma təklif edirik. Bununla belə, nəzərə alın ki, beynəlxalq sifarişlər ölkənizin gömrük orqanları tərəfindən qoyulan gömrük rüsumları, vergilər və ya digər rüsumlara məruz qala bilər. Bu əlavə ödənişlər alıcının üzərinə düşür.", 
                "Alış-verişinizdən tam razı qalmanızı istəyirik. Əgər hər hansı səbəbdən sizi qane etmirsinizsə, çatdırılma tarixindən etibarən [günlərin sayı] gün ərzində məhsulu qaytara bilərsiniz. Qaytarmağa necə başlamaq və uyğunluq meyarları haqqında ətraflı təlimatlar üçün Qaytarma Siyasətimizə baxın.", 
                "Sifarişiniz göndərildikdən sonra sizə e-poçt vasitəsilə izləmə nömrəsi təqdim edəcəyik. Paketinizin çatdırılma vəziyyətini izləmək üçün bu izləmə nömrəsindən istifadə edə bilərsiniz. Sifarişinizi izləmək üçün sadəcə olaraq təyin edilmiş kuryerin veb saytına daxil olun və müvafiq sahəyə izləmə nömrəsini daxil edin.", 
                "Bəli, biz vebsaytımızda qeyd olunan bütün məhsulların orijinallığına zəmanət veririk. Biz orijinal antik əşyalar təklif etməkdə ixtisaslaşırıq və onların orijinallığını təmin etmək üçün inventarımızı diqqətlə tərtib edirik.", 
                "Sifarişinizi ləğv etmək və ya dəyişdirmək lazımdırsa, mümkün qədər tez müştəri dəstək komandamızla əlaqə saxlayın. Bütün sorğuları yerinə yetirə biləcəyimizə zəmanət verə bilməsək də, sizə kömək etmək üçün əlimizdən gələni edəcəyik.", 
                "Siz [e-poçt və ya telefon kimi əlaqə üsullarını siyahıya salmaqla] müştəri dəstək komandamıza müraciət edə bilərsiniz. Hər hansı sualınız, narahatlığınız və ya sorğunuzla bağlı sizə yardım etmək üçün [iş saatlarını və ya cavab vaxtını qeyd edin] hazırıq.", 
                "Bəli, biz əlavə ödəniş müqabilində hədiyyə qablaşdırma xidmətləri təklif edirik. Ödəniş prosesi zamanı hədiyyə paketini seçmək və sifarişinizə fərdi mesaj əlavə etmək seçiminiz olacaq. Hədiyyənizi fərdiləşdirmək üçün sadəcə olaraq verilən təlimatlara əməl edin."
            ]
        }, 
        EN: {
            title: "RetroGallery | Frequently Asked Questions (FAQ)", 
            questions: [
                "How can I place an order?", 
                "What payment methods do you accept?", 
                "How long will it take to receive my order?", 
                "Do you ship internationally?", 
                "What is your return policy?", 
                "How do I track my order?", 
                "Are the products on your website authentic?", 
                "Can I cancel or modify my order?", 
                "How can I contact your customer support?", 
                "Do you offer gift wrapping or personalized messages?"
            ],
            answers: [
                "To place an order, simply browse our website and add the desired products to your cart. Once you have finished shopping, proceed to the checkout page, where you can review your order and provide the necessary information for shipping and payment. Finally, click on the 'Place Order' p to complete your purchase.", 
                "We accept [list accepted payment methods], including credit cards, debit cards, and PayPal. Choose the payment method that is most convenient for you during the checkout process.", 
                "The delivery time depends on various factors, such as the shipping destination and the availability of the product. We strive to process and ship all orders as quickly as possible. Once your order has been shipped, you will receive a confirmation email with tracking information to monitor the progress of your package.", 
                "Yes, we offer international shipping. However, please note that international orders may be subject to customs duties, taxes, or other fees imposed by your country's customs authorities. These additional charges are the responsibility of the buyer.", 
                "We want you to be completely satisfied with your purchase. If for any reason you are not satisfied, you may return the item within [number of days] days from the date of delivery. Please refer to our Return Policy for detailed instructions on how to initiate a return and the eligibility criteria.", 
                "Once your order has been shipped, we will provide you with a tracking number via email. You can use this tracking number to monitor the delivery status of your package. Simply visit the designated courier's website and enter the tracking number in the appropriate field to track your order.", 
                "Yes, we guarantee the authenticity of all the products listed on our website. We specialize in offering genuine antique items, and we carefully curate our inventory to ensure their authenticity.", 
                "If you need to cancel or modify your order, please contact our customer support team as soon as possible. While we cannot guarantee that we will be able to accommodate all requests, we will do our best to assist you.", 
                "You can reach our customer support team by [list contact methods, such as email or phone]. We are available [mention hours of operation or response time] to assist you with any questions, concerns, or inquiries you may have.", 
                "Yes, we offer gift wrapping services for an additional fee. During the checkout process, you will have the option to select gift wrapping and add a personalized message to your order. Simply follow the instructions provided to customize your gift."
            ]
        }, 
        TR: {
            title: "RetroGaleri | Sık Sorulan Sorular (SSS)", 
            questions: [
                "Nasıl sipariş verebilirim?", 
                "Hangi ödeme yöntemlerini kabul ediyorsunuz?", 
                "Siparişimi almak ne kadar sürer?", 
                "Uluslararası nakliye yapıyor musunuz?", 
                "İade politikanız nedir?", 
                "Siparişimi nasıl takip ederim?", 
                "Web sitenizdeki ürünler orijinal mi?", 
                "Siparişimi iptal edebilir veya değiştirebilir miyim?", 
                "Müşteri desteğinizle nasıl iletişim kurabilirim?", 
                "Hediye paketleri veya kişiselleştirilmiş mesajlar sunuyor musunuz?"
            ],
            answers: [
                "Sipariş vermek için sitemizi incelemeniz ve istediğiniz ürünleri sepetinize eklemeniz yeterli. Alışverişinizi bitirdikten sonra, siparişinizi inceleyebileceğiniz ve nakliye ve ödeme için gerekli bilgileri sağlayabileceğiniz ödeme sayfasına ilerleyin. Son olarak, satın alma işleminizi tamamlamak için 'Sipariş Ver' düğmesine tıklayın.", 
                "Kredi kartları, banka kartları ve PayPal dahil olmak üzere [kabul edilen ödeme yöntemlerini listeleyin] kabul ediyoruz. Ödeme işlemi sırasında sizin için en uygun olan ödeme yöntemini seçin.", 
                "Teslimat süresi, nakliye hedefi ve ürünün mevcudiyeti gibi çeşitli faktörlere bağlıdır. Tüm siparişleri mümkün olan en kısa sürede işleme koymaya ve göndermeye çalışıyoruz. Siparişiniz gönderildikten sonra, paketinizin ilerlemesini izlemek için izleme bilgilerini içeren bir onay e-postası alacaksınız.", 
                "Evet, uluslararası nakliye sunuyoruz. Ancak, uluslararası siparişlerin ülkenizin gümrük makamları tarafından uygulanan gümrük vergilerine, vergilerine veya diğer ücretlere tabi olabileceğini lütfen unutmayın. Bu ek ücretler alıcının sorumluluğundadır.", 
                "Satın alma işleminizden tamamen memnun kalmanızı istiyoruz. Herhangi bir nedenle memnun kalmazsanız, teslimat tarihinden itibaren [gün sayısı] gün içinde ürünü iade edebilirsiniz. Bir iadenin nasıl başlatılacağına ve uygunluk kriterlerine ilişkin ayrıntılı talimatlar için lütfen İade Politikamıza bakın.", 
                "Siparişiniz gönderildikten sonra, size e-posta yoluyla bir takip numarası vereceğiz. Paketinizin teslimat durumunu takip etmek için bu takip numarasını kullanabilirsiniz. Belirlenen kuryenin web sitesini ziyaret edin ve siparişinizi takip etmek için uygun alana takip numarasını girin.", 
                "Evet, web sitemizde listelenen tüm ürünlerin orijinalliğini garanti ediyoruz. Orijinal antika ürünler sunma konusunda uzmanız ve özgünlüklerini sağlamak için envanterimizi özenle düzenleriz.", 
                "Siparişinizi iptal etmeniz veya değiştirmeniz gerekirse, lütfen mümkün olan en kısa sürede müşteri destek ekibimizle iletişime geçin. Tüm talepleri karşılayabileceğimizi garanti edemesek de, size yardımcı olmak için elimizden gelenin en iyisini yapacağız.", 
                "Müşteri destek ekibimize [e-posta veya telefon gibi iletişim yöntemlerini listeleyerek] ulaşabilirsiniz. Sorularınız, endişeleriniz veya sorularınız konusunda size yardımcı olmak için [çalışma saatlerini veya yanıt süresini belirtin] hizmetinizdeyiz.", 
                "Evet, ek bir ücret karşılığında hediye paketleme hizmeti sunuyoruz. Ödeme işlemi sırasında, hediye paketini seçme ve siparişinize kişiselleştirilmiş bir mesaj ekleme seçeneğine sahip olacaksınız. Hediyenizi özelleştirmek için verilen talimatları uygulamanız yeterlidir."
            ]
        }, 
        RU: {
            title: "РетроГалерея | Часто задаваемые вопросы (FAQ)", 
            questions: [
                "Как я могу разместить заказ?", 
                "Какие способы оплаты вы принимаете?", 
                "Сколько потребуется времени, чтобы получить мой заказ?", 
                "Вы отправляете на международном уровне?", 
                "Какова Ваша политика возврата?", 
                "Как мне отследить мой заказ?", 
                "Являются ли продукты на вашем сайте подлинными?", 
                "Могу ли я отменить или изменить свой заказ?", 
                "Как я могу связаться с вашей службой поддержки?", 
                "Вы предлагаете подарочную упаковку или персонализированные сообщения?"
            ],
            answers: [
                "Чтобы оформить заказ, просто перейдите на наш сайт и добавьте нужные товары в корзину. После завершения покупок перейдите на страницу оформления заказа, где вы сможете просмотреть свой заказ и предоставить необходимую информацию для доставки и оплаты. Наконец, нажмите кнопку «Разместить заказ», чтобы завершить покупку.", 
                "Мы принимаем [список доступных способов оплаты], включая кредитные карты, дебетовые карты и PayPal. Выберите наиболее удобный для вас способ оплаты в процессе оформления заказа.", 
                "Время доставки зависит от различных факторов, таких как место доставки и наличие товара. Мы стараемся обрабатывать и отправлять все заказы как можно быстрее. Как только ваш заказ будет отправлен, вы получите электронное письмо с подтверждением и информацией об отслеживании, чтобы отслеживать ход вашей посылки.", 
                "Да, мы предлагаем международную доставку. Однако обратите внимание, что международные заказы могут облагаться таможенными пошлинами, налогами или другими сборами, взимаемыми таможенными органами вашей страны. Эти дополнительные расходы являются обязанностью покупателя.", 
                "Мы хотим, чтобы вы были полностью удовлетворены своей покупкой. Если по какой-либо причине вы не удовлетворены, вы можете вернуть товар в течение [количество дней] дней с даты доставки. Пожалуйста, ознакомьтесь с нашей Политикой возврата для получения подробных инструкций о том, как инициировать возврат и критерии приемлемости.", 
                "Как только ваш заказ будет отправлен, мы предоставим вам номер для отслеживания по электронной почте. Вы можете использовать этот номер отслеживания для отслеживания статуса доставки вашей посылки. Просто посетите веб-сайт назначенной курьерской службы и введите номер для отслеживания в соответствующем поле, чтобы отследить свой заказ.", 
                "Да, мы гарантируем подлинность всех товаров, представленных на нашем сайте. Мы специализируемся на продаже подлинных антикварных предметов и тщательно контролируем наш инвентарь, чтобы гарантировать их подлинность.", 
                "Если вам нужно отменить или изменить свой заказ, пожалуйста, свяжитесь с нашей службой поддержки клиентов как можно скорее. Хотя мы не можем гарантировать, что сможем удовлетворить все запросы, мы сделаем все возможное, чтобы помочь вам.", 
                "Вы можете связаться с нашей службой поддержки клиентов с помощью [перечислите способы связи, такие как электронная почта или телефон]. Мы готовы [указать часы работы или время ответа], чтобы помочь вам с любыми вопросами, проблемами или запросами, которые могут у вас возникнуть.", 
                "Да, мы предлагаем услуги по упаковке подарков за дополнительную плату. В процессе оформления заказа у вас будет возможность выбрать подарочную упаковку и добавить персонализированное сообщение к вашему заказу. Просто следуйте инструкциям, чтобы настроить свой подарок."
            ]
        }
    }

    const [textDataBaseSTATE, setTextDataBaseSTATE] = useState(textDataBase.AZ)

    return (
        <>
            {/* <Header /> */}

            <div className="faq">
                <div className="faq__container">
                    <h3 className="faq__container--title"> {textDataBaseSTATE.title} </h3>

                    <div className="faq__container--group">
                        {
                            textDataBaseSTATE.questions.map(
                                (element, index) => {
                                    return (
                                        <p className="faq__container--group_questions" id={`q_${index}`} key={index} onClick={
                                            () => {
                                                var answer = document.getElementById(index)
                                                if(answer.style.height == "1px") {
                                                    answer.style.height = `100px`
                                                } else {
                                                    answer.style.height = `1px`
                                                }
                                            }
                                        }>
                                            {element}
                                            <div className="faq__container--group_questions-answers" id={index}>
                                                {textDataBaseSTATE.answers[index]}
                                            </div>
                                        </p>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    )
}

export default FAQ