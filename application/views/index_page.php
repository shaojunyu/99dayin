<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <link rel="stylesheet" type="text/css" href="./styles/homepage.css" />
    <title>99打印</title>
</head>

<body>
<div class="prompt"></div>

	<?php $this->load->view('public/page_header');?>

    <div id="container">
        <div class="section first">
            <div class="main-content">
                <div class="des"><img src="./img/desc.png" alt="描述"></div>
                <a href="<?php if ($this->session->userdata('username')) {echo base_url('user/upload');}else {echo 'javascript:void(0)';}?>" data-log="<?php if ($this->session->userdata('username')) {echo 1;}else {echo 0;}?>" class="print-btn">Print</a>
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
                        <div class="link-header"><a style="color:#fff" target="blank" href="./helper/base.html">关于文库</a></div>
                        <div class="link-content"><a href="./helper/base.html">文库简介</a></div>
                        <div class="link-content"><a href="./helper/base.html">使用说明</a></div>
                        <div class="link-content"><a href="./helper/base.html">鼓励分享</a></div>
                    </div>
                    <div class="column">
                        <div class="link-header"><a style="color:#fff" target="blank" href="./helper/orderServe.html">订单服务</a></div>
                        <div class="link-content"><a href="./helper/orderServe.html">购买指南</a></div>
                        <div class="link-content"><a href="./helper/orderServe.html">支付方式</a></div>
                        <div class="link-content"><a href="./helper/orderServe.html">送货政策</a></div>
                    </div>
                    <div class="column">
                        <div class="link-header"><a style="color:#fff" target="blank" href="./helper/company.html">关于公司</a></div>
                        <div class="link-content"><a href="./helper/company.html">公司简介</a></div>
                        <div class="link-content"><a href="./helper/company.html">加入我们</a></div>
                        <div class="link-content"><a href="./helper/company.html">联系我们</a></div>
                    </div>
                    <div class="column">
                        <div class="link-header"><a style="color:#fff" target="blank" href="./helper/followUs.html">关于我们</a></div>
                        <div class="link-content"><a href="./helper/followUs.html">新浪微博</a></div>
                        <div class="link-content"><a href="./helper/followUs.html">官方微信</a></div>
                        <div class="link-content"><a href="./helper/followUs.html">官方贴吧</a></div>
                    </div>
                    <div class="column QR">
                        <img style="width:120px;height:120px;" src="./img/QR-code.png">
                    </div>
                </div>
            </footer>
        </div>
    </div>
    <div class="login-frame" id="login-frame">
        <div class="header-btn"><span class="active login-btn">登录</span><i class="logo-close simplemodal-close"></i></div>
        <div class="portrait"><img src="./img/portrait.png"></div>
        <div class="input-frame">
            <input  type="text" class="login-account" placeholder="用户名"/><i class="logo-user"></i>
            <input  type="password" class="login-ps" placeholder="密码"/><i class="logo-ps"></i>
        </div>
        <div class="forget"><a href="">忘记密码</a></div>
        <div>
            <button class="confirm-btn login-btn" id="confirm-btn">确认</button>
        </div>
<<<<<<< HEAD
       <!--  <div class="link-login">
            其他方式登录:<span class="QQ" id="QQ-login"><i class="logo-QQ"></i>QQ登录</span><span class="wei"><i class="logo-wei"></i>微信登录</span>
        </div> -->
=======
>>>>>>> f0ca365a14eab76d43777502c929a154c7cf1e6f
        <div class="login-choice">
            <div class="user-login active">
                <div>用</div>
                <div>户</div>
                <div>登</div>
                <div>录</div>
            </div>
<<<<<<< HEAD
           <!--  <div class="store-login ">                
                <div>打</div>
                <div>印</div>
                <div>店</div>
                <div>登</div>
                <div>录</div>
            </div> -->
=======
>>>>>>> f0ca365a14eab76d43777502c929a154c7cf1e6f
        </div>
    </div>
   <div class="signin-frame" id="signin-frame">
          <div class="header-btn"><span class="active signin-btn">注册</span><i class="logo-close simplemodal-close"></i></div>
          <div class="register">
              <div class="row">
                  <span class="des">用户名：</span>
                  <input type="text" class="username" data-iden='0'>
                  <i></i>
              </div>
              <div class="row">
                  <span class="des">密码：</span>
                  <input type="password" class="ps" data-iden='0'>
                  <i></i>
              </div>
              <div class="row">
                  <span class="des">确认密码：</span>
                  <input type="password" class="confir-ps" data-iden='0'>
                  <i></i>
              </div>
              <div class="row">
                  <span class="des">手机号码：</span>
                  <input type="text" class="phone" data-iden='0'>
                  <i></i>
              </div>
              <div class="row">
                  <span class="des">验证码：</span>
                  <input class="CF-code secu-code" type="text" data-iden='0'>
                  <button class="comfir-btn" class="send-SC">发送验证码</button>
                  <i></i>
              </div>
              <div class="row">
                  <span class="des">学校：</span>
                  <select type="text" class="college" name='school' data-iden='1'>
                      <option value="华中科技大学">华中科技大学</option>
                      <option value="武汉大学">武汉大学</option>
                      <option value="华中师范大学">华中师范大学</option>
                      <option value="中南财经政法大学">中南财经政法大学</option>
                  </select>
                  <i></i>
              </div>
          </div>
          <div>
              <button class="confirm-btn enroll">确 认</button>
          </div>
      </div>
    
    <script src="js/lib/require.js" data-main="js/entry/99print.js"></script>

</body>

</html>
