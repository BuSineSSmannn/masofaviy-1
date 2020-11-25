<h2>Циклы</h2>

<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$str = '';
$summa = 0;

$count = 0;


for($i=-1;;$i++){
    $count++;
    $i++;
    // if($i == 2){
	// 	echo "Biz 2ga tengligini aynan shu joyda aniqladik <br>";
	// }else{
	// 	echo "{$i} - Salom dunyo <br>";
    // }

    // echo $i. "|";
    $str .= $i;
     
    if($i == 5) continue;


    $summa += $i;
    if($i >= 15 || ($summa % 3 == 1 && $i > 5)) {
        echo $i."<br>";
        echo $summa."<br>";
        echo $str."<br>";
        echo $count."marta ishladi!<hr>";

        $count = 0;
        break;
    }
        
    

}


for($i=0;$i<=15;$i++){
    $count++;
}

echo $i."<br>";
echo $summa."<br>";
echo $str."<br>";
echo $count."marta ishladi!<br>";

$w = 0;


while($w < 100){

    if($w == 60) break;

    $w++;

    
    if($w == 50) continue;

    

    echo "<p>".$w ."</p>";

}

$w = 0;

do{
  
    if($w == 60) break;
    
    $w++;

    
    if($w == 50) continue;


    echo "<p>".$w ."</p>";
}while($w <= 100);


$stop = 0;

while(true){
     
    if($stop == 5000) break;
    $stop++;
}
echo '<hr>';
echo $stop;

 ?>



<script>


for(let i=-1;i<=100;i++){
    i++;
    console.log(i);
}

console.log(i);
</script>


