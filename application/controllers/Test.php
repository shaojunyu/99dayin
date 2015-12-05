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

		header('Content-Type: text/event-stream');
		header('Cache-Control: no-cache'); // 建议不要缓存SSE数据
		
		/**
		 * Constructs the SSE data format and flushes that data to the client.
		 *
		 * @param string $id Timestamp/id of this connection.
		 * @param string $msg Line of text that should be transmitted.
		 */
		function sendMsg($id, $msg) {
		  echo "id: $id" . PHP_EOL;
		  echo "data: $msg" . PHP_EOL;
		  echo PHP_EOL;
		  ob_flush();
		  flush();
		}
		
		$serverTime = time();
		$n = 1000;
		while ($n){
			sendMsg($serverTime, 'server time: ' . date("h:i:s", time()));
			$n--;
		}
		
	}
}
