//fornire numeri da 1 a 100
//analizzare ogni numero e vedere se è: multiplo di 3 e/o di 5
//sostituire ai multipli di 3 -> Fizz
//sostituire ai multipli di 5 -> Buzz
//sostituire ai multipli di 3 e 5 -> FizzBuzz
//stampare

var lista = [];

for (var i = 1; i <= 100; i++) {
    lista.push(i);
}
console.log(lista);

for (var i = 1; i <= lista.length; i++) {
    if (i % 3 == 0 && i % 5 == 0){
        lista[i-1] = "FizzBuzz";
    } else if (i % 3 == 0){
        lista[i-1] = "Fizz";
    } else if (i % 5 == 0){
        lista[i-1] = "Buzz";
    } else{
        lista[i-1] = i;
    }
}

console.log(lista);

// MIA AGGIUNTA=================================
var contaFizz = [];
var contaBuzz = [];
var contaFizzBuzz = [];
var contaNonDivisibili = [];

for (var i = 0; i < lista.length; i++) {
    if (lista[i] == "Fizz"){
        contaFizz.push(i);
    }
    else if (lista[i] == "Buzz"){
        contaBuzz.push(i);
    }
    else if (lista[i] == "FizzBuzz"){
        contaFizzBuzz.push(i);
    }
    else {
        contaNonDivisibili.push(i);
    }
}

console.log("Tra 1 e 100 ci sono " + contaFizz.length + " numeri divisibili per 3, " + contaBuzz.length + " numeri divisibili per 5, " + contaFizzBuzz.length + " numeri che sono divisibili per entrambi, e infine " + contaNonDivisibili.length + " numeri che non sono divisibili nè per 3 nè per 5.");
document.getElementById('conteggio').innerHTML = "Tra 1 e 100 ci sono " + contaFizz.length + " numeri divisibili per 3, " + contaBuzz.length + " numeri divisibili per 5, " + contaFizzBuzz.length + " numeri che sono divisibili per entrambi, e infine " + contaNonDivisibili.length + " numeri che non sono divisibili nè per 3 nè per 5.";

// DA QUI CERCATO IN RETE =====================================

listContainer = document.createElement('div');
    // Make the list
listElement = document.createElement('ul');
    // Set up a loop that goes through the items in listItems one at a time
var numberOfListItems = lista.length;
var listItem;


// Add it to the page
document.getElementsByTagName('body')[0].appendChild(listContainer);
listContainer.appendChild(listElement);

for (i = 0; i < numberOfListItems; ++i) {
    // create an item for each one
    listItem = document.createElement('li');

    // Add the item text
    listItem.innerHTML = lista[i];

    // Add listItem to the listElement
    listElement.appendChild(listItem);
}
