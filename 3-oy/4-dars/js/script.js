document.querySelector('#slider_row').addEventListener('mousemove',function(e){
    document.querySelector('#slider2').style.width = e.clientX + 'px';
    document.querySelector('#shadow').style.display = 'block';
    

});
document.querySelector('#slider_row').addEventListener('mouseleave',function(){
    document.querySelector('#slider2').style.width =  '375px';
    document.querySelector('#shadow').style.display = 'none';

});

for(let i=1;i<=9;i++){
    document.querySelector('#game').innerHTML += '<span class=" mygameblock"></span>';
}

let son = 0;

$game = document.querySelector('#game');
$game.addEventListener('click',function(e){
   if(Array.from(e.target.classList).indexOf('mygameblock') > -1){
       if(e.target.innerHTML == ''){
       if(son % 2 == 0) e.target.innerHTML = 'x';
       else e.target.innerHTML = '0';
       son++;
       checkGame();
       }else{
           alert('Yacheyka uzhe zaynata');
       }
   }
});

function checkGame(){
    let blocks = document.querySelectorAll('.mygameblock');
    let tolgan = 0;
    for(let element of blocks){
        if(element.innerHTML != '') tolgan ++;
    }
    if(checkPosition('x',blocks)){
        console.log('Xlar yutdi');
        resetGame();
    }
    else if(checkPosition('0',blocks)){
        console.log('0lar yutdi');
        resetGame();
    }
    else if(tolgan == blocks.length){
        console.log('durrang');
        resetGame();
    }
}


function checkPosition(pos,blocks){
    switch(true){
      
     case blocks[0].innerHTML == pos && blocks[1].innerHTML == pos && blocks[2].innerHTML == pos:
         case blocks[3].innerHTML == pos && blocks[4].innerHTML == pos && blocks[5].innerHTML == pos:
         case blocks[6].innerHTML == pos && blocks[7].innerHTML == pos && blocks[8].innerHTML == pos:
          case blocks[0].innerHTML == pos && blocks[3].innerHTML == pos && blocks[6].innerHTML == pos:
         case blocks[1].innerHTML == pos && blocks[4].innerHTML == pos && blocks[7].innerHTML == pos:
          case blocks[2].innerHTML == pos && blocks[5].innerHTML == pos && blocks[8].innerHTML == pos:
          case blocks[0].innerHTML == pos && blocks[4].innerHTML == pos && blocks[8].innerHTML == pos:
          case blocks[2].innerHTML == pos && blocks[4].innerHTML == pos && blocks[6].innerHTML == pos:
        return true;
        default: return false;      
    }
}
function resetGame(){
    let blocks = document.querySelectorAll('.mygameblock');
    for(let element of blocks){
        element.innerHTML = '';
    }
    son = 0;
    // location.reload();
}