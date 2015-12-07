<?php
/*
 * 阿里云oss文件信息同步到bmob数据库
 */
use OSS\OssClient;
require_once './bmob/lib/BmobObject.class.php';
require_once './bmob/lib/BmobUser.class.php';
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


try {
	$oss_client = new OssClient($accessKeyId, $accessKeySecret, $endpoint);
} catch (Exception $e) {
	print $e;
}
$bucket = '99dayin';

//获取所有用户信息
$bmobUser = new BmobUser();
$res = $bmobUser->get();
$res = $res->results;
foreach ($res as &$user){
	$userId = $user->objectId;
	//循环每个用户文件夹
	
	
	
	
	
	
}


















/**
 * 列出Bucket内所有目录和文件， 根据返回的nextMarker循环调用listObjects接口得到所有文件和目录
 *
 * @param OssClient $ossClient OssClient实例
 * @param string $bucket 存储空间名称
 * @return null
 */
function listAllObjects($ossClient, $bucket)
{
    $prefix = 'user_upload/';
    $delimiter = '/';
    $nextMarker = 'a';
    $maxkeys = 30;
    while (true) {
        $options = array(
            'delimiter' => $delimiter,
            'prefix' => $prefix,
            'max-keys' => $maxkeys,
            'marker' => $nextMarker,
        );
        //var_dump($options);
        try {
            $listObjectInfo = $ossClient->listObjects($bucket, $options);
        } catch (OssException $e) {
            printf(__FUNCTION__ . ": FAILED\n");
            printf($e->getMessage() . "\n");
            return;
        }
        // 得到nextMarker，从上一次listObjects读到的最后一个文件的下一个文件开始继续获取文件列表
        $nextMarker = $listObjectInfo->getNextMarker();
        $listObject = $listObjectInfo->getObjectList();
        $listPrefix = $listObjectInfo->getPrefixList();
        var_dump(($listPrefix));
        var_dump(($nextMarker));
        if ($nextMarker === '') {
            break;
        }
    }
}



