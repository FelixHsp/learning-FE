<?php
//$a = openssl_get_cipher_methods();
//print_r($a);

$data = 13115412392;
$key = uniqid();
var_dump($key);
$method = "des-ede3";
$content = openssl_encrypt($data,$method,$key,OPENSSL_RAW_DATA);
echo($content);
$content2=openssl_decrypt($content,$method,$key,OPENSSL_RAW_DATA);
echo ($content2);