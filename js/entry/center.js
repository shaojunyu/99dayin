'use strict';

require.config({
    baseUrl: './js',
    paths: {
        'jquery': 'lib/jQuery',
        'scroll': 'lib/iscroll',
        // 'modal': 'lib/jquery.simplemodal',
        'utility': 'entry/utility/utility',
        'prompt': 'entry/function/prompt', //提示模块
        'enroll': 'entry/function/enroll', //注册模块
        'ping++': 'lib/pingpp-pc', //ping++插件
        'modal': 'lib/jquery.simplemodal' //模态框插件
    }
});
"use strict";
require(['jquery', 'scroll', 'utility', 'prompt', 'enroll', 'ping++', 'modal'], function ($, scroll, util, prompt, enroll, ping, modal) {
    //绑定滚动条
    var Iscroll = bindScroll($('.container'));
    prompt = new prompt.Prompt({
        prompt: $('.prompt')
    });
    /*
     *检测模态框是否显示，是的不操作，否则显示模态框
     * $target 为模态框对象
     * close表示点击罩层是否关闭modals
     */
    function detectShow($target, close) {
        if ($target.css('display') !== 'block') {
            $.modal.close();
            openModal($target, close);
        }
    }

    function toggleShow($target) {
        if ($target.css('display') === 'none') {
            $target.show();
        } else {
            $target.hide();
        }
    }
    /*
     * 验证输入信息是否正确
     */
    function InputFocus($ele) {
        $ele.on('focus', function () {
            $(this).removeClass('error');
            $(this).attr('data-iden', '1'); //修改标识符data-iden 0:注册失败, 1为注册成功
        });
    }

    var Pathurl = {
        delteOrd: '', //删除订单路由
        addPrint: '', //加印路由
        getToken: '', //得到token值
        changeInfo: '', //修改个人信息
        sendImg: '', //发送身份证，学生证图片
        promptPs: '', //修改密码
        username: '' // 验证用户名是否存在

    };
    var Order = {
        pre: $('.order-content'), //未处理订单
        history: $('.his-content'), //历史订单
        order_btn: $('.orders-choice'), //切换未处理订单和历史订单
        checkout_modal: $('.paying'), //支付模态框
        orderPage: $('.file-info'),
        deleteOrder: function deleteOrder($target) {
            var parent_li = $target.parents('li'),
                order_num = $target.attr('data-order'),
                signal = false,
                i = -1;
            //?这里需要确认订单信息
            /*
             * val.order 是订单编号
             */
            Orders.forEach(function (val, index) {
                if (Number(val.order) === Number(order_num)) {
                    signal = true;
                    i = index;
                }
            });
            if (signal) {
                Orders.splice(i, 1);
            }
            parent_li.detach();
            Iscroll.forEach(function (val) {
                val.refresh();
            });
            sendAjax({
                url: Pathurl.delteOrd,
                data: {
                    Orders: Orders
                },
                success: function success(data) {
                    if (!data.success) {
                        prompt.changeInfo("您的网络又问题，请重新删除~");
                    }
                }
            });
        },
        checkout: function checkout($target) {
            var seq = $target.attr('data-seq');
            /*
             * 接下来操作整个支付流程，比如支付弹窗
             * 支付页面
             * 支付成功
             * 最后返回订单信息
             */
        },
        fillInfo: function fillInfo() {},
        init: function init() {
            var _this = this;
            //未处理订单页的应用
            this.pre.on('click', function (e) {
                var $target = $(e.target);
                if ($target.hasClass('cancel')) {
                    var decision = confirm("确认取消订单吗?");
                    if (decision) {
                        _this.deleteOrder($target);
                    }
                    //点击按钮执行支付功能
                } else if ($target.hasClass('go-pay')) {
                        var li = $target.parents('li'),
                            num = li.find('.order-num').text(),
                            //获取数量 
                        money = li.find('.money').text(); //获取总价   
                        openModal(_this.checkout_modal, false);
                        $.ajax({
                            url: Pathurl.go_pay,
                            data: {
                                num: num, //订单号
                                money: money
                            },
                            success: function success(data) {
                                if (data.success) {
                                    //如果发送支付请求成功，弹出模态框，然后再另外定位一个网页
                                    openModal(_this.checkout_modal, false);
                                    _this.checkout_modal.attr('data-num', num); //修改模态框的订单号
                                } else {
                                        prompt.changeInfo("支付出错，请重新支付!");
                                    }
                            }
                        });
                    } else if ($target.hasClass('showFiles')) {
                        var data = $target.data('order');
                        $.ajax({
                            url: Pathurl.sendOrder,
                            type: 'POST',
                            dataType: 'json',
                            data: {
                                order: data
                            }
                        }).then(function () {}).fail(function () {
                            prompt.changeInfo("请求失败,请重试~");
                        });
                    }
            });
            this.order_btn.on('click', function (e) {
                var $target = $(e.target),
                    pre = $('.pre-order'),
                    //未处理订单
                history = $('.his-order'); //历史订单
                if ($target.hasClass('pre-order-btn')) {
                    //将未处理订单显示,历史订单隐藏
                    changeShow(pre, history);
                    $target.addClass('active').siblings().removeClass('active');
                    Iscroll.forEach(function (val) {
                        val.refresh();
                    });
                } else if ($target.hasClass('historic-order-btn')) {
                    //将历史订单显示s未处理订单隐藏
                    changeShow(history, pre);
                    $target.addClass('active').siblings().removeClass('active');
                    Iscroll.forEach(function (val) {
                        val.refresh();
                    });
                }
            });
            this.history.on('clicl', function (e) {
                var $target = $(e.target);
                if ($target.hasClass('add-print')) {
                    var index = Number($target.attr('data-seq'));
                    sendAjax({
                        url: Pathurl.addPrint,
                        data: {
                            history: HisOrder[index] //传回指定历史订单
                        },
                        success: function success(data) {
                            if (data.success) {
                                window.location.href = data.url;
                            } else {
                                prompt.changeInfo('对不起你的订单信息已经失效~~');
                            }
                        }
                    });
                }
            });
        }
    };
    Order.init();
    //验证用户名的正确性
    var username_reg = [/^[\u4e00-\u9fa5A-Za-z0-9-_]*$/, /^[\u4e00-\u9fa5A-Za-z0-9-_]{4,12}$/],
        username_msg = ['姓名只能输入中英文，数字，下划线和减号!', '用户名输入长度只能在4~12位!'],

    //验证密码
    pwd_reg = [/^[a-zA-Z]\w*$/, /^[a-zA-Z]\w{5,15}$/],
        pwd_msg = ['密码以字母开头，只能包含字母,数字,下划线!', '密码输入长度只能在6~16位!'],

    //验证手机号
    phone_reg = [/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/],
        phone_msg = ['请输入正确手机号!'],

    //验证院系
    college_reg = [/^[\u4e00-\u9fa5]{0,}$/],
        college_msg = ['输入不能包含非法字符!'],

    //验证邮箱
    email_reg = [/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/],
        email_msg = [' 邮箱格式不正确!'];
    var Left = {
        content: $('.content'),
        authentic: $('.authentic-page'),
        changePs: $('.change-ps'), //修改密码页面
        upload: $('.upload'), //上传页面按钮
        confir: $('.confirm-btn'), //确认上传认证信息btn              
        promptPs: $('.prompt-ps'), //修改密码提交按钮
        oldPs: $('.old-ps'), //旧密码
        newPs: $('.new-ps'), //新密码
        confir: $('.confir-ps'), //确认密码
        edit_btn: $('.edit-info'), //编辑信息btn
        changeInfo: $('.change-info'), //修改信息页
        change_btn: $('.change-btn'), //修改信息
        confirm_code: $('.confir-code'), //验证框
        obtain_code: $('.get-code'), //获取验证码btn
        name: $('.name'), //姓名
        phone: $('.phone'), //手机
        CF_code: $('.confir-code'), //验证码
        email: $('.email'), //邮箱
        address: $('.address'), //地址
        showImg: function showImg(file, img) {
            var reader = new FileReader();
            if (!/image\/\w+/.test(file.type)) {
                prompt.changeInfo("上传的不是图片类型!");
                return false;
            }
            reader.onload = function (e) {
                img.attr('src', e.target.result);
            };
            reader.readAsDataURL(file);
        },
        init: function init() {
            var _this = this;
            this.content.on('click', function (e) {
                var $target = $(e.target);
                if ($target.hasClass('authentic-btn')) {
                    toggleShow(_this.authentic);
                } else if ($target.hasClass('change-ps-btn')) {
                    toggleShow(_this.changePs);
                } else if ($target.hasClass('back')) {
                    console.log($target.parents('left-part'));
                    $target.parents('.left-part').hide();
                }
            });
            //上传图片，以便认证
            this.upload.on('change', function () {
                if (!this.files.length) {
                    return false;
                }
                var file = this.files[0],
                    img = $(this).parent().next();
                _this.showImg(file, img);
            });
            //确认上传按钮
            this.confir.on('click', function () {
                var $imgs = $('upload-img img'),
                    mark = false,
                    file = [];
                $imgs.each(function () {
                    mark = true;
                    var src = $(this).attr('src'),
                        type = $(this).attr('data-type');
                    console.log(1);
                    if ($(this).attr('src') == '' || $(this).attr('src') == null) {
                        console.log(1);
                        mark = false;
                    }
                    //限定上传图片的名称.是身份证还是其他
                    file.push({
                        img: src,
                        type: type
                    });
                });
                console.log(mark);
                if (!mark) {
                    prompt.changeInfo("请先上传图片!");
                    return false;
                }
                sendAjax({
                    url: Pathurl.sendImg,
                    data: {
                        file: file
                    },
                    success: function success(data) {
                        if (data.success) {
                            changeShow($('.authenticating'), $('.authentic-btn'));
                            prompt.changeInfo('上传成功，请耐心等待!');
                            _this.authentic.hide();
                        } else {
                            prompt.changeInfo("上传失败，请注意网络情况!");
                        }
                    }
                });
            });
            //修改密码
            this.promptPs.on('click', function () {
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
                        success: function success(data) {
                            if (data.success) {
                                _this.promptPs.parents('.change-ps').hide();
                                prompt.changeInfo("密码修改成功!");
                            }
                        }
                    });
                }
            });
            this.edit_btn.on('click', function () {
                toggleShow(_this.changeInfo);
            });
            var code = '';
            this.obtain_code.on('click', function () {
                $(this).addClass('sending');
                var phone = _this.phone.val(),
                    iden = _this.phone.attr('data-iden') === '1' ? true : false;
                if (!iden) {
                    prompt.changeInfo('请输入正确手机号!');
                    return false;
                }
                sendAjax({
                    url: Pathurl.getToken,
                    data: {
                        phone: phone
                    },
                    success: function success(data) {
                        if (data.success) {
                            code = data.msg;
                        } else {
                            //验证这里的this的作用域
                            $(this).removeClass('sending');
                        }
                    }
                });
            });
            this.confirm_code.on('blur', function () {
                var content = $(this).val();
                if (content == '' || content == null) {
                    prompt.changeInfo('验证码不能为空');
                    _this.confirm_code.addClass('error');
                } else if (code === content) {
                    _this.confirm_code.attr('data-iden', '1');
                    _this.confirm_code.removeClass('error');
                } else {
                    prompt.changeInfo('验证码输入不正确!');
                    _this.confirm_code.attr('data-iden', '0');
                    _this.confirm_code.addClass('error');
                }
            });
            //当聚焦到验证码上，移除错误提示效果
            InputFocus(_this.confirm_code);
            this.name.enroll({
                reg: username_reg,
                msg: username_msg,
                override: true,
                url: Pathurl.username
            });
            this.phone.enroll({
                reg: phone_reg,
                msg: phone_msg
            });
            this.email.enroll({
                reg: email_reg,
                msg: email_msg
            });
            this.address.enroll({});
            this.change_btn.on('click', function () {
                var name = _this.name.val(),
                    phone = _this.phone.val(),
                    email = _this.email.val(),
                    address = _this.address.val(),
                    confirm = _this.confirm_code.val(),
                    mark = _this.name.attr('data-iden') === '1' ? true : false && _this.phone.attr('data-iden') === '1' ? true : false && _this.email.attr('data-iden') === '1' ? true : false && _this.addrss.attr('data-iden') === '1' ? true : false && _this.confirm_code.attr('data-iden') === '1' ? true : false ? true : false;
                if (mark) {
                    _this.change_btn.addClass('sending');
                    sendAjax({
                        url: Pathurl.changeInfo,
                        data: {
                            name: name,
                            phone: phone,
                            email: email,
                            address: address,
                            confirm: confirm
                        },
                        beforeSend: function beforeSend() {
                            _this.change_btn.addClass('sending');
                        },
                        success: function success(data) {
                            if (data.success) {
                                prompt.changeInfo('信息修改成功,请重新登录!');
                                _this.change_btn.parents('.left-part').hide();
                            } else {
                                prompt.changeInfo('信息修改失败，请再次尝试');
                                _this.change_btn.removeClass('sending');
                            }
                        }
                    });
                } else {
                    prompt.changeInfo('您的部分信息录入不正确!');
                }
            });
        }
    };
    Left.init();
    var Modal = {
        pay: $('.paying'), //订单支付模态框
        close: $('.close'), //关闭btn
        paying_btn: $('.paying-btn button'), //支付button
        all_num: $('.order-num'), //获取所有的未处理订单       
        deleteOrder: function deleteOrder($target) {
            var parent_li = $target.parents('li'),
                order_num = $target.attr('data-order'),
                signal = false,
                i = -1;
            //?这里需要确认订单信息
            /*
             * val.order 是订单编号
             */
            Orders.forEach(function (val, index) {
                if (Number(val.order) === Number(order_num)) {
                    signal = true;
                    i = index;
                }
            });
            if (signal) {
                Orders.splice(i, 1);
            }
            parent_li.detach();
            Iscroll.forEach(function (val) {
                val.refresh();
            });
            sendAjax({
                url: Pathurl.delteOrd,
                data: {
                    Orders: Orders
                },
                success: function success(data) {
                    if (!data.success) {
                        prompt.changeInfo("您的网络又问题，请重新删除~");
                    }
                }
            });
        },
        checkOrder: function checkOrder() {
            var num = this.pay.attr('data-num'),
                //获取订单号
            order = ''; //当前处理订单元素              
            $.ajax({
                url: Pathurl,
                data: {
                    num: num
                },
                success: function success(data) {
                    if (data.success) {
                        prompt.changeInfo('您的支付成功，请稍等订单消息~~');
                        setTimeout(function () {
                            window.location.href = "./"; //刷新页面
                        }, 1000);
                    } else {
                        prompt.changeInfo('sorry~~您的订单支付不成功，请重新支付');
                    }
                }
            });
        },
        init: function init() {
            var _this = this;
            this.close.on('click', this.checkOrder);
        }
    };
    Modal.init();
});