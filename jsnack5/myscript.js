/*Snack 5:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
tools
-prompt e parseint
-const/let
-ciclo
-condizinale
-%
*/

//prompt >>ok
//array
     /*
      if (divisibile per due){
       stampo in console
       }else (ovverp dispari){
        inserisco nell'array
     }
 */


//creo array vuoto per i numeri dispari
     emptyList = []
    
     // chiedo un numero 6 volte con un ciclo
for (let i = 1; i <= 6; i++) {
    // Uso parseInt nella richiesta di inserimento del numero all'utente, cosi da convertire la stringa in valore numerico
    const userInput = parseInt(prompt(`Inserisci il numero ${i} di 6`));
    
    // controllo se l'utente inserisce valori numerici o niente, in quel caso mando un allerta 
    if (userInput === null || isNaN(userInput)) {
      alert('Invalid input. Please enter a number.');
      // decremento la variabile del loop, in modo che torni alla iterazione che precede l'errore
      i--;
    } else { //se l'utente inserisce correttamente il numero, allora il programma puo procedere col log in console oppure con inserimento in array
        if (userInput % 2 === 0){
            console.log('divisibile per due');
        }else {
           // Aggiungo il numero dispari all'array
           emptyList.push(userInput);
        }
    }
  }

  // Mostro l'array di numeri dispari nella console
console.log('Numeri dispari:', emptyList);

// Mostro l'array di numeri dispari sullo schermo
const resultArray = document.getElementById('mydiv');
resultArray.innerHTML = `I numeri dispari sono: ${emptyList.join(', ')}`;
  
