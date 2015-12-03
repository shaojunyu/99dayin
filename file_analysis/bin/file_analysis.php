<?php
/*
 * 分析上级文件夹中的json文件，从阿里云服务器下载文件，分析文件页数，并将信息存到bmob
 */
use OSS\OssClient;
require_once './bmob/lib/BmobObject.class.php';
require_once './aliyun_oss/vendor/autoload.php';
require_once './pdfParser/vendor/autoload.php';
//aliyun 授权信息
$accessKeyId = "GtzMAvDTnxg72R04"; ;
$accessKeySecret = "VhD2czcwLVAaE7DReDG4uEVSgtaSYK";
$endpoint = "oss-cn-hangzhou.aliyuncs.com";

//根据ip确定是内网还是外网
exec('ipconfig',$ipconfig);
$is_inner = false;
foreach ($ipconfig as $config){
	if (strpos($config,'121.43.155.4')){
		$is_inner = true;
		continue;
	}
}
if ($is_inner) {
	$endpoint = "oss-cn-hangzhou-internal.aliyuncs.com";
}else {
	$endpoint = "oss-cn-hangzhou.aliyuncs.com";
}


//循环脚本
while(1){
	//print "wating....\n";
	$handle = opendir('../');
	while ($file = readdir($handle) ){
		//找出json数据文件
		if ($file!='.' && $file!='..' && strpos($file,'.json')) {
			$json = file_get_contents('../'.$file);
			$filedata = json_decode($json,true);
			
			//引入aliyun oss
			$bucket = '99dayin';
			try {
				$oss_client = new OssClient($accessKeyId, $accessKeySecret, $endpoint);
			} catch (Exception $e) {
				var_dump($e);
			}
			$oss_client->setTimeout(240);
			$oss_client->setConnectTimeout(30);
			$object = "user_upload/".$filedata['uploader'].'/'.$filedata['filename'];
			try {
				$exist = $oss_client->doesObjectExist($bucket,$object);
				if ($exist) {
					print "find file info\n";
					//下载文件
					$localfile = "../local-".$filedata['uploader'].'-'.$filedata['filename'];
					//var_dump(realpath($localfile));
					$options = array(
							OssClient::OSS_FILE_DOWNLOAD => $localfile,
					);
					try {
						$time = time();
						print "getting file $filedata[filename] of uploader : $filedata[uploader]\n";
						$oss_client->getObject($bucket, $object, $options);
						print 'download time:'.(time()-$time)."s\n";
					} catch (Exception $e) {
						var_dump($e);
					}
					
					//开始分析
					print "complete download, start analysising ".realpath($localfile)."\n";
					$extension = substr(strrchr($localfile,'.'),1);
					
					$page = 0;
					$type = '';
					switch ($extension){
						case 'pdf':
							$type = 'pdf';
							try {
								$parser = new \Smalot\PdfParser\Parser();
								$pdf = $parser->parseFile($localfile);
								$page = count($pdf->getPages());
								print "pages: $page\n";
							} catch (Exception $e) {
								print $e;
							}
							break;
							
						case 'doc':
						case 'docx':
							$type = 'doc';
							$command ='DOCPages.exe '.realpath($localfile);
							try {
								exec($command,$output);
								$page = array_pop($output);
								print "pages $page\n";
							} catch (Exception $e) {
								print $e;
							}
							break;
							
						case 'ppt':
						case 'pptx':
							$type = 'ppt';
							$command = 'PPTPages.exe '.realpath($localfile);
							try {
								exec($command,$output);
								$page = array_pop($output);
								print "pages $page\n";
							} catch (Exception $e) {
								print $e;
							}
							break;
						
						default:
							$page = '';
							$type = '';
							unlink($file);
							unlink($localfile);
							break;
					}
					
					
					//引入bmob,文件信息存到云端
					try {
						$bmobObj = new BmobObject("File_Info");
						$res = $bmobObj->create(array(
								'filename'=>$filedata['filename'],
								'fileMD5'=>md5($localfile),
								'type'=>$type,
								'pages'=>"$page"
						));
					}catch (Exception $e){
						print $e;
					}
					
					//分析完成后删除本地文件
					try {
						print "deleting files...\n";
						unlink('../'.$file);
						unlink($localfile);
					} catch (Exception $e) {
					}
	
					print "done!\n\n";
				}else {
					try {
						//文件不存在oss
						unlink('../'.$file);
						print "delete file $file\n";
					} catch (Exception $e) {}

					
				}
				
			} catch (Exception $e) {
				
			}
	
		}
	}

}