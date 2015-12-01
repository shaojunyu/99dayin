require.config({
    baseUrl: './js',
    paths: {
        'jquery': 'lib/jQuery',
        'scroll': 'lib/iscroll',
        'modal': 'lib/jquery.simplemodal',
        'utility': 'entry/utility/utility',
        'checkEvent': 'entry/function/checkAll',
        'prompt': 'entry/function/prompt' //提示模块
    }
})
"use strict";
require(['jquery', 'scroll', 'checkEvent', 'prompt', 'modal', 'utility'], function($, scroll, checkEvent, prompt, modal) {
    //绑定scroll事件
    var Iscroll = bindScroll($('.files'));
    $('.basic-btn').on('click', function(e) {
        var $target = $(e.target),
            _id = $target.attr('id'),
            $ps = $('#change-ps-page'),
            $withdraw_page = $('#withdraw-page');
        if (_id === "withdraw") {
            toggleShow($withdraw_page);
        } else if (_id === 'changePs') {
            toggleShow($ps);
        }
    });
    //设置提示信息
    prompt = new prompt.Prompt({
        prompt: $('.prompt')
    });
    $('[type="checkbox"]').attr('checked', false);
    new checkEvent.Check({
        container: $('#delivery-orders'),
        checkAll: $('.select-all-btn input'),
        checkBtns: $('#delivery-orders :checkbox'),
        className: 'order-checkbox'
    });
    //实现自动倒计时功能
    setInterval(function() {
        $('.setTime').each(function() {
            $(this).text($(this).text() - 1);
        })
    }, 60000);
    //设置返回按键
    $('.back').on('click', function() {
        var left_part = $(this).parents('.left-part');
        toggleShow(left_part);
    })
    var Withdraw = {
        amount: $('.withdraw-input'), //获取提现金额
        confirm: $('.withdraw-confir'), //体现确认按钮
        pre_WD: $('.pre-withdraw'), //未提现金额
        WDed: $('.withdrawed'), //已经提现金额
        total: $('.total'), //总提现金额
        calMoney: function(money) {
            this.pre_WD.val(this.pre_WD.val() - money);
            this.WDed.val(this.WDed.val() + money);
            this.total.val(this.total.val() + money);
        },
        init: function() {
            var _this = this;
            this.confirm.on('click', function() {
                var money = Number(_this.amount.val()),
                    reg = [/^\d+$/, /^[0-9]+(.[0-9]{1})?$/]; //验证是否输入为整数，并且含有1位小数
                if (money === 0 || money == null) {
                    prompt.changeInfo('输入不能为空!');
                } else if (!(reg[0].test(money) || reg[1].test(money))) {
                    prompt.changeInfo('输入金额不正确，只能带有一位小数!');
                } else {
                    $.ajax({
                            url: Pathurl.withdraw,
                            data: {
                                money: money //发送金额
                            }
                        })
                        .done(function(data) {
                            if (data.success) {
                                //修改显示的的选项金额
                                _this.calMoney(money);
                            }
                            prompt.changeInfo(data.msg); //显示提示信息
                        })
                        .fail(function() {
                            prompt.changeInfo('为什么会出错勒~~~');
                        })
                }
            });
        }
    }
    Withdraw.init();
    var ChangePs = {
        oldPs: $('.old-ps'), //旧密码
        newPs: $('.new-ps'), //新密码
        confir: $('.confir-ps'), //确认密码
        promptPs: $('.prompt-ps'), //修改密码提交按钮
        init: function() {
            var _this = this;
            this.promptPs.on('click', function() {
                var oldPs = _this.oldPs.val(),
                    newPs = _this.newPs.val(),
                    confirm = _this.confir.val(),
                    reg = /^[a-zA-Z]\w*$/;
                if (oldPs == '' || oldPs == null || newPs == '' || newPs == null || confirm == null || confirm == '') {
                    prompt.changeInfo('输入不能为空,请先输入!');
                } else if (reg.test(newPs)) {
                    prompt.changeInfo('密码以字母开头，只能包含字母,数字,下划线!');
                } else if (oldPs === confirm) {
                    prompt.changeInfo('两次密码输入不一致!');
                } else {
                    /*
                     * 发送密码                    
                     */
                    sendAjax({
                        url: Pathurl.promptPs,
                        data: {
                            oldPs: oldPs,
                            newPs: newPs
                        },
                        success: function(data) {
                            if (data.success) {
                                _this.promptPs.parents('.change-ps').hide();
                                prompt.changeInfo("密码修改成功!");
                            }
                        }
                    });
                }
            });
        }
    }
    ChangePs.init();
    var Refresh = {
        order: $('.order-header'), //订单头部
        delivery_btn: $('.order-header .delivery'), //送货上门订单header
        pickup_btn: $('.order-header .pickup'), //到店自取订单btn
        delivery: $('#delivery-orders'), //送货上门订单div
        pickup: $('#pickup-orders'), //到店自取订单div
        delivery_ul: $('#delivery-orders ul'), //送货上门订单ul
        pickup_ul: $('#pickup-orders ul'), //到店自取订单ul
        log: $('#view-log'), //查看体现记录
        withdraw_log: $('.record'), //提现框
        /*
         * 当点击header时，会进行切换送货上门订单||到店自取订单
         */
        changeOrder: function() {
            var _this = this;
            this.order.on('click', function(e) {
                var $target = $(e.target);
                if ($target.hasClass('delivery')) {
                    changeShow(_this.delivery, _this.pickup); //切换订单显示
                    changeClass($target, 'active');
                    refreshScroll(Iscroll);
                } else if ($target.hasClass('pickup')) {
                    changeShow(_this.pickup, _this.delivery); //切换订单显示
                    changeClass($target, 'active');
                    refreshScroll(Iscroll);

                }
            })
        },
        /*
         * 定时发送Ajax请求，刷新界面
         */
        refreshOrder: function() {
            var _this = this;
            $.when( //发送多个ajax请求
                    $.ajax({
                        url: Pathurl.delivery,
                        data: {
                            order: 'delivery'
                        }
                    }),
                    $.ajax({
                        url: Pathurl.pickup,
                        data: {
                            order: 'pickup'
                        }
                    })
                )
                .then(function(delivery, pickup) {
                    if (delivery.success) {
                        _this.addLi(_this.delivery_ul, delivery.data, _this.delivery_btn); //添加送货上门订单
                    }
                    if (pickup.success) {
                        _this.addLi(_this.pickup_ul, pickup.data, _this.pickup_ul); //添加到店自取订单
                    }
                });

            setTimeout(arguments.callee, 10000);

        },
        /*
         * 点击体现，查看体现记录
         */
        showLog: function() {
            var _this = this;
            this.log.on('click', function() {
                openModal(_this.withdraw_log, true);
            });
        },
        addLi: function(ul, data, mark) {
            var li = document.createElement('li'),
                html = '',
                num = Number(mark.attr('data-order')) ++;
            mark.attr('data-order', num); //将对应的订单数加一
            data.forEach(function(val, index) {
                html += '<div class="order-upart">' +
                    '<input class="order-checkbox sub-checkbox" type="checkbox" name="order" data-num=' + (index + 1) + '>' +
                    '<div>订单编号:<span>' + val.orderNum + '</span></div>' +
                    '<div>收货地址:' + val.address + '</div>' +
                    '<div><span>文件信息:</span>' +
                    '<div class="file-info">' +
                    '<header><span>序号</span>' +
                    '<span>文件名</span>' +
                    '<span>单/双面</span>' +
                    '<span>横/竖</span>' +
                    '<span>每页PPT数量</span>' +
                    '<span>大小</span>' +
                    '<span>份数</span>' +
                    '</header>' +
                    '<div class="container files" id="warpper' + (index + 1) + '">' +
                    '<article id="scroller">' +
                    (function(data) {
                        var html = '';
                        data.forEach(function(val, index) {
                            html += '<div class="row" data-num="' + (index + 1) + '">' +
                                '<span>' + (index + 1) + '</span>' +
                                '<span><i class="' + val.classname + '"></i>' + val.name + '</span>' +
                                '<span>' + val.pages + '</span>' +
                                '<span>' + val.directino + '</span>' +
                                '<span>' + val.ppt ? val.ppt : 0 + '</span>' +
                                '<span>' + val.size + '</span>' +
                                '<span>' + val.copies + '</span>' +
                                '</div>'
                        })
                        return html;
                    }(val.orders)) +
                    '</article>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="summary">' +
                    '<div class="summary-info">' +
                    '总价：<span>' + val.money + '￥</span> 收货方式：' +
                    '<span>' + val.delivery + '</span> 支付状态：' +
                    ' <span>未支付</span>' +
                    '<i>剩余时间:<span class="setTime">30</span>分</i>' +
                    '</div>' +
                    '<img src="img/divided.png">' +
                    ' </div>'
            })
            li.innerHTML = html;
            //添加订单
            ul.append(li);
        },
        init: function() {
            /*
             * 当点击header时，会进行切换送货上门订单||到店自取订单
             */
            this.changeOrder();
            /*
             * 定时发送Ajax请求，刷新界面
             */
            // this.refreshOrder();
            /*
             * 点击体现，查看体现记录
             */
            this.showLog();
        }
    }
    Refresh.init();

/*
* 输出提示信息
*/
    // function remind() {
    //     $.ajax({
    //             url: Pathurl.getMessage,
    //         })
    //         .done(function() {
    //             if (window.Notification && Notification.permission !== "denied") {
    //                 Notification.requestPermission(function(status) {
    //                     var a = new Notification('有新订单了', {
    //                         body: '现在时间是123' + new Date().toLocaleString()
    //                     });
    //                 });
    //             } else {
    //                 alert("有新订单,现在时间是" + new Date().toLocaleString());
    //             }
    //         });

    // }

    // function notification() {

    //     setTimeout(function() {
    //         remind();
    //         notification();
    //     }, 10000)
    // }

    // notification();
    // navigator.vibrate = navigator.vibrate 
    //                 || navigator.webkitVibrate 
    //                 || navigator.mozVibrate 
    //                 || navigator.msVibrate;
    // setTimeout(navigator.vibrate(1000),1000);
    
   
})
