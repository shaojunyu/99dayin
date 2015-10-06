define(['jquery','lrz'],function($,lrz){
	DealImg.DEFAULT = {

	}
	function DealImg(opts){
		this.opts = opts;


	}
	DealImg.prototype.compressImg = function(){
		
	}
	DealImg.prototype.showImage = function(){
		$file.parent().next()	//获得紧邻的img
		.attr('src',src);	//改变他的src属性
	}
	DealImg.prototype.loadImg=function(){
		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload= function(e){
			showImage($file,e.target.result);			
		}
	}
})