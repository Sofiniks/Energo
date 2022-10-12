import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

let en = {
    translation: {
        title: 'About us',
        heroServicesTitle: 'Services with fossil energy',
        heroHomeSubtitle: 'We work for you to save! Also, as a result of the work, the environmental footprint and energy consumption are reduced. Our team is committed to the long-term development and popularization of the use of alternative energy sources.',
        heroServicesSubtitle: 'When using traditional energy sources, the fundamental element is a monthly fee for services! In our work, we offer our clients alternative ways to reduce energy costs without losing comfort.',
        heroButton: 'find out more about our services',
        mainBannerTitle1: 'Experience',
        mainBannerTitle2: 'Direct contacts',
        mainBannerTitle3: 'Theory and practice',
        mainBannerTitle4: 'Satisfied clients',
        mainBannerDesc1: 'We have more than ten years of experience in the sector.',
        mainBannerDesc2: 'We work closely with a wide range of industry professionals and the public sector.',
        mainBannerDesc3: 'We guarantee that the client will achieve the desired result.',
        mainBannerDesc4: '80% of the orders received by us are from our loyal clients who have already cooperated with us.',

        numberTitle1: 'Projects',
        numberTitle2: 'Years',
        numberTitle3: 'Investments',
        numberText1: 'already implemented',
        numberText2: 'on the market',
        numberText3: 'attracted to our clients',

        whyUs: 'Why us?',
        whyTitle1: 'Terms',
        whyTitle2: 'No advance payment',
        whyTitle3: 'Responsibility',
        whyTitle4: 'Mediation',
        whyDesc1: 'Arrival at the site within 2 working days. Completion of small and medium orders within one working week. Completion of large orders within 20 working days.',
        whyDesc2: 'Remuneration only upon completion of all agreements',
        whyDesc3: '100% problem solving at the highest level',
        whyDesc4: 'We represent the interests of clients in the construction and design regulatory bodies',

        services: 'Services',
        service1Title: 'Energy certification and audits',
        service1Subtitle1: 'Energy audit of buildings',
        service1Subtitle2: 'Energy certification of buildings',
        service1Subtitle3: 'Temporary energy certificate',
        service1Subtitle4: 'Calculation of passive house rates',
        service1Desc1: 'An energy audit is a procedure that determines the energy consumption of a building, the factors affecting it and the measures that can be taken to reduce energy consumption. The final product of the energy audit is a report that shows the potential for energy saving and gives the client unbiased information that allows the client to make the right decision on the modernization of the site and energy saving measures with the shortest possible payback period.',
        service1Desc2: 'A process in which the energy efficiency of a building or a separate part of it is determined and an energy certificate of the building is issued for a period of 10 years.  The existing energy efficiency indicators of the site or its part to be designed, reconstructed or updated are determined.  Unlike the temporary energy certificate, the calculation is based on the real energy consumption (kWh, m3) obtained over the past 3-5 years.',
        service1Desc3: `As of 2012, when commissioning a new or reconstructed building, a temporary energy passport is required.  This temporary certificate is valid for 3 years and is registered in the construction information system. The calculation is carried out based on a mathematical model built on the basis of the building's project documentation.`,
        service1Desc4: 'Zero-energy homes – Buildings that use zero-cost alternative energy for heating or no heat at all. The specification of the passive house applies not only to residential buildings but also to public buildings. A passive house can be a school, a kindergarten or a supermarket, and the main condition is to follow the EU standards on passive houses. In our work, we calculate the energy balance of buildings in accordance with the requirements of Latvian legislation and international standards based on the calculation methodology of the Passive House Institute. ',
        service2Title: 'Thermography and air exchange',
        service2Subtitle1: 'Thermography',
        service2Subtitle2: 'Blower Door test',
        service2Desc1: `Thermography is a method by which it is possible to determine the surface temperature distribution of sites by converting the site's emitted infrared radiation into a color image (thermogram). Thermal imaging inspection of buildings and structures is an effective way to test enclosing structures at the end of construction and during operation. With it, we will help you determine the partial and total heat loss of your structure, as well as detect possible, hidden defects in construction.`,
        service2Desc2: `Cold rooms are not always a consequence of insufficient insulation of the building, so before you start investing significant monetary resources into your real estate's insulation, check the breathability of its structures. This procedure will cost you much less and will give you a 100% understanding of what work you need to do. `,
        service3Title: 'Industrial audit',
        service3Subtitle1: 'Energy audit of a production site',
        service3Subtitle2: 'Preparation of the electric balance for the year',
        service3Subtitle3: 'ISO Company Certification',
        service3Desc1: 'An energy audit is a procedure carried out in large companies to obtain information about all energy consumption structures of the company, which are quantitatively estimated for cost-effective energy saving and their results are summarized in a report prepared and issued by the company.',
        service3Desc2: `In accordance with the law on energy efficiency, a consumer of electricity is a merchant with annual electricity consumption exceeding 500 MWh for the next two calendar years. We assist merchants in the preparation and submission of electricity balances to state bodies and also help to identify incidental electricity consumption in the course of their activities, which can lead to optimization of the merchant's expenses.`,
        service3Desc3: 'With the rapidly rising energy cost around the world and the demands of society to reduce greenhouse gas emissions, effective energy management is becoming a priority for every business and ensures not only a quick return on production but also long-term development in the face of unstable energy prices. We help introduce and maintain ISO 50001.',
        iso1: 'ISO 50001 ("Energy management systems – Requirements with guidance for use") is an international standard created by the International Organization for Standardization for managing energy systems, which defines the requirements for the installation, introduction, maintenance and improvement of an energy management system aimed at enabling a company to follow a systematic approach in achieving consistent improvement of its energy system, including energy efficiency, security and consumption.',
        iso2: `Standard ISO 50001 provides any organization regardless of its size and territorial or geographical location with a complete strategy of action in managerial and technical areas in order to improve the efficiency of the organization's energy system.`,
        service4Title: 'Technical examination',
        service4Subtitle1: 'Examination of energy certificates and proposed projects',
        service4Subtitle2: 'Assessments of the  heating, ventilation and air conditioning systems',
        service4Desc1pt1: `Our company's experts have extensive experience in conducting examinations of energy audits and energy passports for buildings of various classifications.`,
        service4Desc1pt2: 'The expert opinion assesses the compliance of the energy audit with the methodology for calculating energy audit(Cabinet of Ministers Regulation No. 222 "Methodology for Calculating the Energy Efficiency of Buildings and the Rules for Energy Certification of Buildings") and other regulations and standards.',
        service4Desc2pt1: 'Inspection of the heating and air conditioning system is carried out:',
        service4Desc2pt2: '1) for a heating system and a heating system combined with a ventilation system with the total useful nominal power exceeding 70 kilowatts;',
        service4Desc2pt3: '2) for an air-conditioning system and an air-conditioning system combined with a ventilation system with the total useful nominal power exceeding 70 kilowatts.',
        service4Desc2pt4: 'When conducting an audit, an independent expert draws up an act that includes the results of the audit and recommendations for improving the energy efficiency of the audited system, as well as indicates the costs of and savings from introducing measures to improve energy efficiency.',
        service5Title: 'Managing energy efficiency projects',
        service5Subtitle1: 'Preparation of application sections for co-financing from European Funds',
        service5Desc1: 'To apply for EU co-financing in any of the programs, it is necessary to prepare and file a significant number of documents. In our work, we undertake all the formalities of this procedure and guarantee our clients the highest level of service. ',
        servicePriceButton: 'Find out the cost of the service',

        name: 'Name',
        email: 'E-mail or phone number',
        message: 'Message',
        messageSent: 'Message sent!',
        messageReceived: 'We have received your message and will contact you within the next 24 hours!',
        contacts: 'Contacts',
        contactUs: 'Contact us',
        contactUsText1: 'Feel free to contact us any time',
        contactUsText2: 'We will get back to you as soon as we can!',
        sendButton: 'Send',
        developedBy: 'Developed by:'
    }
}

let lv = {
    translation: {
        title: 'Par mums',
        heroServicesTitle: 'Pakalpojumi ar fosilo enerģiju',
        heroHomeSubtitle: 'Mēs strādājam jūsu ekonomijai! Darba rezultātā samazinās arī ekoloģiskā pēda un enerģijas patēriņš. Mūsu komanda tiecas uz ilglaicīgu attīstību un alternatīvās enerģijas avotu izmantošanas popularizēšanu.',
        heroServicesSubtitle: 'Izmantojot tradicionālos enerģijas avotus, galvenais elements ir ikmēneša pakalpojumu maksa! Savā darbā mēs klientiem piedāvājam alternatīvus energotaupības veidus, nezaudējot komfortu.',
        heroButton: 'uzzināt vairāk par mūsu pakalpojumiem',
        mainBannerTitle1: 'Pieredze',
        mainBannerTitle2: 'Tieši kontakti',
        mainBannerTitle3: 'Teorija un prakse',
        mainBannerTitle4: 'Apmierināti klienti',
        mainBannerDesc1: 'mūsu pieredze šajā sektorā ir vairāk nekā desmit gadu.',
        mainBannerDesc2: 'cieši sadarbojamies ar plašu nozares speciālistu loku un publisko sektoru.',
        mainBannerDesc3: 'garantējam ka klients sasniegs vēlamo rezultātu.',
        mainBannerDesc4: '80% no ienākošajiem pasūtījumiem ir atkārtoti, no klientiem, kas jau sadarbojās ar mums.',

        numberTitle1: 'Realizētie',
        numberTitle2: 'Gadi',
        numberTitle3: 'Investīciju',
        numberText1: 'projekti',
        numberText2: 'tirgū',
        numberText3: 'piesaistīti mūsu klientiem ',

        whyUs: 'Kāpēc mēs?',
        whyTitle1: 'Termiņi',
        whyTitle2: 'Nekādu avansu',
        whyTitle3: 'Atbildība',
        whyTitle4: 'Starpniecība',
        whyDesc1: 'izbraucam uz objektu 2 darba dienu laikā. Mazu un vidēju pasūtījumu izpilde vienas darba nedēļas laikā. Apjomīgu pasūtījumu izpilde 20 darba dienu laikā.',
        whyDesc2: 'darba samaksa tikai pēc visu vienošanos izpildes.',
        whyDesc3: '100% uzdevumu risinājums augstākajā līmenī.',
        whyDesc4: 'pārstāvam klientu intereses celtniecības un projektēšanas uzraudzības iestādēs.',

        services: 'Pakalpojumi',
        service1Title: 'Energosertifikācija un energoauditi',
        service1Subtitle1: 'Ēku energoaudits',
        service1Subtitle2: 'Ēku energosertifikācija',
        service1Subtitle3: 'Pagaidu energosertifikāts',
        service1Subtitle4: 'Pasīvo māju rādītāju aprēķins',
        service1Desc1: 'Energoaudits ir procedūra, kas nosaka ēkas energopatēriņu, faktorus, kas to ietekmē, un pasākumus, ko var veikt, lai samazinātu enerģijas patēriņu. Energoaudita galaprodukts ir atskaite, kas parāda energotaupības potenciālu un pasūtītājam sniedz objektīvu informāciju, kas ļauj pieņemt pareizu lēmumu par objekta modernizāciju un energotaupības pasākumiem ar maksimāli īsu atmaksāšanās termiņu.',
        service1Desc2: 'Process, kura laikā tiek noteikta ēkas vai atsevišķas tās daļas energoefektivitāte un tiek izsniegts ēkas energosertifikāts uz 10 gadiem. Tiek konstatēti projektējamā, rekonstruējamā vai atjaunojamā objekta vai tā daļas esošie energoefektivitātes rādītāji.  Atšķirībā no pagaidu energosertifikāta, aprēķini tiek veikti, ņemot vērā reālo enerģijas patēriņu (kWh, m3) pēdējo 3-5 gadu laikā.',
        service1Desc3: 'Kopš 2012.gada, nododot ekspluatācijā jaunu vai rekonstruētu ēku, nepieciešams pagaidu energosertifikāts.  Šī pagaidu apliecība ir derīga 3 gadus un tiek reģistrēta celtniecības informācijas sistēmā. Aprēķini tiek veikti, izmantojot matemātisku modeli, kas izveidots saskaņā ar ēkas projekta dokumentāciju.',
        service1Desc4: 'Mājas ar nulles enerģijas patēriņu - tās ir ēkas, kurās apkurei tiek izmantota alternatīvā enerģija ar nulles vērtību vai vispār netiek izmantots siltums. Pasīvās mājas specifikācija attiecas ne tikai uz dzīvojamām mājām, bet arī uz sabiedriskām ēkām. Par pasīvu māju var kļūt skola, bērnudārzs vai lielveikals, galvenais noteikums: ir jāievēro ES pasīvo māju standarti. Ēku enerģētiskās bilances aprēķinus veicam saskaņā ar Latvijas likumdošanas prasībām un starptautiskiem standartiem, izmantojot Pasīvās mājas institūta aprēķinu metodoloģiju. ',
        service2Title: 'Termogrāfija un gaisa apmaiņa',
        service2Subtitle1: 'Termogrāfija',
        service2Subtitle2: 'Konstrukciju gaisa caurlaidības tests',
        service2Desc1: 'Termogrāfija ir metode, ar kuras palīdzību var noteikt objektu virsmas temperatūras sadalījumu, objekta infrasarkano starojumu pārveidojot krāsainā attēlā (termogrammā). Ēku un būvju termovīzijas izpēte ir efektīvs norobežojošo konstrukciju diagnostikas veids celtniecības noslēgumā un ekspluatācijas laikā. Ar tā palīdzību varam noteikt daļējus un kopējus jūsu ēkas siltuma zudumus, kā arī atklāt iespējamus celtniecības slēptos defektus.',
        service2Desc2: 'Aukstas telpas ne vienmēr ir nepietiekamas ēkas siltināšanas rezultāts, attiecīgi, pirms ieguldīt ievērojamus naudas resursus jūsu nekustamā īpašuma siltināšanā, pārbaudiet tā konstrukciju gaisa caurlaidību. Šī procedūra jums izmaksās daudz lētāk un sniegs 100% izpratni, kādi darbi Jums ir jāveic. ',
        service3Title: 'Rūpnieciskais audits',
        service3Subtitle1: 'Ražošanas energoaudits',
        service3Subtitle2: 'Gada elektrības bilances sastādīšana',
        service3Subtitle3: 'Uzņēmumu ISO sertificēšana',
        service3Desc1: 'Energoaudits ir procedūra, kas notiek lielos uzņēmumos, lai saņemtu informāciju par visām uzņēmuma energopatēriņa struktūrām, kas tiek skaitliski novērtētas rentablai energotaupībai, un kuru rezultāti tiek apkopoti uzņēmuma sagatavotā un publicētā atskaitē.',
        service3Desc2: 'Elektroenerģijas lietotājs saskaņā ar Energoefektivitātes likumu ir komersants, kura gada elektroenerģijas patēriņš pārsniedz 500 megavatstundas divos kalendāra gados pēc kārtas. Mēs palīdzam komersantiem sagatavot elektroenerģijas bilances un iesniegt tās Valsts iestādēs, kā arī palīdzam konstatēt elektroenerģijas papildu patēriņu darbības laikā, kas var optimizēt komersanta izdevumus. ',
        service3Desc3: 'Apstākļos, kad visā pasaulē strauji pieaug enerģijas cena un sabiedrības prasības samazināt siltumnīcefekta gāzu emisiju, energopatēriņa efektīva pārvalde kļūst par katra biznesa prioritāti, kas nodrošina ne tikai ātru produkcijas atmaksāšanos, bet arī ilgtermiņa attīstību energonesēju nestabilo cenu apstākļos. Palīdzam ieviest un uzturēt ISO 50001.',
        iso1: 'ISO 50001 (Energy management systems – Requirements with guidance for use) ir starptautisks standarts, ko energosistēmu pārvaldībai izveidoja Starptautiskā standartizācijas organizācija, tas nosaka energomenedžmenta sistēmas izveides, ieviešanas, attīstības un uzlabošanas prasības, kuras mērķis ir ļaut uzņēmumam ievērot sistēmisku pieeju energosistēmas secīgā uzlabošanā, tostarp energoefektivitātē, energodrošībā un enerģijas patēriņā.',
        iso2: 'ISO 50001 standarts jebkuram uzņēmumam, neatkarīgi no tā lieluma, teritoriālās vai ģeogrāfiskās atrašanās vietas, sniedz pilnvērtīgu darbības stratēģiju menedžmenta un tehniskajā jomā ar mērķi palielināt uzņēmuma energosistēmas efektivitāti.',
        service4Title: 'Tehniskā ekspertīze',
        service4Subtitle1: 'Energosertifikātu un piedāvāto projektu ekspertīze',
        service4Subtitle2: 'Apkures, ventilācijas un gaisa kondicionēšanas sistēmu apsekošana',
        service4Desc1pt1: 'Mūsu uzņēmuma speciālistiem ir plaša pieredze, veicot dažādas klasifikācijas ēku energoaudita un enerģētiskās pases ekspertīzi.',
        service4Desc1pt2: 'Eksperta slēdziens novērtē energoaudita atbilstību energoaudita aprēķinu metodikai (Ministru kabineta noteikumi Nr. 222 “Ēku energoefektivitātes aprēķina metodes un ēku energosertifikācijas noteikumi”) un citiem normatīvajiem aktiem un standartiem. ',
        service4Desc2pt1: 'Apkures un gaisa kondicionēšanas sistēmas apskate tiek veikta:',
        service4Desc2pt2: '1) apkures sistēmai un ar ventilācijas sistēmu savienotai apkures sistēmai, kuras derīgā nominālā jauda pārsniedz 70 kW;',
        service4Desc2pt3: '2) gaisa kondicionēšanas sistēmai un ar ventilācijas sistēmu savienotai gaisa kondicionēšanas sistēmai, kuras derīgā nominālā jauda pārsniedz 70 kW.',
        service4Desc2pt4: 'Veicot pārbaudi, neatkarīgs eksperts sastāda aktu, kurā ir pārbaudes rezultāti un ieteikumi pārbaudāmās sistēmas energoefektivitātes paaugstināšanai, kā arī norāda izdevumus un ekonomiju, ieviešot energoefektivitātes paaugstināšanas pasākumus.',
        service5Title: 'Energoefektivitātes projektu administrēšana',
        service5Subtitle1: 'Pieteikumu sadaļu sagatavošana Eiropas fondu līdzfinansējuma saņemšanai.',
        service5Desc1: 'Lai iesniegtu pieteikumu Eiropas fondu līdzfinansējuma saņemšanai jebkurā programmā, ir jāsagatavo un jāiesniedz ievērojams dokumentu skaits. Savā darbā mēs piedāvājam uzņemties visas šīs procedūras formalitātes un mūsu klientiem garantējam visaugstākā līmeņa servisu. ',
        servicePriceButton: 'Uzzināt pakalpojuma izmaksas',

        name: 'Vārds',
        email: 'E-pasts vai tālruņa numurs',
        message: 'Ziņojums',
        messageSent: 'Ziņojums ir nosūtīts!',
        messageReceived: 'Mēs esam saņēmuši jūsu ziņu un sazināsimies ar jums tuvāko 24 stundu laikā!',
        contacts: 'Kontakti',
        contactUs: 'Sazināties ar mums',
        contactUsText1: 'Juties brīvi sazinaties ar mums jebkura laikā!',
        contactUsText2: 'Mēs ar jums sazināsimies, cik drīz vien varēsim!',
        sendButton: 'Nosūtīt',
        developedBy: 'Mājas lapu izstrāde'
    }
}

let ru = {
    translation: {
        title: 'О нас',
        heroServicesTitle: 'Услуги с невозобновляемой энергией',
        heroHomeSubtitle: 'Мы работаем для вашей экономии!Также, в результате работы, уменьшается уэкологический отпечаток и снижается расход энергии.Наша команда настроена на долгосрочное развитие и популяризацию использования альтернативных источников энергии.',
        heroServicesSubtitle: 'Используя традиционные источники энергии основополагающим элементом являются коммунальные платежи! В своей работе, мы предлагаем клиентам альтернативные способы снижения энергозатрат без потери комфорта.',
        heroButton: 'узнать о наших услугах больше',
        mainBannerTitle1: 'Опыт',
        mainBannerTitle2: 'Прямые контакты',
        mainBannerTitle3: 'Теория и практика',
        mainBannerTitle4: 'Довольные клиенты',
        mainBannerDesc1: 'наш опыт работы в данном секторе более десяти лет.',
        mainBannerDesc2: 'тесно сотрудничаем с широким спектром специалистов данной отрасли и публичным сектором.',
        mainBannerDesc3: 'Мы даём гарантию на достижение клиентом желаемого результата.',
        mainBannerDesc4: '80% поступающих нам заказов – повторные, от клиентов, кто с нами, уже, сотрудничал.',

        numberTitle1: 'Проектов',
        numberTitle2: 'Лет',
        numberTitle3: 'Инвестиций',
        numberText1: 'выполнено',
        numberText2: 'на рынке',
        numberText3: 'привлечённых нашим клиентам',

        whyUs: 'Почему мы?',
        whyTitle1: 'сроки',
        whyTitle2: 'никаких авансов',
        whyTitle3: 'ответственность',
        whyTitle4: 'посредничество',
        whyDesc1: 'выезд на объект в течении 2 рабочих дней. Выполнение мелких и средних заказов в течении одной рабочей недели. Выполнение крупных заказов в течении 20 рабочих дней.',
        whyDesc2: 'оплата труда только по завершении всех договорённостей',
        whyDesc3: '100% решение задач на высшем уровне',
        whyDesc4: 'Представляем интересы клиентов в органах надзора за строительством и проектированием',

        services: 'Услуги',
        service1Title: 'Энергосертификация и энергоаудиты',
        service1Subtitle1: 'Энергоаудит зданий',
        service1Subtitle2: 'Энергосертификация зданий',
        service1Subtitle3: 'Временный энергосертификат',
        service1Subtitle4: 'Расчёт показателей пассивных домов',
        service1Desc1: 'Энергоаудит – это процедура, которая определяет энергопотребление здания, факторы, влияющие на него, и меры, которые можно предпринять для снижения энергопотребления. Конечным продуктом энергоаудита является отчет, который показывает потенциал энергосбережения и дает заказчику объективную информацию, позволяющую принять правильное решение по модернизации обьекта и мероприятиям энергосбережений с максимально коротким сроком окупаемости.',
        service1Desc2: 'Процесс, в ходе которого определяется энергоэффективность здания или отдельной его части и выдается энергетический сертификат здания сроком на 10 лет. Определяются существующие  показатели энергоэффективности обьекта или его части, подлежащей проектированию, реконструкции или обновлению.  В отличии от временного энергосертификата расчет ведется исходя из реальных расходов энергии ( квч, м3) полученных за послкеднии 3-5 лет.',
        service1Desc3: 'С 2012 года, при сдаче нового или реконструируемого здания в эксплуатацию требуется временный энергетический паспорт.  Данное, временное удостоверение действует 3 года и регистрируется в строительной информационной системе. Расчет проводится исходя из  математической модели посторенной на основании проектной документации здания.',
        service1Desc4: 'Дома с нулевым потреблением энергии - здания, в которых для отопления используется альтернативная энергия с нулевой стоимостью или вообще не используется тепло. Спецификация пассивного дома касается не только жилых домов, но и общественных зданий. Пассивным домом может стать школа, детский сад или супермаркет, главное условие – следовать стандартам ЕС о пассивных домах. В своей работе, мы производим расчёты энергетического баланса зданий, в соответствии с требованиями латвийского законодательства и международными стандартами на основе методологии расчёта Института пассивного дома. ',
        service2Title: 'Термография и воздухообмен',
        service2Subtitle1: 'Термография',
        service2Subtitle2: 'Тест воздухопроницаемости конструкций',
        service2Desc1: 'Термография — это метод, с помощью которого можно определить распределение температуры поверхности объектов путем преобразования излучаемого инфракрасного излучения объекта в цветное изображение (термограмму). Тепловизионное обследование зданий и строений - эффективный способ диагностики ограждающих конструкций по окончании строительства и в период эксплуатации. С помощью него мы поможем определить частичные и общие теплопотери вашего строения, а также обнаружить возможные, скрытые дефекты строительства.',
        service2Desc2: 'Не всегда холодные помещения следствие недостаточного утепления здания, соответственно, прежде чем начать вкладывать значительные денежные ресурсы на работы по утеплению вашего недвижимого имущества, проверьте воздухопроницаемость его конструкций. Эта процедура обойдётся Вам гораздо дешевле и даст 100% понимание какие работы Вам необходимо провести. ',
        service3Title: 'Промышленный аудит',
        service3Subtitle1: 'Производственный энергоаудит',
        service3Subtitle2: 'Составление электрического баланса за год',
        service3Subtitle3: 'ISO сертификация предприятий',
        service3Desc1: 'Энергоаудит – процедура, проводимая в крупных компаниях для получения информации обо всех структурах энергопотребления предприятия, которые количественно оцениваются для рентабельного энергосбережения, и результаты которых обобщаются в отчете, подготовленном и выпущенном компанией.',
        service3Desc2: 'Потребителем электроэнергии в соответствии с законoм об энергоэффективности является коммерсант, годовое потребление электроэнергии которого превышает 500 МВтч, в течение двух последующих календарных лет. Мы помогаем коммерсантам в подготовке и сдачи балансов электроэнергии в государственные органы, а также помогаем выявлять побочные траты электроэнергии в ходе деятельности, что может привести к оптимизации трат коммерсанта. ',
        service3Desc3: 'В условиях стремительного  роста стоимости энергии во всем мире и требований общества сократить выбросы парниковых газов эффективное управление энергопотреблением становится приоритетом для каждого бизнеса, который обеспечивает не только быструю окупаемость продукции, но и долгосрочное развити в условиях нестабильных цен на энергоносители. Мы помогаем вводить и поддерживать ISO 50001.',
        iso1: 'ISO 50001 («Energy management systems – Requirements with guidance for use») — международный стандарт, созданный Международной организацией по стандартизации для управления энергосистемами, который определяет требования для установки, внедрения, сопровождения и улучшения системы энергоменеджмента, цель которой — позволить организации следовать системному подходу в достижении последовательного улучшения энергосистемы, включая энергоэффективность, энергобезопасность и энергопотребление.',
        iso2: 'Стандарт ISO 50001 снабжает любую организацию, независимо от её размера, территориального или географического положения, полноценной стратегией действий в менеджерской и в технических областях с целью повышения эффективности энергосистемы организации.',
        service4Title: 'Техническая экспертиза',
        service4Subtitle1: 'Экспертиза энергосертификатов и предлагаемых проектов',
        service4Subtitle2: 'Экспертиза отопительных котлов, систем вентиляции и кондиционирования воздуха',
        service4Desc1pt1: 'Специалисты нашей компании имеют большой опыт в проведении экспертизы  энергоаудита и энергетического паспорта зданий различной классификации.',
        service4Desc1pt2: 'Экспертное заключение дает оценку соответствия энергоаудита методике расчета энергоаудита (Правила Кабинета Министров № 222 «Методика расчета энергоэффективности зданий и Правила энергосертификации зданий») и другим нормативным актам и стандартам. ',
        service4Desc2pt1: 'Осмотр системы отопления и кондиционирования воздуха проводится:',
        service4Desc2pt2: '1) для системы отопления и системы отопления, совмещенной с системой вентиляции, суммарная полезная номинальная мощность которых превышает 70 киловатт;',
        service4Desc2pt3: '2) для системы кондиционирования воздуха и системы кондиционирования воздуха, совмещенной с системой вентиляции, суммарная полезная номинальная мощность которых превышает 70 киловатт.',
        service4Desc2pt4: 'При проведении проверки, независимый эксперт составляет акт, который включает результаты проверки и рекомендации по повышению энергоэффективности проверяемой системы, а также указывает затраты и экономия от внедрения мер по повышению энергоэффективности.',
        service5Title: 'Администрирование проектов энергоэфективности',
        service5Subtitle1: 'Подготовка разделов заявок на получение со-финансирования еврофондов',
        service5Desc1: 'Для подачи заявки на со-финансирование ЕС в любой из программ, необходимо подготовить и подать значительный ряд документов. В своей работе, мы предлагаем взять все формальности этой процедуры на себя и гарантируем нашим клиентам сервис на самом высоком уровне. ',
        servicePriceButton: 'Узнать стоимость услуги',

        name: 'Имя',
        email: 'E-mail или номер телефона',
        message: 'Сообщение',
        messageSent: 'Сообщение отправлено!',
        messageReceived: 'Мы получили ваше сообщение и свяжемся с вами в течение следующих 24 часов!',
        contacts: 'Контакты',
        contactUs: 'Связаться с нами',
        contactUsText1: 'Не стесняйтесь обращаться к нам в любое время!',
        contactUsText2: 'Мы вам ответим, как только сможем!',
        sendButton: 'Отправить',
        developedBy: 'Разработка сайта'
    }
}

i18next
    .use(initReactI18next)
    .init({
        resources: {
            en: en,
            ru: ru,
            lv: lv
        },
        lng: 'lv',
        fallbackLng: 'lv',
        interpolation: { escapeValue: false }
    });

export default i18next;
