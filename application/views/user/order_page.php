<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <link rel="stylesheet" type="text/css" href="../styles/center.css">
    
    <title>99打印</title>
</head>

<body>
    <div class="prompt"></div>
	<?php $this->load->view('public/page_header');?>
    <div class="back-control">
        <div class="content">
            <div class="left-part basic-detail">
                <div class="per-detail">
                    <img class="portrait" src="img/portrait.png" />
                    <div class="detail">
                        <a href="javascript:void(0)"><?php echo $this->session->userdata('username');?></a>
                        
                        <p>积分:<span></span> 余额:<span></span>元</p>
                    </div>
                </div>
                <p class="indicative">名称</p>
                <div class="authentic">
                    <button class="authentic-btn">九九打印</button>
                    <div class="authenticating">
                        <button>认证中...</button>
                        <a href="">联系客服</a>
                    </div>
                </div>
                <p class="indicative">个人信息</p>
                <div class="info">
                    <p>手机：<span><?php echo isset($userInfo->mobilePhoneNumber)?$userInfo->mobilePhoneNumber:'暂无';?></span></p>
                    <p>邮箱：<span><?php if (isset($userInfo->email)){echo $userInfo->email;}else{echo '暂无';}?></span></p>
                </div>
                <div class="basic-btn">
                    <button class="edit-info">编辑信息</button>
                    <button class="change-ps-btn">修改密码</button>
                </div>
            </div>
            <div class="left-part authentic-page">
                <div class="per-detail">
                    <img class="portrait" src="img/portrait.png" />
                    <div class="detail">
                        <a href=""><?php echo $this->session->userdata('username');?></a>
                        <p>手机:<span><?php echo isset($userInfo->mobilePhoneNumber)?$userInfo->mobilePhoneNumber:'暂无';?></span></p>
                        <p>积分:<span></span> 余额:<span></span>元</p>
                    </div>
                </div>
                <p class="statement">为保护版权，我们需要确认您是本校学生。 我们向您保证，您的资料不会被泄露。 请放心上传。
                </p>
                <div class="upload-img">
                    <div class="IDcard">
                        <a class="container-upload" href="javascript:void(0)">上传身份证<input class="upload" type="file" id="idCard-file"/></a>
                        <img src="" alt="" data-type="idCard">
                    </div>
                    <div class="studentCard">
                        <a class="container-upload" href="javascript:void(0)">上传学生证<input class="upload" type="file" id="stu-card-file" /></a>
                        <img src="" alt="" data-type='stuCard'>
                    </div>
                </div>
                <p class="statement">审核时间通常为2小时以内。 若超时未能完成，请联系客服
                </p>
                <div class="basic-btn">
                    <button class="back">取消</button>
                    <button class="confirm-btn">确认</button>
                </div>
            </div>
            <div class="left-part change-ps">
                <div class="per-detail">
                    <img class="portrait" src="img/portrait.png" />
                    <div class="detail">
                        <a href=""><?php echo $this->session->userdata('username');?></a>
                        <p>手机:<span><?php echo $userInfo->mobilePhoneNumber;?></span></p>
                        <p>积分:<span></span> 余额:<span></span>元</p>
                    </div>
                </div>
                <div class="ps-input">
                    <input class="old-ps" type="password"><span>旧密码:</span></div>
                <div class="ps-input">
                    <input class="new-ps" type="password"><span>新密码:</span></div>
                <div class="ps-input">
                    <input class="confir-ps" type="password"><span>再次确认:</span></div>
                <div class="basic-btn">
                    <button class="back">取消</button>
                    <button class="prompt-ps">确认</button>
                </div>
            </div>
            <!-- 
            * 填写个人信息
             -->
            <div class="left-part change-info">
                <div class="per-detail">
                    <img class="portrait" src="img/portrait.png" />
                    <div class="detail">
                        <a href=""><?php echo $this->session->userdata('username');?></a>
                        <p>手机:<span><?php echo $userInfo->mobilePhoneNumber;?></span></p>
                        <p>积分:<span></span> 余额:<span></span>元</p>
                    </div>
                </div>
                <p class="info-title">个人信息</p>
                <div class="ps-input ">
                    <input class="name" type="type" value="<?php echo isset($userInfo->name)?$userInfo->name:'';?>" ><span>姓名:</span></div>
                <div class="ps-input">
                    <input class="phone" style="cursor:no-drop" type="type" readonly value="<?php echo $userInfo->mobilePhoneNumber;?>"><span>手机:</span></div>
                <div class="ps-input">
                    <!-- <button class="get-code">获取验证码</button> -->
                    <!-- <input class="confir-code" type="type" data-iden='0'><span>验证码:</span> -->
                </div>
                <div class="ps-input">
                    <input class="email" type="type" value="<?php echo isset($userInfo->email)?$userInfo->email:'';?>"><span>邮箱:</span>
                </div>
                <div class="basic-btn">
                    <button class="back">取消</button>
                    <button class="change-btn">确认</button>
                </div>

            </div>
            <div class="right-part">
                <div class="per-header">
                    <div class="extra-btn">
                    </div>
                    <div class="orders-choice">
                        <button class="pre-order-btn active">未处理订单</button>
                        <!-- <button class="dealing-order">处理中订单</button> -->
                        <button class="historic-order-btn">历史订单</button>
                    </div>
                </div>
                <div class="order-interface">
                    <div class="order-header">
                        <div class="order-info">
                            订单信息
                        </div>
                        <div class="opera">
                            操作
                        </div>
                    </div>
                    <!-- *
                    * 每个order包含的内容有
                    * data-order: 订单编号
                    * 收货地址
                    * 电话
                    * 总价
                    * data-seq 是订单在原来数组中的位置                    
                    * -->
                    <div id="wrapper1" class="container pre-order">
                        <ul class="order-content" id="scroller">
                        <?php 
                        	foreach ($orders as $order){
                        		if($order->state == orderState::UNPAID){
                        ?>
                            <li>
                                <div class="order-details">
                                    <div >订单编号:<span class="order-num"><?php echo $order->objectId;?></span></div>
                                    <div>取货地址:<span>韵苑按打印店</span></div>
                                    <div>包含文件:
                                        <button class="showFiles" data-order="<?php echo $order->objectId;?>">查看文件</button>
                                    </div>
                                </div>
                                <div class="order-btns">
                                    <a class="go-pay" href="javascript:void(0)">去付款</a>
                                    <a class="cancel" data-order="<?php echo $order->objectId;?>" href="javascript:void(0)">取消订单</a>
                                </div>
                                <div class="summary">
                                    <div class="summary-info">
                                        总价：<span class="money"><?php echo $order->totalPrice/100;?></span> 收货方式：
                                        <span>自助取货</span> 支付状态：
                                        <span>未支付</span>
                                    </div>
                                    <img src="img/divided.png">
                                </div>
                            </li>
                            <?php }}?>
                        </ul>
                    </div>
                    <div class="container his-order" id="wrapper2">
                        <ul class="his-content" id="scroller">
                        <?php 
                        foreach ($orders as &$order){
                        	if ($order->state == orderState::PAID){
                        ?>
                            <li>
                                <div class="order-details">
                                    <div>订单编号:<span><?php echo $order->objectId;?></span></div>
                                    <div>收货地址:<span>韵苑按打印店</span></div>
                                    <div>包含文件:
                                        <button class="showFiles" data-order="<?php echo $order->objectId;?>">查看文件</button>
                                    </div>
                                </div>
                                <div class="order-btns">
                                    <!--    <a class="go-pay" href="javascript:void(0)" data-seq='1'>去付款</a>       -->
                                    <a class="add-print" data-order="12324412312" data-seq='1' href="javascript:void(0)">加印</a>
                                </div>
                                <div class="summary">
                                    <div class="summary-info">
                                        总价：<span><?php echo $order->totalPrice/100; ?></span> 收货方式：
                                        <span>自助取货</span> 支付状态：
                                        <span>已完成</span>
                                    </div>
                                    <img src="img/divided.png">
                                </div>
                            </li>
                            <?php }}?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <div class="file-info">
        <header><span>序号</span>
            <span>文件名</span>
            <span>单/双面</span>
            <span>横/竖</span>
            <span>每页PPT数量</span>
            <span>大小</span>
            <span>份数</span>
        </header>
        <div class="container files" id="warpper2">
            <article id="scroller">
           <!--  <div class="row" data-num='1'>
                    <span>1</span>
                    <span><i class="logo-minword"></i>华科大数学竞赛</span>
                    <span>单</span>
                    <span>横</span>
                    <span></span>
                    <span>A4</span>
                    <span>1</span>
                </div> -->
            </article>
        </div>
    </div>
    <div class="paying" data-num=''>
        <header class="title">支付中<i class="close simplemodal-close">X</i></header>
        <article class="content">
            <p>您将转至支付页面进行支付！</p>
            <p>请您在新打开的支付页面进行支付，支付完成前请不要关闭此窗口。</p>
        </article>
        <footer class="paying-btn">
            <button>已完成支付</button>
            <button>支付遇到问题</button>
        </footer>
    </div>
     <div class="method" data-num=''>
        <header class="title">支付方式<i class="close simplemodal-close">X</i></header>
        <article class="content">
            <p>请选择支付方式~</p>
        </article>
        <footer class="paying-btn">
            <a href="javascript:void(0)" class="wetChat">微信支付</a><a href="javascript:void(0)" class="aliyPay">支付宝支付</a>
        </footer>
    </div>
    <script src="js/lib/require.js" data-main="js/entry/center.js"></script>
</body>

</html>
