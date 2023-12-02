/*Snack 1: 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.

//tools
//-prompt
-variabiili
-codizionale 
*/
//svolgimento
//chiedo numero 1 e lo salvo in una variabile,
const numberOne = Number(prompt('Dimmi un numero da 1 a 10'));
console.log(numberOne);
//chiedo numero 2
const numberTwo= Number(prompt('Dimmi un numero da 1 a 10 diverso da quello appena digitato'));

//caso in cui venisse digitato un vlore che non e numerico
if (isNaN(numberOne) || isNaN(numberTwo)){
    alert('devi scrivere un numero');
}


// confronto i due numeri
if (numberOne > numberTwo){
    const result = document.getElementById('mydiv')
    result.innerHTML= `il ${numberOne} risulta maggiore di ${numberTwo}`;

}else if (numberTwo>numberOne){
    const resultTwo = document.getElementById('mydiv')
    resultTwo.innerHTML= `il ${numberTwo} risulta maggiore di ${numberOne}`;

}else if (numberTwo === numberOne){
    const resultEqual = document.getElementById('mydiv')
    resultEqual.innerHTML= `il ${numberTwo} risulta uguale a ${numberOne}`;
}

//se il numero 1 e maggiore  del 2 
    //stampo un messaggio

//se il numero 2 maggiore del numero 1
   //stampo un altro messaggio 

