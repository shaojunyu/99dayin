define([],function(){
	var tpl = {
	article(type,md5,name,uploadTime,times,size){
		return `<div class="article-item" data-id="${md5}">
							<i class="file-logo ${type}"></i>
							<p class="file-header">${name}</p>
							<p>
								<span class="upload-time">${uploadTime}</span>打印次数:<span
									id="print-num">${times}</span>大小:<span id="size">${size}</span>kb
							</p>
							<i class="add-btn" data-mark="official-1" data-id="${md5}"></i>
						</div>`
	}
}
return {tpl:tpl};
		
})