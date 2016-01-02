'use strict';

require.config({
    baseUrl: './js',
    paths: {
        'jquery': 'lib/jQuery',
        'scroll': 'lib/iscroll',
        'md5': "lib/spark-md5.min",
        'modal': 'lib/jquery.simplemodal',
        'utility': 'entry/utility/utility',
        'prompt': 'entry/function/prompt', //提示模块
        'encryption': "entry/function/encryption",
        'header': 'entry/header'
    }
});
"use strict";
require(['jquery', 'utility', 'scroll', 'prompt', 'encryption', 'header'], function ($, util, scroll, prompt, Encryption) {
    //初始化提示信息
    var prompt = new prompt.Prompt({
        prompt: $('.prompt')
    });
    //发送的url地址
    var Pathurl = {
        checkout: Encryption.Encryption('../index.php/api/createOrder'), //发送结算信息给后台
        back: '',
        print: Encryption.Encryption('../index.php/api/printSetting'),
        delete: Encryption.Encryption('../index.php/api/deleteCartItem') //删除购物车
    };
    var Iscroll = bindScroll($('.container'));
    //!!!!! FileMarks已经在网页脚本中定义，可以直接获取
    /*
     * FileMarks里面包含的字段有
     * name: 文件名
     * mark: 文件唯一性标识
     * type: 文件类型
     */

    $('.pages').on('select blur', function () {
        // var $tr = $(this).parents("tr"), //找到点击的元素所在的行
        //     $single =(function(){ return Number($tr.find('.single').html())*Number($tr.find('.pages-amount').html())})(), //获取单价
        //     $gross = $tr.find('.gross-price'), //获取总价
        var reg = /^\d+$/,
            pages = $(this).val().trim();
        if (!reg.test(pages)) {
            prompt.changeInfo("输入的份数必须为整数且大于0");
            $(this).val(1);
        } else if (Number(pages) === 0) {
            prompt.changeInfo('小朋友不可以是0哦~~');
            $(this).val(1);
        }
    });
    var Delete_btn = {
        $delete_btns: $('.delete-btns'),
        $tbody: $('tbody'),
        deleteItem: function deleteItem($target) {
            var li = $target.parents('tr'),
                mark = $target.attr('data-mark'),
                _this = this;
            $.ajax({
                url: Pathurl.remove,
                type: 'POST',
                data: {
                    fileMD5: mark
                }
            }).then(function (data) {
                if (data.success) {
                    prompt.changeInfo('删除成功!');
                    li.detach();
                } else {
                    prompt.changeInfo('删除失败!');
                }
            });
        },
        removeRow: function removeRow($target) {
            var decision = confirm("确认删除吗？");
            if (decision) {
                var mark = $target.attr('data-mark'),
                    signal = -1;
                $.ajax({
                    url: Pathurl.delete, //删除goods
                    async: true,
                    type: 'POST',
                    dataType: 'json',
                    contentType: 'application/json',
                    data: JSON.stringify({
                        fileMD5: mark
                    })
                }).done(function () {
                    $target.parents('tr').detach();
                    var orders = $('td[role="order"]');
                    syncInfo.fillGross();
                    orders.each(function (i, val) {
                        orders.eq(i).text(i + 1);
                        console.log(val.innerHTML);
                    });
                    setTimeout(function () {
                        Iscroll.forEach(function (val) {
                            val.refresh();
                        });
                    }, 0);
                }).fail(function () {
                    prompt.changeInfo("删除失败");
                });
            }
        },
        init: function init() {
            var _this = this;
            this.$tbody.on('click', function (e) {
                var $target = $(e.target);
                if ($target.hasClass('delete-btns')) {
                    _this.removeRow($target);
                }
            });
        }
    };
    Delete_btn.init();
    var Operator = {
        $plus: $('.plus'),
        $minus: $('.minus'),
        getInput: function getInput($target) {
            return $target.siblings('input');
        },
        addText: function addText($target) {
            var num = this.getInput($target);
            num.val(Number(num.val()) + 1);
        },
        decrease: function decrease($target) {
            var num = this.getInput($target);
            num.val(Number(num.val()) - 1);
        },
        getResult: function getResult($target) {
            var tr = $target.parents('tr'),
                pages = Number(tr.find('.pages').val()).toFixed(0),
                single_price = Number(tr.find('.single').text()).toFixed(1),
                gross = tr.find('.gross-price');
            gross.text(Number(single_price * pages).toFixed(1));
        },

        init: function init() {
            var _this = this;
            this.$plus.on('click', function () {
                _this.addText($(this));
                Operator.getResult($(this));
            });
            this.$minus.on('click', function () {
                _this.decrease($(this));
                $('.pages').trigger('select');
                Operator.getResult($(this));
            });
        }
    };
    Operator.init();
    //!计算总价
    //结算

    $('input[name="method"]').on('change', function (event) {
        var $pick = $('.pick'),
            $deliver = $('.deliver'),
            method = $(this).val();
        if (method === "到店自取") {
            $pick.show().siblings().hide();
        } else if (method === "送货上门") {
            $deliver.show().siblings().hide();
        }
    });
    var changeList = {
        area: $('.school-area'),
        build: $('.building'),
        init: function init() {
            changeList.list("韵苑");
            this.area.on('change', function () {
                var area = $(this).val();
                changeList.list(area);
            });
        },
        list: function list(area) {
            var html = '';
            switch (area) {//串联样式表
                case "韵苑":
                    for (var i = 1; i <= 28; i++) {
                        html += "<option value=" + i + ">" + i + "</option>";
                    }
                    break;
                case "沁园":
                    for (var i = 9; i <= 13; i++) {
                        html += "<option value=" + i + ">" + i + "</option>";
                    }
                    break;
                case "紫菘":
                    for (var i = 1; i <= 13; i++) {
                        html += "<option value=" + i + ">" + i + "</option>";
                    }
                    break;
                default:
                    for (var i = 1; i <= 28; i++) {
                        html += "<option value=" + i + ">" + i + "</option>";
                    }
            }
            this.build.html(html); //添加节点内容
        }
    };
    changeList.init();
    var PayBill = {
        checkout: $('.clearing'), //结算按钮
        init: function init() {
            var _this = this;
            this.checkout.on('click', function () {
                var _this2 = this;

                //异步发送订单，跳转到个人中心页面
                var method = $('input[name="method"]:checked').val(),
                    totle = $('.total-price').html(),
                    info = {};
                if (method == null || method == '') {
                    prompt.changeInfo("请选择收货方式!");
                } else {
                    if (method === "到店自取") {
                        var store_name = $('.print-shop').val(); //获取打印店名称
                        info = {
                            'shop': store_name, //收货方式
                            'address': '' //打印店
                        };
                    } else {
                            var address = $('.address').val().trim(),
                                //宿舍号
                            area = $('.school-area').val(),
                                //校区
                            build = $('.building').val(); //楼栋
                            if (address == "" || address == null) {
                                prompt.changeInfo("宿舍号不能为空~");
                                return;
                            }
                            info = {
                                'shop': '', //收货方式
                                'address': {
                                    num: address,
                                    area: area,
                                    build: build
                                }
                            };
                        }
                    $(this).addClass('sending').prop('disabled', true); //禁止多次点击结算按钮
                    $.ajax({
                        url: Pathurl.checkout,
                        dataType: 'JSON',
                        contentType: "application/json",
                        type: 'POST',
                        data: JSON.stringify(info)
                    }).then(function (data) {
                        if (data.success) {
                            window.location.href = '../user/orders';
                        } else {
                            prompt.changeInfo(data.msg);
                            $(_this2).removeClass('sending').prop('disabled', false);
                        }
                    });
                }
            });
        }

    };
    PayBill.init();
    // !结算
    //继续上传和文库添加，返回前一页
    $('.upload,.add').on('click', function () {
        window.location.href = './upload'; //返回继续上传页面     
    });

    var syncInfo = {
        table: $('#table'),
        totlePrice: $('.total-price'),
        flag: 0,
        init: function init() {
            this.table.on('click', function (e) {
                var $target = $(e.target),
                    role = $target.attr('data-role'),
                    data = new Object(),
                    $tr = $target.parents('tr'),
                    $single = $tr.find();

                switch (role) {
                    case "page":
                        data = {
                            option: "TwoSides",
                            option_value: syncInfo.getValue($target),
                            fileMD5: syncInfo.Hash($target)
                        }; //获得页码和对应的hash值
                        break;
                    case "direction":
                        data = {
                            option: "direction",
                            option_value: syncInfo.getValue($target),
                            fileMD5: syncInfo.Hash($target)
                        }; //获得打印方向和对应的hash值
                        break;
                    case "ppt-mount":
                        data = {
                            option: "pptPerPage",
                            option_value: $target.val(),
                            fileMD5: syncInfo.Hash($target)
                        }; //获得ppt的打印数量
                        break;
                    case "size":
                        if (syncInfo.flag !== 0) {
                            data = {
                                option: "paperSize",
                                option_value: $target.val(),
                                fileMD5: syncInfo.Hash($target)
                            }; //获得打印纸张的大小
                            syncInfo.flag = 0;
                        } else {
                            syncInfo.flag++;
                        }
                        break;

                    case "copies-btn":
                        data = {
                            option: "amount",
                            option_value: $target.parents('tr').find('.pages').val(),
                            fileMD5: syncInfo.Hash($target)
                        };
                        break;
                }
                if (Object.keys(data).length !== 0) {
                    data = JSON.stringify(data);
                    $.ajax({
                        url: Pathurl.print,
                        dataType: 'JSON',
                        type: 'post',
                        contentType: 'application/json',
                        data: data
                    }).then(function (data) {
                        console.log(data);
                        syncInfo.fillInfo($target, data);
                    });
                }
            });
        },
        bindCopies: function bindCopies() {},
        Hash: function Hash($target) {
            return $target.parents('tr').find('.delete-btns').attr('data-mark');
        },
        getValue: function getValue($target) {
            return $target.attr('value');
        },
        getName: function getName($target) {
            return $target.parents("tr").find('.file-name').html();
        },
        getTr: function getTr($target) {
            return $target.parents('tr');
        },
        fillText: function fillText($target, data) {
            $target.text(data);
        },
        fillInfo: function fillInfo($target, data) {
            var $tr = this.getTr($target),
                single = $tr.find('.single'),
                single_price = single.text();
            gross = $tr.find('.gross-price');
            if (single_price != data.single) {
                this.fillText(single, data.single);
                this.fillText(gross, data.gross);
            }
            this.fillGross(); //计算总价;
        },
        fillGross: function fillGross() {
            var smallGross = this.table.find('.gross-price'),
                sum = 0;
            smallGross.each(function (i) {
                sum += Number(smallGross.eq(i).text());
            });
            console.log(sum);
            this.totlePrice.text(sum.toFixed(1));
        }
    };
    syncInfo.init();
});