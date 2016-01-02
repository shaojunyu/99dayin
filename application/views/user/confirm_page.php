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
                <table class="table table-bordered" id="table">
                    <thead>
                        <th class="order">序号</th>
                        <th class="file-name">文件名</th>
                        <th class="share">页数</th>
                        <th class="leaf">单/双面</th>
                        <th class="direction">横/竖</th>
                        <th class="ppt-mount">每面PPT的数量</th>
                        <th class="size">大小</th>
                        <th class="single-price">单价</th>
                        <th class="copies">份数</th>
                        <th class="gross">小记</th>
                        <th class="delete">删除</th>
                    </thead>
                    <tbody>
                    <?php 
                    //传值，array,$items 
                    $num = 1;
                    $total = 0;
                    	foreach ($items as $one){
                    	$item = new MY_Item($one->filename,$one->fileMD5);
                    	$item->printSettings = $one->printSettings;
                    ?>
                   <!--    <tr>
                            <td role="order">1</td>
                            <td >
                                <div><i class="logo-ppt"></i><span class="file-name" role="file-name">2015年春微积分模拟卷(启明)</span></td>
                            </div>
                            <td>
                                <div>
                                    <div>
                                        <input type="radio" name="share1" role="share" value="yes" checked>是</div>
                                    <div>
                                        <input type="radio" name="share1" role="share" value="no">否</div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <div>
                                        <input type="radio" name="page1" role="page" value="single" checked>单</div>
                                    <div>
                                        <input type="radio" name="page1" role="page" value="double">双</div>
                                </div>
                            </td>
                            <td role="direction">
                                <div>
                                    <div>
                                        <input type="radio" name="direction1"  role="direction" value="column" checked>竖</div>
                                    <div>
                                        <input type="radio" name="direction1" role="direction" value="row">横</div>
                                </div>
                            </td>
                            <td  role="ppt-mount">
                             "无"
                            </td>
                            <td >
                                <select  role="size" class="page-size">
                                    <option value="A1">A1</option>
                                    <option value="A2">A2</option>
                                    <option value="A3">A3</option>
                                    <option value="A4">A4</option>
                                </select>
                            </td>
                            <td >
                                <span role="single-price" class="single">1.5</span>
                            </td>
                            <td >
                                <button class="plus" role="copies"></button><input class="pages" type="text" value="1"><button class="minus" role="copies"></button>
                            </td>
                            <td >
                                <span class="gross-price" role="gross"> 1</span>
                            </td>
                            <td 
                                <a class="delete-btns" data-mark="123671278391" role="delete"> href="javascript:void(0)">删除</a>
                            </td>
                        </tr> -->


                      <tr>
                            <td role="order"><?php echo $num;?></td>
                            <td role="file-name">
                                <div><i class="logo-ppt"></i><span class="file-name"><?php echo $item->filename?></span></td>
                            </div>
                           <td  role="share pages-amount" class="pages-amount">
                                <?php echo $item->get_pages()?>
                            </td>
                            <td role="page">
                                <div>
                                    <div>
                                        <input type="radio" name="page<?php echo $num;?>"  data-role="page" value="single"<?php if(!$item->printSettings->isTwoSides){echo 'checked';}?>>单</div>
                                    <div>
                                        <input type="radio" name="page<?php echo $num;?>" data-role="page" value="double" <?php if($item->printSettings->isTwoSides){echo 'checked';}?>>双</div>
                                </div>
                            </td>
                            <td role="direction">
                            	<div>
                            	<div>
                            	<input type="radio" name="direction<?php echo $num;?>" data-role="direction"  value="column" <?php if ($item->printSettings->direction == printDirection::$vertical ){echo 'checked';}?>>竖</div>
                            	<div>
                            	<input type="radio" name="direction<?php echo $num;?>" data-role="direction" value="row" <?php if ($item->printSettings->direction == printDirection::$horizontal ){echo 'checked';}?>>横</div>
                            	</div>
                            	</td>
                            <?php if ($item->fileType == 'PPT') {
                            	
                            	?>
                            	<td  role="ppt-mount">
                            	<select data-role="ppt-mount">
                            	<option value="1"<?php if ($item->printSettings->pptPerPage == pptPerPAge::$onePerPage){echo 'selected';}?>>1</option>
                            	<option value="4"<?php if ($item->printSettings->pptPerPage == pptPerPAge::$fourPerPage){echo 'selected';}?>>4</option>
                            	<option value="6"<?php if ($item->printSettings->pptPerPage == pptPerPAge::$sixPerPage){echo 'selected';}?>>6</option>
                            	<option value="9"<?php if ($item->printSettings->pptPerPage == pptPerPAge::$ninePerPage){echo 'selected';}?>>9</option>
                            	</select>
                            	</td>
                            <?php }else {?>
                            <td  role="ppt-mount">
                             	\
                            </td>
							<?php }?>
                            <td  role="size">
                                <select class="page-size"  data-role="size">
                                    <option value="A4" <?php if($item->printSettings->paperSize == paperSize::$A4){echo 'selected';}?>>A4</option>
                                    <option value="B4" <?php if($item->printSettings->paperSize == paperSize::$B4){echo 'selected';}?>>B4</option>
                                </select>
                            </td>
                            <td  role="single-price" >
                                <span class="single" data-role="single-price"><?php $price=$item->get_price_per_copy()/100; echo $price;?></span>
                            </td>
                            <td  role="copies">
                                <button class="plus"  data-role="copies-btn"></button><input class="pages" readonly type="text" value="<?php echo $item->printSettings->amount;?>"><button class="minus" data-role="copies-btn"></button>
                            </td>
                            <td  role="gross">
                                <span class="gross-price" data-role="gross"><?php  $subtotal = $price*$item->printSettings->amount; echo $subtotal; $total = $total+$subtotal;?></span>
                            </td>
                            <td role="delete">
                                <a class="delete-btns" data-role="delete" data-mark="<?php echo $item->fileMD5?>" href="javascript:void(0)">删除</a>
                            </td>
                        </tr>
                     <?php $num++;}?>
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
                 
                        <label>校区:</label>
                        <select class="school-area" type="text" placeholder="校区">
                            <option value="韵苑">韵苑</option>
                            <option value="沁园">沁园</option>
                            <option value="紫菘">紫菘</option>
                        </select>
                       <label>楼栋:</label> 
                       <select type="text" class="building" placeholder="楼栋">
                        </select>
                        <label>宿舍号:</label>
                        <input class="address" type="text" placeholder="宿舍号" />
                    </div>
                </div>
                <div class="right-part">
                    总价:<span class="total-price"><?php echo $total;?></span>元
                    <button class="btn btn-primary clearing">提交</button>
                </div>
            </div>
        </div>
    </article>
  
    <script src="js/lib/require.js" data-main="js/entry/99shopping.js"></script>
    
</body>

</html>
