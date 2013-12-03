/*For fix a bug*/
var isMobile = false;
var isBugSoundFixed=true;

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
        /*For fix a bug*/
        if (cc.Application.getInstance().getTargetPlatform() == cc.TARGET_PLATFORM.MOBILE_BROWSER)
        {
            isMobile=true;
            isBugSoundFixed=false;
        }
        else
            isMobile=false;

        // initialize director
        var director = cc.Director.getInstance();
        var canvas = document.getElementById('gameCanvas'),context = canvas.getContext('2d');
        var designSize = cc.EGLView.getInstance().getFrameSize();
        designSize.width=canvas.width;
        designSize.height=canvas.height;
        var resourceSize = cc.size(1024, 768);
        var scale = (resourceSize.width / designSize.width);
        director.setContentScaleFactor(scale);
        cc.EGLView.getInstance().setDesignResolutionSize(designSize.width*scale, designSize.height*scale, cc.RESOLUTION_POLICY.SHOW_ALL);
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
    }
});
var myApp = new cocos2dApp(bookScene);
