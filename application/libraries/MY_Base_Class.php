<?php
//自定义类的基类
use leancloud\AVQuery;
use leancloud\AVObject;

class MY_Base_Class{
	protected $CI;
	protected $AVQuery;
	public function __construct(){
		//引入各种服务
		//引入leancloud
		require_once APPPATH.'/third_party/leancloud/AV.php';
		//$this->AVQuery = new AVQuery();
		$this->CI = get_instance();
	}
}

class MY_Exception extends Exception{

}