<?php namespace leancloud;
/*
 * yusj
 * leanclod 发送短信类
 */

class AVSms extends AVRestClient{
	
	public function __set($name,$value){
		$this->data[$name] = $value;
	}
	
	//请求发送验证码
	public function requestSmsCode (){
		if(!empty($this->data['mobilePhoneNumber'])){
			$request = $this->request(array(
					'method' => 'POST',
					'requestUrl' => 'requestSmsCode',
					'data' => array(
							'mobilePhoneNumber' => $this->data['mobilePhoneNumber']
					)
			));
				
			return $request;
		
		}
		else{
			$this->throwError('mobilePhoneNumber is required for the requestSmsCode method');
		}
	}
	
	//验证短信验证码是否正确
	public function verifySmsCode(){
		if (!empty($this->data['smsCode']) || !empty($this->data['mobilePhoneNumber'])) {
			$request = $this->request(array(
					'method' => 'POST',
					'requestUrl' => 'verifySmsCode/'.$this->data['smsCode']."?mobilePhoneNumber=".$this->data['mobilePhoneNumber'],
					'data' => ''
			));
			if ($request == true) {
				return true;
			}else {
				return $request;
			}
		}else {
			$this->throwError('mobilePhoneNumber and smsCode are required');
		}
	}
}