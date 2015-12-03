'use strict';

define(['jquery'], function ($) {
    _ScrollPage.DEFAULT = {
        container: $('#container'),
        section: $('.section'),
        duration: '.5s',
        ease: 'ease-in-out'
    };
    var index = 0,
        length = 2,
        //页面长度
    loca = 0,
        //页面位置
    sec_height = 0; //页面的高度
    function _ScrollPage(opts) {
        var _this = this;
        this.opts = $.extend({}, _ScrollPage.DEFAULT, opts);
        length = this.opts.section.length;
        sec_height = this.opts.section.height();
        //监听滚轮事件
        $(window).on('mousewheel DOMMouseScroll', function (e) {
            e.preventDefault();
            var value = e.originalEvent.wheelDelta || -e.originalEvent.detail;
            var delta = Math.max(-1, Math.min(1, value));
            if (delta < 0) {
                if (index < length - 1) {
                    _this.moveDown();
                }
            } else if (delta > 0) {
                if (index != 0) {
                    _this.moveUp();
                }
            }
        });
        //监听页面的resize事件，如果resize页面之后，需要重新定位loca的大小.
        $(window).on('resize', function () {
            // setTimeout(_this.init,600);
            _this.init(loca);
        });
    }
    _ScrollPage.prototype.moveUp = function () {
        index -= 1;
        loca += sec_height;
        this.init(loca);
    };
    _ScrollPage.prototype.moveDown = function () {
        index += 1;
        loca -= sec_height;
        this.init(loca);
    };
    //write moveUp.
    // ScrollPage.prototype.moveUp = function(index) {
    //         var opts = this.opts,
    //             loca = -opts.section.eq(index).position().top;           
    //         this.init(loca);
    //     }
    //是否支持css的某个属性
    function isSuportCss(property) {
        var body = $("body")[0];
        for (var i = 0; i < property.length; i++) {
            if (property[i] in body.style) {
                return true;
            }
        }
        return false;
    }
    //缓动元素位置
    _ScrollPage.prototype.init = function (loca) {
        var transform = ["-webkit-transform", "-ms-transform", "-moz-transform", "transform"],
            transition = ["-webkit-transition", "-ms-transition", "-moz-transition", "transition"],
            _opts = this.opts,
            container = _opts.container,
            new_height = _opts.section.height(); //如果窗口resize的话,获取页面的新高度
        loca = new_height / sec_height * loca; //使页面的位置，适应页面resize的感觉       
        if (isSuportCss(transform) && isSuportCss(transition)) {
            var translate = "0px," + loca + "px,0px";
            container.css({
                'transition': 'all ' + _opts.duration + " " + _opts.ease,
                'transform': 'translate3d(' + translate + ')'
            });
        } else {
            if (!container.is(':animated')) {
                container.animate({
                    top: loca
                }, 600);
            }
        }
    };
    $.fn.extend({
        ScrollPage: function ScrollPage(opts) {
            return this.each(function () {
                new _ScrollPage(opts);
            });
        }
    });
    return {
        ScrollPage: _ScrollPage
    };
});