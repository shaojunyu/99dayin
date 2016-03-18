<?php
/**
 * Created by PhpStorm.
 * User: Shawn
 * Date: 2016-01-23 0023
 * Time: 18:29
 */
//从user_list中得到用户id,并从bomb中拉取数据到本地redis
require_once 'BmobObject.class.php';
$redis = new Redis(); //实例化 redis 对象
$redis->connect('127.0.0.1', 6379); //链接本地redis服务器

$cart = new BmobObject('Cart');
$Order = new BmobObject('Order');

while(true){
	$userId = $redis->blPop('user_list',0);
	$res = $cart->get('',array('where={"userId":"'.$userId.'"}','limit=1'));
	$res = $res->results[0];
	foreach ($res as $k=>$v){
		$redis->hSet($userId.'_Cart',$k,$v);
	}
}