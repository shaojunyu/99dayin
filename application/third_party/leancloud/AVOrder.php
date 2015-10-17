<?php namespace leancloud;
/*
 * yusj
 * 订单，存储在leancloud
 * 
 */

class AVOrder extends AVObject{
	var $order;
	var $creatTime;
	var $state;
	var $user;
	var $files;
	var $money;
	
	public function __construct() {
		parent::__construct();
		$this->order = new AVObject('order');
	}
}