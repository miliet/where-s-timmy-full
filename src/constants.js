//Language Resources
/*******************************/

var introductionImageEnglish="res/introduction.png";
var introductionSoundEnglish="res/introduction.wav";

var shareImageEnglish="res/share.png";

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
var imgEnglishPage10 = "res/page10.png";

var soundEnglishPage0= "";
var soundEnglishPage1= "res/page1.wav";
var soundEnglishPage2= "res/page2.wav";
var soundEnglishPage3= "res/page3.wav";
var soundEnglishPage4= "res/page4.wav";
var soundEnglishPage5= "res/page5.wav";
var soundEnglishPage6= "res/page6.wav";
var soundEnglishPage7= "res/page7.wav";
var soundEnglishPage8= "res/page8.wav";
var soundEnglishPage9= "res/page9.wav";
var soundEnglishPage10= "res/page10.wav";

//Normal Resources
/*******************************/
var soundSplash="res/splash.wav";
var splash= "res/splash.png";
var logo= "res/logo.png";
var frame= "res/frame.png";

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

var btnFacebookNormal= "res/btnFacebookNormal.png";
var btnFacebookSelected= "res/btnFacebookSelected.png";
var btnTwitterNormal= "res/btnTwitterNormal.png";
var btnTwitterSelected= "res/btnTwitterSelected.png";
var btnMailNormal= "res/btnMailNormal.png";
var btnMailSelected= "res/btnMailSelected.png";

var soundBtnStandard= "res/soundBtnStandard.wav";

var ttfArialRoundedMTBold= "res/ArialRoundedMTBold.ttf";
var svgArialRoundedMTBold= "res/ArialRoundedMTBold.svg";
var woffArialRoundedMTBold= "res/ArialRoundedMTBold.woff";
var eotArialRoundedMTBold= "res/ArialRoundedMTBold.eot";


//Global constants
/*******************************/

var pages=12;
var idEnglish=0;
var transitionTime=1.0;
var btnPaddingWidth=10;
var fntArialRoundedMTBoldStr="Arial Rounded MT Bold";
var fntSize=24;
var wordColors=new Array(cc.c3b(66,173,73),cc.c3b(236,0,140),cc.c3b(0,174,239),cc.c3b(255,203,5),cc.c3b(123,46,111),cc.c3b(37,64,143),cc.c3b(250,148,30),cc.c3b(210,35,42));
var highlightTime=0.5;
var highlightColor=cc.c3b(253, 185, 19);
var tickTime=1.0;
var btnFadeTime=0.1;

//Tags
/*****************/
menuSoundReplayTag=1;

//English
/*******************************/
var languageEnglish = new Array(pages);
languageEnglish [0]  = "";
languageEnglish [1]  = "";
languageEnglish [2]  = "Lucy is a girl that has a teddy bear\nwith lots of colours. Its name is Timmy!";
languageEnglish [3]  = "Lucy has breakfast with Timmy and\nat night she sleeps with him.";
languageEnglish [4]  = "Every day, when she comes home from school,\nshe goes to her bedroom to kiss Timmy.";
languageEnglish [5]  = "– Oh! Oh! Timmy is not here! – cries Lucy.\n– Mummy, Daddy, Timmy is not in the bedroom!\nWhere is he? What has happened to him?";
languageEnglish [6]  = "Her mother asks Lucy where she left\nTimmy this morning and Lucy, very sad, answers:\n – On my bed!";
languageEnglish [7]  = "– Hey, Lucy! – says her mother. – Let’s go\nand look for him! But I think you have to be tidier.";
languageEnglish [8]  = "When they go into the bedroom Timmy is not\non the bed and Lucy’s mother looks around the room.";
languageEnglish [9]  = "– Look! Here is Timmy, half hidden\nor half lost! What do you think, Lucy?";
languageEnglish [10]  = "– I love you Timmy – says Lucy.\nNow, every day, Lucy and Timmy take\nsome time to put away the toys.";

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
soundsEnglish [10]  = soundEnglishPage10;

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
imgsEnglish  [10]  = imgEnglishPage10;

var highlightsEnglish=new Array(pages);
highlightsEnglish [0]  = new Array();
highlightsEnglish [1]  = new Array();
//Lucy is a girl that has a teddy bear\nwith lots of colours. Its name is Timmy!
highlightsEnglish [2]  = new Array(0.200,0.665,0.790,0.928,1.210 ,1.330,1.505, 1.635,1.955,2.570,2.730,3.105,3.318,4.275,4.495,5.028,5.405);
//Lucy has breakfast with Timmy and\nat night she sleeps with him.
highlightsEnglish [3]  = new Array(0.470,1.040,1.31,1.730,1.935,2.655,2.935,3.100,3.595,4.045,4.280,4.420);
//Every day, when she comes home from school,\nshe goes to her bedroom to kiss Timmy
highlightsEnglish [4]  = new Array(0.225,0.550,0.810,0.930,1.125,1.400,1.655,1.765,2.485,2.710,3.039,3.080,3.390,3.965,4.215,4.720);
//– Oh! Oh! Timmy is not here! – cries Lucy.\n– Mummy, Daddy, Timmy is not in the bedroom!\nWhere is he? What has happened to him?
highlightsEnglish [5]  = new Array(0.0,0.290,0.480,1.100,1.290,1.550,1.900,0.0,2.250,2.570,0.0,3.580,4.015,4.575,4.785,5.030,5.310,5.390,5.530,6.480,6.700,7.030,7.725,7.790,8.015,8.310,8.370);
//Her mother asks Lucy where she left\nTimmy this morning and Lucy, very sad, answers:\n – On my bed!
highlightsEnglish [6]  = new Array(0.255,0.330,0.800,1.260,1.660,1.940,2.090,2.418,2.710,2.900,3.670,3.855,4.545,4.915,5.255,0.0,6.212,6.455,6.732);
//– Hey, Lucy! – says her mother. – Let’s go\nand look for him! But I think you have to be tidier.
highlightsEnglish [7]  = new Array(0.000,0.300,0.575,0.00,1.310,1.600,1.735,0.00,2.420,2.765,2.920,3.000,3.259,3.465,4.250,4.345,4.575,4.805,4.905,5.138,5.220,5.378);
//When they go into the bedroom Timmy is not\non the bed and Lucy’s mother looks around the room.
highlightsEnglish [8]  = new Array(0.455,0.565,0.793,0.893,1.180,1.327,2.019,2.230,2.530,2.920,3.000,3.175,3.915,4.065,4.495,4.760,5.105, 5.390,5.520);
//– Look! Here is Timmy, half hidden\nor half lost! What do you think, Lucy?
highlightsEnglish [9]  = new Array(0.0,0.280,1.150,1.490,1.678,2.650,2.945,3.765,4.155,4.360,5.420,5.712,5.810,6.105,6.355);
//– I love you Timmy – says Lucy.\nNow, every day, Lucy and Timmy take\nsome time to put away the toys.
highlightsEnglish [10]  = new Array(0.0, 0.2105,0.415,0.955,1.258,0.0,1.920,2.245,3.225,3.692,4.065,4.695,5.230,5.528,6.266,6.426,6.708,7.095,7.345,7.495,8.025,8.181);

var coloredWordsEnglish = new Array(pages);
coloredWordsEnglish [0]  = new Array();
coloredWordsEnglish [1]  = new Array();
coloredWordsEnglish [2]  = new Array(3,7,8);
coloredWordsEnglish [3]  = new Array(2,9);
coloredWordsEnglish [4]  = new Array(7,12);
coloredWordsEnglish [5]  = new Array(8,12);
coloredWordsEnglish [6]  = new Array(9,18);
coloredWordsEnglish [7]  = new Array(6,16);
coloredWordsEnglish [8]  = new Array(15,16);
coloredWordsEnglish [9]  = new Array(2,10);
coloredWordsEnglish [10]  = new Array(1,2,3,10,21);

/*******************************/
var languages = new Array(languageEnglish);
var sounds = new Array(soundsEnglish);
var images = new Array(imgsEnglish);
var highlights = new Array(highlightsEnglish);
var coloredWords= new Array(coloredWordsEnglish);
var introductionImages=new Array(introductionImageEnglish);
var introductionSounds=new Array(introductionSoundEnglish);
var shareImages=new Array(shareImageEnglish);