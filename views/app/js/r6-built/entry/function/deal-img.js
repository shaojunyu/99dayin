define(["jquery","lrz"],function(e,t){function n(e){this.opts=e}n.DEFAULT={},n.prototype.compressImg=function(){},n.prototype.showImage=function(){$file.parent().next().attr("src",src)},n.prototype.loadImg=function(){var e=new FileReader;e.readAsDataURL($file),e.onload=function(e){showImage($file,e.target.result)}}});