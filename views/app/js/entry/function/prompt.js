
define(['jquery'],function($){
	//显示提示信息
	//隐藏提示信息
	//修改提示信息
	Prompt.DEFAULT = {
		prompt:$('.prompt-frame')  //获取提示信息元素
	}
	function Prompt(opts){
		this.opts = $.extend({},Prompt.DEFAULT,opts);
		this.prompt_ele = this.opts.prompt;
		this.dist = this.prompt_ele.height();
	}
	Prompt.prototype.showPrompt = function(){
		this.prompt_ele.css('transform', 'translateY(' + this.dist + 'px)');
	};
	Prompt.prototype.hidePrompt = function(){		
		this.prompt_ele.css('transform', 'translateY(' + 0 + 'px)');
	};
	Prompt.prototype.changeInfo = function($info){
		this.prompt_ele.text($info);
		this.showPrompt();
		var _this = this;
		setTimeout(function(){
			_this.hidePrompt();
		},1500);
	};
	/*
	* 显示进度条
	*/
	Prompt.prototype.loading = function(percent){
		this.showPrompt();
		var _percent = Number(percent),
			_this =this;
		this.prompt_ele.text(_percent+"%");	
	}
	Prompt.prototype.detactInfo = function(percent){
		this.showPrompt();
		this.prompt_ele.text("检验文件中:"+percent+"%");	
		var _this = this;
		if(percent===100){  
			this.prompt_ele.text("检测成功~开始上传");	
			setTimeout(function(){
				_this.hidePrompt();
			},800);  //隐藏进度条
		}
	}
	return {
		Prompt:Prompt
	}
});