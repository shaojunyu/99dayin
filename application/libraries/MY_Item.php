<?php
class item{
	var $filename;
	var $fileMD5;
	var $amount = 1;
	var $price = 0;

	public function __construct($filename,$fileMD5){
		$this->filename = $filename;
		$this->fileMD5 = $fileMD5;
	}

	public function __set($key,$value){
		$this->$key = $value;
	}
}