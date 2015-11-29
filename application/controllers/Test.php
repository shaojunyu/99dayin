<?php
use Qiniu\Auth;
use Qiniu\Storage\BucketManager;
use Sts\Request\V20150401 as Sts;
defined('BASEPATH') OR exit('No direct script access allowed');

class Test extends CI_Controller{
	var $qiniu_auth;
	
	public function __construct(){
		parent::__construct();
		require_once APPPATH.'third_party/leancloud/AV.php';
		
		//引入qiniu
		require_once APPPATH.'third_party/qiniu/autoload.php';
		$qiniu_accessKey = 'kbnA7-cyf2y4j3JmmB8xKcQszBtQvpl45TAFMZ2z';
		$qiniu_secretKey = 'e4gSw3iZxrOGI372CjaeMwP6Rif_2ekqfEbPgybA';
		$this->qiniu_auth = new Auth($qiniu_accessKey, $qiniu_secretKey);
		

	}
	
	public function index(){
	}
	
	function gmt_iso8601($time) {
		$dtStr = date("c", $time);
		$mydatetime = new DateTime($dtStr);
		$expiration = $mydatetime->format(DateTime::ISO8601);
		$pos = strpos($expiration, '+');
		$expiration = substr($expiration, 0, $pos);
		return $expiration."Z";
	}
	
	function get_token(){
		require_once APPPATH.'third_party/oss_php_sdk_20140625/sdk.class.php';
		$id= 'GtzMAvDTnxg72R04';
		$key= 'VhD2czcwLVAaE7DReDG4uEVSgtaSYK';
		$host = 'http://dayin.oss-cn-hangzhou.aliyuncs.com';
		$now = time();
		$expire = 30; //设置该policy超时时间是10s. 即这个policy过了这个有效时间，将不能访问
		$end = $now + $expire;
		$expiration = $this->gmt_iso8601($end);
		
		$oss_sdk_service = new alioss($id, $key, $host);
		$dir = 'user-dir/';
		
		//最大文件大小.用户可以自己设置
		$condition = array(0=>'content-length-range', 1=>0, 2=>1048576000);
		$conditions[] = $condition;
		
		//表示用户上传的数据,必须是以$dir开始, 不然上传会失败,这一步不是必须项,只是为了安全起见,防止用户通过policy上传到别人的目录
		$start = array(0=>'starts-with', 1=>'$key', 2=>$dir);
		$conditions[] = $start;
		
		
		//这里默认设置是２０２０年.注意了,可以根据自己的逻辑,设定expire 时间.达到让前端定时到后面取signature的逻辑
		$arr = array('expiration'=>$expiration,'conditions'=>$conditions);
		//echo json_encode($arr);
		//return;
		$policy = json_encode($arr);
		$base64_policy = base64_encode($policy);
		$string_to_sign = $base64_policy;
		$signature = base64_encode(hash_hmac('sha1', $string_to_sign, $key, true));
		
		$response = array();
		$response['accessid'] = $id;
		$response['host'] = $host;
		$response['policy'] = $base64_policy;
		$response['signature'] = $signature;
		$response['expire'] = $end;
		//这个参数是设置用户上传指定的前缀
		$response['dir'] = $dir;
		echo json_encode($response);
	}
	
}