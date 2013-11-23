var splashLayer = cc.Layer.extend({
    init:function () {

        this._super();

        var size = cc.Director.getInstance().getWinSize();

        var backgroundSprite;
        backgroundSprite=cc.Sprite.create(splash);
        backgroundSprite.setPosition(cc.p(size.width / 2, size.height / 2));
        backgroundSprite.setOpacity(0);
        this.addChild(backgroundSprite, 0);

        var action = cc.FadeIn.create(2.0);
        var actionBack = action.reverse();
        backgroundSprite.runAction(cc.Sequence.create(cc.DelayTime.create(0.5),cc.CallFunc.create(this.playSplashSound,this),action,cc.DelayTime.create(2.5),actionBack, cc.CallFunc.create(this.onCallbackSplash,this)));

        return true;
    },onCallbackSplash:function () {
        var director = cc.Director.getInstance();
        director.replaceScene(cc.TransitionFade.create(0.25,new introductionScene(),cc.c3b(255, 255, 255)));
    },playSplashSound:function () {
        cc.AudioEngine.getInstance().playMusic(soundSplash);
    }
});




var splashScene = cc.Scene.extend({
    onEnter:function () {
        cc.AudioEngine.getInstance().setEffectsVolume(1.0);
        cc.AudioEngine.getInstance().setMusicVolume(1.0);

        this._super();

        var size = cc.Director.getInstance().getWinSize();
        this.addChild(cc.LayerColor.create(cc.c4b(255, 255, 255, 255), size.width,size.height),0);

        var splashL = new splashLayer();
        splashL.init();
        this.addChild(splashL,1);
    }
});

