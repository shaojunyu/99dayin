<?php

require_once 'MY_Base_Class.php';
require_once 'MY_Item.php';
//自定义购物车类
class MY_Cart extends MY_Base_Class{
	private $userId;
	private $bmobObject;
	private $cartId;//购物车id
	
	public function __construct(){
		parent::__construct();
		$this->userId = $this->CI->session->userdata('userId');
		$this->bmobObject = new BmobObject('Cart');
		
		if (!empty($this->userId)) {
			//在bmob上生成一条购物车记录
			try {
				//bmob上已设置userId字段唯一
				$res = $this->bmobObject->create(array(
						'userId'=>$this->userId,
						'items'=>''
				));
				$this->cartId = $res->objectId;
			} catch (Exception $e) {
				$res = $this->bmobObject->get('',array('where={"userId":"'.$this->userId.'"}','limit=1'));
				$res = $res->results[0];
				$this->cartId = $res->objectId;
			}
		}
	}
	
	/*
	 * return array of objects
	 */
	public function getItems(){
		$res = $this->bmobObject->get($this->cartId);
		return json_decode($res->items);

	}
	
	/*
	 * 增加商品
	 */
	public function addItem($filename,$fileMD5){
		//items数据结构
		//json数组
		$items = $this->getItems();
		$isIn = false;
		if (empty($items)) {
			$isIn = false;
		}else {
			foreach ($items as $item){
				if ($item->fileMD5 == $fileMD5 or $item->filename == $filename) {
					$isIn = true;
					throw new MY_Exception('存在相同文件');
					return ;
				}
			}
		}

		
		if (!$isIn) {
			$item = new item($filename, $fileMD5);
			$items[] = $item;
			//更新购物车
			try {
				$items = json_encode($items);
				$this->bmobObject->update($this->cartId,array('items'=>$items));;
				return true;
			} catch (Exception $e) {
				//print $e;
				return false;
			}
		}
		return true;
	}
	
	/*
	 * 增加数量
	 */
	public function increase($fileMD5){
		$items = $this->getItems();
		if (empty($items)) {
			return false;
		}
		
		//判断文件是否存在
		$isIn = true;
		$key = 0;
		foreach ($items as $one){
			if ($one->fileMD5 == $fileMD5) {
				$isIn = true;
				break;
			}
			$key++;
		}
		if($isIn){
			$items[$key]->amount = $items[$key]->amount+1;
			//更新数据库
			try {
				$items = json_encode($items);
				$this->bmobObject->update($this->cartId,array('items'=>$items));;
				return true;
			} catch (Exception $e) {
			}
		}
	}
	
	/*
	 * 删除商品
	 */
	public function deleteItem($fileMD5){
		$items = $this->getItems();
		if (empty($items)) {
			return false;
		}
			
		//判断文件是否存在
		$isIn = true;
		$key = 0;
		foreach ($items as $one){
			if ($one->fileMD5 == $fileMD5) {
				$isIn = true;
				break;
			}
			$key++;
		}
		if ($isIn) {
			//var_dump($items);
			//echo  $key;
			array_splice($items,$key,1);
			//var_dump($items);
			//更新购物车
			try {
				$items = json_encode($items);
				$this->bmobObject->update($this->cartId,array('items'=>$items));;
				return true;
			} catch (Exception $e) {
				echo $e->error_msg;
				return false;
			}
			
		}else {
			return false;
		}
	}
	
	/*
	 * 减少数量
	 */
	public function decrease($fileMD5){
		$items = $this->getItems();
		if (empty($items)) {
			return false;
		}
		
		//判断文件是否存在
		$isIn = true;
		$key = 0;
		foreach ($items as $one){
			if ($one->fileMD5 == $fileMD5) {
				$isIn = true;
				break;
			}
			$key++;
		}
		if($isIn){
			$items[$key]->amount = $items[$key]->amount-1;
			if ($items[$key]->amount == 0) {
				$this->deleteItem($fileMD5);
				return true;
			}
			//更新数据库
			try {
				$items = json_encode($items);
				$this->bmobObject->update($this->cartId,array('items'=>$items));;
				return true;
			} catch (Exception $e) {
			}
		}
	}
	
	/*
	 * 生成订单，清空删除购物车
	 */
	public function deleteAll(){
		try {
			$this->bmobObject->update($this->cartId,array('items'=>''));
			return true;
		} catch (AVLibraryException $e) {
			echo $e->error_msg;
			return false;
		}
	}
	
}

