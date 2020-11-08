
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
        saveWinner(1);
    }
    else if(checkPosition('0',blocks)){
        console.log('0lar yutdi');
        saveWinner(1);
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
    // let blocks = document.querySelectorAll('.mygameblock');
    // for(let element of blocks){
    //     element.innerHTML = '';
    // }
    // son = 0;

    location.reload();
}
function saveWinner(ball){
    let nick = prompt('Nick\'zi kiriting:');

    if(nick){
        nick = nick.toLocaleLowerCase();
        let savedball = sessionStorage.getItem(nick) ? parseInt(sessionStorage.getItem(nick).slice(':')[0])+1 : 1;
        let date = new Date();
        sessionStorage.setItem(nick,savedball + ':' + date.getTime());
    }
   
    resetGame();
}



let winners = { ...sessionStorage  };

var sortable = [];

for (var key in winners) {
    sortable.push([key, winners[key]]);
}
sortable.sort(function(a, b) {
    return a[1] - b[1];
}).reverse();
// sortable = sortable.slice(-5);



let output = '1:1599846126842:test';
console.log(output.split(':'));

function getTop($table){
    $table = document.querySelector('#top');
    $table.innerHTML = '<tr> <th>№</th><th>Nick</th><th>Ball</th></tr>';
    let k = 1;
    sortable.forEach((element)=>{
   
        // $table.insertAdjacentHTML('beforeend',`<tr><td>${k}</td><td class="capitalize">${element[0]}</td><td class="ball">${element[1]}</td></tr>`);


            let tr = document.createElement('tr');
            tr.style.background = 'pink';
            let tdn = document.createElement('td');
            tdn.innerHTML = k;
            let tdnick = document.createElement('td');
            tdnick.innerHTML = element[0];
            tdnick.classList.add('capitalize');
            tdnick.setAttribute('test','test2');
            let tdball = document.createElement('td');
            tdball.innerHTML = element[1].slice(':')[0];
            tdball.classList.add('ball');
            
            tr.appendChild(tdn);
            tr.appendChild(tdnick);
            tr.appendChild(tdball);
            document.querySelector('body #top').insertAdjacentElement('beforeend',tr);
            k++;
        
        
     
        
     
    
}
);

}
getTop();
// $table.insertAdjacentHTML('afterbegin','<b>After begin</b>');
// $table.insertAdjacentHTML('beforebegin','<b>Before begin</b>');
// $table.insertAdjacentHTML('afterend','<b>After end</b>');
