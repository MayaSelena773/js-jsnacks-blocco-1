
//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

//Dichiaro la variabile
let sumNumber = 0;

 //Ripeto la richiesta per 10 volte
 for (i = 0; i < 10; i++) {
     let userNumber = parseInt(prompt("Scrivi un numero"));

     //Aggiungo ogni numero di volta in volta
    
        sumNumber += userNumber;
    
 }
 //Stampo in console il risultato finale
 console.log(sumNumber);
 
