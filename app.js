//SNACK 1: Crea una funzione che somma due numeri.
console.log("--- SNACK 1 ---")
function sumA(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}
console.log(sumA(3,6))


const sumB = (firstNumber,secondNumber) => {
    return firstNumber + secondNumber;
} 
console.log(sumB(4,12))

//SNACK 2: Crea una arrow function che calcola il quadrato di un numero.

console.log("--- SNACK 2 ---")
const sqaure = (number) => number * number;
console.log(sqaure(9))

//SNACK 3: Crea una funzione eseguiOperazione
console.log("--- SNACK 3 ---")

const somma = (a,b) => a + b;
const sottrazione = (a,b) => a - b;
const moltiplicazione = (a,b) => a * b;

const eseguiOperazione = (a,b,operazione) => operazione(a,b);

console.log(eseguiOperazione(3,4,moltiplicazione));
console.log(eseguiOperazione(3,4,somma));
console.log(eseguiOperazione(8,4,sottrazione));

//SNACK 4: Crea un generatore di funzioni creaTimer
console.log("--- SNACK 4 ---")

function creaTimer(tempo) {
    return function() {
        setTimeout(() => {
            console.log("Tempo scaduto!");
        }, tempo);
    };
}

const timer5s = creaTimer(5000); 
timer5s(); 

//SNACK 5: Crea una funzione stampaOgniSecondo con setInterval.
console.log("--- SNACK 5 ---")

function stampaOgniSecondo(messaggio) {
  setInterval(() => {
    console.log(messaggio);
  }, 1000);
}

stampaOgniSecondo("banana")



//SNACK 6: Crea un contatore automatico con setInterval


