'use strict';

require.config({
    baseUrl: './js',
    paths: {
        'jquery': 'lib/jQuery',
        'scroll': 'entry/function/scroll', //滚动条插件
        'modal': 'lib/jquery.simplemodal', //模态框插件
        'utility': 'entry/utility/utility', //基本工具函数
        'prompt': 'entry/function/prompt', //提示模块
        'enroll': 'entry/function/enroll', //注册模块
        'SMS': 'https://cdn1.lncld.net/static/js/av-mini-0.6.1.js', //短信模块
        'md5': "lib/spark-md5.min",
        'encryption': "entry/function/encryption"
    }
});
require(['jquery', 'scroll', 'modal', 'prompt', 'enroll', 'encryption', 'utility'], function ($, scroll, modal, prompt, enroll, Encryption) {

    var scroll = new scroll.ScrollPage(),
        prompt = new prompt.Prompt({
        prompt: $('.prompt')
    });
    $.ajaxSetup({ //设置全局变量
        dataType: "JSON"
    });
    $("#down-arrow").on('click', function () {
        scroll.moveDown();
    });
    $('.back-top').on('click', function () {
        scroll.moveUp();
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

    var login_frame = $("#login-frame"),
        signin_frame = $("#signin-frame");
    $('body').on('click', function (event) {
        var $target = $(event.target),
            _parent = $target.parent();
        if ($target.hasClass('login-btn')) {
            detectShow(login_frame, true);
            Enroll.init();
        } else if ($target.hasClass('signin-btn')) {
            detectShow(signin_frame, true);
            Enroll.init();
        } else if ($target.hasClass('user-login')) {
            toggleActive($target, 'active');
        }
        /*
         * 修改登录样式,切换到打印店登录
         */
        else if ($target.hasClass('store-login')) {
                toggleActive($target, 'active');
            } else if (_parent.hasClass('store-login')) {
                toggleActive(_parent, 'active');
            }
            /*
             * 修改登录样式,切换到用户登录
             */
            else if ($target.hasClass('user-login')) {
                    toggleActive($target, 'active');
                } else if (_parent.hasClass('user-login')) {
                    toggleActive(_parent, 'active');
                }
    });
    /*
     * 切换active,以及去掉siblings的active
     */
    function toggleActive($target, classname) {
        $target.addClass(classname).siblings().removeClass(classname);
    }
    $('.user-login,.store-login').on('click', function () {
        toggleActive($(this), 'active');
    });
    //发送路径的url地址

    var Pathurl = {
        login: Encryption.Encryption('index.php/api/login'),
        sigin: Encryption.Encryption('index.php/api/signup'),
        Linklogin: '', //以QQ方式登录
        username: Encryption.Encryption('index.php/api/verifySmsCode'), //验证用户名的url
        CF_url: Encryption.Encryption('index.php/api/sendSmsCode'), //验证码发送的url
        upload: 'http://www.99dayin.com/user/upload', //上传文件的地址
        logout: Encryption.Encryption('index.php/api/logout')
    };
    var login = {
        $username: $('.login-account'),
        $ps: $('.login-ps'),
        $iden: $('.login-choice>div.active'), //不同的登录方式
        title: $('.title-btn'), //获取title-btn如果点击用户名则显示相应的信息
        detail: $('.detail-btn'), //获得个人信息列表
        print_btn: $('.print-btn'), //打印按钮
        getText: function getText($target) {
            return $target.val();
        },
        /*
         * 检验用户以哪种方式登录
         * 0为用户登录
         * 1为打印店登录
         */
        getIden: function getIden() {
            var active = this.$iden;
            if (active.hasClass('user-login')) {
                return 0;
            } else {
                return 1;
            }
        },
        linkSuccess: function linkSuccess(data) {
            if (data.success) {
                //登录成功
            } else {
                    //登录失败
                }
        },
        afterLogin: function afterLogin(name) {
            this.print_btn.attr('href', Pathurl.upload);
            this.title.html('<a class="name">' + name + '/a>');
        },
        beforeLogin: function beforeLogin() {
            this.print_btn.attr('href', "javascript:void(0)");
            this.title.html('<span class="login" id="login" data-content="登录">登录</span><span>|</span><span class="signin" id="signin" data-content="注册">注册</span>');
        },
        init: function init() {
            var _this = this;
            $('body').on('click', function (e) {
                var $target = $(e.target);
                if ($target.attr('id') == 'confirm-btn') {
                    var username = _this.getText(_this.$username),
                        ps = _this.getText(_this.$ps),
                        iden = _this.getIden();
                    prompt.showInfo("正在登录");
                    $.ajax({
                        url: Pathurl.login,
                        type: "POST",
                        contentType: "application/json",
                        dataType: 'json',
                        data: JSON.stringify({
                            'username': username,
                            'password': ps
                        }),
                        beforeSend: function beforeSend() {
                            $target.addClass('disabled').prop('disabled', true);
                        },
                        success: function success(data) {
                            if (data.success) {
                                window.location.href = './';
                            } else {
                                prompt.changeInfo(data.msg);
                                $target.removeClass('disabled').prop('disabled', false);
                            }
                        }
                    });
                } else if ($target.hasClass('.QQ-login')) {
                    sendAjax({
                        url: Pathurl.Linklogin,
                        data: {
                            'login_method': 'QQ'
                        },
                        success: _this.linkSuccess
                    });
                }
            });

            this.title.on('click', function (e) {
                var $target = $(e.target);
                if ($target.hasClass('name')) {
                    toggleShow(_this.detail);
                } else if ($target.hasClass('login')) {
                    detectShow(login_frame, true);
                } else if ($target.hasClass('signin')) {
                    detectShow(signin_frame, false);
                    Enroll.init();
                }
            });
            this.detail.on('click', function (e) {
                var $target = $(e.target);
                if ($target.hasClass('logout')) {
                    sendAjax({
                        url: Pathurl.logout,
                        success: function success(data) {
                            if (data.success) window.location.href = './';
                            // window.open = './';
                        }
                    });
                }
            });
            this.print_btn.on('click', function () {
                if ($(this).attr('data-log') == 0) {
                    detectShow(login_frame, true);
                }
            });
        }
    };
    login.init();
    // prompt.changeInfo("123");
    //验证信息的正则表达式和对应的信息
    var username_reg = [/^[\u4e00-\u9fa5A-Za-z0-9-_]*$/, /^[\u4e00-\u9fa5A-Za-z0-9-_]{2,12}$/],
        username_msg = ['用户名只能输入中英文，数字，下划线和减号!', '用户名输入长度只能在4~12位!'],
        pwd_reg = [/^(([a-z]+[\w]*[0-9]+)|([0-9]+[\w]*[a-z]+))[a-z0-9]*$/i],
        pwd_msg = ['密码长度在6-20位，且必须包含数字和字母~', '密码长度在6-20位，且必须包含数字和字母~'],
        phone_reg = [/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/],
        phone_msg = ['请输入正确手机号!'],
        college_reg = [/^[\u4e00-\u9fa5]{0,}$/],
        college_msg = ['输入不能包含非法字符!'];
    var Enroll = {
        $username: $('.username'), //用户名
        $pwd: $('.ps'), //密码
        $CF_pwd: $('.confir-ps'), //再次输入密码
        $phone: $('.phone'), //手机号
        $security_code: $('.secu-code'), //验证码
        $college: $('.college'), //学校
        $enroll_btn: $('.enroll'), //确认注册按钮
        $confir_btn: $('.comfir-btn'), //发送验证码button
        CF_code: '', //验证码

        //绑定事件，验证输入框的正确性
        addDetect: function addDetect() {
            var _this = this;
            this.$username.enroll({
                reg: username_reg,
                msg: username_msg
            });

            this.$pwd.enroll({
                reg: pwd_reg,
                msg: pwd_msg
            });
            this.$phone.enroll({
                reg: phone_reg,
                msg: phone_msg
            });
            this.$CF_pwd.inputFocus(). //inputFocus用来改变当聚焦在input框上的样式
            on('blur', function () {
                //触发blur事件，用来检验两次密码输入是否一致
                var ps1 = _this.$pwd.val(),
                    ps2 = $(this).val();
                if (ps1 !== ps2) {
                    prompt.changeInfo('两次密码输入不一致!');
                    $(this).addClass('error');
                    $(this).attr('data-iden', '0');
                } else {
                    $(this).removeClass('error');
                    $(this).attr('data-iden', '1');
                }
            });
            //发送验证码...
            $('.comfir-btn').on('click', function () {
                var $this = $(this),
                    phone = _this.$phone.val();
                if (phone == "" || phone == null) {
                    prompt.changeInfo("请先输入手机号");
                    return;
                } else if (!phone_reg[0].test(phone)) {
                    prompt.changeInfo("手机号输入不正确!");
                    return;
                }
                sendAjax({
                    url: Pathurl.CF_url,
                    data: {
                        "phone": phone
                    },
                    beforeSend: function beforeSend() {
                        $this.addClass('sending').attr('disabled', 'disabled'); //添加发送状态
                    },
                    success: function success(data) {
                        //检查验证码的输入的正确性
                        if (data.success) {
                            prompt.changeInfo(data.msg);
                        } else {
                            $this.removeClass('sending').removeAttr('disabled', 'disabled'); //删除发送状态
                        }
                    }
                });
            });
        },
        send: function send() {
            var _this = this;
            this.$enroll_btn.on('click', function () {
                var sign = [],
                    username = _this.$username.val(),
                    pwd = _this.$pwd.val(),
                    phone = _this.$phone.val(),
                    college = _this.$college.val(),
                    code = _this.$security_code.val();
                if (code == '' || code === null) {
                    prompt.changeInfo('验证码输入不能为空!');
                    return false;
                }
                _this.$enroll_btn.parents('.register').find('.username,.ps,.confir-ps,.phone,.college,.enroll').each(function () {
                    sign.push($(this).attr('data-iden')); //获取标识                  
                });
                for (var i = 0; i < sign.length; i++) {
                    if (sign[i] == 0) {
                        prompt.changeInfo('信息未填写完整!');
                        return false;
                    }
                };
                //发送数据
                $.ajax({
                    url: Pathurl.sigin,
                    type: 'POST',
                    data: {
                        'username': username,
                        'password': pwd,
                        'phone': phone,
                        'college': college
                    }
                }).then(function (data) {
                    if (data.success) {
                        return true;
                    } else {
                        prompt.changeInfo(data.msg);
                        _this.$enroll_btn.addClass("").prop("disabled", false);
                        return false;
                    }
                }).then(function (flag) {
                    if (flag) {
                        $.ajax({
                            url: Pathurl.username,
                            type: 'POST',
                            contentType: "application/json",
                            dataType: "json",
                            data: JSON.stringify({
                                phone: phone, //手机号
                                smsCode: code // 验证码
                            }),
                            beforeSend: function beforeSend() {
                                _this.$enroll_btn.addClass("").prop("disabled", true);
                            }
                        }).done(function (data) {
                            if (data.success) {
                                $(this).removeClass('error');
                                $(this).attr('data-iden', 1);
                                window.location.href = "./";
                            } else {
                                _this.$enroll_btn.addClass("").prop("disabled", false);
                                prompt.changeInfo("验证码输入错误!");
                            }
                        });
                    }
                });
            });
        },
        init: function init() {
            this.addDetect();
            this.send();
        }
    };
    // Enroll.init();
    //发短信验证
    // AV.initialize('wL9slmcVqycA5k9J6wUy8U4Q', 'IRQRmm0slTOsGDH9QKd2qnhF');
    // var TestObject = AV.Object.extend('TestObject');
    // var testObject = new TestObject();
    // testObject.save({
    //   foo: 'bar'
    // }, {
    //   success: function(object) {
    //     alert('LeanCloud works!');
    //   }
    // });
});