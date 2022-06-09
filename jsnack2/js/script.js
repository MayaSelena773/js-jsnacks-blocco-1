
//Chiedi un numero di 4 cifre all’utente nel prompt
 //e calcola la somma di tutte le cifre che compongono il numero.

 const userNumbers = prompt ('Scrivi qui quattro cifre');
 let sumNumber = 0; 

 for (let i = 0; i < userNumbers.length; i++) {

    const singleNumber = parseInt(userNumbers[i]);

    sumNumber += singleNumber;

 }

console.log(sumNumber);