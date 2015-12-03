require.config({
    baseUrl: './js',
    paths: {
        'jquery': 'lib/jQuery',
        'iscroll': 'lib/iscroll',
        'modal': 'lib/jquery.simplemodal',
        'prompt': 'entry/function/prompt', //提示模块
        'utility': 'entry/utility/utility', //基本工具函数
        'header': 'entry/header',
        'fileupload': "lib/plupload.full.min",
        'md5': "lib/jquery.md5",
        'encryption': "entry/function/encryption"
    }
});
"use strict";
require(['jquery', 'iscroll', 'prompt', 'encryption', 'fileupload', 'utility', 'header'], function($, iscroll, prompt, Encryption) {

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
    /*
     * 加密算法
     */
    prompt = new prompt.Prompt({
        prompt: $('.prompt')
    });

    function process(url, opts) {
        var xhr = new XMLHttpRequest(),
            def = $.Deferred(),
            $upload = $('.upload'); //上传按钮
        xhr.open('POST', url, true);
        xhr.upload.onprogress = function(e) { //处理进度条事件 
            $upload.addClass('pending')
                .prop('disabled', true);
            if (e.lengthComputable) { //表示
                var num = (e.loaded / e.total) * 100
                if (num >= 100) {
                    def.resolve();
                }
                prompt.changeInfo(num.toFixed(2) + '%');
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
                        .prop('disabled', false);
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

    $.ajaxSetup({
        dataType: 'json'
    })
    var Pathurl = {
        getToken: Encryption.Encryption('../index.php/api/getUploadToken'), //得到上传口令
        getOfficial: '', //得到文库数据
        pay: '', //去支付
        search: '', //搜索
        confirm: Encryption.Encryption('../index.php/api/uploadACK'), //上传成功后的给后台发送验证
        remove: Encryption.Encryption('../index.php/api/deleteCartItem') //删除购物车
    };
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
    });
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
    // let upload = {
    //     filesArray: [],
    //     official: [],
    //     format: /\.(doc|ppt|docx|pdf|pptx)$/,
    //     content_a: $('.container-upload'), //包裹input的a标签
    //     maxLength: 20, //最大上传文件数目
    //     shopping: $('.files-content'), //购物车
    //     addBtn: $('.article-content'), //文库里面的添加btn
    //     delete_btn: $('#scroller'), //删除Btn的ul
    //     aliToken: {}, //获得aliyun的token值
    //     uploader: new plupload.Uploader({
    //         runtimes: 'html5,flash,silverlight,html4', //上传的环境
    //         browse_button: 'container-upload', //
    //         container: document.getElementById('file-content'), //上传文件的容器
    //         // flash_swf_url : 'lib/plupload-2.1.2/js/Moxie.swf',
    //         // silverlight_xap_url : 'lib/plupload-2.1.2/js/Moxie.xap',

    //         url: 'http://oss.aliyuncs.com', //上传的参数
    //         filters: {
    //             mime_types: [
    //                 // { title : "Image files", extensions : "jpg,gif,png" },
    //                 {
    //                     title: "document",
    //                     extensions: 'txt,doc,ppt,docx,wps,rtf,pdf,xls'
    //                 }
    //             ],
    //             max_file_size: "100mb", //设置最大上传文件大小
    //             prevent_duplicates: true //防止上传相同大小文件
    //         },
    //         init: {
    //             PostInit() {
    //                     console.log(this);
    //                     $('#container-upload').on('click',()=>{upload.fillUpload(this);});
    //                     $('#uploadfiles').on('click',()=>{this.start();return false;})
    //                 },
    //                 FilesAdded(up, files) {
    //                     console.log(this);
    //                     plupload.each(files, function(file) {
    //                         prompt.changeInfo(file.percent + "%");
    //                     });
    //                 },
    //                 UploadProgress(up, file) {

    //                     prompt.changeInfo(file.percent + "%");
    //                 },
    //                 FileUploaded(up, file, info) {
    //                     if (info.status == 200) {
    //                         //添加购物车数据
    //                         var file_date = new Date(), //添加日期
    //                             date = file_date.getFullYear() + '/' + (file_date.getMonth() + 1) + '/' + file_date.getDate(),
    //                             size = Number(files[i].size / (1024 * 1024)).toFixed(2) + 'MB'; //添加文件大小
    //                         addFiles(file, date, size, file.id);
    //                         _this.changeInputText(1);
    //                         prompt.changeInfo("上传成功~");
    //                     } else {
    //                         prompt.changeInfo("上传失败!");
    //                     }
    //                 },
    //         }
    //     }),
    //     init() {
    //         this.uploader.init();
    //     },
    //     fillUpload(up) {
    //         let msg = this.getAjax(),
    //             {
    //                 dir, host, policy, accessid, signature
    //             } = msg;
    //         let new_multipart_params = {
    //             'key': dir + '${filename}', //获得文件名
    //             'policy': policy,
    //             'OSSAccessKeyId': accessid,
    //             'success_action_status': '200', //让服务端返回200,不然，默认会返回204
    //             // 'callback' : callbackbody,
    //             'signature': signature //由后台获得的签名
    //         }
    //         up.setOption({ //设置上传参数
    //             'url': host,
    //             'multipart_params': new_multipart_params
    //         });

    //     },
    //     getAjax() {
    //         var msg = '';
    //         $.ajax({
    //                 url: Pathurl.getToken,
    //                 // url:'http://localhost/99dayin/index.php/api/getUploadToken?time=1448892600604&token=b41e8a32ebd7af896fb16c44fad31808',
    //                 type: 'post',
    //                 contentType: "application/json",
    //                 dataType: 'json'
    //             })
    //             .done(function(data) {
    //                 msg = data;
    //             })
    //         return msg;
    //     }
    // }
    // upload.init();
    let uploader = new plupload.Uploader({
        runtimes: 'html5,flash,silverlight,html4', //上传的环境
        browse_button: 'container-upload', //
        'success_action_status': '200',
        container: document.getElementById('file-content'), //上传文件的容器
        // flash_swf_url : 'lib/plupload-2.1.2/js/Moxie.swf',
        // silverlight_xap_url : 'lib/plupload-2.1.2/js/Moxie.xap',

        url: 'http://99dayin.oss-cn-hangzhou.aliyuncs.com', //上传的参数

        filters: {
            mime_types: [
                // { title : "Image files", extensions : "jpg,gif,png" },
                {
                    title: "document",
                    extensions: 'txt,doc,ppt,docx,wps,rtf,pdf,xls'
                }
            ],
            max_file_size: "100mb", //设置最大上传文件大小
            prevent_duplicates: true, //防止上传相同大小文件

        },
        init: {
            PostInit() {
                },
                FilesAdded(up, files) {
                    upload.getAjax(this);

                },
                UploadProgress(up, file) {
                    prompt.loading(0);
                    prompt.loading(file.percent); //注意一下这里的Progress会提醒两次上传100%
                },
                FileUploaded(up, file, info) {
                    for(var n in file){
                        console.log(`key is ${n} and name is  ${file.name} and type is ${file.type} `);
                    }
                    if (info.status == 200) {
                        //添加购物车数据
                        var file_date = new Date(), //添加日期
                            date = file_date.getFullYear() + '/' + (file_date.getMonth() + 1) + '/' + file_date.getDate(),
                            size = plupload.formatSize(file.size); //添加文件大小
                        upload.addFiles(file.name, date, size, file.id);
                        prompt.changeInfo("上传成功~");
                    } else {
                        prompt.changeInfo("上传失败!");
                    }
                },
        }
    });
    uploader.init();

    let upload = {
        shopping:$('.files-content'),
        addBtn: $('.article-content'), //文库里面的添加btn
        delete_btn: $('#scroller'), //删除Btn的ul
        fillUpload(up, data) {
                console.log(up);
                let {
                    dir, signature, accessid, policy, host
                } = data;
                let new_multipart_params = {
                    'key': dir + '${filename}', //获得文件名
                    'policy': policy,
                    'OSSAccessKeyId': accessid,
                    'success_action_status': '200', //让服务端返回200,不然，默认会返回204
                    // 'callback' : callbackbody,
                    'signature': signature //由后台获得的签名
                }
                up.setOption({ //设置上传参数
                    'url': host,
                    'multipart_params': new_multipart_params
                });
                up.start(); //触发上传
            },
            getAjax(up) {
                var msg = '';
                var _this = this;
                $.ajax({
                        url: Pathurl.getToken,
                        // url: 'http://localhost/99dayin/index.php/api/getUploadToken?time=1448892600604&token=b41e8a32ebd7af896fb16c44fad31808',
                        type: 'GET',
                        contentType: "application/json",
                        dataType: 'json'
                    })
                    .done(function(data) {
                        msg = data;
                        _this.fillUpload(up, data);
                    })
            },
            changeInputText(amount) {
                var num = Number(this.content_a.attr('data-num'));
                this.content_a.attr('data-num', num + amount);
            },
            /*
            * 当上传完成时,将上传的文件添加给购物车
            */
            addFiles(name, date, size, mark) {
                var index = name.indexOf('.'),
                    mark = mark;
                var li = document.createElement('li'),
                    className = '';
                    console.log(`index is ${index} and name is ${name.substring(index + 1)}`);
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
                //完成添加操作后,将Input的图标改为+1;
                this.changeInputText(1);
            },
            //找到specified item并且删除
            findIndex(arr, mark) {
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
            deleteItem($target) {
                var li = $target.parents('li'),
                    mark = $target.attr('data-mark'),
                    area = $target.attr('data-area'),
                    loca = null,
                    _this = this;

                if (area === 'self') {
                    this.findIndex(this.filesArray, mark);
                } else {
                    this.findIndex(this.official, mark);
                }
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
    upload.addFiles("123", '2015-12-12', '200KB', 123);

    /*
     * 定义购物车出现移除icon的操作
     */
    var error = {
        showError($target) {
                $target.find('.logo-error').show();
            },
            hideError($target) {
                $target.find('.logo-error').hide();
            },
            removeLi($target) {
                $target.detach();
            }
    }
    $('.files-content').on({
            //鼠标悬浮显示对应的li元素
            mouseover(e) {
                    var $target = e.target.tagName === "LI" ? $(e.target) : $(e.target).parents('li');
                    error.showError($target);
                },
                // 鼠标移开隐藏对应的li元素
                mouseout(e) {
                    var $target = e.target.tagName === "LI" ? $(e.target) : $(e.target).parents('li');
                    error.hideError($target);
                }
        })
        //购物车
    var shopping = {
        arrow: '',
        store: $('#store'),
        //改变下拉箭头
        downArrow() {
            this.arrow.removeClass('shopping-uparrow').addClass('shopping-downarrow');
            this.moveUpStore();
        },
        //改为上拉箭头
        upArrow() {
            this.arrow.removeClass('shopping-downarrow').addClass('shopping-uparrow');
            this.moveDownStore();
        },
        //上拉购物车
        moveUpStore() {
            this.store.css('transform', 'translateY(' + -347 + 'px)');
        },
        //隐藏购物车
        moveDownStore() {
            this.store.css('transform', 'translateY(' + 0 + 'px)');
        },
        //判断箭头方向，执行对应的函数
        judgeDir($arrow) {
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
            alreadyAdd($target) {
                $target.removeClass('add-btn').addClass('already-add');
            },
            //当在购物车中删除文库的btn时，切换为未添加
            addBtn($target) {
                $target.removeClass('add-btn').addClass('already-add');
            },
            //移动推荐内容
            changeContent(order) {
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
            toggleActive(e) {
                var $target = $(e.target),
                    _order;
                if ($target[0].tagName === "I") {
                    _order = Number($target.attr('data-order'));
                    //根据order的不同显示不同页面的文库推荐
                    this.changeContent(_order);
                    changeClass($target, 'active');
                }
            },
            addItem(article, file) {
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
            repeatAdd(files, unit) {
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
            init() {
                var _this = this;
                this.changeGroup.on('click', function() {
                    //测试数据
                    // var files =  upload.filesArray,
                    //     len = files.length,
                    //     unit = Math.floor(len / 3); //每组长度

                    // _this.repeatAdd(files,unit);
                    sendAjax({
                        url: Pathurl.getOfficial,
                        success(data) {
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
        mouseover(e) {
                Base.toggleActive(e);
            },
            /*
             * 切换文库列表的mark-btns
             * 删除选中效果
             */
            mouseout(e) {
                Base.toggleActive(e);
            }
    });
    /*
     * 前去支付按钮btn
     */
    var Pay = {
        pay_btn: $('#show-shopping'), //前去结算按钮
        init() {
            var upload_modify = [];
            upload.filesArray.forEach(function(val) {
                upload_modify.push(val.mark);
            });
            upload.official.forEach(function(val) {
                upload_modify.push(val.mark);
            })
            this.pay_btn.on('click', function() {
                var order_num = Number($('.container-upload').attr('data-num'));
                if (order_num === 0) {
                    prompt.changeInfo('购物车为0,不能结算!');
                } else if (order_num > 0) {
                    window.location.href = './confirm';
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
        init() {
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
                        success(data) {
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