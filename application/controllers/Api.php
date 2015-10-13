<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use leancloud\AVUser;
use leancloud\AVSms;
use leancloud\Sms;
use Qiniu\Auth;
use Qiniu\Storage\BucketManager;

class Api extends CI_Controller{
	private $AVUser;
	private $AVSms;
	private $qiniu_auth;
	
	public function __construct(){
		parent::__construct();
		//引入leancloud
		require_once APPPATH.'/third_party/leancloud/AV.php';
		$this->AVUser = new AVUser();
		$this->AVSms = new AVSms();
		
		//引入qiniu
		require_once APPPATH.'third_party/qiniu/autoload.php';
		$qiniu_accessKey = 'kbnA7-cyf2y4j3JmmB8xKcQszBtQvpl45TAFMZ2z';
		$qiniu_secretKey = 'e4gSw3iZxrOGI372CjaeMwP6Rif_2ekqfEbPgybA';
		$this->qiniu_auth = new Auth($qiniu_accessKey, $qiniu_secretKey);
	}
	public function signup(){
		$username = $this->input->post('username');
		$password = $this->input->post('password');
		$phone = $this->input->post('phone');
		$college = $this->input->post('college');
		try {
			$this->AVUser->signup($username,$password);
			$this->echo_msg(true,'注册成功');
			$this->session->set_userdata(array('username'=>$username));
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
			//header('location:'.base_url());
			$this->session->set_userdata('username',$username);
			exit();
		} catch (Exception $e) {
			$this->echo_msg(false,'用户名或密码错误');
			exit();
		}
	}
	public function logout(){
		$this->session->sess_destroy();
		$this->echo_msg(true);
		header('Location: '.base_url());
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
			$res = $this->AVSms->verifySmsCode();
			$this->echo_msg(true,'验证码有效');
		} catch (Exception $e) {
			$this->echo_msg(false,$e->error_msg);
		}
	}
	//文件上传相关
	public function getUploadToken(){
		$bucket = 'dayin';
		$token = $this->qiniu_auth->uploadToken($bucket);
		if ($token){
			return $this->echo_msg(true,$token);
		}else {
			
		}
	}
	
	//订单相关
	public function order(){
		
	}
	
	
	//封装数据，json格式，返回客户端
	private function echo_msg($isSuccess = false,$msg = ''){
		echo json_encode(array('success'=>$isSuccess,'msg'=>$msg));
	}
}