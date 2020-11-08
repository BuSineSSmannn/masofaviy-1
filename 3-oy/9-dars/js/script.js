"use strict";


// function Person(){
 
//     this.name =  'Jayson';
//     this.age = 21;
//     this.job =  'Front-end';
  
// }



// Person.prototype.test = function(){
//     return 123;
// }
// let person = new Person();
    

// // for(let key in person){
// //     if(person.hasOwnProperty(key)){
// //         console.log(person[key]);
// //     }
// // }



// let keys = Object.keys(person).forEach(function(key){
//     console.log(key);
// });


// function createCounter(nameCounter){
//     let counter = 1;
//     return{
//         increment: function(){
//             counter++
//         },
//         decriment: function(){
//             counter--
//         },
//         getCount: function(){
//            return counter;
//         }

//     } 
    
// } 

// let counterA = createCounter('A');
// let counterB = createCounter('B');

// counterA.increment();
// counterA.increment();
// console.log(counterA.getCount());

// counterB.decriment();
// counterB.decriment();
// console.log(counterB.getCount());

// let person2 = {
//     name: 'Jayson2',
//     age: 212,
//     job: 'Front-end2',
// }

//  person = {
//     name: 'Jayson',
//     age: 21,
//     job: 'Front-end',
//     displayInfo: function(){

//        setTimeout(function(){
//         console.log(this);
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.job);
//        }.bind(person2),500);
//     }
// }


// person.displayInfo();


function printObject(a,b,c){
    console.log(a,b,c);
    console.log('Printing obj:',this);
    Object.keys(this).forEach((key)=>{
        console.log('[' + key + ']' ,this[key]);
    });
}

let person = {
    firstName: 'Jayson',
    lastName: 'Dev',
    age: 21,
    frinds: ['jayson2','jayson']
}

let car = {
    name: 'BWM',
    model: 'X7',
    year:2017
}

// let printPerson = printObject.bind(person);
// printPerson(123,213123,123123123);
let printCar = printObject.bind(car);
// printPerson(123,213123,123123123);

printObject.call(person,'1','2','3');
printObject.apply(car,['1','2','3']);

function URLGenerator(domain){
    return function (site){
        return `https://${site}.${domain}`;
    }
}

function GroupGenerator(group){
    var pupils = [];
    
    return{
        add: function(pupil){
            return pupils.push(pupil);
        },
        getallpupils: function(){
             
            console.group(group)
            console.log(pupils)
            console.groupEnd();

        }
       
    }
       
}

let $UZDOMAIN = URLGenerator('uz');
let $RUDOMAIN = URLGenerator('ru');

console.log($UZDOMAIN('kun'));
console.log($UZDOMAIN('qalampir'));
console.log($RUDOMAIN('qiwi'));


let gr1 = GroupGenerator('1');
gr1.add('pupil1');
gr1.add('pupil2');
gr1.add('pupil3');
gr1.getallpupils();

let gr2 = GroupGenerator('2');
gr2.add('pupil4');
gr2.add('pupil5');
gr2.add('pupil6');
gr2.getallpupils();


function hello(){
    console.log('Hello',this)
}

 person = {
    name: 'Javokhir',
    age: 20,
    job: 'Web developer',
    sayHello: hello,
    sayHelloWindow: hello.apply(Window), 
    logInfo: function(job,phone){
        console.group(`${this.name}` + '\'s info:');
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }
}

let lena = {
    name: 'ELena',
    age: 18
}
function t() {
        return {
            tt: function(){
                console.log(this);
            }
        }
}


let bella = {
    name: 'Izabel',
    f(){
        console.log(this);
        console.log(this.name);
    },
    k(){

    },

    t: ()=> {
        // this = asdsad;
        console.log(this);
        
    }
};
let nigora = {
    name: 'Nigora'
}


person.logInfo.bind(lena)('Front-end','+998917910090');
t().tt.bind(Document)();
bella.f();

bella.f.bind(nigora)();

bella.t.bind(nigora)();