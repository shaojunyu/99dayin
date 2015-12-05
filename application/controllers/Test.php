<?php
use Sts\Request\V20150401 as Sts;
use OSS\OssClient;
defined('BASEPATH') OR exit('No direct script access allowed');

class Test extends CI_Controller{
	var $qiniu_auth;
	
	public function __construct(){
		parent::__construct();
		require_once APPPATH.'third_party/bmob/lib/BmobObject.class.php';
		require_once APPPATH.'third_party/bmob/lib/BmobUser.class.php';
		require_once APPPATH.'third_party/bmob/lib/BmobSms.class.php';
	}
	
	public function index(){
		require_once APPPATH.'third_party/aliyun_oss/vendor/autoload.php';
		$accessKeyId = "GtzMAvDTnxg72R04"; ;
		$accessKeySecret = "VhD2czcwLVAaE7DReDG4uEVSgtaSYK";
		$endpoint = "oss-cn-hangzhou.aliyuncs.com";
		echo urldecode('\u5206\u5b50\u751f\u7269\u5b66\u5b9e\u9a8c \u5fc3\u5f97\u4f53\u4f1a.doc');
		
	}
}
