<?php

// Логические операторы 


$a = 5;
$b = 4;


echo "$a > $b = ".($a > $b); // true
echo "<br>$b > $a = ".($b > $a); // false 
echo "<br>$a == $b = ".($a == $b); // false
echo "<br>$a != $b = ".($a != $b); // false
// echo !false;
echo '<hr>';
$login = 'admin';
$password = 12345;
$email = 'email@mail.ru';

echo $login == 'admin' AND $password == 12345 && $email == 'email@mail.ru';
echo '<br>';
echo $login == 'admin2' OR $password == 123456 || $email == 'email2@mail.ru';

// Операторы справнение 

echo '<br>';
echo 2 <=> 2;


$age = 20;

echo '<br>';


$name = 'Jayson';
$job = 'Developer';

if($age >= 20 AND $name == 'Jayson'){
    echo '<br>Hello world!';
}

if(!true){
    echo '<br>Hello world2';

}
if(!false){ 
    echo '<br>Hello world3';
}



if($age > 20 || $name == 'Jayson2' ){ //|| $age <= 100
    echo '<br>Hello world4';
}
else if($job == 'Developer'){
    echo '<br>Hello wordl5';
}





if($age >= 21 || $name == "Jayson2"){
    echo '<br>Front-end';
    echo '...';
}
else if($job == 'Developer2'){
    echo '<br>Full stack';
    echo '...';
}
else {
    echo '<br>Null';
}





if(false){
    //
}else{
    //
}


if(false ) {
    echo '123'; 
    echo '456';
}

echo '<br>';
$num = 1;

// if($num == 1) echo 'Siz birinchisiz';
// else if($num == 2) echo 'Siz ikkinchisiz';
// else if($num == 3) echo 'Siz uchinchisiz';
// else if($num == 4) echo 'Siz to\'rtinchisiz';
// else if($num == 5) echo 'Siz beshinchisiz';
// else echo 'OHirgisiz';


switch($num){
    case 1: 
        echo 'Siz birinchisiz';
    break;
    case 2:
        echo 'Siz ikkinchisiz';
    break;
    case 3:
        echo 'Siz uchinchisiz';
    break;
    case 4:
        echo 'Siz to\'rtinchisiz';
    break;
    case 5:
        echo 'Siz beshinchisiz';
    break;
    default:
        echo 'OHirgisiz';
}




?>


