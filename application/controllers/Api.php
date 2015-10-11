<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use leancloud\AVUser;
use leancloud\AVSms;
use Qiniu\Auth;

class Api extends CI_Controller{
	private $AVUser;
	private $AVSms;
	
	public function __construct(){
		parent::__construct();
		//引入leancloud
		require_once APPPATH.'/third_party/leancloud/AV.php';
		$this->AVUser = new AVUser();
		$this->AVSms = new AVSms();
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
			exit();
		} catch (Exception $e) {
			$this->echo_msg(false,'用户名或密码错误');
			exit();
		}
	}
	
	//发送验证码
	function sendSmsCode(){
		$this->AVSms->mobilePhoneNumber = $this->input->post('phone');
		try {
			$res = $this->AVSms->requestSmsCode();
			$this->echo_msg(true,'验证码发送成功');
			
		} catch (Exception $e) {
			$this->echo_msg(false,$e->error_msg);
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
	
	//封装数据，json格式，返回客户端
	private function echo_msg($isSuccess = false,$msg = ''){
		echo json_encode(array('success'=>$isSuccess,'msg'=>$msg));
	}
}