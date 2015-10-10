require.config({
    baseUrl: './js',
    paths: {
        'jquery': 'lib/jquery.min',
        'iscroll': 'lib/iscroll',
        'modal': 'lib/jquery.simplemodal',
        'prompt': 'entry/function/prompt' //提示模块
    }
});
"use strict";
require(['jquery', 'iscroll', 'prompt'], function($, iscroll, prompt) {
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
    $('#articles').on('click', function(e) {
            var $target = $(e.target);
            if ($target.hasClass('add-btn')) {
                Base.alreadyAdd($target);
            }
        })
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
    var upload = {
        $upload: $('#file-upload'),
        format: /\.(txt|doc|ppt|docx|wps|rtf|pdf|xls)$/,
        content_a: $('.container-upload'), //包裹input的a标签
        maxLength: 20, //最大上传文件数目
        shopping: $('.files-content'), //购物车
        /*
         * 用来存放数据
         * 一个obj包含一个文件
         * name : 文件名
         * content: 文件file
         * date:上传日期
         * size: 上传大小
         */
        filesArray: new Array(),

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
                            'size': size
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
                _this.changeInputText(modify.length - 1);
            })
        },
        changeInputText: function(num) {
            this.content_a.attr('data-num', num);
        },
        addFiles: function(file, date, size) {
            var name = file.name.toLowerCase(),
                index = name.indexOf('.'),
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
                default:
                    className = 'logo-ppt';
            }
            li.innerHTML = '<i class="file-logo ' + className + '"></i>' +
                '<p class="file-header">' + name.substring(0, index) + '</p>' +
                '<p>上传时间:<span class="upload-time">' + date + '</span>' +
                '大小:<span>' + size + '</span></p>' +
                '<i class="logo-error"></i>';
            this.shopping.append(li);
            //刷新滚动条
            Iscroll.forEach(function(val){
                setTimeout(function () {
                        val.refresh();
                    },100);
            })
        }
    }
    upload.getFiles();
})
