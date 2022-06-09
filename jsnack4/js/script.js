
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

//formo l'array nel quale verranno aggiunti i numeri dell'utente
let array = [];
let userNumber = 0;

//Ripeto la richiesta per 6 volte
for (i = 0; i < 6; i++) {
    let userNumber = parseInt ( prompt("Scrivi un numero"));

    //Per ogni numero, se è dispari lo inserisco nell'array

    if (userNumber % 2 != 0) {

        array.push(userNumber);
    }
   
    }

console.log(array);