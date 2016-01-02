<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>九九打印</title>
    <link rel="stylesheet" type="text/css" href="./styles/fetch.css">
</head>

<body>
<div class="prompt"></div>

	<?php $this->load->view('public/page_header');?>
	<div class="back"></div>
    <article class="main">
    <div class="row">
                  <span class="des">用户名：</span>
                  <input type="text" class="username" >
                  
              </div>
            <div class="row">
                  <span class="des">手机号：</span>
                  <input type="text" class="phone" >
                  
              </div>
              <div class="row">
                  <span class="des">验证码：</span>
                  <input class="CF-code secu-code" type="text" >
                  <button class="getCode">获取验证码</button>
                  
              </div>
               <div class="row">
                  <span class="des">新密码：</span>
                  <input type="password" class="newPs">
                  
              </div>
               <button class="confirm-btn enroll">确 认</button>
    </article>
    <script type="text/javascript">
    var body = document.querySelector('body'),
        html = document.querySelector('html'),
        back = document.querySelector('.back'),
        main = document.querySelector('.main');

    function resizeBack() {
        var htmlHeight = html.clientHeight,
            mainHeight = main.clientHeight; //内容高度
        var height = (htmlHeight > mainHeight) ? htmlHeight : mainHeight;
        back.style.height = height + "px";
    }
    resizeBack();
    window.addEventListener('resize', resizeBack, false);
    </script>
    <script src="js/lib/require.js" data-main="js/entry/fetch.js"></script>
</body>

</html>
