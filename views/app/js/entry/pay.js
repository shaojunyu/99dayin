require.config({
    baseUrl: './js',
    paths: {
        'jquery': 'lib/jQuery',
        'scroll': 'lib/iscroll',
        'header': 'entry/header',
        // 'modal': 'lib/jquery.simplemodal',
        'utility': 'entry/utility/utility',
        'prompt': 'entry/function/prompt', //提示模块
        'enroll': 'entry/function/enroll', //注册模块
        'ping++': 'lib/pingpp-pc', //ping++插件
        'modal': 'lib/jquery.simplemodal', //模态框插件
        'md5': "lib/spark-md5.min",
        'encryption': "entry/function/encryption"
    }
})
require(['encryption'], function(encryption) {
    function GetRequest() {
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1),
                strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }

    function ajax() {
        var url = encryption.Encryption('../index.php/api/isPaid'),
            chargeId = document.querySelector('.pay_bill_value').innerHTML,
            xhr = new XMLHttpRequest(),
            data;
        xhr.onreadystatechange = function() {
            var completed = 4;
            if (xhr.readyState === completed) { //这里的xhr可以用this.代替 if(xhr.status === 200){ //200表示请求成功 
                data = JSON.parse(xhr.responseText);
                if (data.success) {
                    window.close();
                }
                ajax();
            }
        }
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.withCredentials = true;
        xhr.send(JSON.stringify({
            chargeId: chargeId
        }));
    };

    setTimeout(() => {
        ajax();
    }, 1000);

})
