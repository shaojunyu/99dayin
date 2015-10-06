require.config({
    baseUrl: './js',
    paths: {
        'jquery': 'lib/jQuery',
        'scroll': 'entry/function/scroll',
        'modal': 'lib/jquery.simplemodal'
    }
})
require(['jquery', 'scroll', 'modal'], function($, scroll,modal) {
    var scroll = new scroll.ScrollPage();
    $("#down-arrow").on('click', function() {
        scroll.moveDown();
    })
    $('.back-top').on('click', function() {
        scroll.moveUp();
    })
    /*
    *检测模态框是否显示，是的不操作，否则显示模态框
    * $target 为模态框对象
    * close表示点击罩层是否关闭modals
    */
    function detectShow($target,close){
        if($target.css('display')!=='block'){
            $.modal.close();
            openModal($target,close);
        }
    }
    /*
    *设置模态框的打开效果
    */
    function openModal(target, close) { //打开弹窗效果    
        $.modal.close();
        target.modal({
            overlayClose: close,
            onOpen: function(dialog) {
                dialog.overlay.fadeIn("fast", function() { //罩层载入
                    dialog.data.hide(); //数据载入动画
                    dialog.container.fadeIn('fast', function() { //内容区载入
                        dialog.data.fadeIn('normal'); //数据显示动画
                    });
                });
            },
            overlayCss: {
                backgroundColor: "#000"
            },
            opacity: 85
        });
    }
    var login_frame = $("#login-frame"),
        signin_frame = $("#signin-frame");
    $("#login").on('click',function(){
        detectShow(login_frame,true);
    })
    $('#signin').on('click',function(){
        detectShow(signin_frame,true);
    });
    $('body').on('click',function(event){
        var $target = $(event.target),
            _parent = $target.parent();
        if($target.hasClass('login-btn')){
            detectShow(login_frame,true);
        }else if($target.hasClass('signin-btn')){
            detectShow(signin_frame,true);
        }else if($target.hasClass('user-login')){
            toggleActive($target,'active');        
        }
        /*
        * 修改登录样式,切换到打印店登录
        */ 
        else if($target.hasClass('store-login')){
            toggleActive($target,'active');        
        }else if(_parent.hasClass('store-login')){
            toggleActive(_parent,'active');
        }
        /*
        * 修改登录样式,切换到用户登录
        */
        else if($target.hasClass('user-login')){
            toggleActive($target,'active');
        }else if(_parent.hasClass('user-login')){
            toggleActive(_parent,'active');
        }
    })
    /*
    * 切换active,以及去掉siblings的active
    */
    function toggleActive($target,classname){
        $target.addClass(classname)
                .siblings().removeClass(classname);
    }
    $('.user-login,.store-login').on('click',function(){        
       toggleActive($(this),'active');        
    })
})
