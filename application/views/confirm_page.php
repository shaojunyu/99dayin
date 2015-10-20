<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="../styles/99shopping.css" />    
    <title>99打印</title>
    <script type="text/javascript">
        var FilesMark = [];  //这里填写后台填模板是的数据,并且一起返回给FilesMark;
    </script>
</head>

<body class="page">
<div class="prompt"></div>
<?php $this->load->view('public/page_header');?>
    <article class="behavior">
        <div class="print-lists">
            <div class="print-lists-btn">打印列表</div>
            <div class="upload"><a href="javascript:void(0)">重新上传</a></div>
            <div class="add"><a href="javascript:void(0)">去文库添加</a></div>
            <div class="files container" id="container">
                <table class="table table-bordered">
                    <thead>
                        <th class="order">序号</th>
                        <th class="file-name">文件名</th>
                        <th class="share">共享</th>
                        <th class="leaf">单/双面</th>
                        <th class="direction">横/竖</th>
                        <th class="ppt-mount">每面PPT的数量</th>
                        <th class="size">大小</th>
                        <th class="single-price">单价</th>
                        <th class="copies">份数</th>
                        <th class="gross">总价</th>
                        <th class="delete">删除</th>
                    </thead>
                    <tbody>
                      <tr>
                            <td role="order">1</td>
                            <td role="file-name">
                                <div><i class="logo-ppt"></i><span class="file-name">2015年春微积分模拟卷(启明)</span></td>
                            </div>
                            <td role="share">
                                <div>
                                    <div>
                                        <input type="radio" name="share1" value="yes" checked>是</div>
                                    <div>
                                        <input type="radio" name="share1" value="no">否</div>
                                </div>
                            </td>
                            <td role="page">
                                <div>
                                    <div>
                                        <input type="radio" name="page1" value="single" checked>单</div>
                                    <div>
                                        <input type="radio" name="page1" value="double">双</div>
                                </div>
                            </td>
                            <td role="direction">
                                <div>
                                    <div>
                                        <input type="radio" name="direction1" value="column" checked>竖</div>
                                    <div>
                                        <input type="radio" name="direction1" value="row">横</div>
                                </div>
                            </td>
                            <td role="ppt-mount">
                                <select>
                                    <option value="1">1</option>
                                    <option value="4">4</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </td>
                            <td role="size">
                                <select class="page-size">
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="A3">A3</option>
                                    <option value="A4">A4</option>
                                </select>
                            </td>
                            <td role="single-price">
                                <span class="single">1.5</span>
                            </td>
                            <td role="copies">
                                <button class="plus"></button><input class="pages" type="text" value="1"><button class="minus"></button>
                            </td>
                            <td role="gross">
                                <span class="gross-price">1</span>
                            </td>
                            <td role="delete">
                                <a class="delete-btns" data-mark="123671278391" href="javascript:void(0)">删除</a>
                            </td>
                        </tr>
                        <tr>
                            <td role="order">1</td>
                            <td role="file-name">
                                <div><i class="logo-ppt"></i>2015年春微积分模拟卷(启明)</td>
                            </div>
                            <td role="share">
                                <div>
                                    <div>
                                        <input type="radio" name="share1" value="yes" checked>是</div>
                                    <div>
                                        <input type="radio" name="share1" value="no">否</div>
                                </div>
                            </td>
                            <td role="page">
                                <div>
                                    <div>
                                        <input type="radio" name="page1" value="single" checked>单</div>
                                    <div>
                                        <input type="radio" name="page1" value="double">双</div>
                                </div>
                            </td>
                            <td role="direction">
                                <div>
                                    <div>
                                        <input type="radio" name="direction1" value="column" checked>竖</div>
                                    <div>
                                        <input type="radio" name="direction1" value="row">横</div>
                                </div>
                            </td>
                            <td role="ppt-mount">
                                <select>
                                    <option value="1">1</option>
                                    <option value="4">4</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </td>
                            <td role="size">
                                <select class="page-size">
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="A3">A3</option>
                                    <option value="A4">A4</option>
                                </select>
                            </td>
                            <td role="single-price">
                                <span class="single">1.5</span>
                            </td>
                            <td role="copies">
                                <button class="plus"></button><input class="pages" type="text" value="1"><button class="minus"></button>
                            </td>
                            <td role="gross">
                                <span class="gross-price">1</span>
                            </td>
                            <td role="delete">
                                <a class="delete-btns" href="javascript:void(0)">删除</a>
                            </td>
                        </tr>

                      <tr>
                            <td role="order">1</td>
                            <td role="file-name">
                                <div><i class="logo-ppt"></i>2015年春微积分模拟卷(启明)</td>
                            </div>
                            <td role="share">
                                <div>
                                    <div>
                                        <input type="radio" name="share1" value="yes" checked>是</div>
                                    <div>
                                        <input type="radio" name="share1" value="no">否</div>
                                </div>
                            </td>
                            <td role="page">
                                <div>
                                    <div>
                                        <input type="radio" name="page1" value="single" checked>单</div>
                                    <div>
                                        <input type="radio" name="page1" value="double">双</div>
                                </div>
                            </td>
                            <td role="direction">
                                <div>
                                    <div>
                                        <input type="radio" name="direction1" value="column" checked>竖</div>
                                    <div>
                                        <input type="radio" name="direction1" value="row">横</div>
                                </div>
                            </td>
                            <td role="ppt-mount">
                                <select>
                                    <option value="1">1</option>
                                    <option value="4">4</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </td>
                            <td role="size">
                                <select class="page-size">
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="A3">A3</option>
                                    <option value="A4">A4</option>
                                </select>
                            </td>
                            <td role="single-price">
                                <span class="single">1.5</span>
                            </td>
                            <td role="copies">
                                <button class="plus"></button><input class="pages" type="text" value="1"><button class="minus"></button>
                            </td>
                            <td role="gross">
                                <span class="gross-price">1</span>
                            </td>
                            <td role="delete">
                                <a class="delete-btns" href="javascript:void(0)">删除</a>
                            </td>
                        </tr>
                        <tr>
                            <td role="order">1</td>
                            <td role="file-name">
                                <div><i class="logo-ppt"></i>2015年春微积分模拟卷(启明)</td>
                            </div>
                            <td role="share">
                                <div>
                                    <div>
                                        <input type="radio" name="share1" value="yes" checked>是</div>
                                    <div>
                                        <input type="radio" name="share1" value="no">否</div>
                                </div>
                            </td>
                            <td role="page">
                                <div>
                                    <div>
                                        <input type="radio" name="page1" value="single" checked>单</div>
                                    <div>
                                        <input type="radio" name="page1" value="double">双</div>
                                </div>
                            </td>
                            <td role="direction">
                                <div>
                                    <div>
                                        <input type="radio" name="direction1" value="column" checked>竖</div>
                                    <div>
                                        <input type="radio" name="direction1" value="row">横</div>
                                </div>
                            </td>
                            <td role="ppt-mount">
                                <select>
                                    <option value="1">1</option>
                                    <option value="4">4</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </td>
                            <td role="size">
                                <select class="page-size">
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="A3">A3</option>
                                    <option value="A4">A4</option>
                                </select>
                            </td>
                            <td role="single-price">
                                <span class="single">1.5</span>
                            </td>
                            <td role="copies">
                                <button class="plus"></button><input class="pages" type="text" value="1"><button class="minus"></button>
                            </td>
                            <td role="gross">
                                <span class="gross-price">1</span>
                            </td>
                            <td role="delete">
                                <a class="delete-btns" href="javascript:void(0)">删除</a>
                            </td>
                        </tr>

                      <tr>
                            <td role="order">1</td>
                            <td role="file-name">
                                <div><i class="logo-ppt"></i>2015年春微积分模拟卷(启明)</td>
                            </div>
                            <td role="share">
                                <div>
                                    <div>
                                        <input type="radio" name="share1" value="yes" checked>是</div>
                                    <div>
                                        <input type="radio" name="share1" value="no">否</div>
                                </div>
                            </td>
                            <td role="page">
                                <div>
                                    <div>
                                        <input type="radio" name="page1" value="single" checked>单</div>
                                    <div>
                                        <input type="radio" name="page1" value="double">双</div>
                                </div>
                            </td>
                            <td role="direction">
                                <div>
                                    <div>
                                        <input type="radio" name="direction1" value="column" checked>竖</div>
                                    <div>
                                        <input type="radio" name="direction1" value="row">横</div>
                                </div>
                            </td>
                            <td role="ppt-mount">
                                <select>
                                    <option value="1">1</option>
                                    <option value="4">4</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </td>
                            <td role="size">
                                <select class="page-size">
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="A3">A3</option>
                                    <option value="A4">A4</option>
                                </select>
                            </td>
                            <td role="single-price">
                                <span class="single">1.5</span>
                            </td>
                            <td role="copies">
                                <button class="plus"></button><input class="pages" type="text" value="1"><button class="minus"></button>
                            </td>
                            <td role="gross">
                                <span class="gross-price">1</span>
                            </td>
                            <td role="delete">
                                <a class="delete-btns" href="javascript:void(0)">删除</a>
                            </td>
                        </tr>
                        <tr>
                            <td role="order">1</td>
                            <td role="file-name">
                                <div><i class="logo-ppt"></i>2015年春微积分模拟卷(启明)</td>
                            </div>
                            <td role="share">
                                <div>
                                    <div>
                                        <input type="radio" name="share1" value="yes" checked>是</div>
                                    <div>
                                        <input type="radio" name="share1" value="no">否</div>
                                </div>
                            </td>
                            <td role="page">
                                <div>
                                    <div>
                                        <input type="radio" name="page1" value="single" checked>单</div>
                                    <div>
                                        <input type="radio" name="page1" value="double">双</div>
                                </div>
                            </td>
                            <td role="direction">
                                <div>
                                    <div>
                                        <input type="radio" name="direction1" value="column" checked>竖</div>
                                    <div>
                                        <input type="radio" name="direction1" value="row">横</div>
                                </div>
                            </td>
                            <td role="ppt-mount">
                                <select>
                                    <option value="1">1</option>
                                    <option value="4">4</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </td>
                            <td role="size">
                                <select class="page-size">
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="A3">A3</option>
                                    <option value="A4">A4</option>
                                </select>
                            </td>
                            <td role="single-price">
                                <span class="single">1.5</span>
                            </td>
                            <td role="copies">
                                <button class="plus"></button><input class="pages" type="text" value="1"><button class="minus"></button>
                            </td>
                            <td role="gross">
                                <span class="gross-price">1</span>
                            </td>
                            <td role="delete">
                                <a class="delete-btns" href="javascript:void(0)">删除</a>
                            </td>
                        </tr>
                        
                      <tr>
                            <td role="order">1</td>
                            <td role="file-name">
                                <div><i class="logo-ppt"></i>2015年春微积分模拟卷(启明)</td>
                            </div>
                            <td role="share">
                                <div>
                                    <div>
                                        <input type="radio" name="share1" value="yes" checked>是</div>
                                    <div>
                                        <input type="radio" name="share1" value="no">否</div>
                                </div>
                            </td>
                            <td role="page">
                                <div>
                                    <div>
                                        <input type="radio" name="page1" value="single" checked>单</div>
                                    <div>
                                        <input type="radio" name="page1" value="double">双</div>
                                </div>
                            </td>
                            <td role="direction">
                                <div>
                                    <div>
                                        <input type="radio" name="direction1" value="column" checked>竖</div>
                                    <div>
                                        <input type="radio" name="direction1" value="row">横</div>
                                </div>
                            </td>
                            <td role="ppt-mount">
                                <select>
                                    <option value="1">1</option>
                                    <option value="4">4</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </td>
                            <td role="size">
                                <select class="page-size">
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="A3">A3</option>
                                    <option value="A4">A4</option>
                                </select>
                            </td>
                            <td role="single-price">
                                <span class="single">1.5</span>
                            </td>
                            <td role="copies">
                                <button class="plus"></button><input class="pages" type="text" value="1"><button class="minus"></button>
                            </td>
                            <td role="gross">
                                <span class="gross-price">1</span>
                            </td>
                            <td role="delete">
                                <a class="delete-btns" href="javascript:void(0)">删除</a>
                            </td>
                        </tr>
                        <tr>
                            <td role="order">1</td>
                            <td role="file-name">
                                <div><i class="logo-ppt"></i>2015年春微积分模拟卷(启明)</td>
                            </div>
                            <td role="share">
                                <div>
                                    <div>
                                        <input type="radio" name="share1" value="yes" checked>是</div>
                                    <div>
                                        <input type="radio" name="share1" value="no">否</div>
                                </div>
                            </td>
                            <td role="page">
                                <div>
                                    <div>
                                        <input type="radio" name="page1" value="single" checked>单</div>
                                    <div>
                                        <input type="radio" name="page1" value="double">双</div>
                                </div>
                            </td>
                            <td role="direction">
                                <div>
                                    <div>
                                        <input type="radio" name="direction1" value="column" checked>竖</div>
                                    <div>
                                        <input type="radio" name="direction1" value="row">横</div>
                                </div>
                            </td>
                            <td role="ppt-mount">
                                <select>
                                    <option value="1">1</option>
                                    <option value="4">4</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </td>
                            <td role="size">
                                <select class="page-size">
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="A3">A3</option>
                                    <option value="A4">A4</option>
                                </select>
                            </td>
                            <td role="single-price">
                                <span class="single">1.5</span>
                            </td>
                            <td role="copies">
                                <button class="plus"></button><input class="pages" type="text" value="1"><button class="minus"></button>
                            </td>
                            <td role="gross">
                                <span class="gross-price">1</span>
                            </td>
                            <td role="delete">
                                <a class="delete-btns" href="javascript:void(0)">删除</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="receiving-method">
                <div class="left-part">
                    <span class="receiving">收货方式:</span>
                    <input type="radio" name="method" id="self-picking" value="到店自取">
                    <label for="self-picking"><span class="logo-radio"></span>到店自取</label>
                    <input type="radio" name="method" id="deliver" value="送货上门">
                    <label for="deliver"><span class="logo-radio"></span>送货上门</label>
                </div>
                <div class="middle-part">
                    <div class="pick">
                        <select class="print-shop">
                            <option value="韵体打印店">韵体打印店</option>
                            <option value="东园打印店">东园打印店</option>
                            <option value="韵苑打印店">韵苑打印店</option>
                            <option value="游泳馆打印店">游泳馆打印店</option>
                        </select>
                        预计30分钟后取货
                    </div>
                    <div class="deliver">
                    <div>
                        <label>校区:</label>
                        <select class="school-area" type="text" placeholder="校区">
                            <!-- <option value="null">校区</option> -->
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="1">5</option>
                            <option value="1">6</option>
                            <option value="1">7</option>
                        </select>
                       <label>楼栋:</label> 
                       <select type="text" class="building" placeholder="楼栋">
                            <!-- <option value="null">楼栋</option> -->
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        <label>收货时间:</label>
                         <select class='time'>
                            <option value="12:30-13:00">12:30-13:00</option>
                            <option value="18:30-19:00">18:30-19:00</option>
                            <option value="22:30-23:00">22:30-23:00</option>
                        </select>
                    </div>
                        <input class="address" type="text" placeholder="请输入收货地址" />
                       <input class="phone" type="text" placeholder="电话" />
                    </div>
                </div>
                <div class="right-part">
                    总价:<span class="total-price">123</span>元
                    <button class="btn btn-primary clearing">结算</button>
                </div>
            </div>
        </div>
    </article>
  
    <script src="js/lib/require.js" data-main="js/entry/99shopping.js"></script>
    
</body>

</html>
