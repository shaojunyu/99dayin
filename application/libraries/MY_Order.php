<?php

require_once 'MY_Base_Class.php';
//自定义订单类
class MY_Order extends MY_Base_Class{
	private $userId;
	private $cart;
	private $pingpp_app_id;
	private $bmobOrder;
	private $address;
	
	public function __construct(){
		parent::__construct();
		$this->userId = $this->CI->session->userdata('userId');
		$this->cart = new MY_Cart();
		$this->bmobOrder = new BmobObject('Order');
		
		//引入ping++
		require_once APPPATH.'third_party/pingpp/init.php';
		$test_key = 'sk_test_0CKaPS8CmDeLfr9CCOmXHGGS';
		$live_key = 'sk_live_bOz9YlaOHrS7dFw9yYlUif7R';
		$this->pingpp_app_id = 'app_SO0anHPWznHCbL0y';
		\pingpp\Pingpp::setApiKey($live_key);
	}
	
	/*
	 * 创建成功，返回订单号
	 */
	public function createOrder(){
		//创建订单
		$items = $this->cart->getItems();
		if (empty($items)) {
			throw new MY_Exception('购物车为空');
			return;
		}
		
		//查询是否存在未支付订单
		$res = $this->bmobOrder->get('',array('where={"orderState":"'.orderState::UNPAID.'"}','limit=1'));
		if (!empty($res->results)) {
			throw new MY_Exception('存在未支付订单,无法创建新订单!');
			return;
		}
		
		
	}
	
	/*
	 * 计算订单价格
	 * return int
	 * 计价单位 分
	 */
	private function get_total($items){
		
	}
	
	//ping++
	public function createPingPay(){
		$this->AVQuery->where('userId', $this->userId);
		$this->AVQuery->where('state', orderState::UNPAID);
		
		$res = $this->AVQuery->find()->results;
		if (empty($res)) {
			throw new MY_Exception('暂无未支付订单！');
		}
		$orderId = $res[0]->objectId;
		//return $orderId;
		//支付渠道 wx_pub_qr
		$channel = 'wx_pub_qr';
		switch ($channel){
			case 'wx_pub_qr':
				$extra = array(
				'product_id' => 'print'
						);
				break;
			case 'wx_pub':
				$extra = array(
					'open_id' => 'wxd781831d64bb0674');
				break;
			default:
				$extra = array();
				break;
		}
		try {
			$ch = Pingpp\Charge::create(array(
					'subject' => '99打印在线支付',
					'body' => '文档打印',
					'amount'=>1,
					'order_no'=>$orderId,
					'currency'  => 'cny',
					'extra'     => $extra,
					'channel'   => $channel,
					'client_ip' => '127.0.0.1',
					'app'       => array('id' => $this->pingpp_app_id)
			));
			
			//更新订单的信息
			
			return ($ch);
			
			
			
		} catch (\Pingpp\Error\Base $e) {
    		header('Status: ' . $e->getHttpStatus());
    		echo($e->getHttpBody());
		}
		
	}
	
	/*
	 * 获取支付信息
	 */
	public function getChargeInfo($chargeId){
		$ch = Pingpp\Charge::retrieve($chargeId,array());
		return $ch;
	}
	
	public function payOrder(){
		
	}
	
	public function getOders() {
		
	}
	
	public function confirmOrder(){
		
	}
}


class orderState{
	const PAID = 'PAID';//已支付
	const UNPAID = 'UNPAID';//未支付
	const CANCELED = 'CANCELED';//取消
	const EXPIRED = 'EXPIRED';//过期
	const OTHER  = 'OTHER';//其他
}


