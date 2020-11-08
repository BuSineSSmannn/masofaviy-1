// CSS Scrolling va scrolling products GENERATOR,Кошка гоняется за мышкой
// var speedscrola = 50;
function scrolTop(x,y){
    y -= 20;
   
   console.log(typeof y);
    if(y > 0){
        scrollTo(x,y);
        let f = setTimeout(scrolTop,100);
    }else{
        scrollTo(0,0);
        clearTimeout(f);
    }
}

document.querySelector('.test').style.fontSize = '30px';
document.querySelector('button').addEventListener('click',function(e){
    scrolTop(0,e.clientY );

});

let left = document.querySelector('.item').style.left;
document.querySelector('.btn-left').addEventListener('click',function(){
       
    left -= 64;
        if(left == -320){
            document.querySelector('.item').style.left = 0 ;
            left = 0;
        }else{
            document.querySelector('.item').style.left = left + 'px';
        }
       
    
   
});


let $body = document.body;

$body.insertAdjacentHTML('beforeend','<img src="img/cat.png" id="cat">');
let $cat = document.querySelector('#cat');

$cat.style.position = 'fixed';




document.onmousemove = function(e){
  
    cat.style.left = e.clientX + 20 + 'px';
    cat.style.top = e.clientY + 20 + 'px';
}

$blockGenerator = document.querySelector('#block');
$outputcode = document.querySelector('#outputcode');
$outputcode.value = '';
$inputRangeAllConners = document.querySelector('#all-corners');
$inputRangeAllConners.value = 0;
$inputRangeAllConners.addEventListener('input',function(e){
    $blockGenerator.style.borderRadius = this.value + 'px';
    $outputcode.value = `border-radius: ${this.value}px;\n-webkit-border-radius: ${this.value}px;\n-moz-border-radius: ${this.value}px;`;
});