/*Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

tools
-prompt e parseint
-const/let
-ciclo
-condizinale
-allerta
-decremento i-- (soluzione trovata online)
-somma
-stampo
*/

//creo una variabile per poter racchiudere la somma di tutto dopo, fuori dal ciclo
let sum = 0;

// chiedo un numero 10 volte con un ciclo
for (let i = 1; i <= 10; i++) {
  // Uso parseInt nella richiesta di inserimento del numero all'utente, cosi da convertire la stringa in valore numerico
  const userInput = parseInt(prompt(`Inserisci il numero ${i} di 10`));
  
  // controllo se l'utente inserisce valori numerici o niente, in quel caso mando un allerta 
  if (userInput === null || isNaN(userInput)) {
    alert('Invalid input. Please enter a number.');
    // decremento la variabile del loop, in modo che torni alla iterazione che precede l'errore
    i--;
  } else { //se l'utente inserisce correttamente il numero, allora il programma puo procedere e calcolo la somma 
    // aggiungo la somma dei numeri raccolti allqa variabile che avevo precedentemente inizializzato
    sum += userInput; 
  }
}

//mostro i risultati solo alla fine del processo, quindi fuori dal ciclo 
alert(`La somma dei tuoi dieci numeri: ${sum}`);
