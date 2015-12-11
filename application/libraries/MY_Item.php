<?php
class MY_Item{
	var $filename;
	var $fileMD5;
	var $fileType;
	var $printSettings;
	var $pages;
	
	public function __construct($filename,$fileMD5){
		$this->filename = $filename;
		$this->fileMD5 = $fileMD5;
		$this->printSettings = new printSettings();
		
		$extension = substr(strrchr($filename,'.'),1);
		switch ($extension){
			case 'pdf':
				$this->fileType = fileType::$PDF;
				break;
			case 'doc':
			case 'docx':
				$this->fileType = fileType::$DOC;
				break;
			case 'ppt':
			case 'pptx':
				$this->fileType = fileType::$PPT;
				break;
			default:
				break;
		}
		$this->get_pages();
	}

	public function __set($key,$value){
		$this->$key = $value;
	}
	
	/**
	 * 每页打印费用
	 */
	public function get_price_per_page(){
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
		if ($this->fileType == 'PPT') {
			$unitPrice = $unitPrice / $this->printSettings->pptPerPage;
		}
		return $unitPrice;
	}
	
	/**
	 * 得到一份的价格
	 */
	public function get_price_per_copy(){
		if (empty($this->pages)) {
			$this->get_pages();
		}
		return ceil(($this->pages * $this->get_price_per_page())/10)*10;
	}
	
	public function get_pages(){
		$bombObj = new BmobObject('File_Info');
		$res = $bombObj->get('',array('where={"fileMD5":"'.$this->fileMD5.'"}','limit=1'));
		$res = $res->results[0];
		$this->pages = $res->pages;
		return $res->pages;
	}
}

class fileType{
	static $PDF = 'PDF';
	static $PPT = 'PPT';
	static $DOC = 'DOC';
}

class printSettings{
	var $amount;//打印份数
	var $paperSize;//打印纸张大小A4,B4
	var $isTwoSides;//是否双面打印true,false
	var $isColor;//是否彩打true,false
	var $pptPerPage;//每页打印多少ppt
	var $direction;//horizontal,vertical
	var $remark;//备注
	public function __construct(){
		$this->paperSize = paperSize::$A4;
		$this->isTwoSides = false;
		$this->amount = 1;
		$this->isColor = false;
		$this->pptPerPAge = pptPerPAge::$onePerPage;
		$this->direction = printDirection::$vertical;
		$this->remark = '';
	}
	
	public function __set($key,$value){
		$this->$key = $value;
	}
}

class paperSize{
	static $A4 = 'A4';
	static $B4 = 'B4';
	public static function getPaperSize() {
		return array('A4','B4');
	}
}

/*
 * 打印方向
 */
class printDirection{
	static $horizontal = 'horizontal';
	static $vertical = 'vertical';
	public static function getPrintDirection(){
		return array('horizontal','vertical');
	}
}

class pptPerPAge{
	static $onePerPage = 1;
	static $fourPerPage = 4;
	static $sixPerPage = 6;
	static $ninePerPage = 9;
	public static function getPptPerPage() {
		return array(1,4,6,9);
	}
}