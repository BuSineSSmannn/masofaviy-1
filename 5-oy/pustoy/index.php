<?php

include 'TelegramBOtJAva';





ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

function debug( $array,$f = false){
    echo '<pre style="background-color:pink">'.print_r($array,1).'</pre>';
    if($f) die;
}

function hr(){
    echo '<hr>';
}

function br(){
    echo '<br>';
}





?>


