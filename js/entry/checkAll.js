'use strict';

define(['jquery'], function ($) {
    Check.DEFAUlT = {
        //$selectAll
        //$selectBtns
        //$container
        //sub-checkbox
        //parent-checkbox
    };

    function Check(opts) {
        this.opts = $.extend({}, Check.DEFAULT, opts);
        this.container = this.opts.container; //子checkbox的容器\
        this.checkAll = this.opts.checkAll; //全选按钮
        this.checkBtns = this.opts.checkBtns; //子checkboxs
        this.classname = this.opts.className;
        var _this = this;
        /*
         * 帮定全选按钮，绑定全选和取消全选
         */
        this.checkAll.on('click', function () {
            if (this.checked) {
                _this.addCheck(_this.checkBtns);
            } else {
                _this.cancelCheck(_this.checkBtns);
            }
        });
        this.container.on('click', function (e) {
            var $target = $(e.target);

            if ($target.hasClass(_this.classname)) {

                if (!$target[0].checked) {
                    _this.cancelCheck(_this.checkAll);
                } else {
                    if (_this.confirmCheck(_this.checkBtns)) {
                        _this.addCheck(_this.checkAll);
                    }
                }
            }
        });
    }
    Check.prototype.confirmCheck = function ($target) {
        for (var i = 0; i < $target.length; i++) {
            if (!$target.eq(i).is(':checked')) {
                return false;
            }
        }
        return true;
    };
    /*
     * 选中
     */
    Check.prototype.addCheck = function ($target) {
        $target.prop('checked', true);
    };
    /*
     * 取消选中
     */
    Check.prototype.cancelCheck = function ($target) {
        $target.prop('checked', false);
    };

    // $.fn.extend({
    //     Check: function(opts) {
    //         return this.each(function() {
    //             new Check(opts);
    //         })
    //     }
    // })	
    return {
        Check: Check
    };
});