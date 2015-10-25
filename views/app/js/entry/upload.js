require.config({
    baseUrl: './js',
    paths: {
        'jquery': 'lib/jQuery',
        'iscroll': 'lib/iscroll',
        'modal': 'lib/jquery.simplemodal',
        'prompt': 'entry/function/prompt', //提示模块
        'utility': 'entry/utility/utility', //基本工具函数
        'header': 'entry/header'
    }
});
"use strict";
require(['jquery', 'iscroll', 'prompt', 'utility', 'header'], function($, iscroll, prompt) {
    function moveBlock($target, location) {
        $target.css('transform', 'translateX(' + location + 'px)');
    }

    function changeClass($target, classname) {
        $target.addClass(classname).siblings().removeClass(classname);
    }
    /*
     * 使first fadeIN, second fadeOut
     */
    function toggleContent($first, $second) {
        $first.show();
        $second.hide();
    }

    function process(url, opts) {
        var xhr = new XMLHttpRequest(),
            def = $.Deferred(),
            $upload = $('.upload'); //上传按钮
        xhr.open('POST', url, true);
        xhr.upload.onprogress = function(e) { //处理进度条事件 
            $upload.addClass('pending')
            .prop('disabled',true);
            if (e.lengthComputable) { //表示
                var num = (e.loaded / e.total) * 100
                if(num>=100){
                    def.resolve();
                }
                prompt.changeInfo(num.toFixed(2)+'%');
            }
        };
        def.done(function(e) {
            prompt.changeInfo('上传成功！');
            var ID = $('.name').text(); //用户ID
            $.ajax({
                    url: Pathurl.confirm,
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        username: ID,
                        filename: opts.name
                    }
                })
                .done(function(data) {   
                    $upload.removeClass('pending')
                    .prop('disabled',false);
                    if (data.success) {
                       opts.successFn();
                    } else {
                        prompt.changeInfo('上传失败!');
                    }
                })

        });
        xhr.send(opts.form);
    }

    function refresh() {
        Iscroll.forEach(function(val) {
            setTimeout(function() {
                val.refresh();
            }, 100);
        });
    }
    //初始化提示模块
    prompt = new prompt.Prompt({
        prompt: $('.prompt')
    });
    $.ajaxSetup({
        dataType: 'json'
    })
    var Pathurl = {
            getToken: '../index.php/api/getUploadToken', //得到上传口令
            getOfficial: '', //得到文库数据
            pay: '', //去支付
            search: '', //搜索
            confirm: '../index.php/api/uploadACK', //上传成功后的给后台发送验证
            remove: '../index.php/api/deleteCartItem' //删除购物车
        }
        /*
         * 检查id是否和传入的一致
         */

    $(".fn-choice").on('click', function(e) {
            var $target = $(e.target),
                _id = $target.attr('id'),
                $block = $('.color-block'),
                $base = $('#choose-base'), //文库选择显示的内容
                $file = $('#file-content'); //上传文件显示的内容
            if (_id === "upolad-files") {
                //选中上传文件的btn
                changeClass($target, 'active');
                moveBlock($block, 0);
                toggleContent($file, $base);
            } else if (_id === "base-choose") {
                //选中文库选择btn
                changeClass($target, 'active');
                moveBlock($block, 169);
                toggleContent($base, $file);
            }
        })
        //显示前去结算btn
    $('.shopping-btn').on('click', function(event) {
        var $target = $(event.target),
            _id = $target.attr('id'),
            $scroll = $('.scroll-frame');
        $scroll.show();
        if (_id === "show-shopping") {
            moveBlock($scroll, 0);
        } else if (_id === "show-store") {
            moveBlock($scroll, -141);
        }
    })

    /*
     * 自定义参数实现绑定滚动条
     */
    function bindScroll($target) {
        var arr = new Array();
        $target.each(function() {
            var iscroll = new IScroll('#' + $(this).attr('id'), {
                scrollbars: true,
                mouseWheel: true,
                interactiveScrollbars: true,
                shrinkScrollbars: 'scale',
                // fadeScrollbars: true,
                useTransition: true
            });
            arr.push(iscroll);
        })
        return arr;
    }
    //绑定打印车内容滚动条
    var Iscroll = bindScroll($('.container'));

    var upload = {
        $upload: $('#file-upload'),
        format: /\.(txt|doc|ppt|docx|wps|rtf|pdf|xls)$/,
        content_a: $('.container-upload'), //包裹input的a标签
        maxLength: 20, //最大上传文件数目
        shopping: $('.files-content'), //购物车
        addBtn: $('.article-content'), //文库里面的添加btn
        delete_btn: $('#scroller'), //删除Btn的ul
        /*
         * 用来存放数据
         * 一个obj包含一个文件
         * name : 文件名
         * content: 文件file
         * date:上传日期
         * size: 上传大小
         */
        filesArray: new Array(), //用户自己上传的文件
        official: new Array(), //用户挑选官方提供的文件

        init: function() {
            var modify = [1], //用来表示唯一性
                copy = [],
                _this = this;
            this.$upload.on('change', function(e) {
                var files = this.files;
                copy = [],
                    form = [];
                for (var i = 0; i < files.length; i++) {
                    form.push(new FormData());
                }
                for (var i = 0; i < files.length; i++) {
                    if (!_this.format.test(files[i].name)) {
                        prompt.changeInfo("只能上传文档文件!");
                        return false;
                    }
                    //处理上传时间
                    var file_date = new Date(),
                        date = file_date.getFullYear() + '/' + (file_date.getMonth() + 1) + '/' + file_date.getDate(),
                        size = Number(files[i].size / (1024 * 1024)).toFixed(2) + 'MB',
                        survive = false;
                    for (var j = 0; j < modify.length; j++) {
                        var flag = files[i].lastModified;

                        if (flag !== modify[j]) {
                            survive = true;
                        } else {
                            survive = false;
                            break;
                        }

                    }
                    //如果不重复则添加文件 
                    if (survive) {
                        var Data = {
                            'name': files[i].name.substring(0, files[i].name.indexOf('.')),
                            'content': files[i],
                            'date': date,
                            'size': size,
                            'area': 'self', //自己上传的文件还是官方文库的文件
                            'mark': flag, //表示文件唯一性
                            'type': files[i].name.substring(files[i].name.indexOf('.') + 1) //文件类型
                        }
                        _this.filesArray.push(Data);
                        copy.push(flag);

                        form[i].append('file', files[i]);
                        form[i].append('key', files[i].name);
                        console.log(form[i]);
                        (function(form, name, file) {
                            $.ajax({
                                url: Pathurl.getToken //得到getToken的地址
                            }).done(function(data) {
                                //发送文件                                    
                                if (data.success) {
                                    form.append('token', data.msg);
                                    var obj = {
                                        form: form,
                                        name:name,
                                        successFn: function() {
                                            _this.addFiles(file, date, size, data.msg);
                                            _this.changeInputText(1);
                                            prompt.changeInfo('上传成功!');
                                        }
                                    }
                                    process('http://up.qiniu.com', obj);
                                    // $.ajax({
                                    //     url: 'http://up.qiniu.com',
                                    //     type: 'POST',
                                    //     data: form,
                                    //     processData: false,
                                    //     contentType: false
                                    // })
                                    // .done(function(data) {
                                    //     var ID = $('.name').text(); //用户ID
                                    //     $.ajax({
                                    //         url: Pathurl.confirm,
                                    //         type: 'POST',
                                    //         dataType:'json',
                                    //         data: {
                                    //             username: ID,
                                    //             filename: name
                                    //         }    
                                    //     })                                        
                                    //     .done(function(data){
                                    //         console.log(data);
                                    //         if(data.success){
                                    //             _this.addFiles(file, date, size,data.msg);
                                    //             _this.changeInputText(1);
                                    //             prompt.changeInfo('上传成功!');
                                    //         }else{
                                    //             prompt.changeInfo('上传失败!');
                                    //         }
                                    //     })
                                    // })
                                } else {
                                    prompt.changeInfo('网络问题,请重新上传!');
                                }
                            })
                        })(form[i], files[i].name, files[i]);

                    }
                }
                console.log(copy);
                modify = modify.concat(copy);
                if (modify.length - 1 > 20) {
                    prompt.changeInfo('应少于20个文件！');
                    modify = modify.slice(0, 21);
                    //输出提示
                }
                //修改购物车

            });

            this.addBtn.on('click', function(e) {
                var $target = $(e.target);
                if ($target.hasClass('add-btn')) {
                    var data_area = $target.attr('data-area'),
                        data_mark = $target.attr('data-mark'),
                        $parent = $target.parents('.article-item'),
                        li = document.createElement('li');
                    //将文库改为已添加
                    Base.alreadyAdd($target);
                    _this.official.push({
                        'area': data_area, //文件的位置
                        'mark': data_mark //表示文件唯一性
                    });
                    li.innerHTML = $parent.html().replace('already-add', 'logo-error');
                    _this.shopping.append(li);
                    //刷新滚动条
                    refresh();
                    //然后就没了，最后添加 '前去结算' 的时候将数组发给后台，然后让他请求数据
                }
            })
            this.delete_btn.on('click', function(e) {
                var $target = $(e.target);
                if ($target.hasClass('logo-error')) {
                    _this.deleteItem($target, modify);
                }
            });
        },
        changeInputText: function(amount) {
            var num = Number(this.content_a.attr('data-num'));
            this.content_a.attr('data-num', num + amount);
        },
        addFiles: function(file, date, size, mark) {
            var name = file.name.toLowerCase(),
                index = name.indexOf('.'),
                mark = mark;
            li = document.createElement('li'),
                className = '';
            switch (name.substring(index + 1)) {
                case 'doc':
                    className = 'logo-word';
                    break;
                case 'docx':
                    className = 'logo-word';
                    break;
                case 'ppt':
                    className = 'logo-ppt';
                    break;
                case 'pdf':
                    className = 'logo-pdf';
                    break;
                case 'xls':
                    className = 'logo-excel';
                    break;
                default:
                    className = 'logo-ppt';
            }
            li.innerHTML = '<i class="file-logo ' + className + '"></i>' +
                '<p class="file-header">' + name.substring(0, index) + '</p>' +
                '<p>上传时间:<span class="upload-time">' + date + '</span>' +
                '大小:<span>' + size + '</span></p>' +
                '<i class="logo-error" data-mark=' + mark + ' data-area=self></i>';
            $(li).attr('data-type', className);
            this.shopping.append(li);
            //刷新滚动条
            Iscroll.forEach(function(val) {
                setTimeout(function() {
                    val.refresh();
                }, 100);
            })
        },
        //找到specified item并且删除
        findIndex: function(arr, mark) {
            var loca = null;
            refresh(); //这里的refresh可以去掉，只是给死数据刷新                    
            if (arr.length === 0) {
                return false;
            };
            arr.forEach(function(val, index) {
                if (val.mark === mark) {
                    loca = index;
                }
            });
            arr.splice(loca, 1);
            refresh();

        },
        deleteItem: function($target, modify) {
            var li = $target.parents('li'),
                mark = $target.attr('data-mark'),
                area = $target.attr('data-area'),
                loca = null,
                _this = this;
            for (var i = 0; i < modify.length; i++) {
                if (modify[i] === mark) {
                    loca = i;
                    break;
                }
            }
            if (loca) {
                modify.splice(loca, 1);
            }
            if (area === 'self') {
                this.findIndex(this.filesArray, mark);
            } else {
                this.findIndex(this.official, mark);
            }
            console.log(mark);
            $.ajax({
                url: Pathurl.remove,
                type: 'POST',
                data: {
                    mark: mark
                }
            }).then(function(data) {
                if (data.success) {
                    prompt.changeInfo('删除成功!');
                    error.removeLi(li); //删除指定元素
                    console.log(li);
                    _this.changeInputText(-1);
                } else {
                    prompt.changeInfo('删除失败!');
                }
            })
        }
    }
    upload.init();
    /*
     * 定义购物车出现移除icon的操作
     */
    var error = {
        showError: function($target) {
            $target.find('.logo-error').show();
        },
        hideError: function($target) {
            $target.find('.logo-error').hide();
        },
        removeLi: function($target) {
            $target.detach();
        }
    }
    $('.files-content').on({
            //鼠标悬浮显示对应的li元素
            mouseover: function(e) {
                var $target = e.target.tagName === "LI" ? $(e.target) : $(e.target).parents('li');
                error.showError($target);
            },
            // 鼠标移开隐藏对应的li元素
            mouseout: function(e) {
                var $target = e.target.tagName === "LI" ? $(e.target) : $(e.target).parents('li');
                error.hideError($target);
            }
        })
        //购物车
    var shopping = {
        arrow: '',
        store: $('#store'),
        //改变下拉箭头
        downArrow: function() {
            this.arrow.removeClass('shopping-uparrow').addClass('shopping-downarrow');
            this.moveUpStore();
        },
        //改为上拉箭头
        upArrow: function() {
            this.arrow.removeClass('shopping-downarrow').addClass('shopping-uparrow');
            this.moveDownStore();
        },
        //上拉购物车
        moveUpStore: function() {
            this.store.css('transform', 'translateY(' + -347 + 'px)');
        },
        //隐藏购物车
        moveDownStore: function() {
            this.store.css('transform', 'translateY(' + 0 + 'px)');
        },
        //判断箭头方向，执行对应的函数
        judgeDir: function($arrow) {
            this.arrow = $arrow;
            var _arrow = $arrow;
            if (_arrow.hasClass('shopping-uparrow')) {
                this.downArrow();
            } else if (_arrow.hasClass('shopping-downarrow')) {
                this.upArrow();
            }
        }
    };
    $('#shopping-arrow').on('click', function() {
        shopping.judgeDir($(this));
    });
    /*
     * 处理文库信息
     */
    var Base = {
            content: $('#article-content'), //文库推荐内容
            changeGroup: $('#another-group'), //换一组btn
            articles: $('.articles'), //获取文库的内容框,有3个
            //点击文库选中某一item的添加btn时，切换为已添加
            alreadyAdd: function($target) {
                $target.removeClass('add-btn').addClass('already-add');
            },
            //当在购物车中删除文库的btn时，切换为未添加
            addBtn: function($target) {
                $target.removeClass('add-btn').addClass('already-add');
            },
            //移动推荐内容
            changeContent: function(order) {
                var translateX = 0; //设置初始移动位置
                switch (order) {
                    case 1:
                        translateX = 0;
                        break;
                    case 2:
                        translateX = -821.84;
                        break;
                    case 3:
                        translateX = -1643.968;
                        break;
                }
                moveBlock(this.content, translateX);
            },
            /*
             * 切换文库列表的mark-btns
             * 添加或者删除选中效果
             */
            toggleActive: function(e) {
                var $target = $(e.target),
                    _order;
                if ($target[0].tagName === "I") {
                    _order = Number($target.attr('data-order'));
                    //根据order的不同显示不同页面的文库推荐
                    this.changeContent(_order);
                    changeClass($target, 'active');
                }
            },
            addItem: function(article, file) {
                console.log(article);
                console.log(file);
                var item = document.createElement('div'),
                    name = file.name,
                    date = file.date,
                    size = file.size,
                    area = file.area,
                    mark = file.mark,
                    type = file.type,
                    classname = '';
                switch (type) {
                    case 'doc':
                        className = 'logo-word';
                        break;
                    case 'docx':
                        className = 'logo-word';
                        break;
                    case 'ppt':
                        className = 'logo-ppt';
                        break;
                    case 'pdf':
                        className = 'logo-pdf';
                        break;
                    case 'xls':
                        className = 'logo-excel';
                        break;
                    default:
                        className = 'logo-ppt';
                }
                html = '<i class="file-logo ' + className + '"></i>' +
                    '<p class="file-header">' + name + '</p>' +
                    '<p>上传时间:<span class="upload-time">' + date + '</span>' +
                    '大小:<span>' + size + '</span></p>' +
                    '<i class="add-btn" data-mark=' + mark + '" data-area="' + area + '"></i>';
                item.innerHTML = html;
                $(item).addClass('article-item');
                article.append(item); //添加子元素

            },
            repeatAdd: function(files, unit) {
                var start = 0;
                for (var count = 0; count < 3; count++) {
                    this.articles.eq(count)[0].innerHTML = ''; //清空里面的数据
                    for (var i = start; i < start + unit; i++) {
                        this.addItem(this.articles.eq(count), files[i]); //添加文件                        
                    }
                    start += unit;
                }
            },
            /*
             * 换一组得到数据...
             */
            init: function() {
                var _this = this;
                this.changeGroup.on('click', function() {
                    //测试数据
                    // var files =  upload.filesArray,
                    //     len = files.length,
                    //     unit = Math.floor(len / 3); //每组长度

                    // _this.repeatAdd(files,unit);
                    sendAjax({
                        url: Pathurl.getOfficial,
                        success: function(data) {
                            //这里的数据需要有:
                            //data是josn 里面有 success,和files
                            //files的上限个数为24个
                            /*
                             * name  文件名
                             * date  上传日期
                             * size  文件大小
                             * area  文件位置
                             * mark  文件唯一性标识
                             * type  文件类型比如doc,docx等.
                             */
                            if (data.success) {
                                var files = data.files,
                                    len = files.length,
                                    unit = Math.floor(len / 3); //每组长度
                                _this.repeatAdd(files, unit);
                            }

                        }
                    })
                });
            }

        }
        //在文库添加时，点击添加，改为已添加.
    Base.init();

    //改变"官方文库" 和 "共享文库" btn选中的效果
    $('#base-header').on('click', function(e) {
        var $target = $(e.target);
        if ($target[0].tagName === "BUTTON") {

            changeClass($target, 'active');
        }
    });
    $('#pagination').on({
        /*
         * 切换文库列表的mark-btns
         * 添加选中效果
         */
        mouseover: function(e) {
            Base.toggleActive(e);
        },
        /*
         * 切换文库列表的mark-btns
         * 删除选中效果
         */
        mouseout: function(e) {
            Base.toggleActive(e);
        }
    });
    /*
     * 前去支付按钮btn
     */
    var Pay = {
        pay_btn: $('#show-shopping'), //前去结算按钮
        init: function() {
            var upload_modify = [];
            upload.filesArray.forEach(function(val) {
                upload_modify.push(val.mark);
            });
            upload.official.forEach(function(val) {
                upload_modify.push(val.mark);
            })
            this.pay_btn.on('click', function() {
                var order_num =Number($('.container-upload').attr('data-num'));
                if(order_num===0){
                        prompt.changeInfo('购物车为0,不能结算!');
                    }else if(order_num>0){
                        window.location.href ='./confirm';
                    }
                });
        }
    }
    Pay.init();
    /*
     * 搜索框
     */
    var Search = {
        search: $('#search'), //搜索框
        init: function() {
            this.search.on('keyup', function(e) {
                var code = e.which,
                    val = $(this).val();
                if (code === 13) {
                    //如果开始搜索,则向服务端请求数据,最多只有24条信息
                    sendAjax({
                        url: Pathurl.search,
                        data: {
                            "search": val
                        },
                        success: function(data) {
                            /*
                             * 返回的data有 data.success || data.files
                             */
                            if (data.success) {
                                //向下面的展示框填入数据
                                var files = data.files,
                                    len = files.length,
                                    unit = Math.floor(len / 3); //每组长度
                                Base.repeatAdd(files, unit);
                            } else {
                                prompt.changeInfo('对不起您的浏览器抽风了!');
                            }
                        }
                    })
                }
            })
        }
    }
    Search.init();
    
})