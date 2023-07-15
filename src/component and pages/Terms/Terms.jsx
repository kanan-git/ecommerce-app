import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './Terms.css'
// import Header from '../Header/Header.jsx'
// import Footer from '../Footer/Footer.jsx'

function Terms() {

    const textDataBase = {
        AZ: {
            title: "RetroQalereya | Şərtlər və Qaydalar", 
            headers: [
                "Şərtlərin Qəbulu", 
                "Məhsullar və Xidmətlər", 
                "Sifariş və Ödəniş", 
                "Çatdırılma və Çatdırılma", 
                "Qaytarmalar və Geri Ödənişlər", 
                "Əqli Mülkiyyət", 
                "Məsuliyyət Məhdudiyyəti", 
                "İdarəetmə Qanunu və Yurisdiksiya", 
                "Qaydalar və Şərtlərə Dəyişikliklər"
            ], 
            paragraphs: [
                "[Veb saytınızın adı] xoş gəlmisiniz! Veb saytımızdan istifadə etməzdən əvvəl bu Qaydaları və Şərtləri diqqətlə oxuyun.", 
                "1.1 [Veb saytınızın adınız]-a daxil olmaq və ya istifadə etməklə, bütün müvafiq qanunlar və qaydalar da daxil olmaqla, bu Qaydalar və Şərtlərlə bağlı olmağa razılaşırsınız. Əgər bu şərtlərdən heç biri ilə razı deyilsinizsə, lütfən veb saytımızdan istifadə etməyin.", 
                "2.1 Məhsul siyahıları: Veb saytımızda mövcud olan məhsulları dəqiq göstərmək üçün hər cür səy göstəririk. Bununla belə, biz hər hansı məhsul təsvirlərinin, şəkillərinin və ya qiymətlərinin düzgünlüyünə, tamlığına və ya etibarlılığına zəmanət vermirik.", 
                "2.2 Məhsulun mövcudluğu: Bütün məhsullar mövcudluqdan asılıdır. Biz təklif etdiyimiz hər hansı məhsul və ya xidmətlərin miqdarını məhdudlaşdırmaq hüququnu özümüzdə saxlayırıq. Biz həmçinin əvvəlcədən xəbərdarlıq etmədən istənilən vaxt istənilən məhsulu dayandıra və ya dəyişdirə bilərik.", 
                "2.3 Qiymətləndirmə: Veb saytımızda qeyd olunan qiymətlər [valyuta] ilədir və hər hansı müvafiq vergilər, rüsumlar və ya göndərmə xərcləri istisnadır. İstənilən vaxt əvvəlcədən xəbərdarlıq etmədən məhsullarımızın qiymətlərini dəyişmək hüququmuzu özündə saxlayırıq.", 
                "3.1 Sifarişin yerləşdirilməsi: Veb saytımız vasitəsilə sifariş verməklə siz seçilmiş məhsulları almaq təklifini vermiş olursunuz. Bütün sifarişlər qəbula və mövcudluğa bağlıdır.", 
                "3.2 Ödəniş: Biz [qəbul edilən ödəniş üsullarının siyahısını] qəbul edirik. Sifariş verilərkən ödəniş tam ödənilməlidir. Biz şəxsi və maliyyə məlumatlarınızı qorumaq üçün təhlükəsiz ödəniş şlüzlərindən istifadə edirik.", 
                "4.1 Göndərmə: Biz bütün sifarişləri vaxtında emal etməyə və göndərməyə çalışırıq. Bununla belə, biz göndərmə və ya çatdırılma müddətinə zəmanət vermirik. Təqdim olunan hər hansı çatdırılma tarixləri təxminidir və zəmanətli çatdırılma tarixləri kimi qəbul edilməməlidir.", 
                "4.2 Çatdırılma ödənişləri: Göndərmə xərcləri ödəniş prosesi zamanı sifarişinizə əlavə olunacaq. Dəqiq çatdırılma dəyəri təyinat yerindən, paketin çəkisi və ölçülərindən asılı olacaq.", 
                "4.3 Beynəlxalq Sifarişlər: Beynəlxalq sifarişlər üçün, ölkənizin gömrük orqanları tərəfindən qoyula biləcək hər hansı gömrük rüsumlarına, vergilərə və ya digər ödənişlərə görə məsuliyyət daşıdığınızı nəzərə alın.", 
                "5.1 Qaytarma Siyasəti: Biz müəyyən şərtlərə uyğun olaraq, çatdırılma tarixindən etibarən [günlərin sayı] gün ərzində geri qaytarma qəbul edirik. Zəhmət olmasa, məhsulu necə qaytarmaq barədə ətraflı təlimatlar üçün ayrıca Qaytarma Siyasətimizə baxın.", 
                "5.2 Geri qaytarmalar: Hər hansı göndərmə xərcləri istisna olmaqla, geri qaytarmalar orijinal ödəniş formasında veriləcək. Lütfən, geri qaytarılmış məhsulu aldıqdan sonra geri qaytarılmanın işlənməsi üçün [günlərin sayına] icazə verin.", 
                "6.1 Mətn, qrafika, loqolar, şəkillər və proqram təminatı daxil olmaqla, lakin bununla məhdudlaşmayaraq vebsaytımızdakı bütün məzmun [Şirkətinizin adı]-nın mülkiyyətidir və müəllif hüquqları qanunları ilə qorunur. Siz bizim əvvəlcədən yazılı razılığımız olmadan hər hansı məzmunu çoxalda, yaymaq, dəyişdirmək və ya sata bilməzsiniz.", 
                "7.1 Qanunla icazə verilən maksimum dərəcədə [Şirkətinizin Adı] və onun filialları vebsaytımızdan, məhsullarımızdan və ya xidmətlərimizdən istifadə nəticəsində və ya onunla əlaqədar yaranan hər hansı birbaşa, dolayı, təsadüfi, ardıcıl və ya xüsusi zərərlərə görə məsuliyyət daşımırlar. .", 
                "8.1 Bu Qaydalar və Şərtlər [Ölkənizin] qanunları ilə tənzimlənir və onlara uyğun olaraq şərh edilir. Bu şərtlərdən irəli gələn və ya onlarla bağlı olan hər hansı mübahisələr [Sizin yurisdiksiyanızdakı] məhkəmələrin müstəsna yurisdiksiyasına tabedir.", 
                "9.1 Biz bu Qaydaları və Şərtləri istənilən vaxt əvvəlcədən xəbərdarlıq etmədən dəyişdirmək və ya yeniləmək hüququnu özümüzdə saxlayırıq. Dəyişikliklər üçün bu şərtləri vaxtaşırı nəzərdən keçirmək sizin məsuliyyətinizdir.", 
                "Bu Qaydalar və Şərtlərlə bağlı hər hansı sualınız və ya narahatlığınız varsa, [Əlaqə Məlumatınız] ünvanında bizimlə əlaqə saxlayın."
            ]
        }, 
        EN: {
            title: "RetroGallery | Terms & Conditions", 
            headers: [
                "Acceptance of Terms", 
                "Products and Services", 
                "Ordering and Payment", 
                "Shipping and Delivery", 
                "Returns and Refunds", 
                "Intellectual Property", 
                "Limitation of Liability", 
                "Governing Law and Jurisdiction", 
                "Changes to the Terms and Conditions"
            ], 
            paragraphs: [
                "Welcome to [Your Website Name]! Please read these Terms and Conditions carefully before using our website.", 
                "1.1 By accessing or using [Your Website Name], you agree to be bound by these Terms and Conditions, including all applicable laws and regulations. If you do not agree with any of these terms, please do not use our website.", 
                "2.1 Product Listings: We make every effort to accurately display the products available on our website. However, we do not guarantee the accuracy, completeness, or reliability of any product descriptions, images, or prices.", 
                "2.2 Product Availability: All products are subject to availability. We reserve the right to limit the quantities of any products or services we offer. We may also discontinue or modify any product at any time without prior notice.", 
                "2.3 Pricing: The prices listed on our website are in [currency] and are exclusive of any applicable taxes, duties, or shipping charges. We reserve the right to change the prices of our products at any time without prior notice.", 
                "3.1 Order Placement: By placing an order through our website, you are making an offer to purchase the selected products. All orders are subject to acceptance and availability.", 
                "3.2 Payment: We accept [list accepted payment methods]. Payment must be made in full at the time of placing an order. We use secure payment gateways to protect your personal and financial information.", 
                "4.1 Shipping: We strive to process and ship all orders in a timely manner. However, we do not guarantee shipping or delivery times. Any delivery dates provided are estimates and should not be considered as guaranteed delivery dates.", 
                "4.2 Shipping Charges: Shipping charges will be added to your order during the checkout process. The exact shipping cost will depend on the destination and the weight and dimensions of the package.", 
                "4.3 International Orders: For international orders, please note that you are responsible for any customs duties, taxes, or other fees that may be imposed by your country's customs authorities.", 
                "5.1 Return Policy: We accept returns within [number of days] days from the date of delivery, subject to certain conditions. Please refer to our separate Return Policy for detailed instructions on how to return a product.", 
                "5.2 Refunds: Refunds will be issued in the original form of payment, excluding any shipping charges. Please allow [number of days] for the refund to be processed after we have received the returned product.", 
                "6.1 All content on our website, including but not limited to text, graphics, logos, images, and software, is the property of [Your Company Name] and is protected by copyright laws. You may not reproduce, distribute, modify, or sell any of the content without our prior written consent.", 
                "7.1 To the maximum extent permitted by law, [Your Company Name] and its affiliates shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with the use of our website, products, or services.", 
                "8.1 These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Country]. Any disputes arising from or related to these terms shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].", 
                "9.1 We reserve the right to modify or update these Terms and Conditions at any time without prior notice. It is your responsibility to review these terms periodically for any changes.", 
                "If you have any questions or concerns regarding these Terms and Conditions, please contact us at [Your Contact Information]."
            ]
        }, 
        TR: {
            title: "RetroGaleri | Şartlar ve Koşullar", 
            headers: [
                "Şartların Kabulü", 
                "Ürünler ve Servisler", 
                "Sipariş ve Ödeme", 
                "Nakliye ve Teslimat", 
                "İade ve Geri Ödemeler", 
                "Fikri Mülkiyet", 
                "Sorumluluğun Sınırlandırılması", 
                "Geçerli Yasa ve Yargı Yetkisi", 
                "Şartlar ve Koşullardaki Değişiklikler"
            ], 
            paragraphs: [
                "[Web Sitenizin Adı]'na Hoş Geldiniz! Web sitemizi kullanmadan önce lütfen bu Hüküm ve Koşulları dikkatlice okuyun.", 
                "1.1 [Web Sitenizin Adı]'na erişerek veya bunu kullanarak, yürürlükteki tüm yasa ve yönetmelikler dahil olmak üzere bu Hüküm ve Koşullara tabi olmayı kabul edersiniz. Bu şartların herhangi birini kabul etmiyorsanız, lütfen web sitemizi kullanmayın.", 
                "2.1 Ürün Listelemeleri: Web sitemizde bulunan ürünleri doğru bir şekilde görüntülemek için her türlü çabayı gösteriyoruz. Ancak, herhangi bir ürün açıklamasının, görselinin veya fiyatının doğruluğunu, eksiksizliğini veya güvenilirliğini garanti etmiyoruz.", 
                "2.2 Ürün Durumu: Tüm ürünler stok durumuna bağlıdır. Sunduğumuz herhangi bir ürün veya hizmetin miktarını sınırlama hakkını saklı tutarız. Ayrıca herhangi bir ürünü herhangi bir zamanda önceden haber vermeksizin durdurabilir veya değiştirebiliriz.", 
                "2.3 Fiyatlandırma: Web sitemizde listelenen fiyatlar [para birimi] cinsindendir ve geçerli vergiler, harçlar veya nakliye ücretleri hariçtir. Ürünlerimizin fiyatlarını herhangi bir zamanda önceden haber vermeksizin değiştirme hakkımız saklıdır.", 
                "3.1 Sipariş Verme: Web sitemiz aracılığıyla sipariş vererek, seçilen ürünleri satın almak için bir teklifte bulunuyorsunuz. Tüm siparişler kabul ve müsaitlik durumuna bağlıdır.", 
                "3.2 Ödeme: [Kabul edilen ödeme yöntemlerini listele] kabul ediyoruz. Ödeme, sipariş verilirken tam olarak yapılmalıdır. Kişisel ve finansal bilgilerinizi korumak için güvenli ödeme ağ geçitleri kullanıyoruz.", 
                "4.1 Nakliye: Tüm siparişleri zamanında işleme koymaya ve göndermeye çalışıyoruz. Ancak nakliye veya teslimat sürelerini garanti etmiyoruz. Sağlanan teslimat tarihleri tahminidir ve garantili teslimat tarihleri olarak kabul edilmemelidir.", 
                "4.2 Kargo Ücretleri: Ödeme işlemi sırasında siparişinize kargo ücretleri eklenecektir. Kesin nakliye maliyeti, varış yerine ve paketin ağırlığına ve boyutlarına bağlı olacaktır.", 
                "4.3 Uluslararası Siparişler: Uluslararası siparişler için, ülkenizin gümrük makamları tarafından uygulanabilecek gümrük vergileri, vergiler veya diğer ücretlerden sorumlu olduğunuzu lütfen unutmayın.", 
                "5.1 İade Politikası: Belirli koşullara bağlı olarak, teslimat tarihinden itibaren [gün sayısı] gün içinde iade kabul ediyoruz. Bir ürünün nasıl iade edileceğine ilişkin ayrıntılı talimatlar için lütfen ayrı İade Politikamıza bakın.", 
                "5.2 Geri ödemeler: Geri ödemeler, herhangi bir nakliye ücreti hariç, orijinal ödeme yöntemiyle yapılacaktır. Lütfen iade edilen ürünü aldıktan sonra geri ödemenin işlenmesi için [gün sayısı] bekleyin.", 
                "6.1 Web sitemizdeki metin, grafik, logo, resim ve yazılım dahil ancak bunlarla sınırlı olmamak üzere tüm içerik [Şirketinizin Adı] mülkiyetindedir ve telif hakkı yasalarıyla korunmaktadır. Önceden yazılı iznimiz olmadan hiçbir içeriği çoğaltamaz, dağıtamaz, değiştiremez veya satamazsınız.", 
                "7.1 Yasaların izin verdiği azami ölçüde, [Şirketinizin Adı] ve bağlı kuruluşları, web sitemizin, ürünlerimizin veya hizmetlerimizin kullanımından kaynaklanan veya bunlarla bağlantılı olarak ortaya çıkan doğrudan, dolaylı, tesadüfi, sonuç olarak ortaya çıkan veya özel zararlardan sorumlu tutulamaz. .", 
                "8.1 Bu Hüküm ve Koşullar [Ülkenizin] yasalarına tabi olacak ve bu yasalara göre yorumlanacaktır. Bu şartlardan kaynaklanan veya bunlarla ilgili herhangi bir ihtilaf, [Sizin Yetki Alanınız] mahkemelerinin münhasır yargı yetkisine tabi olacaktır.", 
                "9.1 Bu Hüküm ve Koşulları herhangi bir zamanda önceden haber vermeksizin değiştirme veya güncelleme hakkını saklı tutarız. Herhangi bir değişiklik için bu şartları periyodik olarak gözden geçirmek sizin sorumluluğunuzdadır.", 
                "Bu Hüküm ve Koşullarla ilgili herhangi bir sorunuz veya endişeniz varsa, lütfen [İletişim Bilgileriniz] adresinden bizimle iletişime geçin."
            ]
        }, 
        RU: {
            title: "РетроГалерея | Условия и Положения", 
            headers: [
                "Принятие Условий", 
                "Продукты и Услуги", 
                "Заказ и Оплата", 
                "Доставка и Доставка", 
                "Возвраты и Возмещения", 
                "Интеллектуальная Собственность", 
                "Ограничение Ответственности", 
                "Регулирующее Законодательство и Юрисдикция", 
                "Изменения в Условиях"
            ], 
            paragraphs: [
                "Добро пожаловать на [имя вашего веб-сайта]! Пожалуйста, внимательно ознакомьтесь с настоящими Условиями перед использованием нашего веб-сайта.", 
                "1.1 Получая доступ или используя [Имя вашего веб-сайта], вы соглашаетесь соблюдать настоящие Условия и положения, включая все применимые законы и правила. Если вы не согласны с каким-либо из этих условий, пожалуйста, не используйте наш веб-сайт.", 
                "2.1 Списки продуктов: мы прилагаем все усилия, чтобы точно отображать продукты, доступные на нашем веб-сайте. Однако мы не гарантируем точность, полноту или надежность любых описаний продуктов, изображений или цен.", 
                "2.2 Наличие продукта: Все продукты зависят от наличия. Мы оставляем за собой право ограничивать количество любых продуктов или услуг, которые мы предлагаем. Мы также можем прекратить или изменить любой продукт в любое время без предварительного уведомления.", 
                "2.3 Цены: цены, указанные на нашем веб-сайте, указаны в [валюте] и не включают любые применимые налоги, пошлины или стоимость доставки. Мы оставляем за собой право изменять цены на нашу продукцию в любое время без предварительного уведомления.", 
                "3.1 Размещение заказа: размещая заказ через наш веб-сайт, вы делаете предложение о покупке выбранных товаров. Все заказы подлежат принятию и доступности.", 
                "3.2 Оплата: Мы принимаем [список доступных способов оплаты]. Оплата должна быть произведена в полном объеме в момент оформления заказа. Мы используем безопасные платежные шлюзы для защиты вашей личной и финансовой информации.", 
                "4.1 Доставка: Мы стремимся своевременно обрабатывать и отправлять все заказы. Однако мы не гарантируем отгрузку или сроки доставки. Любые указанные даты доставки являются ориентировочными и не должны рассматриваться как гарантированные даты доставки.", 
                "4.2 Стоимость доставки: стоимость доставки будет добавлена к вашему заказу в процессе оформления заказа. Точная стоимость доставки будет зависеть от пункта назначения, веса и габаритов посылки.", 
                "4.3 Международные заказы: Обратите внимание, что для международных заказов вы несете ответственность за любые таможенные пошлины, налоги или другие сборы, которые могут быть наложены таможенными органами вашей страны.", 
                "5.1 Политика возврата: мы принимаем возврат в течение [количество дней] дней с даты доставки при соблюдении определенных условий. Пожалуйста, ознакомьтесь с нашей отдельной Политикой возврата для получения подробных инструкций о том, как вернуть продукт.", 
                "5.2 Возвраты: Возвраты будут произведены в первоначальной форме оплаты, исключая любые расходы по доставке. Пожалуйста, подождите [количество дней] для обработки возврата после того, как мы получим возвращенный продукт.", 
                "6.1 Весь контент на нашем веб-сайте, включая, помимо прочего, текст, графику, логотипы, изображения и программное обеспечение, является собственностью [название вашей компании] и защищен законами об авторских правах. Вы не можете воспроизводить, распространять, изменять или продавать любой контент без нашего предварительного письменного согласия.", 
                "7.1 В максимальной степени, разрешенной законом, [Название вашей компании] и ее аффилированные лица не несут ответственности за любые прямые, косвенные, случайные, косвенные или особые убытки, возникающие в результате или в связи с использованием нашего веб-сайта, продуктов или услуг. .", 
                "8.1 Настоящие Положения и условия регулируются и толкуются в соответствии с законами [Вашей страны]. Любые споры, вытекающие из настоящих условий или связанные с ними, подлежат исключительной юрисдикции судов в [Вашей юрисдикции].", 
                "9.1 Мы оставляем за собой право изменять или обновлять настоящие Условия в любое время без предварительного уведомления. Вы обязаны периодически просматривать эти условия на предмет любых изменений.", 
                "Если у вас есть какие-либо вопросы или опасения относительно настоящих Условий и положений, свяжитесь с нами по адресу [Ваша контактная информация]."
            ]
        }
    }

    const [textDataBaseSTATE, setTextDataBaseSTATE] = useState(textDataBase.AZ)

    return (
        <>
            {/* <Header /> */}

            <div className="terms">
                <div className="terms__container">
                    <h1 className="terms__container--title">
                        {textDataBaseSTATE.title}
                    </h1>
                    {/* -------------------------------------- */}
                    <p className="terms__container--paragraph">
                        {textDataBaseSTATE.paragraphs[0]}
                    </p>
                    {/* -------------------------------------- */}
                    <h3 className="terms__container--headers">
                        <div className="terms__container--headers_order"> 1 </div>
                        {textDataBaseSTATE.headers[0]}
                    </h3>
                    <p className="terms__container--paragraph">
                        {textDataBaseSTATE.paragraphs[1]}
                    </p>
                    {/* -------------------------------------- */}
                    <h3 className="terms__container--headers">
                        <div className="terms__container--headers_order"> 2 </div>
                        {textDataBaseSTATE.headers[1]}
                    </h3>
                    <p className="terms__container--paragraph">
                        {textDataBaseSTATE.paragraphs[2]}
                    </p>
                    <p className="terms__container--paragraph">
                        {textDataBaseSTATE.paragraphs[3]}
                    </p>
                    <p className="terms__container--paragraph">
                        {textDataBaseSTATE.paragraphs[4]}
                    </p>
                    {/* -------------------------------------- */}
                    <h3 className="terms__container--headers">
                        <div className="terms__container--headers_order"> 3 </div>
                        {textDataBaseSTATE.headers[2]}
                    </h3>
                    <p className="terms__container--paragraph">
                        {textDataBaseSTATE.paragraphs[5]}
                    </p>
                    <p className="terms__container--paragraph">
                        {textDataBaseSTATE.paragraphs[6]}
                    </p>
                    {/* -------------------------------------- */}
                    <h3 className="terms__container--headers">
                        <div className="terms__container--headers_order"> 4 </div>
                        {textDataBaseSTATE.headers[3]}
                    </h3>
                    <p className="terms__container--paragraph">
                        {textDataBaseSTATE.paragraphs[7]}
                    </p>
                    <p className="terms__container--paragraph">
                        {textDataBaseSTATE.paragraphs[8]}
                    </p>
                    <p className="terms__container--paragraph">
                        {textDataBaseSTATE.paragraphs[9]}
                    </p>
                    {/* -------------------------------------- */}
                    <h3 className="terms__container--headers">
                        <div className="terms__container--headers_order"> 5 </div>
                        {textDataBaseSTATE.headers[4]}
                    </h3>
                    <p className="terms__container--paragraph">
                        {textDataBaseSTATE.paragraphs[10]}
                    </p>
                    <p className="terms__container--paragraph">
                        {textDataBaseSTATE.paragraphs[11]}
                    </p>
                    {/* -------------------------------------- */}
                    <h3 className="terms__container--headers">
                        <div className="terms__container--headers_order"> 6 </div>
                        {textDataBaseSTATE.headers[5]}
                    </h3>
                    <p className="terms__container--paragraph">
                        {textDataBaseSTATE.paragraphs[12]}
                    </p>
                    {/* -------------------------------------- */}
                    <h3 className="terms__container--headers">
                        <div className="terms__container--headers_order"> 7 </div>
                        {textDataBaseSTATE.headers[6]}
                    </h3>
                    <p className="terms__container--paragraph">
                        {textDataBaseSTATE.paragraphs[13]}
                    </p>
                    {/* -------------------------------------- */}
                    <h3 className="terms__container--headers">
                        <div className="terms__container--headers_order"> 8 </div>
                        {textDataBaseSTATE.headers[7]}
                    </h3>
                    <p className="terms__container--paragraph">
                        {textDataBaseSTATE.paragraphs[14]}
                    </p>
                    {/* -------------------------------------- */}
                    <h3 className="terms__container--headers">
                        <div className="terms__container--headers_order"> 9 </div>
                        {textDataBaseSTATE.headers[8]}
                    </h3>
                    <p className="terms__container--paragraph">
                        {textDataBaseSTATE.paragraphs[15]}
                    </p>
                    {/* -------------------------------------- */}
                    <p className="terms__container--paragraph">
                        {textDataBaseSTATE.paragraphs[16]}
                    </p>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    )
}

export default Terms