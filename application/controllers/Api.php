<?php

use leancloud\AVUser;
use leancloud\AVSms;
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
	
	public function login() {
		$username = $this->input->post('username');
		$password = $this->input->post('password');
		$this->AVUser->username = $username;
		$this->AVUser->password = $password;
		try {
			$this->AVUser->login();
			$this->echo_msg(true,'登录成功');
			exit();
		} catch (Exception $e) {
			$this->echo_msg(false,'用户名或密码错误'.$e->error_msg.$password);
			exit();
		}
	}
	
	function sendSms(){
		$this->AVSms->mobilePhoneNumber = '18064078228';
		try {
			$res = $this->AVSms->requestSmsCode();
			var_dump($res);
		} catch (Exception $e) {
			echo $e->error_msg;
		}
		
	}
	
	//封装数据，json格式，返回客户端
	private function echo_msg($isSuccess = false,$msg = ''){
		echo json_encode(array('data'=>array('success'=>$isSuccess,'msg'=>$msg)));
	}
}