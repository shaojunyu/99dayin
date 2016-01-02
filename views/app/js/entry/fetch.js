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
        'encryption': "entry/function/encryption",
        'validate': "entry/function/validate" //验证信息
    }
})
require(['jquery', 'validate', 'encryption', 'prompt', 'utility'], function($, validate, Encryption, prompt) {
    var prompt = new prompt.Prompt({ //定义提示信息
        prompt: $('.prompt')
    });
    var Pathurl = {
        CF_url: Encryption.Encryption('index.php/api/sendSmsCode'), //获取验证码地址
        upload: 'http://www.99dayin.com/user/upload', //上传文件的地址
        confirm: Encryption.Encryption('./index.php/api/resetPassword'), //验证用户名和手机号是否正确
        username: Encryption.Encryption('index.php/api/verifySmsCode'), //验证用户名的url

    }
    var confirm = {
        // userName: $('.username'), //用户名
        phone: $('.phone'), //手机号
        code: $('.CF-code'), //验证码
        newPs: $('.newPs'), //新密码
        confBth: $('.confirm-btn'), //提交按钮
        init: function() {
            var _this = this;
            $('.getCode').on('click', function() {
                var $this = $(this),
                    phone = _this.phone.val().trim();
                var result = validate.val({
                    rule: "isPhone",
                    value: phone
                });
                if (!result.flag) {
                    prompt.changeInfo(result.instructions);
                    return;
                }
                sendAjax({
                    url: Pathurl.CF_url,
                    data: {
                        "phone": phone
                    },
                    beforeSend: function() {
                        $this.addClass('sending').prop('disabled', true); //添加发送状态
                    },
                    success: function(data) {
                        data = JSON.parse(data);
                        //验证验证码
                        if (data.success) {
                            prompt.changeInfo(data.msg);
                        } else {
                            $this.removeClass('sending').prop('disabled', false); //删除发送状态
                        }
                    }
                })
            });
            this.confBth.on('click', function() {
                // var userName = confirm.userName.val().trim(), //用户名
                var phone = confirm.phone.val().trim(), //手机号
                    code = confirm.code.val().trim(), //验证码
                    newPs = confirm.newPs.val().trim(), //新密码
                    _this =this;
                var testPhone = validate.val({
                        rule: "isPhone",
                        value: phone
                    }),
                    testPs = validate.val({
                        rule: "isPassword",
                        value: newPs
                    });
                if (!testPhone.flag) {
                    prompt.changeInfo(testPhone.instructions);
                    return;
                } else if (!testPs.flag) {
                    prompt.changeInfo(testPs.instructions);
                    return;
                } else {
                    $(_this).addClass('disabled').prop('disabled',true);  //添加验证状态
                    $.ajax({
                            url: Pathurl.confirm, //验证用户名和手机号是否正确
                            type:"POST",
                            dataType: 'JSON',
                            contentType: 'application/json',
                            data: JSON.stringify({
                                smsCode: code,
                                newPassword:phone
                            })
                        })
                        .then(function(data) { //返回success,msgs
                            if (data.success) {
                                prompt.showInfo("密码修改成功,3s后返回首页");
                                setTimeout(function(){
                                    window.location.href="http://www.99dayin.com";    
                                },3000)
                            } else {
                                prompt.changeInfo(data.msg);
                                $(_this).removeClass('disabled').prop('disabled',false);  //删除发送状态
                                return false;
                            }
                        })
                }
            });
        }
    }
    confirm.init();
})
