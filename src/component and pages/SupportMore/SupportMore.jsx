import React, {useState, useEffect, useRef, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './SupportMore.css'
// import Header from '../Header/Header.jsx'
// import Footer from '../Footer/Footer.jsx'

function SupportMore() {
    window.scrollTo(0, 0)
    
    const textDataBase = {
        AZ: {
            menus: [
                "ləğv, geri qaytarma, dəyişdirmə", // 0
                "göndərmə və çatdırılma", // 1
                "məhsul və mağaza", // 2
                "ödəniş", // 3
                "ödəniş təlimatı", // 4
                "üzvlük" // 5
            ],
            text_contents_m0: [
                "RetroGallery-də biz sizə qüsursuz alış-veriş təcrübəsi təqdim etməyə çalışırıq. Biz başa düşürük ki, şərtlər dəyişə bilər və bəzən sifarişi ləğv etməli, pulun geri qaytarılmasını tələb etməli və ya alışınızda dəyişiklik etməli ola bilərsiniz. Məmnun olmanızı təmin etmək üçün, lütfən, aşağıdakı ləğv, geri qaytarma və dəyişiklik siyasətlərimizi nəzərdən keçirin:", 
                "Ləğv: Sifarişinizi ləğv etmək istəyirsinizsə, sifariş verdikdən sonra 24 saat ərzində müştəri dəstək komandamızla əlaqə saxlayın. İstəyinizi yerinə yetirmək üçün əlimizdən gələni edəcəyik.", 
                "Pulun qaytarılması: Əgər satın aldığınızdan tam razı qalmadığınız halda, geri qaytarma siyasəti təklif edirik. Uyğunluq və geri qaytarma prosesi haqqında ətraflı məlumat üçün Qaytarma Siyasəti bölməmizə müraciət edin.", 
                "Dəyişiklik: Sifarişinizdə göndərmə ünvanını dəyişdirmək və ya məhsul variantını yeniləmək kimi dəyişikliklər etmək lazımdırsa, mümkün qədər tez müştəri dəstəyi komandamızla əlaqə saxlayın. Sifarişin vəziyyətindən asılı olaraq lazımi dəyişiklikləri etməkdə sizə kömək edəcəyik.", 
                "Ləğv etmə, geri qaytarma və dəyişiklik siyasətlərimizlə bağlı daha ətraflı məlumat üçün dəstək səhifəmizin müvafiq bölməsinə daxil olun.", 
                "", 
                ""
            ],
            text_contents_m1: [
                "RetroGallery-də biz vintage və antikvar xəzinələrinizin sizə təhlükəsiz və operativ şəkildə çatmasını təmin etmək istəyirik. Alış-veriş təcrübənizi mümkün qədər rahat etmək üçün etibarlı göndərmə və çatdırılma xidmətləri təklif edirik. Bilməli olduğunuz şey budur:", 
                "Göndərmə üsulları: Sifarişlərinizi təhlükəsiz şəkildə çatdırmaq üçün etibarlı göndərmə təminatçıları ilə əməkdaşlıq edirik. Mövcud göndərmə üsulları, təxmini çatdırılma müddətləri və əlaqəli xərclər ödəniş prosesi zamanı göstəriləcək.", 
                "Sifariş İzləmə: Sifarişiniz göndərildikdən sonra sizə izləmə nömrəsi təqdim edəcəyik. Siz bu nömrədən göndərişinizin vəziyyətini izləmək və onun harada olduğu barədə real vaxt yeniləmələri almaq üçün istifadə edə bilərsiniz.", 
                "Beynəlxalq Göndərmə: Biz RetroGallery-nin unikal məhsullarını dünya üzrə müştərilərə çatdırmaq üçün beynəlxalq göndərmə təklif edirik. Nəzərə alın ki, ölkənizin qaydalarına əsasən əlavə gömrük rüsumları və ya vergilər tətbiq oluna bilər. Müvafiq ödənişlər alıcının üzərinə düşür.", 
                "Qablaşdırma: Tranzit zamanı onların yaxşı mühafizəsini təmin etmək üçün üzüm və antik əşyalarınızın qablaşdırılmasına çox diqqət yetiririk. Hər bir maddə vəziyyətini qorumaq üçün diqqətlə büküləcəkdir.", 
                "Göndərmə və çatdırılma xidmətlərimizlə bağlı daha ətraflı məlumat üçün dəstək səhifəmizin müvafiq bölməsinə daxil olun.", 
                ""
            ],
            text_contents_m2: [
                "Nəfis vintage və antik məhsullar üçün son təyinat yeriniz olan RetroGallery-ə xoş gəlmisiniz. Biz hər birinin özünəməxsus hekayəsi olan, ebedi parçalardan ibarət müxtəlif kolleksiyanı tərtib etməkdən qürur duyuruq. Məhsulumuz və mağazamızdan gözləyə biləcəyiniz şeylər bunlardır:", 
                "Məhsulun Keyfiyyəti: Biz kolleksiyamızdakı hər bir elementin orijinallığını, keyfiyyətini və cazibəsini təmin etmək üçün diqqətlə əldə edirik və yoxlayırıq. Biz dəqiq məhsul təsvirləri və yüksək keyfiyyətli şəkillər təqdim etməyə çalışırıq ki, siz məlumatlı alış qərarı verə biləsiniz.", 
                "Məhsul Varyasyonları: Üzüm və antik əşyalarımızın bir çoxu unikaldır, yəni onların rəng, faktura və ya dizaynda cüzi dəyişikliklər ola bilər. Bu xüsusiyyətlər onların orijinallığını və cazibəsini artırır.", 
                "Mağaza Siyasətləri: RetroGallery-də həm alıcıları, həm də satıcıları qorumaq üçün siyasətlərimiz var. Qaydalarımızı və öhdəliklərimizi tam başa düşmək üçün Qaydalar və Şərtlərimizi, Məxfilik Siyasətimizi və digər müvafiq siyasətlərimizi nəzərdən keçirməyi tövsiyə edirik.", 
                "Məhsullarımız, mağaza siyasətlərimiz və tez-tez verilən suallarla bağlı daha ətraflı məlumat üçün dəstək səhifəmizin müvafiq bölməsinə daxil olun.", 
                "", 
                ""
            ],
            text_contents_m3: [
                "RetroGallery-də alış-veriş təcrübənizi əngəlsiz etmək üçün təhlükəsiz və rahat ödəniş variantları təklif edirik. Şəxsi və maliyyə məlumatlarınızın təhlükəsizliyinə üstünlük veririk. Ödəniş haqqında bilməli olduğunuz şey budur:", 
                "Qəbul edilən Ödəniş Metodları: Onlayn alışlar üçün əsas kredit kartlarını, debet kartlarını və PayPal-ı qəbul edirik. Ödəniş prosesi zamanı sizə ən uyğun olan ödəniş üsulunu seçə biləcəksiniz.", 
                "Təhlükəsiz Əməliyyatlar: Ödəniş məlumatlarınızı qorumaq üçün sənaye standartlı şifrələmə və təhlükəsizlik protokollarından istifadə edirik. Maliyyə məlumatlarınız təhlükəsiz şəkildə ötürülür və heç vaxt üçüncü tərəflərlə paylaşılmayacaq.", 
                "Valyuta: Veb saytımızdakı bütün qiymətlər sizin yerli valyutanızda verilmişdir. Əgər beynəlxalq müştərisinizsə, son ödəniş məbləği bankınız və ya ödəniş provayderiniz tərəfindən müəyyən edilmiş konvertasiya dərəcələrinə tabe ola bilər.", 
                "Ödəniş seçimləri və təhlükəsizliklə bağlı daha ətraflı məlumat üçün dəstək səhifəmizdəki müvafiq bölməyə daxil olun.", 
                "", 
                ""
            ],
            text_contents_m4: [
                "Rahat ödəniş prosesini təmin etmək üçün biz sizin rahatlığınız üçün addım-addım ödəniş təlimatını hazırlamışıq. İstər yeni müştərisiniz, istərsə də təkmilləşdirməyə ehtiyacınız olsun, bu bələdçi sizi RetroGallery-də ödəniş prosesi ilə tanış edəcək. Zəhmət olmasa, hərtərəfli təlimatlara və faydalı məsləhətlərə daxil olmaq üçün dəstək səhifəmizdəki Ödəniş Bələdçisi bölməsinə daxil olun.", 
                "", 
                "", 
                "", 
                "", 
                "", 
                ""
            ],
            text_contents_m5: [
                "RetroGallery-də dəstəyinizi qiymətləndiririk və alış-veriş təcrübənizi artırmaq üçün üzvlük proqramı təklif edirik. RetroGallery üzvü olmaqla siz eksklüziv üstünlüklərdən yararlana bilərsiniz, məsələn:", 
                "Yeni gələnlərə və məhdud buraxılış əşyalarına erkən giriş.", 
                "Xüsusi endirimlər və promosyonlar yalnız üzvlər üçün mövcuddur.", 
                "Tercihlərinizə və alış tarixçəsinə əsaslanan fərdi tövsiyələr.", 
                "Saxlanmış göndərmə və ödəniş məlumatı ilə daha sürətli ödəniş.", 
                "Üzvlük proqramımız və necə qoşulmaq barədə ətraflı məlumat almaq üçün dəstək səhifəmizdəki müvafiq bölməyə daxil olun.", 
                "Ümid edirik ki, bu məlumat RetroGallery-nin dəstək səhifəsi ilə bağlı müxtəlif mövzuları aydın şəkildə başa düşməyə imkan verəcək. Əlavə sualınız olarsa və ya yardıma ehtiyacınız olarsa, xüsusi müştəri dəstəyi komandamız həmişə kömək etmək üçün buradadır. RetroGallery-də xoş alış-veriş!"
            ]
        },
        EN: {
            menus: [
                "cancellation, refund, change", 
                "shipping and delivery", 
                "product and store", 
                "payment", 
                "payment guide", 
                "membership"
            ],
            text_contents_m0: [
                "At RetroGallery, we strive to provide you with a seamless shopping experience. We understand that circumstances may change, and sometimes you may need to cancel an order, request a refund, or make changes to your purchase. To ensure your satisfaction, please review our cancellation, refund, and change policies below:", 
                "Cancellation: If you wish to cancel your order, please reach out to our customer support team within 24 hours of placing the order. We will do our best to accommodate your request.", 
                "Refund: In case you are not completely satisfied with your purchase, we offer a refund policy. Please refer to our Refund Policy section for detailed information on eligibility and the refund process.", 
                "Change: If you need to make changes to your order, such as modifying the shipping address or updating the item variant, please contact our customer support team as soon as possible. We will assist you in making the necessary changes, depending on the order status.", 
                "For more detailed information regarding our cancellation, refund, and change policies, please visit the corresponding section on our support page.", 
                "", 
                ""
            ],
            text_contents_m1: [
                "At RetroGallery, we want to ensure that your vintage and antique treasures reach you safely and promptly. We offer reliable shipping and delivery services to make your shopping experience as convenient as possible. Here's what you need to know:", 
                "Shipping Methods: We partner with trusted shipping providers to deliver your orders securely. The available shipping methods, estimated delivery times, and associated costs will be displayed during the checkout process.", 
                "Order Tracking: Once your order is shipped, we will provide you with a tracking number. You can use this number to track the status of your shipment and get real-time updates on its whereabouts.", 
                "International Shipping: We offer international shipping to bring RetroGallery's unique products to customers worldwide. Please note that additional customs duties or taxes may apply depending on your country's regulations. Any applicable fees are the responsibility of the buyer.", 
                "Packaging: We take great care in packaging your vintage and antique items to ensure they are well-protected during transit. Each item will be meticulously wrapped to safeguard its condition.", 
                "For more detailed information regarding our shipping and delivery services, please visit the corresponding section on our support page.", 
                ""
            ],
            text_contents_m2: [
                "Welcome to RetroGallery, your ultimate destination for exquisite vintage and antique products. We take pride in curating a diverse collection of timeless pieces, each with its own unique story. Here's what you can expect from our product and store:", 
                "Product Quality: We meticulously source and inspect each item in our collection to ensure its authenticity, quality, and charm. We strive to provide accurate product descriptions and high-resolution images so that you can make an informed purchase decision.", 
                "Product Variations: Many of our vintage and antique items are one-of-a-kind, which means they may have slight variations in color, texture, or design. These characteristics add to their authenticity and allure.", 
                "Store Policies: At RetroGallery, we have policies in place to protect both buyers and sellers. We encourage you to review our Terms and Conditions, Privacy Policy, and other relevant policies to have a complete understanding of our guidelines and commitments.", 
                "For more detailed information regarding our products, store policies, and frequently asked questions, please visit the corresponding section on our support page.", 
                "", 
                ""
            ],
            text_contents_m3: [
                "At RetroGallery, we offer secure and convenient payment options to make your shopping experience hassle-free. We prioritize the safety of your personal and financial information. Here's what you need to know about payment:", 
                "Accepted Payment Methods: We accept major credit cards, debit cards, and PayPal for online purchases. During the checkout process, you will be able to choose the payment method that suits you best.", 
                "Secure Transactions: We utilize industry-standard encryption and security protocols to safeguard your payment details. Your financial information is transmitted securely and will never be shared with third parties.", 
                "Currency: All prices on our website are listed in your local currency. If you are an international customer, the final checkout total may be subject to conversion rates set by your bank or payment provider.", 
                "For more detailed information regarding payment options and security, please visit the corresponding section on our support page.", 
                "", 
                ""
            ],
            text_contents_m4: [
                "To ensure a smooth payment process, we have put together a step-by-step payment guide for your convenience. Whether you are a new customer or need a refresher, this guide will walk you through the payment process at RetroGallery. Please visit the Payment Guide section on our support page to access the comprehensive instructions and helpful tips.", 
                "", 
                "", 
                "", 
                "", 
                "", 
                ""
            ],
            text_contents_m5: [
                "At RetroGallery, we appreciate your support and offer a membership program to enhance your shopping experience. By becoming a RetroGallery member, you can enjoy exclusive benefits, such as:", 
                "Early access to new arrivals and limited edition items.", 
                "Special discounts and promotions available only to members.", 
                "Personalized recommendations based on your preferences and purchase history.", 
                "Faster checkout with saved shipping and payment information.", 
                "To learn more about our membership program and how to join, please visit the corresponding section on our support page.", 
                "We hope this information provides a clear understanding of the various topics related to RetroGallery's support page. Should you have any further questions or require assistance, our dedicated customer support team is always here to help. Happy shopping at RetroGallery!"
            ]
        },
        TR: {
            menus: [
                "iptal, iade, değişim", 
                "kargo ve teslimat", 
                "ürün ve mağaza", 
                "ödeme", 
                "ödeme rehberi", 
                "üyelik"
            ],
            text_contents_m0: [
                "RetroGallery'de size sorunsuz bir alışveriş deneyimi sunmak için çalışıyoruz. Koşulların değişebileceğini anlıyoruz ve bazen bir siparişi iptal etmeniz, para iadesi talep etmeniz veya satın alma işleminizde değişiklik yapmanız gerekebilir. Memnuniyetinizi sağlamak için lütfen aşağıdaki iptal, iade ve değişiklik politikalarımızı inceleyin:", 
                "İptal: Siparişinizi iptal etmek isterseniz, lütfen siparişi verdikten sonraki 24 saat içinde müşteri destek ekibimizle iletişime geçin. Talebinizi karşılamak için elimizden gelenin en iyisini yapacağız.", 
                "Geri Ödeme: Satın alma işleminizden tamamen memnun kalmamanız durumunda, bir geri ödeme politikası sunuyoruz. Uygunluk ve geri ödeme süreci hakkında ayrıntılı bilgi için lütfen Geri Ödeme Politikası bölümümüze bakın.", 
                "Değişiklik: Siparişinizde teslimat adresini değiştirmek veya ürün varyantını güncellemek gibi değişiklikler yapmanız gerekirse, lütfen en kısa sürede müşteri destek ekibimizle iletişime geçin. Sipariş durumuna göre gerekli değişiklikleri yapmanızda size yardımcı olacağız.", 
                "İptal, iade ve değişiklik politikalarımız hakkında daha detaylı bilgi için lütfen destek sayfamızda ilgili bölümü ziyaret edin.", 
                "", 
                ""
            ],
            text_contents_m1: [
                "RetroGallery'de eski ve antika hazinelerinizin size güvenli ve hızlı bir şekilde ulaşmasını sağlamak istiyoruz. Alışveriş deneyiminizi olabildiğince kolaylaştırmak için güvenilir nakliye ve teslimat hizmetleri sunuyoruz. İşte bilmeniz gerekenler:", 
                "Nakliye Yöntemleri: Siparişlerinizi güvenli bir şekilde teslim etmek için güvenilir nakliye sağlayıcılarıyla ortaklık yapıyoruz. Mevcut nakliye yöntemleri, tahmini teslimat süreleri ve ilgili maliyetler, ödeme işlemi sırasında görüntülenecektir.", 
                "Sipariş Takibi: Siparişiniz kargoya verildikten sonra size bir takip numarası vereceğiz. Gönderinizin durumunu takip etmek ve nerede olduğu hakkında gerçek zamanlı güncellemeler almak için bu numarayı kullanabilirsiniz.", 
                "Uluslararası Nakliye: RetroGallery'nin benzersiz ürünlerini dünya çapındaki müşterilere ulaştırmak için uluslararası nakliye hizmeti sunuyoruz. Ülkenizin düzenlemelerine bağlı olarak ek gümrük vergileri veya vergilerin geçerli olabileceğini lütfen unutmayın. Geçerli tüm ücretler alıcının sorumluluğundadır.", 
                "Paketleme: Taşıma sırasında iyi korunmalarını sağlamak için eski ve antika eşyalarınızı paketlerken büyük özen gösteriyoruz. Her öğe, durumunu korumak için titizlikle sarılacaktır.", 
                "Nakliye ve teslimat hizmetlerimizle ilgili daha ayrıntılı bilgi için lütfen destek sayfamızda ilgili bölümü ziyaret edin.", 
                ""
            ],
            text_contents_m2: [
                "Enfes vintage ve antika ürünler için nihai varış noktanız olan RetroGallery'ye hoş geldiniz. Her biri kendi benzersiz hikayesine sahip, zamansız parçalardan oluşan çeşitli bir koleksiyonun küratörlüğünü yapmaktan gurur duyuyoruz. Ürünümüzden ve mağazamızdan bekleyebilecekleriniz:", 
                "Ürün Kalitesi: Orijinalliğini, kalitesini ve çekiciliğini sağlamak için koleksiyonumuzdaki her bir ürünü titizlikle tedarik ediyor ve inceliyoruz. Bilinçli bir satın alma kararı verebilmeniz için doğru ürün açıklamaları ve yüksek çözünürlüklü görseller sağlamaya çalışıyoruz.", 
                "Ürün Varyasyonları: Eski ve antika ürünlerimizin birçoğu türünün tek örneğidir, bu da renk, doku veya tasarım açısından küçük farklılıklar gösterebilecekleri anlamına gelir. Bu özellikler, özgünlüklerine ve çekiciliklerine katkıda bulunur.", 
                "Mağaza Politikaları: RetroGallery'de hem alıcıları hem de satıcıları korumak için yürürlükte olan politikalarımız vardır. Kurallarımızı ve taahhütlerimizi tam olarak anlamanız için Şartlar ve Koşullarımızı, Gizlilik Politikamızı ve diğer ilgili politikalarımızı incelemenizi öneririz.", 
                "Ürünlerimiz, mağaza politikalarımız ve sık sorulan sorular hakkında daha ayrıntılı bilgi için lütfen destek sayfamızda ilgili bölümü ziyaret edin.", 
                "", 
                ""
            ],
            text_contents_m3: [
                "RetroGallery'de alışveriş deneyiminizi sorunsuz hale getirmek için güvenli ve uygun ödeme seçenekleri sunuyoruz. Kişisel ve finansal bilgilerinizin güvenliğine öncelik veriyoruz. İşte ödeme hakkında bilmeniz gerekenler:", 
                "Kabul Edilen Ödeme Yöntemleri: Çevrimiçi satın alımlar için başlıca kredi kartlarını, banka kartlarını ve PayPal'ı kabul ediyoruz. Ödeme işlemi sırasında size en uygun ödeme yöntemini seçebileceksiniz.", 
                "Güvenli İşlemler: Ödeme ayrıntılarınızı korumak için endüstri standardı şifreleme ve güvenlik protokolleri kullanıyoruz. Finansal bilgileriniz güvenli bir şekilde iletilir ve asla üçüncü şahıslarla paylaşılmaz.", 
                "Para Birimi: Web sitemizdeki tüm fiyatlar yerel para biriminizde listelenmiştir. Uluslararası bir müşteriyseniz, son ödeme tutarı, bankanız veya ödeme sağlayıcınız tarafından belirlenen dönüştürme oranlarına tabi olabilir.", 
                "Ödeme seçenekleri ve güvenlikle ilgili daha ayrıntılı bilgi için lütfen destek sayfamızdaki ilgili bölümü ziyaret edin.", 
                "", 
                ""
            ],
            text_contents_m4: [
                "Sorunsuz bir ödeme süreci sağlamak için, size kolaylık sağlamak amacıyla adım adım bir ödeme kılavuzu hazırladık. İster yeni bir müşteri olun ister bilgileri tazelemeye ihtiyacınız olsun, bu kılavuz size RetroGallery'deki ödeme sürecinde yol gösterecektir. Kapsamlı talimatlara ve yardımcı ipuçlarına erişmek için lütfen destek sayfamızdaki Ödeme Kılavuzu bölümünü ziyaret edin.", 
                "", 
                "", 
                "", 
                "", 
                "", 
                ""
            ],
            text_contents_m5: [
                "RetroGallery'de desteğiniz için teşekkür ediyor ve alışveriş deneyiminizi geliştirmek için bir üyelik programı sunuyoruz. RetroGallery üyesi olarak, aşağıdakiler gibi özel avantajlardan yararlanabilirsiniz:", 
                "Yeni gelenlere ve sınırlı sürüm ürünlere erken erişim.", 
                "Sadece üyelere özel indirim ve kampanyalar.", 
                "Tercihlerinize ve satın alma geçmişinize göre kişiselleştirilmiş öneriler.", 
                "Kayıtlı nakliye ve ödeme bilgileriyle daha hızlı ödeme.", 
                "Üyelik programımız ve nasıl katılacağınız hakkında daha fazla bilgi edinmek için lütfen destek sayfamızdaki ilgili bölümü ziyaret edin.", 
                "Bu bilgilerin, RetroGallery'nin destek sayfasıyla ilgili çeşitli konuların net bir şekilde anlaşılmasını sağladığını umuyoruz. Başka sorularınız varsa veya yardıma ihtiyacınız olursa, özel müşteri destek ekibimiz her zaman yardıma hazırdır. RetroGallery'de mutlu alışverişler!"
            ]
        },
        RU: {
            menus: [
                "отмена, возврат, изменение", 
                "доставка и доставка", 
                "продукт и магазин", 
                "оплата", 
                "руководство по оплате", 
                "членство"
            ],
            text_contents_m0: [
                "В RetroGallery мы стремимся предоставить вам беспроблемный опыт покупок. Мы понимаем, что обстоятельства могут измениться, и иногда вам может потребоваться отменить заказ, запросить возврат средств или внести изменения в вашу покупку. Чтобы убедиться, что вы удовлетворены, ознакомьтесь с нашими правилами отмены, возврата и изменения ниже:", 
                "Отмена: Если вы хотите отменить свой заказ, обратитесь в нашу службу поддержки клиентов в течение 24 часов с момента размещения заказа. Мы сделаем все возможное, чтобы удовлетворить ваш запрос.", 
                "Возврат: Если вы не полностью удовлетворены своей покупкой, мы предлагаем политику возврата. Пожалуйста, обратитесь к разделу «Политика возврата» для получения подробной информации о праве на участие и процессе возврата.", 
                "Изменение: если вам нужно внести изменения в свой заказ, например изменить адрес доставки или обновить вариант товара, пожалуйста, свяжитесь с нашей службой поддержки клиентов как можно скорее. Мы поможем вам внести необходимые изменения в зависимости от статуса заказа.", 
                "Для получения более подробной информации о наших правилах отмены, возврата и изменения посетите соответствующий раздел на нашей странице поддержки.", 
                "", 
                ""
            ],
            text_contents_m1: [
                "В RetroGallery мы хотим, чтобы ваши старинные и антикварные сокровища были доставлены вам в целости и сохранности. Мы предлагаем надежные услуги доставки и доставки, чтобы сделать ваши покупки максимально удобными. Вот что вам нужно знать:", 
                "Способы доставки: мы сотрудничаем с надежными поставщиками услуг доставки, чтобы безопасно доставлять ваши заказы. Доступные способы доставки, расчетное время доставки и связанные с этим расходы будут отображаться в процессе оформления заказа.", 
                "Отслеживание заказа: как только ваш заказ будет отправлен, мы предоставим вам номер для отслеживания. Вы можете использовать этот номер, чтобы отслеживать статус вашего отправления и получать обновления о его местонахождении в режиме реального времени.", 
                "Международная доставка: мы предлагаем международную доставку, чтобы доставить уникальные продукты RetroGallery клиентам по всему миру. Обратите внимание, что могут применяться дополнительные таможенные пошлины или налоги в зависимости от правил вашей страны. Любые применимые сборы являются обязанностью покупателя.", 
                "Упаковка: мы тщательно упаковываем ваши винтажные и антикварные предметы, чтобы обеспечить их надежную защиту во время транспортировки. Каждый предмет будет тщательно упакован, чтобы сохранить его состояние.", 
                "Для получения более подробной информации о наших службах доставки и доставки, пожалуйста, посетите соответствующий раздел на нашей странице поддержки.", 
                ""
            ],
            text_contents_m2: [
                "Добро пожаловать в RetroGallery, ваше идеальное место для изысканных винтажных и антикварных изделий. Мы гордимся тем, что курируем разнообразную коллекцию вечных произведений, каждое из которых имеет свою уникальную историю. Вот что вы можете ожидать от нашего продукта и магазина:", 
                "Качество продукции: мы тщательно отбираем и проверяем каждый предмет в нашей коллекции, чтобы убедиться в его подлинности, качестве и очаровании. Мы стремимся предоставлять точные описания продуктов и изображения с высоким разрешением, чтобы вы могли принять обоснованное решение о покупке.", 
                "Вариации продукта: многие из наших старинных и антикварных предметов являются единственными в своем роде, что означает, что они могут иметь небольшие различия в цвете, текстуре или дизайне. Эти характеристики добавляют им аутентичности и привлекательности.", 
                "Политика магазина: в RetroGallery действуют правила защиты как покупателей, так и продавцов. Мы рекомендуем вам ознакомиться с нашими Условиями использования, Политикой конфиденциальности и другими соответствующими политиками, чтобы иметь полное представление о наших правилах и обязательствах.", 
                "Для получения более подробной информации о наших продуктах, правилах магазина и часто задаваемых вопросах посетите соответствующий раздел на нашей странице поддержки.", 
                "", 
                ""
            ],
            text_contents_m3: [
                "В RetroGallery мы предлагаем безопасные и удобные способы оплаты, чтобы сделать ваши покупки беспроблемными. Мы уделяем первостепенное внимание безопасности вашей личной и финансовой информации. Вот что вам нужно знать об оплате:", 
                "Принятые способы оплаты: мы принимаем основные кредитные карты, дебетовые карты и PayPal для покупок в Интернете. В процессе оформления заказа вы сможете выбрать наиболее удобный для вас способ оплаты.", 
                "Безопасные транзакции: мы используем стандартные отраслевые протоколы шифрования и безопасности для защиты ваших платежных данных. Ваша финансовая информация передается надежно и никогда не будет передана третьим лицам.", 
                "Валюта: Все цены на нашем веб-сайте указаны в местной валюте. Если вы являетесь международным клиентом, окончательная сумма заказа может зависеть от коэффициентов конвертации, установленных вашим банком или поставщиком платежных услуг.", 
                "Для получения более подробной информации о способах оплаты и безопасности посетите соответствующий раздел на нашей странице поддержки.", 
                "", 
                ""
            ],
            text_contents_m4: [
                "Чтобы обеспечить беспрепятственный процесс оплаты, мы составили пошаговое руководство по оплате для вашего удобства. Независимо от того, являетесь ли вы новым клиентом или нуждаетесь в повышении квалификации, это руководство проведет вас через процесс оплаты в RetroGallery. Пожалуйста, посетите раздел «Руководство по оплате» на нашей странице поддержки, чтобы получить доступ к подробным инструкциям и полезным советам.", 
                "", 
                "", 
                "", 
                "", 
                "", 
                ""
            ],
            text_contents_m5: [
                "В RetroGallery мы ценим вашу поддержку и предлагаем программу членства, чтобы улучшить ваш опыт покупок. Став участником RetroGallery, вы сможете пользоваться эксклюзивными преимуществами, такими как:", 
                "Ранний доступ к новым поступлениям и предметам ограниченного выпуска.", 
                "Специальные скидки и акции доступны только для участников.", 
                "Персональные рекомендации на основе ваших предпочтений и истории покупок.", 
                "Более быстрая проверка с сохраненной информацией о доставке и оплате.", 
                "Чтобы узнать больше о нашей программе членства и о том, как присоединиться, посетите соответствующий раздел на нашей странице поддержки.", 
                "Мы надеемся, что эта информация дает четкое представление о различных темах, связанных со страницей поддержки RetroGallery. Если у вас возникнут дополнительные вопросы или вам потребуется помощь, наша специальная служба поддержки клиентов всегда готова помочь. Удачных покупок в RetroGallery!"
            ]
        }
    }
    const [textDataBaseSTATE, setTextDataBaseSTATE] = useState(textDataBase.AZ)
    const [currentSupMenu, setCurrentSupMenu] = useState(0)
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

            <section className="supportmore">
                <div className="supportmore__header">
                    {textDataBaseSTATE.menus[0]}
                </div>
                <div className="supportmore__container">
                    <p className="supportmore__container--textcontent">
                        {textDataBaseSTATE["text_contents_m"+currentSupMenu][0]} <br />
                        {textDataBaseSTATE["text_contents_m"+currentSupMenu][1]} <br />
                        {textDataBaseSTATE["text_contents_m"+currentSupMenu][2]} <br />
                        {textDataBaseSTATE["text_contents_m"+currentSupMenu][3]} <br />
                        {textDataBaseSTATE["text_contents_m"+currentSupMenu][4]} <br />
                        {textDataBaseSTATE["text_contents_m"+currentSupMenu][5]} <br />
                        {textDataBaseSTATE["text_contents_m"+currentSupMenu][6]}
                    </p>
                    <aside className="supportmore__container--menus">
                        {
                            textDataBaseSTATE.menus.map(
                                (element, index) => {
                                    return (
                                        <button className="supportmore__container--menus_btn" 
                                        key={index} id={"supp_menu_"+index} onClick={
                                            () => {
                                                setCurrentSupMenu(index)
                                            }
                                        }>
                                            {element}
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

export default SupportMore