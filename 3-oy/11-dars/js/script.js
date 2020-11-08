"use stirct";

// class Название [extends Родитель]  {
//   constructor
//   методы
// }


function echo(text){
    console.log(text);
}




class Animal {
    static type = 'Animal';  
    static ilife = true;

    constructor(animaloptions){
        this.name = animaloptions.name;
        this.age = animaloptions.age;
        this.hasTail = animaloptions.hasTail;
        this.speed = animaloptions.speed;
    };

    getHourForThisDistance(distance){
        // return this.name+ ': ' + distance / this.speed;
        return distance / this.speed;
    }
    voice(){
        console.log('Voice');
    }

}

class Car{
    static type = 'Car';  
    static ilife = false;

    constructor(name,model){
        this.name = name;
        this.model = model;
    }
}

class Cat extends Animal{
    constructor(catObj){
        super(catObj);
        this.color = catObj.color;
    }
    speeder(){
       let s =  super.getHourForThisDistance(100);
        console.log( s <= 1 ? 'speeder' : s > 1 && s <= 5 ? 'normal' : 'breaker' );
        // if(s <= 1 ){
        //     return 'speeder'
        // }   
        // else if(s > 1 && s < 5){
        //     return 'normal'
        // }else {
        //     return 'breaker'
        // }
    }
    get getTest(){
        console.log('get chegoto');
        
    }
    set getTest(value){
        this.color = value;
        console.log('set chegoto');
        console.log(value);
    }

    ["password" +'qwejkjheqwqwgeueqwuqwuieqwuuyiqwuyie']() {
        console.log('parol23');
     }
}




// let girrafe  = new Animal('Girrafe',5,true,10);
// let zebra  = new Animal('Zebra',10,true,20);
// let BMW = new Car('Jeep','BMW X7');
// echo(girrafe.getHourForThisDistance(100));
// echo(zebra.getHourForThisDistance(100));
// zebra.ilife = false;


let cat = new Cat({
    name: 'Cat',
    age: 5,
    hasTail: true,
    speed: 20,
    color: 'Black'
});

cat.getTest = 'yellow';
cat.getTest;
cat.voice();
cat.speeder();

let getketbase = 'passwordqwejkjheqwqwgeueqwuqwuieqwuuyiqwuyie';
cat[getketbase]();



class Component{
   
    constructor(selector){
        this.$el = document.querySelector(selector);
    }
    hide(){
        this.$el.style.display = 'none';
    }
    show(){
        this.$el.style.display = 'block';

    }
   
    set addHTML(value){
        this.$el.insertAdjacentHTML('beforeend',value);
    }
}

class Box extends Component{
    constructor(options){
        super(options.selector);
        this.$el.style.width = this.$el.style.height = options.size + 'px';
        this.$el.style.backgroundColor = options.color;
    }
    get color2(){
        return 'yellow';
    }
}


const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
});


document.querySelector('.hide').onclick = function(){
    box1.hide();
}

document.querySelector('.show').onclick = function(){
    box1.show();
}
box1.addHTML = '<b>IA GOTOVA</b>';

