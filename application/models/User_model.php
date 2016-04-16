<?php
class User_model extends CI_Model{
	private $name;
	private $username;
	private $password;
	private $cellphone;
	private $address;
	private $school;
	
	public function __construct() {
		parent::__construct();
	}
	
	public function create_user(){
		
	}
	
	/*
	 * @para username password
	 * @return true false
	 */
	public function login($username,$password) {
// 		$query = $this->db->get_where('user',array(
// 				'username'=>$username,
// 				'password'=>$password
// 		));
		$query = $this->db->get('user');
		return $query;
// 		if (count($query->result_array) == 1) {
// 			return true;
// 		}else {
// 			return false;
// 		}
	}
	
	public function reset_password_by_SMS($param) {
		
	}
	
	public function reset_password(){
		
	}
	
	public function update(){
		
	}
	
	public function logout($param) {
		
	}
}