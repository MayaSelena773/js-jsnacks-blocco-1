
//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

 const userNumber = prompt("Scrivi un numero");
 let sumNumber = 0;
 
 //formo l'array nel quale verranno aggiunti i numeri dell'utente
 let array = [];

 //Ripeto la richiesta per 10 volte
 for (i = 0; i < 11; i++) {
     let parseInt (userNumber = prompt("Scrivi un numero"));

     //Aggiungo ogni numero di volta in volta
     array.push(userNumber);

     sumNumber += userNumber;
 }
 //Stampo in console il risultato finale
 console.log(sumNumber);
