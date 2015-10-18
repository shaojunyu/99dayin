<?php
use leancloud\AVQuery;
use leancloud\AVObject;

require_once 'MY_Base_Class.php';
//自定义购物车类
class MY_Cart extends MY_Base_Class{
	private $userId;
	private $AVObject;
	
	public function __construct(){
		parent::__construct();
		$this->userId = $this->CI->session->userdata('userId');
		if (!empty($this->userId)) {
			$this->AVQuery = new AVQuery('Cart');
			$this->AVQuery->where('userId', $this->userId);
			if (!$this->AVQuery->find()->results) {
				$cart = new AVObject('Cart');
				$cart->userId = $this->userId;
				$cart->items = json_encode(array());
				$cart->save();
			}
		}
		
		$this->AVObject = new AVObject('Cart');
	}
	
	public function getItems(){
		$res = $this->AVQuery->find()->results;
		$items = $res[0]->items;
		$items = json_decode($items);
		if ($items) {
			return $items;
		}else {
			return null;
		}
		
	}
	
	public function addItem($filename,$fileHash){
		$res = $this->AVQuery->find()->results;
		$id = $res[0]->objectId;
		$orign = $res[0]->items;
		$orign = json_decode($orign);
		if ($orign) {
			$item = array(
				'filename'=>$filename,
				'fileHash'=>$fileHash,
					'amount'=>1,
					'price'=>(float)0.1
			);
			$isIn = false;
			foreach ($orign as $one){
				if ($item['fileHash'] == $one->fileHash) {
					$isIn = true;
					continue;
				}
			}
			if(!$isIn){
				array_push($orign,$item);
			}
			$new = $orign;
		}else {
			$new = array(array(
				'filename'=>$filename,
				'fileHash'=>$fileHash,
					'amount'=>1,
					'price'=>(float)0.1
			));
		}
		//更新购物车
		try {
			$this->AVObject->items = json_encode($new);
			$this->AVObject->update($id);
			return true;
		} catch (Exception $e) {
			return $e;
		}

	}
	
	public function deleteItem($fileHash){
		if (empty($fileHash)) {
			return '参数错误';
		}
		$res = $this->AVQuery->find()->results;
		$id = $res[0]->objectId;
		$orign = $res[0]->items;
		$orign = json_decode($orign);
		if ($orign) {
			$isIn = false;
			$key = 0;
			foreach ($orign as $one){
				if ($fileHash == $one->fileHash) {
					$isIn = true;
					break;
				}
				$key++;
			}
			if($isIn){
				unset($orign[$key]);
				//return $orign;
			}else {
				return '文件不存在';
			}
			$new = $orign;
		}else {
			return '文件不存在';
		}
		//更新购物车
		try {
			$this->AVObject->items = json_encode($new);
			$this->AVObject->update($id);
			return true;
		} catch (Exception $e) {
			return $e;
		}
	}
	
}