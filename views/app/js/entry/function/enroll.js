//只给Input框绑定提示事件，并且显示响应的错误信息
define(['jquery','prompt','utility'],function($,prompt){
	Enroll.DEFAULT = {		
		reg:[],  //获取正则表达式
		msg:[],  //获取正则相对应错误信息 eg: msg[0]: "用户名不符合格式"
		override:false,  //是否需要验重
		url:''   //路由地址

	};
	//获取提示错误信息元素
	prompt = new prompt.Prompt({
	    prompt:$('.prompt')
	});
	/*
	* 绑定注册事件
	*/
	function Enroll($ele,opts){
		this.opts = $.extend({},Enroll.DEFAULT,opts);
		this.len = this.opts.reg.length;  //获取正则表达式的长度
		var _this = this,
			reg = this.opts.reg,
			msg = this.opts.msg;


		//绑定blur函数
		$ele.on('focus',function(){
			$(this).removeClass('error');
			$(this).attr('data-iden','1');  //修改标识符data-iden 0:注册失败, 1为注册成功
		})
		$ele.on('blur',function(){
			var content = $(this).val();			
			if(content ==null ||content==''){
				prompt.changeInfo('输入不能为空');
				$ele.addClass('error');
				$(this).attr('data-iden','0');
				return false;
			}
			for(var i = 0;i<_this.len;i++){
				if(!reg[i].test(content)){
					prompt.changeInfo(msg[0]);
					$ele.addClass('error');
					$(this).attr('data-iden','0');
					return false;
				}
			}
			if(_this.override){  //如果需要验证重复操作
				sendAjax({
					url:_this.opts.url,
					success:function(data){
						if(!data.success){
							prompt.changeInfo("用户名已存在");
							$ele.addClass('error');
							$(this).attr('data-iden','0');
						}else{
							$(this).removeClass('error');
							$(this).attr('data-iden','1');
						}
					}
				})
			}
		})
	}
	//给指定元素绑定focus，删除错误时的样式，需要结合Enroll的绑定效果实现添加错误效果.
	//这里指定绑定的是error样式，并且如果成功改变的是tag->[data-iden]的值,
	function InputFocus($ele){
		$ele.on('focus',function(){
			$(this).removeClass('error');
			$(this).attr('data-iden','1');  //修改标识符data-iden 0:注册失败, 1为注册成功
		});
	}
	// function Verifyinput($ele){
	// 	$ele.on('focus',function(){
	// 		$(this).removeClass('error');
	// 		$(this).attr('data-iden','1');  //修改标识符data-iden 0:注册失败, 1为注册成功
	// 	});
	// 	$ele.on('blur',function(){

	// 	})
	// }
	$.fn.extend({
		enroll:function(opts){
			return this.each(function(){    			
				new Enroll($(this),opts);
			})
		},
		inputFocus:function(){
			return this.each(function(){
				new InputFocus($(this));
			})
		}
	});   
})