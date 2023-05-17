//PROMPT DI INSERIMENTO DEI KM CHE L'UTENTE VUOLE PERCORRERE
let km_utente = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log("km inseriti:" + km_utente);

//PROMPT DI INSERIMENTO DELL'ETà DELL'UTENTE
let anni_utente = parseInt(prompt("Quanti anni hai?"));
console.log("anni inseriti: " + anni_utente);

//DICHIARO IL PREZZO PER CHILOMETRO
const prezzo_al_chilometro = 0.21;
console.log("prezzo al km:" + prezzo_al_chilometro);

//CALCOLO PREZZO INTERO DEL BIGLIETTO
let prezzo_intero = (km_utente * prezzo_al_chilometro);
console.log("prezzo intero: " +  prezzo_intero);

//DICHIARIAZIONE VARIABILE PER LO SCONTO
let scontoDaApplicare;

//SCONTO MINORENNI
if(anni_utente < 18 ) {
    
    scontoDaApplicare = 0.20; 
    console.log("sconto del 20%: "  + scontoDaApplicare);
    
} 
//SCONTO OVER 65
else if(anni_utente >= 65) {
    
    scontoDaApplicare = 0.40;
    console.log("sconto del 40%: "  + scontoDaApplicare);
    
} 
//SCONTO A 0
else {//if(anni_utente >=18 || anni_utente <= 65) {
    
    scontoDaApplicare = 0;
    console.log("sconto 0%: " + scontoDaApplicare);
}

//CALCOLO DELLO SCONTO SUL PREZZO INTERO
let prezzo_finale = prezzo_intero - (prezzo_intero * scontoDaApplicare);

//PREZZO FINALE
let prezzo_finale_fixed = prezzo_finale.toFixed(2);
console.log("prezzo finale: " + prezzo_finale_fixed);

//STAMPA A VIDEO
document.getElementById("prova").innerHTML = `Il prezzo del tuo biglietto è ${prezzo_finale_fixed} euro`;


