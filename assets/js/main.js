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

    const list = ['boolean@gmail.com', 'nico@gmail.com', 'giuliano@gmail.com', 'artur@gmail.com', 'pincopallino@gmail.com'];
    console.log(typeof list[0]);
    //console.log(list);

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