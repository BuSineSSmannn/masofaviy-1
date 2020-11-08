"use strict";

let st1 = 'Umar';
let st2 = 'Bobirmirzo';
let st3 = 'Asadbek';
let st4 = 'Nigora';
var arr = [st1,st2];

arr[arr.length] = st3;
arr[arr.length] = st4;

arr[arr.length] = 'test';

console.log(arr.length);
console.log(arr);

// delete arr[1];
// delete st4;

console.log(arr.toString());

let arr2 = new Array(st1,st2);

let arr3 = [
    [
        1,
        2,
        [
            'Test'
        ]
    ],
    [
        3,
        4
    ],
    'test'
];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// for(let i = 0; i<arr.length;i++) console.log(arr[i]);

console.log(arr3[0][2][0]);
let arr4 = [];

arr4['test']  = 'test';

let arr5 = [

];

arr5['fruits'] = ['Apple','Bexi','test'];
arr5['vegetables'] = [1,2,3];
arr5['animals'] = [4,5,6];

console.log(arr5);


for(var key in arr5){
    console.group(key);
    for(var element of arr5[key] ){
        console.log(element);
    }
    console.groupEnd();
}

let arr6 = [1,2,3,4];

for(var element of arr6){
    console.log(element);

}
let arr11 = ['javoxir','fio'];
let arr12 = ['+998123','+++!@3'];
let arr13 = ['Marhamat','as+d+asd'];

console.log('1)' +'FIO: ' + arr11[0] + ' - ' + 'Number: ' + arr12[0] + ' - ' + 'Adress: '+arr13[0]);