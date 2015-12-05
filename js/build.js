({

baseUrl: './',   //相对于appDir，代表要查找js文件的起始文件夹，下文所有文件路径的定义都是基于这个baseUrl的

dir:"./out",
name:"./entry/upload",

optimizeCss: 'standard',

removeCombined: false,   //如果为true，将从输出目录中删除已合并的文件

paths: {    //相对baseUrl的路径
    'jquery': 'lib/jQuery',
        'iscroll': 'lib/iscroll',
        'modal': 'lib/jquery.simplemodal',
        'prompt': 'entry/function/prompt', //提示模块
        'utility': 'entry/utility/utility', //基本工具函数
        'header': 'entry/header',
        'fileupload': "lib/plupload.full.min",
        'md5': "lib/spark-md5.min",
        'encryption': "entry/function/encryption"
    }
}) 