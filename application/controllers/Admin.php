<?php

use leancloud\AVObject;
use leancloud\AVUser;

use Qiniu\Auth;

//网站管理控制器
class Admin extends CI_Controller{
	public function __construct(){
		parent::__construct();
		//初始化第三方服务
		
		
		if (!$this->session->userdata('username')) {
			$this->load->view('admin_login');
		}
	}
	
	public function index() {
		
	}
}