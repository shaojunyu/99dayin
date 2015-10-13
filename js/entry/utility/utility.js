
    function toggleShow($target){
            if($target.css('display')==='none'){
                $target.show();
            }else{
                $target.hide();
            }
        }
        /*
        *绑定滚动条
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
        /*
        * 发送ajax函数
        */
        sendAjax.DEFAULT = {
            type:'post',
            complete:function(){},
            beforeSend:function(){},
            data:{}
        }
     function sendAjax(opts) {
             var opts = $.extend({}, sendAjax.DEFAULT, opts);         
             $.ajax({
                 url: opts.url,
                 type: opts.type,
                 data: opts.data,
                 success: function(data) {
                     opts.success(data);
                 },
                 complete: function() {
                     opts.complete();
                 },
                 beforeSend:function(){
                    opts.beforeSend();
                 }

             })
         }
       /*
        *设置模态框的打开效果
        */
        function openModal(target, close) { //打开弹窗效果    
            $.modal.close();
            target.modal({
                overlayClose: close,
                onOpen: function(dialog) {
                    dialog.overlay.fadeIn("fast", function() { //罩层载入
                        dialog.data.hide(); //数据载入动画
                        dialog.container.fadeIn('fast', function() { //内容区载入
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
        function changeShow(first,second){
            first.show();
            second.hide();
        }
