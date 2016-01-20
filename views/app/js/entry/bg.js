require.config({
    baseUrl: './js',
    paths: {
        'jquery': 'lib/jQuery',       
        'iscroll':'lib/iscroll' 
    }
})
require(['jquery','iscroll'],function($,scroll){
    var SelfSelect = {
        $address_ul: $("#college_ul"),
        $address_btn: $('#college'),
        // $down_arrow:$('.down-arrow'),   //下拉三角,添加下拉时候的效果        
        turn: function(ele) {
            if (ele.css('display') == 'block') {
                ele.hide();
            } else {
                ele.show();
                this.$all_items.not(ele).hide();
            }
        },
        //替换选择的内容
        replaceText: function($target, $replace) {
            $target.text($replace.text());
            $target.attr("value", $replace.text());
        },
        removeClass:function($ele,classname){
            $ele.removeClass(classname);
        },
        toggleClass:function($ele,classname){
            $ele[0].classList.toggle(classname);
        },
        bindClick: function(btn, ul) {
            var _this = this;
           btn.on('click', function() {
                _this.turn(ul);
            });
            ul.on('click', function(event) {
                var $target = $(event.target);
                if ($target[0].tagName !== "LI") {
                    return;
                }               
                //选中LI出现的样式                
                $(this).prev().find('.select-value').addClass('after-select');
                //替换btn里面选中的内容.
                _this.replaceText(btn.find('.select-value'), $target);
                $(this).hide();
            })
        },
        init: function() {
            this.bindClick(this.$address_btn, this.$address_ul);
        }
    }
    SelfSelect.init();    
    //处理文档管理btns
    /*
    * 添加相应的classname 并且 移除 siblings
    */
   function toggleActive($target,classname){
        $target.addClass(classname)
                .siblings().removeClass(classname);
    }
    $('.btns>button').on('click',function(){
        toggleActive($(this),'active');
    });
    var myScroll = new IScroll('#wrapper', {
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            // fadeScrollbars: true,
            useTransition: true
        });
})
