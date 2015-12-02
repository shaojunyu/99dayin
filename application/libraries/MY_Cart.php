<?php

require_once 'MY_Base_Class.php';
//自定义购物车类
class MY_Cart extends MY_Base_Class{
	private $userId;
	private $bmobObject;
	public function __construct(){
		parent::__construct();
		$this->userId = $this->CI->session->userdata('userId');
		
		if (!empty($this->userId)) {
			//在bmob上生成一条购物车记录
			try {
				//bmob上已设置userId字段唯一
				$bmobObj = new BmobObject('Cart');
				$bmobObj->create(array(
						'userId'=>$this->userId,
						'items'=>array()
				));
			} catch (Exception $e) {
			}
		}
		
		//$this->AVObject = new AVObject('Cart');
	}
	
	public function getItems(){
		$res = $this->AVQuery->find()->results;
		$items = $res[0]->items;
		if ($items) {
			return $items;
		}else {
			return null;
		}
		
	}
	
	public function addItem($filename,$fileMD5){
		$bmobObj = new BmobObject('Cart');
		$res = $this->AVQuery->find()->results;
		$id = $res[0]->objectId;
		$items = $res[0]->items;
		//判断文件是否已存在购物车
		$isIn = false;
		foreach ($items as $one){
			if ($one->fileHash == $fileHash) {
				$isIn = true;
				continue;
			}
		}
		
		if(!$isIn){
			$item = new item($filename, $fileHash);
			$items[] = $item;
			//更新购物车
			try {
				$this->AVObject->items = ($items);
				$this->AVObject->update($id);
				return true;
			} catch (Exception $e) {
				return false;
			}
		}
		return true;
	}
	
	public function deleteItem($fileHash){

		$res = $this->AVQuery->find()->results;
		$id = $res[0]->objectId;
		$items = $res[0]->items;
		
		//判断文件是否存在
		$isIn = false;
		$key = 0;
		foreach ($items as $one){
			if ($one->fileHash == $fileHash) {
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
				$this->AVObject->items = $items;
				$this->AVObject->update($id);
				return true;
			} catch (AVLibraryException $e) {
				echo $e->error_msg;
				return false;
			}
			
		}else {
			return false;
		}
	}
	
	/*
	 * 生成订单，清空删除购物车
	 */
	public function deleteAll(){
		$res = $this->AVQuery->find()->results;
		$id = $res[0]->objectId;
		$items = array();
		try {
			$this->AVObject->items = $items;
			$this->AVObject->update($id);
			return true;
		} catch (AVLibraryException $e) {
			echo $e->error_msg;
			return false;
		}
	}
	
}



class item{
	var $filename;
	var $fileHash;
	var $count = 1;
	var $price = 0;
	
	public function __construct($filename,$fileHash){
		$this->filename = $filename;
		$this->fileHash = $fileHash;
	}
	
	public function __set($key,$value){
		$this->$key = $value;
	}
}