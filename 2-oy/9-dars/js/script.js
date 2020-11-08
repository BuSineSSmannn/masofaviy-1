
// alert(123);

// let age = prompt('Yoshiz nechchida?',18);
let con = confirm('Vam 18?');
if(!con){
    alert('Poka');

}else{




"use script";

function echo(text = 'Salom'){
    console.log(text);
}

function kvadrat(name,a,b){
    console.group(name);
    console.log('Kvadrat: ');
    console.log('Polshad: ');
    console.groupEnd();
}
echo();


function noDublicate(array){

    
    let newarr2 = [];
    let yest;
    for(let row_element of array){
        yest = false;
        for(let child of newarr2){
         
            if(child == row_element) {
                yest = true;
                break;
            }
        }
    
        if(!yest) newarr2[newarr2.length] = row_element;
        
    }
    if(newarr2.length > 9) return newarr2;

     return '9tadan oz ekan)';
}



let newarr3 = noDublicate([1,211,123,123,12312,3123]);
let newarr4 = noDublicate([1,2,3,2,1,3,4,5,6,4,6,7,8,8,9,10,1,2]);
noDublicate([1,1232,2,2,3,4,5,6,2]);

console.log(newarr3);
console.log(newarr4);


}





