<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Test extends CI_Controller{

	
	public function __construct(){
		parent::__construct();
		require_once APPPATH.'third_party/bmob/lib/BmobObject.class.php';
		require_once APPPATH.'third_party/bmob/lib/BmobUser.class.php';
		require_once APPPATH.'third_party/bmob/lib/BmobSms.class.php';
	}
	
	public function index(){
		$userId = $this->session->userdata('userId');
		$redis = new Redis();
		$redis->connect('127.0.0.1',6379);

		var_dump($redis->lrange("user_list",0,100));

		
		$cart = new BmobObject('Cart');
		var_dump($_SERVER['HTTP_HOST']);
		//while(true){
// 			$userId = $redis->blPop('user_list',0);
// 			$res = array();
// 			$res = $cart->get('',array('where={"userId":"'.$userId.'"}','limit=1'));
// 			$res = $res->results[0];
// 			foreach ($res as $k=>$v){
// 				$redis->hSet($userId.'_Cart',$k,$v);
// 			}
		//}
		//$fp = fsockopen($_SERVER['HTTP_HOST'], 80, $errno, $errstr, 30);
		
		$r = $redis->hGetAll("f67390242f_Cart");
		var_dump($r);
		phpinfo();
	}
}
