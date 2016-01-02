'use strict';

define(['jquery', 'encryption'], function ($, Encryption) {

    var Pathurl = {
        login: Encryption.Encryption('../index.php/api/login'),
        sigin: Encryption.Encryption('../index.php/api/signup'),
        Linklogin: '', //以QQ方式登录
        username: Encryption.Encryption('../index.php/api/verifySmsCode'), //验证用户名的url
        CF_url: Encryption.Encryption('../index.php/api/sendSmsCode'), //验证码发送的url
        upload: '', //上传文件的地址
        logout: Encryption.Encryption('../index.php/api/logout')
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
                        'ps': ps,
                        'iden': iden
                    },
                    success: function success(data) {
                        if (data.success) {
                            console.log(data.success);
                            window.location.href = '/';
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
                            data = JSON.parse(data);
                            if (data.success) window.location.href = './';
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
});