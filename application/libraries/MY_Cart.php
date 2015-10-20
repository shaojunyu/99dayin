<?php
use leancloud\AVQuery;
use leancloud\AVObject;
use leancloud\AVLibraryException;

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
				$cart->items = array();
				$cart->save();
			}
		}
		
		$this->AVObject = new AVObject('Cart');
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
	
	public function addItem($filename,$fileHash){
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