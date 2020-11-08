"use stirct";


/**
 * Client -> Server -> Database -> Server -> Client
 */



console.log('Клиент: Хочу взять список участников');
console.log('...');

// setTimeout(function(){
//     console.log('Запрашываю список участников');
//     console.log('...');
//     setTimeout(function(){
//         console.log('БД формирую список участников');
//         console.log('...');
//         setTimeout(function(){
//             console.log('Трансформирую список участников');
//             console.log('...');
//             setTimeout(function(){
//                 console.log('Клиент: Получил список участников');
//                 console.log('...');
                
//             },500);
//         },500);
//     },500);

// },1000);


let promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        
        console.log('Запрашываю список участников');
        console.log('...');
        if(true === 1){
            reject('Error user not found');
        }


            resolve([1,2,3]);

        
    },1000);
});

promise.then(function(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                var users = [
                    {
                        uid: 'id1',
                        name: 'Elena'
                    },
                    {
                        uid: 'id2',
                        name: 'Alex'
                    }
                ];
                console.log('БД формирую список участников');
                console.log('...');
                //  reject('При формирование список произошла ошибка!');
                 resolve(users);
                },500);
        });
        
      
})
.then(function(dbUsers){
    return new Promise(function(resolve,reject){
              setTimeout(function(){
            console.log('Трансформирую список участников');
            console.log('...');
            var users = dbUsers.map(function(user){
                return {
                    id: user.uid,
                    firstName: user.name,
                    timestap: Date.now()
                }
            });
            resolve(users);
              },500);
    });
})
.then(function(users){
    setTimeout(function(){
     console.log('Клиент: Получил список участников');
        console.log(users);
          },500);
})

.catch(function(error){
    console.error(error);
})
// .finally(function() {
//         console.log('Finaly');
//  });

//https://jsonplaceholder.typicode.com/users