<?php

use leancloud\AVQuery;
//普通用户控制器

class User extends CI_Controller{
	var $userId;
	
	function __construct(){
		parent::__construct();
		if (!$this->session->userdata('username')) {
			header('Location: '.base_url());
			exit();
		}
		
		$this->userId = $this->session->userdata('userId');
		//引入leancloud
		require_once APPPATH.'/third_party/leancloud/AV.php';
		
	}
	
	function upload(){
		$this->load->view('user/upload_page');
	}
	
	function confirm(){
		$AVQuery = new AVQuery('Cart');
		$AVQuery->where('userId', $this->userId);
		$items = $AVQuery->find()->results[0]->items;
		if (empty($items)) {
			header('Location: '.base_url('user/upload'));
		}else {
			$this->load->view('user/confirm_page',array('items'=>$items));
			//var_dump($items);$
		}
	}
	
	//订单页面
	function order() {
		$AVQuery = new AVQuery('Order');
		$AVQuery->where('userId', $this->userId);
		$orders = $AVQuery->find()->results;
		$this->load->view('user/order_page',array('orders'=>$orders));
		//var_dump($orders);
	}
	
	
	//支付页面
	function pay() {
		$chargeId = $this->input->get('chargeId');
		if (empty($chargeId)) {
			echo '无效订单号！';
			exit();
		}else {
			$order = new MY_Order();
			$charge = $order->getChargeInfo($chargeId);
			$this->load->view('user/pay_page',array('charge'=>$charge));
		}
		//$this->load->view('errors/html/error_general.php');
	}
}