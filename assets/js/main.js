console.log('it works');

/*
MAIL 
    - Chiediamo all'utente un email attraverso l'input
        -lo salviamo in una variabile
    - Creiamo una lista di chi può accedere con un array
    - Confrontiamo il value dell'input inserito con la nostra lista
        -utiliazziamo un for con una array
    -Stampiamo il messaggio dell'esito

*/

//Chiediamo all'utente un email attraverso l'input
//-lo salviamo in una variabile

const email = document.getElementById('email')

let h1 = document.querySelector('h1')
//console.log(email);

document.querySelector('button').addEventListener('click', function (e) {
    e.preventDefault();

    console.log(email.value);
    let userEmail = email.value;
    //console.log(userEmail);
    //console.log(typeof userEmail);

    //- Creiamo una lista di chi può accedere con un array

    const list = ['boolean@gmail.com', 'nico@gmail.com', 'giuliano@gmail.com', 'artur@gmail.com', 'pincopallino@gmail.com'];
    console.log(typeof list[0]);
    //console.log(list);

    /*Confrontiamo il value dell'input inserito con la nostra lista
        - utiliazziamo un for con una array
    - Stampiamo il messaggio dell'esito*/

    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        console.log(element);

        if (userEmail === element) {
            //console.log('Non puoi entrare!');
            h1.innerHTML = 'Bentornato'
        } else if (userEmail != element) {
            h1.innerHTML = 'Registrati per poter entrare'
        }

    }

}
)

/*
 DADI
    - Creiamo un bottone genera che genererà due valori uno per l'user e l'altro per il computer
    - Creiamo una array che va da 1 a 6
    - Confrontiamo i valori di entrambi i giocatori
    - Stabiliamo il vincitore

*/

//const generate = document.querySelector('.generate')
//console.log(generate);

let numbers = document.querySelector('.numbers')
console.log(numbers);

//- Creiamo una array che va da 1 a 6
const nut = [1,2,3,4,5,6]
console.log(nut);

let container = document.querySelector('.container')

let h3 = document.querySelector('h3')

//- Creiamo un bottone genera che genererà due valori uno per l'user e l'altro per il computer
document.querySelector('.generate').addEventListener('click', function () {

    let player = Math.floor(Math.random() * 6) + 1;
    console.log(player);

    let pc = Math.floor(Math.random() * 6) + 1;
    console.log(pc);

    //numbers.insertAdjacentHTML('beforeend', `<span">${player}</span>`)
    //numbers.insertAdjacentHTML('beforeend', `<span>${pc}</span>`)

    numbers.innerHTML = (`<span>${player}</span>`)
    numbers.innerHTML += (`<span>${pc}</span>`)

    if (player > pc) {
        //console.log('Player Win');
        //container.insertAdjacentHTML('beforeend', '<h3>Hai Vinto</h3>')
        h3.innerHTML = 'Hai Vinto'
    } else if (pc > player) {
        //console.log('Pc Win');
        //container.insertAdjacentHTML('beforeend', '<h3>Mi dispiace hai perso</h3>')
        h3.innerHTML = 'Mi dispiace hai perso'
    } else if (player === pc) {
        //console.log('Is a Draw')
        //container.insertAdjacentHTML('beforeend', '<h3>Pareggio</h3>')
        h3.innerHTML = 'Pareggio'
    }
    

    
})