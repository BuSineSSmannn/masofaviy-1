<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

//Массивы, цыкл foreach



$array = array(1,2,3,'String',true);
$array2  = array(1,2,3,4,5,6,7,8,9);
$array2[99] = '123';


$array3 = [5,5,7,9];



echo '<pre>';
print_r($array);
echo '</pre><hr>';

var_dump($array,$array2,$array)."<hr>";

$b = var_export($array,true);

echo '<hr>';


echo $b;


$t = print_r($array2,true);

echo '<pre><hr>' . $t . '</pre><hr>';


echo 1==2 ? 'true' : (1==3 ? 'asd' : 'qwe');

$array3[5] = 15;

echo '<pre>' . print_r($array3,1) . '</pre><hr>';


$array3[0] = 10;





// unset($array3[0]);
echo $array3[0];


$asot_Array = [
    'key'=>123,
    'age'=>21,
    'name'=>'Jayson',
    'Bella',
    'mykey'=>123,
    'EEE'

];
echo '<pre>' . print_r($asot_Array,1) . '</pre><hr>';

echo count($array2);
for($i=0;$i<count($array2);$i++){
    echo "<p style='background:red'>".$array2[$i]."</p>";
}

$k = 0;
foreach($array2 as $key => $element){
    $k ++;
    if($key > 50) break;
    echo "<p style='color:blue'>$key - {$element}</p>";
}

echo '<hr>'.$k.'<hr>';
print_r(array_keys($array2));

$info = array('кофе', 'коричневый', 'кофеин','Черный','5-','6-');




list($coffe,$brown,$coffein,,$black,$b) = $info;

echo $coffe;
echo $brown;
echo $coffein;
echo $black;
echo $b ?? 'Netu';


$street = [
    [
        64,
        'Familya1',
'qanaqadir shiorda',
        'Normal',
        5600 * 1
    ],
    [
        64,
        'Familya2',
'qanaqadir shiorda',
        'Normal',
        5600 * 2
    ],
    [
        64,
        'Familya3',
'qanaqadir shiorda',
        'Normal',
        5600 * 3
    ],
    [
        64,
        'Familya4',
'qanaqadir shiorda',
        'Normal',
        5600 * 4
    ],
    [
        64,
        'Familya5',
'qanaqadir shiorda',
        'Normal',
        5600 * 5
    ]
];

foreach($street as $family){
    list($number,$surname,$shior,$state,$slary) = $family;
        echo '<hr>';
        echo $number."<br>";
        echo $surname."<br>";
        echo $shior."<br>";
        echo $state."<br>";
        echo $slary."<br>";

}


echo '<pre>'.print_r($street,1).'</pre>';

$foo = array(2 => 'a', '3' => 'b', 0 => 'c');
$foo[1] = 'd';

// var_dump($foo);
list($x, $y, $z,$k) = $foo;
var_dump($foo, $x, $y, $z,$k);


?>


