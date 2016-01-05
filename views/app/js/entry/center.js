require.config({
    baseUrl: './js',
    paths: {
        'jquery': 'lib/jQuery',
        'scroll': 'lib/iscroll',
        'header': 'entry/header',
        // 'modal': 'lib/jquery.simplemodal',
        'utility': 'entry/utility/utility',
        'prompt': 'entry/function/prompt', //提示模块
        'enroll': 'entry/function/enroll', //注册模块
        'ping++': 'lib/pingpp-pc', //ping++插件
        'modal': 'lib/jquery.simplemodal', //模态框插件
        'md5': "lib/spark-md5.min",
        'encryption': "entry/function/encryption"
    }
})
"use strict";
require(['jquery', 'scroll', 'utility', 'prompt', 'enroll', 'ping++', 'modal', 'encryption', 'header'], function($, scroll, util, prompt, enroll, ping, modal, Encryption) {
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
        $ele.on('focus', function() {
            $(this).removeClass('error');
            $(this).attr('data-iden', '1'); //修改标识符data-iden 0:注册失败, 1为注册成功
        });
    }

    var Pathurl = {
        delteOrd: Encryption.Encryption('../index.php/api/cancelOrder'), //删除订单路由
        addPrint: Encryption.Encryption(''), //加印路由
        getToken: Encryption.Encryption('../index.php/api/sendSmsCode'), //得到token值
        changeInfo: Encryption.Encryption('../index.php/api/updateUserInfo'), //修改个人信息
        sendImg: Encryption.Encryption(''), //发送身份证，学生证图片
        promptPs: Encryption.Encryption('../index.php/api/updatePassword'), //修改密码的接口
        username: Encryption.Encryption(''), // 验证用户名是否存在
        sendOrder: Encryption.Encryption('../index.php/api/getOrderInfo'), //获取订单详情
        sendConfirm: Encryption.Encryption('../index.php/api/verifySmsCode'),
        logout: Encryption.Encryption('../index.php/api/logout')

    }
    var Order = {
        pre: $('.order-content'), //未处理订单
        history: $('.his-content'), //历史订单
        order_btn: $('.orders-choice'), //切换未处理订单和历史订单
        checkout_modal: $('.method'), //支付方式选择模态框
        pay_model: $('.paying'), //支付模态框
        orderPage: $('.file-info'), //订单详情框
        wrapContent: $('#warpper2 #scroller'), //订单内容
        payMethod: $('.wetChat,.aliyPay'), //支付方式
        deleteOrder: function($target) {
            var parent_li = $target.parents('li'),
                orderId = $target.attr('data-order');
            //?这里需要确认订单信息
            /*
             * val.order 是订单编号
             */
            $.ajax({
                    url: Pathurl.delteOrd,
                    type: "POST",
                    dataType: "JSON",
                    contentType: 'application/json',
                    data: JSON.stringify({
                        orderId: orderId
                    })
                })
                .then((data) => {
                    console.log(data.success);
                    if (data.success) {
                        parent_li.detach();
                        Iscroll.forEach(function(val) {
                            val.refresh();
                        });
                    } else {
                        prompt.changeInfo("您的网络有问题，请重新删除~");
                    }
                })
        },
        checkout: function($target) {
            var seq = $target.attr('data-seq');
            /*
             * 接下来操作整个支付流程，比如支付弹窗
             * 支付页面
             * 支付成功
             * 最后返回订单信息
             */
        },
        dealInfo(data) {
            let info;
            switch (data) {
                case "single":
                    info = "单";
                    break;
                case "double":
                    info = "双";
                    break;
                case "vertical":
                    info = "竖";
                    break;
                case "horizontal":
                    info = "横";
                    break;
                default:
                    info = "未知";
            }
            return info;

        },
        fillInfo: function(data) {
            var flag = 1;
            this.wrapContent.html(null);
            for (var item of data) {
                let {
                    fileName, twoSide, direction, pptPerPage, paperSize, amount
                } = item;
                console.log(item.fileName);
                twoSide = this.dealInfo(twoSide),
                    direction = this.dealInfo(direction);
                newDiv = $('<div></div>');
                newDiv.html(`<span>${flag}</span>
                                        <span>${fileName}</span>
                                        <span>${twoSide}</span>
                                        <span>${direction}</span>
                                        <span>${pptPerPage}</span>
                                        <span>${paperSize}</span>
                                        <span>${amount}</span>
                                        `);
                newDiv.attr({
                    class: "row",
                    "data-num": flag
                });
                this.wrapContent.append(newDiv);
            }

        },
        init: function() {
            var _this = this;
            //未处理订单页的应用
            this.pre.on('click', function(e) {
                var $target = $(e.target);
                if ($target.hasClass('cancel')) {
                    var decision = confirm("确认取消订单吗?");
                    if (decision) {
                        _this.deleteOrder($target);
                    }
                    //点击按钮执行支付功能
                } else if ($target.hasClass('go-pay')) {
                    console.log(123);
                    openModal(_this.checkout_modal, false);
                } else if ($target.hasClass('showFiles')) {
                    var data = $target.data('order');
                    $.ajax({
                            url: Pathurl.sendOrder,
                            type: 'POST',
                            dataType: 'json',
                            contentType: 'application/json',
                            data: JSON.stringify({
                                orderId: data
                            })
                        })
                        .then((data) => {
                            Order.fillInfo(data);
                            openModal(_this.orderPage, true);
                        })
                        .fail(() => {
                            prompt.changeInfo("请求失败,请重试~");
                        })
                }
            });
            this.order_btn.on('click', function(e) {
                var $target = $(e.target),
                    pre = $('.pre-order'), //未处理订单
                    history = $('.his-order'); //历史订单
                if ($target.hasClass('pre-order-btn')) {
                    //将未处理订单显示,历史订单隐藏
                    changeShow(pre, history);
                    $target.addClass('active').siblings().removeClass('active');
                    Iscroll.forEach(function(val) {
                        val.refresh();
                    });
                } else if ($target.hasClass('historic-order-btn')) {
                    //将历史订单显示s未处理订单隐藏
                    changeShow(history, pre);
                    $target.addClass('active').siblings().removeClass('active');
                    Iscroll.forEach(function(val) {
                        val.refresh();
                    });
                }
            });
            this.history.on('click', function(e) {
                var $target = $(e.target);
                if ($target.hasClass('add-print')) {
                    var index = Number($target.attr('data-seq'));
                    sendAjax({
                        url: Pathurl.addPrint,
                        data: {
                            history: HisOrder[index] //传回指定历史订单
                        },
                        success: function(data) {
                            if (data.success) {
                                window.location.href = data.url;
                            } else {
                                prompt.changeInfo('对不起你的订单信息已经失效~~');
                            }
                        }
                    });
                } else if ($target.hasClass('showFiles')) {
                    var data = $target.data('order');
                    $.ajax({
                            url: Pathurl.sendOrder,
                            type: 'POST',
                            dataType: 'json',
                            contentType: 'application/json',
                            data: JSON.stringify({
                                orderId: data
                            })
                        })
                        .then((data) => {
                            Order.fillInfo(data);
                            openModal(_this.orderPage, true);
                        })
                        .fail(() => {
                            prompt.changeInfo("请求失败,请重试~");
                        })
                }
            });
            this.payMethod.on('click', function() {
                openModal(_this.pay_model, false);
            });
        }
    }
    Order.init();
    //验证用户名的正确性
    var username_reg = [/^[\u4e00-\u9fa5A-Za-z0-9-_]*$/, /^[\u4e00-\u9fa5A-Za-z0-9-_]{2,12}$/],
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
        confir_ps: $('.confir-ps'), //确认密码
        edit_btn: $('.edit-info'), //编辑信息btn
        changeInfo: $('.change-info'), //修改信息页
        change_btn: $('.change-btn'), //修改信息
        confirm_code: $('.confir-code'), //验证框
        obtain_code: $('.get-code'), //获取验证码btn
        email: $('.email'), //邮箱
        name: $('.name'), //姓名
        phone: $('.phone'), //手机
        CF_code: $('.confir-code'), //验证码
        address: $('.address'), //地址

        file: new Array(),
        security: '', //验证码
        showImg: function(file, img) {
            var reader = new FileReader();
            if (!/image\/\w+/.test(file.type)) {
                prompt.changeInfo("上传的不是图片类型!");
                return false;
            }
            reader.onload = function(e) {
                img.attr('src', e.target.result);
            }
            reader.readAsDataURL(file);
        },
        countDown($ele) {
            var i = 60;
            var time = setInterval(() => {
                i--;
                $ele.text(i);
                if (i === 0) {
                    $ele.removeClass('sending').prop('disabled', false).text("获取验证码");
                    clearInterval(time);
                }
            }, 1000);

        },
        init: function() {
            var _this = this;
            this.content.on('click', function(e) {
                var $target = $(e.target);
                if ($target.hasClass('authentic-btn')) {
                    prompt.changeInfo('正在建设中~');
                    // toggleShow(_this.authentic);
                } else if ($target.hasClass('change-ps-btn')) {
                    toggleShow(_this.changePs);
                } else if ($target.hasClass('back')) {
                    console.log($target.parents('left-part'));
                    $target.parents('.left-part').hide();
                }
            });
            //上传图片，以便认证
            this.upload.on('change', function() {
                if (!this.files.length) {
                    return false;
                }
                var file = this.files[0],
                    img = $(this).parent().next();
                _this.showImg(file, img);
            });
            //确认上传按钮
            this.confir.on('click', function() {
                var $imgs = $('.IDcard img,.studentCard img'),
                    mark = false;
                $imgs.each(function() {
                    mark = true;
                    var src = $(this).attr('src'),
                        type = $(this).attr('data-type');
                    if ($(this).attr('src') == '' || $(this).attr('src') == null) {
                        console.log(1);
                        mark = false;
                    }
                });
                if (!mark) {
                    prompt.changeInfo("请先上传图片!");
                    return false;
                }
                let files = [$('#idCard-file').val(), $('#stu-card-file').val()];
                console.log(files);
                $.ajax({
                    url: Pathurl.sendImg,
                    data: {
                        file: file
                    },
                    success: function(data) {
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
            this.promptPs.on('click', function() {
                var oldPs = _this.oldPs.val(),
                    newPs = _this.newPs.val(),
                    confirm = _this.confir_ps.val(),
                    reg = new RegExp(/^[a-zA-Z]\w*$/);
                if (oldPs == '' || oldPs == null || newPs == '' || newPs == null || confirm == null || confirm == '') {
                    prompt.changeInfo('输入不能为空,请先输入!');
                } else if (!reg.test(newPs)) {
                    prompt.changeInfo('密码以字母开头，只能包含字母,数字,下划线!');
                } else if (newPs === oldPs) {
                    prompt.changeInfo("修改密码不能与原始密码重复~");
                } else if (newPs !== confirm) {
                    prompt.changeInfo('两次密码输入不一致!');
                } else {
                    /*
                     * 发送密码                    
                     */
                    prompt.showInfo("正在修改中");
                    $.ajax({
                            url: Pathurl.promptPs,
                            type: "POST",
                            dataType: "JSON",
                            contentType: "application/json",
                            data: JSON.stringify({
                                oldPassword: oldPs,
                                newPassword: newPs
                            })
                        })
                        .then((data) => {
                            if (data.success) {
                                _this.promptPs.parents('.change-ps').hide();
                                $.ajax({
                                    url: Pathurl.logout,
                                    dataType: "JSON",
                                    type: "GET",
                                    success: function(data) {
                                        if (data.success) {
                                            prompt.showInfo("密码修改成功!");
                                            window.location.href = './';
                                        }
                                    }
                                });


                            } else {
                                prompt.changeInfo("密码修改失败~");
                            }
                        })
                }
            });
            this.edit_btn.on('click', function() {
                toggleShow(_this.changeInfo);
            });

            this.obtain_code.on('click', function() {
                $(this).addClass('sending').prop('disabled', true);
                var phone = _this.phone.val(),
                    iden = _this.phone.attr('data-iden') === '1' ? true : false;
                if (!iden) {
                    prompt.changeInfo('请输入正确手机号!');
                    $(this).removeClass('sending').prop('disabled', false);
                    return false;
                }
                $.ajax({
                        url: Pathurl.getToken,
                        type: "POST",
                        dataType: 'JSON',
                        data: {
                            phone: phone
                        }
                    })
                    .then((data) => {
                        console.log(data);
                        if (data.success) {
                            Left.security = data.msg; //获取验证码;
                            Left.countDown(Left.obtain_code);
                        } else {
                            //验证这里的this的作用域
                            $(this).removeClass('sending').prop('disabled', false);
                        }
                    })
            });
            this.confirm_code.on('blur', function() {
                var content = $(this).val();
                if (content == '' || content == null) {
                    prompt.changeInfo('验证码不能为空');
                    _this.confirm_code.addClass('error');
                } else {
                    _this.confirm_code.attr('data-iden', '1');
                    _this.confirm_code.removeClass('error');
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
            this.change_btn.on('click', function() {
                let name = $('.ps-input .name').val().trim(),
                    phone = _this.phone.val().trim(),
                    email = _this.email.val().trim(),
                    flag = 0,
                    ele = $('.change-info .name,.change-info .phone,.change-info .confir-code,.change-info .email');
                for (let i = 0; i < ele.length; i++) {
                    if (ele.eq(i).attr('data-iden') == 1) {} else {
                        flag++;
                    }
                }
                if (flag === 0) {
                    $.ajax({
                        url: Pathurl.changeInfo,
                        type: 'POST',
                        dataType: 'JSON',
                        contentType: "application/json",
                        data: JSON.stringify({
                            name: name,
                            email: email
                        }),
                        beforeSend: function() {
                            _this.change_btn.addClass('sending');
                        },
                        success: function(data) {
                            if (data.success) {
                                prompt.changeInfo('信息修改成功,请重新登录!')
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
    }
    Left.init();
    var Modal = {
        pay: $('.paying'), //订单支付模态框
        close: $('.close'), //关闭btn
        paying_btn: $('.paying-btn button'), //支付button
        all_num: $('.order-num'), //获取所有的未处理订单        
        deleteOrder: function($target) {
            var parent_li = $target.parents('li'),
                orderId = $target.attr('data-order'),
                signal = false;
            //?这里需要确认订单信息
            /*
             * val.order 是订单编号
             */
            $.ajax({
                    url: Pathurl.delteOrd,
                    type: "POST",
                    contentType: 'application/json',
                    data: {
                        orderId: orderId
                    }
                })
                .then((data) => {
                    if (data.success) {
                        parent_li.detach();
                        Iscroll.forEach(function(val) {
                            val.refresh();
                        });
                    } else {
                        prompt.changeInfo("您的网络又问题，请重新删除~");

                    }
                })
        },
        checkOrder: function() {
            var num = this.pay.attr('data-num'), //获取订单号
                order = ''; //当前处理订单元素               
            $.ajax({
                url: Pathurl,
                data: {
                    num: num
                },
                success: function(data) {
                    if (data.success) {
                        prompt.changeInfo('您的支付成功，请稍等订单消息~~');
                        setTimeout(function() {
                            window.location.href = "./"; //刷新页面
                        }, 1000);
                    } else {
                        prompt.changeInfo('sorry~~您的订单支付不成功，请重新支付');
                    }

                }
            });
        },
        init: function() {
            var _this = this;
            $('.paying-btn button,.close').on('click', () => {
                window.location.href = "./orders"; //刷新页面
            })
        }
    }
    Modal.init();
})
