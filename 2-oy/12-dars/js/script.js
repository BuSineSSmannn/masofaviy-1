"use strict";
/**
 * 
 * SetInterval Clearinterval SetTImeout Math va Date toLowercase toUpperCase substring indexOf push();pop(); shift(); unshift();toString();join();split(); slice() toFixed
 */

// var k = setInterval(getTime,1000);
function  getTime(){
    let date = new Date();

    let time = date.getHours() + ':'+ date.getMinutes()+ ':' + date.getSeconds();
    console.log(time);
    // let k = setTimeout(getTime,1000);


    
    
}


let str = 'tasdasdasdQqweqweaSDSIJAISUAUIS';

console.log(Math.abs(-123));
console.log(Math.ceil(1.0000001));
console.log(Math.floor(1.999999));
console.log(Math.max(1,2,3,4,5,6));
console.log(Math.min(1,2,3,4,5,6));
console.log(Math.pow(2,6));
console.log(Math.round(1.4999999));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.substring(10,15));
console.log(str.indexOf('asd'));
console.log(Math.sqrt(2));
console.log('Rounder 0-10 :' + Math.ceil(Math.random() * 100));



let str2 = 'Test';

if(str2.indexOf('test') > -1) console.log('yest');

let obj = {
    age:21,
    test: {
        tut: 123
    }
}

if(!('tut' in obj)) console.log('netu takoi key');

if(obj.hasOwnProperty('tut')) console.log('yest');

// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

let array = [1,2,3,4,5,6,7];

array.push(123);
array.pop();
array.shift();
array.unshift('test');

console.log(array.toString());

let test = [1,2,3];
console.log(array.join(')'));



// str = prompt("Ismiz:") + '|' + prompt("Yoshiz:");
// console.log(str.split('|'));
array = [1,2,'asd',4,'asd',6,7];
console.log(array.slice(1,5));


for(let key of array){
    if(array[key] == 'asd'){
        let str = array[key];
        array[key] = str.substring(1);
        break;
    }
}
console.log(array);

let num = 1.21313123;

console.log(num.toFixed(4));



