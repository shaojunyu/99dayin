<?php
class Welcome extends CI_Controller{
	public function index(){
// 	$tables = $this->db->list_tables();

// foreach ($tables as $table)
// {
//     echo $table;
// }

	var_dump($this->db->get('user'));
	echo $this->db->count_all('user');
// 	}
	//phpinfo();
	}
}