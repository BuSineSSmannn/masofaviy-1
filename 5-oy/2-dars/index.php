<?php

//O'zgaruvchiga ega bo'lgan harakatlar isset() gettype() settype is_type() unset() & $a $$a CONST Matematik amallar


$a = 5;
$b = 10;
$b_1 = true;
$b_2 = false;
const myPI = 3.14;
$str = 'hello world!';
// define('myPi',3.14);

// echo $b_1;
// echo $b_2;
// echo $b_1;
// echo null;


// bu yerda biz $a o'zgaruvchisini bor yo'qligini tekshirdik!
# Komment

/*
    Komment
    asdasd
    asdasdasd
asdasdasd
*/


echo 'Isset<br>';

echo isset($a) . "<br>";
echo isset($b) . "<br>";
echo isset($c) . "<br>";
echo null !== myPI . "<br>";

echo '<hr>';

echo 'GetType<br>';

echo gettype($str).'<br>';
echo gettype($a).'<br>';
echo gettype($b).'<br>';
echo gettype(myPI).'<br>';
echo gettype($c).'<br>';
echo gettype(null).'<br>';
echo gettype(123123213).'<br>';
echo gettype('string asdasd').'<br>';


echo '<hr>SetType<br>';


$t = 123123213;
$str2 = '5555asdasd555asd';

echo gettype($t).'<br>';
echo settype($t,'string').'<br>';
echo gettype($t).'<br>';
settype($str2,'integer');
echo $str2;

echo '<hr>is_type<br>';

echo is_string($a)." - is_string<br>";
echo is_numeric($a)." - is_numeric<br>";
echo is_float($a)." - is_float<br>";
echo is_double(5)." - is_double<br>";
echo is_null($a)." - is_null<br>"; 
echo is_int(-5)." - is_int<br>";
unset($a);

echo 'Matematik amallar <hr>';

$x = 7;
$y = 10;
$z = $x + $y;
$c = $x * $y;
$v = $x - $y;
$b = $x / $y;
$o = $y % $x;
$o = $y ** $x;
echo "$x + $y = $z<br>";
echo "$x * $y = $c<br>";
echo "$x - $y = $v<br>";
echo "$x / $y = $b<br>";
echo "$y ning  $x- darajasi = $o<br>";
echo "4 ning kvadrat ildizi = ".(4 ** 0.5)."<br>";
echo (0 ** 0)."<br>";
$P = 2 * $x + 2 * $y; 
echo $P."<br>";

$x = $x + 1;

echo $x."<br>";
$x = $x + 1;

echo $x."<br>";

$x++;
$x++;
$x--;
++$x;

$x = $x + 5;
$x +=5;
$x *=10;
echo $x."<br>";
?>


