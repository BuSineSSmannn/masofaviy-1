"use stirct";



// let car = {
//     name: 'Ford',
//     year: 2015,
//     person: {

//     }
// }

// console.log(car);


// let arr = [1,2,3];
// console.log(arr);

// function Car(name,year2){
// //    this = {};
//    this.name = name;
//     this.year = year2;
//     // return this;
// }
// Car.prototype.getAge = function(){
//    return new Date().getFullYear() - this.year;
// };




// var ford = new Car('ford',2015);
// var bmw = new Car('BMW',2016);


// function Product(netto,meat,povar = false){
//     this.massa = netto;
//     this.meat = meat;
//     if(povar){
//         this.povar = povar;
//     }
// }

// let product_1 = new Product(3000,400,'Jayson');
// let product_2 = new Product(2000,200);
// product_1.toString = ()=>{
//     console.log('self to string');
// }

// Product.prototype.getKaloriya = function(){
//     return this.massa * this.meat * 2 / 100;
// }
// Product.prototype.povar = 'Javoxir';

// let str = 'asd';
// let asd = new String('asd');

// console.log(product_1.getKaloriya());
// console.log(product_2.getKaloriya());

//  arr = new Array(1,2,3);

// Array.prototype.addtoone = function(){
//     for(let key in this){
//        if(!(isNaN(this[key]))){
//         this[key] = this[key] + 1;
//        }
//     }
// }
// arr.addtoone();

// console.log(arr);




function Product(netto,meat,povar = false){
    this.massa = netto;
    this.meat = meat;
    if(povar){
        this.povar = povar;
    }
}

let product_1 = new Product(3000,400,'Jayson');

let ford = Object.create({
        calculateDistancePerYear: function() {
            Object.defineProperty(this, 'distancePerYear', {
              value: Math.ceil(this.distance / this.age),
              writable: false,
              configurable: false,
              enumerable: false

        });
    }
},{
    name: {
        value: 'Ford',
        writable: false,
        configurable: false,
        enumerable: false

    },
    model: {
        value: 'Focus',
        writable: false,
        configurable: false,
        enumerable: true
    },
    year:{
        value: 2015,
        writable: false,
        configurable: false,
        enumerable: true


    },
    distance: {
        value: 100000,
        writable: true,
        configurable: false,
        enumerable: true


    },
    age:{
        enumerable: true,

        get: function(){
            
            return new Date().getFullYear() - this.year;
        },
        set: function(){
            alert('Новая значение не возможно!');            
        }
    }
});

ford.calculateDistancePerYear();
console.log(ford);
for(var key in ford){
    if(ford.hasOwnProperty(key)){
       console.log(key,ford[key]);
    }
}



