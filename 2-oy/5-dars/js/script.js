"use strict";
let num1 = 1;
let num2 = 5;
let num10 = -5;
let y = -num10;
console.log(y);


let summa = num1 + num2;
let raznost = num1 - num2;
let umnojeniya = num1 * num2;
let deleniye = (5 + num1) / num2;
let mylet = 'Сумма этих числ прибавит к разности: ' + (summa + raznost);
let num3 = 2;
let vop1 = '5' + 5;

let input_number = document.getElementById('myid').value;
input_number = +input_number;
let newage = input_number + 1;
let num4 = 10 % 5;
let num5 = 2 ** 5;
let num6 = Math.sqrt(16);


console.log(num4);
console.log(num5);


num3++;
++num3;
console.log( num3);
num3 = 0;
num3 = num3 + 5;
num3 +=5; //num3 = num3 + 5;
console.log( '___________________');
console.log( num3);
console.log( vop1);


console.group(`${num1} и ${num2} чисел:`)
console.log('Сумма: ' + summa);
console.log('Разность: ' + raznost);
console.log('Умножение: ' + umnojeniya);
console.log('Деление: ' + deleniye);
console.log( mylet); 
console.groupEnd();


console.log(10 - true);



let prem1 = 5 > 10;
let prem2 = 5 < 10;
let prem3 = 10 == 10;
let prem6 = 10 != 10;
let prem4 = 5 === '5';
let prem7 = 5 >= 4;
let prem8 = 5 <= 4;
let prem9 = 1 <= 1;

console.log(prem1);
console.log(prem2);
console.log(prem3);
console.log('!' + prem6);
console.log(!5);
console.log('prem7 ' + prem7);
console.log('prem8 ' + prem8);
console.log('prem9 ' + prem9);
console.log(true && true); //true 
console.log(true && false); //false 
console.log(true || true); // true 
console.log(true || false); // true 
console.log(false || false); // false
console.log(false || false); // false
let test;
console.log(!!test);
console.log('______');
console.log(!!null);


console.log(18 == 18 && false);
