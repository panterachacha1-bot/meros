/* MEROS — har bir shaxsning uchta eng yaxshi asari va hayot yoʻli ("qayerdan — qayergacha").
   text: saytdagi toʻliq matn (jamoat mulki), audio: MEROS_AUDIO dagi pleylist nomi, link: tashqi kutubxona. */
(function(){
const Z="https://ziyouz.uz/";
const ZN=Z+"ozbek-nasri/", ZM=Z+"ozbek-sheriyati/ozbek-mumtoz-sheriyati/", ZZ=Z+"ozbek-sheriyati/ozbek-zamonaviy-sheriyati/";
window.MEROS_TOP = {
navoiy: {
  path: { uz: ["Hirotlik amaldor oilasida tugʻilgan, toʻrt yoshida sheʼr yod olgan bola", "Turkiy adabiyot choʻqqisi, «Xamsa» muallifi va davlat vaziri"],
          ru: ["Мальчик из семьи гератского чиновника, в четыре года учивший стихи наизусть", "Вершина тюркской литературы, автор «Хамсы» и государственный визирь"],
          en: ["A boy from an official's family in Herat who memorised poetry at four", "The summit of Turkic literature, author of the Khamsa and a vizier of state"] },
  works: [
    { t: { uz: "Xamsa", ru: "Хамса (Пятерица)", en: "Khamsa (The Quintet)" }, y: "1483–1485", k: "doston", audio: ["sabai", "iskandar"],
      s: { uz: "Besh dostondan iborat ulkan turkum: «Hayrat ul-abror» (axloqiy-falsafiy), «Farhod va Shirin», «Layli va Majnun», «Sabʼai sayyor» va «Saddi Iskandariy». Navoiy Nizomiy va Dehlaviy anʼanasini davom ettirib, bu mavzularni birinchi marta turkiy tilda toʻliq ishladi. Farhod obrazida u mehnat, sadoqat va olijanoblikni, Iskandar obrazida adolatli hukmdor gʻoyasini ulugʻladi.",
          ru: "Грандиозный цикл из пяти поэм: «Хайрат ул-абрар» (нравственно-философская), «Фархад и Ширин», «Лейли и Меджнун», «Семь планет» и «Стена Искандара». Продолжая традицию Низами и Дехлеви, Навои впервые полностью разработал эти сюжеты на тюркском языке. В образе Фархада он воспел труд, верность и благородство, в образе Искандара — идею справедливого правителя.",
          en: "A vast cycle of five narrative poems: “Hayrat ul-abror” (ethical and philosophical), “Farhod and Shirin”, “Layli and Majnun”, “The Seven Planets” and “The Wall of Iskandar”. Continuing the tradition of Nizami and Dehlavi, Navoi was the first to treat these subjects in full in a Turkic language. In Farhod he celebrated labour, fidelity and nobility; in Iskandar, the ideal of a just ruler." },
      link: ZM+"alisher-navoiy/" },
    { t: { uz: "Gʻazallar (tanlangan)", ru: "Газели (избранное)", en: "Ghazals (selected)" }, y: "", k: "sher", text: "texts/navoiy-1.txt", audio: ["navoiy_gazal", "navoiy_ruboiy"],
      s: { uz: "Navoiy lirikasining eng sara namunalari: ishq, vafo, hijron va inson qadri haqidagi gʻazallar, ruboiylar va «Farhod va Shirin»dan parcha. Bu sheʼrlarda turkiy tilning nafisligi va ifoda boyligi toʻla namoyon boʻladi.",
          ru: "Лучшие образцы лирики Навои: газели и рубаи о любви, верности, разлуке и достоинстве человека, а также отрывок из «Фархада и Ширин». Текст дан в оригинале на староузбекском языке в латинской транслитерации.",
          en: "The finest examples of Navoi's lyric poetry: ghazals and rubais on love, fidelity, separation and human dignity, with an excerpt from “Farhod and Shirin”. The text is given in the original Old Uzbek in Latin transliteration." },
      link: ZM+"alisher-navoiy/" },
    { t: { uz: "Mahbub ul-qulub", ru: "Махбуб ул-кулуб (Возлюбленный сердец)", en: "Mahbub ul-qulub (Beloved of Hearts)" }, y: "1500", k: "nasr",
      s: { uz: "Navoiyning soʻnggi yirik asari — nasriy pandnoma. Birinchi qismda jamiyatning turli tabaqalari (podshoh, vazir, qozi, dehqon, savdogar va boshqalar) tavsiflanadi; ikkinchi qismda yaxshi xulq va illatlar haqida; uchinchisida hikmatli soʻzlar jamlangan. Asar shoirning butun hayotiy tajribasi xulosasidir.",
          ru: "Последнее крупное сочинение Навои — прозаическое назидание. В первой части описаны сословия общества (правитель, визирь, судья, крестьянин, купец и другие), во второй — добродетели и пороки, в третьей собраны мудрые изречения. Книга подводит итог жизненному опыту поэта.",
          en: "Navoi's last major work, a book of counsel in prose. The first part describes the classes of society (ruler, vizier, judge, farmer, merchant and others), the second deals with virtues and vices, and the third gathers wise sayings. The book sums up the poet's whole experience of life." } }
  ]
},
bobur: {
  path: { uz: ["Oʻn ikki yoshida taxtga oʻtirgan Andijonlik shahzoda", "Hindistondagi ulkan saltanat asoschisi va «Boburnoma» muallifi"],
          ru: ["Андижанский царевич, взошедший на трон в двенадцать лет", "Основатель огромной империи в Индии и автор «Бабур-наме»"],
          en: ["A prince of Andijan who took the throne at twelve", "Founder of a vast empire in India and author of the Baburnama"] },
  works: [
    { t: { uz: "Boburnoma", ru: "Бабур-наме", en: "Baburnama" }, y: "1494–1529", k: "memuar",
      s: { uz: "Bobur oʻz hayotini yil-ba-yil yozib borgan xotira-kitob. Unda Fargʻona, Samarqand, Kobul va Hindistonning shaharlari, tabiati, oʻsimlik va hayvonot dunyosi, urf-odatlari, zamondosh shoir va olimlar haqida aniq va jonli maʼlumot beriladi. Muallif oʻz xato va magʻlubiyatlarini ham yashirmaydi — shuning uchun asar jahon memuar adabiyotining durdonasi sanaladi.",
          ru: "Книга воспоминаний, в которой Бабур год за годом описывал свою жизнь. В ней точно и живо рассказано о городах, природе, растениях и животных, обычаях Ферганы, Самарканда, Кабула и Индии, о поэтах и учёных эпохи. Автор не скрывает своих ошибок и поражений — поэтому книга считается шедевром мировой мемуарной литературы.",
          en: "A memoir in which Babur recorded his life year by year. It gives precise and vivid accounts of the cities, landscapes, plants, animals and customs of Fergana, Samarkand, Kabul and India, and of the poets and scholars of the age. The author hides neither his mistakes nor his defeats, which is why the book is counted a masterpiece of world memoir literature." },
      link: "https://uz.wikipedia.org/wiki/Boburnoma" },
    { t: { uz: "Gʻazal va ruboiylar", ru: "Газели и рубаи", en: "Ghazals and rubais" }, y: "", k: "sher", text: "texts/bobur-1.txt", audio: ["bobur_sher"],
      s: { uz: "Boburning lirik merosi: vatan sogʻinchi, gʻurbat azobi, doʻstlik va vafo haqidagi gʻazal va ruboiylar. Ular samimiyligi, soddaligi va chuqur hayotiy tajriba bilan ajralib turadi.",
          ru: "Лирическое наследие Бабура: газели и рубаи о тоске по родине, горечи чужбины, дружбе и верности. Их отличают искренность, простота и глубокий жизненный опыт. Текст — в оригинале, в латинской транслитерации.",
          en: "Babur's lyric legacy: ghazals and rubais on longing for home, the bitterness of exile, friendship and loyalty, marked by sincerity, simplicity and deep experience of life. The text is in the original, in Latin transliteration." },
      link: ZM+"bobur/" },
    { t: { uz: "Mubayyin", ru: "Мубайин", en: "Mubayyin" }, y: "1521", k: "ilmiy",
      s: { uz: "Bobur oʻgʻillari uchun sheʼriy shaklda yozgan islom huquqi (fiqh) qoʻllanmasi. Unda ibodat, zakot, savdo va boshqa masalalar oddiy va esda qoladigan misralarda bayon etilgan.",
          ru: "Руководство по исламскому праву (фикху), написанное Бабуром в стихах для своих сыновей. Вопросы молитвы, закята, торговли и другие изложены простыми, легко запоминающимися строками.",
          en: "A handbook of Islamic law (fiqh) that Babur wrote in verse for his sons. Prayer, alms, trade and other matters are set out in simple, memorable lines." } }
  ]
},
xorazmiy: {
  path: { uz: ["Xorazmdan chiqqan yosh olim", "Algebra va «algoritm» tushunchasining otasi"],
          ru: ["Молодой учёный из Хорезма", "Отец алгебры и понятия «алгоритм»"],
          en: ["A young scholar from Khwarazm", "The father of algebra and of the very idea of the “algorithm”"] },
  works: [
    { t: { uz: "Al-jabr va-l-muqobala", ru: "Аль-джабр ва-ль-мукабала", en: "Al-jabr wa-l-muqabala" }, y: "≈820", k: "ilmiy",
      s: { uz: "Tenglamalarni yechishning umumiy qoidalarini tizimli bayon etgan birinchi kitob. «Al-jabr» (tiklash) — tenglamaning bir tomonidagi manfiy hadni ikkinchi tomonga oʻtkazish, «al-muqobala» (qarama-qarshi qoʻyish) — oʻxshash hadlarni qisqartirish demakdir. Kitobning amaliy qismi meros taqsimoti, yer oʻlchash va savdo hisob-kitoblariga bagʻishlangan.",
          ru: "Первая книга, систематически изложившая общие правила решения уравнений. «Аль-джабр» (восполнение) — перенос отрицательного члена в другую часть уравнения, «аль-мукабала» (противопоставление) — приведение подобных членов. Практическая часть посвящена разделу наследства, измерению земли и торговым расчётам.",
          en: "The first book to set out systematically the general rules for solving equations. “Al-jabr” (restoring) means moving a negative term to the other side of an equation; “al-muqabala” (balancing) means cancelling like terms. The practical part deals with inheritance, land measurement and commercial calculation." } },
    { t: { uz: "Hind hisobi haqida kitob", ru: "Книга об индийском счёте", en: "Book on Indian Reckoning" }, y: "", k: "ilmiy",
      s: { uz: "Oʻnlik sanoq tizimi va nolni qoʻllashni tushuntirgan arifmetika kitobi. Arab asli yoʻqolgan, ammo XII asrdagi lotincha tarjimasi «Algoritmi de numero Indorum» nomi bilan saqlangan va Yevropaga raqamlarni olib kirgan.",
          ru: "Книга по арифметике, объяснявшая десятичную систему счисления и использование нуля. Арабский оригинал утрачен, но латинский перевод XII века «Algoritmi de numero Indorum» сохранился и принёс цифры в Европу.",
          en: "An arithmetic book explaining the decimal place-value system and the use of zero. The Arabic original is lost, but the 12th-century Latin translation, “Algoritmi de numero Indorum”, survived and brought the numerals to Europe." } },
    { t: { uz: "Kitob surat al-arz", ru: "Книга картины Земли", en: "Book of the Picture of the Earth" }, y: "≈830", k: "ilmiy",
      s: { uz: "Ptolemey geografiyasini qayta koʻrib chiqqan asar: 2400 dan ortiq shahar, togʻ, dengiz va daryolarning koordinatalari jadvali. Xorazmiy koʻplab maʼlumotlarni aniqlashtirdi va Oʻrta yer dengizi uzunligini toʻgʻriroq koʻrsatdi.",
          ru: "Переработка «Географии» Птолемея: таблицы координат более 2400 городов, гор, морей и рек. Хорезми уточнил многие данные и точнее указал длину Средиземного моря.",
          en: "A revision of Ptolemy's Geography: tables of coordinates for more than 2,400 cities, mountains, seas and rivers. Al-Khwarizmi corrected much of the data and gave a more accurate length for the Mediterranean." } }
  ]
},
fargoniy: {
  path: { uz: ["Fargʻona vodiysidan chiqqan yulduzshunos", "Yevropa universitetlarida 700 yil oʻqitilgan olim — Alfraganus"],
          ru: ["Звездочёт из Ферганской долины", "Альфраганус, чью книгу 700 лет изучали в университетах Европы"],
          en: ["A stargazer from the Fergana Valley", "Alfraganus, whose book was studied in European universities for 700 years"] },
  works: [
    { t: { uz: "Astronomiya asoslari", ru: "Основы астрономии", en: "Elements of Astronomy" }, y: "≈840", k: "ilmiy",
      s: { uz: "Ptolemey «Almagest»ining qisqa va tushunarli bayoni: Yerning sharsimonligi, iqlimlar, sayyoralar harakati, Oy va Quyosh tutilishlari. Lotin va ibroniy tillariga tarjima qilingan kitob Yevropada astronomiyaning asosiy darsligi boʻlgan; Kolumb ham undagi Yer oʻlchamlariga tayangan.",
          ru: "Краткое и ясное изложение «Альмагеста» Птолемея: шарообразность Земли, климаты, движение планет, затмения Луны и Солнца. Переведённая на латынь и иврит книга была главным учебником астрономии в Европе; на её данные о размерах Земли опирался и Колумб.",
          en: "A short, clear account of Ptolemy's Almagest: the sphericity of the Earth, climates, planetary motion and eclipses of the Moon and Sun. Translated into Latin and Hebrew, it was Europe's main astronomy textbook; even Columbus relied on its figures for the size of the Earth." } },
    { t: { uz: "Usturlob haqida kitob", ru: "Книга об астролябии", en: "Book on the Astrolabe" }, y: "", k: "ilmiy",
      s: { uz: "Usturlobni yasash nazariyasi va undan foydalanish usullari bayon etilgan risola. Unda stereografik proyeksiyaning matematik asoslari tushuntiriladi.",
          ru: "Трактат о теории построения астролябии и способах работы с ней. В нём объяснены математические основы стереографической проекции.",
          en: "A treatise on the theory of constructing the astrolabe and on how to use it, explaining the mathematics of stereographic projection." } },
    { t: { uz: "Qohiradagi Nilometr", ru: "Нилометр в Каире", en: "The Nilometer in Cairo" }, y: "861", k: "inshoot",
      s: { uz: "Nil daryosi suvi sathini oʻlchaydigan inshoot. Fargʻoniy rahbarligida qayta qurilgan bu inshoot hozirgacha Qohiradagi Ravza orolida saqlanib qolgan.",
          ru: "Сооружение для измерения уровня воды в Ниле. Перестроенный под руководством Фергани, он до сих пор сохранился на острове Рода в Каире.",
          en: "A structure for measuring the water level of the Nile. Rebuilt under al-Farghani's direction, it still stands on Roda Island in Cairo." } }
  ]
},
beruniy: {
  path: { uz: ["17 yoshida Kot kengligini oʻlchagan xorazmlik oʻsmir", "150 dan ortiq asar yozgan qomusiy olim"],
          ru: ["Хорезмийский юноша, в 17 лет измеривший широту Кята", "Учёный-энциклопедист, автор более 150 трудов"],
          en: ["A Khwarazmian youth who measured the latitude of Kath at 17", "A polymath who wrote more than 150 works"] },
  works: [
    { t: { uz: "Hindiston", ru: "Индия", en: "India" }, y: "1030", k: "ilmiy",
      s: { uz: "Beruniy sanskritni oʻrganib, hind falsafasi, dini, astronomiyasi, adabiyoti va urf-odatlarini xolis tasvirlagan. U boshqa xalq madaniyatini oʻz qarashlari bilan emas, oʻsha xalqning manbalari asosida oʻrganishni talab qilgan — bu yondashuv hozirgi ilmiy etnografiyaga yaqin.",
          ru: "Выучив санскрит, Беруни беспристрастно описал индийскую философию, религию, астрономию, литературу и обычаи. Он требовал изучать чужую культуру по её собственным источникам, а не через свои представления, — подход, близкий к современной научной этнографии.",
          en: "Having learned Sanskrit, Biruni gave an impartial account of Indian philosophy, religion, astronomy, literature and customs. He insisted on studying another culture through its own sources rather than one's own assumptions, an approach close to modern scholarly ethnography." } },
    { t: { uz: "Qadimgi xalqlardan qolgan yodgorliklar", ru: "Памятники минувших поколений", en: "The Remaining Signs of Past Centuries" }, y: "≈1000", k: "ilmiy",
      s: { uz: "Forslar, soʻgʻdlar, xorazmliklar, yahudiylar, yunonlar va arablarning taqvimlari, bayramlari va sanalarini qiyoslagan asar. Unda Xorazm va Soʻgʻdning yoʻqolib ketgan bayramlari haqidagi noyob maʼlumotlar saqlangan.",
          ru: "Сравнение календарей, праздников и летосчислений персов, согдийцев, хорезмийцев, евреев, греков и арабов. В книге сохранились уникальные сведения об исчезнувших праздниках Хорезма и Согда.",
          en: "A comparison of the calendars, festivals and eras of the Persians, Sogdians, Khwarazmians, Jews, Greeks and Arabs, preserving unique information on the lost festivals of Khwarazm and Sogdia." } },
    { t: { uz: "Qonuni Masʼudiy", ru: "Канон Масуда", en: "The Mas'udi Canon" }, y: "1037", k: "ilmiy",
      s: { uz: "Sulton Masʼudga bagʻishlangan astronomiya qomusi: trigonometriya, geografik koordinatalar, Quyosh, Oy va sayyoralar harakati. Beruniy bu asarda Yer radiusini oʻlchash usulini ham bayon qilgan.",
          ru: "Энциклопедия астрономии, посвящённая султану Масуду: тригонометрия, географические координаты, движение Солнца, Луны и планет. Здесь Беруни описал и свой метод измерения радиуса Земли.",
          en: "An encyclopaedia of astronomy dedicated to Sultan Mas'ud: trigonometry, geographical coordinates and the motions of the Sun, Moon and planets. Here Biruni also described his method of measuring the Earth's radius." } }
  ]
},
ibnsino: {
  path: { uz: ["Afshona qishlogʻida tugʻilgan, 16 yoshida tabib boʻlgan yigit", "Olti asr davomida dunyo tabiblarining ustozi — Avitsenna"],
          ru: ["Юноша из Афшаны, ставший врачом в 16 лет", "Авиценна, шесть веков бывший учителем врачей всего мира"],
          en: ["A youth from Afshona who became a physician at 16", "Avicenna, teacher of the world's physicians for six centuries"] },
  works: [
    { t: { uz: "Tib qonunlari", ru: "Канон врачебной науки", en: "The Canon of Medicine" }, y: "1012–1024", k: "ilmiy",
      s: { uz: "Besh kitobdan iborat tibbiyot qomusi: umumiy nazariya, oddiy dorilar, aʼzolar kasalliklari, butun tanaga oid kasalliklar va murakkab dorilar. Ibn Sino yuqumli kasalliklar suv va havo orqali tarqalishini, gigiyena va ovqatlanishning ahamiyatini taʼkidlagan.",
          ru: "Медицинская энциклопедия в пяти книгах: общая теория, простые лекарства, болезни отдельных органов, болезни всего тела и сложные лекарства. Ибн Сина подчёркивал, что заразные болезни передаются через воду и воздух, и отмечал значение гигиены и питания.",
          en: "A medical encyclopaedia in five books: general theory, simple drugs, diseases of particular organs, diseases of the whole body and compound drugs. Ibn Sina stressed that contagious diseases spread through water and air and underlined the importance of hygiene and diet." } },
    { t: { uz: "Kitob ash-shifo", ru: "Книга исцеления", en: "The Book of Healing" }, y: "", k: "ilmiy",
      s: { uz: "Nomiga qaramay tibbiyot emas, balki «ruhni jaholatdan davolovchi» falsafiy qomus: mantiq, tabiiy fanlar, matematika, musiqa va metafizika. Oʻrta asrlar Yevropa falsafasiga katta taʼsir koʻrsatgan.",
          ru: "Несмотря на название, это не медицинский, а философский свод, «исцеляющий душу от невежества»: логика, естественные науки, математика, музыка и метафизика. Оказал огромное влияние на средневековую европейскую философию.",
          en: "Despite its title, not a medical work but a philosophical encyclopaedia “healing the soul of ignorance”: logic, natural science, mathematics, music and metaphysics. It deeply influenced medieval European philosophy." } },
    { t: { uz: "Ruboiylar", ru: "Рубаи", en: "Rubais" }, y: "", k: "sher", audio: ["ibnsino"],
      s: { uz: "Ibn Sinoga nisbat beriladigan hikmatli toʻrtliklar: bilimning chegarasi, hayot mazmuni va inson aqli haqida. Ular olimning falsafiy qarashlarini sheʼriy tilda ifodalaydi.",
          ru: "Приписываемые Ибн Сине мудрые четверостишия о пределах знания, смысле жизни и человеческом разуме — философские взгляды учёного в поэтической форме.",
          en: "Wise quatrains attributed to Ibn Sina on the limits of knowledge, the meaning of life and the human mind: the scholar's philosophy in poetic form." } }
  ]
},
buxoriy: {
  path: { uz: ["Buxorolik, favqulodda xotiraga ega bola", "Islom olamidagi eng ishonchli hadislar toʻplamining muallifi"],
          ru: ["Бухарский мальчик с исключительной памятью", "Автор самого достоверного сборника хадисов в исламском мире"],
          en: ["A Bukharan boy with an extraordinary memory", "Compiler of the most trusted hadith collection in the Islamic world"] },
  works: [
    { t: { uz: "Al-Jomeʼ as-sahih", ru: "Аль-Джами ас-сахих", en: "Al-Jami as-Sahih" }, y: "", k: "ilmiy",
      s: { uz: "16 yil davomida toʻplangan va qatʼiy tekshirilgan hadislar toʻplami, 97 kitob (boʻlim)ga ajratilgan: iymon, ilm, namoz, savdo, odob, tibbiyot va boshqalar. Har bir hadis roviylar zanjiri bilan keltirilgan.",
          ru: "Сборник хадисов, собранных за 16 лет и строго проверенных, разделённый на 97 книг: вера, знание, молитва, торговля, этикет, медицина и другие. Каждый хадис приведён с цепочкой передатчиков.",
          en: "A collection of hadith gathered over 16 years and rigorously checked, divided into 97 books: faith, knowledge, prayer, trade, manners, medicine and more. Each hadith is given with its chain of transmitters." } },
    { t: { uz: "Al-Adab al-mufrad", ru: "Аль-Адаб аль-муфрад", en: "Al-Adab al-Mufrad" }, y: "", k: "ilmiy",
      s: { uz: "Odob-axloqqa bagʻishlangan hadislar: ota-onaga hurmat, qoʻshnichilik, mehmondorchilik, yetimlarga gʻamxoʻrlik, soʻz odobi. Oilaviy va ijtimoiy tarbiya boʻyicha mashhur qoʻllanma.",
          ru: "Хадисы о нравственности: почитание родителей, добрососедство, гостеприимство, забота о сиротах, культура речи. Известное пособие по семейному и общественному воспитанию.",
          en: "Hadith on ethics: honouring parents, good neighbourliness, hospitality, care for orphans and courtesy of speech; a well-known guide to family and social upbringing." } },
    { t: { uz: "At-Tarix al-kabir", ru: "Ат-Тарих аль-кабир", en: "At-Tarikh al-Kabir" }, y: "", k: "ilmiy",
      s: { uz: "Hadis roviylari haqidagi yirik biografik lugʻat: 12 mingdan ortiq kishining ismi, yashagan joyi va ishonchlilik darajasi. Hadisshunoslikda «rijol» ilmining asosiy manbalaridan biri.",
          ru: "Большой биографический словарь передатчиков хадисов: имена, места жизни и степень надёжности более 12 тысяч человек. Один из главных источников науки о передатчиках («риджал»).",
          en: "A great biographical dictionary of hadith transmitters: the names, homes and reliability of more than 12,000 people; a key source of the science of transmitters (rijal)." } }
  ]
},
ulugbek: {
  path: { uz: ["Amir Temurning yurishlarda tugʻilgan nabirasi", "Dunyodagi eng aniq yulduzlar katalogini tuzgan olim-hukmdor"],
          ru: ["Внук Амира Темура, родившийся в военном походе", "Правитель-учёный, составивший самый точный звёздный каталог своего времени"],
          en: ["A grandson of Amir Temur born on campaign", "A scholar-ruler who compiled the most accurate star catalogue of his age"] },
  works: [
    { t: { uz: "Ziji jadidi Koʻragoniy", ru: "Зидж-и джадид-и Гурагани", en: "Zij-i Jadid-i Gurgani" }, y: "1437", k: "ilmiy",
      s: { uz: "Toʻrt qismdan iborat astronomik jadvallar: taqvimlar, amaliy astronomiya, sayyoralar harakati va 1018 yulduzning koordinatalari. Katalog XVII asrda Oksfordda lotin tiliga tarjima qilinib nashr etilgan.",
          ru: "Астрономические таблицы в четырёх частях: календари, практическая астрономия, движение планет и координаты 1018 звёзд. В XVII веке каталог был переведён на латынь и издан в Оксфорде.",
          en: "Astronomical tables in four parts: calendars, practical astronomy, planetary motion and the coordinates of 1,018 stars. In the 17th century the catalogue was translated into Latin and published in Oxford." } },
    { t: { uz: "Samarqand rasadxonasi", ru: "Самаркандская обсерватория", en: "The Samarkand Observatory" }, y: "1424–1429", k: "inshoot",
      s: { uz: "Uch qavatli silindrsimon bino, uning markazida yer ostiga chuqur kirib borgan ulkan meridian sekstanti joylashgan. Hozir sekstantning yer ostidagi qismi saqlanib qolgan va muzey sifatida koʻrsatiladi.",
          ru: "Трёхэтажное цилиндрическое здание, в центре которого находился огромный меридианный секстант, уходивший глубоко под землю. Сохранившаяся подземная часть секстанта сегодня открыта как музей.",
          en: "A three-storey cylindrical building housing a huge meridian sextant that reached deep underground. The surviving underground part of the sextant is now shown as a museum." } },
    { t: { uz: "Ulugʻbek madrasalari", ru: "Медресе Улугбека", en: "Ulugh Beg's madrasas" }, y: "1417–1433", k: "inshoot",
      s: { uz: "Samarqanddagi Registon maydonidagi madrasa oʻz davrining oliy maktabi boʻlib, unda matematika, astronomiya va falakiyot oʻqitilgan. Buxoro va Gʻijduvondagi madrasalar ham shu davrda qurilgan.",
          ru: "Медресе на площади Регистан в Самарканде было высшей школой своего времени, где преподавали математику и астрономию. В те же годы построены медресе в Бухаре и Гиждуване.",
          en: "The madrasa on Registan Square in Samarkand was the university of its day, where mathematics and astronomy were taught. The madrasas in Bukhara and Gijduvan were built in the same years." } }
  ]
},
temur: {
  path: { uz: ["Kesh yaqinidagi barlos begining oʻgʻli", "Poytaxti Samarqand boʻlgan ulkan saltanat asoschisi"],
          ru: ["Сын барласского бека из-под Кеша", "Основатель огромной державы со столицей в Самарканде"],
          en: ["The son of a Barlas bey from near Kesh", "Founder of a vast empire with its capital at Samarkand"] },
  works: [
    { t: { uz: "Temuriylar davlati", ru: "Государство Тимуридов", en: "The Timurid state" }, y: "1370", k: "tarix",
      s: { uz: "Movarounnahrdan Kichik Osiyogacha choʻzilgan saltanat. Temur markazlashgan boshqaruv, pochta-yam tizimi va savdo yoʻllari xavfsizligini yoʻlga qoʻydi; uning avlodlari davrida Samarqand va Hirot ilm-fan markaziga aylandi.",
          ru: "Держава, простиравшаяся от Мавераннахра до Малой Азии. Темур наладил централизованное управление, ямскую почту и безопасность торговых путей; при его потомках Самарканд и Герат стали центрами науки.",
          en: "An empire stretching from Transoxiana to Asia Minor. Temur built centralised government, a relay post system and secure trade routes; under his descendants Samarkand and Herat became centres of learning." } },
    { t: { uz: "Bibixonim masjidi", ru: "Мечеть Биби-Ханым", en: "The Bibi-Khanym Mosque" }, y: "1399–1404", k: "inshoot",
      s: { uz: "Hindiston yurishidan keyin qurilgan, oʻz davrining eng ulkan masjidlaridan biri. Uning moviy gumbazi va baland peshtoqi Samarqand manzarasining ramziga aylangan.",
          ru: "Построенная после индийского похода, одна из крупнейших мечетей своего времени. Её голубой купол и высокий портал стали символом облика Самарканда.",
          en: "Built after the Indian campaign, one of the largest mosques of its time. Its blue dome and towering portal became a symbol of Samarkand's skyline." } },
    { t: { uz: "Temur tuzuklari", ru: "Уложение Темура", en: "The Institutes of Temur" }, y: "", k: "tarix",
      s: { uz: "Temurga nisbat beriladigan davlat boshqaruvi qoidalari: vazirlar va qoʻshinni tashkil etish, adolat va maslahat tamoyillari. Asar muallifligi olimlar orasida bahsli, ammo u temuriylar davri siyosiy tafakkurining muhim yodgorligi.",
          ru: "Приписываемые Темуру правила управления государством: устройство визирата и войска, принципы справедливости и совета. Авторство спорно, но это важный памятник политической мысли эпохи Тимуридов.",
          en: "Rules of statecraft attributed to Temur: the organisation of ministers and army and the principles of justice and consultation. Its authorship is disputed, but it is an important monument of Timurid political thought." } }
  ]
},
manguberdi: {
  path: { uz: ["Xorazmshohning toʻngʻich oʻgʻli", "Moʻgʻul bosqiniga oʻn yil qarshi turgan milliy qahramon"],
          ru: ["Старший сын хорезмшаха", "Национальный герой, десять лет противостоявший монгольскому нашествию"],
          en: ["The eldest son of the Khwarazmshah", "A national hero who resisted the Mongol invasion for ten years"] },
  works: [
    { t: { uz: "Parvon jangi", ru: "Битва при Парване", en: "The Battle of Parwan" }, y: "1221", k: "tarix",
      s: { uz: "Hindukush togʻlari yaqinidagi jangda Jaloliddin qoʻshini Chingizxon sarkardasi Shiki-Xutuxu boshchiligidagi moʻgʻullarni tor-mor qildi. Bu gʻalaba moʻgʻullar yengilmas degan fikrni yoʻqqa chiqardi.",
          ru: "В битве у гор Гиндукуша войско Джалолиддина разгромило монголов во главе с полководцем Чингисхана Шики-Хутуху. Эта победа развеяла миф о непобедимости монголов.",
          en: "In a battle near the Hindu Kush, Jalal ad-Din's army routed the Mongols led by Genghis Khan's general Shigi Qutuqu, shattering the myth of Mongol invincibility." } },
    { t: { uz: "Sind daryosi boʻyidagi jang", ru: "Битва на Инде", en: "The Battle of the Indus" }, y: "1221", k: "tarix",
      s: { uz: "Chingizxonning oʻzi boshchilik qilgan qoʻshin bilan tengsiz jangda Jaloliddin qurshovdan chiqish uchun oti bilan tik jardan daryoga sakradi va narigi qirgʻoqqa suzib oʻtdi. Rivoyatga koʻra, Chingizxon oʻgʻillariga «Otaning oʻgʻli shunday boʻlishi kerak» degan.",
          ru: "В неравном бою с войском, которое вёл сам Чингисхан, Джалолиддин, чтобы вырваться из окружения, прыгнул на коне с крутого обрыва в реку и переплыл на другой берег. По преданию, Чингисхан сказал сыновьям: «Вот каким должен быть сын своего отца».",
          en: "In an unequal battle against an army led by Genghis Khan himself, Jalal ad-Din broke out of encirclement by leaping on horseback from a steep bank into the river and swimming to the far shore. Tradition says Genghis told his sons, “Such should a father's son be.”" } },
    { t: { uz: "Davlatni tiklash", ru: "Восстановление государства", en: "Restoring the state" }, y: "1225–1231", k: "tarix",
      s: { uz: "Hindistondan qaytgach, Jaloliddin Eron, Ozarbayjon va Kavkazda yangi davlat tuzib, Tabrizni poytaxt qildi va moʻgʻullarga qarshi kurashni davom ettirdi. 1231-yilda Mayyofariqin yaqinida halok boʻldi.",
          ru: "Вернувшись из Индии, Джалолиддин создал новое государство в Иране, Азербайджане и на Кавказе со столицей в Тебризе и продолжал борьбу с монголами. Погиб в 1231 году близ Майяфарикина.",
          en: "Returning from India, Jalal ad-Din built a new state in Iran, Azerbaijan and the Caucasus with its capital at Tabriz and fought on against the Mongols. He was killed near Mayyafariqin in 1231." } }
  ]
},
muqimiy: {
  path: { uz: ["Qoʻqonlik novvoyning oʻgʻli, madrasa hujrasida yashagan kambagʻal shoir", "Xalq qoʻshiqlariga aylangan gʻazallar va oʻtkir hajviyalar muallifi"],
          ru: ["Сын кокандского пекаря, бедный поэт, живший в келье медресе", "Автор газелей, ставших народными песнями, и острых сатир"],
          en: ["A Kokand baker's son, a poor poet living in a madrasa cell", "Author of ghazals that became folk songs and of biting satires"] },
  works: [
    { t: { uz: "Gʻazallar va hajviyalar (tanlangan)", ru: "Газели и сатиры (избранное)", en: "Ghazals and satires (selected)" }, y: "", k: "sher", text: "texts/muqimiy-0.txt", audio: ["muqimiy"],
      s: { uz: "Muqimiyning sevgi lirikasi va hayotiy hajviyalaridan tanlanganlar. Sodda xalq tiliga yaqin bu sheʼrlarning koʻpi hozir ham qoʻshiq boʻlib kuylanadi.",
          ru: "Избранные любовные газели и жизненные сатиры Мукими. Многие из этих стихов, близких к простому народному языку, до сих пор поются как песни. Текст — в оригинале.",
          en: "A selection of Muqimi's love lyrics and satires. Many of these poems, close to plain folk speech, are still sung as songs today. The text is in the original Uzbek." },
      link: ZM+"muqimiy/" },
    { t: { uz: "Tanobchilar", ru: "Танабчилар (Землемеры)", en: "The Surveyors" }, y: "", k: "hajviya",
      s: { uz: "Yer oʻlchab soliq belgilaydigan amaldorlar — tanobchilarning poraxoʻrligi va dehqonlarni talashi fosh etilgan hajviya. Muqimiy ularning ism-shariflarini ochiq aytib, zamondoshlari orasida katta shov-shuv uygʻotgan.",
          ru: "Сатира, разоблачающая взяточничество чиновников-землемеров, которые определяли налог и грабили крестьян. Мукими открыто назвал их по именам, что вызвало большой шум среди современников.",
          en: "A satire exposing the bribery of the surveyors who assessed land tax and fleeced the peasants. Muqimi named them openly, which caused a great stir among his contemporaries." } },
    { t: { uz: "Sayohatnoma", ru: "Саяхатнаме (Путевые заметки)", en: "Sayohatnoma (Travel Notes)" }, y: "", k: "sher",
      s: { uz: "Qoʻqondan Fargʻona vodiysi qishloqlari boʻylab safar taassurotlari: yoʻllar, bekatlar, mehmonxonalar va odamlar hazil aralash, jonli tasvirlanadi. Oʻzbek adabiyotidagi realistik tasvirning ilk namunalaridan.",
          ru: "Впечатления от поездок из Коканда по кишлакам Ферганской долины: дороги, станции, постоялые дворы и люди описаны живо и с юмором. Один из первых образцов реалистического описания в узбекской литературе.",
          en: "Impressions of journeys from Kokand through the villages of the Fergana Valley: roads, stations, inns and people are described vividly and with humour; an early example of realism in Uzbek literature." } }
  ]
},
furqat: {
  path: { uz: ["Qoʻqonlik yosh gʻazalnavis", "Yangi maktab va ilmni kuylagan maʼrifatparvar, vatandan yiroqda vafot etgan shoir"],
          ru: ["Молодой кокандский сочинитель газелей", "Просветитель, воспевший новую школу и науку, умерший вдали от родины"],
          en: ["A young ghazal writer from Kokand", "An enlightener who sang of the new school and science, and died far from home"] },
  works: [
    { t: { uz: "Sheʼrlar (tanlangan)", ru: "Стихи (избранное)", en: "Poems (selected)" }, y: "", k: "sher", text: "texts/furqat-0.txt",
      s: { uz: "Furqatning lirik gʻazallari va maʼrifatparvarlik sheʼrlari: bahor, sevgi, vatan sogʻinchi va ilmga daʼvat.",
          ru: "Лирические газели и просветительские стихи Фурката: весна, любовь, тоска по родине и призыв к знанию. Текст — в оригинале.",
          en: "Furqat's lyric ghazals and enlightenment poems: spring, love, longing for home and a call to learning. The text is in the original Uzbek." },
      link: ZM+"furqat/" },
    { t: { uz: "Gimnaziya", ru: "Гимназия", en: "The Gymnasium" }, y: "1890", k: "sher",
      s: { uz: "Toshkentdagi rus gimnaziyasiga tashrifdan soʻng yozilgan sheʼr. Shoir zamonaviy taʼlim, fan va tartibni maqtab, oʻz xalqini bolalarini oʻqitishga chaqiradi.",
          ru: "Стихотворение, написанное после посещения русской гимназии в Ташкенте. Поэт хвалит современное образование, науку и порядок и призывает свой народ учить детей.",
          en: "A poem written after visiting a Russian gymnasium in Tashkent. The poet praises modern education, science and order and urges his people to educate their children." } },
    { t: { uz: "Sarguzashtnoma", ru: "Саргузаштнаме", en: "Sarguzashtnoma" }, y: "", k: "nasr",
      s: { uz: "Furqatning oʻz hayoti haqidagi nasriy xotiralari: bolaligi, Qoʻqon adabiy muhiti va Toshkentga koʻchishi. Shoir biografiyasining asosiy manbasi.",
          ru: "Прозаические воспоминания Фурката о своей жизни: детство, литературная среда Коканда, переезд в Ташкент. Главный источник биографии поэта.",
          en: "Furqat's prose memoir of his life: childhood, the literary circle of Kokand and his move to Tashkent; the main source for his biography." } }
  ]
},
ibrat: {
  path: { uz: ["Toʻraqoʻrgʻonlik madrasa talabasi", "Olti tilli lugʻat muallifi va vodiydagi birinchi bosmaxona asoschisi"],
          ru: ["Студент медресе из Туракургана", "Автор словаря на шести языках и основатель первой типографии в долине"],
          en: ["A madrasa student from To'raqo'rg'on", "Author of a six-language dictionary and founder of the valley's first printing press"] },
  works: [
    { t: { uz: "Lugʻati sitta alsina", ru: "Словарь шести языков", en: "Dictionary of Six Languages" }, y: "1901", k: "ilmiy",
      s: { uz: "Arab, fors, hind, turkiy, oʻzbek va rus tillaridagi soʻzlarni yonma-yon beruvchi lugʻat. Muallif uni savdo va safarda qoʻl keladigan amaliy qoʻllanma sifatida yaratgan.",
          ru: "Словарь, дающий рядом слова арабского, персидского, хинди, тюркского, узбекского и русского языков. Автор задумал его как практическое пособие для торговли и путешествий.",
          en: "A dictionary giving words side by side in Arabic, Persian, Hindi, Turkic, Uzbek and Russian, conceived as a practical aid for trade and travel." } },
    { t: { uz: "Tarixi Fargʻona", ru: "История Ферганы", en: "The History of Fergana" }, y: "1916", k: "ilmiy",
      s: { uz: "Qadimgi davrdan Qoʻqon xonligi tugatilgunicha boʻlgan Fargʻona vodiysi tarixi. Ibrat yozma manbalar bilan birga xalq rivoyatlari va oʻz kuzatishlaridan foydalangan.",
          ru: "История Ферганской долины с древности до упразднения Кокандского ханства. Ибрат использовал письменные источники, народные предания и собственные наблюдения.",
          en: "A history of the Fergana Valley from ancient times to the end of the Kokand Khanate, drawing on written sources, folk traditions and the author's own observations." } },
    { t: { uz: "Sheʼrlar", ru: "Стихи", en: "Poems" }, y: "", k: "sher", text: "texts/ibrat-2.txt",
      s: { uz: "Ibratning gʻazal va muxammaslari: ishq, tabiat va ilmga chaqiriq.",
          ru: "Газели и мухаммасы Ибрата: любовь, природа и призыв к знанию. Текст — в оригинале.",
          en: "Ibrat's ghazals and mukhammas: love, nature and a call to learning. The text is in the original Uzbek." },
      link: ZM+"ishoqxon-ibrat/" }
  ]
},
behbudiy: {
  path: { uz: ["Samarqand qishlogʻidagi ruhoniy oilasining oʻgʻli", "Turkiston jadidchiligining otasi va milliy teatr asoschisi"],
          ru: ["Сын духовного лица из самаркандского селения", "Отец туркестанского джадидизма и основатель национального театра"],
          en: ["The son of a cleric from a Samarkand village", "Father of Turkestan's Jadid movement and founder of the national theatre"] },
  works: [
    { t: { uz: "Padarkush", ru: "Падаркуш (Отцеубийца)", en: "Padarkush (The Patricide)" }, y: "1911", k: "drama", text: "texts/behbudiy-0.txt",
      s: { uz: "Boy oʻgʻli Toshmurodni oʻqitish haqidagi domla va ziyolining maslahatini rad etadi. Oʻqimagan yigit yomon doʻstlarga qoʻshilib, pul uchun oʻz otasini oʻldiradi va qamoqqa tushadi. Qisqa, ammo taʼsirchan bu fojia jaholat qanday baxtsizlikka olib kelishini koʻrsatgan va oʻzbek teatrini boshlab bergan.",
          ru: "Богач отвергает совет муллы и интеллигента дать образование своему сыну Ташмураду. Неграмотный юноша связывается с дурной компанией, ради денег убивает собственного отца и попадает в тюрьму. Короткая, но сильная трагедия показала, к какому несчастью ведёт невежество, и положила начало узбекскому театру. Текст — в оригинале.",
          en: "A rich man rejects the advice of a teacher and an intellectual to educate his son Toshmurod. The uneducated youth falls into bad company, murders his own father for money and ends up in prison. This short but powerful tragedy showed where ignorance leads and launched the Uzbek theatre. The text is in the original Uzbek." },
      link: ZN+"mahmudxoja-behbudiy/mahmudxoja-behbudiy-padarkush-drama/" },
    { t: { uz: "Oq yelpigʻichli chinli xotun", ru: "Китаянка с белым веером", en: "The Chinese Woman with the White Fan" }, y: "", k: "hikoya", text: "texts/behbudiy-1.txt",
      s: { uz: "Xitoy rivoyati asosidagi ibratli hikoya: sayyoh-adib qabr ustida yelpigʻich yelpiyotgan yosh bevaga duch keladi va buning sababini bilib, vafo haqida chuqur oʻyga toladi.",
          ru: "Поучительный рассказ по мотивам китайского предания: странствующий литератор встречает молодую вдову, обмахивающую веером могилу, и, узнав причину, задумывается о верности. Текст — в оригинале.",
          en: "An instructive tale based on a Chinese legend: a travelling man of letters meets a young widow fanning a grave and, learning why, reflects deeply on fidelity. The text is in the original Uzbek." },
      link: ZN+"mahmudxoja-behbudiy/" },
    { t: { uz: "Bir vafolik zaifa xususida hikoya", ru: "Рассказ о верной женщине", en: "A Tale of a Faithful Woman" }, y: "", k: "hikoya", text: "texts/behbudiy-2.txt",
      s: { uz: "Qadimgi Shom shahrida kechgan voqea: boy savdogar kemalaridan ayrilib, qashshoqlikka tushadi, sodiq xotini esa uni hech qachon tashlab ketmaydi. Hikoya oilaviy sadoqat va sabr haqida.",
          ru: "Действие происходит в древнем городе Шам: богатый купец теряет свои корабли и впадает в нищету, но верная жена никогда его не оставляет. Рассказ о семейной верности и терпении. Текст — в оригинале.",
          en: "Set in the ancient city of Sham: a rich merchant loses his ships and falls into poverty, but his faithful wife never leaves him. A story of family loyalty and patience. The text is in the original Uzbek." },
      link: ZN+"mahmudxoja-behbudiy/" }
  ]
},
avloniy: {
  path: { uz: ["Toshkentlik toʻquvchining oʻgʻli", "Oʻzbek pedagogikasining asoschisi va professor"],
          ru: ["Сын ташкентского ткача", "Основатель узбекской педагогики и профессор"],
          en: ["The son of a Tashkent weaver", "Founder of Uzbek pedagogy and a university professor"] },
  works: [
    { t: { uz: "Turkiy guliston yoxud axloq", ru: "Туркестанский цветник, или Нравственность", en: "The Turkic Garden, or Ethics" }, y: "1913", k: "darslik", text: "texts/avloniy-0.txt",
      s: { uz: "Yangi usul maktablarining yuqori sinflari uchun yozilgan axloq darsligi. Avloniy tarbiyani «yo hayot — yo mamot» masalasi deb biladi va yaxshi xulqlar (sabr, shijoat, ilm, vatanni suymak) hamda yomon xulqlarni (jaholat, gʻazab, hasad, yalqovlik) qisqa boblarda misollar bilan tushuntiradi.",
          ru: "Учебник нравственности для старших классов новометодных школ. Авлони считает воспитание вопросом «жизни или смерти» и в коротких главах с примерами объясняет добродетели (терпение, мужество, знание, любовь к родине) и пороки (невежество, гнев, зависть, лень). Текст — в оригинале.",
          en: "An ethics textbook for the upper classes of new-method schools. Avloniy calls upbringing a matter of “life or death” and, in short chapters with examples, explains the virtues (patience, courage, knowledge, love of homeland) and the vices (ignorance, anger, envy, laziness). The text is in the original Uzbek." },
      link: ZN+"abdulla-avloniy/abdulla-avloniy-turkiy-guliston-yoxud-axloq/" },
    { t: { uz: "Adabiyot yoxud milliy sheʼrlar", ru: "Литература, или Национальные стихи", en: "Literature, or National Poems" }, y: "1909–1917", k: "sher", text: "texts/avloniy-2.txt",
      s: { uz: "Avloniyning olti qismli sheʼrlar toʻplamidan tanlanganlar: ilm, vatan, millat taraqqiyoti va bolalar tarbiyasiga oid sheʼrlar.",
          ru: "Избранное из шестичастного сборника стихов Авлони: стихи о знании, родине, прогрессе нации и воспитании детей. Текст — в оригинале.",
          en: "Selections from Avloniy's six-part collection of poems on knowledge, homeland, national progress and the upbringing of children. The text is in the original Uzbek." },
      link: ZZ+"abdulla-avloniy/" },
    { t: { uz: "Advokatlik osonmi?", ru: "Легко ли быть адвокатом?", en: "Is It Easy to Be a Lawyer?" }, y: "1914", k: "komediya",
      s: { uz: "Oʻqimagan kishining oʻzini advokat qilib koʻrsatib, odamlarni aldashi haqidagi komediya. «Turon» truppasi sahnasida qoʻyilgan va jadid teatrining ilk namunalaridan biri boʻlgan.",
          ru: "Комедия о том, как неуч выдаёт себя за адвоката и обманывает людей. Была поставлена труппой «Туран» и стала одним из первых образцов джадидского театра.",
          en: "A comedy about an ignorant man who poses as a lawyer and deceives people. Staged by the Turon troupe, it was one of the first examples of Jadid theatre." },
      link: ZN+"abdulla-avloniy/" }
  ]
},
fitrat: {
  path: { uz: ["Buxorolik madrasa talabasi", "Jadidlar yetakchisi va birinchi oʻzbek professori"],
          ru: ["Бухарский студент медресе", "Лидер джадидов и первый узбекский профессор"],
          en: ["A madrasa student in Bukhara", "Leader of the Jadids and the first Uzbek professor"] },
  works: [
    { t: { uz: "Abulfayzxon", ru: "Абулфайзхан", en: "Abulfayzkhan" }, y: "1924", k: "drama",
      s: { uz: "XVIII asr Buxorosida kechadigan tarixiy fojia. Zaif xon Abulfayzxon saroy fitnalari va hokimiyat talashuvi qurboniga aylanadi: vazir Hakimbiy va uning oʻgʻli Rahimbiy taxtni egallash uchun qon toʻkishdan qaytmaydi. Fitrat hokimiyatning insonni qanday buzishini koʻrsatgan.",
          ru: "Историческая трагедия, действие которой происходит в Бухаре XVIII века. Слабый хан Абулфайзхан становится жертвой дворцовых интриг и борьбы за власть: визирь Хакимбий и его сын Рахимбий не останавливаются перед кровью ради трона. Фитрат показал, как власть развращает человека.",
          en: "A historical tragedy set in 18th-century Bukhara. The weak khan Abulfayzkhan falls victim to palace intrigue and the struggle for power: the vizier Hakimbiy and his son Rahimbiy stop at no bloodshed to seize the throne. Fitrat shows how power corrupts." },
      link: ZN+"abdurauf-fitrat/abdurauf-fitrat-abulfajzhon-drama/" },
    { t: { uz: "Hind sayyohining qissasi", ru: "Рассказ индийского путешественника", en: "The Tale of an Indian Traveller" }, y: "1912", k: "nasr",
      s: { uz: "Buxoroga kelgan hind sayyohi koʻrganlarini hikoya qiladi: iflos koʻchalar, johil tabiblar, eskicha maktablar va adolatsiz boshqaruv. Fors tilida yozilgan asar amirlikdagi islohotlar zarurligini isbotlagan jadid manifestlaridan biri.",
          ru: "Индийский путешественник, приехавший в Бухару, рассказывает об увиденном: грязные улицы, невежественные лекари, старые школы и несправедливое правление. Написанная на персидском языке книга стала одним из манифестов джадидов о необходимости реформ.",
          en: "An Indian traveller visiting Bukhara describes what he sees: filthy streets, ignorant healers, outdated schools and unjust rule. Written in Persian, the book became one of the Jadid manifestos for reform." },
      link: ZN+"abdurauf-fitrat/abdurauf-fitrat-hind-sayyohining-qissasi/" },
    { t: { uz: "Sheʼrlar", ru: "Стихи", en: "Poems" }, y: "1917–1923", k: "sher", text: "texts/fitrat-2.txt",
      s: { uz: "Fitratning «Mirrix yulduziga» va boshqa sheʼrlari: yurt qaygʻusi, erk orzusi va millat taqdiri haqida. Oʻzbek sheʼriyatida barmoq vazniga oʻtishning ilk namunalaridan.",
          ru: "«К звезде Марс» и другие стихи Фитрата: скорбь о родине, мечта о свободе и судьба нации. Одни из первых образцов перехода узбекской поэзии к силлабическому стиху. Текст — в оригинале.",
          en: "Fitrat's “To the Star Mars” and other poems on grief for the homeland, the dream of freedom and the nation's fate; early examples of Uzbek poetry's turn to syllabic verse. The text is in the original Uzbek." },
      link: ZZ+"abdurauf-fitrat/" }
  ]
},
munavvarqori: {
  path: { uz: ["Toshkentlik yosh qori", "Turkistonda yangi maktab va milliy matbuot asoschisi"],
          ru: ["Молодой ташкентский кары", "Основатель новой школы и национальной печати в Туркестане"],
          en: ["A young Quran reciter from Tashkent", "Founder of the new school and the national press in Turkestan"] },
  works: [
    { t: { uz: "Adibi soniy", ru: "Адиби соний (Вторая книга для чтения)", en: "Adibi soniy (The Second Reader)" }, y: "1907", k: "darslik", text: "texts/munavvarqori-0.txt",
      s: { uz: "Alifbedan keyin oʻqitiladigan kitob: axloq, tabiat, uy-roʻzgʻor va oddiy fan haqidagi qisqa matnlar, hikoyatlar va sheʼrlar. Yangi usul maktablarining eng koʻp nashr etilgan darsliklaridan.",
          ru: "Книга, которую читали после букваря: короткие тексты, притчи и стихи о нравственности, природе, домашнем хозяйстве и простых научных фактах. Один из самых издаваемых учебников новометодных школ. Текст — в оригинале.",
          en: "The book read after the primer: short texts, parables and poems on morals, nature, household life and simple science; one of the most reprinted textbooks of the new-method schools. The text is in the original Uzbek." },
      link: ZN+"munavvarqori-abdurashidxonov/munavvar-qori-abdurashidxonov-adibus-soniy/" },
    { t: { uz: "Tugʻishganlik sevgisi", ru: "Родственная любовь", en: "Sibling Love" }, y: "", k: "hikoya", text: "texts/munavvarqori-1.txt",
      s: { uz: "Ochlik yilida yetim qolgan oʻn uch yoshli Oyxon qahraton qishda ukasi Turdiboyni bo'rilardan himoya qiladi va oʻz jonini fido qiladi. Qisqa, taʼsirchan hikoya.",
          ru: "Тринадцатилетняя Ойхон, осиротевшая в голодный год, суровой зимой защищает младшего брата Турдибая от волков и жертвует своей жизнью. Короткий, пронзительный рассказ. Текст — в оригинале.",
          en: "Thirteen-year-old Oyxon, orphaned in a famine year, protects her little brother Turdiboy from wolves in a bitter winter and gives her life for him. A short, moving story. The text is in the original Uzbek." },
      link: ZN+"munavvarqori-abdurashidxonov/" },
    { t: { uz: "Sheʼrlar", ru: "Стихи", en: "Poems" }, y: "", k: "sher", text: "texts/munavvarqori-2.txt",
      s: { uz: "Munavvar Qorining «Orzu», «Kuz» va boshqa sheʼrlari: tabiat, sogʻinch va ilmga muhabbat.",
          ru: "«Мечта», «Осень» и другие стихи Мунаввара Кары: природа, тоска и любовь к знанию. Текст — в оригинале.",
          en: "Munavvar Qori's “Dream”, “Autumn” and other poems on nature, longing and the love of learning. The text is in the original Uzbek." },
      link: ZZ+"munavvarqori/" }
  ]
},
qodiriy: {
  path: { uz: ["Toshkentlik bogʻbonning oʻgʻli, savdogar qoʻlida xizmatkor", "Birinchi oʻzbek romanining muallifi, milliy nasr asoschisi"],
          ru: ["Сын ташкентского садовника, служивший приказчиком у купца", "Автор первого узбекского романа, основатель национальной прозы"],
          en: ["A Tashkent gardener's son who worked as a merchant's clerk", "Author of the first Uzbek novel and founder of national prose"] },
  works: [
    { t: { uz: "Oʻtkan kunlar", ru: "Минувшие дни", en: "Days Gone By" }, y: "1926", k: "roman", text: "texts/qodiriy-0.txt", audio: ["otkan"],
      s: { uz: "XIX asr oʻrtalari, Qoʻqon xonligi. Toshkentlik yosh savdogar Otabek Margʻilonda Kumushga uylanadi, ammo Homidning fitnasi va tuhmatlari tufayli ular ajralishga majbur boʻladi. Onasining tazyiqi bilan Otabek Zaynabga ham uylanadi; rashkdan aqlini yoʻqotgan Zaynab Kumushni zaharlaydi. Muhabbat fojiasi fonida yozuvchi xonlikdagi siyosiy qonli kurashlarni, qipchoq qirgʻinini va jamiyatning ichki yaralarini koʻrsatadi.",
          ru: "Середина XIX века, Кокандское ханство. Молодой ташкентский купец Отабек женится в Маргилане на Кумуш, но из-за интриг и клеветы Хомида им приходится расстаться. Под давлением матери Отабек берёт вторую жену Зайнаб; обезумевшая от ревности Зайнаб отравляет Кумуш. На фоне любовной трагедии писатель показывает кровавую политическую борьбу в ханстве, резню кипчаков и внутренние язвы общества. Текст — полный, на узбекском; есть аудиокнига.",
          en: "The mid-19th century, the Kokand Khanate. Otabek, a young merchant from Tashkent, marries Kumush in Margilan, but the intrigues and slander of Homid force them apart. Pressed by his mother, Otabek takes a second wife, Zaynab, who, maddened by jealousy, poisons Kumush. Against this tragedy of love the novel shows the bloody politics of the khanate, the massacre of the Kipchaks and the hidden wounds of society. Full text in Uzbek; an audiobook is available." },
      link: ZN+"abdulla-qodiriy/abdulla-qodiriy-otkan-kunlar-roman/" },
    { t: { uz: "Mehrobdan chayon", ru: "Скорпион из алтаря", en: "The Scorpion from the Altar" }, y: "1929", k: "roman", text: "texts/qodiriy-1.txt", audio: ["mehrob"],
      s: { uz: "Qoʻqon xoni Xudoyorxon saroyida kechadigan roman. Yetim Anvar Solih maxdumning uyida tarbiyalanib, iqtidori tufayli xon devonxonasida munshiylar boshligʻiga aylanadi va maxdumning qizi Raʼnoni sevadi. Xudoyorxon Raʼnoni oʻz haramiga olmoqchi boʻlganda, yoshlar doʻstlari yordamida fitna va xavf-xatarlar orasidan najot yoʻlini izlaydi. Maxdum obrazi — ikkiyuzlamachi «mehrobdagi chayon» — asarning eng yorqin satirik qahramoni.",
          ru: "Роман о дворе кокандского хана Худоярхана. Сирота Анвар, воспитанный в доме Солиха махдума, благодаря таланту становится главой писцов ханской канцелярии и влюбляется в дочь махдума Рано. Когда Худоярхан хочет забрать Рано в свой гарем, молодые с помощью друзей ищут спасения среди интриг и опасностей. Образ махдума — лицемерного «скорпиона из алтаря» — самый яркий сатирический персонаж книги. Полный текст на узбекском; есть аудиокнига.",
          en: "A novel set at the court of Khudoyorkhan, Khan of Kokand. The orphan Anvar, raised in the house of Solih makhdum, rises through talent to head the scribes of the khan's chancery and falls in love with the makhdum's daughter Ra'no. When the khan wants Ra'no for his harem, the young pair, helped by friends, seek escape amid intrigue and danger. The makhdum, a hypocritical “scorpion in the altar”, is the book's most vivid satirical figure. Full text in Uzbek; an audiobook is available." },
      link: ZN+"abdulla-qodiriy/abdulla-qodiriy-mehrobdan-chayon-roman/" },
    { t: { uz: "Uloqda", ru: "На улаке", en: "At the Uloq" }, y: "1915", k: "hikoya", text: "texts/qodiriy-2.txt", audio: ["uloqda"],
      s: { uz: "Qodiriyning ilk hikoyasi: akasining taqiqiga qaramay qishloqdagi uloq (koʻpkari) oʻyiniga ketgan bolaning bir kunlik sarguzashti. Bola koʻzi bilan koʻrilgan qishloq hayoti, chavandozlar va olomon jonli tasvirlangan.",
          ru: "Первый рассказ Кадыри: день из жизни мальчика, который вопреки запрету старшего брата отправился на улак (козлодрание) в соседнее село. Сельская жизнь, наездники и толпа живо показаны глазами ребёнка. Текст — в оригинале; есть аудиозапись.",
          en: "Qodiriy's first story: a day in the life of a boy who, against his elder brother's orders, goes to watch an uloq (buzkashi) game in the village. Village life, the riders and the crowd are drawn vividly through a child's eyes. The text is in Uzbek; an audio recording is available." },
      link: ZN+"abdulla-qodiriy/abdulla-qodiriy-uloqda-hikoya/" }
  ]
},
cholpon: {
  path: { uz: ["Andijonlik savdogar oʻgʻli, 17 yoshida matbuotda chiqqan yosh shoir", "Zamonaviy oʻzbek sheʼriyatining asoschisi va «Hamlet» tarjimoni"],
          ru: ["Сын андижанского купца, в 17 лет напечатавшийся в газетах", "Основатель современной узбекской поэзии и переводчик «Гамлета»"],
          en: ["An Andijan merchant's son, published in the press at 17", "Founder of modern Uzbek poetry and translator of Hamlet"] },
  works: [
    { t: { uz: "Kecha va kunduz", ru: "Ночь и день", en: "Night and Day" }, y: "1936", k: "roman", text: "texts/cholpon-0.txt", textPart: true, audio: ["kecha"],
      s: { uz: "Goʻzal ovozli qiz Zebi oʻzidan ancha katta Akbarali mingboshiga toʻrtinchi xotin qilib beriladi. Mingboshining ayyor xizmatkori Miryoqub, rashkchi kundoshlar va chor amaldorlari orasida yosh qizning taqdiri fojia bilan tugaydi: kundoshi bergan «duo» zahar boʻlib chiqadi, Zebi esa aybsiz ayblanib Sibirga surgun qilinadi. Roman XX asr boshidagi Turkiston hayotining teran psixologik manzarasi.",
          ru: "Девушку с прекрасным голосом Зеби выдают четвёртой женой за намного старшего Акбарали-мингбаши. Среди хитрого слуги мингбаши Мирякуба, ревнивых соперниц и царских чиновников судьба юной девушки кончается трагедией: «приворотное средство», данное соперницей, оказывается ядом, а безвинную Зеби ссылают в Сибирь. Роман — глубокая психологическая картина жизни Туркестана начала XX века. На сайте — начальные главы; полная версия — по ссылке и в аудиокниге.",
          en: "Zebi, a girl with a beautiful voice, is married off as the fourth wife of the much older Akbarali, a district chief. Among the chief's cunning servant Miryoqub, jealous co-wives and Tsarist officials, the young girl's fate ends in tragedy: a “love charm” given by a co-wife turns out to be poison, and the innocent Zebi is exiled to Siberia. The novel is a profound psychological portrait of Turkestan in the early 20th century. The site shows the opening chapters; the full text is at the link and in the audiobook." },
      link: ZN+"abdulhamid-cholpon/abdulhamid-cholpon-kecha-va-kunduz-roman/" },
    { t: { uz: "Sheʼrlar", ru: "Стихи", en: "Poems" }, y: "1920–1930", k: "sher", text: "texts/cholpon-2.txt", audio: ["cholpon_sher"],
      s: { uz: "«Goʻzal», «Buzilgan oʻlkaga», «Xalq», «Binafsha» va boshqa sheʼrlar. Choʻlpon lirikasida erk, vatan, goʻzallik va sogʻinch yangicha ohang va obrazlar bilan kuylangan.",
          ru: "«Красавица», «Разрушенному краю», «Народ», «Фиалка» и другие стихи. В лирике Чулпана свобода, родина, красота и тоска воспеты с новой интонацией и образностью. Текст — в оригинале; есть аудиозаписи.",
          en: "“Beauty”, “To the Ruined Land”, “The People”, “The Violet” and other poems. Cho'lpon's lyrics sing of freedom, homeland, beauty and longing with a new tone and imagery. The text is in Uzbek; audio recordings are available." },
      link: ZZ+"abdulhamid-chulpon/" },
    { t: { uz: "Doʻxtur Muhammadiyor", ru: "Доктор Мухаммадияр", en: "Doctor Muhammadiyor" }, y: "1914", k: "hikoya", text: "texts/cholpon-1.txt",
      s: { uz: "Choʻlponning ilk hikoyasi. Keksa Hoji Ahmad yolgʻiz oʻgʻli Muhammadiyorni zamonaviy maktabda oʻqitishga qaror qiladi; yigit tabib boʻlib, xalqiga xizmat qiladi. Jadid gʻoyalari ruhidagi ibratli asar.",
          ru: "Первый рассказ Чулпана. Старый Хаджи Ахмад решает дать единственному сыну Мухаммадияру современное образование; юноша становится врачом и служит своему народу. Поучительное произведение в духе идей джадидов. Текст — в оригинале.",
          en: "Cho'lpon's first story. Old Hoji Ahmad decides to give his only son Muhammadiyor a modern education; the young man becomes a doctor and serves his people. An instructive work in the spirit of Jadid ideas. The text is in the original Uzbek." },
      link: ZN+"abdulhamid-cholpon/" }
  ]
},
hamza: {
  path: { uz: ["Qoʻqonlik tabibning oʻgʻli", "Oʻzbek dramaturgiyasi va milliy qoʻshiqchiligining asoschilaridan"],
          ru: ["Сын кокандского лекаря", "Один из основателей узбекской драматургии и национальной песни"],
          en: ["The son of a Kokand physician", "A founder of Uzbek drama and national song"] },
  works: [
    { t: { uz: "Zaharli hayot yoxud ishq qurbonlari", ru: "Отравленная жизнь, или Жертвы любви", en: "Poisoned Life, or Victims of Love" }, y: "1916", k: "drama",
      s: { uz: "Ota-onaning ochkoʻzligi va majburiy nikoh tufayli ikki sevishgan yoshning halok boʻlishi haqidagi fojia. Asar oʻz davrida eskicha urf-odatlarga qarshi keskin ovoz boʻlgan.",
          ru: "Трагедия о гибели двух влюблённых из-за корысти родителей и насильственного брака. В своё время пьеса прозвучала резким протестом против старых обычаев.",
          en: "A tragedy of two young lovers destroyed by their parents' greed and a forced marriage; in its day a sharp protest against old customs." },
      link: ZN+"hamza-hakimzoda-niyoziy/amza-akimzoda-niyozij-za-arli-ayot-yo/" },
    { t: { uz: "Maysaraning ishi", ru: "Проделки Майсары", en: "Maysara's Tricks" }, y: "1926", k: "komediya",
      s: { uz: "Epchil va dono kampir Maysara jiyanini qoʻlga kiritmoqchi boʻlgan qozi va uning odamlarini aql bilan laqillatadi. Oʻzbek teatrining eng koʻp qoʻyilgan komediyalaridan biri.",
          ru: "Ловкая и мудрая старушка Майсара хитростью обводит вокруг пальца казия и его людей, пожелавших завладеть её родственницей. Одна из самых часто ставящихся комедий узбекского театра.",
          en: "Maysara, a quick-witted old woman, outwits the qazi and his men who want to seize her young relative. One of the most frequently staged comedies of the Uzbek theatre." },
      link: ZN+"hamza-hakimzoda-niyoziy/amza-akimzoda-niyozij-burungi-ozil/" },
    { t: { uz: "Sheʼrlar va qoʻshiqlar", ru: "Стихи и песни", en: "Poems and songs" }, y: "1915–1928", k: "sher", text: "texts/hamza-2.txt",
      s: { uz: "Hamzaning gʻazal va milliy qoʻshiq matnlari: «Bir kelub ketsun» va boshqalar. Ularning aksariyatini shoirning oʻzi kuyga solgan.",
          ru: "Газели и тексты национальных песен Хамзы: «Пусть придёт хоть раз» и другие. Большинство из них поэт сам положил на музыку. Текст — в оригинале.",
          en: "Hamza's ghazals and national song lyrics, such as “Let Him Come Once”; the poet set most of them to music himself. The text is in the original Uzbek." },
      link: ZZ+"hamza-hakimzoda/" }
  ]
},
ayniy: {
  path: { uz: ["Buxoro amirligidagi qishloqda yetim qolgan bola", "Oʻzbek va tojik adabiyotining klassigi, akademiya prezidenti"],
          ru: ["Мальчик-сирота из селения Бухарского эмирата", "Классик узбекской и таджикской литературы, президент академии"],
          en: ["An orphan from a village of the Emirate of Bukhara", "A classic of Uzbek and Tajik literature and president of an academy"] },
  works: [
    { t: { uz: "Qullar", ru: "Рабы", en: "Slaves" }, y: "1934", k: "roman",
      s: { uz: "Bir necha avlod dehqonlarining XIX asrdan XX asr 30-yillarigacha boʻlgan hayoti: qul savdosi, amirlik zulmi va inqilobiy oʻzgarishlar. Tojik nasrining ilk yirik romanlaridan.",
          ru: "Жизнь нескольких поколений крестьян с XIX века до 1930-х годов: работорговля, гнёт эмирата и революционные перемены. Один из первых крупных романов таджикской прозы.",
          en: "The lives of several generations of peasants from the 19th century to the 1930s: the slave trade, the emirate's oppression and revolutionary change; one of the first major novels of Tajik prose." },
      link: ZN+"sadriddin-ayniy/" },
    { t: { uz: "Doxunda", ru: "Дохунда", en: "Dokhunda" }, y: "1930", k: "roman",
      s: { uz: "Togʻlik kambagʻal yigit Yodgorning Buxoroga kelib, mardikorlikdan ongli inson darajasigacha oʻsgan hayot yoʻli. Roman nomi — togʻdagi qishloq nomi.",
          ru: "Путь бедного горца Ёдгора, пришедшего в Бухару и выросшего от подёнщика до сознательного человека. Название романа — имя горного селения.",
          en: "The path of Yodgor, a poor highlander who comes to Bukhara and grows from a day labourer into a conscious man. The title is the name of a mountain village." },
      link: ZN+"sadriddin-ayniy/" },
    { t: { uz: "Esdaliklar", ru: "Воспоминания", en: "Memoirs" }, y: "1949–1954", k: "memuar",
      s: { uz: "Ayniyning bolaligi, Buxoro madrasalaridagi hayoti, jadid doʻstlari va amirlik davridagi Buxoro haqidagi xotiralari. Tarixchilar uchun ham bebaho manba.",
          ru: "Воспоминания Айни о детстве, жизни в бухарских медресе, друзьях-джадидах и Бухаре времён эмирата. Бесценный источник и для историков.",
          en: "Ayni's recollections of his childhood, life in the Bukhara madrasas, his Jadid friends and Bukhara under the emirate; an invaluable source for historians too." },
      link: ZN+"sadriddin-ayniy/" }
  ]
},
qoriniyoziy: {
  path: { uz: ["Xoʻjandlik madrasa talabasi, matematikani mustaqil oʻrgangan", "Oʻzbekiston Fanlar akademiyasining birinchi prezidenti"],
          ru: ["Студент медресе из Ходжента, самостоятельно изучивший математику", "Первый президент Академии наук Узбекистана"],
          en: ["A madrasa student from Khujand who taught himself mathematics", "The first president of the Academy of Sciences of Uzbekistan"] },
  works: [
    { t: { uz: "Ulugʻbekning astronomik maktabi", ru: "Астрономическая школа Улугбека", en: "The Astronomical School of Ulugh Beg" }, y: "1950", k: "ilmiy",
      s: { uz: "Samarqand rasadxonasi, uning asboblari va Ulugʻbek shogirdlarining ishlarini chuqur tahlil qilgan monografiya. Muallif «Ziji Koʻragoniy»ning oʻz davri uchun misli koʻrilmagan aniqligini isbotlagan.",
          ru: "Монография, глубоко анализирующая Самаркандскую обсерваторию, её инструменты и труды учеников Улугбека. Автор доказал беспрецедентную для своего времени точность «Зиджа Гурагани».",
          en: "A monograph that analyses in depth the Samarkand observatory, its instruments and the work of Ulugh Beg's pupils, demonstrating the unprecedented accuracy of the Zij-i Gurgani for its time." } },
    { t: { uz: "Oliy matematika darsliklari", ru: "Учебники высшей математики", en: "Higher mathematics textbooks" }, y: "1930-yillar", k: "darslik",
      s: { uz: "Oʻzbek tilida yozilgan ilk oliy matematika darsliklari. Qori-Niyoziy analitik geometriya va matematik analizni ona tilida birinchi bor tizimli bayon qildi.",
          ru: "Первые учебники высшей математики на узбекском языке. Кары-Ниязов впервые систематически изложил аналитическую геометрию и математический анализ на родном языке.",
          en: "The first higher mathematics textbooks in Uzbek. Qori-Niyoziy was the first to set out analytic geometry and calculus systematically in his mother tongue." } },
    { t: { uz: "Matematik atamalar lugʻati", ru: "Словарь математических терминов", en: "Dictionary of mathematical terms" }, y: "", k: "ilmiy",
      s: { uz: "Oʻzbek tilida matematik terminologiyani shakllantirgan lugʻat. Undagi koʻplab atamalar hozirgacha maktab va oliy taʼlimda qoʻllanadi.",
          ru: "Словарь, сформировавший математическую терминологию узбекского языка. Многие его термины до сих пор используются в школах и вузах.",
          en: "A dictionary that shaped Uzbek mathematical terminology; many of its terms are still used in schools and universities." } }
  ]
},
rajabiy: {
  path: { uz: ["Toshkentlik yosh dutorchi", "«Shashmaqom»ni avlodlar uchun saqlab qolgan akademik"],
          ru: ["Юный ташкентский дутарист", "Академик, сохранивший «Шашмаком» для будущих поколений"],
          en: ["A young dutar player from Tashkent", "An academician who preserved the Shashmaqom for future generations"] },
  works: [
    { t: { uz: "Shashmaqom", ru: "Шашмаком", en: "Shashmaqom" }, y: "1966–1975", k: "musiqa",
      s: { uz: "Olti maqom (Buzruk, Rost, Navo, Dugoh, Segoh, Iroq) ning toʻliq nota yozuvi, olti jildda. Asrlar davomida ustozdan shogirdga ogʻzaki oʻtib kelgan murakkab musiqa merosi birinchi marta qogʻozga tushirildi.",
          ru: "Полная нотная запись шести макомов (Бузрук, Рост, Наво, Дугох, Сегох, Ирок) в шести томах. Сложнейшее музыкальное наследие, веками передававшееся устно от мастера к ученику, впервые было записано.",
          en: "The complete notation of the six maqoms (Buzruk, Rost, Navo, Dugoh, Segoh, Iroq) in six volumes. A complex musical heritage passed orally from master to pupil for centuries was written down for the first time." } },
    { t: { uz: "Oʻzbek xalq musiqasi", ru: "Узбекская народная музыка", en: "Uzbek Folk Music" }, y: "1955–1959", k: "musiqa",
      s: { uz: "Besh jildlik toʻplam: xalq qoʻshiqlari, lapar, yalla va cholgʻu kuylari yozuvi. Oʻzbek musiqashunosligining asosiy manbalaridan biri.",
          ru: "Сборник в пяти томах: записи народных песен, ляпаров, ялла и инструментальных мелодий. Один из главных источников узбекского музыковедения.",
          en: "A five-volume collection of folk songs, lapar, yalla and instrumental tunes; one of the main sources of Uzbek musicology." } },
    { t: { uz: "Maqomchilar ansambli", ru: "Ансамбль макомистов", en: "The Maqom Ensemble" }, y: "1959", k: "musiqa",
      s: { uz: "Oʻzbekiston radiosi qoshida tuzilgan ansambl maqom sanʼatini jonli ijroda saqlab, yangi avlod hofizlarini tarbiyaladi. Hozir u Yunus Rajabiy nomi bilan ataladi.",
          ru: "Ансамбль при Узбекском радио сохранил искусство макома в живом исполнении и воспитал новое поколение певцов. Сейчас он носит имя Юнуса Раджаби.",
          en: "The ensemble at Uzbek Radio kept the maqom alive in performance and trained a new generation of singers. It now bears Yunus Rajabiy's name." } }
  ]
},
gulom: {
  path: { uz: ["Erta yetim qolgan, mardikorlik qilgan toshkentlik bola", "Oʻzbekistonning birinchi xalq shoiri va akademik"],
          ru: ["Рано осиротевший ташкентский мальчишка, работавший подёнщиком", "Первый народный поэт Узбекистана и академик"],
          en: ["A Tashkent boy orphaned early who worked as a day labourer", "Uzbekistan's first People's Poet and an academician"] },
  works: [
    { t: { uz: "Shum bola", ru: "Озорник", en: "The Mischievous Boy" }, y: "1936", k: "qissa",
      s: { uz: "Uydan qochgan sho'x bola Qoravoy va uning doʻsti Omonning sarguzashtlari: ular bozorlar, choyxonalar, eshon hovlilari va boylar uylarini kezib, turli odamlarga duch keladi. Hazil ortida yozuvchi eski turmushning adolatsizliklari va xalqning donoligini koʻrsatadi. 1977-yilda film suratga olingan.",
          ru: "Приключения озорного мальчишки Каравая, сбежавшего из дома, и его друга Амана: они бродят по базарам, чайханам, дворам ишанов и домам богачей, встречая самых разных людей. За юмором писатель показывает несправедливость старого быта и народную мудрость. В 1977 году снят фильм.",
          en: "The adventures of Qoravoy, a mischievous boy who runs away from home, and his friend Omon as they roam bazaars, teahouses, the courtyards of holy men and the houses of the rich, meeting all kinds of people. Behind the humour the author shows the injustices of old ways and the wisdom of ordinary folk. Filmed in 1977." },
      link: ZN+"gafur-gulom/" },
    { t: { uz: "Sen yetim emassan", ru: "Ты не сирота", en: "You Are Not an Orphan" }, y: "1942", k: "sher",
      s: { uz: "Urush yillarida Oʻzbekistonga koʻchirilgan yetim bolalarga bagʻishlangan sheʼr. Shoir oʻzbek xonadonlari bu bolalarni oʻz farzandidek qabul qilganini koʻrsatadi; sheʼr xalqlar doʻstligi va mehr ramziga aylangan.",
          ru: "Стихотворение, посвящённое детям-сиротам, эвакуированным в Узбекистан в годы войны. Поэт показывает, как узбекские семьи принимали их как родных; стихотворение стало символом милосердия.",
          en: "A poem dedicated to orphaned children evacuated to Uzbekistan during the war. The poet shows Uzbek families taking them in as their own; the poem became a symbol of compassion." },
      link: ZZ+"gafur-gulom/" },
    { t: { uz: "Mening oʻgʻrigina bolam", ru: "Мой воришка", en: "My Little Thief" }, y: "", k: "hikoya", audio: ["gulom_ogri"],
      s: { uz: "Kichkina oʻgʻrilik qilgan bola va uning onasi haqidagi taʼsirchan hikoya: ona mehri va uyat hissi orqali bola qanday tarbiyalanishi koʻrsatiladi.",
          ru: "Трогательный рассказ о мальчике, совершившем мелкую кражу, и его матери: как материнская любовь и чувство стыда воспитывают ребёнка. Есть аудиозапись.",
          en: "A moving story about a boy who commits a petty theft and his mother, showing how a mother's love and a sense of shame bring a child up. An audio recording is available." },
      link: ZN+"gafur-gulom/" }
  ]
},
oybek: {
  path: { uz: ["Toshkentlik toʻquvchining oʻgʻli", "Oʻzbek tarixiy romanining asoschisi, akademik"],
          ru: ["Сын ташкентского ткача", "Основатель узбекского исторического романа, академик"],
          en: ["The son of a Tashkent weaver", "Founder of the Uzbek historical novel and an academician"] },
  works: [
    { t: { uz: "Navoiy", ru: "Навои", en: "Navoi" }, y: "1944", k: "roman",
      s: { uz: "Alisher Navoiyning Hirotdagi hayoti: Husayn Boyqaro saroyi, vazirlik yillari, ijodiy izlanishlar va saroy fitnalari bilan kurash. Oybek buyuk shoirni insonparvar, xalq dardiga hamdard davlat arbobi sifatida gavdalantirgan.",
          ru: "Жизнь Алишера Навои в Герате: двор Хусейна Байкары, годы визирства, творческие поиски и борьба с придворными интригами. Айбек показал великого поэта гуманистом и государственным деятелем, сочувствующим народу.",
          en: "Alisher Navoi's life in Herat: the court of Husayn Bayqara, his years as vizier, his creative search and his struggle with court intrigue. Oybek portrays the great poet as a humanist statesman who shared the people's suffering." },
      link: ZN+"oybek/" },
    { t: { uz: "Qutlugʻ qon", ru: "Священная кровь", en: "Sacred Blood" }, y: "1940", k: "roman",
      s: { uz: "1916-yilgi qoʻzgʻolon arafasidagi Toshkent. Kambagʻal yigit Yoʻlchi boy Mirzakarimboy xonadonida xizmat qiladi va uning qizi Gulnorni sevadi; yigitning ongi uygʻonishi xalq qoʻzgʻoloni bilan birga kechadi.",
          ru: "Ташкент накануне восстания 1916 года. Бедный юноша Юлчи служит в доме богача Мирзакаримбая и любит его родственницу Гулнор; пробуждение сознания юноши совпадает с народным восстанием.",
          en: "Tashkent on the eve of the 1916 uprising. Yo'lchi, a poor youth, serves in the house of the rich Mirzakarimboy and loves Gulnor; his awakening coincides with the popular revolt." },
      link: ZN+"oybek/" },
    { t: { uz: "Bolalik", ru: "Детство", en: "Childhood" }, y: "1962", k: "qissa", audio: ["fanorchi"],
      s: { uz: "Yozuvchining XX asr boshidagi Toshkentda oʻtgan bolaligi haqidagi xotira-qissa: mahalla, maktab, oila va bolalik dunyosi. Sahifaga «Fanorchi ota» hikoyasining audioyozuvi ham qoʻshilgan.",
          ru: "Повесть-воспоминание о детстве писателя в Ташкенте начала XX века: махалля, школа, семья и мир ребёнка. К странице добавлена аудиозапись рассказа «Фонарщик».",
          en: "A memoir-novella of the writer's childhood in early 20th-century Tashkent: the neighbourhood, school, family and the world of a child. An audio recording of the story “The Lamplighter” is attached." },
      link: ZN+"oybek/" }
  ]
},
qahhor: {
  path: { uz: ["Qoʻqonlik temirchining oʻgʻli", "Oʻzbek hikoyasining ustasi va ustoz adib"],
          ru: ["Сын кокандского кузнеца", "Мастер узбекского рассказа и наставник писателей"],
          en: ["The son of a Kokand blacksmith", "Master of the Uzbek short story and a mentor to writers"] },
  works: [
    { t: { uz: "Sinchalak", ru: "Птичка-невеличка", en: "The Little Bird" }, y: "1958", k: "qissa", audio: ["sinchalak"],
      s: { uz: "Yosh va gʻayratli qiz Saida kolxoz raisi Qalandarovning takabburligi va eski qarashlariga qarshi chiqadi. Qissa ayolning jamiyatdagi oʻrni va rahbarning masʼuliyati haqida; radiospektakl yozuvi mavjud.",
          ru: "Молодая энергичная Саида выступает против самодурства и косности председателя колхоза Каландарова. Повесть о месте женщины в обществе и ответственности руководителя; есть запись радиоспектакля.",
          en: "Saida, a young and energetic woman, stands up to the arrogance and backward views of the collective-farm chairman Qalandarov. A novella about a woman's place in society and a leader's responsibility; a radio play recording is available." },
      link: ZN+"abdulla-qahhor/" },
    { t: { uz: "Oʻtmishdan ertaklar", ru: "Сказки о былом", en: "Tales of the Past" }, y: "1965", k: "qissa",
      s: { uz: "Yozuvchining Fargʻona vodiysi qishloqlarida oʻtgan bolaligi haqidagi avtobiografik qissa: temirchi ota, qashshoqlik, qishloq odamlari va eski maktab. Kulgi va achchiq haqiqat yonma-yon keladi.",
          ru: "Автобиографическая повесть о детстве писателя в кишлаках Ферганской долины: отец-кузнец, бедность, сельские люди и старая школа. Смех и горькая правда идут рядом.",
          en: "An autobiographical novella of the writer's childhood in the villages of the Fergana Valley: a blacksmith father, poverty, village people and the old school, with laughter and bitter truth side by side." },
      link: ZN+"abdulla-qahhor/" },
    { t: { uz: "Anor", ru: "Гранат", en: "The Pomegranate" }, y: "1936", k: "hikoya", audio: ["anor", "bemor", "ogri", "dahshat"],
      s: { uz: "Homilador xotini anor soʻraydi, ammo kambagʻal Turobjonning pulga qurbi yetmaydi va u anor oʻgʻirlashga majbur boʻladi. Bir necha sahifada yozuvchi qashshoqlik fojiasini koʻrsatgan. Sahifaga «Bemor», «Oʻgʻri», «Dahshat» hikoyalarining audioyozuvlari ham qoʻshilgan.",
          ru: "Беременная жена просит граната, но у бедного Туробджона нет денег, и он вынужден его украсть. На нескольких страницах писатель показал трагедию бедности. К странице добавлены аудиозаписи рассказов «Больная», «Вор», «Ужас».",
          en: "A pregnant wife longs for a pomegranate, but poor Turobjon cannot afford one and is driven to steal it. In a few pages the writer shows the tragedy of poverty. Audio recordings of “The Patient”, “The Thief” and “Horror” are attached." },
      link: ZN+"abdulla-qahhor/" }
  ]
},
olimjon: {
  path: { uz: ["Jizzaxlik yigit, pedagogika akademiyasi talabasi", "Oʻzbekiston Yozuvchilar uyushmasi rahbari, oʻz davrining eng sevimli shoiri"],
          ru: ["Юноша из Джизака, студент педагогической академии", "Глава Союза писателей Узбекистана, любимейший поэт своего времени"],
          en: ["A youth from Jizzakh studying at a teacher-training academy", "Head of the Writers' Union and the best-loved poet of his day"] },
  works: [
    { t: { uz: "Sheʼrlar", ru: "Стихи", en: "Poems" }, y: "1929–1944", k: "sher", text: "texts/olimjon-2.txt",
      s: { uz: "«Oʻrik gullaganda» va boshqa lirik sheʼrlar: bahor, muhabbat va hayot quvonchi haqida.",
          ru: "«Когда цветёт урюк» и другие лирические стихи о весне, любви и радости жизни. Текст — в оригинале.",
          en: "“When the Apricot Blossoms” and other lyric poems on spring, love and the joy of life. The text is in the original Uzbek." },
      link: ZZ+"hamid-olimjon/" },
    { t: { uz: "Zaynab va Omon", ru: "Зайнаб и Аман", en: "Zaynab and Omon" }, y: "1938", k: "doston",
      s: { uz: "Ikki yoshning sevgisi va ularning baxti yoʻlidagi toʻsiqlar haqidagi lirik-epik doston. Asarda oʻzbek qishlogʻi hayoti va yangi davr kishilari tasvirlangan.",
          ru: "Лиро-эпическая поэма о любви двух молодых людей и препятствиях на пути к их счастью, с картинами жизни узбекского кишлака и людей новой эпохи.",
          en: "A lyric-epic poem about the love of two young people and the obstacles to their happiness, with scenes of Uzbek village life and the people of a new age." } },
    { t: { uz: "Oygul bilan Baxtiyor", ru: "Айгуль и Бахтияр", en: "Oygul and Bakhtiyor" }, y: "1937", k: "doston",
      s: { uz: "Xalq ertagi asosidagi doston: zolim podshoh qoʻliga tushgan goʻzal Oygul va uni qutqarish uchun ogʻir sinovlardan oʻtgan Baxtiyor haqida. Sadoqat va erk haqida sheʼriy ertak.",
          ru: "Поэма по мотивам народной сказки о красавице Айгуль, попавшей во власть жестокого правителя, и о Бахтияре, прошедшем тяжкие испытания ради её спасения. Поэтическая сказка о верности и свободе.",
          en: "A poem based on a folk tale about the beautiful Oygul, captive of a cruel ruler, and Bakhtiyor, who passes through hard trials to save her; a verse tale of fidelity and freedom." } }
  ]
},
abdullayev: {
  path: { uz: ["Xoʻjandlik yosh geolog", "Konlarni bashorat qilish nazariyasi muallifi, Fanlar akademiyasi prezidenti"],
          ru: ["Молодой геолог из Ходжента", "Автор теории прогнозирования месторождений, президент Академии наук"],
          en: ["A young geologist from Khujand", "Author of a theory for predicting ore deposits and president of the Academy of Sciences"] },
  works: [
    { t: { uz: "Rudali konlar genezisi", ru: "Генезис рудных месторождений", en: "The genesis of ore deposits" }, y: "", k: "ilmiy",
      s: { uz: "Magmatik jinslar va rudali konlar oʻrtasidagi qonuniy bogʻliqlikni isbotlagan tadqiqotlar. Bu nazariya konlarni tasodifan emas, ilmiy prognoz asosida qidirish imkonini berdi.",
          ru: "Исследования, доказавшие закономерную связь между магматическими породами и рудными месторождениями. Теория позволила искать месторождения не наугад, а на основе научного прогноза.",
          en: "Research proving the regular link between igneous rocks and ore deposits, which made it possible to search for deposits by scientific forecast rather than by chance." } },
    { t: { uz: "Olmaliq konlari tadqiqi", ru: "Исследование месторождений Алмалыка", en: "Studies of the Olmaliq deposits" }, y: "", k: "ilmiy",
      s: { uz: "Oʻzbekistondagi eng yirik mis va polimetall konlari hududini oʻrganish ishlari. Ular respublika togʻ-kon sanoatining rivojiga asos boʻldi.",
          ru: "Изучение района крупнейших в Узбекистане медных и полиметаллических месторождений, ставшее основой развития горнорудной промышленности республики.",
          en: "Work on the region of Uzbekistan's largest copper and polymetallic deposits, which laid the foundation for the republic's mining industry." } },
    { t: { uz: "Geologiya ilmiy maktabi", ru: "Геологическая научная школа", en: "A school of geology" }, y: "1947–1962", k: "ilmiy",
      s: { uz: "Abdullayev tarbiyalagan geologlar avlodi va u asos solgan institut hozir ham uning nomi bilan faoliyat yuritadi.",
          ru: "Поколение геологов, воспитанных Абдуллаевым, и основанный им институт, который до сих пор носит его имя.",
          en: "The generation of geologists Abdullayev trained, and the institute he founded, which still bears his name." } }
  ]
},
sodiqov: {
  path: { uz: ["Toshkentlik kimyo talabasi", "Bioorganik kimyo maktabi asoschisi, 18 yil akademiya prezidenti"],
          ru: ["Ташкентский студент-химик", "Основатель школы биоорганической химии, 18 лет президент академии"],
          en: ["A chemistry student from Tashkent", "Founder of a school of bioorganic chemistry and president of the academy for 18 years"] },
  works: [
    { t: { uz: "Oʻsimlik alkaloidlari tadqiqi", ru: "Исследование растительных алкалоидов", en: "Research on plant alkaloids" }, y: "", k: "ilmiy",
      s: { uz: "Oʻrta Osiyo oʻsimliklaridan oʻnlab yangi alkaloidlarni ajratib olish va ularning tuzilishini aniqlash. Bu ishlar dori vositalarini yaratishga asos boʻldi.",
          ru: "Выделение из растений Средней Азии десятков новых алкалоидов и установление их строения. Эти работы легли в основу создания лекарств.",
          en: "Isolating dozens of new alkaloids from Central Asian plants and determining their structure, work that laid the basis for new medicines." } },
    { t: { uz: "Bioorganik kimyo instituti", ru: "Институт биоорганической химии", en: "Institute of Bioorganic Chemistry" }, y: "1973", k: "ilmiy",
      s: { uz: "Sodiqov tashabbusi bilan tashkil etilgan institut oqsillar, fermentlar va biologik faol moddalarni oʻrganuvchi yirik markazga aylandi.",
          ru: "Созданный по инициативе Садыкова институт стал крупным центром изучения белков, ферментов и биологически активных веществ.",
          en: "Founded on Sodiqov's initiative, the institute became a major centre for the study of proteins, enzymes and biologically active substances." } },
    { t: { uz: "Paxta kimyosi", ru: "Химия хлопчатника", en: "Cotton chemistry" }, y: "", k: "ilmiy",
      s: { uz: "Gʻoʻza oʻsimligi va paxta tolasining kimyoviy tarkibini oʻrganish, chiqindilardan foydali mahsulotlar olish boʻyicha tadqiqotlar.",
          ru: "Изучение химического состава хлопчатника и волокна и получение полезных продуктов из отходов.",
          en: "Studies of the chemical composition of the cotton plant and fibre and of obtaining useful products from its waste." } }
  ]
},
sarimsoqov: {
  path: { uz: ["Namangan qishlogʻidan chiqqan matematik", "Oʻzbek matematika maktabining asoschisi"],
          ru: ["Математик из наманганского кишлака", "Основатель узбекской математической школы"],
          en: ["A mathematician from a Namangan village", "Founder of the Uzbek school of mathematics"] },
  works: [
    { t: { uz: "Topologik yarimmaydonlar", ru: "Топологические полуполя", en: "Topological semifields" }, y: "", k: "ilmiy",
      s: { uz: "Funksional analizda yangi yoʻnalish: haqiqiy sonlar xossalarini umumlashtiruvchi algebraik-topologik tuzilmalar nazariyasi. Bu sohada koʻplab shogirdlar dissertatsiya yoqlagan.",
          ru: "Новое направление функционального анализа: теория алгебро-топологических структур, обобщающих свойства действительных чисел. В этой области защитили диссертации многие его ученики.",
          en: "A new direction in functional analysis: a theory of algebraic-topological structures generalising the properties of the real numbers, in which many of his students wrote dissertations." } },
    { t: { uz: "Markov zanjirlari nazariyasi", ru: "Теория цепей Маркова", en: "Theory of Markov chains" }, y: "", k: "ilmiy",
      s: { uz: "Ehtimollar nazariyasidagi tadqiqotlar: tasodifiy jarayonlarning uzoq muddatli xatti-harakatini oʻrganish.",
          ru: "Исследования по теории вероятностей: изучение долговременного поведения случайных процессов.",
          en: "Research in probability theory on the long-term behaviour of random processes." } },
    { t: { uz: "Matematika instituti", ru: "Институт математики", en: "Institute of Mathematics" }, y: "", k: "ilmiy",
      s: { uz: "Sarimsoqov rahbarlik qilgan va rivojlantirgan institut hozir uning nomi bilan ataladi.",
          ru: "Институт, который Сарымсаков возглавлял и развивал, сегодня носит его имя.",
          en: "The institute Sarimsoqov led and developed now bears his name." } }
  ]
},
zulfiya: {
  path: { uz: ["Toshkentlik hunarmand qizi", "Oʻzbekiston xalq shoiri, sadoqat va sogʻinch kuychisi"],
          ru: ["Дочь ташкентского ремесленника", "Народная поэтесса Узбекистана, певица верности и тоски"],
          en: ["The daughter of a Tashkent craftsman", "People's Poet of Uzbekistan, the voice of fidelity and longing"] },
  works: [
    { t: { uz: "Hijron kunlarida", ru: "В дни разлуки", en: "In the Days of Parting" }, y: "1944", k: "sher",
      s: { uz: "Turmush oʻrtogʻi Hamid Olimjon vafotidan keyin yozilgan sheʼrlar turkumi. Shaxsiy dard sadoqat va hayotga muhabbat bilan uygʻunlashib, butun bir avlod ayollarining his-tuygʻusini ifodalaydi.",
          ru: "Цикл стихов, написанных после гибели мужа, Хамида Алимджана. Личное горе сливается с верностью и любовью к жизни, выражая чувства целого поколения женщин.",
          en: "A cycle of poems written after the death of her husband, Hamid Olimjon. Personal grief merges with fidelity and love of life, voicing the feelings of a whole generation of women." },
      link: ZZ+"zulfiya/" },
    { t: { uz: "Quyoshli qalam", ru: "Солнечное перо", en: "The Sunlit Pen" }, y: "1970", k: "doston",
      s: { uz: "Hamid Olimjonga bagʻishlangan doston: shoirning hayoti, ijodi va ular birga oʻtkazgan yillar xotirasi.",
          ru: "Поэма, посвящённая Хамиду Алимджану: жизнь и творчество поэта и память о годах, прожитых вместе.",
          en: "A poem dedicated to Hamid Olimjon: the poet's life and work and the memory of the years they shared." },
      link: ZZ+"zulfiya/" },
    { t: { uz: "Bahor keldi seni soʻroqlab", ru: "Весна пришла, спрашивая о тебе", en: "Spring Came Asking for You" }, y: "", k: "sher",
      s: { uz: "Zulfiyaning eng mashhur sheʼrlaridan: har bahor yoʻqotilgan yor xotirasini qayta uygʻotadi. Sheʼr qoʻshiq boʻlib ham kuylangan.",
          ru: "Одно из самых известных стихотворений Зульфии: каждая весна заново пробуждает память об ушедшем любимом. Стихотворение стало и песней.",
          en: "One of Zulfiya's best-known poems: each spring reawakens the memory of a lost beloved. It has also been sung as a song." },
      link: ZZ+"zulfiya/" }
  ]
},
ahmarov: {
  path: { uz: ["Uraldan kelgan yosh rassom", "Navoiy teatri va metro bekatlarini bezagan monumental sanʼat ustasi"],
          ru: ["Молодой художник с Урала", "Мастер монументального искусства, расписавший театр Навои и метро"],
          en: ["A young artist from the Urals", "A master of monumental art who decorated the Navoi Theatre and the metro"] },
  works: [
    { t: { uz: "Navoiy teatri devoriy suratlari", ru: "Росписи театра имени Навои", en: "Murals of the Navoi Theatre" }, y: "1944–1947", k: "rasm",
      s: { uz: "Teatr foyelaridagi devoriy rasmlar Navoiy dostonlari — «Farhod va Shirin», «Layli va Majnun», «Sabʼai sayyor» qahramonlarini miniatyura uslubida tasvirlaydi. Ular urushdan keyingi yillarda yaratilib, Davlat mukofotiga sazovor boʻlgan.",
          ru: "Росписи в фойе театра изображают в миниатюрной манере героев поэм Навои — «Фархада и Ширин», «Лейли и Меджнуна», «Семи планет». Созданы в послевоенные годы и удостоены Государственной премии.",
          en: "The foyer murals depict, in the manner of miniature painting, the heroes of Navoi's poems “Farhod and Shirin”, “Layli and Majnun” and “The Seven Planets”. Created in the post-war years, they won the State Prize." } },
    { t: { uz: "«Alisher Navoiy» metro bekati", ru: "Станция метро «Алишер Навои»", en: "“Alisher Navoi” metro station" }, y: "1984", k: "rasm",
      s: { uz: "Toshkent metrosining eng goʻzal bekatlaridan biri: gumbazli shiftlar va Navoiy asarlari mavzusidagi keramik pannolar.",
          ru: "Одна из красивейших станций ташкентского метро: купольные своды и керамические панно на сюжеты произведений Навои.",
          en: "One of the most beautiful stations of the Tashkent metro, with domed vaults and ceramic panels on themes from Navoi's works." } },
    { t: { uz: "Ayol portretlari", ru: "Женские портреты", en: "Portraits of women" }, y: "", k: "rasm",
      s: { uz: "Ahmarovning dastgohli asarlari: Sharq miniatyurasining nafis chiziqlari bilan chizilgan ayol portretlari. Ular uning oʻziga xos uslubining eng yorqin namunalaridir.",
          ru: "Станковые работы Ахмарова: женские портреты, написанные изысканной линией восточной миниатюры, — яркие образцы его самобытного стиля.",
          en: "Akhmarov's easel works: portraits of women drawn with the refined line of Eastern miniature, the finest examples of his distinctive style." } }
  ]
},
saidahmad: {
  path: { uz: ["Toshkentlik yosh muxbir, qatagʻondan omon qaytgan yozuvchi", "Oʻzbekiston Qahramoni, xalq sevgan kulgi va lirika ustasi"],
          ru: ["Молодой ташкентский корреспондент, вернувшийся из лагеря", "Герой Узбекистана, любимый народом мастер юмора и лирики"],
          en: ["A young Tashkent reporter who survived the camps", "Hero of Uzbekistan and a beloved master of humour and lyricism"] },
  works: [
    { t: { uz: "Ufq", ru: "Горизонт", en: "Horizon" }, y: "1964–1974", k: "roman", audio: ["ufq"],
      s: { uz: "Uch kitobdan iborat trilogiya urush yillarida oʻzbek qishlogʻida qolgan ayollar, qariyalar va bolalarning mehnati va matonatini koʻrsatadi. Radiospektakl yozuvi mavjud.",
          ru: "Трилогия из трёх книг о труде и стойкости женщин, стариков и детей, оставшихся в узбекском кишлаке в годы войны. Есть запись радиоспектакля.",
          en: "A trilogy about the labour and endurance of the women, old people and children left in an Uzbek village during the war. A radio play recording is available." },
      link: ZN+"said-ahmad/" },
    { t: { uz: "Kelinlar qoʻzgʻoloni", ru: "Бунт невесток", en: "The Revolt of the Daughters-in-Law" }, y: "1976", k: "komediya",
      s: { uz: "Qattiqqoʻl qaynona Farmonbibi bir hovlida yashovchi yetti kelinini qatʼiy tartibda boshqaradi; bir kun kelinlar «qoʻzgʻolon» koʻtaradi. Oila, avlodlar munosabati va hurmat haqidagi quvnoq komediya.",
          ru: "Строгая свекровь Фармонбиби железной рукой управляет семью невестками, живущими в одном дворе, пока однажды те не поднимают «бунт». Весёлая комедия о семье, отношениях поколений и уважении.",
          en: "The stern mother-in-law Farmonbibi rules her seven daughters-in-law in one courtyard with an iron hand, until one day they rise in “revolt”. A cheerful comedy about family, generations and respect." },
      link: ZN+"said-ahmad/" },
    { t: { uz: "Boʻston", ru: "Бустон", en: "The Orchard" }, y: "", k: "hikoya", audio: ["boston"],
      s: { uz: "Said Ahmadning lirik hikoyalaridan biri: bogʻ, mehnat va inson qalbining nozik kechinmalari. Hikoyaning audioyozuvi mavjud.",
          ru: "Один из лирических рассказов Саида Ахмада: сад, труд и тонкие переживания человеческой души. Есть аудиозапись.",
          en: "One of Said Ahmad's lyrical stories: an orchard, labour and the subtle feelings of the human heart. An audio recording is available." },
      link: ZN+"said-ahmad/" }
  ]
},
pqodirov: {
  path: { uz: ["Togʻ qishlogʻidan chiqqan talaba", "Bobur va temuriylar davrini qayta tiriltirgan xalq yozuvchisi"],
          ru: ["Студент из горного кишлака", "Народный писатель, воскресивший эпоху Бабура и Тимуридов"],
          en: ["A student from a mountain village", "A People's Writer who brought the age of Babur and the Timurids back to life"] },
  works: [
    { t: { uz: "Yulduzli tunlar", ru: "Звёздные ночи", en: "Starry Nights" }, y: "1978", k: "roman",
      s: { uz: "Boburning Andijondagi yoshligidan Hindistondagi soʻnggi kunlarigacha boʻlgan hayoti. Yozuvchi hukmdorni emas, balki shubha, xato va sogʻinchga toʻla insonni koʻrsatadi. Roman «Boburnoma» asosida yozilgan.",
          ru: "Жизнь Бабура от юности в Андижане до последних дней в Индии. Писатель показывает не правителя, а человека, полного сомнений, ошибок и тоски. Роман основан на «Бабур-наме».",
          en: "Babur's life from his youth in Andijan to his last days in India. The writer shows not a ruler but a man full of doubts, mistakes and longing. The novel is based on the Baburnama." },
      link: ZN+"pirimqul-qodirov/" },
    { t: { uz: "Avlodlar dovoni", ru: "Перевал поколений", en: "The Pass of Generations" }, y: "1988", k: "roman",
      s: { uz: "«Yulduzli tunlar»ning davomi: Bobur avlodlari — Humoyun va Akbar davrida Hindistondagi saltanat taqdiri, otalar va oʻgʻillar munosabati.",
          ru: "Продолжение «Звёздных ночей»: судьба империи в Индии при потомках Бабура — Хумаюне и Акбаре, отношения отцов и сыновей.",
          en: "The sequel to “Starry Nights”: the fate of the empire in India under Babur's heirs Humayun and Akbar, and the relations of fathers and sons." },
      link: ZN+"pirimqul-qodirov/" },
    { t: { uz: "Ilinj", ru: "Надежда", en: "Hope" }, y: "", k: "hikoya", audio: ["ilinj"],
      s: { uz: "Pirimqul Qodirovning hikoyasi: inson qalbidagi umid va sabr haqida. Audioyozuvi mavjud.",
          ru: "Рассказ Пиримкула Кадырова о надежде и терпении в человеческом сердце. Есть аудиозапись.",
          en: "A story by Pirimqul Qodirov about hope and patience in the human heart. An audio recording is available." },
      link: ZN+"pirimqul-qodirov/" }
  ]
},
tansiqboyev: {
  path: { uz: ["Toshkentlik yosh rassom", "Oʻzbek manzara rangtasvirining asoschisi, SSSR xalq rassomi"],
          ru: ["Молодой ташкентский художник", "Основатель узбекской пейзажной живописи, народный художник СССР"],
          en: ["A young Tashkent painter", "Founder of Uzbek landscape painting and People's Artist of the USSR"] },
  works: [
    { t: { uz: "Tong. Qayroqqum suv ombori", ru: "Утро. Кайраккумское водохранилище", en: "Morning. The Kayrakkum Reservoir" }, y: "1957", k: "rasm",
      s: { uz: "Suv ombori ustidagi tong: koʻk-yashil suv, uzoqdagi togʻlar va keng osmon. Tansiqboyevning eng mashhur asarlaridan, tabiatning ulugʻvorligi va sokinligini ifodalaydi.",
          ru: "Утро над водохранилищем: сине-зелёная вода, далёкие горы и широкое небо. Одна из самых известных работ Тансыкбаева, передающая величие и покой природы.",
          en: "Morning over the reservoir: blue-green water, distant mountains and a wide sky. One of Tansykbaev's best-known works, conveying the grandeur and calm of nature." } },
    { t: { uz: "Ona yurt", ru: "Родной край", en: "Native Land" }, y: "", k: "rasm",
      s: { uz: "Oʻzbekiston togʻlari va vodiylarining keng manzarasi. Rassom oʻz yurtiga boʻlgan muhabbatini rang va yorugʻlik orqali ifodalagan.",
          ru: "Широкая панорама гор и долин Узбекистана. Художник выразил любовь к родному краю через цвет и свет.",
          en: "A broad panorama of Uzbekistan's mountains and valleys; the painter expresses his love of his homeland through colour and light." } },
    { t: { uz: "Qizil tush", ru: "Красный полдень", en: "Red Noon" }, y: "", k: "rasm",
      s: { uz: "Issiq yoz kunining choʻl manzarasi: qizgʻish tuproq, jazirama havo va quyosh yorugʻi. Rassomning rang bilan tajribalari namunasi.",
          ru: "Степной пейзаж знойного летнего дня: красноватая земля, раскалённый воздух и солнечный свет. Образец экспериментов художника с цветом.",
          en: "A steppe landscape on a scorching summer day: reddish earth, shimmering air and sunlight; an example of the painter's experiments with colour." } }
  ]
},
zokirov: {
  path: { uz: ["Mashhur xonandalar oilasida tugʻilgan bola", "Oʻzbek estradasining asoschisi va «Oʻzbekiston» myuzik-xoli rahbari"],
          ru: ["Мальчик из семьи знаменитых певцов", "Основатель узбекской эстрады и руководитель мюзик-холла «Узбекистан»"],
          en: ["A boy born into a family of famous singers", "Founder of Uzbek pop music and director of the Uzbekistan music hall"] },
  works: [
    { t: { uz: "Arab tangosi", ru: "Арабское танго", en: "Arabian Tango" }, y: "1957", k: "musiqa",
      s: { uz: "1957-yilgi Moskva festivalida ijro etilgan qoʻshiq Zokirovga butun ittifoq miqyosida shuhrat keltirdi. Qoʻshiq arab tilida kuylangan va oʻsha davr estradasi uchun yangi ohang edi.",
          ru: "Песня, исполненная на Московском фестивале 1957 года, принесла Закирову всесоюзную славу. Она звучала на арабском языке и стала новым словом для эстрады того времени.",
          en: "Performed at the 1957 Moscow festival, the song brought Zokirov fame across the Soviet Union. Sung in Arabic, it was something new for the pop music of the time." } },
    { t: { uz: "«Oʻzbekiston» myuzik-xoli", ru: "Мюзик-холл «Узбекистан»", en: "The Uzbekistan music hall" }, y: "1972", k: "musiqa",
      s: { uz: "Zokirov asos solgan teatr: qoʻshiq, raqs va sahna koʻrinishlarini birlashtirgan tomoshalar yangi estrada madaniyatini shakllantirdi.",
          ru: "Основанный Закировым театр: представления, соединявшие песню, танец и сценки, сформировали новую эстрадную культуру.",
          en: "The theatre Zokirov founded: shows combining song, dance and sketches shaped a new popular culture." } },
    { t: { uz: "Rangtasvir va hikoyalar", ru: "Живопись и рассказы", en: "Paintings and stories" }, y: "", k: "rasm",
      s: { uz: "Xonanda ayni paytda iqtidorli rassom va yozuvchi edi: uning rasmlari koʻrgazmalarda namoyish etilgan, hikoya va esselari matbuotda chiqqan.",
          ru: "Певец был также одарённым художником и писателем: его картины выставлялись, рассказы и эссе публиковались.",
          en: "The singer was also a gifted painter and writer; his paintings were exhibited and his stories and essays published." } }
  ]
},
vohidov: {
  path: { uz: ["Oltiariqlik qishloq bolasi", "«Oʻzbegim» muallifi, Oʻzbekiston Qahramoni va «Faust» tarjimoni"],
          ru: ["Сельский мальчик из Алтыарыка", "Автор «Узбегим», Герой Узбекистана и переводчик «Фауста»"],
          en: ["A village boy from Oltiariq", "Author of “O'zbegim”, Hero of Uzbekistan and translator of Faust"] },
  works: [
    { t: { uz: "Oʻzbegim", ru: "Узбегим (Мой узбек)", en: "O'zbegim (My Uzbek)" }, y: "1968", k: "sher",
      s: { uz: "Xalq tarixi, buyuk ajdodlar va milliy gʻurur haqidagi qasida. Shoir Temur, Ulugʻbek, Navoiy va Bobur nomlarini tilga olib, xalqni oʻz qadrini anglashga chaqiradi. Sheʼr qoʻshiq sifatida ham mashhur.",
          ru: "Ода об истории народа, великих предках и национальном достоинстве. Называя имена Темура, Улугбека, Навои и Бабура, поэт призывает народ осознать свою ценность. Стихотворение известно и как песня.",
          en: "An ode on the nation's history, its great ancestors and national dignity. Naming Temur, Ulugh Beg, Navoi and Babur, the poet calls on his people to know their worth. It is also famous as a song." },
      link: ZN+"erkin-vohidov/" },
    { t: { uz: "Ruhlar isyoni", ru: "Восстание душ", en: "The Revolt of Spirits" }, y: "1979", k: "doston",
      s: { uz: "Bengal shoiri Nazrul Islom hayoti haqidagi doston: mustamlaka zulmiga qarshi kurash, ijodkor erki va vijdon haqida falsafiy mulohazalar.",
          ru: "Поэма о жизни бенгальского поэта Назрула Ислама: борьба против колониального гнёта, философские размышления о свободе творца и совести.",
          en: "A poem on the life of the Bengali poet Nazrul Islam: the struggle against colonial oppression and philosophical reflections on the artist's freedom and conscience." },
      link: ZN+"erkin-vohidov/" },
    { t: { uz: "Oltin devor", ru: "Золотая стена", en: "The Golden Wall" }, y: "", k: "komediya", audio: ["oltin_devor"],
      s: { uz: "Qoʻshni ikki xonadon orasidagi devor ostidan xazina chiqadi degan mish-mish atrofidagi quvnoq komediya: ochkoʻzlik va doʻstlik sinovi. Radiospektakl yozuvi mavjud.",
          ru: "Весёлая комедия о слухах, будто под стеной между двумя соседскими дворами зарыт клад: испытание жадностью и дружбой. Есть запись радиоспектакля.",
          en: "A cheerful comedy about a rumour of treasure buried under the wall between two neighbours' courtyards, a test of greed and friendship. A radio play recording is available." },
      link: ZN+"erkin-vohidov/" }
  ]
},
xolmirzayev: {
  path: { uz: ["Boysun togʻlarida oʻsgan bola", "Oʻzbek psixologik nasrining ustasi, xalq yozuvchisi"],
          ru: ["Мальчик, выросший в горах Байсуна", "Мастер узбекской психологической прозы, народный писатель"],
          en: ["A boy who grew up in the Boysun mountains", "A master of Uzbek psychological prose and People's Writer"] },
  works: [
    { t: { uz: "Qil koʻprik", ru: "Мост из волоса", en: "The Hair Bridge" }, y: "1984", k: "roman",
      s: { uz: "Inson hayotidagi axloqiy tanlov haqidagi roman: nom ham diniy tasavvurdagi qildan ingichka, qilichdan oʻtkir koʻprikka ishora qiladi, uning ustidan faqat vijdoni pok odam oʻtadi.",
          ru: "Роман о нравственном выборе человека. Название отсылает к религиозному образу моста тоньше волоса и острее меча, по которому пройдёт лишь человек с чистой совестью.",
          en: "A novel about moral choice. The title alludes to the religious image of a bridge thinner than a hair and sharper than a sword, which only a person with a clear conscience can cross." },
      link: ZN+"shukur-xolmirzayev/" },
    { t: { uz: "Soʻnggi bekat", ru: "Последняя остановка", en: "The Last Stop" }, y: "1976", k: "roman",
      s: { uz: "Hayotining soʻnggi bosqichida oʻtmishini qayta koʻrib chiqayotgan qahramon haqidagi roman: xotira, pushaymonlik va inson qadri.",
          ru: "Роман о герое, который на последнем этапе жизни переосмысливает своё прошлое: память, раскаяние и достоинство человека.",
          en: "A novel about a hero who, at the last stage of his life, reconsiders his past: memory, remorse and human dignity." },
      link: ZN+"shukur-xolmirzayev/" },
    { t: { uz: "Hikoyalar", ru: "Рассказы", en: "Short stories" }, y: "", k: "hikoya",
      s: { uz: "«Yoʻlovchi», «Olaboʻji», «Bodom qishda gulladi» va boshqa hikoyalar: togʻ tabiati, ovchilar, otlar va itlar, sokin, ammo ichki kurashga toʻla odamlar.",
          ru: "«Путник», «Олабуджи», «Миндаль зацвёл зимой» и другие рассказы: горная природа, охотники, кони и собаки, внешне спокойные, но полные внутренней борьбы люди.",
          en: "“The Traveller”, “Olabo'ji”, “The Almond Blossomed in Winter” and other stories: mountain nature, hunters, horses and dogs, and people calm outside but full of inner struggle." },
      link: ZN+"shukur-xolmirzayev/" }
  ]
},
oripov: {
  path: { uz: ["Qashqadaryolik qishloq bolasi", "Davlat madhiyasi muallifi, Oʻzbekiston Qahramoni"],
          ru: ["Сельский мальчик из Кашкадарьи", "Автор слов государственного гимна, Герой Узбекистана"],
          en: ["A village boy from Kashkadarya", "Author of the national anthem's words and Hero of Uzbekistan"] },
  works: [
    { t: { uz: "Sheʼrlar", ru: "Стихи", en: "Poems" }, y: "1965–2016", k: "sher", audio: ["oripov_sher"],
      s: { uz: "«Men nechun sevaman Oʻzbekistonni», «Vatan», «Ona», «Manqurt», «Hayot» va boshqa sheʼrlar. Oripov lirikasi vatan, insof, xotira va hayot mazmuni haqidagi falsafiy fikrlarga boy. Sahifada 24 sheʼrning audioyozuvi bor.",
          ru: "«За что я люблю Узбекистан», «Родина», «Мать», «Манкурт», «Жизнь» и другие стихи. Лирика Арипова богата философскими размышлениями о родине, совести, памяти и смысле жизни. На странице — аудиозаписи 24 стихотворений.",
          en: "“Why I Love Uzbekistan”, “Homeland”, “Mother”, “Mankurt”, “Life” and other poems. Oripov's lyrics are rich in philosophical thought on homeland, conscience, memory and the meaning of life. The page includes audio recordings of 24 poems." },
      link: ZZ+"abdulla-oripov/" },
    { t: { uz: "Davlat madhiyasi", ru: "Государственный гимн", en: "The National Anthem" }, y: "1992", k: "sher",
      s: { uz: "Mustaqil Oʻzbekiston madhiyasining soʻzlari (musiqasi Mutal Burhonovniki). Unda vatanning goʻzalligi, xalqning tarixi va kelajakka ishonchi ulugʻlanadi.",
          ru: "Слова гимна независимого Узбекистана (музыка Мутала Бурханова). В них прославляются красота родины, история народа и вера в будущее.",
          en: "The words of the anthem of independent Uzbekistan (music by Mutal Burhonov), celebrating the beauty of the homeland, the people's history and faith in the future." } },
    { t: { uz: "Jannatga yoʻl", ru: "Дорога в рай", en: "The Road to Paradise" }, y: "", k: "doston",
      s: { uz: "Dantening «Ilohiy komediya»si ruhida yozilgan falsafiy doston: inson amallari, gunoh va savob, vijdon oldidagi javobgarlik haqida.",
          ru: "Философская поэма в духе «Божественной комедии» Данте: о поступках человека, грехе и добре, ответственности перед совестью.",
          en: "A philosophical poem in the spirit of Dante's Divine Comedy about human deeds, sin and virtue, and answering to one's conscience." },
      link: ZZ+"abdulla-oripov/" }
  ]
},
hoshimov: {
  path: { uz: ["Toshkent mahallasida oʻsgan bola", "Eng koʻp oʻqiladigan oʻzbek yozuvchilaridan, xalq yozuvchisi"],
          ru: ["Мальчик, выросший в ташкентской махалле", "Один из самых читаемых узбекских писателей, народный писатель"],
          en: ["A boy who grew up in a Tashkent neighbourhood", "One of the most widely read Uzbek writers, a People's Writer"] },
  works: [
    { t: { uz: "Dunyoning ishlari", ru: "Дела земные", en: "Affairs of the World" }, y: "1982", k: "qissa",
      s: { uz: "Onaga bagʻishlangan hikoyalar turkumi. Har bir hikoya onaning oddiy, ammo ulugʻ mehrini, farzand uchun qilgan fidoyiligini va oʻgʻilning kech anglagan qarzini koʻrsatadi.",
          ru: "Цикл рассказов, посвящённых матери. Каждый показывает простую, но великую материнскую любовь, её самоотверженность ради ребёнка и долг, который сын осознаёт слишком поздно.",
          en: "A cycle of stories dedicated to the author's mother. Each shows a mother's simple but boundless love, her self-sacrifice for her child and the debt a son realises too late." },
      link: Z+"ozbek-ziyolilari/otkir-hoshimov-1941-2013/" },
    { t: { uz: "Ikki eshik orasi", ru: "Между двух дверей", en: "Between Two Doors" }, y: "1986", k: "roman",
      s: { uz: "Bir mahalla odamlarining urush va urushdan keyingi yillardagi taqdiri, voqealar turli qahramonlar tilidan hikoya qilinadi. Roman sadoqat, xiyonat va kechirim haqida.",
          ru: "Судьбы жителей одной махалли в военные и послевоенные годы; события рассказаны от лица разных героев. Роман о верности, предательстве и прощении.",
          en: "The fates of the people of one neighbourhood during and after the war, told in the voices of different characters; a novel about loyalty, betrayal and forgiveness." },
      link: Z+"ozbek-ziyolilari/otkir-hoshimov-1941-2013/" },
    { t: { uz: "Daftar hoshiyasidagi bitiklar", ru: "Записи на полях тетради", en: "Notes in the Margins of a Notebook" }, y: "2001", k: "nasr",
      s: { uz: "Yozuvchining hayot, inson va jamiyat haqidagi qisqa, hikmatli qaydlari. Kitob koʻplab iqtiboslar manbai boʻlib qolgan.",
          ru: "Короткие афористичные заметки писателя о жизни, человеке и обществе. Книга стала источником множества цитат.",
          en: "The writer's short, aphoristic notes on life, people and society; the book has become a source of countless quotations." } }
  ]
},
yusuf: {
  path: { uz: ["Marhamatlik qishloq yigiti", "Sheʼrlari qoʻshiqqa aylangan xalq shoiri"],
          ru: ["Сельский парень из Мархамата", "Народный поэт, чьи стихи стали песнями"],
          en: ["A village lad from Marhamat", "A People's Poet whose verses became songs"] },
  works: [
    { t: { uz: "Osmonning oxiri", ru: "Край неба", en: "The Edge of the Sky" }, y: "", k: "doston", audio: ["osmon"],
      s: { uz: "Muhammad Yusufning dostoni: vatan, ona va hayot mazmuni haqidagi lirik mushohadalar. Audioyozuvi mavjud.",
          ru: "Поэма Мухаммада Юсуфа: лирические размышления о родине, матери и смысле жизни. Есть аудиозапись.",
          en: "A poem by Muhammad Yusuf: lyrical reflections on homeland, mother and the meaning of life. An audio recording is available." },
      link: ZZ+"muhammad-yusuf/" },
    { t: { uz: "Uyqudagi qiz", ru: "Спящая девушка", en: "The Sleeping Girl" }, y: "1989", k: "sher",
      s: { uz: "Shoirning mashhur toʻplami: muhabbat, qishloq manzaralari va samimiy tuygʻular sodda, qoʻshiqqa yaqin tilda ifodalangan.",
          ru: "Известный сборник поэта: любовь, сельские картины и искренние чувства выражены простым, близким к песне языком.",
          en: "The poet's well-known collection: love, village scenes and sincere feeling in plain, song-like language." },
      link: ZZ+"muhammad-yusuf/" },
    { t: { uz: "Bulbulga bir gapim bor", ru: "У меня есть слово к соловью", en: "I Have a Word for the Nightingale" }, y: "1987", k: "sher",
      s: { uz: "Vatan, ona va yor haqidagi sheʼrlar toʻplami; undagi koʻp sheʼrlar mashhur xonandalar ijrosida qoʻshiq boʻlgan.",
          ru: "Сборник стихов о родине, матери и любимой; многие из них стали песнями в исполнении известных певцов.",
          en: "A collection of poems on homeland, mother and the beloved; many became songs performed by well-known singers." },
      link: ZZ+"muhammad-yusuf/" }
  ]
},
furqat_placeholder: null
};
delete window.MEROS_TOP.furqat_placeholder;
})();
