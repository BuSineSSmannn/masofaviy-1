"use strict";
function echo(p){
    console.log(p);
}



// let test = 'apple';


// let users = {
//     'email1easd': 'Nigora',
//     'email2asdasd': 'Farangiz',
//     'email3123123123': 'Izabel'
// };

// let user = { 
    // [test + '1']: 'Jayson',
    // age:21,
    // fun: function(arr1){
    //     console.log(arr1);
    // },
    // pupils: ['Umar','Xushnudbek'],
    // work_time:{
    //     frist: '2016-2018',
    //     second: '2018-2020',
    //     fun: function(){
    //         console.log('Дочерний функция');
            
    //         return 'tes';
    //     }
    // },
//     name: "Jayson",
//     surname: 'Dev',
//     womens() {
//         let devovchi = 'Devochi: ';
//         let num = 1;
//         for(let key in users){
//             devovchi += "\n" + num + ' - ' + users[key];
//             num++;
//         }
//         console.log(devovchi);
//     },
//     fullName(){
//         return this.name + ' ' + this.surname
//     },

// }

// echo(user.fullName());
// user.womens();
//  delete user.name;
//   echo(user);



//  let key = prompt("Что вы хотите узнать о пользователе?", "name"); // "name"


//  echo('fullName of User: ' + user[key]);

// user.fun('test');
// echo(user.pupils);
// echo(user.work_time.frist);
// echo(user.work_time.fun());


let arr = [
    1,2,3
];

let arr2 = arr;

arr[0] = 4;

echo (arr);
echo (arr2);


let user2 = {
    name: "Javoxir",
    age: 21,
    test(){
        return this.name
    } 
    
}


// let copyObj = user2; // копируется ссылка
// copyObj.name = 'Jayson';

// let copyObj = {};
// for(let key in user2){
//     copyObj[key] = user2[key];
// }
// copyObj.name = 'test';

let copyObj = Object.assign({},user2);
copyObj.name = 'test';

echo(user2);
echo(copyObj);
echo(copyObj.test());

let pustoy = {}
if(!isFinite(pustoy)) console.log('asd');

