require.config({
    baseUrl: './js',
    paths: {
        'jquery': 'lib/jQuery',
        'scroll': 'lib/iscroll',
        // 'modal': 'lib/jquery.simplemodal',
        'lrz':'lib/lrz/dist/lrz.bundle', //用来处理图片的库
        'utility': 'entry/utility/utility',
        'prompt': 'entry/function/prompt', //提示模块
        'img':'entry/function/deal-img'
    }
})
"use strict";
require(['jquery', 'scroll', 'utility','img'], function($, scroll, util) {
    //绑定滚动条
    var Iscroll = bindScroll($('.container'));
    //绑定上传图片
    // $('.upload').on('change', function(e) {
    //     var file = this.files[0],
    //         _this = $(this);
    //     //处理上传图片
    //     loadImg(_this, file);
    // });
   
    function toggleShow($target) {
        if ($target.css('display') === 'none') {
            $target.show();
        } else {
            $target.hide();
        }
    }
    $(".basic-btn").on('click', function(event) {
        var $target = $(event.target),
            _parent = $target.parents('.left-part');
        if ($target[0].tagName === "BUTTON" && !_parent.hasClass('basic-detail')) {
            toggleShow($target.parents('.left-part'));
        }
    });
    var Pathurl = {
    	delteOrd:'',  //删除订单路由
    	addPrint:''  //加印路由
    }
    var Order = {
        pre: $('.order-content'),  //未处理订单
        history:$('.his-content'),  //历史订单
        order_btn:$('.orders-choice'),  //切换未处理订单和历史订单
        deleteOrder:function($target){
        	var parent_li = $target.parents('li'),
        		order_num = $target.attr('data-order'),
        		signal = false,
        		i = -1;
        	//?这里需要确认订单信息
        	/*
        	* val.order 是订单编号
        	*/
        	Orders.forEach(function(val,index){
        		if(Number(val.order) === Number(order_num)){
        			signal = true;
        			i = index
        		}
        	});
        	if(signal){
        		Orders.splice(i,1);
        	}
        	parent_li.detach();
        	Iscroll.forEach(function(val) {
        	    val.refresh();
        	});
        	sendAjax({
        		url:Pathurl.delteOrd,
        		data:{
        			Orders:Orders
        		},
        		success:function(data){
        			if(!data.success){
        				prompt.changeInfo("您的网络又问题，请重新删除~");
        			}
        		}
        	});
        },
        checkout:function($target){
        	var seq = $target.attr('data-seq');
        	/*
        	* 接下来操作整个支付流程，比如支付弹窗
        	* 支付页面
        	* 支付成功
        	* 最后返回订单信息
        	*/
        },
        init: function() {
            var _this = this;
            this.pre.on('click', function(e) {
                var $target = $(e.target);
                if ($target.hasClass('cancel')) {
                    var decision = confirm("确认取消订单吗?");
                    if (decision) {
                       _this.deleteOrder();
                    }
                }else if($target.hasClass('go-pay')){

                }
            });
            this.order_btn.on('click',function(e){
            	var $target = $(e.target),
            		pre = $('.pre-order'),   //未处理订单
            		history = $('.his-order');  //历史订单
            	if($target.hasClass('pre-order-btn')){
            		//将未处理订单显示,历史订单隐藏
            		changeShow(pre,history);
            		$target.addClass('active').siblings().removeClass('active');
            		Iscroll.forEach(function(val){
            			val.refresh();
            		});
            	}else if($target.hasClass('historic-order-btn')){	
            		//将历史订单显示s未处理订单隐藏
            		changeShow(history,pre);
            		$target.addClass('active').siblings().removeClass('active');
            		Iscroll.forEach(function(val){
            			val.refresh();
            		});
            	}
            });
            this.history.on('clicl',function(e){
            	var $target = $(e.target);
            	if($target.hasClass('add-print')){
            		var index = Number($target.attr('data-seq'));
            		sendAjax({
            			url:Pathurl.addPrint,
            			data:{
            				history:HisOrder[index]	//传回指定历史订单
            			},
            			success:function(data){
            				if(data.success){
            					window.location.href=data.url;
            				}else{
            					prompt.changeInfo('对不起你的订单信息已经失效~~');
            				}
            			}
            		})
            	}
            })
        }
    }
    Order.init();

})
