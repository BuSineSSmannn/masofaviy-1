
"use strict";
// for (начало; условие; шаг) {
//     // ... тело цикла ...
//   }
// for(let i=1;i<=100; i++){
//     if(i % 2 == 0)  console.log('Четное число:' + i);
//     else console.log('Нечетное число:' + i);

// }


// console.log('WHILE NACELSYA');

// let i = 100;

// while(true){
//     if(i % 2 == 0)  console.log('Четное число:' + i);
//     else console.log('Нечетное число:' + i);
//     i++;
//     if(i<=99) break;
// }

// console.log('WHILE OKONCELSYA');

// i = 1;
// do{
//     if(i % 2 == 0)  console.log('Четное число:' + i);
//     else console.log('Нечетное число:' + i);
//     i++;
// }while(i<=100);

let i = 100;

for(;i<=200;i++){
    if(150 == i) continue;


    if(i % 2 == 0)  console.log('Четное число:' + i);
    else console.log('Нечетное число:' + i);
    
    // if(i == 201) i = 0;
}

let age = 61;
let s = 'Moscow';
let file;
// if(age >=18 && age<=60) file = 'index';
// else if(s == 'Moscow') file = 'moscow';
// else file = 'exit'; 

let file = age>=18 ?  'index' : s == 'Moscow' ? 'moscow' : true != false ? 'true' : 'exit';

let str = s == null ? 'Moscow' : s;

console.log(file + '.php?asdjaskjd');   
 



