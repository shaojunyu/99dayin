module.exports=function(e){e.set({basePath:__dirname,frameworks:["mocha","chai"],files:[{pattern:"test/img/*.png",watched:!1,included:!1,served:!0},"./test/**/*.spec.js"],exclude:[],preprocessors:{"./test/**/*.spec.js":["webpack"]},reporters:["spec"],port:9876,colors:!0,logLevel:e.LOG_INFO,autoWatch:!0,browsers:["PhantomJS"],singleRun:!0,webpack:require("./webpack.config"),plugins:[require("karma-webpack"),require("karma-mocha"),require("karma-chai"),require("karma-spec-reporter"),require("karma-phantomjs-launcher")]})};