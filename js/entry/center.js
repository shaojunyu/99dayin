require.config({
    baseUrl: './js',
    paths: {
        'jquery': 'lib/jQuery',
        'scroll':'lib/iscroll',
        // 'modal': 'lib/jquery.simplemodal',
        // 'lrz':'lib/lrz/dist/lrz.bundle', //用来处理图片的库
        'utility': 'entry/utility/utility',
        'prompt': 'entry/function/prompt' //提示模块
    }
})
"use strict";
require(['jquery', 'scroll','utility'], function($, scroll,util ) {
	//绑定滚动条
	var Iscroll = bindScroll($('.container'));
	$('.upload').on('change',function(e){
		var file = this.files[0],			
			_this = $(this);
		loadImg(_this,file);				
	});
	function toggleShow($target){
		if($target.css('display')==='none'){
			$target.show();
		}else{
			$target.hide();
		}
	}
	$(".basic-btn").on('click',function(event){
		var $target = $(event.target),
			_parent = $target.parents('.left-part');
		if($target[0].tagName==="BUTTON"&&!_parent.hasClass('basic-detail')){
			toggleShow($target.parents('.left-part'));
		}
	});
	var Order = {
		
	}

})
