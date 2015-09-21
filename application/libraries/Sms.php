<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
 * leanCloud短信发送服务
 */

class Sms extends LeanCloud{
	private $ch;
	private $headers;
	private $mobilePhoneNumber;
	
	function __construct($phoneNum = ''){
		if (!empty($phoneNum)) {
			$this->mobilePhoneNumber = $phoneNum;
		}
		
		$this->ch = curl_init();
		$this->headers = array(
				'Content-Type: application/json',
    			'X-AVOSCloud-Application-Id: '.parent::$appID,
    			'X-AVOSCloud-Application-Key: '.parent::$appKey,
		);
		curl_setopt($this->ch, CURLOPT_SSL_VERIFYPEER, true);
		curl_setopt($this->ch, CURLOPT_SSL_VERIFYHOST, 2);
		curl_setopt($this->ch, CURLOPT_USERAGENT, 'AVOSCloud.com-php-library/2.0');
		curl_setopt($this->ch, CURLOPT_POST, 1);
		curl_setopt($this->ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($this->ch, CURLOPT_HEADER, 1);
		curl_setopt($this->ch, CURLOPT_HTTPHEADER, $this->headers);
		curl_setopt($this->ch, CURLOPT_REFERER, 'http://localhost/99dayin/');
	}
	
	function set_phone_num($phoneNum){
		$this->mobilePhoneNumber = $phoneNum;
	}
	
	function request_Sms_Code (){
		$url = "https://api.leancloud.cn/1.1/requestSmsCode";
		$postData = array('mobilePhoneNumber'=>$this->mobilePhoneNumber);
		$postData = json_encode($postData);
		curl_setopt($this->ch, CURLOPT_URL, $url);
		curl_setopt($this->ch, CURLOPT_POSTFIELDS, $postData);
		var_dump($postData);
		$res = curl_exec($this->ch);
		if (curl_error($this->ch)){
			exit(curl_error($this->ch));
		}else {
			exit($res);
		}
	}
	
	function test(){
		var_dump($this->headers);
	}
	
	function __destruct(){
		curl_close($this->ch);
	}
	
}
