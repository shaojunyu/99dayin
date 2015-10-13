<?php
class Redirect extends CI_Controller{
	
	//img文件
	public function img($img = null){
		//echo base_url('img/'.$pa);
		header("Location: ".base_url('img/'.$img));
		//var_dump($pa);
	}
	
	public function style($style = null){
		header("Location: ".base_url('style/'.$style));
	}
	
	public function js($js = null){
		header("Location: ".base_url('js/'.$js));
	}
	
	public function fonts($fonts = null){
		header("Location: ".base_url('fonts/'.$fonts));
	}
}