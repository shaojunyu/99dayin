<?php 
//获取charge信息,穿过来charge对象
$wx_qr = $charge->__toArray()['credential']->__toArray()['wx_pub_qr'];
var_dump($charge->__toArray());

?>
<html><head>
  <meta charset="utf-8">
  <title>99打印在线支付</title>
  <link rel="stylesheet" type="text/css" href="./styles/pay.css">  
  <script type="text/javascript">
    
  </script>
  <script type="text/javascript" src="./js/lib/jQuery.js"></script>
  <script type="text/javascript" src="./js/entry/pay.js"></script>
  <!--<script type="text/javascript" src="https://getfirebug.com/firebug-lite-debug.js"></script>-->
<style id="style-1-cropbar-clipper">
.en-markup-crop-options {
    top: 18px !important;
    left: 50% !important;
    margin-left: -100px !important;
    width: 200px !important;
    border: 2px rgba(255,255,255,.38) solid !important;
    border-radius: 4px !important;
}

.en-markup-crop-options div div:first-of-type {
    margin-left: 0px !important;
}
</style></head>
<body>
<div class="header pngFix">
  <h1 class="pay_logo"><a href="/" class="index_access"><img class="pngFix" src="./img/pay/logo_pay.png" alt="微信支付标志" title="微信支付"></a></h1>
</div>
<div class="content">
  <div class="wrapper mail_box">
    <div class="mail_box_inner pngFix">
      <div class="area primary">
        <div class="pay_msg qr_default" id="payMsg">
          <div class="area_hd">
            <h2>支付结果</h2>
          </div>
          <div class="area_bd" id="pay_succ">
            <i class="icon110_msg pngFix"></i>
            <h3 class="pay_msg_t">购买成功</h3>
            <div id="payMsgDetail" class="vh">
                <p class="pay_msg_desc"><span id="userName">&lt;用户&gt;</span>，你使用<strong id="bankCard">&lt;银行卡&gt;</strong>银行卡完成了本次交易。</p>
                <p class="pay_tip"><span id="redirectTimer">5</span>秒后返回商户网页，你也可以点击 <a href="javascript:;" target="_blank" id="resultLink">这里</a> 立即返回。</p>
            </div>
          </div>

          <div class="area_bd" id="pay_error">
            <i class="icon110_msg pngFix"></i>
            <h3 class="pay_msg_t">无法支付</h3>
            <p class="pay_msg_desc">商品金额大于银行卡快捷支付限额</p>
          </div>

          <div class="area_bd" id="qr_normal">
            <span class="qr_img_wrapper"><img class="qrcode" alt="二维码" id="QRcode" src="http://qr.liantu.com/api.php?el=h&text=<?php echo $wx_qr; ?>"><img class="guide pngFix" src="./img/pay/webpay_guide.png" alt="" id="guide" style="left: 50%; opacity: 0;"></span>
            <div class="msg_default_box">
              <i class="icon60_qr pngFix"></i>
              <p>请使用微信扫描<br>二维码以完成支付</p>
            </div>
            <div class="msg_box">
              <i class="icon60_qr pngFix"></i>
              <p><strong>扫描成功</strong>请在手机确认支付</p>
            </div>
          </div>

        </div>
      </div>
      <div class="area second">
        <div class="pay_bill shopping">
          <div class="area_hd">
            <h2>支付清单</h2>
            <span class="icon_wrapper"><i class="icon60_pay pngFix"></i></span>
          </div>
          <div class="area_bd">
            <h3 class="pay_money"> <span>￥</span><?php echo $orderInfo->totalPrice/100;?></h3>
                                          <div class="pay_bill_unit no_extra">
                  <dl>
                    <dt>99打印在线支付</dt>
                    <dd>订单编号：<?php echo $this->input->get('orderId');?></dd>
                  </dl>
                  <div class="pay_bill_info">
                    <p><label>交易单号</label><span class="pay_bill_value"><?php echo $charge->__toArray()['id'];?></span></p>
                    <p><label>创建时间</label><span class="pay_bill_value"><?php echo $orderInfo->createdAt;?></span></p>
                  </div>
                </div>
                                            <!--
            <div class="pay_bill_unit no_extra">
              <dl>
                <dt></dt>
                <dd></dd>
              </dl>
              <div class="pay_bill_info">
                <p><label>交易单号</label><span class="pay_bill_value"></span></p>
                <p><label>创建时间</label><span class="pay_bill_value"></span></p>
              </div>
            </div>
            -->
          </div>
        </div>
      </div>
      <div class="aside">
        <div class="pay_widget help">
          <div class="pay_widget_hd">
            <i class="icon30_add_on pngFix"></i>
          </div>
        </div>
<!--         
  这是另一种更简单的结构，但是扩展性较差。
        <dl class="pay_widget help">
          <dt class="widget_name">客服</dt>
          <dd class="widget_desc">020 - 865437767</dd>
          <dd class="widget_pic"><i class="icon30_add_on"></i></dd>
        </dl>
 -->        
      </div>
    </div>
    <b class="mail_box_corner left pngFix"></b>
    <b class="mail_box_corner right pngFix"></b>
  </div>
</div>
<div class="footer">
  <p class="copyright">© 武汉巧然电子科技有限公司</p>
</div>
<!--[if IE 6]>
<script type="text/javascript" src="/zh_CN/htmledition/js/DD_belatedPNG1c27aa.js"></script>
<script type="text/javascript"> window.onload = function() { DD_belatedPNG.fix(".pngFix"); } </script>
<![endif]-->


</body></html>