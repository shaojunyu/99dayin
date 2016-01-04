"use strict";

define([], function () {
    var validator = {
        types: {
            isEmail: { //邮箱的验证规则
                validate: function validate(value) {
                    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
                    return reg.test(value);
                },
                instructions: "邮箱格式错误"
            },
            isNonEmpty: { //是否为空的验证规则
                validate: function validate(value) {
                    return !(value == "" || value === undefined);
                },
                instructions: "日期不能为空"
            },
            isPassword: { //密码的验证规则
                validate: function validate(value) {
                    if (value.length < 6 || value.length > 21) {
                        return false;
                    }
                    var reg = /^(([a-z]+[\w]*[0-9]+)|([0-9]+[\w]*[a-z]+))[a-z0-9]*$/i;
                    return reg.test(value);
                },
                instructions: "密码长度在6-20位,且必须包含数字和字母"
            },
            isNickname: { //验证昵称的规则
                validate: function validate(value) {
                    if (value.length > 8 || value == "") {
                        return false;
                    }
                    return true;
                },
                instructions: "昵称字符长度要在8个以内"
            },
            isPhone: {
                validate: function validate(value) {
                    var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
                    if (value == "" || value === undefined) {
                        return false;
                    } else {
                        return reg.test(value);
                    }
                },
                instructions: "手机号格式不正确"
            },
            isCode: {
                validate: function validate(value) {
                    var reg = /\d+/;
                    return reg.test(value);
                },
                instructions: "编码必须为数字"
            },
            isEmpty: {
                validate: function validate(value) {
                    if (value == "" || value === undefined) {
                        return false;
                    } else {
                        return true;
                    }
                },
                instructions: "输入不能为空~"
            }
        },
        val: function val(data) {
            var rule = data.rule,
                value = data.value,
                type = this.types[rule];
            if (type.validate(value)) {
                return {
                    flag: true
                };
            } else {
                return {
                    flag: false,
                    instructions: type.instructions
                };
            }
        }
    };
    return validator;
});