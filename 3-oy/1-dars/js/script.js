"use strict";




var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

// let k = window.open('test.html');

// window.close(k);
function movetot(){
    console.log(123);
    // window.moveTo(0,0);
    window.resizeTo(2,2);
}

console.log(navigator);
console.log(screen);
console.log(location);
console.log(history);

//DOM BOM
console.log(document);

let $body = document.body;
let $b = document.getElementsByTagName('b');
console.log($b[0].style.background = 'red');
console.log($b[1].style.background = 'yellow');

let $class = document.getElementsByClassName('test test2');

console.log($class,'!');
let $name = document.getElementsByName('test');

console.log($name);

let $id = document.getElementById('test');
console.log($id.style.color = 'red');

$id = document.querySelector('#test');
$class = document.querySelector('.test .test2');
let $tag = document.querySelector('b');

console.log($id);
console.log($class);
console.log($tag);

$tag = document.querySelectorAll('b');

console.log($tag);

console.log(document.querySelectorAll(".test .test2").tagName);

// $body.style.fontWeight = 'bolder';




