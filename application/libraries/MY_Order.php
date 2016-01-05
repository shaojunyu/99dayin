<?php

require_once 'MY_Base_Class.php';
//自定义订单类
class MY_Order extends MY_Base_Class{
	private $userId;
	private $orderId;
	private $cart;
	private $pingpp_app_id;
	private $bmobOrder;
	private $address;
	private $totalPrice;
	
	public function __construct($orderId = ''){
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
		
		//订单号不为空，则从bomb拉去信息
		if(!empty($orderId)){
			$this->orderId = $orderId;
			$res = $this->bmobOrder->get($orderId);
			$orderInfo = $res->results[0];
			$this->totalPrice = $orderInfo->totalPrice;
		}
	}
	
	/*
	 * 创建成功，返回订单号
	 */
	public function createOrder($address,$shop){
		//创建订单
		$items = $this->cart->getItems();
		if (empty($items)) {
			throw new MY_Exception('购物车为空');
			return;
		}
		
		//查询是否存在未支付订单
		$res = $this->bmobOrder->get('',array('where={"state":"'.orderState::UNPAID.'","userId":"'.$this->userId.'"}','limit=1'));
		if (!empty($res->results)) {
			throw new MY_Exception('存在未支付订单,无法创建新订单!');
			return;
		}
		if (empty($address)) {
			$address = '韵苑打印店';
		}
		try {
			$this->bmobOrder->create(array(
					'userId'=>$this->userId,
					'username'=>$this->CI->session->userdata('username'),
					'items'=>json_encode($items),
					'totalPrice'=>$this->get_total($items),
					'state'=>orderState::UNPAID,
					'shop'=>$shop,
					'address'=>$address,
					'phone'=>$this->CI->session->userdata('phone')
			));
			$this->cart->deleteAll();
		} catch (Exception $e) {
			echo $e;
		}
		
	}
	
	/*
	 * 计算订单价格
	 * return int
	 * 计价单位 分
	 */
	private function get_total($items){
		$k=0;
		$total = 0;
		while (isset($items[$k])){
			$total += $items[$k]->subtotal;
			$k++;
		}
		return $total;
	}
	
	/**
	 * 创建ping++支付
	 * @throws MY_Exception
	 * @return multitype:object
	 */
	public function createWXPay(){
		$res = $this->bmobOrder->get('',array('where={"state":"'.orderState::UNPAID.'","userId":"'.$this->userId.'"}','limit=1'));
		if (empty($res)) {
			throw new MY_Exception('暂无未支付订单！');
		}
		$res = $res->results[0];
		//var_dump($res);
		$orderId = $res->objectId;
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
					'amount'=>$res->totalPrice,
					'order_no'=>$orderId.time(),
					'currency'  => 'cny',
					'extra'     => $extra,
					'channel'   => $channel,
					'client_ip' => '127.0.0.1',
					'app'       => array('id' => $this->pingpp_app_id)
			));
			
			//更新订单的信息
			//var_dump($ch->__toStdObject());
			$this->bmobOrder->update($orderId,array('pingppId'=>$ch->__toArray()['id']));
			return ($ch);
			
		} catch (\Pingpp\Error\Base $e) {
    		header('Status: ' . $e->getHttpStatus());
    		echo($e->getHttpBody());
		}
		
	}
	
	public function createAlipay(){
		$res = $this->bmobOrder->get('',array('where={"state":"'.orderState::UNPAID.'","userId":"'.$this->userId.'"}','limit=1'));
		if (empty($res)) {
			throw new MY_Exception('暂无未支付订单！');
		}
		$res = $res->results[0];
		//var_dump($res);
		$orderId = $res->objectId;
		$channel = 'alipay_pc_direct';
		switch ($channel){
			case 'wx_pub_qr':
				$extra = array(
				'product_id' => 'print'
						);
						break;
			case 'alipay_pc_direct':
				$extra = array(
				'success_url' => 'http://www.99dayin.com/user/orders');
				break;
			default:
				$extra = array();
				break;
		}
		try {
			$ch = Pingpp\Charge::create(array(
					'subject' => '99打印在线支付',
					'body' => '文档打印',
					'amount'=>10,
					'order_no'=>rand(1,99999),
					'currency'  => 'cny',
					'extra'     => $extra,
					'channel'   => $channel,
					'client_ip' => '127.0.0.1',
					'app'       => array('id' => $this->pingpp_app_id)
			));
	
			//更新订单的信息
			//var_dump($ch->__toStdObject());
			//$this->bmobOrder->update($orderId,array('pingppId'=>$ch->__toArray()['id']));
			$alipay_pc_direct = $ch->__toStdObject()->credential->alipay_pc_direct;
			var_dump($ch->__toStdObject()->credential->alipay_pc_direct);
			$alipay_pc_direct_array = array();
			foreach ($alipay_pc_direct as $k => $v){
				$alipay_pc_direct_array[$k] = $v;
			}
			var_dump($alipay_pc_direct_array);
			$this->argSort($alipay_pc_direct_array);
			$sHtml = "<form id='alipaysubmit' name='alipaysubmit' action='https://mapi.alipay.com/gateway.do?_input_charset=utf-8' method='post'>";
			while (list ($key, $val) = each ($alipay_pc_direct_array)) {
				$sHtml.= $key.":<input type='' name='".$key."' value='".$val."'/><br/>";
			}
				
			//submit按钮控件请不要含有name属性
			$sHtml = $sHtml."<input type='submit' value='提交'></form>";
				
			$sHtml = $sHtml."<script>document.forms['alipaysubmit'];</script>";
			echo  $sHtml;
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
	
	public function cancle_order(){
		$res = $this->bmobOrder->get('',array('where={"state":"'.orderState::UNPAID.'"}','limit=1'));
		$res = $res->results[0];
		$orderId = $res->ObjectId;
		try {
			$this->bmobOrder->update($orderId,array('state'=>orderState::CANCELED));
		}catch (Exception $e){
			
		}
	}
	

}


class orderState{
	const PAID = 'PAID';//已支付，等待打印
	const PRINTED = 'PRINTED';//已打印完成
	const UNPAID = 'UNPAID';//未支付
	const CANCELED = 'CANCELED';//取消
	const EXPIRED = 'EXPIRED';//过期
	const OTHER  = 'OTHER';//其他
}


