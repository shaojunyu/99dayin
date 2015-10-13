<?php
use Qiniu\Auth;
use Qiniu\Storage\BucketManager;
defined('BASEPATH') OR exit('No direct script access allowed');

class Test extends CI_Controller{
	var $qiniu_auth;
	
	public function __construct(){
		parent::__construct();
		require_once APPPATH.'third_party/leancloud/AV.php';
		
		//引入qiniu
		require_once APPPATH.'third_party/qiniu/autoload.php';
		$qiniu_accessKey = 'kbnA7-cyf2y4j3JmmB8xKcQszBtQvpl45TAFMZ2z';
		$qiniu_secretKey = 'e4gSw3iZxrOGI372CjaeMwP6Rif_2ekqfEbPgybA';
		$this->qiniu_auth = new Auth($qiniu_accessKey, $qiniu_secretKey);
	}
	
	public function index(){

		//$qiniu_auth = new Auth($qiniu_accessKey, $qiniu_secretKey);
 		//$bucket = new BucketManager($qiniu_auth);
 		$bucketManager = new BucketManager($this->qiniu_auth);
 		var_dump($bucketManager->listFiles('dayin'));
 		var_dump($bucketManager->stat('dayin', 'doxmate-master.zip'));
	}
}