    <div class="header">
        <div class="setWidth">
            <a class="logo" href="#">
                <img class="logo-print" src="./img/logo.png" alt="logo" />
                <span>九九打印</span>
            </a>
            <div class="titles">
                <a href="http://www.99dayin.com" class="title-btn homepage-btn" data-content="首页">首页</a>
                <a href="javascript:void(0)" class="title-btn introduction" data-content="简介">简介</a>
                <!-- <div class="title-btn art-base" data-content="本校文库">本校文库</div> -->
                <div class="title-btn">
                <?php if ($this->session->userdata('username')) {?>
                <a class="name"><?php echo $this->session->userdata('username')?></a>
                <?php }else {?>
                <span class="login" id="login" data-content="登录">登录</span><span>|</span><span class="signin" id="signin" data-content="注册">注册</span>
                <?php }?>
                </div>
                </div>
                 <div class="detail-btn">
                    <a href="./<?php echo strpos(current_url(),'user/')?'':'user/';?>orders">个人中心</a>
                    <a href="./<?php echo strpos(current_url(),'user/')?'':'user/';?>upload">打印列表</a>
                    <a class="logout" href="javascript:void(0)">退出登录</a>
                </div>
         </div>
        </div>