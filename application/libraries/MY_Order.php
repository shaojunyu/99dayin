<?php
use leancloud\AVQuery;
use leancloud\AVObject;
use leancloud\AVLibraryException;

require_once 'MY_Base_Class.php';
//自定义订单类
class MY_Order extends MY_Base_Class{
	private $userId;
	private $AVOrder;
	private $cart;
	private $AVQuery;
	private $pingpp_app_id;
	
	public function __construct(){
		parent::__construct();
		$this->userId = $this->CI->session->userdata('userId');
		$this->cart = new MY_Cart();
		$this->AVQuery = new AVQuery('Order');
		//引入ping++
		require_once APPPATH.'third_party/pingpp/init.php';
		$test_key = 'sk_test_0CKaPS8CmDeLfr9CCOmXHGGS';
		$live_key = 'sk_live_bOz9YlaOHrS7dFw9yYlUif7R';
		$this->pingpp_app_id = 'app_SO0anHPWznHCbL0y';
		\pingpp\Pingpp::setApiKey($live_key);
	}
	
	public function createOrder(){
		$this->AVQuery->where('userId', $this->userId);
		$this->AVQuery->where('state', orderState::UNPAID);
		$res = $this->AVQuery->find()->results;
		if (!empty($res)) {
			throw new MY_Exception('存在未支付订单，无法创建新订单！');
			return ;
		}
		
		//创建订单
		$items = $this->cart->getItems();
		if (empty($items)) {
			throw new MY_Exception('购物车为空');
			return ;
		}
		
		$this->AVOrder = new AVObject('Order');
		$this->AVOrder->userId = $this->userId;
		$this->AVOrder->items = $items;
		$this->AVOrder->price = 10;
		$this->AVOrder->state = orderState::UNPAID;
		$this->AVOrder->save();
		$this->cart->deleteAll();
		//创建ping++ 支付订单
		
		
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
			return ($ch);
		} catch (\Pingpp\Error\Base $e) {
    		header('Status: ' . $e->getHttpStatus());
    		echo($e->getHttpBody());
		}
		
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

