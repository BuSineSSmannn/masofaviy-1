"use strict";

document.querySelector('#button').addEventListener('click',load);

async function load(){
    let url = 'https://jsonplaceholder.typicode.com/users';

    // fetch(url,{
    //     method: 'GET'
    // })
    // .then(function(value){
    //     return value.json();
    // })
    // .then(function(data){
    //    let $list = document.querySelector('#list');
    //     let html = '';

    //     data.forEach(element => {
    //         html += '<li>' + element.id + ' - '  + element.name + '</li> '
    //     });
    //     $list.insertAdjacentHTML('afterbegin',html);
    // });
    var response = await fetch(url);
    var data = await response.json();
        let $list = document.querySelector('#list');
        let html = '';

        data.forEach(element => {
            html += '<li>' + element.id + ' - '  + element.name + '</li> '
        });
        $list.insertAdjacentHTML('afterbegin',html);
   
}