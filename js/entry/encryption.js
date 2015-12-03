'use strict';

define(['md5'], function () {
	/*
  * 加密算法
  */
	function _Encryption(url) {
		var date = new Date().getTime(),
		    obj = {
			date: new Date().getTime(),
			str: '99dayin_api_secrete'
		},
		    str = SparkMD5.hash(obj.date + obj.str);
		return url + "?time=" + obj.date + "&token=" + str;
	}
	return {
		Encryption: function Encryption(url) {
			return _Encryption(url);
		}
	};
});