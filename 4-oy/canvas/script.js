let $canvas = document.querySelector('#c1');

let $ctx = $canvas.getContext('2d');

// $ctx.fillStyle = 'red';
$ctx.fillStyle = '#ef6262';
// $ctx.fillStyle = "rgb(150,150,150)";
// $ctx.fillStyle = "rgba(150,150,150,0.5)";
$ctx.fillRect(100,100,100,100);

$ctx.fillStyle = 'blue';
$ctx.fillRect(200,0,100,100);

$ctx.fillRect(0,0,100,100);
$ctx.clearRect(0,0,400,200);

// setTimeout(function(){
//     $ctx.clearRect(0,0,400,200);

// },2000);


$ctx.fillStyle = 'orange';
$ctx.strokeStyle = 'red';
$ctx.lineWidth = 5;
$ctx.rect(75,75,50,50);
$ctx.stroke();
$ctx.fill();

$ctx.clearRect(0,0,400,200);

$ctx.beginPath();
    $ctx.moveTo(50,50);
    $ctx.lineTo(200,200);
    $ctx.lineTo(250,100);
    $ctx.lineTo(350,150);
    $ctx.lineTo(350,200);
    $ctx.stroke();
$ctx.closePath();


$ctx.beginPath();
    $ctx.moveTo(150,50);
    $ctx.lineTo(350,50);
    $ctx.lineWidth = 15;
    $ctx.lineCap = 'square';

    $ctx.strokeStyle = 'yellow';
    $ctx.stroke();
$ctx.closePath();

$ctx.beginPath();
    $ctx.moveTo(150,15);
    $ctx.lineTo(350,15);
    $ctx.lineWidth = 15;
    $ctx.strokeStyle = 'pink';
    $ctx.lineCap = 'round';
    $ctx.stroke();
$ctx.closePath();

$ctx.clearRect(0,0,400,200);


// $ctx.beginPath();
//     $ctx.moveTo(50,150);
//     $ctx.lineTo(150,50);
//     $ctx.lineTo(200,150);
//     $ctx.lineTo(50,150);
//     $ctx.lineWidth = 4;

//     $ctx.lineCap = 'round';
//     $ctx.fill();
//     $ctx.stroke();
// $ctx.closePath();

    // $ctx.clearRect(0,0,400,200);
    // let color = 'red';
    // $canvas.addEventListener('mousedown',function(){
    //     $canvas.onmousemove = function(e){
    //         let x = e.offsetX;
    //         let y = e.offsetY;
    //         $ctx.fillStyle = color;
    //         $ctx.fillRect(x,y,10,10);
    //     }
    //     $canvas.addEventListener('mouseup',function(){
    //         $canvas.onmousemove = false;
    //     });
        
    // });

    // $color = document.querySelector('#color');
    // $color.oninput = function(e){
    //    color = e.target.value;
    // }

$ctx.beginPath();
    $ctx.strokeStyle = 'red';
    $ctx.lineWidth = 5;
    $ctx.arc(100,100, 70, 0 ,  2 * Math.PI , true);
    $ctx.stroke();
    $ctx.fill();
$ctx.closePath();

$ctx.beginPath();
    $ctx.strokeStyle = 'green';
    $ctx.lineWidth = 5;
    $ctx.fillStyle = 'black';

    $ctx.arc(100,100, 20, 0 ,  2 * Math.PI , true);
    $ctx.stroke();
    $ctx.fill();
$ctx.closePath();

$ctx.clearRect(0,0,400,200);

// var x = 0;
// var timer;
// function drawSin(){
//     y = Math.sin(x);
    
//     if(5 * x>=400){
//         x = 0;
//         $ctx.fillStyle = 'red';
//     }
//         else{
//             x= x+0.3 ;
//         }
//         $ctx.fillRect(5 * x,100 + 20 * y,2,2);
//         timer = setTimeout(drawSin,100);
// }
// drawSin();





let $canvas2 = document.querySelector('#c2');

let $ctx2 = $canvas2.getContext('2d');



var R = 80;
var r = 50;
var d = 50;
var teta = 0;
var timer;




// Make sure the image is loaded first otherwise nothing will draw.




function spirograf(){
    var x = (R - r) * Math.cos(teta) + d * Math.cos( (R - r) * teta / r);
    var y = (R - r) * Math.sin(teta) - d * Math.sin( (R - r) * teta / r);
    teta +=0.3;
    $ctx2.rect(300 + 1 * x, 300 + 1 * y,4,4);
    $ctx2.stroke();

    timer = setTimeout(spirograf,1);
    if(teta == 30){
        
    }
}

spirograf();
