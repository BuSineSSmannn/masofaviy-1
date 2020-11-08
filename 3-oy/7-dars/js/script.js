"use strict";

let $start = document.querySelector('#start');
let $game = document.querySelector('#game');
let $time = document.querySelector('#time');
let $timeHeader = document.querySelector('#time-header');
let $resultHeader = document.querySelector('#result-header');
let $result = document.querySelector('#result');
let $gameTime = document.querySelector('#game-time');

$start.addEventListener('click',startGame);
$game.addEventListener('click',handleBoxClick);
$gameTime.addEventListener('input',setGameTime);
$gameTime.addEventListener('keypressdown',function(e){
    console.log(e);
});
let score = 0;
let isGameStarted = false;
function hide($element){
    $element.classList.add('hide');
}
function show($element){
    $element.classList.remove('hide');
}

function startGame(){

    if(!isGameStarted){
        isGameStarted = true;
        setGameTime();
        $gameTime.setAttribute('disabled','true');
       
        $game.style.backgroundColor =  'white';
        hide($start);

        let interval = setInterval(function(){
            var time = parseFloat($time.textContent);
            if(time<=0){
                clearInterval(interval);
                endGame();
            }else{
                $time.textContent = (time - 0.1).toFixed(1);
            }
    
        },100);
        renderBox();
    }

}

function endGame(){
    isGameStarted = false;
    setGameScore();
    $gameTime.removeAttribute('disabled');
    score = 0;
    show($start);
    $game.innerHTML = '';
    $game.style.backgroundColor = '#ccc';


}
function setGameScore(){
    $result.textContent = score.toString();
    show($resultHeader);
    hide($timeHeader);
}
function setGameTime(){
    var time = +$gameTime.value;
    $time.textContent = time.toFixed(1);
    show($timeHeader);
    hide($resultHeader);
}

function renderBox(){
    $game.innerHTML = '';
    let boxSize = getRandom(30,100);
    var gameSize = $game.getBoundingClientRect();
    var maxTop = gameSize.height  - boxSize;
    var maxLeft = gameSize.width  - boxSize;
    let box = document.createElement('div');
    box.style.height = box.style.width = boxSize + 'px';
    box.style.position = 'absolute';
    box.style.backgroundColor = 'black';
    box.style.top = getRandom(0,maxTop) + 'px';
    box.style.left = getRandom(0,maxLeft) + 'px';
    box.style.cursor = 'pointer';
    box.setAttribute('data-box', true);
    box.setAttribute('data-box2','2');
    $game.insertAdjacentElement('afterbegin',box);


}

function handleBoxClick(e){
    if(!isGameStarted){
        return;
    }
    if(e.target.dataset.box){
        score++;
        renderBox();
    }
}
function getRandom(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}


// document.querySelector('#test').insertAdjacentHTML('afterbegin','<b>afterbegin</b>');
// document.querySelector('#test').insertAdjacentHTML('afterend','<b>afterend</b>');
// document.querySelector('#test').insertAdjacentHTML('beforebegin','<b>beforebegin</b>');
// document.querySelector('#test').insertAdjacentHTML('beforeend','<b>beforeend</b>');