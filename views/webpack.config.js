// var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
module.exports = {
    context: __dirname + "/app/js/entry",
    entry: {
        print: './99print.js'
    }, //演示单入口文件
    output: {
        path: path.join(__dirname, 'out'), //打包输出的路径 
        filename: '[name].entry.js', //打包后的名字
    },
    resolve: {
        modulesDirectories: ['app/js'],
        alias: {
            'jquery': 'lib/jQuery',
            'scroll': 'entry/function/scroll', //滚动条插件
            'modal': 'lib/jquery.simplemodal', //模态框插件
            'utility': 'entry/utility/utility', //基本工具函数
            'prompt': 'entry/function/prompt', //提示模块
            'enroll': 'entry/function/enroll', //注册模块
            'SMS': 'https://cdn1.lncld.net/static/js/av-mini-0.6.1.js', //短信模块
            'md5': "lib/spark-md5.min",
            'encryption': "entry/function/encryption"
        },
        extensions:["", ".webpack.js", ".web.js", ".js"]
    }
    // ,
    // module: {
    // 	loaders: [
    // 		{
    // 			test: /\.css$/,
    // 			loader: ExtractTextPlugin.extract("css-loader")
    // 		},
    // 		{ test: /\.png$/, loader: "file-loader" }
    // 	]
    // },
    // plugins: [
    // 	new ExtractTextPlugin("[name].css", { allChunks: true })
    // ]
};
