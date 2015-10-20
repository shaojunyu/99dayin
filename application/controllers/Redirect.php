<?php
class Redirect extends CI_Controller{
	
	//资源文件重定向
	public function source(){
		$location = '';
		$n = 1;
		foreach ($this->uri->segment_array() as $url){
			if ($n == 1) {}
			else {
				$location = $location.'/'.$url;
			}
			$n++;
		}
		$location = base_url($location);
		echo file_get_contents($location);
		
	}
	
	
	//img文件
	public function img($img = null){
		//echo base_url('img/'.$pa);
		//header('<!DOCTYPE html>');
		header("Location: ".base_url('img/'.$img));
		//var_dump($pa);
	}
	
	public function style($style = null){
		//header('<!DOCTYPE html>');
		header("Location: ".base_url('style/'.$style));
	}
	
	public function js(){
		//header('Content-type: text/javascript; charset=utf-8'); 
		$location = '';
		$n = 1;
		foreach ($this->uri->segment_array() as $url){
			if ($n == 1) {}
			else {
				$location = $location.'/'.$url;
			}
			$n++;
		}
		$location = base_url($location);
		echo $location;
	}
	
	public function fonts($fonts = null){
		header('<!DOCTYPE html>');
		header("Location: ".base_url('fonts/'.$fonts));
	}
}