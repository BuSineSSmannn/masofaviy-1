<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);



function debug( $array,$f = false){
    echo '<pre style="background-color:pink">'.print_r($array,1).'</pre>';
    if($f === true) die;
}

function hr(){
    echo '<hr>';
}

function br(){
    echo '<br>';
}




//Функции Облость видимости переменных 


function user_name($name =  'Jayson'){
    //тело функы
    echo '<b>'.$name.' <i>is Developer</i><br></b>';
}

function helloCount($count){

    // do{
    //     echo '<p style="color:red">'.$count.'</p>';
    // }while(is_int($count));

    if(is_int($count)){
        if($count > 100) echo 'Максимальная количество 100 раз!';
        else if($count <= 0) echo 'Минимальная количество 1 раз!';
        else for($i=1;$i<=$count;$i++) echo "$i asdsad Hello <hr>";
    }else{
        echo "Только целые цисла!";
    }
}


function userAuth($name = '',$password = ''){
    if($name != '' && $password != ''){
        // request

        return [
            'name'=>$name,
            'password'=>$password
        ];
    }
   

    return [ 'error'=>'User and Password is require' ];
    
}


user_name("Jayson3");
//


user_name("Jayson2");

user_name("Fayzullo");


user_name("Axror");


user_name("Nigora");

user_name();


// helloCount(12);
helloCount("Hello");

$userAuth = userAuth('Jayson',123123123);

debug($userAuth);

debug($userAuth);

echo 'Echo';
br();
echo 'Echo';

function summa(int $a,int $b, $return = false){

    $summa = $a + $b;
    // return;

    if($return) return $summa;

    echo $summa;
}
hr();

$summa = summa(123,123,true);
if($summa === null) echo 'ETO NULL';
echo $summa;
hr();
summa(50,50);
hr();


$ABC = 'Hello world';
$ABC2 = 'Hello world2';

// debug($GLOBALS);

function ABC(){
    $ABC2 = 123;
    
    global $ABC2,$ABC,$ABC;
    $ABC2 = 123123;

    echo $ABC2;
    hr();
    echo $GLOBALS['ABC2'];
}
$f_abc = function ($ABCD = 'asd') use ($ABC)  {
    $ABC = 213123123;
    echo $ABC;
};



$fn1 = fn() => $ABC2 = 213123123;

function summaRS(string $a,string $b): int {
    echo 'A\'s type ' . gettype($a);
    return $a + $b;
}


$f_abc();
hr();

hr();
echo 'GLOBAL ABC - ' . $ABC;


echo $fn1();

hr();
echo 'GLOBAL ABC2 - ' . $ABC2;

hr();

ABC();

hr();

echo gettype(summa(1,2,true));
hr();
echo gettype(summaRS(10.4,2));
hr();
echo $ABC2;


// echo match (8.0) {
//     '8.0' => "О нет!",
//     8.0 => "То, что я и ожидал",
//  };




?>


