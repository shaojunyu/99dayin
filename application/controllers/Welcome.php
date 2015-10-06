<?php
use leancloud\AVUser;
defined('BASEPATH') OR exit('No direct script access allowed');

//default controller
class Welcome extends CI_Controller{
	
	public function __construct(){
		parent::__construct();
		//引入leancloud
		require_once APPPATH.'/third_party/leancloud/AV.php';
	}
	
	public function index() {
		$avUser = new AVUser();
		try {
			$user = $avUser->signup('yusj', '123456');
		} catch (Exception $e) {
			var_dump($e->error_msg);
		}
		
	}
}