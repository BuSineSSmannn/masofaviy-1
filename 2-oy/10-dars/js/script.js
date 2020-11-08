// "use strict";

// var test2 = 'asdasdasd';
// function test(){
//     console.log(test2);
//     test2 = 'test';
//     // console.log(k);
//     if(1==1){
//         let k = 'test';
//     }
//     // let test2 = 'asd';
//     // console.log(test2);
// }
// test();

// console.log(test2);
// // alert(test2);
// // let sayHi = function(test,test2,vartest){
// //     console.log(test,test2);
// // };


// // sayHi('Salom','Dunyo','test');
// // k();

// // var k = test;

// // function testfunction(arr1,arr2){
// //     arr1(); 
// //     arr2();
// // }
// // // k();

// // testfunction(k,test);

// // ask('Nmagadir rozimisiz',showOk,showCancel);


// // function ask(question,yes,no){
// //     if(confirm(question)) yes();
// //     else no();
// // }

// // function showOk(){
// //     alert('Вы согласны');
// // }
// // function showCancel(){
// //     alert('Вы не согласны');

// // }


// // ask(
// //     "Вы согласны?",
// //     function() { alert("Вы согласились."); },
// //     function() { alert("Вы отменили выполнение."); }
// //   );


// // let age = prompt("Сколько Вам лет?", 18);

// // // в зависимости от условия объявляем функцию
// // if (age < 18) {

// //   function welcome() {
// //     alert("Привет!");
// //   }
// //   welcome();



// // } else {

// //   function welcome() {
// //     alert("Здравствуйте!");
// //   }
// //   welcome();

// // }
// // welcome();

// // ...не работает


// let age = prompt("Сколько Вам лет?", 18);

// let welcome;

// if (age < 18) {

//   welcome = function() {
//     alert("Привет!");
//   };

// } else {

//   welcome = function() {
//     alert("Здравствуйте!");
//   };

// }

// welcome();
// let k2 = function(){
//     console.log('asd');
// }

//  k2 = (arr,arr2,vars,javoxir) => console.log('asd',213,312,'Javoxir');
// k2();

// function code(){
//     console.log(arguments);
// }

// function test15(){
//     return function(){
//         console.log('test15');
//     }
// }
// test15()();
// code(1,"j",'hello',4,5,true,7);


// let k = 0;
// function test(k){
//     console.log('test');
//     test();
// }

// test();




function removeDublicates(arr){
    let newarr = [];
    let similar;
    for (let parent of arr) {
        similar = false;
        for(let child of newarr){
            if(child == parent) {
                similar = true;
                break;
            }
        }
        if(!similar){
            newarr[newarr.length] = parent;
        } 
    }

    return newarr;

    

}
console.log(removeDublicates([1,1,4,3,2,2,6,4,6,8,8,7,5]));