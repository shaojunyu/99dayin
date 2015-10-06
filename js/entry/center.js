require.config({
    baseUrl: './js',
    paths: {
        'jquery': 'lib/jQuery',
        'scroll':'lib/iscroll',
        // 'modal': 'lib/jquery.simplemodal',
        'lrz':'lib/lrz/dist/lrz.bundle'
    }
})
"use strict";
require(['jquery', 'scroll', 'lrz'], function($, scroll , lrz) {

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
	})
	 var myScroll = new IScroll('#wrapper', {
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            // fadeScrollbars: true,
            useTransition: true
        });
})
