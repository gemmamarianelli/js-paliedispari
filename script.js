
//palindromo


let parolaUtente = prompt("inserisci palindromo");
let parolaAlContrario = roveciaParola(parolaUtente);




//---------------dichiarazione funzione--------------------
function parolaUtente(parolaUtente, parolaAlContrario) {
  if (parolaUtente == parolaAlContrario) {
    console.log("La parola è palindroma");
  } else {
    console.log("La parola non è palindroma");
  }
}
function roveciaParola(parola) {
  let parolaRovesciata = "";
  for (var i = parola.length - 1; i >= 0; i--) {
    parolaRovesciata += parola[i]
  }
  return parolaRovesciata;
}

//---------------------------------------------------------



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
function IsNotUneven(somma)
{
    if (isNaN(numero) == false)
    {
        return (numero %2 == 1 ?  true : false);
        console.log("hai vinto");
    }
    else
    {
        return null;
        console.log("hai perso");
    }
  
}
//-----------------------------------------------------------