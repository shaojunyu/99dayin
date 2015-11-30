<?php
use Qiniu\Auth;
use Qiniu\Storage\BucketManager;
use Sts\Request\V20150401 as Sts;
use OSS\OssClient;
defined('BASEPATH') OR exit('No direct script access allowed');

class Test extends CI_Controller{
	var $qiniu_auth;
	
	public function __construct(){
		parent::__construct();
		require_once APPPATH.'third_party/leancloud/AV.php';
		

	}
	
	public function index(){
		require_once APPPATH.'third_party/aliyun_oss/vendor/autoload.php';
		$accessKeyId = "GtzMAvDTnxg72R04"; ;
		$accessKeySecret = "VhD2czcwLVAaE7DReDG4uEVSgtaSYK";
		$endpoint = "oss-cn-hangzhou.aliyuncs.com";
		try {
			$oss_client = new OssClient($accessKeyId, $accessKeySecret, $endpoint);
		} catch (Exception $e) {
			var_dump($e);
		}
		$oss_client->setTimeout(3600);
		$oss_client->setConnectTimeout(30);
		$object = "user_upload/test.ppt";
		try {
			//$exist = $oss_client->doesObjectExist('dayin', $object);
			$objectMeta = $oss_client->getObjectMeta('dayin', $object);
			//var_dump($objectMeta);
		} catch (Exception $e) {
			var_dump($e->getMessage());
		}
		
		
		
		//下载文件
		$localfile = "./temp/test.ppt";
		$options = array(
				OssClient::OSS_FILE_DOWNLOAD => $localfile,
		);
		try {
			//$oss_client->getObject('dayin', $object, $options);
		} catch (Exception $e) {
			var_dump($e);
		}
		
		try {
			$command = APPPATH.'third_party/exe/PPTPages'.' '.$localfile;
			exec($command,$output);
			var_dump($output);
		} catch (Exception $e) {
		}
		
		
	}
}