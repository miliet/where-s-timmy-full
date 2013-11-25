var cocos2dApp = cc.Application.extend({
    config:document['ccConfig'],
    ctor:function (scene) {
        this._super();
        this.startScene = scene;
        cc.COCOS2D_DEBUG = this.config['COCOS2D_DEBUG'];
        cc.initDebugSetting();
        cc.setup(this.config['tag']);
        cc.AppController.shareAppController().didFinishLaunchingWithOptions();
    },
    applicationDidFinishLaunching:function () {
        if(cc.RenderDoesnotSupport()){
            //show Information to user
            alert("Browser doesn't support Canvas or WebGL");
            return false;
        }
        // initialize director
        var director = cc.Director.getInstance();
        var designSize = this.getDesignSize();
        var resourceSize = cc.size(1024, 768);

        director.setContentScaleFactor(resourceSize.width / designSize.width);
        cc.EGLView.getInstance().setDesignResolutionSize(designSize.width, designSize.height, cc.RESOLUTION_POLICY.SHOW_ALL);
        // enable High Resource Mode(2x, such as iphone4) and maintains low resource on other devices.
        //director.enableRetinaDisplay(true);

        // turn on display FPS
       // director.setDisplayStats(this.config['showFPS']);

        // set FPS. the default value is 1.0/60 if you don't call this
        director.setAnimationInterval(1.0 / this.config['frameRate']);

        //load resources
        cc.LoaderScene.preload(g_ressources, function(){
            director.replaceScene(cc.TransitionFade.create(transitionTime*2,new this.startScene(),cc.c3b(255, 255, 255)));
        }, this);

        return true;
    }, getDesignSize:function () {
        var screenSize = cc.EGLView.getInstance().getFrameSize();
        var designSize = cc.size(1024,768);
        //we work only in landscape
        //we are check the orientation
        if (screenSize.height> screenSize.width)
            screenSize = cc.size(screenSize.height,screenSize.width);
        if (screenSize.width > designSize.width && screenSize.height>designSize.height)
            return designSize;
        if (screenSize.width > designSize.width)
            return cc.size(this.getWidthScaled(screenSize.height,designSize.height,designSize.width), screenSize.height);
        if (screenSize.height > designSize.height)
            return cc.size(screenSize.width,this.getHeightScaled(screenSize.width,designSize.width,designSize.height));

        var designSizeAux=cc.size(designSize.width,designSize.height);
        var percent = 99;
        while (designSizeAux.width > screenSize.width || designSizeAux.height > screenSize.height){
            designSizeAux = cc.size(((designSize.width * percent)/100),this.getHeightScaled(((designSize.width * percent)/100),designSize.width,designSize.height));
            percent--;
            if (percent ==0)
                break;
        }
        return designSizeAux;
    }, getHeightScaled:function(desiredWidth,originalWidth,originalHeight){
        return ((desiredWidth*originalHeight) / originalWidth);
    }, getWidthScaled:function(desiredHeight,originalHeight,originalWidth){
        return ((desiredHeight*originalWidth) / originalHeight);
    }
});
var myApp = new cocos2dApp(bookScene);
