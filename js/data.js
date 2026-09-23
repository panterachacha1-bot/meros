/* MEROS — Oʻzbekiston buyuk siymolari ensiklopediyasi
   Maʼlumotlar bazasi. Har bir yozuv: id, ism, sana, soha, biografiya, xronologiya, asarlar. */

window.MEROS_FIELDS = {
  adabiyot: { name: "Adabiyot",  short: "Adabiyot",  desc: "Shoirlar, yozuvchilar, dramaturglar", num: "I"   },
  fan:      { name: "Fan",       short: "Fan",       desc: "Matematiklar, astronomlar, tabiblar, kimyogarlar", num: "II"  },
  tarix:    { name: "Tarix",     short: "Tarix",     desc: "Davlat arboblari va sarkardalar", num: "III" },
  sanat:    { name: "Sanʼat",    short: "Sanʼat",    desc: "Bastakorlar, rassomlar, xonandalar", num: "IV"  },
  marifat:  { name: "Maʼrifat",  short: "Maʼrifat",  desc: "Ulamolar, pedagoglar, jadidlar", num: "V"   }
};

window.MEROS_PEOPLE = [
{
  id: "navoiy",
  name: "Alisher Navoiy",
  fullName: "Nizomiddin Mir Alisher",
  field: "adabiyot",
  role: "Shoir, mutafakkir, davlat arbobi",
  born: { y: 1441, m: 2, d: 9, place: "Hirot" },
  died: { y: 1501, m: 1, d: 3, place: "Hirot" },
  photo: "img/navoiy.jpg", focus: "50% 12%",
  photoNote: "XVI asr miniatyurasi",
  summary: "Oʻzbek mumtoz adabiyotining asoschisi, turkiy tilda birinchi «Xamsa» yaratgan shoir va Temuriylar davlatining yirik arbobi.",
  bio: [
    "Alisher Navoiy 1441-yilning 9-fevralida Hirotda, Temuriylar saroyiga yaqin amaldor oilasida tugʻildi. Yoshligidan sheʼriyatga qiziqdi: toʻrt yoshida Farididdin Attorning «Mantiq ut-tayr» asarini yod bilgani haqida rivoyatlar saqlanib qolgan. Mashhad, Hirot va Samarqand madrasalarida tahsil oldi; bolalik doʻsti Husayn Boyqaro 1469-yilda Hirot taxtiga oʻtirgach, Navoiyni oʻz yoniga chaqirib, avval muhrdor, soʻng vazir lavozimiga tayinladi.",
    "Davlat ishlarida Navoiy adolat va obodonchilik tarafdori boʻldi: uning tashabbusi bilan Hirot va Xurosonda madrasalar, masjidlar, shifoxonalar, koʻpriklar va ariqlar qurildi. Ayni paytda u ijodni bir kun ham toʻxtatmadi. 1483–1485-yillarda ikki yil ichida besh dostondan iborat «Xamsa»ni yozib tugatdi — bu turkiy tilda yaratilgan birinchi toʻliq xamsa edi. Umrining oxirida toʻrt devondan iborat «Xazoyin ul-maoniy» kulliyotini tartib berdi.",
    "Navoiyning eng katta xizmati — turkiy (eski oʻzbek) tilini fors tili bilan teng mavqega koʻtargani. «Muhokamat ul-lugʻatayn» asarida u ikki tilni qiyoslab, turkiy tilning boyligi va ifoda imkoniyatlarini ilmiy asosladi. Shoir 1501-yil 3-yanvarda Hirotda vafot etdi. Bugun uning nomi bilan Oʻzbekistonda viloyat, shahar, universitet, teatr va kutubxonalar ataladi."
  ],
  timeline: [
    { y: 1441, t: "Hirotda tugʻildi" },
    { y: 1465, t: "Samarqandga borib, Xoja Fazlulloh Abullays madrasasida tahsil oldi" },
    { y: 1469, t: "Husayn Boyqaro taxtga oʻtirdi; Navoiy muhrdor etib tayinlandi" },
    { y: 1472, t: "Vazir (amir) lavozimini egalladi" },
    { y: 1483, t: "«Xamsa» ustida ish boshladi" },
    { y: 1485, t: "«Xamsa» tugallandi" },
    { y: 1491, t: "«Majolis un-nafois» tazkirasi yozildi" },
    { y: 1499, t: "«Muhokamat ul-lugʻatayn» va «Lison ut-tayr»" },
    { y: 1501, t: "Hirotda vafot etdi" }
  ],
  works: [
    { title: "Xamsa", year: "1483–1485", note: "«Hayrat ul-abror», «Farhod va Shirin», «Layli va Majnun», «Sabʼai sayyor», «Saddi Iskandariy»" },
    { title: "Xazoyin ul-maoniy", year: "1492–1498", note: "Toʻrt devondan iborat lirik kulliyot" },
    { title: "Majolis un-nafois", year: "1491", note: "Turkiy tildagi birinchi tazkira" },
    { title: "Muhokamat ul-lugʻatayn", year: "1499", note: "Turkiy va fors tillarining qiyosi" },
    { title: "Lison ut-tayr", year: "1499", note: "Falsafiy-tasavvufiy doston" },
    { title: "Mahbub ul-qulub", year: "1500", note: "Nasriy pandnoma" }
  ],
  quote: { text: "Odami ersang, demagil odami — onikim, yoʻq xalq gʻamidin gʻami.", src: "«Hayrat ul-abror»" },
  keyPoints: [
    "Turkiy tilda birinchi toʻliq «Xamsa» muallifi",
    "Husayn Boyqaro saroyida vazir boʻlib xizmat qilgan",
    "«Muhokamat ul-lugʻatayn»da turkiy til boyligini isbotlagan"
  ],
  related: ["bobur", "ulugbek", "oybek"]
},
{
  id: "bobur",
  name: "Zahiriddin Muhammad Bobur",
  fullName: "Zahiriddin Muhammad Bobur Mirzo",
  field: "adabiyot",
  role: "Shoir, tarixchi, Boburiylar davlati asoschisi",
  born: { y: 1483, m: 2, d: 14, place: "Andijon" },
  died: { y: 1530, m: 12, d: 26, place: "Agra" },
  photo: "img/bobur.jpg", focus: "50% 25%",
  photoNote: "XVII asr boshi, Hindiston miniatyurasi (Britaniya muzeyi)",
  summary: "«Boburnoma» muallifi, oʻzbek mumtoz sheʼriyatining yirik vakili va Hindistonda uch asr hukm surgan sulola asoschisi.",
  bio: [
    "Bobur 1483-yil 14-fevralda Andijonda, Fargʻona hokimi Umarshayx Mirzo oilasida dunyoga keldi. Amir Temurning beshinchi avlodi boʻlgan Bobur oʻn ikki yoshida otasi halok boʻlgach taxtga oʻtirdi va oʻsmirligidan boshlab qarindosh shahzodalar hamda Shayboniyxon bilan Movarounnahr uchun kurash olib bordi. Samarqandni ikki marta egallab, ikki marta yoʻqotdi.",
    "1504-yilda Kobulni egallagan Bobur u yerda oʻz davlatini mustahkamladi, 1526-yilda esa Panipat jangida Dehli sultoni Ibrohim Loʻdiyni yengib, Hindistonda Boburiylar saltanatiga asos soldi. Bu davlat XIX asr oʻrtalarigacha yashadi va Tojmahal kabi meʼmoriy durdonalarni dunyoga berdi.",
    "Bobur sarkarda va hukmdor boʻlish bilan birga nozik lirik shoir va sinchkov kuzatuvchi edi. Uning «Boburnoma» asari — Markaziy Osiyo, Afgʻoniston va Hindistonning tabiati, shaharlari, urf-odatlari, oʻsimlik va hayvonot dunyosi haqida aniq maʼlumot beruvchi noyob memuar. Asar dunyoning oʻnlab tillariga tarjima qilingan. Bobur 1530-yilda Agrada vafot etdi; vasiyatiga koʻra, jasadi Kobulga koʻchirilib, oʻzi sevgan bogʻda dafn etildi."
  ],
  timeline: [
    { y: 1483, t: "Andijonda tugʻildi" },
    { y: 1494, t: "Otasi vafotidan soʻng Fargʻona taxtiga oʻtirdi" },
    { y: 1497, t: "Samarqandni birinchi marta egalladi" },
    { y: 1504, t: "Kobulni egallab, u yerda davlat tuzdi" },
    { y: 1526, t: "Panipat jangi: Boburiylar saltanatiga asos solindi" },
    { y: 1530, t: "Agrada vafot etdi" }
  ],
  works: [
    { title: "Boburnoma", year: "1494–1529", note: "Turkiy tildagi birinchi yirik memuar-tarixiy asar" },
    { title: "Devon", year: "", note: "Gʻazallar, ruboiylar, tuyuqlar" },
    { title: "Mubayyin", year: "1521", note: "Sheʼriy shaklda yozilgan fiqh risolasi" },
    { title: "Aruz risolasi", year: "1523–1525", note: "Turkiy aruz nazariyasiga bagʻishlangan" },
    { title: "Xatti Boburiy", year: "", note: "Bobur ixtiro qilgan yozuv tizimi" }
  ],
  quote: { text: "Har kimki vafo qilsa, vafo topqusidur, har kimki jafo qilsa, jafo topqusidur.", src: "Ruboiy" },
  keyPoints: [
    "12 yoshida Fargʻona hukmdori boʻlgan",
    "1526-yilda Hindistonda Boburiylar davlatini tuzgan",
    "«Boburnoma» — turkiy tildagi birinchi memuar"
  ],
  related: ["navoiy", "temur", "pqodirov"]
},
{
  id: "xorazmiy",
  name: "Muhammad al-Xorazmiy",
  fullName: "Abu Abdulloh Muhammad ibn Muso al-Xorazmiy",
  field: "fan",
  role: "Matematik, astronom, geograf",
  born: { y: 783, place: "Xorazm", approx: true },
  died: { y: 850, place: "Bagʻdod", approx: true },
  photo: "img/xorazmiy.jpg", focus: "50% 30%",
  photoNote: "1983-yilgi pochta markasi (tasavvuriy portret)",
  summary: "Algebra fanining asoschisi; «algoritm» soʻzi uning nomidan, «algebra» soʻzi esa asari nomidan kelib chiqqan.",
  bio: [
    "Muhammad ibn Muso al-Xorazmiy taxminan 783-yilda Xorazmda tugʻildi. Uning hayoti haqida maʼlumotlar kam, ammo faoliyatining asosiy qismi Bagʻdodda, xalifa al-Maʼmun asos solgan «Baytul hikma» (Donishmandlik uyi) ilmiy markazida oʻtgani aniq. U yerda Xorazmiy kutubxonaga rahbarlik qildi va Sharqning eng yirik olimlari bilan birga ishladi.",
    "Xorazmiyning «Al-kitob al-muxtasar fi hisob al-jabr va-l-muqobala» asari chiziqli va kvadrat tenglamalarni yechishning umumiy qoidalarini birinchi marta tizimli bayon etdi. Asar nomidagi «al-jabr» soʻzi Yevropa tillariga «algebra» boʻlib kirdi. Hind raqamlari va oʻnlik sanoq tizimiga bagʻishlangan arifmetika kitobi lotin tiliga tarjima qilingach, Yevropa «arab raqamlari» bilan tanishdi; muallif nomining lotincha shakli — Algoritmi — «algoritm» atamasini berdi.",
    "Olim astronomiya jadvallari («Zij») tuzdi, Yer yuzasining tasviri («Kitob surat al-arz») bilan geografiyaga hissa qoʻshdi, quyosh soatlari va usturlob haqida risolalar yozdi. Xorazmiy taxminan 850-yilda vafot etdi. Uning xotirasiga Urganchda haykal oʻrnatilgan, Oyning koʻrinmas tomonidagi krater esa uning nomi bilan atalgan."
  ],
  timeline: [
    { y: 783, t: "Xorazmda tugʻildi (taxminan)" },
    { y: 813, t: "Al-Maʼmun xalifaligi boshlanishi; Bagʻdoddagi «Baytul hikma»da faoliyat" },
    { y: 820, t: "«Al-jabr va-l-muqobala» asari yozildi (taxminan)" },
    { y: 830, t: "«Kitob surat al-arz» — geografiya asari" },
    { y: 850, t: "Bagʻdodda vafot etdi (taxminan)" }
  ],
  works: [
    { title: "Al-kitob al-muxtasar fi hisob al-jabr va-l-muqobala", year: "≈820", note: "Algebra boʻyicha birinchi tizimli qoʻllanma" },
    { title: "Kitob al-hisob al-hindiy", year: "", note: "Oʻnlik sanoq tizimi va hind raqamlari haqida" },
    { title: "Zij al-Xorazmiy", year: "", note: "Astronomik jadvallar" },
    { title: "Kitob surat al-arz", year: "≈830", note: "Yer tasviri — geografiya va xaritalar" }
  ],
  quote: null,
  keyPoints: [
    "«Algebra» va «algoritm» soʻzlari u bilan bogʻliq",
    "Bagʻdoddagi «Baytul hikma»da ishlagan",
    "Oʻnlik sanoq tizimini Yevropaga tanitgan"
  ],
  related: ["fargoniy", "beruniy", "ulugbek"]
},
{
  id: "fargoniy",
  name: "Ahmad al-Fargʻoniy",
  fullName: "Abul Abbos Ahmad ibn Muhammad ibn Kasir al-Fargʻoniy",
  field: "fan",
  role: "Astronom, matematik, muhandis",
  born: { y: 798, place: "Fargʻona", approx: true },
  died: { y: 865, place: "Misr", approx: true },
  photo: "img/fargoniy.jpg", focus: "50% 20%",
  photoNote: "Fargʻona shahridagi haykal",
  summary: "Yevropada «Alfraganus» nomi bilan mashhur astronom; uning astronomiya darsligi Gʻarbda yetti asr davomida oʻqitilgan.",
  bio: [
    "Ahmad al-Fargʻoniy IX asr boshida Fargʻona vodiysida tugʻildi. Xorazmiy kabi u ham Bagʻdoddagi «Baytul hikma»da faoliyat yuritdi va xalifa al-Maʼmun davrida oʻtkazilgan yirik astronomik kuzatishlarda qatnashdi. Keyinchalik Misrga yuborilib, u yerda muhandislik ishlariga rahbarlik qildi.",
    "Uning asosiy asari — «Kitob fi usul ilm an-nujum» (Astronomiya asoslari haqida kitob). Bu asarda Ptolemey tizimi sodda va aniq bayon etilgan, Yerning sharsimonligi, sayyoralar harakati, tutilishlar va taqvimlar tushuntirilgan. XII asrda lotin tiliga tarjima qilingan kitob Yevropa universitetlarida XVII asrgacha asosiy darslik boʻlib xizmat qildi; Dante «Ilohiy komediya»da undagi maʼlumotlarga tayangan.",
    "Fargʻoniy Qohirada Nil daryosi sathini oʻlchaydigan «Nilometr» inshootini qurish ishlariga rahbarlik qildi (861). U taxminan 865-yilda Misrda vafot etdi. Olim nomi bilan Oydagi krater atalgan, Fargʻona shahrida va Qohirada haykallari oʻrnatilgan."
  ],
  timeline: [
    { y: 798, t: "Fargʻonada tugʻildi (taxminan)" },
    { y: 830, t: "Bagʻdodda al-Maʼmun astronomlari bilan kuzatishlar" },
    { y: 840, t: "«Astronomiya asoslari» asari yozildi (taxminan)" },
    { y: 861, t: "Qohirada Nilometr qurilishiga rahbarlik qildi" },
    { y: 865, t: "Misrda vafot etdi (taxminan)" }
  ],
  works: [
    { title: "Kitob fi usul ilm an-nujum", year: "≈840", note: "Yevropada «Elementa astronomica» nomi bilan mashhur" },
    { title: "Kitob al-usturlab", year: "", note: "Usturlob yasash va undan foydalanish haqida" },
    { title: "Nilometr", year: "861", note: "Qohiradagi Ravza orolida qurilgan gidrotexnik inshoot" }
  ],
  quote: null,
  keyPoints: [
    "Yevropada «Alfraganus» nomi bilan tanilgan",
    "Astronomiya darsligi Gʻarbda 700 yil oʻqitilgan",
    "Qohirada Nilometrni qurgan"
  ],
  related: ["xorazmiy", "beruniy", "ulugbek"]
},
{
  id: "beruniy",
  name: "Abu Rayhon Beruniy",
  fullName: "Abu Rayhon Muhammad ibn Ahmad al-Beruniy",
  field: "fan",
  role: "Qomusiy olim: astronom, matematik, geograf, tarixchi",
  born: { y: 973, m: 9, d: 4, place: "Kot, Xorazm" },
  died: { y: 1048, place: "Gʻazna" },
  photo: "img/beruniy.jpg", focus: "50% 30%",
  photoNote: "1973-yilgi pochta markasi",
  summary: "Oʻrta asrlar Sharqining eng yirik qomusiy olimi; 150 dan ortiq asar muallifi, Yer radiusini hisoblagan va Hindistonni ilmiy oʻrgangan.",
  bio: [
    "Abu Rayhon Beruniy 973-yil 4-sentabrda Xorazmning qadimgi poytaxti Kot shahrida tugʻildi. Yoshligidan matematika va astronomiya bilan shugʻullanib, 17 yoshida Kot kengligini oʻlchadi. Siyosiy notinchliklar tufayli Ray va Gurgonda yashadi, 1004-yilda Xorazmga qaytib, Gurganjdagi Maʼmun akademiyasida Ibn Sino bilan bir davrda faoliyat yuritdi.",
    "1017-yilda Mahmud Gʻaznaviy Xorazmni bosib olgach, Beruniy Gʻaznaga olib ketildi. Sulton yurishlari davomida u Hindistonga bordi, sanskrit tilini oʻrgandi va hind ilmi, dini, urf-odatlari haqida «Hindiston» asarini yozdi — bu asar hozir ham hindshunoslikning asosiy manbalaridan biri hisoblanadi. «Qonuni Masʼudiy» asarida trigonometriya va astronomiyaning oʻz davri uchun eng toʻliq bayonini berdi.",
    "Beruniy Yer radiusini oʻlchashning yangi usulini taklif qildi va juda aniq natija oldi, minerallarning solishtirma ogʻirligini aniqladi, Yerning Quyosh atrofida aylanishi mumkinligini muhokama qildi. «Osor ul-boqiya» asarida turli xalqlarning taqvimlari va bayramlarini taqqoslab, qiyosiy tarix fanining asoslarini yaratdi. Olim 1048-yilda Gʻaznada vafot etdi."
  ],
  timeline: [
    { y: 973, t: "Kot shahrida tugʻildi" },
    { y: 990, t: "17 yoshida Kot shahrining geografik kengligini oʻlchadi" },
    { y: 1000, t: "«Osor ul-boqiya» tugallandi" },
    { y: 1004, t: "Gurganjdagi Maʼmun akademiyasida faoliyat" },
    { y: 1017, t: "Mahmud Gʻaznaviy tomonidan Gʻaznaga olib ketildi" },
    { y: 1030, t: "«Hindiston» asari yozildi" },
    { y: 1037, t: "«Qonuni Masʼudiy» tugallandi" },
    { y: 1048, t: "Gʻaznada vafot etdi" }
  ],
  works: [
    { title: "Osor ul-boqiya", year: "≈1000", note: "Qadimgi xalqlardan qolgan yodgorliklar — xronologiya" },
    { title: "Hindiston", year: "1030", note: "Hind ilmi va madaniyati haqida fundamental asar" },
    { title: "Qonuni Masʼudiy", year: "1037", note: "Astronomiya va trigonometriya qomusi" },
    { title: "Mineralogiya", year: "", note: "Qimmatbaho toshlar haqida" },
    { title: "Saydana", year: "", note: "Dorivor moddalar haqida" },
    { title: "Geodeziya", year: "1025", note: "Shaharlar orasidagi masofalarni aniqlash usullari" }
  ],
  quote: null,
  keyPoints: [
    "150 dan ortiq ilmiy asar yozgan",
    "Yer radiusini yuqori aniqlikda hisoblagan",
    "«Hindiston» — hindshunoslikning asosiy manbasi"
  ],
  related: ["ibnsino", "xorazmiy", "ulugbek"]
},
{
  id: "ibnsino",
  name: "Abu Ali ibn Sino",
  fullName: "Abu Ali Husayn ibn Abdulloh ibn Sino",
  field: "fan",
  role: "Tabib, faylasuf, qomusiy olim",
  born: { y: 980, m: 8, place: "Afshona, Buxoro yaqinida" },
  died: { y: 1037, m: 6, place: "Hamadon" },
  photo: "img/ibnsino.jpg", focus: "50% 25%",
  photoNote: "Byust (Hamadon)",
  summary: "Yevropada «Avitsenna» nomi bilan mashhur; «Tib qonunlari» asari olti asr davomida dunyo tibbiyotining asosiy darsligi boʻlgan.",
  bio: [
    "Ibn Sino 980-yilda Buxoro yaqinidagi Afshona qishlogʻida tugʻildi. Oʻn yoshida Qurʼonni yod bildi, oʻn olti yoshida tabobat bilan shugʻullana boshladi. Somoniylar amiri Nuh ibn Mansurni davolagach, saroy kutubxonasidan foydalanish huquqini oldi va u yerda oʻz davrining barcha ilmlarini oʻrgandi. Yoshligida yozgan asarlari orasida falsafa va tibbiyotga oid risolalar bor.",
    "999-yilda Somoniylar davlati qulagach, Ibn Sino Buxoroni tark etdi: Gurganjdagi Maʼmun akademiyasida, soʻng Gurgon, Ray, Hamadon va Isfahonda yashadi. Hamadonda vazir lavozimini egalladi, ammo saroy fitnalari tufayli qamoqqa ham tushdi. Ana shu sarson-sargardon yillarda u eng yirik asarlarini yaratdi.",
    "«Tib qonunlari» (Al-Qonun fi-t-tibb) besh kitobdan iborat boʻlib, unda kasalliklarning sabablari, belgilari, davolash usullari va dorilar tizimli bayon etilgan. Asar XII asrda lotin tiliga tarjima qilinib, Yevropa universitetlarida XVII asrgacha oʻqitildi. «Kitob ash-shifo» falsafiy qomusi mantiq, fizika, matematika va metafizikani qamrab oladi. Ibn Sino 1037-yilda Hamadonda vafot etdi; maqbarasi shu shaharda."
  ],
  timeline: [
    { y: 980, t: "Afshonada tugʻildi" },
    { y: 997, t: "Amir Nuh ibn Mansurni davoladi; saroy kutubxonasiga kirish huquqi" },
    { y: 999, t: "Somoniylar davlati qulashi" },
    { y: 1002, t: "Buxorodan Gurganjga koʻchdi (taxminan)" },
    { y: 1012, t: "Gurgon va Rayda yashadi" },
    { y: 1015, t: "Hamadonda vazir etib tayinlandi (taxminan)" },
    { y: 1024, t: "Isfahonga koʻchdi" },
    { y: 1037, t: "Hamadonda vafot etdi" }
  ],
  works: [
    { title: "Tib qonunlari (Al-Qonun fi-t-tibb)", year: "1012–1024", note: "Besh kitobdan iborat tibbiyot qomusi" },
    { title: "Kitob ash-shifo", year: "", note: "Falsafa, mantiq, tabiiy fanlar qomusi" },
    { title: "Kitob an-najot", year: "", note: "«Ash-shifo»ning qisqacha bayoni" },
    { title: "Donishnoma", year: "", note: "Fors tilida yozilgan falsafiy asar" },
    { title: "Ruboiylar", year: "", note: "Hikmatli sheʼriy meros" }
  ],
  quote: null,
  keyPoints: [
    "Yevropada «Avitsenna» nomi bilan mashhur",
    "«Tib qonunlari» 600 yil davomida darslik boʻlgan",
    "16 yoshida tabobat bilan shugʻullana boshlagan"
  ],
  related: ["beruniy", "xorazmiy", "buxoriy"]
},
{
  id: "buxoriy",
  name: "Imom al-Buxoriy",
  fullName: "Abu Abdulloh Muhammad ibn Ismoil al-Buxoriy",
  field: "marifat",
  role: "Muhaddis, islom olimi",
  born: { y: 810, m: 7, d: 21, place: "Buxoro" },
  died: { y: 870, m: 9, d: 1, place: "Xartang, Samarqand yaqinida" },
  photo: "img/buxoriy.jpg", focus: "50% 50%",
  photoNote: "Xattotlik namunasi (ismi)",
  summary: "Islom olamida Qurʼondan keyingi eng ishonchli kitob sanalgan «Sahihi Buxoriy» hadislar toʻplamining muallifi.",
  bio: [
    "Muhammad ibn Ismoil al-Buxoriy 810-yilda Buxoroda tugʻildi. Yoshligidan favqulodda xotiraga ega boʻlgan: rivoyatlarga koʻra, oʻn yoshidayoq minglab hadislarni yod bilgan. 16 yoshida onasi va akasi bilan haj safariga otlanib, undan keyin oʻn olti yil davomida Makka, Madina, Bagʻdod, Damashq, Misr va Xurosonda hadis ilmi ustozlaridan taʼlim oldi.",
    "Al-Buxoriy oʻzi toʻplagan olti yuz mingga yaqin hadis orasidan eng ishonchlilarini tanlab, «Al-Jomeʼ as-sahih» toʻplamini tuzdi. Har bir hadisning roviylar zanjirini sinchiklab tekshirish uslubi keyinchalik hadisshunoslikning ilmiy asosiga aylandi. Toʻplam takrorlari bilan yetti mingdan ortiq hadisni oʻz ichiga oladi.",
    "Umrining oxirida Buxoroga qaytgan olim mahalliy hokim bilan kelishmovchilik sababli shaharni tark etib, Samarqand yaqinidagi Xartang qishlogʻiga koʻchdi va 870-yilda shu yerda vafot etdi. 1998-yilda uning maqbarasi oʻrnida katta yodgorlik majmuasi qurildi; bu joy bugun butun dunyodan ziyoratchilar tashrif buyuradigan maskanga aylangan."
  ],
  timeline: [
    { y: 810, t: "Buxoroda tugʻildi" },
    { y: 826, t: "16 yoshida haj safariga chiqdi; ilm izlab safarlar boshlandi" },
    { y: 846, t: "«Al-Jomeʼ as-sahih» ustida ish tugallandi (taxminan)" },
    { y: 864, t: "Buxoroga qaytdi (taxminan)" },
    { y: 870, t: "Xartangda vafot etdi" }
  ],
  works: [
    { title: "Al-Jomeʼ as-sahih (Sahihi Buxoriy)", year: "", note: "Eng ishonchli hadislar toʻplami" },
    { title: "Al-Adab al-mufrad", year: "", note: "Odob-axloqqa oid hadislar" },
    { title: "At-Tarix al-kabir", year: "", note: "Roviylar haqidagi yirik biografik asar" }
  ],
  quote: null,
  keyPoints: [
    "«Sahihi Buxoriy» — islomdagi eng ishonchli hadis toʻplami",
    "16 yil davomida ilm izlab Sharq shaharlarini kezgan",
    "Samarqand yaqinidagi maqbarasi — ziyoratgoh"
  ],
  related: ["ibnsino", "beruniy"]
},
{
  id: "ulugbek",
  name: "Mirzo Ulugʻbek",
  fullName: "Muhammad Taragʻay Ulugʻbek",
  field: "fan",
  role: "Astronom, matematik, hukmdor",
  born: { y: 1394, m: 3, d: 22, place: "Sultoniya" },
  died: { y: 1449, m: 10, d: 27, place: "Samarqand" },
  photo: "img/ulugbek.jpg", focus: "50% 20%",
  photoNote: "Temuriylar davri miniatyurasi, 1425–1450",
  summary: "Samarqand rasadxonasining asoschisi; uning yulduzlar jadvali teleskop ixtiro qilinguniga qadar dunyodagi eng aniq katalog boʻlib qoldi.",
  bio: [
    "Ulugʻbek 1394-yilda Amir Temurning harbiy yurishi paytida Sultoniya shahrida tugʻildi. Bobosi vafotidan keyin otasi Shohruh Hirotda hukmronlik qildi, oʻn besh yoshli Ulugʻbek esa 1409-yildan Movarounnahrga, poytaxti Samarqandga hokim etib tayinlandi. U qirq yil davomida mamlakatni boshqardi va bu davr fan hamda madaniyat gullagan davr boʻldi.",
    "Ulugʻbek Samarqand, Buxoro va Gʻijduvonda madrasalar qurdirdi. Buxoro madrasasi darvozasiga «Ilm olish har bir musulmon erkak va ayolning burchidir» degan hadis bitilgan. 1424–1429-yillarda Samarqand yaqinida ulkan rasadxona barpo etdi; uning radiusi 40 metrga yaqin sekstanti oʻz davrida dunyoda tengsiz edi. Qozizoda Rumiy, Gʻiyosiddin Koshiy va Ali Qushchi bilan birga u yulduzlar holatini kuzatdi.",
    "Kuzatishlar natijasi — «Ziji jadidi Koʻragoniy» (1437) asaridagi 1018 yulduz katalogi. Ulugʻbek yulduz yilini 365 kun 6 soat 10 daqiqa 8 soniya deb hisobladi; bu hozirgi qiymatdan bir daqiqadan kam farq qiladi. 1449-yilda oʻgʻli Abdulatif buyrugʻi bilan oʻldirildi va Goʻri Amir maqbarasiga dafn etildi. Rasadxona qoldiqlari 1908-yilda arxeolog V. Vyatkin tomonidan topilgan."
  ],
  timeline: [
    { y: 1394, t: "Sultoniyada tugʻildi" },
    { y: 1409, t: "Movarounnahr hokimi etib tayinlandi" },
    { y: 1417, t: "Buxoro va Samarqandda madrasalar qurilishi boshlandi" },
    { y: 1424, t: "Samarqand rasadxonasi qurilishi boshlandi" },
    { y: 1429, t: "Rasadxona ishga tushdi" },
    { y: 1437, t: "«Ziji jadidi Koʻragoniy» tugallandi" },
    { y: 1447, t: "Shohruh vafotidan keyin Temuriylar taxtiga oʻtirdi" },
    { y: 1449, t: "Samarqand yaqinida oʻldirildi" }
  ],
  works: [
    { title: "Ziji jadidi Koʻragoniy", year: "1437", note: "1018 yulduzning aniq katalogi va astronomik jadvallar" },
    { title: "Tarixi arbaʼ ulus", year: "", note: "Toʻrt ulus tarixi" },
    { title: "Samarqand rasadxonasi", year: "1424–1429", note: "Oʻrta asrlarning eng yirik rasadxonasi" },
    { title: "Ulugʻbek madrasalari", year: "1417–1433", note: "Samarqand, Buxoro va Gʻijduvon" }
  ],
  quote: { text: "Dinlar tarqaladi, podshohliklar barbod boʻladi, ammo olimlarning ishlari abadiy qoladi.", src: "Ulugʻbekka nisbat beriladi" },
  keyPoints: [
    "1018 yulduzdan iborat aniq katalog tuzgan",
    "Yil uzunligini bir daqiqagacha aniqlikda hisoblagan",
    "Samarqand, Buxoro, Gʻijduvonda madrasalar qurdirgan"
  ],
  related: ["temur", "navoiy", "beruniy", "qoriniyoziy"]
},
{
  id: "temur",
  name: "Amir Temur",
  fullName: "Amir Temur ibn Taragʻay Barlos",
  field: "tarix",
  role: "Sarkarda, davlat asoschisi",
  born: { y: 1336, m: 4, d: 9, place: "Xoʻja Ilgʻor, Kesh (Shahrisabz) yaqinida" },
  died: { y: 1405, m: 2, d: 18, place: "Oʻtror" },
  photo: "img/temur.jpg", focus: "50% 15%",
  photoNote: "M. Gerasimov rekonstruksiyasi",
  summary: "Movarounnahrni birlashtirib, poytaxti Samarqand boʻlgan ulkan Temuriylar davlatiga asos solgan sarkarda.",
  bio: [
    "Temur 1336-yil 9-aprelda Kesh (hozirgi Shahrisabz) yaqinidagi Xoʻja Ilgʻor qishlogʻida, barlos begi Taragʻay oilasida tugʻildi. Yoshligida Chigʻatoy ulusidagi oʻzaro urushlarda qatnashib, tajribali sarkarda sifatida tanildi. 1370-yilda Balx qurultoyida Movarounnahr hukmdori deb eʼlon qilindi va Samarqandni poytaxt qilib tanladi.",
    "Oʻttiz besh yillik hukmronligi davomida Amir Temur Eron, Kavkaz, Oltin Oʻrda, Hindiston, Suriya va Kichik Osiyoga yurishlar qildi. 1395-yilda Toʻxtamishni, 1402-yilda Anqara jangida Usmonli sultoni Boyazidni magʻlub etdi. Uning shiori «Rosti — rusti» (Kuch — adolatda) davlat boshqaruvining asosiy tamoyili edi.",
    "Temur Samarqandni Sharqning eng goʻzal shahriga aylantirishga intildi: Bibixonim jome masjidi, Shohi Zinda ansambli, Shahrisabzdagi Oqsaroy uning davrida qurildi; hunarmand va olimlar poytaxtga koʻchirildi. 1405-yilda Xitoyga yurish boshlab, Oʻtror shahrida vafot etdi. Samarqanddagi Goʻri Amir maqbarasida dafn etilgan. 1996-yilda Oʻzbekistonda Amir Temur tavalludining 660 yilligi keng nishonlandi."
  ],
  timeline: [
    { y: 1336, t: "Kesh yaqinida tugʻildi" },
    { y: 1370, t: "Balx qurultoyi: Movarounnahr hukmdori deb eʼlon qilindi" },
    { y: 1380, t: "Shahrisabzda Oqsaroy qurilishi boshlandi" },
    { y: 1391, t: "Qunduzcha jangida Toʻxtamish ustidan gʻalaba" },
    { y: 1398, t: "Hindiston yurishi, Dehlining olinishi" },
    { y: 1399, t: "Bibixonim masjidi qurilishi boshlandi" },
    { y: 1402, t: "Anqara jangi: Boyazid Yildirim asir olindi" },
    { y: 1405, t: "Xitoy yurishi boshida Oʻtrorda vafot etdi" }
  ],
  works: [
    { title: "Temuriylar davlati", year: "1370", note: "Poytaxti Samarqand boʻlgan yirik saltanat" },
    { title: "Bibixonim jome masjidi", year: "1399–1404", note: "Samarqand" },
    { title: "Oqsaroy", year: "1380–1404", note: "Shahrisabz" },
    { title: "Temur tuzuklari", year: "", note: "Davlat boshqaruvi haqidagi qoidalar (Temurga nisbat beriladi)" }
  ],
  quote: { text: "Kuch — adolatdadir.", src: "Amir Temur shiori" },
  keyPoints: [
    "1370-yilda Samarqandni poytaxt qilib davlat tuzgan",
    "1402-yilda Anqara jangida Boyazidni yenggan",
    "Bibixonim masjidi va Oqsaroyni qurdirgan"
  ],
  related: ["ulugbek", "bobur", "manguberdi"]
},
{
  id: "manguberdi",
  name: "Jaloliddin Manguberdi",
  fullName: "Jaloliddin Manguberdi Xorazmshoh",
  field: "tarix",
  role: "Xorazmshoh, sarkarda",
  born: { y: 1199, place: "Xorazm", approx: true },
  died: { y: 1231, place: "Mayyofariqin yaqinida (hozirgi Turkiya)" },
  photo: "img/manguberdi.jpg", focus: "50% 30%",
  photoNote: "25 soʻmlik tanga (1999)",
  summary: "Moʻgʻullar istilosiga qarshi oʻn yil davomida kurash olib borgan soʻnggi Xorazmshoh, milliy qahramon.",
  bio: [
    "Jaloliddin Xorazmshoh Muhammad II ning toʻngʻich oʻgʻli boʻlib, taxminan 1199-yilda tugʻildi. 1219-yilda Chingizxon qoʻshinlari Xorazmshohlar davlatiga bostirib kirganda, otasi qarshilik koʻrsata olmay qochdi va 1220-yilda Kaspiy dengizidagi orolda vafot etdi. Oʻlimi oldidan u Jaloliddinni valiahd deb eʼlon qildi.",
    "Jaloliddin Gurganjdan Xurosonga, soʻng Gʻaznaga oʻtib, qoʻshin toʻpladi. 1221-yilda Parvon jangida moʻgʻullar ustidan gʻalaba qozondi — bu Chingizxon lashkarining birinchi yirik magʻlubiyati edi. Ammo kuchlar teng emasdi: 1221-yil kuzida Sind (Hind) daryosi boʻyidagi jangda Jaloliddin qurshovda qolib, oti bilan daryoga sakrab oʻtib ketdi; Chingizxon uning jasoratiga tan bergani haqida manbalar yozadi.",
    "Keyingi oʻn yil davomida u Hindiston, Eron, Iroq va Kavkazda moʻgʻullarga qarshi kurashni davom ettirdi, Tabrizni poytaxt qilib davlatini tikladi. 1231-yilda Mayyofariqin yaqinidagi togʻlarda halok boʻldi. Oʻzbekistonda 1999-yilda uning 800 yilligi nishonlanib, Urganchda yodgorlik majmuasi ochildi va «Jaloliddin Manguberdi» ordeni taʼsis etildi."
  ],
  timeline: [
    { y: 1199, t: "Tugʻildi (taxminan)" },
    { y: 1219, t: "Chingizxonning Xorazmga hujumi boshlandi" },
    { y: 1220, t: "Otasi vafot etdi; Jaloliddin Xorazmshoh deb eʼlon qilindi" },
    { y: 1221, t: "Parvon jangidagi gʻalaba; Sind daryosi boʻyidagi jang" },
    { y: 1225, t: "Eron va Kavkazda davlatini tikladi, Tabriz poytaxt boʻldi" },
    { y: 1231, t: "Halok boʻldi" }
  ],
  works: [
    { title: "Parvon jangi", year: "1221", note: "Moʻgʻullar ustidan birinchi yirik gʻalaba" },
    { title: "Sind daryosi jangi", year: "1221", note: "Jasorat ramziga aylangan jang" }
  ],
  quote: null,
  keyPoints: [
    "Soʻnggi Xorazmshoh (1220–1231)",
    "Parvon jangida Chingizxon qoʻshinini yenggan",
    "1999-yilda Urganchda yodgorlik majmuasi ochilgan"
  ],
  related: ["temur", "beruniy"]
},
{
  id: "muqimiy",
  name: "Muqimiy",
  fullName: "Muhammad Aminxoʻja Mirzaxoʻja oʻgʻli Muqimiy",
  field: "adabiyot",
  role: "Shoir, hajvchi",
  born: { y: 1850, place: "Qoʻqon" },
  died: { y: 1903, m: 5, d: 25, place: "Qoʻqon" },
  photo: "img/muqimiy.jpg", focus: "50% 30%",
  photoNote: "Arxiv surati",
  summary: "Oʻzbek demokratik adabiyotining asoschisi; oʻtkir hajviyalari va samimiy lirikasi bilan xalq shoiriga aylangan.",
  bio: [
    "Muqimiy 1850-yilda Qoʻqonda novvoy oilasida tugʻildi. Dastlab Qoʻqon, keyin Buxoro madrasalarida tahsil oldi. Otasi vafotidan soʻng moddiy qiyinchiliklar tufayli Hazrat madrasasining kichik hujrasida yashadi va umrining oxirigacha shu yerda ijod qildi. Uning atrofida Furqat, Zavqiy, Nodim kabi shoirlar toʻplanib, Qoʻqon adabiy muhitini yaratdi.",
    "Muqimiy ijodi ikki yoʻnalishda rivojlandi. Lirik gʻazallarida u sevgi, sadoqat va inson qadri haqida yozdi; koʻplab gʻazallari xalq qoʻshiqlariga aylangan. Hajviy asarlarida esa poraxoʻr amaldorlar, firibgar boylar, ikkiyuzlamachi mullalar ustidan kuldi: «Tanobchilar», «Saylov», «Moskovchi boy taʼrifida» kabi hajviyalari oʻz davrining ijtimoiy manzarasini keskin aks ettiradi.",
    "«Sayohatnoma» turkumida shoir Fargʻona vodiysi boʻylab safarlarini tasvirlab, qishloqlar hayotini realistik chizdi. Muqimiy 1903-yil 25-mayda Qoʻqonda vafot etdi. Toshkentdagi musiqali teatr, koʻplab koʻcha va maktablar uning nomi bilan ataladi; Qoʻqondagi uy-muzeyi shoir yashagan hujrada tashkil etilgan."
  ],
  timeline: [
    { y: 1850, t: "Qoʻqonda tugʻildi" },
    { y: 1865, t: "Buxoro madrasasida tahsil (taxminan)" },
    { y: 1876, t: "Qoʻqonga qaytib, Hazrat madrasasi hujrasida yashay boshladi" },
    { y: 1890, t: "«Sayohatnoma» va yirik hajviyalar yaratildi (taxminan)" },
    { y: 1903, t: "Qoʻqonda vafot etdi" }
  ],
  works: [
    { title: "Tanobchilar", year: "", note: "Yer oʻlchovchi amaldorlar haqida hajviya" },
    { title: "Saylov", year: "", note: "Mahalliy saylovlar haqida hajviya" },
    { title: "Moskovchi boy taʼrifida", year: "", note: "Hajviya" },
    { title: "Sayohatnoma", year: "", note: "Safar taassurotlari turkumi" },
    { title: "Devon", year: "", note: "Gʻazallar, muxammaslar, murabbaʼlar" }
  ],
  quote: null,
  keyPoints: [
    "Oʻzbek hajviy sheʼriyatining yirik vakili",
    "Qoʻqon adabiy muhitining markaziy siymosi",
    "Toshkentdagi musiqali teatr uning nomida"
  ],
  related: ["furqat", "navoiy", "gulom"]
},
{
  id: "furqat",
  name: "Furqat",
  fullName: "Zokirjon Xolmuhammad oʻgʻli Furqat",
  field: "adabiyot",
  role: "Shoir, maʼrifatparvar, publitsist",
  born: { y: 1859, place: "Qoʻqon" },
  died: { y: 1909, place: "Yorkent" },
  photo: null, focus: "50% 30%",
  photoNote: "",
  summary: "Maʼrifatparvarlik sheʼriyatining yorqin vakili; zamonaviy ilm-fan va maktabni targʻib qilgan birinchi oʻzbek shoirlaridan.",
  bio: [
    "Zokirjon Furqat 1859-yilda Qoʻqonda tugʻildi. Madrasada tahsil olib, mumtoz adabiyotni chuqur oʻrgandi; yoshligidan Navoiy va Fuzuliy gʻazallariga nazira bogʻladi. Qoʻqon adabiy muhitida Muqimiy bilan doʻstlashdi va sheʼriyatda oʻz yoʻlini topdi.",
    "1889-yilda Toshkentga koʻchgan Furqat «Turkiston viloyatining gazeti»da ishladi va shu yerda maʼrifatparvar sifatida shakllandi. «Gimnaziya», «Akt majlisi xususida», «Vistavka xususida», «Ilm xosiyati» kabi sheʼrlarida u zamonaviy maktab, ilm-fan va texnika yutuqlarini targʻib qildi, xalqni jaholatdan uygʻonishga chaqirdi. Bu sheʼrlar oʻzbek adabiyotida yangi mavzu va yangi ohang edi.",
    "1891-yilda shoir Istanbul, Arabiston va Hindiston orqali uzoq safarga chiqdi va oxir-oqibat Sharqiy Turkistonning Yorkent shahriga borib oʻrnashdi. U yerdan Toshkentga maqola va sheʼrlar yuborib turdi, ammo vataniga qayta olmadi. Furqat 1909-yilda Yorkentda vafot etdi. Uning nomi Toshkentdagi koʻcha va Fargʻona viloyatidagi tumanga berilgan."
  ],
  timeline: [
    { y: 1859, t: "Qoʻqonda tugʻildi" },
    { y: 1880, t: "Qoʻqon adabiy muhitida faol ijod (taxminan)" },
    { y: 1889, t: "Toshkentga koʻchdi; gazetada ishladi" },
    { y: 1891, t: "Istanbulga, soʻng Arabiston va Hindistonga safar" },
    { y: 1893, t: "Yorkentga borib oʻrnashdi (taxminan)" },
    { y: 1909, t: "Yorkentda vafot etdi" }
  ],
  works: [
    { title: "Gimnaziya", year: "1890", note: "Zamonaviy maktab haqida sheʼr" },
    { title: "Vistavka xususida", year: "1890", note: "Koʻrgazma taassurotlari" },
    { title: "Ilm xosiyati", year: "", note: "Maʼrifatparvarlik sheʼri" },
    { title: "Sarguzashtnoma", year: "", note: "Nasriy memuar" },
    { title: "Gʻazallar", year: "", note: "Lirik meros" }
  ],
  quote: null,
  keyPoints: [
    "Ilm-fan va yangi maktabni targʻib qilgan",
    "Muqimiyning yaqin doʻsti va safdoshi",
    "Umrining oxirini Yorkentda oʻtkazgan"
  ],
  related: ["muqimiy", "avloniy", "fitrat"]
},
{
  id: "avloniy",
  jadid: true,
  name: "Abdulla Avloniy",
  fullName: "Abdulla Miravlon oʻgʻli Avloniy",
  field: "marifat",
  role: "Pedagog, shoir, dramaturg, jadid",
  born: { y: 1878, m: 7, d: 12, place: "Toshkent" },
  died: { y: 1934, m: 8, d: 25, place: "Toshkent" },
  photo: "img/avloniy.jpg", focus: "50% 30%",
  photoNote: "2026-yilgi pochta markasi",
  summary: "Yangi usul maktablari asoschilaridan biri; «Turkiy guliston yoxud axloq» darsligi bilan oʻzbek pedagogikasiga asos solgan.",
  bio: [
    "Abdulla Avloniy 1878-yilda Toshkentda toʻquvchi oilasida tugʻildi. Eski maktab va madrasada oʻqidi, mustaqil ravishda rus tilini oʻrgandi. Jadidchilik gʻoyalari taʼsirida 1907-yilda Toshkentning Mirobod mahallasida yangi usul maktabini ochdi va u yerda oʻzi dars berdi.",
    "Avloniy maktab uchun «Birinchi muallim», «Ikkinchi muallim» kabi darsliklar, «Adabiyot yoxud milliy sheʼrlar» toʻplamlarini yaratdi. Uning eng mashhur asari — «Turkiy guliston yoxud axloq» (1913) oʻzbek tilidagi birinchi tizimli pedagogika va axloq darsligi boʻlib, unda tarbiyaning maqsadi, aqliy, axloqiy va jismoniy tarbiya masalalari bayon etilgan. U «Shuhrat» gazetasini nashr etdi va 1913-yilda «Turon» teatr truppasini tashkil qildi.",
    "1917-yildan keyin Avloniy maorif tizimida ishladi, Afgʻonistonda konsul boʻldi, Oʻrta Osiyo davlat universitetida oʻzbek tili va adabiyotidan dars berib, professor unvonini oldi. 1934-yilda Toshkentda vafot etdi. Bugun Toshkentdagi xalq taʼlimi xodimlarini qayta tayyorlash instituti uning nomi bilan ataladi."
  ],
  timeline: [
    { y: 1878, t: "Toshkentda tugʻildi" },
    { y: 1907, t: "Mirobodda yangi usul maktabini ochdi; «Shuhrat» gazetasi" },
    { y: 1912, t: "«Birinchi muallim» va «Ikkinchi muallim» darsliklari" },
    { y: 1913, t: "«Turkiy guliston yoxud axloq»; «Turon» truppasi tashkil etildi" },
    { y: 1919, t: "Afgʻonistonda diplomatik xizmat" },
    { y: 1930, t: "Universitetda professor" },
    { y: 1934, t: "Toshkentda vafot etdi" }
  ],
  works: [
    { title: "Turkiy guliston yoxud axloq", year: "1913", note: "Birinchi oʻzbek pedagogika darsligi" },
    { title: "Birinchi muallim", year: "1912", note: "Alifbe darsligi" },
    { title: "Ikkinchi muallim", year: "1912", note: "Oʻqish kitobi" },
    { title: "Adabiyot yoxud milliy sheʼrlar", year: "1909–1917", note: "Olti qismli sheʼrlar toʻplami" },
    { title: "Advokatlik osonmi?", year: "1914", note: "Komediya" }
  ],
  quote: { text: "Tarbiya biz uchun yo hayot — yo mamot, yo najot — yo halokat, yo saodat — yo falokat masalasidir.", src: "«Turkiy guliston yoxud axloq»" },
  keyPoints: [
    "1907-yilda yangi usul maktabi ochgan",
    "Birinchi oʻzbek pedagogika darsligi muallifi",
    "«Turon» teatr truppasini tashkil qilgan"
  ],
  related: ["fitrat", "furqat", "qodiriy"]
},
{
  id: "fitrat",
  jadid: true,
  name: "Abdurauf Fitrat",
  fullName: "Abdurauf Abdurahim oʻgʻli Fitrat",
  field: "adabiyot",
  role: "Adabiyotshunos, dramaturg, jadidlar yetakchisi",
  born: { y: 1886, place: "Buxoro" },
  died: { y: 1938, m: 10, d: 4, place: "Toshkent" },
  photo: "img/fitrat.jpg", focus: "50% 35%",
  photoNote: "1996-yilgi pochta markasi",
  summary: "Jadidchilik harakatining gʻoyaviy yetakchisi, birinchi oʻzbek professori, zamonaviy adabiyotshunoslik asoschisi.",
  bio: [
    "Abdurauf Fitrat 1886-yilda Buxoroda tugʻildi. Mir Arab madrasasida oʻqidi, 1909–1913-yillarda Istanbulda tahsil oldi. U yerda yozgan «Munozara» va «Hind sayyohi bayonoti» asarlarida Buxoro amirligidagi qoloqlikni tanqid qilib, islohotlar zarurligini isbotladi. Bu asarlar jadidchilik harakatining dasturiy hujjatlariga aylandi.",
    "1917-yildan Fitrat Turkistondagi madaniy hayotning markazida turdi: «Chigʻatoy gurungi» adabiy jamiyatini boshqardi, oʻzbek tili imlosi va adabiy tilini isloh qilish ustida ishladi, Buxoro Xalq Respublikasida maorif noziri boʻldi. «Abulfayzxon» (1924) fojiasi oʻzbek dramaturgiyasidagi birinchi tarixiy tragediya hisoblanadi.",
    "Fitrat oʻzbek mumtoz adabiyoti va musiqasini ilmiy oʻrgangan birinchi tadqiqotchilardan: «Oʻzbek adabiyoti namunalari», «Aruz haqida», «Oʻzbek klassik musiqasi va uning tarixi» asarlari shu yoʻnalishda yaratildi. 1937-yilda qatagʻon qilinib, 1938-yil 4-oktabrda Qodiriy va Choʻlpon bilan bir kunda otib tashlandi. 1956-yilda oqlandi."
  ],
  timeline: [
    { y: 1886, t: "Buxoroda tugʻildi" },
    { y: 1909, t: "Istanbulga oʻqishga ketdi; «Munozara» nashr etildi" },
    { y: 1913, t: "Buxoroga qaytdi" },
    { y: 1918, t: "«Chigʻatoy gurungi» jamiyatiga rahbarlik" },
    { y: 1921, t: "Buxoro Xalq Respublikasida maorif noziri" },
    { y: 1924, t: "«Abulfayzxon» fojiasi" },
    { y: 1928, t: "«Oʻzbek adabiyoti namunalari»" },
    { y: 1937, t: "Qatagʻon: hibsga olindi" },
    { y: 1938, t: "Otib tashlandi" }
  ],
  works: [
    { title: "Munozara", year: "1909", note: "Islohotlar haqida publitsistik dialog" },
    { title: "Hind sayyohi bayonoti", year: "1912", note: "Buxoro hayotining tanqidiy tasviri" },
    { title: "Abulfayzxon", year: "1924", note: "Birinchi oʻzbek tarixiy tragediyasi" },
    { title: "Oʻzbek adabiyoti namunalari", year: "1928", note: "Adabiyot tarixi xrestomatiyasi" },
    { title: "Aruz haqida", year: "1936", note: "Sheʼr nazariyasi" }
  ],
  quote: null,
  keyPoints: [
    "Jadidchilik harakatining gʻoyaviy yetakchisi",
    "Birinchi oʻzbek tarixiy tragediyasi «Abulfayzxon» muallifi",
    "1938-yil 4-oktabrda qatagʻon qurboni boʻlgan"
  ],
  related: ["qodiriy", "cholpon", "avloniy"]
},
{
  id: "qodiriy",
  jadid: true,
  name: "Abdulla Qodiriy",
  fullName: "Abdulla Qodir oʻgʻli Qodiriy (Julqunboy)",
  field: "adabiyot",
  role: "Yozuvchi, birinchi oʻzbek romanchisi",
  born: { y: 1894, m: 4, d: 10, place: "Toshkent" },
  died: { y: 1938, m: 10, d: 4, place: "Toshkent" },
  photo: "img/qodiriy.jpg", focus: "50% 25%",
  photoNote: "Arxiv surati",
  summary: "«Oʻtkan kunlar» — birinchi oʻzbek romani muallifi; realistik nasrning asoschisi va qatagʻon qurboni.",
  bio: [
    "Abdulla Qodiriy 1894-yil 10-aprelda Toshkentda bogʻbon oilasida tugʻildi. Eski maktab, rus-tuzem maktabi va madrasada oʻqidi, savdogar qoʻlida ishladi. Dastlabki hikoyalari «Juvonboz» va «Baxtsiz kuyov» 1915-yilda chop etildi. 1923-yildan «Mushtum» hajviy jurnalida Julqunboy taxallusi bilan feletonlar yozib, xalq orasida mashhur boʻldi.",
    "1922-yildan jurnalda, 1926-yilda alohida kitob holida chop etilgan «Oʻtkan kunlar» romani oʻzbek adabiyotidagi birinchi roman boʻldi. Otabek va Kumushning fojiali sevgisi orqali yozuvchi XIX asr Turkistonining ijtimoiy hayotini keng koʻlamda tasvirladi. Asar oʻquvchilar orasida misli koʻrilmagan shuhrat qozondi. Ikkinchi romani «Mehrobdan chayon» (1929) Qoʻqon xonligi saroyidagi hayotni aks ettiradi.",
    "Qodiriy oʻzbek adabiy tilini ravon, obrazli nasr tili darajasiga koʻtardi. 1937-yil 31-dekabrda hibsga olinib, 1938-yil 4-oktabrda otib tashlandi; 1956-yilda oqlandi. Toshkentda uy-muzeyi, nomidagi bogʻ va ijod maktabi faoliyat yuritadi. «Oʻtkan kunlar» asosida bir necha film va spektakl yaratilgan."
  ],
  timeline: [
    { y: 1894, t: "Toshkentda tugʻildi" },
    { y: 1915, t: "Birinchi hikoyalari chop etildi" },
    { y: 1922, t: "«Oʻtkan kunlar» jurnalda bosila boshladi" },
    { y: 1923, t: "«Mushtum» jurnalida faoliyat" },
    { y: 1926, t: "«Oʻtkan kunlar» alohida kitob boʻlib chiqdi" },
    { y: 1929, t: "«Mehrobdan chayon»" },
    { y: 1935, t: "«Obid ketmon» qissasi" },
    { y: 1937, t: "31-dekabrda hibsga olindi" },
    { y: 1938, t: "4-oktabrda otib tashlandi" }
  ],
  works: [
    { title: "Oʻtkan kunlar", year: "1926", note: "Birinchi oʻzbek romani" },
    { title: "Mehrobdan chayon", year: "1929", note: "Tarixiy roman" },
    { title: "Obid ketmon", year: "1935", note: "Qissa" },
    { title: "Juvonboz", year: "1915", note: "Hikoya" },
    { title: "Kalvak Mahzumning xotira daftaridan", year: "1923–1927", note: "Hajviy turkum" }
  ],
  quote: { text: "Moziygʻa qaytib ish koʻrish xayrlik, deydilar.", src: "«Oʻtkan kunlar», muqaddima" },
  keyPoints: [
    "«Oʻtkan kunlar» — birinchi oʻzbek romani (1926)",
    "«Mushtum» jurnalida Julqunboy taxallusi bilan yozgan",
    "1938-yilda qatagʻon qilingan, 1956-yilda oqlangan"
  ],
  related: ["cholpon", "fitrat", "qahhor"]
},
{
  id: "cholpon",
  jadid: true,
  name: "Choʻlpon",
  fullName: "Abdulhamid Sulaymon oʻgʻli Choʻlpon",
  field: "adabiyot",
  role: "Shoir, yozuvchi, dramaturg, tarjimon",
  born: { y: 1897, place: "Andijon" },
  died: { y: 1938, m: 10, d: 4, place: "Toshkent" },
  photo: "img/cholpon.jpg", focus: "50% 25%",
  photoNote: "Arxiv surati",
  summary: "Yangi oʻzbek sheʼriyatining asoschisi; «Kecha va kunduz» romani va «Hamlet» tarjimasi muallifi.",
  bio: [
    "Choʻlpon 1897-yilda Andijonda savdogar oilasida tugʻildi. Madrasa va rus-tuzem maktabida oʻqidi, mustaqil ravishda rus, fors, turk tillarini oʻrgandi. Dastlabki sheʼr va maqolalari 1914-yildan gazetalarda chiqa boshladi. Jadidchilik gʻoyalaridan ilhomlangan yosh shoir xalqni uygʻonishga, erk va ilmga chaqirdi.",
    "«Uygʻonish» (1922), «Buloqlar» (1923), «Tong sirlari» (1926) toʻplamlari oʻzbek sheʼriyatiga yangi shakl, yangi ohang va ochiq lirik ovoz olib kirdi. Choʻlpon aruz oʻrniga barmoq vaznini keng qoʻlladi va zamonaviy oʻzbek sheʼriyatining asoschisi hisoblanadi. «Kecha va kunduz» (1936) romani XX asr boshidagi Turkiston hayotini psixologik teranlik bilan tasvirlaydi; uning ikkinchi qismi yoʻqolgan.",
    "Shoir teatr uchun «Yorqinoy» kabi pyesalar yozdi, Shekspirning «Hamlet», Pushkin, Gorkiy asarlarini oʻzbek tiliga tarjima qildi. 1937-yilda «millatchilik»da ayblanib hibsga olindi va 1938-yil 4-oktabrda otib tashlandi. 1956-yilda oqlandi; asarlari 1990-yillardan qayta nashr etila boshlandi."
  ],
  timeline: [
    { y: 1897, t: "Andijonda tugʻildi" },
    { y: 1914, t: "Dastlabki sheʼr va maqolalari matbuotda" },
    { y: 1920, t: "«Yorqinoy» pyesasi" },
    { y: 1922, t: "«Uygʻonish» toʻplami" },
    { y: 1926, t: "«Tong sirlari»" },
    { y: 1934, t: "«Hamlet» tarjimasi" },
    { y: 1936, t: "«Kecha va kunduz» romani" },
    { y: 1937, t: "Hibsga olindi" },
    { y: 1938, t: "Otib tashlandi" }
  ],
  works: [
    { title: "Uygʻonish", year: "1922", note: "Sheʼrlar toʻplami" },
    { title: "Buloqlar", year: "1923", note: "Sheʼrlar toʻplami" },
    { title: "Tong sirlari", year: "1926", note: "Sheʼrlar toʻplami" },
    { title: "Kecha va kunduz", year: "1936", note: "Roman" },
    { title: "Yorqinoy", year: "1920", note: "Drama" },
    { title: "Hamlet (tarjima)", year: "1934", note: "Shekspir fojiasining oʻzbekcha tarjimasi" }
  ],
  quote: { text: "Xalq dengizdir, xalq toʻlqindir, xalq kuchdir.", src: "«Xalq» sheʼri" },
  keyPoints: [
    "Zamonaviy oʻzbek sheʼriyatining asoschisi",
    "«Kecha va kunduz» romani muallifi",
    "Shekspirning «Hamlet»ini oʻzbekchaga tarjima qilgan"
  ],
  related: ["qodiriy", "fitrat", "olimjon"]
},
{
  id: "qoriniyoziy",
  name: "Toshmuhammad Qori-Niyoziy",
  fullName: "Toshmuhammad Niyozovich Qori-Niyoziy",
  field: "fan",
  role: "Matematik, fan tashkilotchisi",
  born: { y: 1897, m: 9, d: 14, place: "Xoʻjand" },
  died: { y: 1970, m: 3, d: 17, place: "Toshkent" },
  photo: "img/qoriniyoziy.jpg", focus: "50% 25%",
  photoNote: "Arxiv surati",
  summary: "Oʻzbekiston Fanlar akademiyasining birinchi prezidenti; oʻzbek tilida matematika darsliklari va atamalarini yaratgan olim.",
  bio: [
    "Toshmuhammad Qori-Niyoziy 1897-yilda Xoʻjandda tugʻildi. Eski maktab va madrasada oʻqib, mustaqil ravishda rus tili va matematikani oʻrgandi. 1920-yillarda Toshkentda oʻqituvchilik qildi, Oʻrta Osiyo davlat universitetini tamomladi va shu yerda dars bera boshladi. U oʻzbek tilida oliy matematika boʻyicha birinchi darsliklarni yozdi va matematik atamalar lugʻatini tuzdi.",
    "1943-yilda Oʻzbekiston Fanlar akademiyasi tashkil etilganda Qori-Niyoziy uning birinchi prezidenti etib saylandi va akademiyaning ilk institutlari shakllanishiga rahbarlik qildi. Uning ilmiy qiziqishlari matematika bilan bir qatorda fan tarixini ham qamrab oldi.",
    "Olimning «Ulugʻbekning astronomik maktabi» (1950) monografiyasi Samarqand rasadxonasi va Ulugʻbek ilmiy merosini chuqur tahlil qilgan birinchi fundamental tadqiqot boʻldi va 1952-yilda Davlat mukofotiga sazovor boʻldi. Qori-Niyoziy 1970-yilda Toshkentda vafot etdi."
  ],
  timeline: [
    { y: 1897, t: "Xoʻjandda tugʻildi" },
    { y: 1926, t: "Oʻrta Osiyo davlat universitetida faoliyat boshladi (taxminan)" },
    { y: 1930, t: "Oʻzbek tilida birinchi oliy matematika darsliklari" },
    { y: 1943, t: "Oʻzbekiston Fanlar akademiyasining birinchi prezidenti" },
    { y: 1950, t: "«Ulugʻbekning astronomik maktabi» monografiyasi" },
    { y: 1952, t: "Davlat mukofoti" },
    { y: 1970, t: "Toshkentda vafot etdi" }
  ],
  works: [
    { title: "Ulugʻbekning astronomik maktabi", year: "1950", note: "Fan tarixiga oid monografiya" },
    { title: "Oliy matematika asoslari", year: "1930-yillar", note: "Oʻzbek tilidagi birinchi darsliklar" },
    { title: "Matematik atamalar lugʻati", year: "", note: "Oʻzbek ilmiy terminologiyasi" }
  ],
  quote: null,
  keyPoints: [
    "Fanlar akademiyasining birinchi prezidenti (1943)",
    "Oʻzbek tilida matematika darsliklarini yaratgan",
    "Ulugʻbek merosini ilmiy oʻrgangan"
  ],
  related: ["ulugbek", "sarimsoqov", "abdullayev"]
},
{
  id: "rajabiy",
  name: "Yunus Rajabiy",
  fullName: "Yunus Rajabiy",
  field: "sanat",
  role: "Bastakor, xonanda, musiqashunos",
  born: { y: 1897, m: 1, d: 5, place: "Toshkent" },
  died: { y: 1976, m: 4, d: 23, place: "Toshkent" },
  photo: "img/rajabiy.jpg", focus: "50% 25%",
  photoNote: "Arxiv surati",
  summary: "«Shashmaqom»ni toʻliq yozib olib nashr ettirgan va oʻzbek maqom sanʼatini saqlab qolgan buyuk bastakor.",
  bio: [
    "Yunus Rajabiy 1897-yilda Toshkentda tugʻildi. Yoshligidan xalq qoʻshiqlari va maqomlarni oʻrgandi, dutor va tanbur chalishni egalladi. 1920-yillarda Toshkent va Samarqanddagi musiqa maktablarida tahsil olib, radio va teatrlarda xonanda va sozanda sifatida ishladi.",
    "Rajabiyning eng katta xizmati — ogʻzaki anʼanada yashab kelgan oʻzbek va tojik maqom merosini nota yozuviga koʻchirgani. Koʻp yillik mehnat natijasi oʻlaroq besh jildlik «Oʻzbek xalq musiqasi» (1955–1959) va olti jildlik «Shashmaqom» (1966–1975) nashr etildi. 1959-yilda u Oʻzbekiston radiosi qoshida maqomchilar ansamblini tuzdi va unga umrining oxirigacha rahbarlik qildi.",
    "Bastakor sifatida u yuzlab qoʻshiq va kuylar yaratdi, musiqali dramalar yozdi. 1965-yilda SSSR xalq artisti, 1966-yilda Oʻzbekiston Fanlar akademiyasi akademigi boʻldi. Yunus Rajabiy 1976-yilda Toshkentda vafot etdi. Toshkentdagi maqom ansambli va musiqa maktabi uning nomi bilan ataladi."
  ],
  timeline: [
    { y: 1897, t: "Toshkentda tugʻildi" },
    { y: 1923, t: "Samarqandda musiqa taʼlimi (taxminan)" },
    { y: 1927, t: "Oʻzbekiston radiosida faoliyat boshladi" },
    { y: 1955, t: "«Oʻzbek xalq musiqasi» birinchi jildi" },
    { y: 1959, t: "Radio qoshida maqomchilar ansamblini tuzdi" },
    { y: 1965, t: "SSSR xalq artisti" },
    { y: 1966, t: "Akademik; «Shashmaqom» birinchi jildi" },
    { y: 1976, t: "Toshkentda vafot etdi" }
  ],
  works: [
    { title: "Shashmaqom", year: "1966–1975", note: "Olti jildlik nota nashri" },
    { title: "Oʻzbek xalq musiqasi", year: "1955–1959", note: "Besh jildlik toʻplam" },
    { title: "Maqomchilar ansambli", year: "1959", note: "Oʻzbekiston radiosi qoshida" }
  ],
  quote: null,
  keyPoints: [
    "«Shashmaqom»ni notaga yozib nashr ettirgan",
    "1959-yilda maqomchilar ansamblini tuzgan",
    "SSSR xalq artisti va akademik"
  ],
  related: ["zokirov", "gulom", "tansiqboyev"]
},
{
  id: "gulom",
  name: "Gʻafur Gʻulom",
  fullName: "Gʻafur Gʻulomovich Gʻulomov",
  field: "adabiyot",
  role: "Shoir, yozuvchi, Oʻzbekiston xalq shoiri",
  born: { y: 1903, m: 5, d: 10, place: "Toshkent" },
  died: { y: 1966, m: 7, d: 10, place: "Toshkent" },
  photo: "img/gulom.jpg", focus: "50% 25%",
  photoNote: "Arxiv surati",
  summary: "«Shum bola» va «Sen yetim emassan» muallifi; XX asr oʻzbek sheʼriyatining eng ulkan ovozlaridan biri.",
  bio: [
    "Gʻafur Gʻulom 1903-yilda Toshkentda tugʻildi. Erta yetim qolib, mardikorlik, harf teruvchilik qildi, oʻqituvchilar kursini tamomlab maktabda dars berdi. Dastlabki sheʼrlari 1923-yilda matbuotda chiqdi. 1930-yillarda u sheʼriyat va nasrda birdek mahsuldor ijod qildi.",
    "«Shum bola» (1936) qissasi — oʻzbek adabiyotidagi eng sevimli asarlardan biri; unda yozuvchi oʻz bolaligidan olingan sarguzashtlarni hazil va mehr bilan tasvirlagan. «Yodgor», «Netay» qissalari ham shu davrda yaratildi. Urush yillarida yozilgan «Sen yetim emassan» (1942) sheʼri Oʻzbekistonga evakuatsiya qilingan bolalarga koʻrsatilgan mehr ramziga aylandi; «Vaqt», «Kuzatish», «Sogʻinish» kabi sheʼrlari oʻzbek falsafiy lirikasining choʻqqisi hisoblanadi.",
    "Gʻafur Gʻulom 1943-yilda Fanlar akademiyasi akademigi, 1963-yilda birinchi Oʻzbekiston xalq shoiri boʻldi. Shekspir, Pushkin, Lermontov, Nizomiy asarlarini tarjima qildi. 1966-yilda Toshkentda vafot etdi; 1970-yilda Lenin mukofoti bilan taqdirlandi. Nomidagi nashriyot, uy-muzey va Toshkentdagi tuman uning xotirasini saqlaydi."
  ],
  timeline: [
    { y: 1903, t: "Toshkentda tugʻildi" },
    { y: 1923, t: "Dastlabki sheʼrlari chop etildi" },
    { y: 1936, t: "«Shum bola» va «Yodgor» qissalari" },
    { y: 1942, t: "«Sen yetim emassan» sheʼri" },
    { y: 1943, t: "Fanlar akademiyasi akademigi" },
    { y: 1945, t: "«Vaqt» sheʼri" },
    { y: 1963, t: "Oʻzbekiston xalq shoiri" },
    { y: 1966, t: "Toshkentda vafot etdi" },
    { y: 1970, t: "Lenin mukofoti (vafotidan keyin)" }
  ],
  works: [
    { title: "Shum bola", year: "1936", note: "Qissa" },
    { title: "Yodgor", year: "1936", note: "Qissa" },
    { title: "Sen yetim emassan", year: "1942", note: "Sheʼr" },
    { title: "Vaqt", year: "1945", note: "Falsafiy sheʼr" },
    { title: "Netay", year: "1930", note: "Qissa" },
    { title: "Sharq keladi", year: "", note: "Sheʼrlar" }
  ],
  quote: { text: "Sen yetim emassan, tinchlan, jigarim.", src: "«Sen yetim emassan»" },
  keyPoints: [
    "«Shum bola» qissasi muallifi",
    "Birinchi Oʻzbekiston xalq shoiri (1963)",
    "«Sen yetim emassan» — urush davri ramzi"
  ],
  related: ["oybek", "qahhor", "olimjon", "muqimiy"]
},
{
  id: "oybek",
  name: "Oybek",
  fullName: "Muso Toshmuhammad oʻgʻli Oybek",
  field: "adabiyot",
  role: "Yozuvchi, shoir, akademik",
  born: { y: 1905, m: 1, d: 10, place: "Toshkent" },
  died: { y: 1968, m: 7, d: 1, place: "Toshkent" },
  photo: "img/oybek.jpg", focus: "50% 25%",
  photoNote: "«Guliston» jurnali surati",
  summary: "«Qutlugʻ qon» va «Navoiy» romanlari muallifi; oʻzbek tarixiy romanchiligining asoschisi.",
  bio: [
    "Oybek 1905-yilda Toshkentda toʻquvchi oilasida tugʻildi. Oʻrta Osiyo davlat universitetining iqtisod fakultetida oʻqidi, Leningradda tahsilini davom ettirdi. Adabiyotga shoir sifatida kirib keldi: 1926-yilda birinchi sheʼrlar toʻplami «Tuygʻular» chop etildi. 1936-yilda Pushkinning «Yevgeniy Onegin» romanini oʻzbek tiliga tarjima qildi.",
    "«Qutlugʻ qon» (1940) romani 1916-yilgi xalq qoʻzgʻoloni arafasidagi Toshkent hayotini tasvirlaydi va oʻzbek realistik nasrining namunasi hisoblanadi. «Navoiy» (1944) romani ulugʻ shoirning hayoti va davrini keng tarixiy fonda gavdalantirdi; asar 1946-yilda Davlat mukofotiga sazovor boʻldi va koʻplab tillarga tarjima qilindi.",
    "Keyingi yillarda yozuvchi «Oltin vodiydan shabadalar», «Quyosh qoraymas», «Ulugʻ yoʻl» romanlarini, «Bolalik» avtobiografik qissasini yaratdi. 1943-yilda Fanlar akademiyasi akademigi boʻldi, koʻp yillar Til va adabiyot institutiga rahbarlik qildi. Oybek 1968-yilda Toshkentda vafot etdi; uy-muzeyi va nomidagi metro bekati uning xotirasini saqlaydi."
  ],
  timeline: [
    { y: 1905, t: "Toshkentda tugʻildi" },
    { y: 1926, t: "«Tuygʻular» sheʼrlar toʻplami" },
    { y: 1936, t: "«Yevgeniy Onegin» tarjimasi" },
    { y: 1940, t: "«Qutlugʻ qon» romani" },
    { y: 1943, t: "Fanlar akademiyasi akademigi" },
    { y: 1944, t: "«Navoiy» romani" },
    { y: 1946, t: "Davlat mukofoti" },
    { y: 1962, t: "«Bolalik» qissasi" },
    { y: 1968, t: "Toshkentda vafot etdi" }
  ],
  works: [
    { title: "Qutlugʻ qon", year: "1940", note: "Roman" },
    { title: "Navoiy", year: "1944", note: "Tarixiy roman" },
    { title: "Oltin vodiydan shabadalar", year: "1950", note: "Roman" },
    { title: "Quyosh qoraymas", year: "1958", note: "Roman" },
    { title: "Bolalik", year: "1962", note: "Avtobiografik qissa" },
    { title: "Ulugʻ yoʻl", year: "1967", note: "Roman" }
  ],
  quote: null,
  keyPoints: [
    "«Navoiy» — birinchi oʻzbek tarixiy romanlaridan",
    "«Qutlugʻ qon» — 1916-yil voqealari haqida",
    "«Yevgeniy Onegin»ni oʻzbekchaga tarjima qilgan"
  ],
  related: ["gulom", "navoiy", "qahhor"]
},
{
  id: "qahhor",
  name: "Abdulla Qahhor",
  fullName: "Abdulla Qahhor",
  field: "adabiyot",
  role: "Yozuvchi, dramaturg, tarjimon",
  born: { y: 1907, m: 9, d: 17, place: "Qoʻqon" },
  died: { y: 1968, m: 5, d: 25, place: "Moskva" },
  photo: "img/qahhor.jpg", focus: "50% 30%",
  photoNote: "2007-yilgi pochta markasi",
  summary: "Oʻzbek hikoyachiligining ustasi; «Sarob», «Sinchalak», «Oʻtmishdan ertaklar» muallifi.",
  bio: [
    "Abdulla Qahhor 1907-yilda Qoʻqonda temirchi oilasida tugʻildi. Bolaligi Fargʻona vodiysi qishloqlarida oʻtdi; keyinchalik bu yillarni «Oʻtmishdan ertaklar» qissasida tasvirladi. Oʻrta Osiyo davlat universitetida oʻqidi, gazetalarda ishladi. Dastlabki hikoyalari 1920-yillarning oxirida chop etildi.",
    "Qahhor qisqa hikoya janrini oʻzbek adabiyotida yuksak darajaga koʻtardi: «Anor», «Bemor», «Oʻgʻri», «Dahshat», «Mayiz yemagan xotin» hikoyalari ixcham, aniq va chuqur psixologik tasvir namunasi sifatida maktab darsliklariga kirgan. «Sarob» (1937) romani, «Qoʻshchinor chiroqlari» (1951), «Sinchalak» (1958) qissalari oʻz davrining muhim asarlaridir. «Shohi soʻzana», «Ogʻriq tishlar», «Tobutdan tovush» komediyalari teatrlarda uzoq yillar sahnalashtirildi.",
    "Yozuvchi Gogol, Chexov, Tolstoyning «Urush va tinchlik» romanini oʻzbek tiliga tarjima qildi va yosh adiblarga ustozlik qildi. Adabiyotning haqqoniyligi va soʻz masʼuliyati haqidagi qarashlari bilan tanildi. Abdulla Qahhor 1968-yilda Moskvada vafot etdi, Toshkentda dafn etildi. Toshkentdagi uy-muzeyi va Qoʻqondagi haykali uning xotirasini saqlaydi."
  ],
  timeline: [
    { y: 1907, t: "Qoʻqonda tugʻildi" },
    { y: 1929, t: "Dastlabki hikoyalari chop etildi (taxminan)" },
    { y: 1936, t: "«Anor», «Bemor», «Oʻgʻri» hikoyalari" },
    { y: 1937, t: "«Sarob» romani" },
    { y: 1951, t: "«Qoʻshchinor chiroqlari»; «Shohi soʻzana» komediyasi" },
    { y: 1958, t: "«Sinchalak» qissasi" },
    { y: 1965, t: "«Oʻtmishdan ertaklar»" },
    { y: 1968, t: "Moskvada vafot etdi" }
  ],
  works: [
    { title: "Sarob", year: "1937", note: "Roman" },
    { title: "Sinchalak", year: "1958", note: "Qissa" },
    { title: "Oʻtmishdan ertaklar", year: "1965", note: "Avtobiografik qissa" },
    { title: "Anor, Bemor, Oʻgʻri, Dahshat", year: "1936–1960", note: "Hikoyalar" },
    { title: "Shohi soʻzana", year: "1951", note: "Komediya" },
    { title: "Urush va tinchlik (tarjima)", year: "", note: "L. Tolstoy romanining tarjimasi" }
  ],
  quote: { text: "Adabiyot atomdan kuchli, lekin uning kuchini oʻtin yorishga sarflamaslik kerak.", src: "Abdulla Qahhor" },
  keyPoints: [
    "Oʻzbek qisqa hikoya janrining ustasi",
    "«Sinchalak» va «Oʻtmishdan ertaklar» muallifi",
    "«Urush va tinchlik»ni oʻzbekchaga tarjima qilgan"
  ],
  related: ["gulom", "oybek", "qodiriy", "saidahmad"]
},
{
  id: "olimjon",
  name: "Hamid Olimjon",
  fullName: "Hamid Olimjon Azimov",
  field: "adabiyot",
  role: "Shoir, dramaturg, adabiyotshunos",
  born: { y: 1909, m: 12, d: 12, place: "Jizzax" },
  died: { y: 1944, m: 7, d: 3, place: "Toshkent" },
  photo: "img/olimjon.jpg", focus: "50% 25%",
  photoNote: "Arxiv surati",
  summary: "«Zaynab va Omon», «Oʻzbekiston» dostonlari muallifi; oʻttiz toʻrt yoshida fojiali vafot etgan yorqin lirik shoir.",
  bio: [
    "Hamid Olimjon 1909-yilda Jizzaxda tugʻildi. Samarqanddagi pedagogika akademiyasida oʻqidi va shu yillardan ijod qila boshladi: birinchi toʻplami «Koʻklam» 1929-yilda chiqdi. 1930-yillarda u oʻzbek sheʼriyatida eng koʻp oʻqiladigan shoirlardan biriga aylandi.",
    "«Oʻzbekiston» (1937) sheʼrida vatanning tabiati va tarixi yuksak ehtiros bilan kuylangan; «Oygul bilan Baxtiyor», «Semurgʻ» dostonlari xalq ertaklari asosida yaratilgan; «Zaynab va Omon» (1938) dostoni ikki yosh muhabbati haqida boʻlib, oʻzbek lirik-epik sheʼriyatining namunasi hisoblanadi. Urush yillarida yozilgan «Roziya», «Jangchi Tursun» kabi asarlari va «Muqanna» tarixiy dramasi keng shuhrat qozondi.",
    "Olimjon 1939-yildan Oʻzbekiston Yozuvchilar uyushmasiga rahbarlik qildi, Navoiy merosini oʻrgandi, Pushkin va Lermontovni tarjima qildi. Turmush oʻrtogʻi — shoira Zulfiya. 1944-yil 3-iyulda Toshkentda avtohalokat tufayli vafot etdi. Toshkentdagi metro bekati va koʻplab maktablar uning nomi bilan ataladi; Jizzaxda uy-muzeyi bor."
  ],
  timeline: [
    { y: 1909, t: "Jizzaxda tugʻildi" },
    { y: 1929, t: "«Koʻklam» — birinchi toʻplami" },
    { y: 1935, t: "Zulfiya bilan turmush qurdi" },
    { y: 1937, t: "«Oʻzbekiston» sheʼri, «Oygul bilan Baxtiyor» dostoni" },
    { y: 1938, t: "«Zaynab va Omon» dostoni" },
    { y: 1939, t: "Yozuvchilar uyushmasi raisi" },
    { y: 1942, t: "«Muqanna» dramasi" },
    { y: 1944, t: "Toshkentda avtohalokatda vafot etdi" }
  ],
  works: [
    { title: "Zaynab va Omon", year: "1938", note: "Doston" },
    { title: "Oʻzbekiston", year: "1937", note: "Sheʼr" },
    { title: "Oygul bilan Baxtiyor", year: "1937", note: "Doston" },
    { title: "Semurgʻ", year: "1939", note: "Doston" },
    { title: "Muqanna", year: "1942–1943", note: "Tarixiy drama" }
  ],
  quote: null,
  keyPoints: [
    "«Zaynab va Omon» dostoni muallifi",
    "Yozuvchilar uyushmasiga rahbarlik qilgan (1939–1944)",
    "Shoira Zulfiyaning turmush oʻrtogʻi"
  ],
  related: ["zulfiya", "gulom", "cholpon"]
},
{
  id: "abdullayev",
  name: "Habib Abdullayev",
  fullName: "Habib Muhammedovich Abdullayev",
  field: "fan",
  role: "Geolog, akademik",
  born: { y: 1912, m: 8, d: 16, place: "Xoʻjand" },
  died: { y: 1962, m: 6, d: 20, place: "Toshkent" },
  photo: "img/abdullayev.jpg", focus: "50% 25%",
  photoNote: "Arxiv surati",
  summary: "Oʻzbekiston geologiya maktabining asoschisi va Fanlar akademiyasi prezidenti; foydali qazilma konlarini bashorat qilish nazariyasini yaratgan.",
  bio: [
    "Habib Abdullayev 1912-yilda Xoʻjandda tugʻildi. Oʻrta Osiyo industrial institutining geologiya fakultetini tamomlab, Oʻzbekiston togʻ-konlarida geolog boʻlib ishladi. Yoshligidan ilmiy ishga qiziqib, magmatik jinslar va rudali konlar oʻrtasidagi bogʻliqlikni oʻrgandi.",
    "Abdullayev rudali konlarning hosil boʻlishi haqidagi nazariyasi bilan tanildi: uning fikricha, konlarning joylashuvi tektonik tuzilma va magmatizm bilan qonuniy bogʻlangan, demak ularni ilmiy asosda bashorat qilish mumkin. Bu yondashuv Oʻzbekistonda Olmaliq va boshqa yirik konlarni izlash va oʻzlashtirishga xizmat qildi.",
    "1947-yilda akademik boʻlgan olim 1956–1961-yillarda Oʻzbekiston Fanlar akademiyasiga prezidentlik qildi va yosh olimlar avlodini tarbiyaladi. 1962-yilda 49 yoshida Toshkentda vafot etdi. Fanlar akademiyasining Geologiya va geofizika instituti uning nomi bilan ataladi."
  ],
  timeline: [
    { y: 1912, t: "Xoʻjandda tugʻildi" },
    { y: 1936, t: "Oʻrta Osiyo industrial institutini tamomladi (taxminan)" },
    { y: 1947, t: "Fanlar akademiyasi akademigi" },
    { y: 1956, t: "Fanlar akademiyasi prezidenti" },
    { y: 1961, t: "Prezidentlik muddati yakunlandi" },
    { y: 1962, t: "Toshkentda vafot etdi" }
  ],
  works: [
    { title: "Rudali konlar genezisi nazariyasi", year: "", note: "Konlarni bashorat qilishning ilmiy asoslari" },
    { title: "Oʻzbekiston geologiya maktabi", year: "", note: "Ilmiy maktab va shogirdlar" }
  ],
  quote: null,
  keyPoints: [
    "Fanlar akademiyasi prezidenti (1956–1961)",
    "Konlarni bashorat qilish nazariyasini yaratgan",
    "Geologiya instituti uning nomida"
  ],
  related: ["qoriniyoziy", "sodiqov", "sarimsoqov"]
},
{
  id: "sodiqov",
  name: "Obid Sodiqov",
  fullName: "Obid Sodiqovich Sodiqov",
  field: "fan",
  role: "Kimyogar, akademik",
  born: { y: 1913, m: 11, d: 15, place: "Toshkent" },
  died: { y: 1987, m: 7, d: 21, place: "Toshkent" },
  photo: null, focus: "50% 25%",
  photoNote: "",
  summary: "Bioorganik kimyo maktabining asoschisi; oʻsimlik alkaloidlarini oʻrganib, yangi dorilar yaratgan, Fanlar akademiyasini 18 yil boshqargan olim.",
  bio: [
    "Obid Sodiqov 1913-yilda Toshkentda tugʻildi. Oʻrta Osiyo davlat universitetining kimyo fakultetini tamomlab, shu yerda ilmiy faoliyatini boshladi. Uning tadqiqotlari tabiiy birikmalar kimyosiga — Oʻrta Osiyo oʻsimliklaridagi alkaloidlar, oqsillar va boshqa biologik faol moddalarga bagʻishlandi.",
    "Sodiqov rahbarligida oʻnlab yangi alkaloidlar ajratib olindi va tuzilishi aniqlandi, ular asosida dori vositalari ishlab chiqildi. 1958–1966-yillarda u Toshkent davlat universiteti rektori, 1966–1984-yillarda Oʻzbekiston Fanlar akademiyasi prezidenti boʻldi. 1973-yilda uning tashabbusi bilan Bioorganik kimyo instituti tashkil etildi.",
    "Olim 1973-yilda Mehnat Qahramoni unvoniga sazovor boʻldi, yuzlab ilmiy maqolalar va monografiyalar muallifi, koʻplab fan doktorlarining ustozi. Obid Sodiqov 1987-yilda Toshkentda vafot etdi. Bioorganik kimyo instituti uning nomi bilan ataladi."
  ],
  timeline: [
    { y: 1913, t: "Toshkentda tugʻildi" },
    { y: 1937, t: "Universitetni tamomladi (taxminan)" },
    { y: 1958, t: "Toshkent davlat universiteti rektori" },
    { y: 1966, t: "Fanlar akademiyasi prezidenti" },
    { y: 1973, t: "Bioorganik kimyo institutiga asos soldi; Mehnat Qahramoni" },
    { y: 1984, t: "Prezidentlik muddati yakunlandi" },
    { y: 1987, t: "Toshkentda vafot etdi" }
  ],
  works: [
    { title: "Alkaloidlar kimyosi", year: "", note: "Oʻrta Osiyo oʻsimliklari alkaloidlari tadqiqi" },
    { title: "Bioorganik kimyo instituti", year: "1973", note: "Ilmiy markaz asoschisi" }
  ],
  quote: null,
  keyPoints: [
    "Fanlar akademiyasi prezidenti (1966–1984)",
    "Bioorganik kimyo instituti asoschisi",
    "Oʻsimlik alkaloidlaridan dorilar yaratgan"
  ],
  related: ["abdullayev", "sarimsoqov", "qoriniyoziy"]
},
{
  id: "sarimsoqov",
  name: "Toshmuhammad Sarimsoqov",
  fullName: "Toshmuhammad Aliyevich Sarimsoqov",
  field: "fan",
  role: "Matematik, akademik",
  born: { y: 1915, m: 9, d: 10, place: "Nanay, Namangan" },
  died: { y: 1995, m: 12, d: 19, place: "Toshkent" },
  photo: "img/sarimsoqov.jpg", focus: "50% 25%",
  photoNote: "Arxiv surati",
  summary: "Oʻzbek matematika maktabining asoschisi; ehtimollar nazariyasi va topologik yarimmaydonlar boʻyicha tadqiqotlari bilan tanilgan.",
  bio: [
    "Toshmuhammad Sarimsoqov 1915-yilda Namangan viloyatining Nanay qishlogʻida tugʻildi. Oʻrta Osiyo davlat universitetini tamomlab, Moskvada aspiranturada oʻqidi; 1942-yilda fan doktori boʻldi. 1943-yilda Oʻzbekiston Fanlar akademiyasi tashkil etilganda uning eng yosh akademiklaridan biri edi.",
    "Olimning ilmiy ishlari ehtimollar nazariyasi, Markov zanjirlari va funksional analizga bagʻishlangan. U topologik yarimmaydonlar nazariyasini yaratdi va bu sohada ilmiy maktab shakllantirdi. 1946–1952-yillarda Fanlar akademiyasi prezidenti, keyinchalik uzoq yillar Toshkent davlat universiteti rektori boʻlib ishladi.",
    "Sarimsoqov rahbarligida Oʻzbekistonda matematika instituti va universitet fakultetlari rivojlandi, yuzlab matematiklar tayyorlandi. U 1995-yilda Toshkentda vafot etdi. Fanlar akademiyasi Matematika instituti hozir uning nomi bilan yuritiladi."
  ],
  timeline: [
    { y: 1915, t: "Nanay qishlogʻida tugʻildi" },
    { y: 1936, t: "Universitetni tamomladi (taxminan)" },
    { y: 1942, t: "Fizika-matematika fanlari doktori" },
    { y: 1943, t: "Fanlar akademiyasi akademigi" },
    { y: 1946, t: "Fanlar akademiyasi prezidenti" },
    { y: 1971, t: "Toshkent davlat universiteti rektori" },
    { y: 1995, t: "Toshkentda vafot etdi" }
  ],
  works: [
    { title: "Topologik yarimmaydonlar nazariyasi", year: "", note: "Funksional analizdagi yangi yoʻnalish" },
    { title: "Ehtimollar nazariyasi va Markov zanjirlari", year: "", note: "Tadqiqotlar turkumi" }
  ],
  quote: null,
  keyPoints: [
    "Fanlar akademiyasi prezidenti (1946–1952)",
    "Topologik yarimmaydonlar nazariyasini yaratgan",
    "Matematika instituti uning nomida"
  ],
  related: ["qoriniyoziy", "sodiqov", "abdullayev"]
},
{
  id: "zulfiya",
  name: "Zulfiya",
  fullName: "Zulfiya Isroilova",
  field: "adabiyot",
  role: "Shoira, tarjimon, Oʻzbekiston xalq shoiri",
  born: { y: 1915, m: 3, d: 1, place: "Toshkent" },
  died: { y: 1996, m: 8, d: 1, place: "Toshkent" },
  photo: null, focus: "50% 25%",
  photoNote: "",
  summary: "XX asr oʻzbek sheʼriyatining eng mashhur ayol ovozi; sadoqat va vatan haqidagi lirikasi bilan avlodlar qalbini zabt etgan shoira.",
  bio: [
    "Zulfiya 1915-yil 1-martda Toshkentda quyuvchi-hunarmand oilasida tugʻildi. Xotin-qizlar pedagogika bilim yurtida oʻqidi, 1932-yilda «Hayot varaqlari» nomli birinchi toʻplami chop etildi. 1935-yilda shoir Hamid Olimjon bilan turmush qurdi; ularning ittifoqi oʻzbek adabiyotidagi eng mashhur ijodiy juftlikka aylandi.",
    "1944-yilda Olimjonning fojiali vafoti Zulfiya sheʼriyatining asosiy mavzusini belgiladi: «Hijron kunlarida», «Bahor keldi seni soʻroqlab», «Quyoshli qalam» dostoni — sadoqat, xotira va hayotga muhabbat haqidagi bu asarlar oʻzbek lirikasining choʻqqilaridan sanaladi. Shoira ayni paytda mehnat, ona va vatan mavzularida ham koʻplab sheʼrlar yozdi, «Saodat» jurnaliga uzoq yillar muharrirlik qildi.",
    "Zulfiya 1965-yilda Oʻzbekiston xalq shoiri unvoniga, 1968-yilda Javoharlal Neru xalqaro mukofotiga sazovor boʻldi; Osiyo va Afrika yozuvchilari harakatida faol qatnashdi. 1996-yilda Toshkentda vafot etdi. Oʻzbekistonda iqtidorli qizlar uchun «Zulfiya nomidagi davlat mukofoti» taʼsis etilgan."
  ],
  timeline: [
    { y: 1915, t: "Toshkentda tugʻildi" },
    { y: 1932, t: "«Hayot varaqlari» — birinchi toʻplami" },
    { y: 1935, t: "Hamid Olimjon bilan turmush qurdi" },
    { y: 1944, t: "Hamid Olimjon vafot etdi; «Hijron kunlarida» turkumi" },
    { y: 1958, t: "«Yuragimga yaqin kishilar» toʻplami" },
    { y: 1965, t: "Oʻzbekiston xalq shoiri" },
    { y: 1968, t: "Javoharlal Neru xalqaro mukofoti" },
    { y: 1970, t: "«Quyoshli qalam» dostoni" },
    { y: 1996, t: "Toshkentda vafot etdi" }
  ],
  works: [
    { title: "Hayot varaqlari", year: "1932", note: "Birinchi sheʼrlar toʻplami" },
    { title: "Hijron kunlarida", year: "1944", note: "Sheʼrlar turkumi" },
    { title: "Yuragimga yaqin kishilar", year: "1958", note: "Sheʼrlar" },
    { title: "Oʻylar", year: "1965", note: "Sheʼrlar" },
    { title: "Quyoshli qalam", year: "1970", note: "Hamid Olimjonga bagʻishlangan doston" }
  ],
  quote: null,
  keyPoints: [
    "XX asr oʻzbek sheʼriyatining eng mashhur shoirasi",
    "Hamid Olimjonning turmush oʻrtogʻi",
    "Javoharlal Neru xalqaro mukofoti sovrindori"
  ],
  related: ["olimjon", "gulom", "vohidov"]
},
{
  id: "ahmarov",
  name: "Chingiz Ahmarov",
  fullName: "Chingiz Gʻabdurahmonovich Ahmarov",
  field: "sanat",
  role: "Rassom, monumental sanʼat ustasi",
  born: { y: 1912, m: 8, d: 16, place: "Troitsk" },
  died: { y: 1994, place: "Toshkent" },
  photo: null, focus: "50% 25%",
  photoNote: "",
  summary: "Navoiy teatri va Toshkent metrosini bezagan devoriy suratlar muallifi; Sharq miniatyurasi anʼanasini zamonaviy sanʼatga olib kirgan rassom.",
  bio: [
    "Chingiz Ahmarov 1912-yilda Uralning Troitsk shahrida tugʻildi. Perm va Moskvadagi badiiy oʻquv yurtlarida tahsil oldi; 1930-yillarning oxirida Oʻzbekistonga keldi va umrining qolgan qismini Toshkentda oʻtkazdi. Uning ijodi Sharq miniatyurasi, Samarqand va Buxoro meʼmoriy bezaklari taʼsirida shakllandi.",
    "Rassomning eng mashhur ishi — Toshkentdagi Alisher Navoiy opera va balet teatri foyelarini bezagan devoriy suratlar (1944–1947). Navoiy dostonlari qahramonlarini tasvirlagan bu turkum oʻzbek monumental sanʼatining klassikasi hisoblanadi va 1948-yilda Davlat mukofotiga sazovor boʻldi. Keyinchalik u Alisher Navoiy adabiyot muzeyi, Toshkent metrosining «Alisher Navoiy» bekati (1984) va boshqa binolar uchun pannolar yaratdi.",
    "Ahmarov dastgohli rangtasvirda ham samarali ijod qildi: nafis ayol portretlari va Navoiy asarlariga chizilgan illyustratsiyalari keng tanilgan. Oʻzbekiston xalq rassomi unvoniga sazovor boʻlgan usta 1994-yilda Toshkentda vafot etdi."
  ],
  timeline: [
    { y: 1912, t: "Troitskda tugʻildi" },
    { y: 1935, t: "Moskvada badiiy taʼlim (taxminan)" },
    { y: 1944, t: "Navoiy teatri devoriy suratlari ustida ish boshladi" },
    { y: 1947, t: "Teatr suratlari tugallandi" },
    { y: 1948, t: "Davlat mukofoti" },
    { y: 1984, t: "«Alisher Navoiy» metro bekati pannolari" },
    { y: 1994, t: "Toshkentda vafot etdi" }
  ],
  works: [
    { title: "Navoiy teatri devoriy suratlari", year: "1944–1947", note: "Monumental turkum" },
    { title: "«Alisher Navoiy» metro bekati bezaklari", year: "1984", note: "Pannolar" },
    { title: "Navoiy asarlariga illyustratsiyalar", year: "", note: "Kitob grafikasi" }
  ],
  quote: null,
  keyPoints: [
    "Navoiy teatri devoriy suratlari muallifi",
    "«Alisher Navoiy» metro bekatini bezagan",
    "Miniatyura anʼanasini zamonaviy sanʼatga olib kirgan"
  ],
  related: ["tansiqboyev", "navoiy", "rajabiy"]
},
{
  id: "saidahmad",
  name: "Said Ahmad",
  fullName: "Said Ahmad Husanxoʻjayev",
  field: "adabiyot",
  role: "Yozuvchi, dramaturg, Oʻzbekiston Qahramoni",
  born: { y: 1920, m: 6, d: 10, place: "Toshkent" },
  died: { y: 2007, m: 12, d: 5, place: "Toshkent" },
  photo: "img/saidahmad.jpg", focus: "50% 25%",
  photoNote: "Arxiv surati",
  summary: "«Ufq» trilogiyasi va «Kelinlar qoʻzgʻoloni» komediyasi muallifi; hazil va lirikani uygʻunlashtirgan xalq yozuvchisi.",
  bio: [
    "Said Ahmad 1920-yilda Toshkentda tugʻildi. Yoshligidan matbuotda ishladi, hikoyalar yozdi; Abdulla Qahhorni oʻziga ustoz deb bildi. 1950-yilda qatagʻon toʻlqinida hibsga olinib, 1955-yilgacha lagerda boʻldi; bu yillar keyinchalik uning asarlarida oʻz aksini topdi.",
    "Yozuvchining eng yirik asari — «Qirq besh kun», «Hijron kunlarida», «Ufq boʻsagʻasida» romanlaridan iborat «Ufq» trilogiyasi (1964–1974). Unda urush yillaridagi qishloq hayoti, oddiy odamlarning matonati keng epik koʻlamda tasvirlangan. «Kelinlar qoʻzgʻoloni» (1976) komediyasi oʻzbek teatrining eng koʻp sahnalashtirilgan asarlaridan biri boʻlib, film sifatida ham mashhur.",
    "Said Ahmad hajviy hikoyalari, «Jimjitlik» romani va esselari bilan ham tanilgan. 1980-yilda Oʻzbekiston xalq yozuvchisi, 1999-yilda Oʻzbekiston Qahramoni unvoniga sazovor boʻldi. Turmush oʻrtogʻi — shoira Saida Zunnunova. Yozuvchi 2007-yilda Toshkentda vafot etdi."
  ],
  timeline: [
    { y: 1920, t: "Toshkentda tugʻildi" },
    { y: 1940, t: "Birinchi hikoyalar toʻplami (taxminan)" },
    { y: 1950, t: "Qatagʻon: hibsga olindi" },
    { y: 1955, t: "Ozod etildi va oqlandi" },
    { y: 1964, t: "«Qirq besh kun» — «Ufq» trilogiyasining birinchi kitobi" },
    { y: 1976, t: "«Kelinlar qoʻzgʻoloni» komediyasi" },
    { y: 1980, t: "Oʻzbekiston xalq yozuvchisi" },
    { y: 1999, t: "Oʻzbekiston Qahramoni" },
    { y: 2007, t: "Toshkentda vafot etdi" }
  ],
  works: [
    { title: "Ufq (trilogiya)", year: "1964–1974", note: "«Qirq besh kun», «Hijron kunlarida», «Ufq boʻsagʻasida»" },
    { title: "Kelinlar qoʻzgʻoloni", year: "1976", note: "Komediya" },
    { title: "Jimjitlik", year: "1988", note: "Roman" },
    { title: "Hajviy hikoyalar", year: "", note: "Turkum" }
  ],
  quote: null,
  keyPoints: [
    "«Ufq» trilogiyasi muallifi",
    "«Kelinlar qoʻzgʻoloni» — eng mashhur oʻzbek komediyalaridan",
    "Oʻzbekiston Qahramoni (1999)"
  ],
  related: ["qahhor", "pqodirov", "hoshimov"]
},
{
  id: "pqodirov",
  name: "Pirimqul Qodirov",
  fullName: "Pirimqul Qodirov",
  field: "adabiyot",
  role: "Yozuvchi, tarixiy roman ustasi",
  born: { y: 1928, m: 10, d: 25, place: "Kengkoʻl, Oʻratepa yaqinida" },
  died: { y: 2010, m: 12, d: 20, place: "Toshkent" },
  photo: null, focus: "50% 25%",
  photoNote: "",
  summary: "Bobur haqidagi «Yulduzli tunlar» romani muallifi; Temuriylar davrini badiiy tiklagan xalq yozuvchisi.",
  bio: [
    "Pirimqul Qodirov 1928-yilda Oʻratepa yaqinidagi Kengkoʻl qishlogʻida tugʻildi. Oʻrta Osiyo davlat universitetini tamomlab, Moskvada Adabiyot institutida tahsil oldi. Dastlabki asarlari — «Uch ildiz» (1958), «Qora koʻzlar» (1966) romanlari zamonaviy hayotga bagʻishlangan.",
    "Yozuvchini mashhur qilgan asar — «Yulduzli tunlar» (1978). Bobur hayoti haqidagi bu roman «Boburnoma» va tarixiy manbalarga tayanib, shoir-hukmdorning murakkab shaxsiyatini, Andijondan Hindistongacha boʻlgan yoʻlini jonli tasvirlaydi. Asar 1981-yilda Davlat mukofotiga sazovor boʻldi va koʻplab tillarga tarjima qilindi. Uning davomi — «Avlodlar dovoni» (1988) Humoyun va Akbar davri haqida.",
    "Qodirov «Olmos kamar» romani, qissalar va adabiy-tanqidiy maqolalar muallifi, 1988-yilda Oʻzbekiston xalq yozuvchisi unvonini oldi, mustaqillik yillarida Oliy Majlis deputati boʻldi. 2010-yilda Toshkentda vafot etdi."
  ],
  timeline: [
    { y: 1928, t: "Kengkoʻl qishlogʻida tugʻildi" },
    { y: 1954, t: "Moskvada Adabiyot institutini tamomladi (taxminan)" },
    { y: 1958, t: "«Uch ildiz» romani" },
    { y: 1966, t: "«Qora koʻzlar» romani" },
    { y: 1978, t: "«Yulduzli tunlar» romani" },
    { y: 1981, t: "Davlat mukofoti" },
    { y: 1988, t: "«Avlodlar dovoni»; Oʻzbekiston xalq yozuvchisi" },
    { y: 2010, t: "Toshkentda vafot etdi" }
  ],
  works: [
    { title: "Yulduzli tunlar", year: "1978", note: "Bobur haqidagi tarixiy roman" },
    { title: "Avlodlar dovoni", year: "1988", note: "Humoyun va Akbar haqida roman" },
    { title: "Uch ildiz", year: "1958", note: "Roman" },
    { title: "Qora koʻzlar", year: "1966", note: "Roman" },
    { title: "Olmos kamar", year: "1977", note: "Roman" }
  ],
  quote: null,
  keyPoints: [
    "«Yulduzli tunlar» — Bobur haqidagi roman",
    "«Avlodlar dovoni» — Boburiylar haqida davomi",
    "Oʻzbekiston xalq yozuvchisi (1988)"
  ],
  related: ["bobur", "saidahmad", "oybek"]
},
{
  id: "tansiqboyev",
  name: "Oʻrol Tansiqboyev",
  fullName: "Oʻrol Tansiqboyevich Tansiqboyev",
  field: "sanat",
  role: "Rassom, manzara ustasi",
  born: { y: 1904, m: 1, d: 14, place: "Toshkent" },
  died: { y: 1974, m: 4, d: 18, place: "Nukus" },
  photo: "img/tansiqboyev.jpg", focus: "50% 25%",
  photoNote: "Arxiv surati",
  summary: "Oʻzbek manzara rangtasvirining asoschisi; togʻlar, choʻllar va suv omborlarini epik koʻlamda tasvirlagan SSSR xalq rassomi.",
  bio: [
    "Oʻrol Tansiqboyev 1904-yilda Toshkentda tugʻildi. Toshkent badiiy studiyasi va Penza badiiy bilim yurtida tahsil oldi. 1920–1930-yillardagi ilk ishlarida u yorqin ranglar va shartli shakllar bilan tajriba qildi, keyinchalik esa realistik manzaraga oʻtdi.",
    "Rassomning yetuk davri asarlari — «Tong. Qayroqqum suv ombori» (1957), «Ona yurt», «Tuya karvoni», «Qizil tush», Chorvoq va Qashqadaryo manzaralari — Oʻzbekiston tabiatini monumental, keng nafasli tasvirlaydi. U togʻ va choʻl manzaralarini milliy rangtasvirning asosiy janrlaridan biriga aylantirdi.",
    "Tansiqboyev 1958-yilda SSSR Badiiy akademiyasi haqiqiy aʼzosi, 1963-yilda SSSR xalq rassomi boʻldi. 1974-yilda Nukusda vafot etdi. Toshkentdagi uy-muzeyi va Oʻzbekiston davlat sanʼat muzeyidagi doimiy ekspozitsiya uning merosini saqlaydi."
  ],
  timeline: [
    { y: 1904, t: "Toshkentda tugʻildi" },
    { y: 1928, t: "Penza badiiy bilim yurtini tamomladi (taxminan)" },
    { y: 1957, t: "«Tong. Qayroqqum suv ombori»" },
    { y: 1958, t: "SSSR Badiiy akademiyasi akademigi" },
    { y: 1963, t: "SSSR xalq rassomi" },
    { y: 1974, t: "Nukusda vafot etdi" }
  ],
  works: [
    { title: "Tong. Qayroqqum suv ombori", year: "1957", note: "Manzara" },
    { title: "Ona yurt", year: "", note: "Manzara" },
    { title: "Tuya karvoni", year: "", note: "Manzara" },
    { title: "Qizil tush", year: "", note: "Manzara" }
  ],
  quote: null,
  keyPoints: [
    "Oʻzbek manzara rangtasvirining asoschisi",
    "SSSR xalq rassomi (1963)",
    "Toshkentda uy-muzeyi bor"
  ],
  related: ["ahmarov", "rajabiy", "zokirov"]
},
{
  id: "zokirov",
  name: "Botir Zokirov",
  fullName: "Botir Karimovich Zokirov",
  field: "sanat",
  role: "Xonanda, estrada asoschisi, rassom",
  born: { y: 1936, m: 4, d: 26, place: "Moskva" },
  died: { y: 1985, m: 1, d: 23, place: "Toshkent" },
  photo: "img/zokirov.jpg", focus: "50% 30%",
  photoNote: "2022-yilgi pochta markasi",
  summary: "Oʻzbek estrada sanʼatining asoschisi; «Arab tangosi» bilan butun ittifoqda mashhur boʻlgan xonanda, ayni paytda rassom va yozuvchi.",
  bio: [
    "Botir Zokirov 1936-yilda Moskvada, mashhur xonandalar Karim Zokirov va Shoista Saidova oilasida tugʻildi. Toshkent konservatoriyasida oʻqidi va 1956-yildan Oʻzbekiston davlat estrada orkestrida yakkaxon xonanda boʻldi. 1957-yilda Moskvadagi Butunjahon yoshlar festivalida ijro etgan «Arab tangosi» unga butun ittifoq miqyosida shuhrat keltirdi.",
    "Zokirov oʻzbek estradasiga yangi ovoz va yangi madaniyat olib kirdi: u xalq qoʻshiqlarini zamonaviy tarzda, dunyo estradasi namunalarini esa asl tilida — arab, fors, fransuz, italyan tillarida ijro etdi. 1972-yilda Toshkentda ochilgan «Oʻzbekiston» myuzik-xolining asoschisi va badiiy rahbari boʻldi.",
    "Xonanda ayni paytda isteʼdodli rassom va yozuvchi edi: rangtasvir asarlari koʻrgazmalarda namoyish etildi, hikoya va esselari chop etildi. 1965-yilda Oʻzbekiston xalq artisti unvonini oldi. Uzoq kasallikdan soʻng 1985-yilda Toshkentda vafot etdi. 2000-yilda «Buyuk xizmatlari uchun» ordeni bilan taqdirlandi."
  ],
  timeline: [
    { y: 1936, t: "Moskvada tugʻildi" },
    { y: 1956, t: "Oʻzbekiston estrada orkestri yakkaxoni" },
    { y: 1957, t: "Moskva festivali: «Arab tangosi»" },
    { y: 1965, t: "Oʻzbekiston xalq artisti" },
    { y: 1972, t: "«Oʻzbekiston» myuzik-xoliga asos soldi" },
    { y: 1985, t: "Toshkentda vafot etdi" }
  ],
  works: [
    { title: "Arab tangosi", year: "1957", note: "Eng mashhur ijrosi" },
    { title: "«Oʻzbekiston» myuzik-xoli", year: "1972", note: "Asoschisi va badiiy rahbari" },
    { title: "Rangtasvir va hikoyalar", year: "", note: "Rassom va yozuvchi sifatidagi merosi" }
  ],
  quote: null,
  keyPoints: [
    "Oʻzbek estradasining asoschisi",
    "«Arab tangosi» bilan mashhur boʻlgan",
    "1972-yilda myuzik-xol ochgan"
  ],
  related: ["rajabiy", "tansiqboyev", "ahmarov"]
},
{
  id: "vohidov",
  name: "Erkin Vohidov",
  fullName: "Erkin Vohidovich Vohidov",
  field: "adabiyot",
  role: "Shoir, dramaturg, tarjimon, Oʻzbekiston Qahramoni",
  born: { y: 1936, m: 12, d: 28, place: "Oltiariq, Fargʻona" },
  died: { y: 2016, m: 5, d: 30, place: "Toshkent" },
  photo: "img/vohidov.jpg", focus: "50% 20%",
  photoNote: "Fotosurat, 2000-yillar",
  summary: "«Oʻzbegim» qasidasi va «Ruhlar isyoni» dostoni muallifi; Gyotening «Faust»ini oʻzbekchaga tarjima qilgan shoir.",
  bio: [
    "Erkin Vohidov 1936-yilda Fargʻona viloyatining Oltiariq tumanida tugʻildi. Toshkent davlat universitetining filologiya fakultetini tamomladi, nashriyot va jurnallarda ishladi. Birinchi toʻplami «Tong nafasi» 1961-yilda chiqdi va yosh shoirni darhol tanitdi.",
    "1968-yilda yozilgan «Oʻzbegim» qasidasi xalq tarixi va qadr-qimmati haqidagi eng mashhur oʻzbek sheʼrlaridan biriga aylandi va qoʻshiq boʻlib kuylandi. «Yoshlik devoni» (1969) gʻazal janrini zamonaviy sheʼriyatga qaytardi. Bengal shoiri Nazrul Islom hayoti haqidagi «Ruhlar isyoni» (1979) dostoni erk va ijod haqidagi falsafiy asar sifatida keng eʼtirof etildi.",
    "Vohidov Gyotening «Faust»ini, Yesenin, Blok, Lermontov sheʼrlarini tarjima qildi; «Oltin devor» kabi komediyalar yozdi. 1987-yilda Oʻzbekiston xalq shoiri, 1999-yilda Oʻzbekiston Qahramoni unvoniga sazovor boʻldi; mustaqillik yillarida Oliy Majlis qoʻmitalariga rahbarlik qildi. 2016-yilda Toshkentda vafot etdi."
  ],
  timeline: [
    { y: 1936, t: "Oltiariqda tugʻildi" },
    { y: 1961, t: "«Tong nafasi» — birinchi toʻplami" },
    { y: 1968, t: "«Oʻzbegim» qasidasi" },
    { y: 1969, t: "«Yoshlik devoni»" },
    { y: 1975, t: "«Faust» tarjimasi (taxminan)" },
    { y: 1979, t: "«Ruhlar isyoni» dostoni" },
    { y: 1987, t: "Oʻzbekiston xalq shoiri" },
    { y: 1999, t: "Oʻzbekiston Qahramoni" },
    { y: 2016, t: "Toshkentda vafot etdi" }
  ],
  works: [
    { title: "Oʻzbegim", year: "1968", note: "Qasida" },
    { title: "Ruhlar isyoni", year: "1979", note: "Doston" },
    { title: "Yoshlik devoni", year: "1969", note: "Gʻazallar toʻplami" },
    { title: "Tong nafasi", year: "1961", note: "Sheʼrlar" },
    { title: "Faust (tarjima)", year: "", note: "Gyote fojiasining oʻzbekcha tarjimasi" },
    { title: "Oltin devor", year: "", note: "Komediya" }
  ],
  quote: { text: "Tarixingdir ming asrlar ichra pinhon, oʻzbegim.", src: "«Oʻzbegim»" },
  keyPoints: [
    "«Oʻzbegim» qasidasi muallifi",
    "Gyotening «Faust»ini tarjima qilgan",
    "Oʻzbekiston Qahramoni (1999)"
  ],
  related: ["oripov", "zulfiya", "yusuf"]
},
{
  id: "xolmirzayev",
  name: "Shukur Xolmirzayev",
  fullName: "Shukur Xolmirzayev",
  field: "adabiyot",
  role: "Yozuvchi, dramaturg, Oʻzbekiston xalq yozuvchisi",
  born: { y: 1940, m: 3, d: 24, place: "Boysun, Surxondaryo" },
  died: { y: 2005, m: 9, d: 29, place: "Toshkent" },
  photo: null, focus: "50% 25%",
  photoNote: "",
  summary: "Surxon togʻlari va oddiy odamlar haqidagi hikoyalari bilan zamonaviy oʻzbek nasrining psixologik maktabini yaratgan yozuvchi.",
  bio: [
    "Shukur Xolmirzayev 1940-yilda Surxondaryoning Boysun tumanida tugʻildi. Toshkent davlat universitetining jurnalistika fakultetini tamomladi, nashriyot va jurnallarda ishladi. Birinchi kitobi «Oʻn sakkizga kirmagan kim bor» (1965) yosh yozuvchining oʻziga xos ovozini namoyon etdi.",
    "Xolmirzayev nasri togʻ tabiati, ov, ot va it obrazlari, tashqi sokin ammo ichki taranglikka toʻla kishilar tasviri bilan ajralib turadi. «Qil koʻprik», «Yoʻlovchi», «Olabo'ji», «Bodom qishda gulladi» kabi hikoya va qissalari oʻzbek psixologik nasrining namunalari hisoblanadi. «Soʻnggi bekat» (1976) romani va «Qora kamar» dramasi ham keng tanilgan.",
    "Yozuvchi hikoya janrida Chexov va Hemingueyni ustoz deb bildi, ijod haqidagi esse va suhbatlari yosh adiblar uchun qoʻllanmaga aylandi. 1991-yilda Oʻzbekiston xalq yozuvchisi unvoniga sazovor boʻldi. 2005-yilda Toshkentda vafot etdi."
  ],
  timeline: [
    { y: 1940, t: "Boysunda tugʻildi" },
    { y: 1963, t: "Toshkent davlat universitetini tamomladi (taxminan)" },
    { y: 1965, t: "«Oʻn sakkizga kirmagan kim bor» — birinchi kitobi" },
    { y: 1976, t: "«Soʻnggi bekat» romani" },
    { y: 1984, t: "«Qil koʻprik» toʻplami" },
    { y: 1985, t: "«Qora kamar» dramasi" },
    { y: 1991, t: "Oʻzbekiston xalq yozuvchisi" },
    { y: 2005, t: "Toshkentda vafot etdi" }
  ],
  works: [
    { title: "Oʻn sakkizga kirmagan kim bor", year: "1965", note: "Qissa" },
    { title: "Soʻnggi bekat", year: "1976", note: "Roman" },
    { title: "Qil koʻprik", year: "1984", note: "Roman" },
    { title: "Qora kamar", year: "1985", note: "Drama" },
    { title: "Hikoyalar", year: "", note: "«Yoʻlovchi», «Olabo'ji», «Bodom qishda gulladi» va boshqalar" }
  ],
  quote: null,
  keyPoints: [
    "Zamonaviy oʻzbek psixologik nasrining ustasi",
    "Surxondaryo togʻlari haqidagi hikoyalar muallifi",
    "Oʻzbekiston xalq yozuvchisi (1991)"
  ],
  related: ["hoshimov", "oripov", "qahhor"]
},
{
  id: "oripov",
  name: "Abdulla Oripov",
  fullName: "Abdulla Oripov",
  field: "adabiyot",
  role: "Shoir, Davlat madhiyasi muallifi, Oʻzbekiston Qahramoni",
  born: { y: 1941, m: 3, d: 21, place: "Nekoʻz, Qashqadaryo" },
  died: { y: 2016, m: 11, d: 5, place: "Xyuston, AQSH" },
  photo: "img/oripov.jpg", focus: "50% 25%",
  photoNote: "2021-yilgi pochta markasi",
  summary: "Oʻzbekiston Davlat madhiyasi soʻzlarining muallifi; falsafiy lirikasi va Dante tarjimasi bilan mashhur shoir.",
  bio: [
    "Abdulla Oripov 1941-yilda Qashqadaryo viloyatining Koson tumanidagi Nekoʻz qishlogʻida tugʻildi. Toshkent davlat universitetining filologiya fakultetini tamomladi. «Mitti yulduz» (1965) va «Koʻzlarim yoʻlingda» (1966) toʻplamlari oʻzbek sheʼriyatiga yangi falsafiy teranlik va ravon ohang olib kirdi.",
    "Shoirning «Onajon», «Ruhim», «Hayrat», «Yuzma-yuz» toʻplamlari, «Jannatga yoʻl» dostoni va «Ranjkom» kabi asarlari insonning maʼnaviy izlanishlari, vatan va tarix haqida. U Dantening «Ilohiy komediya»sining «Doʻzax» qismini oʻzbek tiliga tarjima qildi. 1992-yilda uning sheʼri asosida Oʻzbekiston Respublikasi Davlat madhiyasi qabul qilindi.",
    "Oripov 1983-yilda Oʻzbekiston xalq shoiri, 1998-yilda Oʻzbekiston Qahramoni unvoniga sazovor boʻldi; 1996–2009-yillarda Yozuvchilar uyushmasiga rahbarlik qildi, Oliy Majlis deputati boʻldi. 2016-yilda AQShning Xyuston shahrida davolanish paytida vafot etdi va Toshkentda dafn etildi."
  ],
  timeline: [
    { y: 1941, t: "Nekoʻz qishlogʻida tugʻildi" },
    { y: 1963, t: "Toshkent davlat universitetini tamomladi" },
    { y: 1965, t: "«Mitti yulduz» — birinchi toʻplami" },
    { y: 1969, t: "«Onajon» toʻplami" },
    { y: 1979, t: "«Hayrat» toʻplami" },
    { y: 1983, t: "Oʻzbekiston xalq shoiri" },
    { y: 1992, t: "Davlat madhiyasi matni qabul qilindi" },
    { y: 1996, t: "Yozuvchilar uyushmasi raisi" },
    { y: 1998, t: "Oʻzbekiston Qahramoni" },
    { y: 2016, t: "Xyustonda vafot etdi" }
  ],
  works: [
    { title: "Oʻzbekiston Respublikasi Davlat madhiyasi", year: "1992", note: "Soʻzlari" },
    { title: "Mitti yulduz", year: "1965", note: "Sheʼrlar" },
    { title: "Onajon", year: "1969", note: "Sheʼrlar" },
    { title: "Hayrat", year: "1979", note: "Sheʼrlar" },
    { title: "Jannatga yoʻl", year: "", note: "Doston" },
    { title: "Doʻzax (tarjima)", year: "", note: "Dante «Ilohiy komediya»sidan" }
  ],
  quote: { text: "Serquyosh, hur oʻlka, elga baxt, najot.", src: "Oʻzbekiston Davlat madhiyasi" },
  keyPoints: [
    "Davlat madhiyasi soʻzlarining muallifi",
    "Dantening «Doʻzax»ini tarjima qilgan",
    "Oʻzbekiston Qahramoni (1998)"
  ],
  related: ["vohidov", "yusuf", "hoshimov"]
},
{
  id: "hoshimov",
  name: "Oʻtkir Hoshimov",
  fullName: "Oʻtkir Hoshimov",
  field: "adabiyot",
  role: "Yozuvchi, publitsist, Oʻzbekiston xalq yozuvchisi",
  born: { y: 1941, m: 8, d: 5, place: "Toshkent" },
  died: { y: 2013, m: 5, d: 24, place: "Toshkent" },
  photo: "img/hoshimov.jpg", focus: "50% 25%",
  photoNote: "Arxiv surati",
  summary: "«Dunyoning ishlari» va «Ikki eshik orasi» muallifi; oddiy toshkentliklar hayotini samimiy tasvirlagan eng koʻp oʻqiladigan yozuvchilardan.",
  bio: [
    "Oʻtkir Hoshimov 1941-yilda Toshkentning Doʻmbirobod mahallasida tugʻildi. Toshkent davlat universitetining jurnalistika fakultetini tamomlab, gazeta va jurnallarda ishladi; «Sharq yulduzi» jurnaliga bosh muharrirlik qildi. Birinchi qissasi «Bahor qaytmaydi» (1970) yosh oʻquvchilar orasida darhol mashhur boʻldi.",
    "«Dunyoning ishlari» (1982) qissasi ona haqidagi hikoyalar turkumi boʻlib, oʻzbek adabiyotidagi eng samimiy asarlardan biri hisoblanadi. «Ikki eshik orasi» (1986) romani urush va urushdan keyingi yillarda bir mahalla odamlarining taqdirini koʻp ovozli tarzda tasvirlaydi. «Tushda kechgan umrlar» (1994) romani Afgʻon urushi va shoʻro davri haqida.",
    "«Daftar hoshiyasidagi bitiklar» — yozuvchining hikmatli qaydlar toʻplami — alohida shuhrat qozondi. Hoshimov 1991-yilda Oʻzbekiston xalq yozuvchisi unvonini oldi, Oliy Majlis deputati boʻldi. 2013-yilda Toshkentda vafot etdi."
  ],
  timeline: [
    { y: 1941, t: "Toshkentda tugʻildi" },
    { y: 1964, t: "Universitetni tamomladi (taxminan)" },
    { y: 1970, t: "«Bahor qaytmaydi» qissasi" },
    { y: 1976, t: "«Nur borki, soya bor» romani" },
    { y: 1982, t: "«Dunyoning ishlari»" },
    { y: 1986, t: "«Ikki eshik orasi» romani" },
    { y: 1991, t: "Oʻzbekiston xalq yozuvchisi" },
    { y: 1994, t: "«Tushda kechgan umrlar»" },
    { y: 2013, t: "Toshkentda vafot etdi" }
  ],
  works: [
    { title: "Dunyoning ishlari", year: "1982", note: "Qissa" },
    { title: "Ikki eshik orasi", year: "1986", note: "Roman" },
    { title: "Tushda kechgan umrlar", year: "1994", note: "Roman" },
    { title: "Bahor qaytmaydi", year: "1970", note: "Qissa" },
    { title: "Daftar hoshiyasidagi bitiklar", year: "2001", note: "Hikmatli qaydlar" }
  ],
  quote: null,
  keyPoints: [
    "«Dunyoning ishlari» — ona haqidagi qissa",
    "«Ikki eshik orasi» romani muallifi",
    "Oʻzbekiston xalq yozuvchisi (1991)"
  ],
  related: ["xolmirzayev", "oripov", "saidahmad"]
},
{
  id: "yusuf",
  name: "Muhammad Yusuf",
  fullName: "Muhammad Yusuf",
  field: "adabiyot",
  role: "Shoir, Oʻzbekiston xalq shoiri",
  born: { y: 1954, m: 4, d: 26, place: "Marhamat, Andijon" },
  died: { y: 2001, m: 7, d: 29, place: "Sirdaryo viloyati" },
  photo: "img/yusuf.jpg", focus: "50% 25%",
  photoNote: "Arxiv surati",
  summary: "Sheʼrlari qoʻshiqqa aylanib xalq orasida keng tarqalgan, mustaqillik davrining eng sevimli shoiri.",
  bio: [
    "Muhammad Yusuf 1954-yilda Andijon viloyatining Marhamat tumanida tugʻildi. Toshkentdagi Rus tili va adabiyoti institutini tamomladi, nashriyot va matbuotda ishladi. Birinchi toʻplami «Tanish teraklar» (1985) va undan keyingi «Bulbulga bir gapim bor», «Uyqudagi qiz», «Ishq kemasi» kitoblari oʻquvchilar mehrini qozondi.",
    "Uning sheʼriyati xalq qoʻshiqlariga yaqin sodda, samimiy ohangi, vatan, ona, muhabbat va qishloq hayoti haqidagi jonli obrazlari bilan ajralib turadi. Oʻnlab sheʼrlari mashhur qoʻshiqlarga aylandi va shoir tirikligidayoq xalq orasida keng shuhrat topdi.",
    "Muhammad Yusuf 1998-yilda Oʻzbekiston xalq shoiri unvoniga sazovor boʻldi, Oliy Majlis deputati, Yozuvchilar uyushmasi rais oʻrinbosari boʻldi. 2001-yil 29-iyulda 47 yoshida Sirdaryo viloyatida toʻsatdan vafot etdi. Marhamatda uy-muzeyi ochilgan, koʻplab maktablar uning nomi bilan ataladi."
  ],
  timeline: [
    { y: 1954, t: "Marhamat tumanida tugʻildi" },
    { y: 1978, t: "Institutni tamomladi (taxminan)" },
    { y: 1985, t: "«Tanish teraklar» — birinchi toʻplami" },
    { y: 1987, t: "«Bulbulga bir gapim bor»" },
    { y: 1989, t: "«Uyqudagi qiz»" },
    { y: 1998, t: "Oʻzbekiston xalq shoiri" },
    { y: 2001, t: "Sirdaryo viloyatida vafot etdi" }
  ],
  works: [
    { title: "Tanish teraklar", year: "1985", note: "Sheʼrlar" },
    { title: "Bulbulga bir gapim bor", year: "1987", note: "Sheʼrlar" },
    { title: "Uyqudagi qiz", year: "1989", note: "Sheʼrlar" },
    { title: "Ishq kemasi", year: "", note: "Sheʼrlar" },
    { title: "Erka kiyik", year: "", note: "Sheʼrlar" }
  ],
  quote: null,
  keyPoints: [
    "Sheʼrlari koʻplab qoʻshiqlarga aylangan",
    "Oʻzbekiston xalq shoiri (1998)",
    "47 yoshida vafot etgan"
  ],
  related: ["oripov", "vohidov", "hoshimov"]
},
{
  id: "behbudiy",
  jadid: true,
  name: "Mahmudxoʻja Behbudiy",
  fullName: "Mahmudxoʻja Behbudxoʻja oʻgʻli Behbudiy",
  field: "marifat",
  role: "Jadidlar yetakchisi, dramaturg, noshir",
  born: { y: 1875, m: 1, d: 20, place: "Samarqand" },
  died: { y: 1919, m: 3, d: 25, place: "Qarshi" },
  photo: "img/behbudiy.jpg", focus: "50% 30%",
  photoNote: "",
  summary: "Turkiston jadidchilik harakatining gʻoyaviy otasi; birinchi oʻzbek dramasi «Padarkush» muallifi, «Oyina» jurnali va «Samarqand» gazetasining noshiri.",
  bio: [
    "Mahmudxoʻja Behbudiy 1875-yilda Samarqand yaqinidagi Baxshitepa qishlogʻida ruhoniy oilasida tugʻildi. Arab va fors tillarini, fiqh va hadis ilmini puxta egalladi, yoshligida qozixonada mirzalik qildi, keyinchalik mufti darajasiga koʻtarildi. 1899–1900-yillarda haj safariga chiqib, Istanbul, Qohira va Qozon shaharlarini koʻrdi; bu safar uning dunyoqarashini tubdan oʻzgartirdi.",
    "Vataniga qaytgach, Behbudiy yangi usul maktablarini ochish, ular uchun darsliklar yozish va nashr etish ishiga boshchilik qildi. «Kitobat ul-atfol», «Muntaxabi jugʻrofiyai umumiy» kabi qoʻllanmalar yaratdi, oʻz kitob doʻkoni va nashriyotini tashkil etdi. 1913-yilda «Samarqand» gazetasini, soʻng oʻn besh kunlik «Oyina» jurnalini chiqara boshladi. «Ikki emas, toʻrt til lozim» maqolasida yoshlarni ona tili bilan birga arab, fors va rus tillarini oʻrganishga chaqirdi.",
    "1911-yilda yozilgan «Padarkush» dramasi oʻqimagan boy oʻgʻlining fojiasi orqali jaholat oqibatini koʻrsatadi. 1914-yilda Samarqand va Toshkentda sahnalashtirilgan bu asar oʻzbek milliy teatrining boshlanishi hisoblanadi. 1919-yil boshida Behbudiy Buxoro amiri odamlari tomonidan Qarshida qoʻlga olinib, qatl etildi. Bugun Samarqandda uning nomidagi koʻcha va haykal bor."
  ],
  timeline: [
    { y: 1875, t: "Samarqand yaqinida tugʻildi" },
    { y: 1899, t: "Haj safari: Istanbul, Qohira, Qozon" },
    { y: 1903, t: "Samarqand atrofida yangi usul maktabini ochishga koʻmaklashdi (taxminan)" },
    { y: 1908, t: "«Kitobat ul-atfol» darsligi" },
    { y: 1911, t: "«Padarkush» dramasi yozildi" },
    { y: 1913, t: "«Samarqand» gazetasi va «Oyina» jurnali" },
    { y: 1914, t: "«Padarkush» Samarqand va Toshkentda sahnalashtirildi" },
    { y: 1919, t: "Qarshida qatl etildi" }
  ],
  works: [
    { title: "Padarkush", year: "1911", note: "Birinchi oʻzbek dramasi" },
    { title: "Oyina", year: "1913–1915", note: "Ijtimoiy-maʼrifiy jurnal" },
    { title: "Samarqand", year: "1913", note: "Gazeta" },
    { title: "Kitobat ul-atfol", year: "1908", note: "Bolalar uchun alifbe darsligi" },
    { title: "Muntaxabi jugʻrofiyai umumiy", year: "", note: "Umumiy geografiya darsligi" }
  ],
  quote: { text: "Ikki emas, toʻrt til lozim.", src: "«Oyina» jurnalidagi maqola, 1913" },
  keyPoints: [
    "Birinchi oʻzbek dramasi «Padarkush» muallifi",
    "«Oyina» jurnali va «Samarqand» gazetasini chiqargan",
    "1919-yilda Qarshida qatl etilgan"
  ],
  related: ["munavvarqori", "fitrat", "avloniy", "hamza"]
},
{
  id: "munavvarqori",
  jadid: true,
  name: "Munavvar Qori",
  fullName: "Munavvar Qori Abdurashidxonov",
  field: "marifat",
  role: "Jadid pedagog, noshir, jamoat arbobi",
  born: { y: 1878, place: "Toshkent" },
  died: { y: 1931, m: 4, d: 23, place: "Moskva" },
  photo: "img/munavvarqori.jpg", focus: "50% 30%",
  photoNote: "",
  summary: "Toshkent jadidlarining yetakchisi; yangi usul maktablari, milliy matbuot va teatrning asoschilaridan biri.",
  bio: [
    "Munavvar Qori Abdurashidxonov 1878-yilda Toshkentda ziyoli oilasida tugʻildi. Toshkent va Buxoro madrasalarida tahsil olib, Qurʼonni yod bilgani uchun «qori» unvonini oldi. Tatar va turk matbuotini kuzatib, Gasprinskiy gʻoyalari bilan tanishdi va Turkistonda taʼlimni isloh qilish zarurligiga ishonch hosil qildi.",
    "1901-yilda Toshkentda yangi usul maktabini ochdi; bu maktab keyinchalik butun Turkiston uchun namunaga aylandi. Oʻquvchilar uchun «Adibi avval» va «Adibi soniy» (1907) oʻqish kitoblarini, «Yer yuzi» geografiya darsligini yozdi. 1906-yilda «Xurshid» gazetasini chiqardi, «Jamiyati xayriya» orqali kambagʻal bolalarning oʻqishiga yordam berdi, yosh ziyolilarni Turkiya va Rossiyaga oʻqishga yubordi.",
    "1917-yilda «Shoʻroi Islomiya» tashkilotiga rahbarlik qildi, keyinchalik Turkiston xalq dorilfununi tashkilotchilaridan biri boʻldi. Sovet hokimiyati uni milliy harakat yetakchisi sifatida taʼqib qildi: 1929-yilda hibsga olinib, 1931-yil aprelida Moskvada otib tashlandi. Keyinchalik oqlandi; Toshkentdagi koʻcha va maktablar uning nomi bilan ataladi."
  ],
  timeline: [
    { y: 1878, t: "Toshkentda tugʻildi" },
    { y: 1901, t: "Toshkentda yangi usul maktabini ochdi" },
    { y: 1906, t: "«Xurshid» gazetasini chiqardi" },
    { y: 1907, t: "«Adibi avval» va «Adibi soniy» darsliklari" },
    { y: 1909, t: "«Jamiyati xayriya» faoliyati" },
    { y: 1917, t: "«Shoʻroi Islomiya» rahbari" },
    { y: 1929, t: "Hibsga olindi" },
    { y: 1931, t: "Moskvada otib tashlandi" }
  ],
  works: [
    { title: "Adibi avval", year: "1907", note: "Alifbe va oʻqish kitobi" },
    { title: "Adibi soniy", year: "1907", note: "Ikkinchi oʻqish kitobi" },
    { title: "Yer yuzi", year: "", note: "Geografiya darsligi" },
    { title: "Xurshid", year: "1906", note: "Gazeta" }
  ],
  quote: null,
  keyPoints: [
    "1901-yilda Toshkentda yangi usul maktabini ochgan",
    "«Adibi avval» va «Adibi soniy» darsliklari muallifi",
    "1931-yilda qatagʻon qurboni boʻlgan"
  ],
  related: ["behbudiy", "avloniy", "fitrat", "ibrat"]
},
{
  id: "ibrat",
  jadid: true,
  name: "Ishoqxon Ibrat",
  fullName: "Ishoqxon toʻra Junaydullaxoʻja oʻgʻli Ibrat",
  field: "marifat",
  role: "Maʼrifatparvar, tilshunos, tarixchi, shoir",
  born: { y: 1862, place: "Toʻraqoʻrgʻon, Namangan" },
  died: { y: 1937, place: "Andijon" },
  photo: "img/ibrat.jpg", focus: "50% 30%",
  photoNote: "",
  summary: "Fargʻona vodiysidagi birinchi bosmaxona asoschisi; olti tilli lugʻat va «Tarixi Fargʻona» muallifi.",
  bio: [
    "Ishoqxon Ibrat 1862-yilda Namangan yaqinidagi Toʻraqoʻrgʻonda tugʻildi. Qoʻqon madrasasida oʻqidi, arab, fors tillarini, keyinchalik rus tilini ham oʻrgandi. 1886-yilda ona qishlogʻida yangi usul maktabini ochdi — bu Turkistondagi ilk shunday maktablardan biri edi.",
    "1887–1896-yillarda Ibrat Makka, Madina, Istanbul, Qohira, Hindiston va boshqa yurtlarni kezib, turli xalqlarning yozuvi va tillarini oʻrgandi. Qaytgach, 1901-yilda arab, fors, hind, turkiy, sart (oʻzbek) va rus tillaridagi soʻzlarni qiyoslovchi «Lugʻati sitta alsina» (Olti tilli lugʻat) ni nashr ettirdi. 1908-yilda Toʻraqoʻrgʻonda «Matbaai Ishoqiya» toshbosma nashriyotini ochdi.",
    "Olim «Jomeʼ ul-xutut» (1912) asarida dunyo yozuvlari tarixini bayon qildi, «Tarixi Fargʻona» (1916) da vodiy tarixini yozdi, gʻazal va muxammaslardan iborat sheʼriy merosi ham bor. 1937-yilda keksa olim hibsga olinib, Andijon qamoqxonasida vafot etdi. Toʻraqoʻrgʻonda uning yodgorlik majmuasi va muzeyi ochilgan."
  ],
  timeline: [
    { y: 1862, t: "Toʻraqoʻrgʻonda tugʻildi" },
    { y: 1886, t: "Ona qishlogʻida yangi usul maktabini ochdi" },
    { y: 1887, t: "Makka, Istanbul, Hindiston boʻylab safar boshlandi" },
    { y: 1901, t: "«Lugʻati sitta alsina» nashr etildi" },
    { y: 1908, t: "«Matbaai Ishoqiya» bosmaxonasini ochdi" },
    { y: 1912, t: "«Jomeʼ ul-xutut»" },
    { y: 1916, t: "«Tarixi Fargʻona»" },
    { y: 1937, t: "Hibsga olindi, qamoqda vafot etdi" }
  ],
  works: [
    { title: "Lugʻati sitta alsina", year: "1901", note: "Olti tilli lugʻat" },
    { title: "Jomeʼ ul-xutut", year: "1912", note: "Yozuvlar tarixi" },
    { title: "Tarixi Fargʻona", year: "1916", note: "Fargʻona tarixi" },
    { title: "Matbaai Ishoqiya", year: "1908", note: "Toʻraqoʻrgʻondagi bosmaxona" },
    { title: "Devon", year: "", note: "Gʻazal va muxammaslar" }
  ],
  quote: null,
  keyPoints: [
    "Olti tilli lugʻat «Lugʻati sitta alsina» muallifi",
    "Fargʻona vodiysidagi birinchi bosmaxonani ochgan",
    "«Tarixi Fargʻona» asarini yozgan"
  ],
  related: ["munavvarqori", "behbudiy", "furqat"]
},
{
  id: "hamza",
  jadid: true,
  name: "Hamza Hakimzoda Niyoziy",
  fullName: "Hamza Hakimzoda Niyoziy",
  field: "adabiyot",
  role: "Shoir, dramaturg, bastakor, pedagog",
  born: { y: 1889, m: 3, d: 6, place: "Qoʻqon" },
  died: { y: 1929, m: 3, d: 18, place: "Shohimardon" },
  photo: "img/hamza.jpg", focus: "50% 30%",
  photoNote: "",
  summary: "Oʻzbek dramaturgiyasi va milliy qoʻshiqchiligining asoschilaridan; «Zaharli hayot», «Maysaraning ishi» asarlari muallifi.",
  bio: [
    "Hamza Hakimzoda Niyoziy 1889-yilda Qoʻqonda tabib oilasida tugʻildi. Eski maktab va madrasada oʻqidi, Namangan va Buxoroda tahsilni davom ettirdi. Jadidlar gʻoyalaridan ilhomlanib, 1911-yildan Qoʻqon va Margʻilonda kambagʻal bolalar uchun yangi usul maktablarini ochdi va ular uchun darsliklar yozdi.",
    "1915-yilda «Yangi saodat» romani, 1915–1917-yillarda «Milliy ashulalar uchun milliy sheʼrlar majmuasi» («Oq gul», «Pora gul», «Yashil gul» va boshqalar) nashr etildi; ularning koʻpchiligini oʻzi kuyga solgan. 1916-yilda yozilgan «Zaharli hayot» dramasi oʻzbek sahnasidagi ilk yirik fojialardan biri boʻldi. Keyinchalik «Boy ila xizmatchi» (1918) dramasi va «Maysaraning ishi» (1926) komediyasini yaratdi.",
    "Hamza 1920-yillarda sayyor teatr truppalari bilan ishladi, 1926-yilda birinchilardan boʻlib Oʻzbekiston xalq shoiri unvonini oldi. 1929-yil 18-martda Shohimardonda xotin-qizlarni paranjidan chiqarish targʻiboti paytida mutaassiblar tomonidan oʻldirildi. Sovet davrida uning nomi mafkuraviy maqsadlarda keng ishlatilgan boʻlsa-da, dramalari va qoʻshiqlari oʻzbek sanʼati tarixida muhim oʻrin tutadi."
  ],
  timeline: [
    { y: 1889, t: "Qoʻqonda tugʻildi" },
    { y: 1911, t: "Qoʻqonda yangi usul maktabini ochdi" },
    { y: 1915, t: "«Yangi saodat» romani va milliy sheʼrlar toʻplamlari" },
    { y: 1916, t: "«Zaharli hayot» dramasi" },
    { y: 1918, t: "«Boy ila xizmatchi» dramasi" },
    { y: 1926, t: "«Maysaraning ishi»; Oʻzbekiston xalq shoiri" },
    { y: 1929, t: "Shohimardonda oʻldirildi" }
  ],
  works: [
    { title: "Zaharli hayot", year: "1916", note: "Drama" },
    { title: "Boy ila xizmatchi", year: "1918", note: "Drama" },
    { title: "Maysaraning ishi", year: "1926", note: "Komediya" },
    { title: "Yangi saodat", year: "1915", note: "Roman" },
    { title: "Milliy ashulalar uchun milliy sheʼrlar majmuasi", year: "1915–1917", note: "Sheʼrlar va qoʻshiqlar" }
  ],
  quote: null,
  keyPoints: [
    "«Maysaraning ishi» komediyasi muallifi",
    "Qoʻqon va Margʻilonda yangi usul maktablarini ochgan",
    "1926-yilda Oʻzbekiston xalq shoiri boʻlgan"
  ],
  related: ["behbudiy", "muqimiy", "cholpon"]
},
{
  id: "ayniy",
  jadid: true,
  name: "Sadriddin Ayniy",
  fullName: "Sadriddin Saidmurodzoda Ayniy",
  field: "adabiyot",
  role: "Yozuvchi, olim, maʼrifatparvar",
  born: { y: 1878, m: 4, d: 15, place: "Soktare, Gʻijduvon" },
  died: { y: 1954, m: 7, d: 15, place: "Stalinobod (Dushanbe)" },
  photo: "img/ayniy.jpg", focus: "50% 25%",
  photoNote: "",
  summary: "Oʻzbek va tojik tillarida ijod qilgan yozuvchi; «Qullar», «Doxunda», «Esdaliklar» muallifi va Tojikiston Fanlar akademiyasining birinchi prezidenti.",
  bio: [
    "Sadriddin Ayniy 1878-yilda Buxoro amirligining Gʻijduvon tumanidagi Soktare qishlogʻida tugʻildi. Yoshligida ota-onasidan ayrilib, Buxoro madrasalarida qiyinchilik bilan tahsil oldi. 1900-yillarda jadidlar safiga qoʻshilib, Buxoroda yangi usul maktablari ochish va darsliklar yozish ishida qatnashdi.",
    "1917-yilda amir buyrugʻi bilan qamalib, 75 darra kaltaklandi; bu voqeadan soʻng Samarqandga koʻchib, umrining katta qismini shu yerda oʻtkazdi. «Buxoro jallodlari» (1920) qissasida amirlik zulmini fosh etdi. Oʻzbek va tojik tillarida birdek yozib, «Odina», «Doxunda» (1930), «Qullar» (1934), «Sudxoʻrning oʻlimi» (1939) kabi asarlarni yaratdi.",
    "Umrining oxirida yozgan «Esdaliklar» (1949–1954) Buxoro hayoti va jadidchilik tarixining bebaho manbasidir. Ayniy 1951-yilda Tojikiston Fanlar akademiyasining birinchi prezidenti etib saylandi va 1954-yilda Stalinobodda vafot etdi. Samarqanddagi uy-muzeyi uning xotirasini saqlaydi."
  ],
  timeline: [
    { y: 1878, t: "Soktare qishlogʻida tugʻildi" },
    { y: 1908, t: "Buxoroda yangi usul maktabida dars berdi (taxminan)" },
    { y: 1917, t: "Amir buyrugʻi bilan jazolandi; Samarqandga koʻchdi" },
    { y: 1920, t: "«Buxoro jallodlari»" },
    { y: 1930, t: "«Doxunda» romani" },
    { y: 1934, t: "«Qullar» romani" },
    { y: 1949, t: "«Esdaliklar» ustida ish boshladi" },
    { y: 1951, t: "Tojikiston Fanlar akademiyasi prezidenti" },
    { y: 1954, t: "Stalinobodda vafot etdi" }
  ],
  works: [
    { title: "Qullar", year: "1934", note: "Roman" },
    { title: "Doxunda", year: "1930", note: "Roman" },
    { title: "Esdaliklar", year: "1949–1954", note: "Xotiralar" },
    { title: "Buxoro jallodlari", year: "1920", note: "Qissa" },
    { title: "Sudxoʻrning oʻlimi", year: "1939", note: "Qissa" }
  ],
  quote: null,
  keyPoints: [
    "Oʻzbek va tojik tillarida ijod qilgan",
    "«Esdaliklar» — jadidchilik tarixining manbasi",
    "Tojikiston Fanlar akademiyasining birinchi prezidenti"
  ],
  related: ["fitrat", "behbudiy", "qodiriy"]
}

];
