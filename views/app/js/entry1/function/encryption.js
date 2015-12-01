define(['jquery','md5'],function($){
	/*
	 * 加密算法
	 */
	function Encryption(url) {
	    var date = new Date().getTime(),
	     obj = {
	        date: new Date().getTime(),
	        str: '99dayin_api_secrete'
	    },
	    str = $.md5(obj.date+obj.str);
	    return url+"?time="+obj.date+"&token="+str;
	}
	return {
		Encryption:function(url){
			return Encryption(url);
		}
	}
})