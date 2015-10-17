require.config({
    baseUrl: './js',
    paths: {
        'jquery': 'lib/jQuery',
        'scroll':'lib/iscroll',
        // 'modal': 'lib/jquery.simplemodal',
        // 'lrz':'lib/lrz/dist/lrz.bundle'
        'utility':'entry/utility/utility',
        'checkEvent':'entry/function/checkAll',
        'prompt': 'entry/function/prompt', //提示模块
    }
})
"use strict";
require(['jquery', 'scroll','checkEvent','prompt','utility'], function($, scroll,checkEvent,prompt) {
	//绑定scroll事件
	var Iscroll = bindScroll($('.files'));	
	 $('.basic-btn').on('click',function(e){
	 	var $target = $(e.target),
	 		_id = $target.attr('id'),
	 		$ps=$('#change-ps-page'),
	 		$withdraw_page=$('#withdraw-page');
	 	if(_id==="withdraw"){
	 		toggleShow($withdraw_page);
	 	}else if(_id === 'changePs'){
	 		toggleShow($ps);
	 	}
	 });
	 //设置提示信息
	 prompt = new prompt.Prompt({
	     prompt: $('.prompt')
	 });
	 $('[type="checkbox"]').attr('checked',false);
	 new checkEvent.Check({	 	
	 	container:$('#delivery-orders'),
	 	checkAll:$('.select-all-btn input'),
	 	checkBtns:$('#delivery-orders :checkbox'),
	 	className:'order-checkbox'
	 });
	 //实现自动倒计时功能
	setInterval(function(){
		$('.setTime').each(function(){
			$(this).text($(this).text()-1);
		})
	},60000);
	var Withdraw={
		amount:$('.withdraw-input'), //获取提现金额
		confirm:$('.withdraw-confir'), //体现确认按钮
		pre_WD:$('.pre-withdraw'), //未提现金额
		WDed:$('.withdrawed'), //已经提现金额
		total:$('.total'),  //总提现金额
		calMoney:function(money){
			this.pre_WD.val(this.pre_WD.val()-money);
			this.WDed.val(this.WDed.val()+money);
			this.total.val(this.total.val()+money);
		},
		init:function(){
			var _this = this;
			this.confirm.on('click',function(){
				var money = Number(_this.amount.val()),
					reg = [/^\d+$/,/^[0-9]+(.[0-9]{1})?$/]; //验证是否输入为整数，并且含有1位小数
				if(money===0||money==null){
					prompt.changeInfo('输入不能为空!');
				}else if(reg[0].test(money)||reg[1].test(money)){
					prompt.changeInfo('输入金额不正确，只能带有一位小数!');
				}else{
					$.ajax({
						url:Pathurl.withdraw,
						data:{
							money:money  //发送金额
						}
					})
					.done(function(data){
						if(data.success){
							//修改显示的的选项金额
							_this.calMoney(money);
						}
						prompt.changeInfo(data.msg); //显示提示信息
					})
					.fail(function(){
						prompt.changeInfo('为什么会出错勒~~~');
					})
				}
			});
		}
	}
	Withdraw.init();
})
