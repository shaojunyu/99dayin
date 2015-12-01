
    var upload = {
        upload: $('#file-upload'),
        format: /\.(txt|doc|ppt|docx|wps|rtf|pdf|xls)$/,
        content_a: $('.container-upload'), //包裹input的a标签
        maxLength: 20, //最大上传文件数目
        shopping: $('.files-content'), //购物车
        addBtn: $('.article-content'), //文库里面的添加btn
        delete_btn: $('#scroller'), //删除Btn的ul
        aliToken: {}, //获得aliyun的token值
        expire: 0, //设置过期时间
        /*
         * 用来存放数据
         * 一个obj包含一个文件
         * name : 文件名
         * content: 文件file
         * date:上传日期
         * size: 上传大小
         */
        filesArray: new Array(), //用户自己上传的文件
        official: new Array(), //用户挑选官方提供的文件

        init() {

            this.init2();
            //添加文库操作
            this.addBtn.on('click', function(e) {
                var $target = $(e.target);
                if ($target.hasClass('add-btn')) {
                    var data_area = $target.attr('data-area'),
                        data_mark = $target.attr('data-mark'),
                        $parent = $target.parents('.article-item'),
                        li = document.createElement('li');
                    //将文库改为已添加
                    Base.alreadyAdd($target);
                    _this.official.push({
                        'area': data_area, //文件的位置
                        'mark': data_mark //表示文件唯一性
                    });
                    li.innerHTML = $parent.html().replace('already-add', 'logo-error');
                    _this.shopping.append(li);
                    //刷新滚动条
                    refresh();
                    //然后就没了，最后添加 '前去结算' 的时候将数组发给后台，然后让他请求数据
                }
            })
            this.delete_btn.on('click', function(e) {
                var $target = $(e.target);
                if ($target.hasClass('logo-error')) {
                    _this.deleteItem($target);
                }
            });
        },
        //发送请求获得阿里云的token数据,并检查是否超过过期时间，如果超过
        //重新发送
        getAjax() {
            var msg = '';
            console.log("ajax");
            $.ajax({
                    url: Pathurl.getToken,
                    type: 'get',
                    contentType: "application/json",
                    dataType: 'json'
                })
                .done(function(data) {
                    msg = data;
                })
                .fail(function() {
                    alert("网络错误,请重新发送~");
                    window.location.href = "./";
                })
            return msg;
        },
        init2() {
            /*
             * 发送ajax请求
             */
            let _this = this;
            var uploader = new plupload.Uploader({
                runtimes: 'html5,flash,silverlight,html4', //上传的环境
                browse_button: 'container-upload', //
                container: document.getElementById('file-content'), //上传文件的容器
                // flash_swf_url : 'lib/plupload-2.1.2/js/Moxie.swf',
                // silverlight_xap_url : 'lib/plupload-2.1.2/js/Moxie.xap',

                url: 'http://oss.aliyuncs.com', //上传的参数
                filters: {
                    mime_types: [
                        // { title : "Image files", extensions : "jpg,gif,png" },
                        {
                            title: "document",
                            extensions: 'txt,doc,ppt,docx,wps,rtf,pdf,xls'
                        }
                    ],
                    max_file_size: "50mb", //设置最大上传文件大小
                    prevent_duplicates: true //防止上传相同大小文件
                },
                init: {
                    PostInit() {
                        console.log("this is a num");
                        console.info($('#file-upload'));
                       _this.$upload.on('change', function() {
                            console.log('change');
                            _this.setPara(uploader);
                            uploader.start();
                            return false;
                        })
                    },
                    //上传时触发的函数
                    /*
                     * file包含 file.percent上传的百分比数字，从1-100
                     */
                    UploadProgress(up, file) {
                        prompt.changeInfo(file.percent + "%");
                    },
                    //完成一个file的上传
                    FileUploaded(up, file, info) {
                        console.log(info.status)

                        _this.setPara(up);
                        if (info.status == 200) {
                            //添加购物车数据
                            var file_date = new Date(), //添加日期
                                date = file_date.getFullYear() + '/' + (file_date.getMonth() + 1) + '/' + file_date.getDate(),
                                size = Number(files[i].size / (1024 * 1024)).toFixed(2) + 'MB'; //添加文件大小
                            addFiles(file, date, size, file.id);
                            _this.changeInputText(1);
                            prompt.changeInfo("上传成功~");
                        } else {
                            prompt.changeInfo("上传失败!");
                        }
                    },

                    Error(up, err) {
                        _this.setPara(up);
                        console.log("网络错误~");
                        // window.location.href = "./";
                    }
                }
            });
            uploader.init();
        },
        setPara(up) {
            var data = this.getAjax();
            console.log("setPara");
            new_multipart_params = {
                'key': data.key + '${filename}', //获得文件名
                'policy': data.policyBase64,
                'OSSAccessKeyId': data.accessid,
                'success_action_status': '200', //让服务端返回200,不然，默认会返回204
                'callback': data.callbackbody,
                'signature': data.signature, //由后台获得的签名
            };
            up.setOption({ //设置上传参数
                'url': data.host, //上传文件地址
                'multipart_params': new_multipart_params
            });
        },
        changeInputText(amount) {
            var num = Number(this.content_a.attr('data-num'));
            this.content_a.attr('data-num', num + amount);
        },
        addFiles(file, date, size, mark) {
            var name = file.name.toLowerCase(),
                index = name.indexOf('.'),
                mark = mark;
            li = document.createElement('li'),
                className = '';
            switch (name.substring(index + 1)) {
                case 'doc':
                    className = 'logo-word';
                    break;
                case 'docx':
                    className = 'logo-word';
                    break;
                case 'ppt':
                    className = 'logo-ppt';
                    break;
                case 'pdf':
                    className = 'logo-pdf';
                    break;
                case 'xls':
                    className = 'logo-excel';
                    break;
                default:
                    className = 'logo-ppt';
            }
            li.innerHTML = '<i class="file-logo ' + className + '"></i>' +
                '<p class="file-header">' + name.substring(0, index) + '</p>' +
                '<p>上传时间:<span class="upload-time">' + date + '</span>' +
                '大小:<span>' + size + '</span></p>' +
                '<i class="logo-error" data-mark=' + mark + ' data-area=self></i>';
            $(li).attr('data-type', className);
            this.shopping.append(li);
            //刷新滚动条
            Iscroll.forEach(function(val) {
                setTimeout(function() {
                    val.refresh();
                }, 100);
            })
        },
        //找到specified item并且删除
        findIndex(arr, mark) {
            var loca = null;
            refresh(); //这里的refresh可以去掉，只是给死数据刷新                    
            if (arr.length === 0) {
                return false;
            };
            arr.forEach(function(val, index) {
                if (val.mark === mark) {
                    loca = index;
                }
            });
            arr.splice(loca, 1);
            refresh();

        },
        deleteItem($target) {
            var li = $target.parents('li'),
                mark = $target.attr('data-mark'),
                area = $target.attr('data-area'),
                loca = null,
                _this = this;

            if (area === 'self') {
                this.findIndex(this.filesArray, mark);
            } else {
                this.findIndex(this.official, mark);
            }
            $.ajax({
                url: Pathurl.remove,
                type: 'POST',
                data: {
                    mark: mark
                }
            }).then(function(data) {
                if (data.success) {
                    prompt.changeInfo('删除成功!');
                    error.removeLi(li); //删除指定元素
                    console.log(li);
                    _this.changeInputText(-1);
                } else {
                    prompt.changeInfo('删除失败!');
                }
            })
        }
    }
    upload.init();