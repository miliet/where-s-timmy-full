/*For fix a bug*/
function isMobileFunc(){
    return (/iphone|ipod|android|blackberry/).test(navigator.userAgent.toLowerCase());
}
var isMobile = isMobileFunc();
var isFirstTime = true;

//Normal Resources
/*******************************/

var logo= "res/logo.png";

var btnHomeNormal= "res/btnHomeNormal.png";
var btnHomeSelected= "res/btnHomeSelected.png";
var btnForwardNormal= "res/btnForwardNormal.png";
var btnForwardSelected= "res/btnForwardSelected.png";
var btnBackwardNormal= "res/btnBackwardNormal.png";
var btnBackwardSelected= "res/btnBackwardSelected.png";

var btnSoundNormal= "res/btnSoundNormal.png";
var btnSoundSelected= "res/btnSoundSelected.png";
var btnSoundDisabledNormal= "res/btnSoundDisabledNormal.png";
var btnSoundDisabledSelected= "res/btnSoundDisabledSelected.png";

var btnSoundReplayNormal= "res/btnSoundReplayNormal.png";
var btnSoundReplaySelected= "res/btnSoundReplaySelected.png";

var btnArabeNormal = "res/btnArabeNormal.png";
var btnArabeSelected = "res/btnArabeSelected.png";
var btnBrasilNormal = "res/btnBrasilNormal.png";
var btnBrasilSelected = "res/btnBrasilSelected.png";
var btnEspanolNormal = "res/btnBrasilNormal.png";
var btnEspanolSelected = "res/btnBrasilSelected.png";
var btnFranceNormal = "res/btnFranceNormal.png";
var btnFranceSelected = "res/btnFranceSelected.png";
var btnHaitiNormal = "res/btnHaitiNormal.png";
var btnHaitiSelected = "res/btnHaitiSelected.png";
var btnInglishNormal = "res/btnBrasilNormal.png";
var btnInglishSelected = "res/btnInglishSelected.png";
var btnIslandesNormal = "res/btnIslandesNormal.png";
var btnIslandesSelected = "res/btnIslandesSelected.png";
var btnItalianNormal = "res/btnItalianNormal.png";
var btnItalianSelected = "res/btnItalianSelected.png";
var btnJaponNormal = "res/btnJaponNormal.png";
var btnJaponSelected = "res/btnJaponSelected.png";
var btnXinaNormal = "res/btnXinaNormal.png";
var btnXinaSelected= "res/btnXinaSelected.png";

var soundBtnStandard= "res/soundBtnStandard.wav";

var ttfArialRoundedMTBold= "res/ArialRoundedMTBold.ttf";
var svgArialRoundedMTBold= "res/ArialRoundedMTBold.svg";
var woffArialRoundedMTBold= "res/ArialRoundedMTBold.woff";
var eotArialRoundedMTBold= "res/ArialRoundedMTBold.eot";


//Global constants
/*******************************/

var pages=10;
var transitionTime=1.0;
var btnPaddingWidth=10;
var fntArialRoundedMTBoldStr="Arial Rounded MT Bold";
var fntSize=24;
var tickTime=1.0;
var btnFadeTime=0.1;
var idLanguageSelected=0;

//Tags
/*****************/

menuSoundReplayTag=1;

//English
/*******************************/

var idEnglish=0;

var imgEnglishPage0 = "res/page0.png";
var imgEnglishPage1 = "res/page1.png";
var imgEnglishPage2 = "res/page2.png";
var imgEnglishPage3 = "res/page3.png";
var imgEnglishPage4 = "res/page4.png";
var imgEnglishPage5 = "res/page5.png";
var imgEnglishPage6 = "res/page6.png";
var imgEnglishPage7 = "res/page7.png";
var imgEnglishPage8 = "res/page8.png";
var imgEnglishPage9 = "res/page9.png";

var soundEnglishPage0= "res/page0_enGB.wav";
var soundEnglishPage1= "res/page1_enGB.wav";
var soundEnglishPage2= "res/page2_enGB.wav";
var soundEnglishPage3= "res/page3_enGB.wav";
var soundEnglishPage4= "res/page4_enGB.wav";
var soundEnglishPage5= "res/page5_enGB.wav";
var soundEnglishPage6= "res/page6_enGB.wav";
var soundEnglishPage7= "res/page7_enGB.wav";
var soundEnglishPage8= "res/page8_enGB.wav";
var soundEnglishPage9= "res/page9_enGB.wav";

var languageEnglish = new Array(pages);
languageEnglish [0]  = "Where is Timmy?";
languageEnglish [1]  = "Lucy is a girl that has a teddy bear\nwith lots of colours. Its name is Timmy!";
languageEnglish [2]  = "Lucy has breakfast with Timmy and\nat night she sleeps with him.";
languageEnglish [3]  = "Every day, when she comes home from school,\nshe goes to her bedroom to kiss Timmy.";
languageEnglish [4]  = "– Oh! Oh! Timmy is not here! – cries Lucy.\n– Mummy, Daddy, Timmy is not in the bedroom!\nWhere is he? What has happened to him?";
languageEnglish [5]  = "Her mother asks Lucy where she left\nTimmy this morning and Lucy, very sad, answers:\n – On my bed!";
languageEnglish [6]  = "– Hey, Lucy! – says her mother. – Let’s go\nand look for him! But I think you have to be tidier.";
languageEnglish [7]  = "When they go into the bedroom Timmy is not\non the bed and Lucy’s mother looks around the room.";
languageEnglish [8]  = "– Look! Here is Timmy, half hidden\nor half lost! What do you think, Lucy?";
languageEnglish [9]  = "– I love you Timmy – says Lucy.\nNow, every day, Lucy and Timmy take\nsome time to put away the toys.";

var soundsEnglish = new Array(pages);
soundsEnglish  [0]  = soundEnglishPage0;
soundsEnglish [1]  = soundEnglishPage1;
soundsEnglish [2]  = soundEnglishPage2;
soundsEnglish [3]  = soundEnglishPage3;
soundsEnglish [4]  = soundEnglishPage4;
soundsEnglish [5]  = soundEnglishPage5;
soundsEnglish [6]  = soundEnglishPage6;
soundsEnglish [7]  = soundEnglishPage7;
soundsEnglish [8]  = soundEnglishPage8;
soundsEnglish [9]  = soundEnglishPage9;

var imgsEnglish = new Array(pages);
imgsEnglish  [0]  = imgEnglishPage0;
imgsEnglish  [1]  = imgEnglishPage1;
imgsEnglish  [2]  = imgEnglishPage2;
imgsEnglish  [3]  = imgEnglishPage3;
imgsEnglish  [4]  = imgEnglishPage4;
imgsEnglish  [5]  = imgEnglishPage5;
imgsEnglish  [6]  = imgEnglishPage6;
imgsEnglish  [7]  = imgEnglishPage7;
imgsEnglish  [8]  = imgEnglishPage8;
imgsEnglish  [9]  = imgEnglishPage9;

/*******************************/

//Spanish
/*******************************/

var idSpanish=1;

var imgSpanishPage0 = "res/page0.png";
var imgSpanishPage1 = "res/page1.png";
var imgSpanishPage2 = "res/page2.png";
var imgSpanishPage3 = "res/page3.png";
var imgSpanishPage4 = "res/page4.png";
var imgSpanishPage5 = "res/page5.png";
var imgSpanishPage6 = "res/page6.png";
var imgSpanishPage7 = "res/page7.png";
var imgSpanishPage8 = "res/page8.png";
var imgSpanishPage9 = "res/page9.png";

var soundSpanishPage0= "res/page0_esES.wav";
var soundSpanishPage1= "res/page1_esES.wav";
var soundSpanishPage2= "res/page2_esES.wav";
var soundSpanishPage3= "res/page3_esES.wav";
var soundSpanishPage4= "res/page4_esES.wav";
var soundSpanishPage5= "res/page5_esES.wav";
var soundSpanishPage6= "res/page6_esES.wav";
var soundSpanishPage7= "res/page7_esES.wav";
var soundSpanishPage8= "res/page8_esES.wav";
var soundSpanishPage9= "res/page9_esES.wav";

var languageSpanish = new Array(pages);
languageSpanish [0]  = "¿Dónde está Timy?";
languageSpanish [1]  = "Lucy es una niña que tiene un peluche de muchos colores. ¡Se llama Timy!";
languageSpanish [2]  = "Lucy desayuna con Timy y por la noche duerme con él.";
languageSpanish [3]  = "Cada día, al volver de la escuela, va a la habitación a dar un beso a Timy.";
languageSpanish [4]  = "- ¡Oh! ¡Oh! ¡Timy no está! – Lucy llora. - ¡Mami, papi, Timy no está en la habitación!\n¿Dónde está? ¿Qué le ha pasado?";
languageSpanish [5]  = "Su mamá pregunta a Lucy dónde ha dejado a Timy esta mañana y Lucy, muy triste, contesta:\n- ¡En mi cama!";
languageSpanish [6]  = "- ¡Ay, Lucy! – dice su mamá. - ¡Vamos a buscarlo! Pero pienso que debes ser más ordenada.";
languageSpanish [7]  = "Cuando llegan a la habitación Timy no está en la cama y mamá  lo busca por la habitación.";
languageSpanish [8]  = " ¡Mira! ¡Aquí tenemos a Timy, medio escondido o medio perdido! ¿Qué opinas, Lucy?";
languageSpanish [9]  = "- Te quiero Timy – dice Lucy. Ahora, cada día, Lucy y Timy dedican algunos minutos a ordenar los juguetes.";

var soundsSpanish = new Array(pages);
soundsSpanish  [0]  = soundSpanishPage0;
soundsSpanish [1]  = soundSpanishPage1;
soundsSpanish [2]  = soundSpanishPage2;
soundsSpanish [3]  = soundSpanishPage3;
soundsSpanish [4]  = soundSpanishPage4;
soundsSpanish [5]  = soundSpanishPage5;
soundsSpanish [6]  = soundSpanishPage6;
soundsSpanish [7]  = soundSpanishPage7;
soundsSpanish [8]  = soundSpanishPage8;
soundsSpanish [9]  = soundSpanishPage9;

var imgsSpanish = new Array(pages);
imgsSpanish  [0]  = imgSpanishPage0;
imgsSpanish  [1]  = imgSpanishPage1;
imgsSpanish  [2]  = imgSpanishPage2;
imgsSpanish  [3]  = imgSpanishPage3;
imgsSpanish  [4]  = imgSpanishPage4;
imgsSpanish  [5]  = imgSpanishPage5;
imgsSpanish  [6]  = imgSpanishPage6;
imgsSpanish  [7]  = imgSpanishPage7;
imgsSpanish  [8]  = imgSpanishPage8;
imgsSpanish  [9]  = imgSpanishPage9;

/*******************************/

//Catalan
/*******************************/

var idCatalan=2;

var imgCatalanPage0 = "res/page0.png";
var imgCatalanPage1 = "res/page1.png";
var imgCatalanPage2 = "res/page2.png";
var imgCatalanPage3 = "res/page3.png";
var imgCatalanPage4 = "res/page4.png";
var imgCatalanPage5 = "res/page5.png";
var imgCatalanPage6 = "res/page6.png";
var imgCatalanPage7 = "res/page7.png";
var imgCatalanPage8 = "res/page8.png";
var imgCatalanPage9 = "res/page9.png";

var soundCatalanPage0= "res/page0_esCA.wav";
var soundCatalanPage1= "res/page1_esCA.wav";
var soundCatalanPage2= "res/page2_esCA.wav";
var soundCatalanPage3= "res/page3_esCA.wav";
var soundCatalanPage4= "res/page4_esCA.wav";
var soundCatalanPage5= "res/page5_esCA.wav";
var soundCatalanPage6= "res/page6_esCA.wav";
var soundCatalanPage7= "res/page7_esCA.wav";
var soundCatalanPage8= "res/page8_esCA.wav";
var soundCatalanPage9= "res/page9_esCA.wav";

var languageCatalan = new Array(pages);
languageCatalan [0]  = "ON ÉS EL TIMY?";
languageCatalan [1]  = "La Lucy és una nena que té un peluix de molts colors. Es diu Timy!";
languageCatalan [2]  = "La Lucy esmorza amb el Timy i a la nit dorm amb ell.";
languageCatalan [3]  = "Cada dia, en tornar de l’escola, va a l’habitació a fer un petó al Timy.";
languageCatalan [4]  = "– Oh! Oh! El Timy no hi és! – plora la Lucy.  – Mami, papi, el Timy no està a l’habitació! On està? Què li passa?";
languageCatalan [5]  = "La seva mare pregunta a la Lucy on ha deixat el Timy aquest matí i la Lucy, molt trista, contesta:  – Al llit!";
languageCatalan [6]  = "– Ai, Lucy! – diu la seva mare. – Anem a buscar-lo! Però penso que has de ser més ordenada.";
languageCatalan [7]  = "Quan arriben a l’habitació el Timy no està al llit i la mare el busca per l’habitació.";
languageCatalan [8]  = "- Mira! Aquí tenim el Timy, mig amagat o mig perdut! Què n’opines, Lucy?";
languageCatalan [9]  = "– T’estimo Timy – diu la Lucy. Ara, cada dia, la Lucy i el Timy dediquen alguns minuts a endreçar les joguines.";

var soundsCatalan = new Array(pages);
soundsCatalan  [0]  = soundCatalanPage0;
soundsCatalan [1]  = soundCatalanPage1;
soundsCatalan [2]  = soundCatalanPage2;
soundsCatalan [3]  = soundCatalanPage3;
soundsCatalan [4]  = soundCatalanPage4;
soundsCatalan [5]  = soundCatalanPage5;
soundsCatalan [6]  = soundCatalanPage6;
soundsCatalan [7]  = soundCatalanPage7;
soundsCatalan [8]  = soundCatalanPage8;
soundsCatalan [9]  = soundCatalanPage9;

var imgsCatalan = new Array(pages);
imgsCatalan  [0]  = imgCatalanPage0;
imgsCatalan  [1]  = imgCatalanPage1;
imgsCatalan  [2]  = imgCatalanPage2;
imgsCatalan  [3]  = imgCatalanPage3;
imgsCatalan  [4]  = imgCatalanPage4;
imgsCatalan  [5]  = imgCatalanPage5;
imgsCatalan  [6]  = imgCatalanPage6;
imgsCatalan  [7]  = imgCatalanPage7;
imgsCatalan  [8]  = imgCatalanPage8;
imgsCatalan  [9]  = imgCatalanPage9;

/*******************************/

//German
/*******************************/

var idGerman=3;

var imgGermanPage0 = "res/page0.png";
var imgGermanPage1 = "res/page1.png";
var imgGermanPage2 = "res/page2.png";
var imgGermanPage3 = "res/page3.png";
var imgGermanPage4 = "res/page4.png";
var imgGermanPage5 = "res/page5.png";
var imgGermanPage6 = "res/page6.png";
var imgGermanPage7 = "res/page7.png";
var imgGermanPage8 = "res/page8.png";
var imgGermanPage9 = "res/page9.png";

var soundGermanPage0= "res/page0_deDE.wav";
var soundGermanPage1= "res/page1_deDE.wav";
var soundGermanPage2= "res/page2_deDE.wav";
var soundGermanPage3= "res/page3_deDE.wav";
var soundGermanPage4= "res/page4_deDE.wav";
var soundGermanPage5= "res/page5_deDE.wav";
var soundGermanPage6= "res/page6_deDE.wav";
var soundGermanPage7= "res/page7_deDE.wav";
var soundGermanPage8= "res/page8_deDE.wav";
var soundGermanPage9= "res/page9_deDE.wav";

var languageGerman = new Array(pages);
languageGerman [0]  = "Wo ist Timmy?";
languageGerman [1]  = "Lucy ist ein Mädchen, das ein buntes Plüschtier hat. Es heißt Timmy! ";
languageGerman [2]  = "Lucy frühstückt mit Timmy und nachts schläft sie mit ihm.";
languageGerman [3]  = "Jeden Tag, wenn sie aus der Schule zurück ist, geht sie in ihr Zimmer und gibt Timmy einen Kuss.";
languageGerman [4]  = "„Oh! Oh! Timmy ist nicht da!“ Lucy weint. „Mami, Papi, Timmy ist nicht im Zimmer! Wo ist er? Was ist mit ihm passiert?“  ";
languageGerman [5]  = "Ihre Mutter fragt Lucy, wo sie Timmy heute Morgen gelassen hat und Lucy antwortet sehr traurig: „In meinem Bett!“";
languageGerman [6]  = "„Ach, Lucy!“, sagt ihre Mama. „Lass uns nach ihm suchen! Aber ich denke, dass du ordentlicher sein solltest.“ ";
languageGerman [7]  = "Als sie in das Zimmer kommen, ist Timmy nicht im Bett und Mama sucht ihn im Zimmer.";
languageGerman [8]  = "„Schau! Hier ist Timmy ja, halb versteckt oder halb verloren! Was meinst du, Lucy?“";
languageGerman [9]  = "„Ich hab dich lieb, Timmy“, sagt Lucy. Von nun an räumen Lucy und Timmy jeden Tag ein paar Minuten die Spielzeuge auf.";

var soundsGerman = new Array(pages);
soundsGerman  [0]  = soundGermanPage0;
soundsGerman [1]  = soundGermanPage1;
soundsGerman [2]  = soundGermanPage2;
soundsGerman [3]  = soundGermanPage3;
soundsGerman [4]  = soundGermanPage4;
soundsGerman [5]  = soundGermanPage5;
soundsGerman [6]  = soundGermanPage6;
soundsGerman [7]  = soundGermanPage7;
soundsGerman [8]  = soundGermanPage8;
soundsGerman [9]  = soundGermanPage9;

var imgsGerman = new Array(pages);
imgsGerman  [0]  = imgGermanPage0;
imgsGerman  [1]  = imgGermanPage1;
imgsGerman  [2]  = imgGermanPage2;
imgsGerman  [3]  = imgGermanPage3;
imgsGerman  [4]  = imgGermanPage4;
imgsGerman  [5]  = imgGermanPage5;
imgsGerman  [6]  = imgGermanPage6;
imgsGerman  [7]  = imgGermanPage7;
imgsGerman  [8]  = imgGermanPage8;
imgsGerman  [9]  = imgGermanPage9;

/*******************************/

//Arabic
/*******************************/

var idArabic=4;

var imgArabicPage0 = "res/page0.png";
var imgArabicPage1 = "res/page1.png";
var imgArabicPage2 = "res/page2.png";
var imgArabicPage3 = "res/page3.png";
var imgArabicPage4 = "res/page4.png";
var imgArabicPage5 = "res/page5.png";
var imgArabicPage6 = "res/page6.png";
var imgArabicPage7 = "res/page7.png";
var imgArabicPage8 = "res/page8.png";
var imgArabicPage9 = "res/page9.png";

var soundArabicPage0= "res/page0_arEG.wav";
var soundArabicPage1= "res/page1_arEG.wav";
var soundArabicPage2= "res/page2_arEG.wav";
var soundArabicPage3= "res/page3_arEG.wav";
var soundArabicPage4= "res/page4_arEG.wav";
var soundArabicPage5= "res/page5_arEG.wav";
var soundArabicPage6= "res/page6_arEG.wav";
var soundArabicPage7= "res/page7_arEG.wav";
var soundArabicPage8= "res/page8_arEG.wav";
var soundArabicPage9= "res/page9_arEG.wav";

var languageArabic = new Array(pages);
languageArabic [0]  = "";
languageArabic [1]  = "";
languageArabic [2]  = "";
languageArabic [3]  = "";
languageArabic [4]  = "";
languageArabic [5]  = "";
languageArabic [6]  = "";
languageArabic [7]  = "";
languageArabic [8]  = "";
languageArabic [9]  = "";
languageArabic [10]  = "";

var soundsArabic = new Array(pages);
soundsArabic  [0]  = soundArabicPage0;
soundsArabic [1]  = soundArabicPage1;
soundsArabic [2]  = soundArabicPage2;
soundsArabic [3]  = soundArabicPage3;
soundsArabic [4]  = soundArabicPage4;
soundsArabic [5]  = soundArabicPage5;
soundsArabic [6]  = soundArabicPage6;
soundsArabic [7]  = soundArabicPage7;
soundsArabic [8]  = soundArabicPage8;
soundsArabic [9]  = soundArabicPage9;

var imgsArabic = new Array(pages);
imgsArabic  [0]  = imgArabicPage0;
imgsArabic  [1]  = imgArabicPage1;
imgsArabic  [2]  = imgArabicPage2;
imgsArabic  [3]  = imgArabicPage3;
imgsArabic  [4]  = imgArabicPage4;
imgsArabic  [5]  = imgArabicPage5;
imgsArabic  [6]  = imgArabicPage6;
imgsArabic  [7]  = imgArabicPage7;
imgsArabic  [8]  = imgArabicPage8;
imgsArabic  [9]  = imgArabicPage9;

/*******************************/

//Brazilian
/*******************************/
var idBrazilian=5;

var imgBrazilianPage0 = "res/page0.png";
var imgBrazilianPage1 = "res/page1.png";
var imgBrazilianPage2 = "res/page2.png";
var imgBrazilianPage3 = "res/page3.png";
var imgBrazilianPage4 = "res/page4.png";
var imgBrazilianPage5 = "res/page5.png";
var imgBrazilianPage6 = "res/page6.png";
var imgBrazilianPage7 = "res/page7.png";
var imgBrazilianPage8 = "res/page8.png";
var imgBrazilianPage9 = "res/page9.png";

var soundBrazilianPage0= "res/page0_ptBR.wav";
var soundBrazilianPage1= "res/page1_ptBR.wav";
var soundBrazilianPage2= "res/page2_ptBR.wav";
var soundBrazilianPage3= "res/page3_ptBR.wav";
var soundBrazilianPage4= "res/page4_ptBR.wav";
var soundBrazilianPage5= "res/page5_ptBR.wav";
var soundBrazilianPage6= "res/page6_ptBR.wav";
var soundBrazilianPage7= "res/page7_ptBR.wav";
var soundBrazilianPage8= "res/page8_ptBR.wav";
var soundBrazilianPage9= "res/page9_ptBR.wav";

var languageBrazilian = new Array(pages);
languageBrazilian [0]  = "Onde está Timy?";
languageBrazilian [1]  = "Lucy é uma menina que tem um boneco de pelúcia de muitas cores. Seu nome é Timy!";
languageBrazilian [2]  = "Lucy toma o café da manhã com Timy e pela noite dorme com ele.";
languageBrazilian [3]  = "Cada dia, ao voltar da escola, vai ao quarto para dar um beijo no Timy.";
languageBrazilian [4]  = "- Oh! Oh! ¡Timy não está! – Lucy chora. - Mamãe, papai, o Timy não está no quarto! Cadê ele? O que aconteceu com ele?";
languageBrazilian [5]  = "A sua mãe pergunta a Lucy onde ela deixou o Timy essa manhã e Lucy, muito triste, responde: - Na minha cama!";
languageBrazilian [6]  = " Ah, Lucy! – diz a sua mãe. - Vamos procurá-lo! Mas acho que você deve ser mais organizada.";
languageBrazilian [7]  = "Quando chegam ao quarto Timy não está na cama e a mãe o procura pelo quarto.";
languageBrazilian [8]  = "- Olha! Aqui temos a Timy, meio escondido ou meio perdido! O quê você acha, Lucy?";
languageBrazilian [9]  = "Te amo Timy – diz Lucy. Agora, cada dia, Lucy e Timy dedicam alguns minutos a arrumar os brinquedos.";

var soundsBrazilian = new Array(pages);
soundsBrazilian  [0]  = soundBrazilianPage0;
soundsBrazilian [1]  = soundBrazilianPage1;
soundsBrazilian [2]  = soundBrazilianPage2;
soundsBrazilian [3]  = soundBrazilianPage3;
soundsBrazilian [4]  = soundBrazilianPage4;
soundsBrazilian [5]  = soundBrazilianPage5;
soundsBrazilian [6]  = soundBrazilianPage6;
soundsBrazilian [7]  = soundBrazilianPage7;
soundsBrazilian [8]  = soundBrazilianPage8;
soundsBrazilian [9]  = soundBrazilianPage9;

var imgsBrazilian = new Array(pages);
imgsBrazilian  [0]  = imgBrazilianPage0;
imgsBrazilian  [1]  = imgBrazilianPage1;
imgsBrazilian  [2]  = imgBrazilianPage2;
imgsBrazilian  [3]  = imgBrazilianPage3;
imgsBrazilian  [4]  = imgBrazilianPage4;
imgsBrazilian  [5]  = imgBrazilianPage5;
imgsBrazilian  [6]  = imgBrazilianPage6;
imgsBrazilian  [7]  = imgBrazilianPage7;
imgsBrazilian  [8]  = imgBrazilianPage8;
imgsBrazilian  [9]  = imgBrazilianPage9;

/*******************************/

//French
/*******************************/

var idFrench=6;

var imgFrenchPage0 = "res/page0.png";
var imgFrenchPage1 = "res/page1.png";
var imgFrenchPage2 = "res/page2.png";
var imgFrenchPage3 = "res/page3.png";
var imgFrenchPage4 = "res/page4.png";
var imgFrenchPage5 = "res/page5.png";
var imgFrenchPage6 = "res/page6.png";
var imgFrenchPage7 = "res/page7.png";
var imgFrenchPage8 = "res/page8.png";
var imgFrenchPage9 = "res/page9.png";

var soundFrenchPage0= "res/page0_frFR.wav";
var soundFrenchPage1= "res/page1_frFR.wav";
var soundFrenchPage2= "res/page2_frFR.wav";
var soundFrenchPage3= "res/page3_frFR.wav";
var soundFrenchPage4= "res/page4_frFR.wav";
var soundFrenchPage5= "res/page5_frFR.wav";
var soundFrenchPage6= "res/page6_frFR.wav";
var soundFrenchPage7= "res/page7_frFR.wav";
var soundFrenchPage8= "res/page8_frFR.wav";
var soundFrenchPage9= "res/page9_frFR.wav";

var languageFrench = new Array(pages);
languageFrench [0]  = "¿Où est Timy?";
languageFrench [1]  = "Lucy est une fille qui a une peluche de plusieurs couleurs. ¡Elle s´appelle Timy!";
languageFrench [2]  = "Lucy prend le petit déjeuner avec Timy et dort avec elle la nuit.";
languageFrench [3]  = "Chaque jour, au retour de l´école, va à la chambre pour donner un bisou à Timy.";
languageFrench [4]  = "- ¡Oh! ¡Oh! ¡Timy n´est pas là! – Lucy pleure. - ¡Mamie, papi, Timy n´est pas dans la chambre! ¿Où est elle? ¿Qu´est ce qu´il lui est arrivé?";
languageFrench [5]  = "Sa maman demande à Lucy où elle a laissé Timy ce matin et Lucy, très triste, répond: - ¡Dans mon lit!";
languageFrench [6]  = "- ¡Aïe, Lucy! – dit sa maman. - ¡Allons la chercher! Mais je pense que tu dois être plus ordonnée.";
languageFrench [7]  = "Quand elles arrivent à la chambre Timy n´est pas dans le lit et maman la cherche dans la chambre.";
languageFrench [8]  = "¡Regarde! ¡Voici Timy, moitié cachée ou moitié perdue! ¿Que penses-tu, Lucy?";
languageFrench [9]  = "- Je t´aime Timy – dit Lucy. Maintenant, chaque jour, Lucy et Timy consacrent quelques minutes à ranger les jouets.";

var soundsFrench = new Array(pages);
soundsFrench  [0]  = soundFrenchPage0;
soundsFrench [1]  = soundFrenchPage1;
soundsFrench [2]  = soundFrenchPage2;
soundsFrench [3]  = soundFrenchPage3;
soundsFrench [4]  = soundFrenchPage4;
soundsFrench [5]  = soundFrenchPage5;
soundsFrench [6]  = soundFrenchPage6;
soundsFrench [7]  = soundFrenchPage7;
soundsFrench [8]  = soundFrenchPage8;
soundsFrench [9]  = soundFrenchPage9;

var imgsFrench = new Array(pages);
imgsFrench  [0]  = imgFrenchPage0;
imgsFrench  [1]  = imgFrenchPage1;
imgsFrench  [2]  = imgFrenchPage2;
imgsFrench  [3]  = imgFrenchPage3;
imgsFrench  [4]  = imgFrenchPage4;
imgsFrench  [5]  = imgFrenchPage5;
imgsFrench  [6]  = imgFrenchPage6;
imgsFrench  [7]  = imgFrenchPage7;
imgsFrench  [8]  = imgFrenchPage8;
imgsFrench  [9]  = imgFrenchPage9;

/*******************************/

//Italian
/*******************************/

var idItalian=7;

var imgItalianPage0 = "res/page0.png";
var imgItalianPage1 = "res/page1.png";
var imgItalianPage2 = "res/page2.png";
var imgItalianPage3 = "res/page3.png";
var imgItalianPage4 = "res/page4.png";
var imgItalianPage5 = "res/page5.png";
var imgItalianPage6 = "res/page6.png";
var imgItalianPage7 = "res/page7.png";
var imgItalianPage8 = "res/page8.png";
var imgItalianPage9 = "res/page9.png";

var soundItalianPage0= "res/page0_itIT.wav";
var soundItalianPage1= "res/page1_itIT.wav";
var soundItalianPage2= "res/page2_itIT.wav";
var soundItalianPage3= "res/page3_itIT.wav";
var soundItalianPage4= "res/page4_itIT.wav";
var soundItalianPage5= "res/page5_itIT.wav";
var soundItalianPage6= "res/page6_itIT.wav";
var soundItalianPage7= "res/page7_itIT.wav";
var soundItalianPage8= "res/page8_itIT.wav";
var soundItalianPage9= "res/page9_itIT.wav";

var languageItalian = new Array(pages);
languageItalian [0]  = "Dov’è Timy?";
languageItalian [1]  = "Lucy è una bambina che ha un peluche di molti colori. Si chiama Timy!";
languageItalian [2]  = "Lucy fa colazione con Timy e di notte dorme con lui.";
languageItalian [3]  = "Tutti i giorni, tornando da scuola, va in camera sua a dare un bacio a Timy.";
languageItalian [4]  = "- Oh! Oh! Timy non c’è! – Lucy piange. - Mamma, papà, Timy non è in camera! Dov’è? Cosa gli è successo?";
languageItalian [5]  = "La mamma chiede a Lucy dove ha lasciato Timy questa mattina e Lucy, molto triste, risponde: - Sul mio letto!";
languageItalian [6]  = "- Ah, Lucy! – dice la mamma. - Andiamo a cercarlo! Ma penso che dovresti essere più ordinata.";
languageItalian [7]  = "Quando arrivano in camera, Timy non è sul letto e la mamma lo cerca per tutta la camera.";
languageItalian [8]  = "Guarda! Ecco qui Timy, un po’ nascosto e un po’ smarrito! Che cosa pensi, Lucy?";
languageItalian [9]  = "- Ti voglio bene, Timy – dice Lucy. Da oggi, tutti i giorni, Lucy e Timy dedicano qualche minuto a riordinare i giochi.";

var soundsItalian = new Array(pages);
soundsItalian  [0]  = soundItalianPage0;
soundsItalian [1]  = soundItalianPage1;
soundsItalian [2]  = soundItalianPage2;
soundsItalian [3]  = soundItalianPage3;
soundsItalian [4]  = soundItalianPage4;
soundsItalian [5]  = soundItalianPage5;
soundsItalian [6]  = soundItalianPage6;
soundsItalian [7]  = soundItalianPage7;
soundsItalian [8]  = soundItalianPage8;
soundsItalian [9]  = soundItalianPage9;

var imgsItalian = new Array(pages);
imgsItalian  [0]  = imgItalianPage0;
imgsItalian  [1]  = imgItalianPage1;
imgsItalian  [2]  = imgItalianPage2;
imgsItalian  [3]  = imgItalianPage3;
imgsItalian  [4]  = imgItalianPage4;
imgsItalian  [5]  = imgItalianPage5;
imgsItalian  [6]  = imgItalianPage6;
imgsItalian  [7]  = imgItalianPage7;
imgsItalian  [8]  = imgItalianPage8;
imgsItalian  [9]  = imgItalianPage9;

/*******************************/

//Japanese
/*******************************/

var idJapanese=8;

var imgJapanesePage0 = "res/page0.png";
var imgJapanesePage1 = "res/page1.png";
var imgJapanesePage2 = "res/page2.png";
var imgJapanesePage3 = "res/page3.png";
var imgJapanesePage4 = "res/page4.png";
var imgJapanesePage5 = "res/page5.png";
var imgJapanesePage6 = "res/page6.png";
var imgJapanesePage7 = "res/page7.png";
var imgJapanesePage8 = "res/page8.png";
var imgJapanesePage9 = "res/page9.png";

var soundJapanesePage0= "res/page0_jaJP.wav";
var soundJapanesePage1= "res/page1_jaJP.wav";
var soundJapanesePage2= "res/page2_jaJP.wav";
var soundJapanesePage3= "res/page3_jaJP.wav";
var soundJapanesePage4= "res/page4_jaJP.wav";
var soundJapanesePage5= "res/page5_jaJP.wav";
var soundJapanesePage6= "res/page6_jaJP.wav";
var soundJapanesePage7= "res/page7_jaJP.wav";
var soundJapanesePage8= "res/page8_jaJP.wav";
var soundJapanesePage9= "res/page9_jaJP.wav";

var languageJapanese = new Array(pages);
languageJapanese [0]  = "ティミーはどこにいる？";
languageJapanese [1]  = "ルーシーはいろいろないろをしたぬいぐるみをもっているおんなのこです。ぬいぐるみのなまえはティミーです。";
languageJapanese [2]  = "ルーシーはティミーといっしょにあさごはんをたべ、よるはいっしょにねます。";
languageJapanese [3]  = "「えー！！ティミーがいないの！！」と、ルーシーはないています。";
languageJapanese [4]  = "「おかあさん、おとうさん、ティミーがへやにいないの！どこにいるの？どうしちゃったの？」";
languageJapanese [5]  = "「けさどこにティミーをおいていったの？」とおかあさんがルーシーにきくと、ルーシーがかなしそうにこたえます。「わたしのベッドのうえよ！」";
languageJapanese [6]  = "「じゃあ、ルーシー、いっしょにさがしてみましょう！でも、あなたはもっとおかたづけをしなければいけないわね。」";
languageJapanese [7]  = "へやにいってもティミーはベッドにいないので、おかあさんはへやじゅうをさがしてみます。";
languageJapanese [8]  = "「ほら、ここにティミーがいるわよ、はんぶんだけかくれているわ、それともはんぶんだけまいごになっているのかしら！ルーシー、どうおもう？」";
languageJapanese [9]  = "「ティミー、だいすきよ。」とルーシーがいいます。これからまいにち、ほんのすこしのあいだルーシーとティミーはおもちゃをかたづけることにします。";

var soundsJapanese = new Array(pages);
soundsJapanese  [0]  = soundJapanesePage0;
soundsJapanese [1]  = soundJapanesePage1;
soundsJapanese [2]  = soundJapanesePage2;
soundsJapanese [3]  = soundJapanesePage3;
soundsJapanese [4]  = soundJapanesePage4;
soundsJapanese [5]  = soundJapanesePage5;
soundsJapanese [6]  = soundJapanesePage6;
soundsJapanese [7]  = soundJapanesePage7;
soundsJapanese [8]  = soundJapanesePage8;
soundsJapanese [9]  = soundJapanesePage9;

var imgsJapanese = new Array(pages);
imgsJapanese  [0]  = imgJapanesePage0;
imgsJapanese  [1]  = imgJapanesePage1;
imgsJapanese  [2]  = imgJapanesePage2;
imgsJapanese  [3]  = imgJapanesePage3;
imgsJapanese  [4]  = imgJapanesePage4;
imgsJapanese  [5]  = imgJapanesePage5;
imgsJapanese  [6]  = imgJapanesePage6;
imgsJapanese  [7]  = imgJapanesePage7;
imgsJapanese  [8]  = imgJapanesePage8;
imgsJapanese  [9]  = imgJapanesePage9;

/*******************************/

//Chinese
/*******************************/

var idChinese=9;

var imgChinesePage0 = "res/page0.png";
var imgChinesePage1 = "res/page1.png";
var imgChinesePage2 = "res/page2.png";
var imgChinesePage3 = "res/page3.png";
var imgChinesePage4 = "res/page4.png";
var imgChinesePage5 = "res/page5.png";
var imgChinesePage6 = "res/page6.png";
var imgChinesePage7 = "res/page7.png";
var imgChinesePage8 = "res/page8.png";
var imgChinesePage9 = "res/page9.png";

var soundChinesePage0= "res/page0_zhCN.wav";
var soundChinesePage1= "res/page1_zhCN.wav";
var soundChinesePage2= "res/page2_zhCN.wav";
var soundChinesePage3= "res/page3_zhCN.wav";
var soundChinesePage4= "res/page4_zhCN.wav";
var soundChinesePage5= "res/page5_zhCN.wav";
var soundChinesePage6= "res/page6_zhCN.wav";
var soundChinesePage7= "res/page7_zhCN.wav";
var soundChinesePage8= "res/page8_zhCN.wav";
var soundChinesePage9= "res/page9_zhCN.wav";

var languageChinese = new Array(pages);
languageChinese [0]  = "提米在哪儿？";
languageChinese [1]  = "露西是一个可爱的小姑娘，她有一支绒毛玩具熊，颜色鲜艳。它叫提米！";
languageChinese [2]  = "露西每天和提米一起吃早饭，晚上和它一起上床去睡觉。";
languageChinese [3]  = "露西每天从学校回来的第一件事，就是回房间亲吻一下提米。";
languageChinese [4]  = "-噢！噢！提米不在！---露西开始哭起来。-妈妈、爸爸，提米不在房间里！它在哪儿？它怎么了？";
languageChinese [5]  = "妈妈问露西早上把提米放在了什么地方，露西非常伤心地回答说：“放在了我的床上！”";
languageChinese [6]  = "-“哎，露西！”妈妈说。“我们去找找看！我觉得你应该整理一下你的房间了”。";
languageChinese [7]  = "她们走进房间的时候，提米不在床上，妈妈在房间里找了找。";
languageChinese [8]  = "-“你看，提米在这儿，身体的一半藏了起来、一半露了出来！你觉得怎么样，露西？”";
languageChinese [9]  = "-“我爱你提米”，露西说。现在每天露西和提米都会花几分钟的时间来整理一下玩具。";

var soundsChinese = new Array(pages);
soundsChinese  [0]  = soundChinesePage0;
soundsChinese [1]  = soundChinesePage1;
soundsChinese [2]  = soundChinesePage2;
soundsChinese [3]  = soundChinesePage3;
soundsChinese [4]  = soundChinesePage4;
soundsChinese [5]  = soundChinesePage5;
soundsChinese [6]  = soundChinesePage6;
soundsChinese [7]  = soundChinesePage7;
soundsChinese [8]  = soundChinesePage8;
soundsChinese [9]  = soundChinesePage9;

var imgsChinese = new Array(pages);
imgsChinese  [0]  = imgChinesePage0;
imgsChinese  [1]  = imgChinesePage1;
imgsChinese  [2]  = imgChinesePage2;
imgsChinese  [3]  = imgChinesePage3;
imgsChinese  [4]  = imgChinesePage4;
imgsChinese  [5]  = imgChinesePage5;
imgsChinese  [6]  = imgChinesePage6;
imgsChinese  [7]  = imgChinesePage7;
imgsChinese  [8]  = imgChinesePage8;
imgsChinese  [9]  = imgChinesePage9;

/*******************************/

var languages = new Array(languageEnglish,languageCatalan,languageSpanish,languageGerman,languageArabic,languageBrazilian,languageFrench,languageItalian,languageJapanese,languageChinese);
var sounds = new Array(soundsEnglish,soundsCatalan,soundsSpanish,soundsGerman,soundsArabic,soundsBrazilian,soundsFrench,soundsItalian,soundsJapanese,soundsChinese);
var images = new Array(imgsEnglish,imgsCatalan,imgsSpanish,imgsGerman,imgsArabic,imgsBrazilian,imgsFrench,imgsItalian,imgsJapanese,imgsChinese);

//Load Resources Control
/*******************************/

idLanguageSelected = idEnglish;

var imgSelectedPage0 = images[idLanguageSelected][0];
var imgSelectedPage1 = images[idLanguageSelected][1];
var imgSelectedPage2 = images[idLanguageSelected][2];
var imgSelectedPage3 = images[idLanguageSelected][3];
var imgSelectedPage4 = images[idLanguageSelected][4];
var imgSelectedPage5 = images[idLanguageSelected][5];
var imgSelectedPage6 = images[idLanguageSelected][6];
var imgSelectedPage7 = images[idLanguageSelected][7];
var imgSelectedPage8 = images[idLanguageSelected][8];
var imgSelectedPage9 = images[idLanguageSelected][9];

var soundSelectedPage0= sounds[idLanguageSelected][0];
var soundSelectedPage1= sounds[idLanguageSelected][1];
var soundSelectedPage2= sounds[idLanguageSelected][2];
var soundSelectedPage3= sounds[idLanguageSelected][3];
var soundSelectedPage4= sounds[idLanguageSelected][4];
var soundSelectedPage5= sounds[idLanguageSelected][5];
var soundSelectedPage6= sounds[idLanguageSelected][6];
var soundSelectedPage7= sounds[idLanguageSelected][7];
var soundSelectedPage8= sounds[idLanguageSelected][8];
var soundSelectedPage9= sounds[idLanguageSelected][9];
