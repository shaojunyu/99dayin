define(["jquery"],function(e){function t(n){this.opts=e.extend({},t.DEFAULT,n),this.prompt_ele=this.opts.prompt,this.dist=this.prompt_ele.height()}return t.DEFAULT={prompt:e(".prompt-frame")},t.prototype.showPrompt=function(){this.prompt_ele.css("transform","translateY("+this.dist+"px)")},t.prototype.hidePrompt=function(){this.prompt_ele.css("transform","translateY(0px)")},t.prototype.changeInfo=function(e){this.prompt_ele.text(e),this.showPrompt();var t=this;setTimeout(function(){t.hidePrompt()},1500)},{Prompt:t}});