<?php
use Pingpp\Transfer;
defined('BASEPATH') OR exit('No direct script access allowed');
require_once APPPATH.'third_party/pingpp/init.php';
require_once APPPATH.'third_party/bmob/lib/BmobObject.class.php';
require_once APPPATH.'third_party/bmob/lib/BmobUser.class.php';
require_once APPPATH.'third_party/bmob/lib/BmobSms.class.php';

class Api extends CI_Controller{
	private $bmobUser;
	private $bmobSms;
	private $pingpp_app_id;
	private $local_data;
	private $post_data;//获取post数据
	
	public function __construct(){
		parent::__construct();
		
		//api加密
		$time_stamp = $this->input->get('time');
		$token = $this->input->get('token');
		$secret = '99dayin_api_secrete';
		if(empty($time_stamp) || empty($token)){
			exit('url参数错误！无授权参数');
		}
		$md5 = md5($time_stamp.$secret);
		if ($md5 != $token) {
			exit('加密错误！');
		}
		//引入bomb
		$this->bmobUser = new BmobUser();
		//引入ping++
		$test_key = 'sk_test_0CKaPS8CmDeLfr9CCOmXHGGS';
		$live_key = 'sk_live_bOz9YlaOHrS7dFw9yYlUif7R';
		$this->pingpp_app_id = 'app_SO0anHPWznHCbL0y';
		\pingpp\Pingpp::setApiKey($live_key);
		
		//解析post数据,以json格式接收的数据
		if($this->input->server('CONTENT_TYPE') === 'application/json'){
			$this->post_data = json_decode($this->input->raw_input_stream);
		}else {
			
		}
		
	}
	public function index(){
		echo 'api';
	}
	public function test(){
		$b = new BmobObject('test');
		$res = $b->create(array('id'=>'134'));
		var_dump($res);
	}
	//用户相关
	public function signup(){
		$username = $this->input->post('username');
		$password = $this->input->post('password');
		$phone = $this->input->post('phone');
		$college = $this->input->post('college');
		try {
			
			$info = $this->bmobUser->register(array(
					'username'=>$username,
					'password'=>$password,
					'mobilePhoneNumber'=>$phone,
					'college'=>$college
			));
			$this->session->set_userdata('username',$username);
			$this->session->set_userdata('bmobToken',$info->sessionToken);
			//获取userid
			$res = $this->bmobUser->get("",array('where={"username":"'.$username.'"}','limit=1'));
			$res = $res->results[0];
			$this->session->set_userdata('userId',$res->objectId);
			//保存手机号
			$this->session->set_userdata('phone',$res->mobilePhoneNumber);
			$this->echo_msg(true,'注册成功');
			exit();
		} catch (Exception $e) {
			$this->echo_msg(false,'注册失败！'.$e->error_msg);
			exit();
		}
	}
	public function login() {
		$username = $this->post_data->username;
		$password = $this->post_data->password;
		try {
			$info = $this->bmobUser->login($username,$password);
			$this->session->set_userdata('username',$username);
			$this->session->set_userdata('bmobToken',$info->sessionToken);
			//userId
			$this->session->set_userdata('userId',$info->objectId);
			//保存手机号
			$this->session->set_userdata('phone',$info->mobilePhoneNumber);
			$this->echo_msg(true,'登录成功');
			exit();
		} catch (Exception $e) {
			$this->echo_msg(false,'用户名或密码错误');
			exit();
		}
		
	}
	public function loginByPhone(){
		$phone = $this->post_data->phone;
		$password = $this->post_data->password;
		try {
			$res = $this->bmobUser->get('',array('where={"mobilePhoneNumber":"'.$phone.'"}','limit=1'));
			if (empty($res->results[0])) {
				$this->echo_msg(false);
				return ;
			}
		} catch (Exception $e) {
		}
		
		try {
			$username = $res->results[0]->username;
			$info = $this->bmobUser->login($username,$password);
			
			$this->session->set_userdata('username',$username);
			$this->session->set_userdata('bmobToken',$info->sessionToken);
			//userId
			$this->session->set_userdata('userId',$info->objectId);
			//保存手机号
			$this->session->set_userdata('phone',$info->mobilePhoneNumber);
			$this->echo_msg(true);
		} catch (Exception $e) {
			$this->echo_msg(false,'用户名或密码错误');
		}
	}
	
	
	public function logout(){
		$this->session->sess_destroy();
		$this->echo_msg(true);
	}
	
	public function updateUserInfo(){
		try {
			$name = $this->post_data->name;
			//$phone = $this->post_data->phone;
			$email = $this->post_data->email;
			$this->bmobUser->update($this->session->userdata('userId'), $this->session->userdata('bmobToken'),array(
					//'mobilePhoneNumber'=>$phone,
					'name'=>$name,
					'email'=>$email
			));
			$this->echo_msg(true);
		} catch (Exception $e) {
			$this->echo_msg(false,$e->error_msg);
		}
	}
	
	//根据验证码重设密码
	public function resetPassword(){
		$smsCode = $this->post_data->smsCode;
		$newPassword = $this->post_data->newPassword;
		try {
			$this->bmobUser->resetPasswordBySmsCode($smsCode, $newPassword);
			$this->echo_msg(true);
		} catch (Exception $e) {
			if($e->code == '207'){
				$this->echo_msg(false,"验证码错误");
				return ;
			}
			else {
				$this->echo_msg(false,$e->error_msg);
			}
			
		}
		
	}
	
	public function updatePassword(){
		try {
			$oldPassword = $this->post_data->oldPassword;
			$newPassword = $this->post_data->newPassword;
			//$this->bmobUser->updateUserPassword($userId, $sessionToken, $oldPassword, $newPassword)
			$this->bmobUser->updateUserPassword($this->session->userdata('userId'), $this->session->userdata('bmobToken'), $oldPassword, $newPassword);
			$this->echo_msg(true);
		} catch (Exception $e) {
			$this->echo_msg(false,$e->error_msg);
		}
	}
	//发送验证码
	function sendSmsCode(){
		$phone = $this->input->post('phone');
		try {
			$bmobSms = new BmobSms();
			$res = $bmobSms->sendSmsVerifyCode($phone);
			$this->echo_msg(true,'验证码发送成功');
			exit();
		} catch (Exception $e) {
			$this->echo_msg(false,$e->error_msg);
			exit();
		}
		
	}
	
	//验证短信验证码
	public function verifySmsCode(){
		$phone = $this->post_data->phone;
		$smsCode = $this->post_data->smsCode;
		try {
			$bmobSms = new BmobSms();
			$res = $bmobSms->verifySmsCode($phone, $smsCode);
			$this->echo_msg(true,'验证码有效');
		} catch (Exception $e) {
			$this->echo_msg(false,$e->error_msg);
		}
	}
	
	
	//文件上传相关
	private function gmt_iso8601($time) {
		$dtStr = date("c", $time);
		$mydatetime = new DateTime($dtStr);
		$expiration = $mydatetime->format(DateTime::ISO8601);
		$pos = strpos($expiration, '+');
		$expiration = substr($expiration, 0, $pos);
		return $expiration."Z";
	}
	
	public function getUploadToken(){
		$username = $this->session->userdata('username');
		
		require_once APPPATH.'third_party/oss_php_sdk_20140625/sdk.class.php';
    	$id= 'GtzMAvDTnxg72R04';
    	$key= 'VhD2czcwLVAaE7DReDG4uEVSgtaSYK';
    	$host = 'http://99dayin.oss-cn-hangzhou.aliyuncs.com';
    	$callback_body = '{"callbackUrl":"http://www.99dayin.com:12345","callbackHost":"www.99dayin.com","callbackBody":"filename=${object}&size=${size}&mimeType=${mimeType}&height=${imageInfo.height}&width=${imageInfo.width}","callbackBodyType":"application/x-www-form-urlencoded"}';
    	$base64_callback_body = base64_encode($callback_body);
    	$now = time();
    	$expire = 30; //设置该policy超时时间是10s. 即这个policy过了这个有效时间，将不能访问
    	$end = $now + $expire;
    	$expiration = $this->gmt_iso8601($end);

    	$oss_sdk_service = new alioss($id, $key, $host);
    	$dir = 'user_upload/'.$this->session->userdata('userId').'/';

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
    	$response['callback'] = $base64_callback_body;
    	//这个参数是设置用户上传指定的前缀
    	$response['dir'] = $dir;
    	echo json_encode($response);
	}
	
	/**
	 * 验证文件是否已存在
	 */
	public function confirmMD5(){
		$fileMD5 = $this->post_data->fileMD5;
		if (empty($fileMD5)) {
			$this->echo_msg(false);
		}else {
			$bmobObj = new BmobObject('File_Info');
			$res = $bmobObj->get('',array('where={"fileMD5":"'.$fileMD5.'"}','limit=1'));
			if (count($res->results) == 1) {
				$this->echo_msg(true);
			}else {
				$this->echo_msg(false);
			}
		}
	}
	/*
	 * 上传成功，前端回调函数
	 */
	public function uploadACK(){
		if ($this->input->server('CONTENT_TYPE') === 'application/json') {
			$fileMD5 = $this->post_data->fileMD5;
			$filename = urldecode($this->post_data->filename);
		}else {
			$filename = ($this->input->post('filename'));
			$fileMD5 = $this->input->post('fileMD5');
		}
		$username = $this->session->userdata('username');
		$uploader = $this->session->userdata('userId');

		if (empty($filename) or empty($fileMD5)) {
			$this->echo_msg(false,$filename);
			exit();
		}
		
		//文件信息写到本地文件，供文件监听器调用
// 		try {
			//注意
// 			$filedata = array('uploader'=>$uploader,'filename'=>urlencode($filename));
// 			file_put_contents('./file_analysis/file_json/'.'file-'.$username.'-'.time().'.json',json_encode($filedata));
// 		} catch (Exception $e) {
// 			$this->echo_msg(false,$e->error_msg);
// 		}
		
		//文件信息保存到云
		try {
			$bmobObj = new BmobObject("User_Upload");
			$res = $bmobObj->create(array(
					'filename'=>urldecode($filename),
					'uploader'=>$uploader
			));
		} catch (Exception $e) {
			$this->echo_msg(false,$e->error_msg);
		}
		
		//文件信息保存到购物车
		try {
			$cart = new MY_Cart();
			$cart->addItem($filename, $fileMD5);
		} catch (Exception $e) {
			
		}
		$this->echo_msg(true,$filename);
	}
	
	/*
	 * 获取后台文件解析进程
	 */
	public function getProgress(){
		header('Content-Type: text/event-stream');
		header('Cache-Control: no-cache');
		header('Connection: keep-alive');
		$cart = new MY_Cart();
		$items = $cart->getItems();
		$num = count($items);
		$bmobObj = new BmobObject('File_Info');
		while ($num > 0){
			foreach ($items as &$item){
				$fileMD5 = $item->fileMD5;
				$res = $bmobObj->get('',array('where={"fileMD5":"'.$fileMD5.'"}','limit=1'));
				if (count($res->results) == 1) {
					$num--;
				}
			}
			$this->sendSSEMsg($num);
			if ($num > 0) {
				$num = count($items);
			}
		}
		$this->sendSSEMsg($num);
	}
	
	private function sendSSEMsg($msg){
			echo "data:$msg" . PHP_EOL;
			echo PHP_EOL;
			ob_flush();
			flush();
	}

	//删除购物车中的项目
	public function deleteCartItem(){
		$fileMD5 = $this->post_data->fileMD5;
		$cart = new MY_Cart();
		if ($cart->deleteItem($fileMD5)) {
			$this->echo_msg(true,'删除成功');
		}else {
			$this->echo_msg(false,'删除失败，请重试');
		}
	}
	
	/*
	 * 打印设置
	 */
	public function printSetting(){
		if(!empty($this->post_data)){
			$fileMD5 = $this->post_data->fileMD5;
			$option = $this->post_data->option;
			$option_value = $this->post_data->option_value;
			$cart = new MY_Cart();
			try {
				$res = $cart->changePrintSetting($fileMD5, $option, $option_value);
				echo json_encode(array("success"=>true,"single"=>$res['unitPrice'],"gross"=>$res['subtotal']));
			} catch (Exception $e) {
				$this->echo_msg(false);
				echo $e;
			}
		}

		
	}
	
	/*
	 * 获取购物车总价
	 */
	public function getTotalPrice(){
		$cart = new MY_Cart();
		//
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
	/*
	 * 创建订单
	 */
	public function createOrder(){
		$address = "";
		$shop = "";
		if (isset($this->post_data->address->area) and isset($this->post_data->shop)) {
			$address = $this->post_data->address->area.$this->post_data->address->build.'栋'.$this->post_data->address->num;
			$shop = $this->post_data->shop;
		}else {
			$this->echo_msg(false,"参数不全");
			exit();
		}
		try{
			
			$order = new MY_Order();
			//$order->test();
			$orderId = $order->createOrder($address,$shop);
			$this->echo_msg(true,'成功');
		}catch (MY_Exception $e){
			$this->echo_msg(false,$e->error_msg);
		}
	}

	public function createPay(){
		//订单状态
		//购物车->确认订单（完善，确认订单信息）->提交订单->支付订单->商家打印->等待配送->完成订单
// 		$username = $this->input->post('username');
// 		$files = $this->input->post('files');
		try{
			$order = new MY_Order();
			$charge = $order->createPingPay();
			echo ($charge);
		}catch (MY_Exception $e){
			$this->echo_msg(false,$e->error_msg);
		}

	}
	
	/**
	 * 获取订单内文件信息
	 */
	public function getOrderInfo(){
		$orderId =  $this->post_data->orderId;
		$bmobObj = new BmobObject('Order');
		try {
			$res = $bmobObj->get($orderId);
			$items = json_decode($res->items);
			
			$newItems = array();
			$k = 0;
			foreach ($items as $item){
				$temp['fileName'] = $item->filename;
				$temp['twoSide'] = $item->printSettings->isTwoSides?'double':'single';
				$temp['direction'] = $item->printSettings->direction;
				$temp['pptPerPage'] = $item->printSettings->pptPerPage;
				if($item->fileType != fileType::$PPT){
					$temp['pptPerPage'] = 0;
				}
				$temp['paperSize'] = $item->printSettings->paperSize;
				$temp['amount'] = $item->printSettings->amount;
				$newItems[] = $temp;
			}
			echo json_encode($newItems);
		} catch (Exception $e) {
			$this->echo_msg(false,$e->error_msr);
		}

	}
	
	/**
	 * 取消订单
	 */
	public function cancelOrder(){
		$orderId =  $this->post_data->orderId;
		$bmobObj = new BmobObject('Order');
		try {
			$bmobObj->update($orderId,array('state'=>orderState::CANCELED));
			$this->echo_msg(true);
		} catch (Exception $e) {
			$this->echo_msg(false,$e->error_msg);
		}
	}

	/*
	 * 取人订单是否已支付
	 */
	function isPaid(){
		$chargeId = $this->post_data->chargeId;
		try {
			$res = \Pingpp\Charge::retrieve($chargeId);
			$isPaid = $res->__toArray()['paid'];
			if ($isPaid) {
				$this->echo_msg(true);
			}else {
				$this->echo_msg(false,'UNPAID');
			}
		} catch (Exception $e) {
			$this->echo_msg(false);
		}
		
	}
	
	
	//封装数据，json格式，返回客户端
	private function echo_msg($isSuccess = false,$msg = ''){
		echo json_encode(array("success"=>$isSuccess,'msg'=>$msg));
	}
}