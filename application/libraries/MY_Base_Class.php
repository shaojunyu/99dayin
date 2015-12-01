<?php
//自定义类的基类

class MY_Base_Class{
	protected $CI;
	public function __construct(){
		//引入各种服务
		//引入bmob
		require_once APPPATH.'/third_party/bmob/lib/BmobObject.class.php';
		$this->CI = get_instance();
	}
}

class MY_Exception extends Exception{
	//$error_msg加上，方便用
	//yusj
	public $error_msg;
	public function __construct($message, $code = 0, Exception $previous = null) {
		$this->error_msg = $message;
		//codes are only set by a AVOSCloud.com error
		if($code != 0){
			$message = "my library error: ".$message;
		}
		
		parent::__construct($message, $code, $previous);
	}

	public function __toString() {
		return __CLASS__ . ": [{$this->code}]: {$this->message}\n";
	}

}