
//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

//Dichiaro la variabile
 let sumNumber = 0;
 
 //formo l'array nel quale verranno aggiunti i numeri dell'utente
 let array = [];

 //Ripeto la richiesta per 10 volte
 for (i = 0; i < 10; i++) {
     let userNumber = prompt("Scrivi un numero");

     //Aggiungo ogni numero di volta in volta
     array.push(userNumber);

     for (let i = 0; i < userNumber.length; i++) {

        const singleNumber = parseInt(userNumber[i]);
    
        sumNumber += singleNumber;
    
     }

 }
 //Stampo in console il risultato finale
 console.log(sumNumber);
