var currentPage = 0;
var btnWidth=0;
var imgHeight=0;
var soundStatus=true;


var imageLayer = cc.Layer.extend({
    owner:null,

    init:function (scene) {

        this._super();
        this.owner=scene;

        var size = cc.Director.getInstance().getWinSize();

        var backgroundSprite=cc.Sprite.create(images[this.owner.getCurrentIdLanguage()][currentPage]);
        backgroundSprite.setPosition(cc.p(size.width / 2, size.height / 2));
        imgHeight=backgroundSprite.getContentSize().height;
        this.addChild(backgroundSprite, 0);

        return true;
    }
});

var textLayer = cc.Layer.extend({
    owner:null,
    labels:null,

    init:function (scene) {

        this._super();
        this.owner=scene;
        this.labels = new Array();
        if(languages[this.owner.getCurrentIdLanguage()][currentPage]!="") this.textPrint(languages[this.owner.getCurrentIdLanguage()][currentPage]);

        this.schedule(this.playWithDelay, transitionTime);
        return true;
    },playWithDelay:function(dt){
        this.owner.controllersL.playSoundLogistic();
        this.unschedule(this.playWithDelay);
    },textPrint:function(text) {

        var size = cc.Director.getInstance().getWinSize();
        var maxWidth=size.width-((btnWidth*2)+(btnPaddingWidth*4));
        var maxHeight=(size.height-imgHeight)/2;
        var wordsAux = text.split(" ");
        var words = new Array();
        var i, j, m,mm, k, x,y;
        var lines = new Array();
        var lineWidth=0;
        var line = new Array();
        var charHeight;
        var charWidth;
        var totalWidth;



        var charLabel= cc.LabelTTF.create(" ", fntArialRoundedMTBoldStr, fntSize);
        charHeight=charLabel.getContentSize().height;
        charWidth=charLabel.getContentSize().width;

        m=0;
        for (i in wordsAux) {
            if(wordsAux[i].indexOf("\n") !== -1){
                var wordAux=wordsAux[i];

                while(wordAux.indexOf("\n") !== -1){
                    if(wordAux.indexOf("\n")==0){
                        words[m]="\n";m++;
                        wordAux=wordAux.substr(1);
                    }else{
                        words[m]=wordAux.substr(0,wordAux.indexOf("\n"));m++;
                        wordAux=wordAux.substr(wordAux.indexOf("\n"));
                    }
                }
                if(wordAux!=""){
                    words[m]=wordAux;m++;
                }
            }else{
                words[m]=wordsAux[i];m++;
            }
        }

        m=0;
        for (i in words)
        {
            if(words[i]!="\n"){
                this.labels[m]=cc.LabelTTF.create(words[i], fntArialRoundedMTBoldStr, fntSize);
                this.labels[m].setTag(m+1);
                m++;
            }
        }

        j=0; //words in line
        m=0; //lines
        k=0; //labels

        for (i in words)
        {
            if(words[i]!="\n"){
                if(this.labels[k].getContentSize().width<maxWidth){
                    lineWidth=lineWidth + this.labels[k].getContentSize().width;
                    if (lineWidth>maxWidth)
                    {
                        //width exceeded
                        lineWidth=0;
                        lines[m]=line;
                        line= new Array();
                        j=0;
                        m++;

                        lineWidth=this.labels[k].getContentSize().width;
                        line[j]=words[i];
                        j++;
                        k++;

                    }else{
                        //normal
                        line[j]=words[i];
                        j++;
                        k++;
                        lineWidth=lineWidth +charWidth;
                    }
                }else{
                    //width exceeded with only one word
                    lineWidth=0;
                    lines[m]=line;
                    line= new Array();
                    j=0;
                    m++;

                    lineWidth=this.labels[k].getContentSize().width;
                    line[j]=words[i];
                    j++;
                    k++;
                }
            }else{
                //line break
                lineWidth=0;
                lines[m]=line;
                line= new Array();
                j=0;
                m++;
            }

            if(i==words.length-1){
                lineWidth=0;
                lines[m]=line;
                line= new Array();
                j=0;
                m++;
            }
        }

        totalWidth=0;
        mm=0;
        x=0;
        y=(maxHeight/2) + ((lines.length*charHeight)/2);

        for (i in lines){

            if (lines[i].length==0){
                y=y-charHeight;
            }else{
                totalWidth=0;
                m=mm;
                for (j in lines[i]){
                    totalWidth=totalWidth + this.labels[m].getContentSize().width;

                    m++;
                }
                totalWidth=totalWidth+((lines[i].length-1)*charWidth);

                //Center horizontally
                x=(size.width/2)-(totalWidth/2);
                m=mm;
                for (j in lines[i]){

                    this.labels[m].setAnchorPoint(cc.p(0,1));
                    this.labels[m].setPosition(cc.p(x,y));

                    this.setLabelColorStandard(this.labels[m].getTag()-1);

                    this.addChild(this.labels[m]);
                    x=x+this.labels[m].getContentSize().width;
                    x=x+charWidth;
                    m++;
                }
                y=y-charHeight;
            }
            mm=mm+lines[i].length;
        }
    },runHighlights:function() {
        var idLanguage=this.owner.getCurrentIdLanguage();
        if(this.labels != null && this.labels.length>=highlights[idLanguage][currentPage].length){
            var i;
            for (i in highlights[idLanguage][currentPage]){
                if(highlights[idLanguage][currentPage][i]>0.0){
                    this.labels[i].runAction(cc.Sequence.create(
                        cc.DelayTime.create(highlights[idLanguage][currentPage][i]),
                        cc.CallFunc.create(function(node) {
                            node.setColor(highlightColor);
                        }, this),
                        cc.DelayTime.create(this.getDelayHighlight(idLanguage,i)),
                        cc.CallFunc.create(function(node) {
                            this.setLabelColorStandard(node.getTag()-1);
                        }, this)
                    ));
                }
            }
        }
    },setLabelColorStandard:function(index) {
        if (coloredWords[this.owner.getCurrentIdLanguage()][currentPage].indexOf(index) > -1) {
            this.labels[index].setColor(this.getColorForAWord(index));
        } else {
            this.labels[index].setColor(cc.c3b(0, 0, 0));
        }
    },stopHighlights:function() {
        var idLanguage=this.owner.getCurrentIdLanguage();
        if(this.labels != null && this.labels.length>=highlights[idLanguage][currentPage].length){
            var i;
            for (i in highlights[idLanguage][currentPage]){
                if(highlights[idLanguage][currentPage][i]>0.0){
                    this.labels[i].stopAllActions();
                    this.setLabelColorStandard(this.labels[i].getTag()-1);
                }
            }
        }
    },getColorForAWord:function(_index) {
        var index=0;
        var i,j;
        for (i=0;i<pages;i++){
            if(currentPage==i){
                var position=coloredWords[this.owner.getCurrentIdLanguage()][currentPage].indexOf(_index)
                for (j in coloredWords[this.owner.getCurrentIdLanguage()][i]){
                    if (position==j){
                        return wordColors[index];
                    }else{
                        index++;
                        if (index>=wordColors.length){
                            index=0;
                        }
                    }
                }
            }else{
                for (j in coloredWords[this.owner.getCurrentIdLanguage()][i]){
                    index++;
                    if (index>=wordColors.length){
                        index=0;
                    }
                }
            }
        }
        return cc.c3b(0, 0, 0);
    },getDelayHighlight:function(idLanguage,index) {

        var ini= highlights[idLanguage][currentPage][index];
        var fin=0;
        for (var i=index+1; i<highlights[idLanguage][currentPage].length;i++){
            if (highlights[idLanguage][currentPage][i]>0){
                fin=highlights[idLanguage][currentPage][i];
                break;
            }
        }
        if (fin==0 || (fin-ini)>1.5 ){
            return highlightTime;
        }else{
            return (fin-ini);
        }
    }
});

var controllersLayer = cc.Layer.extend({
    owner:null,
    soundFlag:-1,

    init:function (scene) {

        this._super();

        this.owner=scene;
        this.soundFlag=-1;

        if(soundStatus){
            cc.AudioEngine.getInstance().setEffectsVolume(1.0);
            cc.AudioEngine.getInstance().setMusicVolume(1.0);
        }

        var size = cc.Director.getInstance().getWinSize();

        /*Sound*/
        var menuItemToggleSound = cc.MenuItemToggle.create(
            cc.MenuItemImage.create(btnSoundNormal,btnSoundSelected),
            cc.MenuItemImage.create(btnSoundDisabledNormal,btnSoundDisabledSelected));

        menuItemToggleSound.setCallback(
            function () {
                if(soundStatus){
                    soundStatus=false;
                    cc.AudioEngine.getInstance().setEffectsVolume(0.0);
                    cc.AudioEngine.getInstance().setMusicVolume(0.0);
                    this.doSomethingToPressButton();
                    this.stopSoundLogistic();
                    this.hideMenuSoundReplace();

                }else{
                    soundStatus=true;
                    cc.AudioEngine.getInstance().setEffectsVolume(1.0);
                    cc.AudioEngine.getInstance().setMusicVolume(1.0);
                    this.doSomethingToPressButton();
                    this.playSoundLogistic();
                }
            }, this);
        if(!soundStatus) menuItemToggleSound.setSelectedIndex(1);
        menuItemToggleSound.setAnchorPoint(cc.p(0,0.5));
        menuItemToggleSound.setPosition(cc.p(0+btnPaddingWidth,size.height-(((size.height-imgHeight)/2)/2)));

         var menuSound = cc.Menu.create(menuItemToggleSound);
         menuSound.setPosition(cc.PointZero());
         this.addChild(menuSound, 0);

        /*Home*/
        if (currentPage > 0)
        {
            var menuItemImageHome = cc.MenuItemImage.create(btnHomeNormal,btnHomeSelected,
                function () {
                    this.doSomethingToPressButton();
                    this.doSomethingToChangeThePage();
                    currentPage=0;
                    var director = cc.Director.getInstance();
                    director.replaceScene(cc.TransitionProgressRadialCW.create(transitionTime,new bookScene()));
                },this);

            menuItemImageHome.setAnchorPoint(cc.p(0,0.5));
            menuItemImageHome.setPosition(cc.p(menuItemToggleSound.getPosition().x+menuItemToggleSound.getContentSize().width+btnPaddingWidth,size.height-(((size.height-imgHeight)/2)/2)));

            var menuHome = cc.Menu.create(menuItemImageHome);
            menuHome.setPosition(cc.PointZero());
            this.addChild(menuHome, 0);
        }

        /*SoundReplay*/

        var menuItemImageSoundReplay = cc.MenuItemImage.create(btnSoundReplayNormal,btnSoundReplaySelected,
            function () {
                this.doSomethingToPressButton();
                this.playSoundLogistic();
            },this);

        menuItemImageSoundReplay.setAnchorPoint(cc.p(0,0.5));

        if(currentPage==0) menuItemImageSoundReplay.setPosition(cc.p(menuItemToggleSound.getPosition().x+menuItemToggleSound.getContentSize().width+btnPaddingWidth,size.height-(((size.height-imgHeight)/2)/2)));
        else menuItemImageSoundReplay.setPosition(cc.p(menuItemImageHome.getPosition().x+menuItemImageHome.getContentSize().width+btnPaddingWidth,size.height-(((size.height-imgHeight)/2)/2)));

        var menuSoundReplay = cc.Menu.create(menuItemImageSoundReplay);
        menuSoundReplay.setPosition(cc.PointZero());
        menuSoundReplay.setOpacity(0.0);
        menuSoundReplay.setTag(menuSoundReplayTag);
        menuSoundReplay.setTouchEnabled(false);
        this.addChild(menuSoundReplay, 0);



        /*Logo*/
        if (currentPage > 1)
        {
            var logoSprite=cc.Sprite.create(logo);
            logoSprite.setAnchorPoint(cc.p(1,0.5));
            logoSprite.setPosition(cc.p(size.width-btnPaddingWidth, size.height-(((size.height-imgHeight)/2)/2)));
            this.addChild(logoSprite, 0);
        }

        /*Backward*/
        if (currentPage > 0)
        {
            var menuItemImageBackward = cc.MenuItemImage.create(btnBackwardNormal,btnBackwardSelected,
                function () {
                    this.doSomethingToPressButton();
                    this.doSomethingToChangeThePage();
                    currentPage--;
                    var director = cc.Director.getInstance();
                    director.replaceScene(cc.TransitionFade.create(transitionTime,new bookScene(),cc.c3b(255, 255, 255)));
                },this);

            menuItemImageBackward.setAnchorPoint(cc.p(0,0.5));
            menuItemImageBackward.setPosition(cc.p(0+btnPaddingWidth,(((size.height-imgHeight)/2)/2)));
            var menuBackward = cc.Menu.create(menuItemImageBackward);
            menuBackward.setPosition(cc.PointZero());
            this.addChild(menuBackward, 0);

            btnWidth=menuItemImageBackward.getContentSize().width;
        }


        /*Forward*/
        if (currentPage < pages)
        {
            var menuItemImageForward = cc.MenuItemImage.create(btnForwardNormal,btnForwardSelected,
                function () {
                    this.doSomethingToPressButton();
                    this.doSomethingToChangeThePage();
                    currentPage++;
                    var director = cc.Director.getInstance();
                    if(currentPage==pages-1){
                        director.replaceScene(cc.TransitionFade.create(transitionTime,new shareScene(),cc.c3b(255, 255, 255)));
                    }else{
                        director.replaceScene(cc.TransitionFade.create(transitionTime,new bookScene(),cc.c3b(255, 255, 255)));
                    }
                },this);

            menuItemImageForward.setAnchorPoint(cc.p(1,0.5));
            menuItemImageForward.setPosition(cc.p(size.width-btnPaddingWidth,(((size.height-imgHeight)/2)/2)));

            var menuForward = cc.Menu.create(menuItemImageForward);
            menuForward.setPosition(cc.PointZero());
            this.addChild(menuForward, 0);

            btnWidth=menuItemImageForward.getContentSize().width;
        }

        this.setTouchEnabled(true);

        this.schedule(this.onTick, tickTime);

        return true;
    },doSomethingToChangeThePage:function () {
        this.stopSoundLogistic();
        this.unscheduleAllCallbacks();
    },onTick:function (dt) {
        if(soundStatus && this.soundFlag==1 && !cc.AudioEngine.getInstance().isMusicPlaying()){
            this.showMenuSoundReplace();
        }
    },playSoundLogistic:function(){
        if(sounds[this.owner.getCurrentIdLanguage()][currentPage]!=""  && soundStatus)
        {
            cc.AudioEngine.getInstance().playMusic(sounds[this.owner.getCurrentIdLanguage()][currentPage]);
            this.owner.textL.runHighlights();
            if(this.soundFlag!=-1)this.hideMenuSoundReplace();
            else{this.soundFlag=1}
        }
    },stopSoundLogistic:function(){
        if (cc.AudioEngine.getInstance().isMusicPlaying()) cc.AudioEngine.getInstance().stopMusic(true);
        this.owner.textL.stopHighlights();
    },doSomethingToPressButton:function () {
        if(soundStatus)cc.AudioEngine.getInstance().playEffect(soundBtnStandard);
    },showMenuSoundReplace:function () {
        this.soundFlag=0;
        if(this.getChildByTag(menuSoundReplayTag).getOpacity()==0.0){
            if(sounds[this.owner.getCurrentIdLanguage()][currentPage]!=""){
                this.getChildByTag(menuSoundReplayTag).setTouchEnabled(true);
                this.getChildByTag(menuSoundReplayTag).runAction(cc.FadeIn.create(btnFadeTime));
            }
        }
    },hideMenuSoundReplace:function () {
        this.soundFlag=1;
        if(this.getChildByTag(menuSoundReplayTag).getOpacity()!=0.0){
            this.getChildByTag(menuSoundReplayTag).setTouchEnabled(false);
            this.getChildByTag(menuSoundReplayTag).runAction(cc.FadeOut.create(btnFadeTime));
        }
    }

});


var bookScene = cc.Scene.extend({
    imageL:null,
    controllersL:null,
    textL:null,
    onEnter:function () {
        this._super();

        var size = cc.Director.getInstance().getWinSize();
        this.addChild(cc.LayerColor.create(cc.c4b(255, 255, 255, 255), size.width,size.height),0);


        this.imageL = new imageLayer();    /*Dependence between imageL and TextL and controllersL */
        this.imageL.init(this);
        this.addChild(this.imageL,1);

        this.controllersL = new controllersLayer();  /*Dependence between controllersL and TextL  */
        this.controllersL.init(this);
        this.addChild(this.controllersL,3);

        this.textL= new textLayer();
        this.textL.init(this);
        this.addChild(this.textL,2);

    },getCurrentIdLanguage:function() {
        var currentLanguageType = cc.Application.getCurrentLanguage();
        switch (currentLanguageType) {
            case cc.LANGUAGE_ENGLISH:
                 return idEnglish;
                break;
            default:
                return idEnglish;
        }
    }
});
