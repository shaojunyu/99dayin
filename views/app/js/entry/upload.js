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
        'md5': "lib/spark-md5.min",
        'encryption': "entry/function/encryption"
    }
});
"use strict";
require(['jquery', 'iscroll', 'prompt', 'encryption', 'md5', 'fileupload', 'utility', 'header'], function($, iscroll, prompt, Encryption, md5) {

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
    /*
     * 用来解析class后缀名
     */
    class parseClass {
        constructor() {

        }
        getClass(name) {
            let className = undefined;
            switch (name) {
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
            return className;
        }
    }
    let getClass = new parseClass();
    /*
     * 用来检测尾缀,是否符合标准,如果符合返回true; 如果不符合返回false;
     */
    function parseSuffix(file, reg= /[.](doc|docx|ppt|pdf|pptx|word)$/ ) {
        if (reg.test(file.name)) {
            return true; //符合标准返回true
        } else {
            return false; //不符合标准返回false;
        }
    }
    /*
     * 定义了一个发送SSE事件,用来判断文件解析是否完成
     * 在文件开始上传的时候触发, 然后一直持续触发
     */
    function sendSSE({
        url, message = () => {}, open = () => {}, error = () => {}
    }) {
        let source;
        if (!!window.EventSource) {
            source = new EventSource(url);
        } else {
            // source = undefined;
            //在这里做向下兼容
        }
        /*
         * 绑定相关事件
         */

        source.addEventListener("open", open, false);
        source.addEventListener("message", (e) => {
            message(e);
        }, false); //message中返回的数据有,e.data服务器返回的文本数据
        source.addEventListener("error", error, false);
        return source;
    }
    let SSE = {
        flag: undefined, //设置进度条
        source: undefined, //设置SSE对象
        message(event) {
            SSE.flag = event.data; //用来表示文件是否解析完成\
            if (SSE.flag == 0) {
                SSE.close();
            }

        },
        init() {
            this.source = sendSSE({
                url: Pathurl.SSEurl,
                message: SSE.message
            });
        },
        close() { //关闭SSE连接
            this.source.close();
        }

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
        remove: Encryption.Encryption('../index.php/api/deleteCartItem'), //删除购物车
        confirmHash: Encryption.Encryption('../index.php/api/confirmMD5'),
        SSEurl: Encryption.Encryption('../index.php/api/getProgress') //解析SSE地址
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
            prompt.changeInfo("正在跳转~");
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
                    extensions: 'doc,ppt,pptx,docx,pdf'
                }
            ],
            max_file_size: "100mb", //设置最大上传文件大小
            prevent_duplicates: true //防止上传相同大小文件

        },
        init: {
            /*
             * 文件筛选,用来过滤文件内容相同的值
             */
            FileFiltered(up, file) {
                    upload.fileCheck(up, {
                        file: file,
                        native: file.getNative()
                    });
                },
                /*
                 * 文件上传进度条
                 */
                UploadProgress(up, file) {
                    prompt.showInfo(file.percent+"%"); //注意一下这里的Progress会提醒两次上传100%
                    if (file.percent === 100) {
                        upload.flag++;
                    }
                    if (upload.flag === 2) {
                        upload.flag = 0;
                    }
                },
                /*
                 * 当筛选完毕后上传,新文件,并提示上传成功
                 */
                FileUploaded(up, file, info) {
                    if (info.status == 200) {
                        //添加购物车数据
                        prompt.loading(100);
                        upload.addFileToken(file);
                        // SSE.init();  //从这里开始发送SSE,用来表示后台的发送的格式是否正确
                    } else {
                        prompt.changeInfo("上传失败!");
                    }
                },
        }
    });
    uploader.init(); //文件上传工具初始化
    let upload = {
        shopping: $('.files-content'),
        addBtn: $('.article-content'), //文库里面的添加btn
        delete_btn: $('#scroller'), //删除Btn的ul
        content_a: $('#container-upload'),
        flag: 0, //不要删除这个flag，这个后期重构需要改,用来检测pulp上传时，两次提醒的100;
        init() {
            let _this = this;
            this.addBtn.on('click', function(e) {
                var $target = $(e.target);
                if ($target.hasClass('add-btn')) {
                    var data_area = $target.attr('data-area'),
                        data_mark = $target.attr('data-mark'),
                        $parent = $target.parents('.article-item'),
                        li = document.createElement('li');
                    //将文库改为已添加
                    Base.alreadyAdd($target);
                    li.innerHTML = $parent.html().replace('already-add', 'logo-error');
                    _this.shopping.append(li);
                    _this.changeInputText(1);
                    //刷新滚动条
                    refresh();
                    //然后就没了，最后添加 '前去结算' 的时候将数组发给后台，然后让他请求数据
                }
            })
            this.delete_btn.on('click', function(e) {
                var $target = $(e.target);
                if ($target.hasClass('logo-error')) {
                    _this.deleteItem($target);
                }
            });
            this.content_a.on('click', function(e) {
                SSE.close();
            })
        },
        fillUpload(up, data) {
            let {
                dir, signature, accessid, policy, host, callback
            } = data;
            let new_multipart_params = {
                'key': dir + '${filename}', //获得文件名
                'policy': policy,
                'OSSAccessKeyId': accessid,
                'success_action_status': '200', //让服务端返回200,不然，默认会返回204
                'callback': callback,
                'signature': signature //由后台获得的签名
            }
            up.setOption({ //设置上传参数
                'url': host,
                'multipart_params': new_multipart_params
            });
            up.start(); //触发上传
        },
        /*
         * 上传文件的token参数
         */
        getAjax(up) {
            prompt.showInfo("文件上传中~");
            var _this = this;
            $.ajax({
                    url: Pathurl.getToken,
                    type: 'POST',
                    contentType: "application/json",
                    dataType: 'json'
                })
                .done(function(data) {
                    _this.fillUpload(up, data);
                })
        },
        changeInputText(amount) {
            var num = Number(this.content_a.attr('data-num'));
            console.log(Number(num + amount) < 0);
            if (Number(num + amount) < 0);
            else this.content_a.attr('data-num', num + amount);
        },
        /*
         * 当上传完成时,将上传的文件添加给购物车
         */
        addFiles(file) {

            console.log(file.hash);
            var file_date = new Date(), //添加日期
                date = file_date.getFullYear() + '/' + (file_date.getMonth() + 1) + '/' + file_date.getDate(),
                size = plupload.formatSize(file.size), //添加文件大小
                name = file.name,
                mark = file.hash,
                index = name.lastIndexOf('.'),
                li = document.createElement('li'),
                className = getClass.getClass(name.substring(index + 1));
            li.innerHTML = '<i class="file-logo ' + className + '"></i>' +
                '<p class="file-header">' + name.substring(0, index) + '</p>' +
                '<p>上传时间:<span class="upload-time">' + date + '</span>' +
                '大小:<span>' + String(size).toUpperCase() + '</span></p>' +
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
            prompt.changeInfo("文件上传成功~");
        },
        /*
         * 将添加的文件,返回给后台
         */
        addFileToken(file) {
            $.ajax({
                    url: Pathurl.confirm,
                    type: "POST",
                    dataType: "JSON",
                    contentType: "application/json",
                    data: JSON.stringify({
                        filename: encodeURI(file.name),
                        fileMD5: file.hash
                    })
                })
                .then((data) => {
                    if (data.success) upload.addFiles(file);
                    else prompt.changeInfo('对不起您的浏览器抽风了')
                });
        },
        /*
         * 删除文件,将hash值传入,然后移出购物车
         */
        deleteItem($target) {
            var li = $target.parents('li'),
                mark = $target.attr('data-mark'),
                _this = this;
            $.ajax({
                url: Pathurl.remove,
                type: 'POST',
                dataType: 'json',
                contentType:'application/json',
                data: JSON.stringify({
                    fileMD5: mark //发送文件的hash值 
                })
            }).then(function(data) {
                if (data.success) {
                    prompt.changeInfo('删除成功!');
                    error.removeLi(li); //删除指定元素
                    _this.changeInputText(-1);
                } else {
                    prompt.changeInfo('删除失败!');
                }
            })
        },
        /*
         * 传入pulpUpload对象,验证文件内容的md5值,应用到了,slice的API; 并且实现了分片解析的概念
         */
        fileCheck(up, {
            file, native
        }) {
            // if($('#container-upload').attr('data-num')>=20){
            //     up.removeFile(file);
            //     prompt.changeInfo("文件上传最大数量为20~");
            //     return false;
            // }
            var reader = new FileReader(),
                blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice, //获取文件sliceAPI;
                chunkSize = 2097152,
                chunks = Math.ceil(native.size / chunkSize),
                currentChunk = 0,
                spark = new md5(),
                start, end;
            reader.onload = function(e) { //当完成加载时，触发相关的函数
                    //每块交由sparkMD5进行计算
                    spark.appendBinary(e.target.result);
                    currentChunk++;
                    //如果文件处理完成计算MD5，如果还有分片继续处理
                    prompt.detactInfo(Math.ceil(100 * currentChunk / chunks));
                    if (currentChunk < chunks) {
                        //开始加载下一个分片
                        start = currentChunk * chunkSize,
                            end = start + chunkSize >= native.size ? native.size : start + chunkSize;
                        reader.readAsBinaryString(blobSlice.call(native, start, end)); //读取文件
                    } else {
                        upload.confirm(up, spark.end(), file); //发送md5值,用来检测
                        // console.log(spark.end());  //最后输出信息
                        // upload.hash = spark.end();  //将读取得到的md5值，发送给ajax
                    }
                }
                //开始读取一次稳健
            start = currentChunk * chunkSize,
                end = start + chunkSize >= native.size ? native.size : start + chunkSize;
            reader.readAsBinaryString(blobSlice.call(native, start, end)); //读取文件
        },
        /*
         * 验证文件是否存在,如果存在则直接添加,显示添加成功,如果不存在则开始上传文件
         */
        confirm(up, hash, file) { //注意这里的原来的uploadfile对象      
            file.hash = hash;
            //验证文件尾缀

            var sign = parseSuffix(file.getNative());
            if (sign) {
                $.ajax({
                        url: Pathurl.confirmHash, //验证文件,将hash值传给后台验证
                        type: "POST",
                        dataType: "json",
                        contentType: 'application/json',
                        data: JSON.stringify({
                            fileMD5: hash
                        })
                    })
                    .then(data => {
                        if (data.success) { //如果不存在的话
                            up.removeFile(file); //删除队列中已经存在的文件
                            upload.addFileToken(file);
                        } else {
                            upload.getAjax(up);
                        }
                    })
            } else {
                up.removeFile(file); //删除队列中已经存在的文件
            }

        }
    }
    upload.init();
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
                refresh();
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
                    {
                        name, date, size, area, mark, type
                    } = file,
                    className = getClass.getClass(type); //用来解析文件类型
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
        flag: 0,
        init() {
            this.pay_btn.on('click', function() {
                let mark = [],
                    goods = $("#scroller").find(".logo-error"),
                    time1, //验证SSE.flag
                    time2;

                goods.each((index, val) => { //获取商品的hash值.
                    mark.push($(val).attr('data-mark'));
                })
                let len = mark.length;
                if (len === 0) { //检查上平数量是否为0
                    prompt.changeInfo('购物车为0,不能结算!');
                } else if (len > 0) {
                    //看这里需不需要发送商品总的hash值;

                    new Promise((res, rej) => {
                            SSE.init();
                            res();
                        })
                        .then(() => {
                            if (Pay.flag > 0) SSE.close();
                            Pay.flag++;
                            return undefined;
                        })
                        .then(() => {
                            if (SSE.flag == 0) {
                                window.location.href = '../user/confirm';
                            } else if (SSE.flag === undefined) {
                                //当请求未返回时,进行判断
                                clearInterval(time1);
                                time1 = setInterval(() => {
                                    if (SSE.flag == 0) {
                                        clearInterval(time1);
                                        window.location.href = '../user/confirm';

                                    }
                                }, 100);
                            } else if (SSE.flag != 0) {
                                clearInterval(time2);
                                    prompt.goPay(SSE.flag);

                            }
                        })


                }
            });
        }
    }
    Pay.init();
    /*
     * 搜索框
     */
    // var Search = {
    //     search: $('#search'), //搜索框
    //     init() {
    //         this.search.on('keyup', function(e) {
    //             var code = e.which,
    //                 val = $(this).val();
    //             if (code === 13) {
    //                 //如果开始搜索,则向服务端请求数据,最多只有24条信息
    //                 sendAjax({
    //                     url: Pathurl.search,
    //                     data: {
    //                         "search": val
    //                     },
    //                     success(data) {

    //                          * 返回的data有 data.success || data.files

    //                         if (data.success) {
    //                             //向下面的展示框填入数据
    //                             var files = data.files,
    //                                 len = files.length,
    //                                 unit = Math.floor(len / 3); //每组长度
    //                             Base.repeatAdd(files, unit);
    //                         } else {
    //                             prompt.changeInfo('对不起您的浏览器抽风了!');
    //                         }
    //                     }
    //                 })
    //             }
    //         })
    //     }
    //     // }
    //     // Search.init();
    // SSE.init();  //从这里开始发送SSE,用来表示后台的发送的格式是否正确
    // setTimeout(()=>{SSE.close()},3000);
})
