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
        } else if ($target.hasClass('signin-btn')) {
            console.log(1);
            detectShow(signin_frame, true);
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
        upload: '', //上传文件的地址
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
            $('.login-btn').on('click', function () {
                var username = _this.getText(_this.$username),
                    ps = _this.getText(_this.$ps),
                    iden = _this.getIden();
                sendAjax({
                    url: Pathurl.login,
                    dataType: 'json',
                    data: {
                        'username': username,
                        'ps': ps
                    },
                    success: function success(data) {
                        if (data.success) {
                            window.location.href = './';
                            console.log(1);
                            // window.open('./');
                        } else {
                                prompt.changeInfo(data.msg);
                            }
                    }
                });
            });
            $('.QQ-login').on('click', function () {
                sendAjax({
                    url: Pathurl.Linklogin,
                    data: {
                        'login_method': 'QQ'
                    },
                    success: _this.linkSuccess
                });
            });
            this.title.on('click', function (e) {
                var $target = $(e.target);
                if ($target.hasClass('name')) {
                    toggleShow(_this.detail);
                } else if ($target.hasClass('login')) {
                    detectShow(login_frame, true);
                } else if ($target.hasClass('signin')) {
                    detectShow(signin_frame, false);
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
    var username_reg = [/^[\u4e00-\u9fa5A-Za-z0-9-_]*$/, /^[\u4e00-\u9fa5A-Za-z0-9-_]{4,12}$/],
        username_msg = ['用户名只能输入中英文，数字，下划线和减号!', '用户名输入长度只能在4~12位!'],
        pwd_reg = [/^[a-zA-Z]\w*$/, /^[a-zA-Z]\w{5,15}$/],
        pwd_msg = ['密码以字母开头，只能包含字母,数字,下划线!', '密码输入长度只能在6~16位!'],
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
        //发送验证码
        sendCode: function sendCode() {},
        checkQR: function checkQR() {
            var _this = this;
            this.$security_code.on('blur', function () {
                var code = $(this).val(),
                    //获取输入验证码的正确性;
                phone = _this.$phone.val();
                $.ajax({
                    url: Pathurl.username,
                    type: 'POST',
                    dataType: "json",
                    contentType: "application/json",
                    data: {
                        mobilePhoneNumber: phone, //手机号
                        smsCode: code // 验证码
                    }
                }).done(function (data) {
                    if (data.success) {
                        $(this).removeClass('error');
                        $(this).attr('data-iden', 1);
                    } else {
                        prompt.changeInfo('验证码输入错误!');
                        $(this).addClass('error');
                        $(this).attr('data-iden', 0);
                    }
                });
            }).inputFocus();
        },
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
            // this.$college.enroll({
            //     reg: college_reg,
            //     msg: college_msg
            // });
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
                        if (data.success) {} else {
                            $this.removeClass('sending').removeAttr('disabled', 'disabled'); //删除发送状态
                            prompt.changeInfo(data.msg);
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
                // if (code == '' || code === null) {
                //     prompt.changeInfo('验证码输入不能为空!');
                //     return false;
                // } else if (code == _this.CF_code) {
                //     $(this).removeClass('error');
                //     $(this).attr('data-iden', '1');
                //     return false;
                // }
                $('.username,.ps,.confir-ps,.phone,.secu-code,.college,.enroll').each(function () {
                    sign.push($(this).attr('data-iden')); //获取标识                  
                });
                for (var i = 0; i < sign.length; i++) {
                    if (sign[i] == 0) {
                        prompt.changeInfo('信息未填写完整!');
                        return false;
                    }
                };
                //发送数据
                sendAjax({
                    url: Pathurl.sigin,
                    data: {
                        'username': username,
                        'password': pwd,
                        'mobilePhoneNumber': phone,
                        'college': college
                    },
                    success: function success(data) {
                        if (data.success) {
                            window.location.href = './';
                        } else {
                            prompt.changeInfo('注册失败!');
                        }
                    }
                });
            });
        },
        init: function init() {
            this.addDetect();
            this.send();
            this.checkQR();
        }
    };
    Enroll.init();
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