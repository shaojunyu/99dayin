define(["jquery","fileupload"],function($,file){function send_request(){var e=null;window.XMLHttpRequest?e=new XMLHttpRequest:window.ActiveXObject&&(e=new ActiveXObject("Microsoft.XMLHTTP"));if(e!=null)return phpUrl="./php/get.php",e.open("GET",phpUrl,!1),e.send(null),e.responseText;alert("Your browser does not support XMLHTTP.")}function get_signature(){now=timestamp=Date.parse(new Date)/1e3,console.log("get_signature ..."),console.log("expire:"+expire.toString()),console.log("now:",+now.toString());if(expire<now+3){console.log("get new sign"),body=send_request();var obj=eval("("+body+")");return host=obj.host,policyBase64=obj.policy,accessid=obj.accessid,signature=obj.signature,expire=parseInt(obj.expire),callbackbody=obj.callback,key=obj.dir,!0}return!1}function set_upload_param(e){var t=get_signature();t==1&&(new_multipart_params={key:key+"${filename}",policy:policyBase64,OSSAccessKeyId:accessid,success_action_status:"200",callback:callbackbody,signature:signature},e.setOption({url:host,multipart_params:new_multipart_params}),console.log("reset uploader"))}accessid="",accesskey="",host="",policyBase64="",signature="",callbackbody="",filename="",key="",expire=0,now=timestamp=Date.parse(new Date)/1e3;var uploader=new plupload.Uploader({runtimes:"html5,flash,silverlight,html4",browse_button:"selectfiles",container:document.getElementById("container"),url:"http://oss.aliyuncs.com",init:{PostInit:function(){document.getElementById("ossfile").innerHTML="",document.getElementById("postfiles").onclick=function(){return set_upload_param(uploader),uploader.start(),!1}},FilesAdded:function(t,n){console.log(n),plupload.each(n,function(e){document.getElementById("ossfile").innerHTML+='<div id="'+e.id+'">'+e.name+" ("+plupload.formatSize(e.size)+")<b></b>"+'<div class="progress"><div class="progress-bar" style="width: 0%"></div></div>'+"</div>"})},UploadProgress:function(t,n){console.log(n);var r=document.getElementById(n.id);r.getElementsByTagName("b")[0].innerHTML="<span>"+n.percent+"%</span>";var i=r.getElementsByTagName("div")[0],s=i.getElementsByTagName("div")[0];s.style.width=2*n.percent+"px",s.setAttribute("aria-valuenow",n.percent)},FileUploaded:function(t,n,r){console.log("uploaded"),console.log(r.status),set_upload_param(t),r.status==200?document.getElementById(n.id).getElementsByTagName("b")[0].innerHTML="success":document.getElementById(n.id).getElementsByTagName("b")[0].innerHTML=r.response},Error:function(t,n){set_upload_param(t),document.getElementById("console").appendChild(document.createTextNode("\nError xml:"+n.response))}}});uploader.init()});