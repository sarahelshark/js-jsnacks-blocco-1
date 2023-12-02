/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

//tools
-prompt
-variabiili
-codizionale 
*/
/*
//svolgimento

*/

    
//chiedo una parola,
const wordOne = prompt('Dimmi una parola di senso compiuto');

//chiedo una parola diversa
const wordTwo= prompt('Dimmi una seconda parola di senso compiuto');

// espressione che controlla che l'input contenga solo caratteri alfabetici
const isWord = /^[a-zA-Z]+$/.test(wordOne) && /^[a-zA-Z]+$/.test(wordTwo);

if (isWord) {

  if (wordOne.length > wordTwo.length) {
    const result = document.getElementById('mydiv');
    result.innerHTML = `La parola "${wordOne}" risulta essere più lunga di "${wordTwo}"`;
  } else if (wordTwo.length > wordOne.length) {
    const resultTwo = document.getElementById('mydiv');
    resultTwo.innerHTML = `La parola "${wordTwo}" risulta essere più lunga di "${wordOne}"`;
  } else {
    const resultEqual = document.getElementById('mydiv');
    resultEqual.innerHTML = `Le parole "${wordTwo}" e "${wordOne}" hanno la stessa lunghezza`;
  }

} else {

  alert('Inserisci parole valide. Numeri non sono ammessi.');
}
