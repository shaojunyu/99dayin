<?php
defined('BASEPATH') OR exit('No direct script access allowed');


//default controller
class Welcome extends CI_Controller{
	
	
	public function __construct(){
		parent::__construct();
	}
	
	public function index() {
		$this->load->view('index_page');
	}
}