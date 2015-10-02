<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <link rel="stylesheet" type="text/css" href="./styles/homepage.css" />
    <title>99打印</title>
</head>

<body>
    <div class="header">
        <div class="setWidth">
            <a class="logo" href="#">
                <img class="logo-print" src="./img/logo.png" alt="logo" />
                <span>久久打印</span>
            </a>
            <div class="titles">
                <div class="title-btn homepage-btn" data-content="首页">首页</div>
                <div class="title-btn introduction" data-content="简介">简介</div>
                <div class="title-btn art-base" data-content="本校文库">本校文库</div>
                <div class="title-btn"><span class="login" id="login" data-content="登录">登录</span><span>|</span><span class="signin" id="signin" data-content="注册">注册</span></div>
            </div>
        </div>
    </div>
    <div id="container">
        <div class="section first">
            <div class="main-content">
                <div class="des"><img src="./img/desc.png" alt="描述"></div>
                <button class="print-btn">Print</button>
            </div>
            <div class="next-arrow"><img id="down-arrow" src="./img/newhand.gif"></div>
        </div>
        <div class="section second">
            <div class="step-part">
                <img class="step" src="./img/step.png">
                <img class="back-top" src="./img/backTop.png" />
            </div>
            <footer class="links">
                <img class="link-bg" src="./img/bg-logo.png" />
                <div class="more">
                    <div class="column">
                        <div class="link-header">关于文库</div>
                        <div class="link-content"><a href="#">文库简介</a></div>
                        <div class="link-content"><a href="">使用说明</a></div>
                        <div class="link-content"><a href="">鼓励分享</a></div>
                    </div>
                    <div class="column">
                        <div class="link-header">订单服务</div>
                        <div class="link-content"><a href="">购买指南</a></div>
                        <div class="link-content"><a href="">支付方式</a></div>
                        <div class="link-content"><a href="">送货政策</a></div>
                    </div>
                    <div class="column">
                        <div class="link-header">关于公司</div>
                        <div class="link-content"><a href="">公司简介</a></div>
                        <div class="link-content"><a href="">加入我们</a></div>
                        <div class="link-content"><a href="">联系我们</a></div>
                    </div>
                    <div class="column">
                        <div class="link-header">关于我们</div>
                        <div class="link-content"><a href="">新浪微博</a></div>
                        <div class="link-content"><a href="">官方微信</a></div>
                        <div class="link-content"><a href="">官方贴吧</a></div>
                    </div>
                    <div class="column QR">
                        <img src="./img/QR-code.png">
                    </div>
                </div>
            </footer>
        </div>
    </div>
    <div class="login-frame" id="login-frame">
        <div class="header-btn"><span class="active login-btn">登录</span><span class="signin-btn">注册</span><i class="logo-close simplemodal-close"></i></div>
        <div class="portrait"><img src="./img/portrait.png"></div>
        <div class="input-frame">
            <input class="" type="text" /><i class="logo-user"></i>
            <input class="" type="password" /><i class="logo-ps"></i>
        </div>
        <div class="forget"><a href="">忘记密码</a></div>
        <div>
            <button class="confirm-btn">确认</button>
        </div>
        <div class="link-login">
            其他方式登录:<span class="QQ"><i class="logo-QQ"></i>QQ登录</span><span class="wei"><i class="logo-wei"></i>微信登录</span>
        </div>
    </div>
    <div class="signin-frame" id="signin-frame">
        <div class="header-btn"><span class="login-btn">登录</span><span class="active signin-btn">注册</span><i class="logo-close simplemodal-close"></i></div>
        <div class="register">
            <div class="row">
                <span class="des">用户名：</span>
                <input type="text">
                <i></i>
            </div>
            <div class="row">
                <span class="des">密码：</span>
                <input type="password">
                <i></i>
            </div>
            <div class="row">
                <span class="des">确认密码：</span>
                <input type="password">
                <i></i>
            </div>
            <div class="row">
                <span class="des">手机号码：</span>
                <input type="text">
                <i></i>
            </div>
            <div class="row">
                <span class="des">验证码：</span>
                <input class="CF-code" type="text">
                <button class="comfir-btn">发送验证码</button>
                <i ></i>
            </div>
            <div class="row">
                <span class="des">学校：</span>
                <input type="text">
                <i></i>
            </div>
        </div>
        <div>
            <button class="confirm-btn">确 认</button>
        </div>
    </div>
    <script src="js/lib/require.js" data-main="js/entry/99print.js"></script>
</body>

</html>
