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
									$items = $cart->getItems ();
									?>
            <a class="container-upload" href="javascript:void(0)"
				data-num='<?php echo count($items)?>'>上传文件<input class="upload"
				type="file" id="file-upload" multiple
				accept="application/msword,image/jpeg,image/png,application/vnd.ms-powerpoint,,application/nd.ms-works,application/vnd.ms-excel" /></a>
		</article>
		<article class="choose-base" id="choose-base">
			<header class="base-header" id="base-header">
				<button class="active" id="official-base">官方文库</button>
				<!-- <button id="share-base">共享文库</button> -->
				<input type="search" placeholder="输入关键字查找文件，按回车确定" id="search">
			</header>
			<section class="base-content">
				<div class="article-content" id="article-content">
					<div class="articles">
						<div class="article-item" data-id="23123444553">
							<i class="file-logo logo-word"></i>
							<p class="file-header">小树和小雨的故事</p>
							<p>
								<span class="upload-time">2015/2/19</span>打印次数:<span
									id="print-num">133333</span>大小:<span id="size">200</span>kb
							</p>
							<i class="add-btn" data-mark="official-1" data-id="23123444553"></i>
						</div>
						<div class="article-item" data-id="23123444523">
							<i class="file-logo logo-word"></i>
							<p class="file-header">小树和小雨的故事</p>
							<p>
								<span class="upload-time">2015/2/19</span>打印次数:<span
									id="print-num">133333</span>大小:<span id="size">200</span>kb
							</p>
							<i class="add-btn" data-mark="official-2" data-id="23123444523"></i>
						</div>
						<div class="article-item" data-id="23123444553">
							<i class="file-logo logo-word"></i>
							<p class="file-header">小树和小雨的故事</p>
							<p>
								<span class="upload-time">2015/2/19</span>打印次数:<span
									id="print-num">133333</span>大小:<span id="size">200</span>kb
							</p>
							<i class="add-btn" data-mark="official-1" data-id="23123444553"></i>
						</div>
						<div class="article-item" data-id="23123444523">
							<i class="file-logo logo-word"></i>
							<p class="file-header">小树和小雨的故事</p>
							<p>
								<span class="upload-time">2015/2/19</span>打印次数:<span
									id="print-num">133333</span>大小:<span id="size">200</span>kb
							</p>
							<i class="add-btn" data-mark="official-2" data-id="23123444523"></i>
						</div>
						<div class="article-item" data-id="23123444553">
							<i class="file-logo logo-word"></i>
							<p class="file-header">小树和小雨的故事</p>
							<p>
								<span class="upload-time">2015/2/19</span>打印次数:<span
									id="print-num">133333</span>大小:<span id="size">200</span>kb
							</p>
							<i class="add-btn" data-mark="official-1" data-id="23123444553"></i>
						</div>
						<div class="article-item" data-id="23123444523">
							<i class="file-logo logo-word"></i>
							<p class="file-header">小树和小雨的故事</p>
							<p>
								<span class="upload-time">2015/2/19</span>打印次数:<span
									id="print-num">133333</span>大小:<span id="size">200</span>kb
							</p>
							<i class="add-btn" data-mark="official-2" data-id="23123444523"></i>
						</div>
						<div class="article-item" data-id="23123444553">
							<i class="file-logo logo-word"></i>
							<p class="file-header">小树和小雨的故事</p>
							<p>
								<span class="upload-time">2015/2/19</span>打印次数:<span
									id="print-num">133333</span>大小:<span id="size">200</span>kb
							</p>
							<i class="add-btn" data-mark="official-1" data-id="23123444553"></i>
						</div>
						<div class="article-item" data-id="23123444523">
							<i class="file-logo logo-word"></i>
							<p class="file-header">小树和小雨的故事</p>
							<p>
								<span class="upload-time">2015/2/19</span>打印次数:<span
									id="print-num">133333</span>大小:<span id="size">200</span>kb
							</p>
							<i class="add-btn" data-mark="official-2" data-id="23123444523"></i>
						</div>
					</div>
					<div class="articles">
						<div class="article-item">
							<i class="file-logo logo-word"></i>
							<p class="file-header">小树和小雨的故事</p>
							<p>
								<span class="upload-time">2015/2/19</span>打印次数:<span
									id="print-num">133333</span>大小:<span id="size">200</span>kb
							</p>
							<i class="add-btn" data-mark="official-1"></i>
						</div>
						<div class="article-item">
							<i class="file-logo logo-word"></i>
							<p class="file-header">小树和小雨的故事</p>
							<p>
								<span class="upload-time">2015/2/19</span>打印次数:<span
									id="print-num">133333</span>大小:<span id="size">200</span>kb
							</p>
							<i class="add-btn" data-mark="official-2"></i>
						</div>
					</div>
					<div class="articles">
						<div></div>
						<div></div>
					</div>
				</div>
				<div class="pagination" id="pagination">
					<div class="hover-btns">
						<i class="active" data-order="1"></i> <i data-order="2"></i> <i
							data-order="3"></i>
					</div>
					<button id="another-group">换一组</button>
				</div>
			</section>
		</article>
		<div class="shopping-store" id="store">
			<div class="shopping-header">
				<i class="shopping-uparrow " id="shopping-arrow"></i>
				<div class="shopping-btn">
					<!-- <button id="show-store">查看打印车</button> -->
					<button id="show-shopping">前去结算</button>
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
								</p> <i class="logo-error" data-mark="<?php echo $item->fileHash?>" data-area="self"></i></li>
                            
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
