<?php

//引入bomb
require_once APPPATH.'third_party/bmob/lib/BmobObject.class.php';
require_once APPPATH.'third_party/bmob/lib/BmobUser.class.php';
//普通用户控制器

class User extends CI_Controller{
	var $userId;
	var $cart;
	var $user;
	var $order;
	
	function __construct(){
		parent::__construct();
		if (!$this->session->userdata('username')) {
			header('Location: '.base_url());
			exit();
		}
		$this->userId = $this->session->userdata('userId');
		$this->cart = new MY_Cart();
		$this->order = new MY_Order();
	}
	
	/**
	 * 上传页面
	 */
	function upload(){
		$this->load->view('user/upload_page');
	}
	
	/**
	 * 订单确认页面
	 */
	function confirm(){
		$bmobObj = new BmobObject('Cart');
		$res = $bmobObj->get('',array('where={"userId":"'.$this->userId.'"}','limit=1'));
		$res = $res->results[0];
		$items = $res->items;
		//json字符串转数组
		$items = json_decode($items);
		if (empty($items)) {
			header('Location: '.base_url('user/upload'));
		}else {
			//检测文件是否解析完成，若未完成，则返回
			$bmobObj = new BmobObject('File_Info');
			$num = count($this->cart->getItems());
			
			foreach ($this->cart->getItems() as &$item){
				$fileMD5 = $item->fileMD5;
				$res = $bmobObj->get('',array('where={"fileMD5":"'.$fileMD5.'"}','limit=1'));
				if (count($res->results) == 1) {
					$num--;
				}
			}
			if ($num == 0) {//剩余数量为0
				$this->load->view('user/confirm_page',array('items'=>$items));
			}else {
				//echo $num;
				header('Location: '.base_url('user/upload'));
			}
			
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