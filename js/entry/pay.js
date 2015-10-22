window.QRLogin = {};
window.code = 408;
jQuery(function(){
    
    var qrcodeChangeInterval = setInterval(changeQrcode, 290 * 1000), //<300s
        //host = "http://10.12.22.241",
        host = "https://wx.tenpay.com",
        uuid = "",
        payMsg$ = $("#payMsg"),
        defalutPayClass = payMsg$[0].className,
        qrCodeTimeout = null;

    function changePayInfo(info){
        payMsg$[0].className = defalutPayClass + " " + info;
    }

    function changeQrcode() {
        var self = arguments.callee,
            restart = function () {
                clearTimeout(qrCodeTimeout);
                qrCodeTimeout = setTimeout(self, 10000);
            },
            data = {
                _:new Date().getTime()
            };
        // for (var i in setting) {
        //     data[i] = setting[i];
        // }
        // $.ajax({
        //     url:"https://login.weixin.qq.com/jspay",
        //     type:"GET",
        //     dataType:"script",
        //     data: data,
        //     cache:false,
        //     success:function () {
        //         var _code = window.QRLogin.code;
        //         if (_code == 200 && window.QRLogin.uuid) {
        //             uuid = window.QRLogin.uuid;

        //             var QRcode$ = $("#QRcode");
        //             if(!QRcode$.attr("src")){
        //                 setTimeout(function(){
        //                     var w$ = $(window), h = w$.height(), ot = 715;
        //                     if(h < ot){
        //                         var t = ot - h,i = 0, interval;
        //                         interval = setInterval(function(){
        //                             if(i < t) w$.scrollTop(i=i+3);
        //                             else clearInterval(interval)
        //                         }, 1);
        //                     }
        //                 }, 10);
        //             }

        //             QRcode$.attr("src", host + "/cgi-bin/mmpayweb-bin/getpayqrcode?uuid=" + uuid);
        //             changePayInfo("qr_default");

        //             _poll();
        //         } else {
        //             restart();
        //         }
        //     },
        //     error:restart
        // });
    }
    function confirm(){
        $.ajax({
            url:Pathurl.getResult
        })
        .done(function(data){
            if(data.success){
                var mark = confirm("支付成功，请点击确认返回首页！");
                if(mark){
                    window.location.href="/";
                }else{
                    window.location.href='/';
                }
            }
        })
        setTimeout(arguments.callee,1500);
    }
   



    function init() {
        changeQrcode();
        // add by xusheng on 04/26
        $(".pay_bill .pay_bill_unit:last-child").addClass("no_extra");

        var _nTimer = 0,
            _oGuide$ = $("#guide"),
            _oGuideTrigger$ = $("#QRcode");

        function _back() {
            _nTimer = setTimeout(function() {
                _oGuide$.stop().animate({marginLeft:"-101px",opacity:0}, "400", "swing",function(){
                    _oGuide$.hide();
                });
            }, 100);
        }

        /*guide*/
        _oGuide$.css({"left":"50%", "opacity":0});
        _oGuideTrigger$.mouseover(function(){
            clearTimeout(_nTimer);
            _oGuide$.css("display", "block").stop().animate({marginLeft:"+147px", opacity:1}, 900, "swing", function() {
                _oGuide$.animate({marginLeft:"+134px"}, 300);
            });
        }).mouseout(_back);

        _oGuide$.mouseover(function(){
            clearTimeout(_nTimer);
        }).mouseout(_back);
        confirm();
    }

    init();
});
