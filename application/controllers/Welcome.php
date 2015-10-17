<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use leancloud\AVUser;
use Qiniu\Auth;
use Qiniu\Storage\BucketManager;


//default controller
class Welcome extends CI_Controller{
	
	var $qiniu_auth;
	
	public function __construct(){
		parent::__construct();
		//引入leancloud
		require_once APPPATH.'/third_party/leancloud/AV.php';
		
		//引入qiniu
		require_once APPPATH.'third_party/qiniu/autoload.php';
		$qiniu_accessKey = 'kbnA7-cyf2y4j3JmmB8xKcQszBtQvpl45TAFMZ2z';
		$qiniu_secretKey = 'e4gSw3iZxrOGI372CjaeMwP6Rif_2ekqfEbPgybA';
		$this->qiniu_auth = new Auth($qiniu_accessKey, $qiniu_secretKey);
		
		//引入ping++
		require_once APPPATH.'third_party/pingpp/init.php';
		$pingpp_testKey = 'sk_test_0CKaPS8CmDeLfr9CCOmXHGGS';
		$pingpp_liveKey = 'sk_live_bOz9YlaOHrS7dFw9yYlUif7R';
		Pingpp\Pingpp::setApiKey($pingpp_testKey);
	}
	
	public function index() {
		$this->load->view('index_page');
		//$bucket = new BucketManager($this->qiniu_auth);
		set_cookie('token','123456');
	}
}