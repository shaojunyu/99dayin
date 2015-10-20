<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use leancloud\AVUser;
use leancloud\AVSms;
use leancloud\Sms;
use Qiniu\Auth;
use Qiniu\Storage\BucketManager;
use leancloud\AVObject;
use leancloud\AVQuery;

class Api extends CI_Controller{
	private $AVUser;
	private $AVSms;
	private $qiniu_auth;
	private $pingpp_app_id;
	
	private $local_data;
	
	public function __construct(){
		parent::__construct();
		
		//token验证
		
		//引入leancloud
		require_once APPPATH.'/third_party/leancloud/AV.php';
		$this->AVUser = new AVUser();
		$this->AVSms = new AVSms();
		
		//引入qiniu
		require_once APPPATH.'third_party/qiniu/autoload.php';
		$qiniu_accessKey = 'kbnA7-cyf2y4j3JmmB8xKcQszBtQvpl45TAFMZ2z';
		$qiniu_secretKey = 'e4gSw3iZxrOGI372CjaeMwP6Rif_2ekqfEbPgybA';
		$this->qiniu_auth = new Auth($qiniu_accessKey, $qiniu_secretKey);
		
// 		//引入ping++
// 		require_once APPPATH.'third_party/pingpp/init.php';
// 		$test_key = 'sk_test_0CKaPS8CmDeLfr9CCOmXHGGS';
// 		$live_key = 'sk_live_bOz9YlaOHrS7dFw9yYlUif7R';
// 		$this->pingpp_app_id = 'app_SO0anHPWznHCbL0y';
// 		\pingpp\Pingpp::setApiKey($test_key);
		//本地用户数据保存
		
	}
	public function test(){
		$cart = new MY_Cart();
		$cart->addItem('123', 'dadsad');
		//var_dump($cart->deleteItem('dadsad'));
		//var_dump($cart->getItems());
		
		
// 		$cart = new AVObject('Cart');
// 		$cart->userId = 'qwerty';
// 		$cart->items = array('a'=>1,'b'=>'c');
// 		$res = $cart->save();
// 		var_dump($res);
// 		$pay_channel = 'wx_pub_qr';
// 		switch ($pay_channel) {
// 			case 'wx_pub':
// 				$extra = array(
// 					'open_id' => 'Openid'
// 	        	);
// 			break;
// 			case 'wx_pub_qr':
// 				$extra = array(
// 					'product_id' => 'testid'
// 				);
// 				break;
// 		}
// 		try {
// 			$charge = \pingpp\Charge::create(array(
// 					'app'=>array('id' => 'app_SO0anHPWznHCbL0y'),
// 					'currency'  => 'cny',
// 					'client_ip' => '127.0.0.1',
// 					'order_no'=>'12345679',
// 					'amount'    => 10,
// 					'subject'   => '99收款',
// 					'body'      => 'Your Body',
// 					'channel'   => 'wx_pub_qr',
// 					'extra'     => $extra
// 			));
// 			var_dump($charge);
// 		} catch (Exception $e) {
// 			echo($e->getHttpBody());
// 		}
	}
	
	public function signup(){
		$username = $this->input->post('username');
		$password = $this->input->post('password');
		$phone = $this->input->post('phone');
		$college = $this->input->post('college');
		

		try {
			$this->AVUser->mobilePhoneNumber = $phone;
			$this->AVUser->college = $college;
			$this->AVUser->signup($username,$password);
			$this->echo_msg(true,'注册成功');
			$this->session->set_userdata(array('username'=>$username));
			//获取userid
			$query = new AVQuery('_User');
			$query->where('username', $username);
			$res = $query->find()->results[0];
			$this->session->set_userdata('userId',$res->objectId);
			exit();
		} catch (Exception $e) {
			$this->echo_msg(false,'注册失败！'.$e->error_msg);
			exit();
		}
	}
	public function login() {
		$username = $this->input->post('username');
		$password = $this->input->post('ps');
		$this->AVUser->username = $username;
		$this->AVUser->password = $password;
		try {
			$this->AVUser->login();
			$this->echo_msg(true,'登录成功');
			$this->session->set_userdata('username',$username);
			
			//获取userid
			$query = new AVQuery('_User');
			$query->where('username', $username);
			$res = $query->find()->results[0];
			$this->session->set_userdata('userId',$res->objectId);
			exit();
		} catch (Exception $e) {
			$this->echo_msg(false,'用户名或密码错误');
			exit();
		}
	}
	public function logout(){
		$this->session->sess_destroy();
		$this->echo_msg(true);		
	}
	
	//发送验证码
	function sendSmsCode(){
		$this->AVSms->mobilePhoneNumber = $this->input->post('phone');
		try {
			$res = $this->AVSms->requestSmsCode();
			$this->echo_msg(true,'验证码发送成功');
			exit();
		} catch (Exception $e) {
			$this->echo_msg(false,$e->error_msg);
			exit();
		}
		
	}
	
	//验证短信验证码
	public function verifySmsCode(){
		$this->AVSms->mobilePhoneNumber = $this->input->post('phone');
		$this->AVSms->smsCode = $this->input->post('smsCode');
		try {
			//echo $this->input->post('phone');
			$res = $this->AVSms->verifySmsCode();
			$this->echo_msg(true,'验证码有效');
		} catch (Exception $e) {
			//echo $this->input->post('phone');;
			$this->echo_msg(false,$e->error_msg);
		}
	}
	//文件上传相关
	public function getUploadToken(){
		$bucket = 'dayin';
		$token = $this->qiniu_auth->uploadToken($bucket);
		if ($token){
			//echo $token;
			$this->echo_msg(true,$token);
			exit();
		}else {
			
		}
	}
	//上传成功 确认信息
	public function uploadACK(){
		$file = new AVObject('Qiniu_file');
		$username = $this->input->post('username');
		$filename = $this->input->post('filename');
		$file->owner = $this->session->userdata('userId');
		$file->filename = $filename;
		
		if (empty($username) || empty($filename)) {
			$this->echo_msg(false,'参数错误');
			exit();
		}
		
		$bucketManager = new BucketManager($this->qiniu_auth);
		$fileInfo = $bucketManager->stat('dayin', $filename);
		$fileHash = $fileInfo[0]['hash'];
		$file->fileHash = $fileHash;
		
		try {
			//文件信息保存到云
			$file->save();
			//存入购物车
			$cart = new MY_Cart();
			$cart->addItem($filename,$fileHash);
			
			$this->echo_msg(true,$fileHash);
			exit();
		} catch (Exception $e) {
			$this->echo_msg(false,'上传失败'.$e->error_msg);
			exit();
		}
		
	}
	
	//删除购物车中的项目
	public function deleteCartItem(){
		$fileHash = $this->input->post('mark');
		
		$cart = new MY_Cart();
		if ($cart->deleteItem($fileHash)) {
			$this->echo_msg(true,'删除成功');
		}else {
			$this->echo_msg(false,'删除失败，请重试');
		}
	}
	//获取文件列表
	public function getFileList(){
		$bucket = 'dayin';
		$buketManager = new BucketManager($this->qiniu_auth);
		$list = $buketManager->listFiles($bucket);
		$file_array = array();
		foreach ($list[0] as $file){
			$tmp['name'] = $file['key'];
			//$tmp['date'] = $file['putTime'];
			$tmp['size'] = number_format($file['fsize']/1024/1024,2);
			$tmp['type'] = $file['mimeType'];
			$file_array[] = $tmp;
		}
		var_dump($list);
		$this->echo_msg(true,$file_array);
	}
	
	//订单相关
	public function createPay(){
		//订单状态
		//购物车->确认订单（完善，确认订单信息）->提交订单->支付订单->商家打印->等待配送->完成订单
// 		$username = $this->input->post('username');
// 		$files = $this->input->post('files');
		$order = new MY_Order();
		$charge = $order->createPingPay();
		echo ($charge);
	}
	
	
	//封装数据，json格式，返回客户端
	private function echo_msg($isSuccess = false,$msg = ''){
		echo json_encode(array("success"=>$isSuccess,'msg'=>$msg));
	}
}