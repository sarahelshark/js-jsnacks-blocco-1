/*
Snack 8:
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.

tools
-const/let
-prompt unico(oppure un input con event listener)
-utilizzo tecnica .reduce trovata in internet per sommare ?
-se scelgo quella strada, array + funzione
-siccome devo usare un array vuoto, mi servirà inserirci i valori digitati dall'utente, quindi uso .push
- una preghiera ad ogni divinità che mi viene in mente 
 */



//prendo form e racchiudo in costante (per agganciarci event listener dopo)
const form = document.getElementById("form");
//creo array vuoto che verra riempito in seguito
    const emptyList = [];

//aggiungo un event listener al bottone del form che clicchera utente alla fine della digitazione del numero 
form.addEventListener('submit', function (event) {
    event.preventDefault();//prevents from autosubmitting

       const userInput = document.getElementById('valore').value;//creo costante per racchiudere il valore digitato da utente
       //console.log(userInput)
       emptyList.push(Number(userInput));//uso la tecnica .push per riempire il mio array vuoto
      // console.log(emptyList);

       const myArray = userInput.split("", 4); //split mi serve per dividere in sottostringhe il mio array 
       console.log (myArray)
//utilizzo tecnica .reduce trovata in internet per sommare , fuori dal ciclo ????

console.log(emptyList);

// scorro l'array a partire dal primo numero e lo sommo con ogni numero seguente
let numberSum = parseInt(myArray[0]);
for (let i = 1; i < myArray.length; i++) {
    numberSum += parseInt(myArray[i]);
}

console.log("La somma dei numeri inseriti è: " + numberSum);

})
    

