require.config({
    baseUrl: './js',
    paths: {
        'jquery': 'lib/jQuery',
        'scroll':'lib/iscroll',
        // 'modal': 'lib/jquery.simplemodal',
        // 'lrz':'lib/lrz/dist/lrz.bundle'
        'utility':'entry/utility/utility',
        'checkEvent':'entry/function/checkAll'
    }
})
"use strict";
require(['jquery', 'scroll','checkEvent','utility'], function($, scroll,checkEvent) {
	//绑定scroll事件
	bindScroll($('.files'));	
	 $('.basic-btn').on('click',function(e){
	 	var $target = $(e.target),
	 		_id = $target.attr('id'),
	 		$ps=$('#change-ps-page'),
	 		$withdraw_page=$('#withdraw-page');
	 	if(_id==="withdraw"){
	 		toggleShow($withdraw_page);
	 	}else if(_id === 'changePs'){
	 		toggleShow($ps);
	 	}
	 });
	 $('[type="checkbox"]').attr('checked',false);
	 new checkEvent.Check({	 	
	 	container:$('#delivery-orders'),
	 	checkAll:$('.select-all-btn input'),
	 	checkBtns:$('#delivery-orders :checkbox'),
	 	className:'order-checkbox'
	 });
	 //实现自动倒计时功能
	setInterval(function(){
		$('.setTime').each(function(){
			$(this).text($(this).text()-1);
		})
	},60000);


})
