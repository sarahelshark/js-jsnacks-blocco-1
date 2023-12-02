/*
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/
/*tools
-const/let
-query selector o getElementById
-condizionale con booleano per verificare se presente in lista
-manipolazione della dom per dare un eventuale messaggio di rientro o non rientro nella lista dei nomi 
-array per creare una lista di confronto dei nomi invitati del programma 
-event listener al bottone di submit del nome utente
*/

//creare lista di nomi per la verifica
let partyList = ["Daisy", "daisy", "Meyer", "meyer", "Jordan", "jordan", "Nick", "nick","Tom","tom"];

// creo variabile per il form e aggancio event listener 
const form = document.getElementById("form");

form.addEventListener('submit',function(event){
    event.preventDefault(); //prevengo default con submit
    let nameOfUser = document.querySelector(".form-control").value; //prendo il dato da utente 

    let partyGuest = false; //variabile con booleano che mi permetterà di fare un paragone 'per esclusione'. Ovvero di default decido che tutti i guest non sono in ista, tranne quelli che ho segnato nella variabile partyList

for (let i=0; i < partyList.length; i++) {
    if (partyList[i] === nameOfUser) {
        partyGuest = true;
    }
}; 

// se il nome  è presente nella lista, allora l'utente può accedere,
if (partyGuest == 1) {
    document.getElementById('form').innerHTML=`
    <p class="d-flex flex-column mt-3 m-auto pb-3 text-success">
        ciao ${nameOfUser}, sei nella lista degli invitati!
     </p> `
} else {
    document.getElementById('form').innerHTML=`
    <p class="d-flex flex-column mt-3 m-auto pb-3 text-danger">
        che peccato ${nameOfUser}, purtroppo non sei nella lista degli invitati!
     </p> `
}

})


