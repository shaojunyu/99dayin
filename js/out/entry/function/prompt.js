define(["jquery"],function(e){function t(n){this.opts=e.extend({},t.DEFAULT,n),this.prompt_ele=this.opts.prompt,this.dist=this.prompt_ele.height()}return t.DEFAULT={prompt:e(".prompt-frame")},t.prototype.showPrompt=function(){this.prompt_ele.css("transform","translateY("+this.dist+"px)")},t.prototype.hidePrompt=function(){this.prompt_ele.css("transform","translateY(0px)")},t.prototype.changeInfo=function(e){this.prompt_ele.text(e),this.showPrompt();var t=this;setTimeout(function(){t.hidePrompt()},1500)},t.prototype.loading=function(e){this.showPrompt();var t=Number(e),n=this;this.prompt_ele.text(t+"%")},t.prototype.detactInfo=function(e){this.showPrompt(),this.prompt_ele.text("检验文件中:"+e+"%");var t=this;e===100&&(this.prompt_ele.text("检测成功~开始上传"),setTimeout(function(){t.hidePrompt()},800))},t.prototype.goPay=function(e){this.showPrompt(),this.prompt_ele.text("您的未解析文件数目:"+percent),e===0&&this.prompt_ele.text("文件解析完成")},{Prompt:t}});