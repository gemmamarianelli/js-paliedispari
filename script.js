
//palindromo











//pari e dispari

//scelta numero del utente e del computer
let numero = prompt("scegli un numero");
let numRandom = Math.floor(Math.random() * 5);
console.log(numRandom);


let addendo1 = parseInt(numero);
let addendo2 = parseInt(numRandom);

//------------------dichiarazione della funzione-------------
function sommaNumeri(numero, numRandom) {

    let somma = numero + numRandom;
    console.log("La somma dei numeri è: " + somma);

}
//-----------------------------------------------------------