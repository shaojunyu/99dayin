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
		//echo json_encode('%E5%88%86%E5%AD%90%E7%94%9F%E7%89%A9%E5%AD%A6%E5%AE%9E%E9%AA%8C%20%E5%BF%83%E5%BE%97%E4%BD%93%E4%BC%9A.doc');
		$o = new MY_Order();
		//$o->createOrder();
		$CART = new MY_Cart();
		var_dump($CART->getItems());
	}
}
