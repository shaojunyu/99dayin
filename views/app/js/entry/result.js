require.config({
    baseUrl: './js',
    paths: {
       'zepto':'lib/zepto.min'
    }
})
require(['zepto'], function($) {
    var par = new Object();
    var getResult = {
        el: $('.r-result'),
        first: $('.r-first,g.r-first'),
        first_text: $('.r-first-text').find('span'),
        first_img: $('.r-first').find('.figure'),
        second: $('.r-second,g.r-second'),
        second_text: $('.r-second-text').find('span'),
        second_img: $('.r-second').find('.figure'),
        third: $('.r-third,g.r-third'),
        third_text: $('.r-third-text').find('span'),
        third_img: $('.r-third').find('.figure'),
        fourth: $('.r-fourth,g.r-fourth'),
        fourth_text: $('.r-fourth-text').find('span'),
        fourth_img: $('.r-fourth').find('.figure'),
        result_name: $('#r-name'),
        QRPage: $('.QR-code'), //二维码验证
        events: {
            'tap #r-again-btn': 'backIndex',
            'tap #r-follow-btn': 'showQr',
            'tap #QR-code': 'closePage'
        },
        init:function(){
            $.ajax({
                url:'./',
                type:'POST',
                dataType:'JSON',
                contentType:"application/json"
            })
            .then(function(data){  //data的数据包含 测试人姓名: data.name;  测试结果,数组表示: data.tyrants
                par = data;
                getResult();
            })
            $('#r-again-btn').on('tap',function(){
                getResult.backIndex();
            });
            $('#r-follow-btn').on('tap',function(){
                getResult.showQr();
            });
            $('#QR-code').on('tap',function(){
                getResult.closePage();
            })
        },
        render: function() {
            this.$el.show();
            this.fillName(); //填入姓名
            this.showTyrant(); //显示相关土豪信息
        },
        showQr: function() {
            this.QRPage.show();
        },
        closePage: function() {
            this.QRPage.hide();
        },
        backIndex: function() {
            window.location.href = "/";
        },
        shuffle: function(array) { //乱序算法
            var m = array.length,
                t, i;
            // 如果还剩有元素…
            while (m) {
                // 随机选取一个元素…
                i = Math.floor(Math.random() * m--); //随机抽取除前面抽取的牌,
                //与当前最后的元素(不包括以及抽取的元素).交换元素
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }
            return array;

        },
        fillName: function() {
            this.result_name.text(par.name);

        },
        showTyrant: function() {
            var tyrant = this.shuffle(par.tyrants),
                _this = this,
                len = tyrant.length;
            switch (len) {
                case 1:
                    _this.fillInfo(tyrant[0], 1);
                    break;
                case 2:
                    _this.fillInfo(tyrant[0], 1);
                    _this.fillInfo(tyrant[1], 4);
                    break;
                case 3:
                    _this.fillInfo(tyrant[0], 1);
                    _this.fillInfo(tyrant[1], 4);
                    _this.fillInfo(tyrant[2], 3);
                    break;
                case 4:
                    _this.fillInfo(tyrant[0], 1);
                    _this.fillInfo(tyrant[1], 4);
                    _this.fillInfo(tyrant[2], 3);
                    _this.fillInfo(tyrant[3], 2);
                    break;
            }

        },
        fillInfo: function(tyrant, order) {
            var _this = this,
                text, img, $ele;
            switch (order) {
                case 1:
                    text = _this.first_text;
                    img = _this.first_img;
                    $ele = _this.first;
                    break;
                case 2:
                    text = _this.second_text;
                    img = _this.second_img;
                    $ele = _this.second;
                    break;
                case 3:
                    text = _this.third_text;
                    img = _this.third_img;
                    $ele = _this.third;
                    break;
                case 4:
                    text = _this.fourth_text;
                    img = _this.fourth_img;
                    $ele = _this.fourth;
                    break;
            }
            console.info(tyrant.scripts + order);
            console.log(new textFormat(tyrant.scripts, order).content)
            text.html(new textFormat(tyrant.scripts, order).content); //处理输入的Content
            img.attr('src', tyrant.src).addClass('show');
            setTimeout(function() {
                $ele.each(function() {
                    this.classList.add('now');
                })
            }, 1000);
        },
        hide: function() {
            this.$el.hide();
        }
    }
})
