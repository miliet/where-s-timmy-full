
var introductionLayer = cc.Layer.extend({
    init:function () {

        this._super();

        var size = cc.Director.getInstance().getWinSize();

        var idLanguage=-1;
        var currentLanguageType = cc.Application.getCurrentLanguage();
        switch (currentLanguageType) {
            case cc.LANGUAGE_ENGLISH:
                idLanguage= idEnglish;
                break;
            default:
                idLanguage= idEnglish;
        }

        var backgroundSprite=cc.Sprite.create(introductionImages[idLanguage]);
        backgroundSprite.setPosition(cc.p(size.width / 2, size.height / 2));
        backgroundSprite.setOpacity(0.0);
        this.addChild(backgroundSprite, 0);

        var action = cc.FadeIn.create(2.0);
        backgroundSprite.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),action));

        cc.AudioEngine.getInstance().playMusic(introductionSounds[idLanguage]);
        this.schedule(this.onTick, tickTime);

        return true;
    },onTick:function (dt) {
        if(!cc.AudioEngine.getInstance().isMusicPlaying()){
            this.unscheduleAllCallbacks();
            var director = cc.Director.getInstance();
            director.replaceScene(cc.TransitionFade.create(transitionTime,new bookScene(),cc.c3b(255, 255, 255)));
        }
    }
});

var introductionScene = cc.Scene.extend({
    onEnter:function () {
        cc.AudioEngine.getInstance().setEffectsVolume(1.0);
        cc.AudioEngine.getInstance().setMusicVolume(1.0);

        this._super();

        var size = cc.Director.getInstance().getWinSize();
        this.addChild(cc.LayerColor.create(cc.c4b(255, 255, 255, 255), size.width,size.height),0);

        var introductionL = new introductionLayer();
        introductionL.init();
        this.addChild(introductionL,1);

    }
});
