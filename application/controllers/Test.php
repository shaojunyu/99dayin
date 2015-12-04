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
		//echo json_encode(array('filename'=>'123'));
		var_dump(json_decode($this->input->raw_input_stream));
		//echo ();
		var_dump($this->input->server('CONTENT_TYPE'));
	}
}
