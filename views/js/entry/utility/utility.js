function toggleShow($target){
		if($target.css('display')==='none'){
			$target.show();
		}else{
			$target.hide();
		}
	}
  function bindScroll($target) {

        $target.each(function() {
            new IScroll($(this)[0], {
                scrollbars: true,
                mouseWheel: true,
                interactiveScrollbars: true,
                shrinkScrollbars: 'scale',
                fadeScrollbars: true,
                useTransition: true
            })
        })
        // setTimeout(arguments.callee($('.container')),1000);    
    }