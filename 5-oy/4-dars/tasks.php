<?php


$time_start = microtime(true);

for($i=111;$i<1000;$i +=111){
    echo $i."<br>";
}

$time_finish = microtime(true);
$bella = $time_finish - $time_start;

echo '<hr>';
$time_start = microtime(true);
for($i = 111; $i < 1000; $i++){
    if($i % 111 == 0) echo $i."<br>";
}
$time_finish = microtime(true);
$bobir_mirzo = $time_finish - $time_start;


$win = $bella > $bobir_mirzo ? 'BobirMirzo' : 'Bella';

echo '<hr>';
$time_start = microtime(true);

for($i = 1;$i<10;$i++){
    echo ($i * 111111111111111111111111111)."<br>";
}

$time_finish = microtime(true);
$nigora = $time_finish - $time_start;



echo '<hr>';
$time_start = microtime(true);

for ($i = 1; $i <= 9; $i++) {
    $str = ''; //каждый раз зачищаем строку


    for ($j = 1; $j <= $i; $j++) {
         $str .= $i;
    }
    echo $str."<br>";
}

$time_finish = microtime(true);
$jayson = $time_finish - $time_start;

$win = $jayson > $bobir_mirzo ? 'BobirMirzo' : 'Jayson';
echo $win;





?>


<hr>
<hr>



<?

$time_start = microtime(true);

$row_str = '';

for ($i = 1; $i <= 30; $i++) {
    $str = ''; //каждый раз зачищаем строку


    for ($j = 1; $j <= $i; $j++) {
         $str .= $i;
    }
    $row_str .= $str."<br>";
}

echo $row_str;

$time_finish = microtime(true);
$jayson1 = $time_finish - $time_start;



$time_start = microtime(true);

for ($i = 1; $i <= 30; $i++) {

    $str = '';

    for ($j = 1; $j <= $i; $j++) {
        $str .= $i;

    }
    echo $str.'<br>';
}

$time_finish = microtime(true);
$jayson2 = $time_finish - $time_start;


$win = $jayson2 > $jayson1 ? 'jayson1' : 'jayson2';
echo $win;

?>



