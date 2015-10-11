require.config({
    baseUrl: './js',
    paths: {
        'jquery': 'lib/jquery.min',
        'iscroll': 'lib/iscroll',
        'modal': 'lib/jquery.simplemodal',
        'prompt': 'entry/function/prompt', //提示模块
        'utility':'entry/utility/utility',  //基本工具函数
        'qiniu':'lib/qiniu/qiniu.min',  //7牛
        'plupload':'lib/qiniu/plupload.full.min'
    }
});
"use strict";
require(['jquery', 'iscroll', 'prompt','utility','qiniu','plupload'], function($, iscroll, prompt) {
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
    //初始化提示模块
    prompt = new prompt.Prompt({
        prompt: $('.prompt')
    });
    function refresh(){
        Iscroll.forEach(function(val) {
            setTimeout(function() {
                val.refresh();
            }, 100);
        });
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
        delete_btn:$('#scroller'),  //删除Btn的ul
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

        getFiles: function() {
            var modify = [1], //用来表示唯一性
                copy = [],
                _this = this;
            this.$upload.on('change', function(e) {
                var files = this.files;
                copy = [];
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
                        _this.filesArray.push({
                            'name': files[i].name,
                            'content': files[i],
                            'date': date,
                            'size': size,
                            'area': 'self', //自己上传的文件
                            'mark': flag, //表示文件唯一性
                            'type': files[i].name.substring(files[i].name.indexOf('.') + 1) //文件类型
                        });
                        _this.addFiles(files[i], date, size);
                        copy.push(flag);
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
                _this.changeInputText(modify.length - 1);
                //发送请求，获得下载口令，然后上传
                sendAjax({
                    url: Pathkey,
                    success: function(data) {
                        //发送文件
                        if (data.success) {
                            var uploader = Qiniu.uploader({
                                runtimes: 'html5,flash,html4', //上传模式,依次退化
                                browse_button: 'pickfiles', //上传选择的点选按钮，**必需**
                                uptoken_url: data.token,
                                domain: 'http://qiniu-plupload.qiniudn.com/',
                                init: {
                                    'FilesAdded': function(up, modify) {
                                    },
                                    'Error': function(up, err, errTip) {
                                        prompt.changeInfo('上传失败！请重新添加文件！');
                                    },
                                }
                            })
                        } else {
                            prompt.changeInfo('网络问题,请重新上传!');
                        }
                    }
                });
            });

            this.addBtn.on('click', function(e) {
                var $target = $(e.target);
                console.log($target);
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
                    li.innerHTML = $parent.html().replace('add-btn', 'logo-error');
                    _this.shopping.append(li);
                    //刷新滚动条
                   refresh();
                    //然后就没了，最后添加 '前去结算' 的时候将数组发给后台，然后让他请求数据
                }
            })
        this.delete_btn.on('click',function(e){
            var $target = $(e.target);
            if($target.hasClass('logo-error')){
                _this.deleteItem($target,modify);
            }
        });
        },
        changeInputText: function(num) {
            this.content_a.attr('data-num', num);
        },
        addFiles: function(file, date, size) {
            var name = file.name.toLowerCase(),
                index = name.indexOf('.'),
                mark = file.lastModified;
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
        findIndex:function(arr,mark){
            var loca = null;    
            refresh();  //这里的refresh可以去掉，只是给死数据刷新                    
            if(arr.length===0){
                return false;
            };
            arr.forEach(function(val,index){
                if(val.mark === mark){
                    loca = index;
                }
            });            
            arr.splice(loca,1);                            
            refresh();

        },
        deleteItem:function($target,modify){
            var li = $target.parents('li'),
                mark = Number($target.attr('data-mark')),
                area= $target.attr('data-area'),
                loca = null;
            for(var i =0;i<modify.length;i++){
                if(modify[i]===mark){
                    loca = i;
                    break;
                }
            }
            if(loca){
                modify.splice(loca,1);
            }
            if(area==='self'){
               this.findIndex(this.filesArray,mark);
               this.changeInputText(modify.length - 1);
            }else{
               this.findIndex(this.official,mark);
            }
        }
    }
    upload.getFiles();
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
            $target.parents('li').detach();
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
            },
            //删除选中的li
            click: function(e) {
                var $target = $(e.target);
                if ($target.hasClass('logo-error')) {
                    error.removeLi($target);
                }

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
    }
    $('#shopping-arrow').on('click', function() {
        shopping.judgeDir($(this));
    })
    var Base = {
            content: $('#article-content'), //文库推荐内容
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
            }

        }
        //在文库添加时，点击添加，改为已添加.

    //改变"官方文库" 和 "共享文库" btn选中的效果
    $('#base-header').on('click', function(e) {
        var $target = $(e.target);
        if ($target[0].tagName === "BUTTON") {
            changeClass($target, 'active');
        }
    })
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
    })

})
