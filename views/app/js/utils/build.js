({
    appDir: '../',
    baseUrl: './',
    dir: '../r6-built',
    paths: { //在config里面的相对目录.相对路径是根据,bulid.js的当前目录
        'jquery': 'lib/jQuery',
        'scroll': 'entry/function/scroll', //滚动条插件
        'modal': 'lib/jquery.simplemodal', //模态框插件
        'utility': 'entry/utility/utility', //基本工具函数
        'prompt': 'entry/function/prompt', //提示模块
        'enroll': 'entry/function/enroll', //注册模块
        'ping': 'lib/pingpp-pc', //ping++插件
        'checkEvent': 'entry/function/checkAll',
        'header': 'entry/header',
        'iscroll': 'lib/iscroll'
        // 'SMS': 'https://cdn1.lncld.net/static/js/av-mini-0.6.1.js' //短信模块
    },
    modules: [{
        name: 'entry/99print'
    }, {
        name: 'entry/99shopping'
    }, {
        name: 'entry/bg'
    }, {
        name: 'entry/center'
    }, {
        name: 'entry/pay'
    },// {
    //     name: 'entry/store'
    // }, 
    {
        name: 'entry/upload'
    }]
})
