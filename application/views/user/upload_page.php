<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0,user-scalable=no">
<link rel="stylesheet" type="text/css"
	href="<?php echo base_url()?>styles/upload.css">
<title>99打印</title>
</head>

<body>
	<div class="prompt"></div>
<?php $this->load->view('public/page_header');?>
    <div class="content">
		<!-- 上传文件 -->
		<div class="fn-choice" id="fn-choice">
			<button class="active" id="upolad-files">上传文件</button>
			<button id="base-choose">文库选择</button>
			<span class="color-block"></span>
		</div>
		<article class="file-content" id="file-content">
        	<?php
									$cart = new MY_Cart ();
									$items = $cart->getItems();
									?>
            <a class="container-upload" id="container-upload" href="javascript:void(0)"
				data-num='<?php echo count($items)?>'>上传文件
				<!-- <input class="upload"
				type="file" id="file-upload" multiple 
				accept="application/msword,image/jpeg,image/png,application/vnd.ms-powerpoint,,application/nd.ms-works,application/vnd.ms-excel" /> -->
				</a>
				  <!-- <a id="uploadfiles" href="javascript:;">[Upload files]</a> -->
		</article>
		<article class="choose-base" id="choose-base">
			<section class="base-content">
				<div class="article-content" id="article-content">
					<div class="articles">

					</div>
					<div class="articles">
						<div></div>
						<div>正在建设中</div>
					</div>
				</div>
				<div class="pagination" id="pagination">
					<button id="another-group">正在建设！</button>
				</div>
			</section>
		</article>
		<div class="shopping-store" id="store">
			<div class="shopping-header">
				<i class="shopping-uparrow " id="shopping-arrow"></i>
				<div class="shopping-btn">
					<!-- <button id="show-store">查看打印车</button> -->
					<a href="javascript:void(0)" id="show-shopping">前去结算</a>
					<span class="scroll-frame"></span>
				</div>
			</div>
			<div class="shopping-content">
				<article class="base-choose">
					<div id="wrapper_1" class="container">
						<ul class="files-content" id="scroller">
						<?php
						if ($items) {
							foreach ( $items as $item ) {
								?>
							
                            <li>
								<i class="file-logo logo-word"></i>
								<p class="file-header"><?php echo $item->filename?></p>
								<p>
									上传时间:<span class="upload-time">2015/2/19 23:04</span>大小:<span>200</span>kb
								</p> <i class="logo-error" data-mark="<?php echo $item->fileMD5?>" data-area="self"></i>
							</li>
                            
                            <?php }}?>
                        </ul>

					</div>
				</article>
			</div>
		</div>
	</div>

	<script src="js/lib/require.js" data-main="js/entry/upload.js"></script>
	

</body>

</html>
