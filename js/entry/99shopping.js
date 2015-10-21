 require.config({
     baseUrl: './js',
     paths: {
         'jquery': 'lib/jQuery',
         'scroll': 'lib/iscroll',
         'modal': 'lib/jquery.simplemodal',
         'utility': 'entry/utility/utility',
         'prompt': 'entry/function/prompt', //提示模块
   
     }
 });
 require(['jquery', 'utility', 'scroll', 'prompt'], function($, util, scroll, prompt) {
     //初始化提示信息
     var prompt = new prompt.Prompt({
         prompt: $('.prompt')
     });
     //发送的url地址
     var Pathurl = {
         checkout: '', //发送结算信息给后台
         center: '', //用户中心的地址
         back:'',
         
     }
     var Iscroll = bindScroll($('.container'));
     //!!!!! FileMarks已经在网页脚本中定义，可以直接获取
     /*
      * FileMarks里面包含的字段有
      * name: 文件名
      * mark: 文件唯一性标识
      * type: 文件类型
      */

     //计算总价     
     var $all_gross = $('.gross-price'),
         $total_price = $('.total-price');

     function changeGross($single, $gross, pages) {
         var single_price = Number($single.html());
         $gross.html(Number(pages) * single_price);
     }

     function totalPrice($gross, $total) {
         var temp = 0;
         for (var i = 0; i < $gross.length; i++) {
             temp += Number($gross.eq(i).html());
             console.log(1);
         }
         $total.html(temp);


     }
     setTimeout(function() {
         totalPrice($all_gross, $total_price);
     }, 1000);
     $('.pages').on('change blur', function() {
         var $tr = $(this).parent().parent(), //找到点击的元素所在的行
             $single = $tr.find('.single'), //获取单价
             $gross = $tr.find('.gross-price'), //获取总价
             reg = /^\d+$/,
             pages = $(this).val().trim();
         if (!reg.test(pages)) {
             prompt.changeInfo("输入的份数必须为整数且大于0");
             $(this).val(1);
         } else if (Number(pages) === 0) {
             prompt.changeInfo('小朋友不可以是0哦~~');
             $(this).val(1);
         } else {
             changeGross($single, $gross, pages) //计算出商品总价      
             totalPrice($all_gross, $total_price);
         }
     });
     $('.page-size').on('change', function() {
         var single_price, //单价
             $tr = $(this).parent().parent(),
             $single = $tr.find('.single'),
             $gross = $tr.find('.gross-price'),
             pages = $tr.find('.pages').val();
         switch ($(this).val()) {
             case "A1":
                 single_price = 3;
                 break;
             case "A2":
                 single_price = 2.5;
                 break;
             case "A3":
                 single_price = 2;
                 break;
             case "A4":
                 single_price = 1.5;
                 break;
         }
         $single.html(single_price);
         changeGross($single, $gross, pages);
         totalPrice($all_gross, $total_price);
     });
     var Delete_btn = {
         $delete_btns: $('.delete-btns'),
         $tbody: $('tbody'),
         removeRow: function($target) {
             var decision = confirm("确认删除吗？");
             if (decision) {
                 var mark = $target.attr('data-mark'),
                     signal = -1;
                 FileMarks.forEach(function(val, index) {
                     if (Number(mark) === Number(index)) {
                         signal = index;
                     }
                 });
                 FileMarks.splice(index, 1);
                 $target.parents('tr').detach();
                 $all_gross = $('.gross-price'); //重新获取tr元素，消除缓存
                 totalPrice($all_gross, $total_price); //改变总价
                 setTimeout(function() {
                     Iscroll.forEach(function(val) {
                         val.refresh();
                     });
                 }, 0);
             }
         },
         init: function() {
             var _this = this;
             this.$tbody.on('click', function(e) {
                 var $target = $(e.target);
                 if ($target.hasClass('delete-btns')) {
                     _this.removeRow($target);
                 }
             })
         }
     }
     Delete_btn.init();
     var Operator = {
         $plus: $('.plus'),
         $minus: $('.minus'),
         getInput: function($target) {
             return $target.siblings('input');
         },
         addText: function($target) {
             var num = this.getInput($target);
             num.val(Number(num.val()) + 1);

         },
         decrease: function($target) {
             var num = this.getInput($target);
             num.val(Number(num.val()) - 1);
         },
         init: function() {
             var _this = this;
             this.$plus.on('click', function() {
                 _this.addText($(this));
                 $('.pages').trigger('change');
             });
             this.$minus.on('click', function() {
                 _this.decrease($(this));
                 $('.pages').trigger('change');
             })
             $('.pages').trigger('change');
         }
     }
     Operator.init();
     //!计算总价 
     //结算
     $('input[name="method"]').on('change', function(event) {
         var $pick = $('.pick'),
             $deliver = $('.deliver'),
             method = $(this).val();
         if (method === "到店自取") {
             $pick.show().siblings().hide();
         } else if (method === "送货上门") {
             $deliver.show().siblings().hide();
         }
     })


     var PayBill = {
         checkout: $('.clearing'), //结算按钮
         bills: $('tbody tr'), //获得所有订单
         Files: [], //用户订单库
         getInfo: function() {
             var _this = this,
                 files = [];
             this.bills.each(function() {
                 var name = $(this).find('.file-name').text(), //文件名
                     share = $(this).find('[role="share"] input[value="yes"]').is(':checked'), //是否共享
                     side = $(this).find('[role="page"] input[value="single"]').is(':checked') ? 'single' : 'both', //返回单双面
                     direction = $(this).find('[role="direction"] input[value="column"]').is(':checked') ? 'column' : 'row',
                     ppt_select = $(this).find('[role="direction"] select'), //判断是否存在select
                     pptNum = -1,
                     size = $(this).find('[role="size"] select').val(), //获取页面的大小值
                     copies = $(this).find('[role="copies"] input').val(), //获取份数
                     mark = $(this).find('[role="delete"] a').attr('data-mark'); //获取唯一表示符
                 //判断是否为ppt的文件
                 if (ppt_select.length ? true : false) {
                     pptNum = Number(ppt_select.val()); //存在着获取里面的num值
                 };
                 var obj = {
                     'name': name,
                     'share': share,
                     'side': side,
                     'direction': direction,
                     'pptNum': pptNum,
                     'size': size,
                     'copies': copies,
                     'mark': mark
                 };
                 files.push(obj);
             });
             return files;
         },
         init: function() {
             var _this = this;
             this.checkout.on('click', function() {
                 _this.Files = _this.getInfo(); //获得订单信息
                 //异步发送订单，跳转到个人中心页面
                 var method = $('input[name="method"]:checked').val(),
                     totle = $total_price.html();
                 info = {};
                 if (method == null || method == '') {
                     prompt.changeInfo("请选择收货方式!");
                 } else {
                     if (method === "到店自取") {
                         var stroe_name = $('.print-shop').val(); //获取打印店名称
                         info = {
                             'method': method, //收货方式
                             'store': stroe_name, //打印店
                             'price': totle //总价
                         }

                     } else if (method === "送货上门") {
                         var school_area = $('.school-area').val(), //校区
                             building = $('.building').val(), //楼栋           
                             phone_text = $('.phone').val().trim(), //收货电话
                             address_text = $('.address').val().trim(), //收货地址
                             reg = {
                                 phone: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,
                                 mobile: /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/
                             }; //电话验证      
                         if (!(reg.mobile.test(phone_text) || reg.phone.test(phone_text))) {
                             prompt.changeInfo("号码输入有误");
                         } else if (address_text == "") {
                             prompt.changeInfo("地址不能为空!");
                         } else {
                             info = {
                                 'method': method,
                                 'school_area': school_area,
                                 'building': building,
                                 'phone_text': phone_text,
                                 'address_text': address_text,
                                 'price': totle //总价
                             }
                         }
                     }
                     $(this).addClass('sending'); //禁止多次点击结算按钮
                     sendAjax({
                         url: Pathurl.checkout,
                         data: {
                             "info": info,
                             "files": _this.Files
                         },
                         success: function(data) {
                             if (data.success) {
                                 window.location.href = Pathurl.center;
                             } else {
                                 prompt.changeInfo(data.msg);
                                 $(this).removeClass('sending');
                             }
                         }
                     });
                 }
             });
         }

     }
     PayBill.init();
     // !结算
     //继续上传和文库添加，返回前一页
     $('.upload,.add').on('click', function() {
         sendAjax({
             url: Pathurl.back,
             success: function(data) {
                 if (data.success) {
                     var confir = confirm("确认返回上传吗？您现在上传的物品可就没有了哦，要不先支付吧~");
                     if (confir) {
                         window.location.href = data.upload;
                     }
                 } else {
                     prompt.changeInfo(data.msg);
                 }
             }
         })
     });
 
 })
