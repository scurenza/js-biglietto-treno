// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Dati
const basePrice = 0.21;
const youngDiscount = 0.2;
const oldDiscount = 0.4;
let userPrice = 0;

// Input
const userDistance = parseInt(prompt("Dimmi i chilometri da percorrere"));
// console.log(userDistance, typeof(userDistance));

const userAge = parseInt(prompt("Dimmi la tua età"));
// console.log(userAge, typeof(userAge));

// Elaborazione ed output
if (userAge < 18 ) {
    userPrice = basePrice * userDistance ;
    let userDiscountedPrice = ( userPrice - (userPrice * youngDiscount));
    console.log("Prezzo da troncare:",userDiscountedPrice);
    userDiscountedPrice = Math.trunc(userDiscountedPrice*100)/100;
    document.getElementById("result").innerHTML = userDiscountedPrice;
}

else if (userAge >= 65 ) {
    userPrice = basePrice * userDistance ;
    let userDiscountedPrice = ( userPrice - (userPrice * oldDiscount));
    console.log("Prezzo da troncare:",userDiscountedPrice);
    userDiscountedPrice = Math.trunc(userDiscountedPrice*100)/100;
    document.getElementById("result").innerHTML = userDiscountedPrice;
}

else {
    userPrice = basePrice * userDistance ;
    console.log("Prezzo da troncare:",userPrice);
    userPrice = Math.trunc(userPrice*100)/100;
    document.getElementById("result").innerHTML = userPrice;
}