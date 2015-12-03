<?php
class item{
	var $filename;
	var $fileMD5;
	var $printSettings;

	public function __construct($filename,$fileMD5){
		$this->filename = $filename;
		$this->fileMD5 = $fileMD5;
		$this->printSettings = new printSettings();
	}

	public function __set($key,$value){
		$this->$key = $value;
	}
	
	public function get_price_per_copy(){
		//计价单位为分
		$unitPrice = 0;
		switch ($this->printSettings->paperSize){
			case 'A4':
				if ($this->printSettings->isTwoSides) {
					$unitPrice = 7.5;
				}else {
					$unitPrice = 10;
				}
				break;
			case 'B4':
				$unitPrice = 20;
				$this->printSettings->isTwoSides = true;
				break;
			default:
				$unitPrice = 10;
				break;
		}
		return $unitPrice;
	}
}

class printSettings{
	var $amount;//打印份数
	var $paperSize;//打印纸张大小A4,B4
	var $isTwoSides;//是否双面打印true,false
	var $isColor;//是否彩打true,false
	public function __construct(){
		$this->paperSize = 'A4';
		$this->isTwoSides = false;
		$this->amount = 1;
		$this->isColor = false;
	}
	
	public function __set($key,$value){
		$this->$key = $value;
	}
}