<?php

//普通用户控制器

class User extends CI_Controller{
	
	function __construct(){
		parent::__construct();
		if ($this->session->userdata('username')) {
			//header();
		}
	}
	
	function upload(){
		$this->load->view('upload_page');
	}
	
}