'use strict';

/*
* 显示目标元素，或者隐藏目标元素
*/
function toggleShow($target) {
    if ($target.css('display') === 'none') {
        $target.show();
    } else {
        $target.hide();
    }
}
/*
* 切换绑定的class名,移除siblings含有的class名
*/
function changeClass($target, classname) {
    $target.addClass(classname).siblings().removeClass(classname);
}
/*
*绑定滚动条
*/
function bindScroll($target) {
    var arr = new Array();
    $target.each(function () {
        var iscroll = new IScroll('#' + $(this).attr('id'), {
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            // fadeScrollbars: true,
            useTransition: true
        });
        arr.push(iscroll);
    });
    return arr;
}
function refreshScroll(arr) {
    arr.forEach(function (val) {
        val.refresh(); //刷新scroll滚动条
    });
}
/*
* 发送ajax函数
*/
sendAjax.DEFAULT = {
    type: 'post',
    complete: function complete() {},
    beforeSend: function beforeSend() {},
    data: {}
};
function sendAjax(opts) {
    var opts = $.extend({}, sendAjax.DEFAULT, opts);
    $.ajax({
        url: opts.url,
        type: opts.type,
        data: opts.data,
        success: function success(data) {
            opts.success(data);
        },
        complete: function complete() {
            opts.complete();
        },
        beforeSend: function beforeSend() {
            opts.beforeSend();
        }

    });
}
/*
 *设置模态框的打开效果
 */
function openModal(target, close) {
    //打开弹窗效果   
    $.modal.close();
    console.log(close);
    target.modal({
        overlayClose: close,
        onOpen: function onOpen(dialog) {
            dialog.overlay.fadeIn("fast", function () {
                //罩层载入
                dialog.data.hide(); //数据载入动画
                dialog.container.fadeIn('fast', function () {
                    //内容区载入
                    dialog.data.fadeIn('normal'); //数据显示动画
                });
            });
        },
        overlayCss: {
            backgroundColor: "#000"
        },
        opacity: 85
    });
}
/*
* 移动指定位置
*/
function moveBlock($target, location) {
    $target.css('transform', 'translateX(' + location + 'px)');
}
/*
* 将第一个显示，第二个隐藏
*/
function changeShow(first, second) {
    first.show();
    second.hide();
}