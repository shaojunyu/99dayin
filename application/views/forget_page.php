<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>九九打印</title>
    <link rel="stylesheet" type="text/css" href="../styles/fetch.css">
</head>

<body>
<div class="prompt"></div>

<div class="prompt"></div>
    <div class="header">
        <div class="setWidth">
            <a class="logo" href="#">
                <img class="logo-print" src="./img/logo.png" alt="logo" />
                <span>久久打印</span>
            </a>
            <a href="http://www.99dayin.com" class="titles">
                <div class="title-btn homepage-btn" data-content="首页">首页</div>
                <div class="title-btn introduction" data-content="简介">简介</div>
                <div class="title-btn art-base" data-content="本校文库">本校文库</div>
                <div class="title-btn">
                    <span class="login" id="login" data-content="登录">登录</span><span>|</span><span class="signin" id="signin" data-content="注册">注册</span>
                </div>
            </a>
        </div>
    </div>
	<div class="back"></div>
    <article class="main">
 <!--    <div class="row">
                  <span class="des">用户名：</span>
                  <input type="text" class="username" >
                  
              </div> -->
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
