"use strict";

define([], function () {
	var tpl = {
		article: function article(type, md5, name, uploadTime, times, size) {
			return "<div class=\"article-item\" data-id=\"" + md5 + "\">\n\t\t\t\t\t\t\t<i class=\"file-logo " + type + "\"></i>\n\t\t\t\t\t\t\t<p class=\"file-header\">" + name + "</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<span class=\"upload-time\">" + uploadTime + "</span>打印次数:<span\n\t\t\t\t\t\t\t\t\tid=\"print-num\">" + times + "</span>大小:<span id=\"size\">" + size + "</span>kb\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<i class=\"add-btn\" data-mark=\"official-1\" data-id=\"" + md5 + "\"></i>\n\t\t\t\t\t\t</div>";
		}
	};
	return { tpl: tpl };
});