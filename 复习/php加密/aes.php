<?php
//$a = openssl_get_cipher_methods();
//print_r($a);

$data = "喜欢高瑞雪";
//$key = uniqid();
//var_dump($key);
//$method = "AES-128-CBC";
//$content = openssl_encrypt($data,$method,$key,OPENSSL_RAW_DATA,1234567891011121);
//echo($content);
//$content2=openssl_decrypt($content,$method,$key,OPENSSL_RAW_DATA,1234567891011121);
//echo ($content2);

$id = uniqid();
$key = md5($id);
$vi = substr($key,0,16);
$method = "AES-128-CBC";
$content = openssl_encrypt($data,$method,$key,OPENSSL_RAW_DATA,$vi);
echo $content;

$content1 = openssl_decrypt($content,$method,$key,OPENSSL_RAW_DATA,$vi);
echo $content1;