function test(){
    console.log(123);
}
function test2(){
    console.log(1234);
}

document.addEventListener("DOMContentLoaded", function() {

    elem.addEventListener('click', {

        handleEvent(e) {
          console.log(event.type + " на " + event.currentTarget);
        
        //   event.currentTarget.classList.add('red');
        //   event.currentTarget.classList.add('yellow');
          event.currentTarget.classList.remove('testtt');
        }
      }, {once:true});
    
    alert("DOM построен"); // а вот так сработает
  });
document.body.onload = function (){
    "use strict";

let $test = document.getElementById('test');

$test.style.backgroundColor = "#000";
$test.style.fontSizeWith = "50px";
$test.style.color = "#fff";

$test.innerHTML = '<i>123</i>';
// $test.innerText = '<i>123</i>';
let input = document.getElementById('input');
input.onblur = function (){
    $test.outerHTML = '<code>asd</code>';

}
document.getElementById('yellow').onclick = function (){
    document.body.style.backgroundColor = 'yellow';
}
// document.getElementById('red').onclick = function (){
//     document.body.style.backgroundColor = 'red';
// }
document.getElementById('red').ondblclick = function (){
    document.body.style.backgroundColor = 'black';
}
// document.getElementById('red').onfocus = function (){
//     // document.body.style.backgroundColor = 'green';
//     document.body.style.background = 'url(https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg) center no-repeat ';
//     document.body.style.backgroundSize = 'cover';
// }
// document.getElementById('red').onmousedown = function(){
//     document.body.style.backgroundColor = 'green';
// }

// document.getElementById('red').oncontextmenu = function(){
//    document.body.style.backgroundColor = 'pink';
//     return false;
// }
// document.getElementById('red').onmousemove = function(){
//     console.log(123);
// }
// document.getElementById('red').onmouseenter = function(){
//    document.body.style.backgroundColor = 'pink';
// }
// document.getElementById('red').onmouseup = function(){
//     document.body.style.backgroundColor = 'orange';
//  }
document.getElementById('form-test').onreset = test;
document.getElementById('form-test').onselect = function(){
    this.style.color = 'red';
}
document.getElementById('form-test').onsubmit = function(){
    alert('forma otpravlena');
}
document.body.onkeydown = function(e){
    // if(e.key == 'a') alert('a ni bosdingiz');
    // console.log(e);
    if(e.keyCode == 65){
        document.querySelector('ul').style.left = 0;
    }
    if(e.keyCode == 27){
        document.querySelector('ul').style.left = '-100px';
    }
    // else alert('a ni bosish orniga ' + e.key + ' ni bosindigz');
}
document.body.onkeypress = function(e){
    console.log(e);
    this.style.backgroundColor = 'red';
}
document.body.addEventListener('click',test);
document.body.addEventListener('click',test2);
// onkeyup


}