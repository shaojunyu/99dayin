<?php

//普通用户控制器

class User extends CI_Controller{
	
	function __construct(){
		parent::__construct();
		if (!$this->session->userdata('username')) {
			header('Location: '.base_url());
		}
	}
	
	function upload(){
		$this->load->view('upload_page');
	}
	
	function confirm(){
		$this->load->view('confirm_page');
	}
	
	//订单页面
	function order() {
		$this->load->view('order_page');
	}
	
	function pay() {
		$this->load->view('pay_page');
	}
}