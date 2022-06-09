
//Crea due tag div con due id diversi:
//un div avrà il testo colorato di rosso mentre l’altro di verde.
//Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e
//in verde i numeri pari.


const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arrayNumbers.length; i++ ){

    const thisNumber = arrayNumbers[i];

    if (thisNumber % 2 === 0) {

        document.getElementById('red-text').innerHTML += thisNumber;

}else {

    document.getElementById('green-text').innerHTML += thisNumber;
}


