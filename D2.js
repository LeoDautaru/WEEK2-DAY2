/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let n1 = 2;
let n2 = 8;
if (n1 > n2) {
  console.log("n1 is greater");
} else {
  console.log("n2 is greater");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let n3 = 9;
if (n3 !== 5) {
  console.log("not equal");
} else {
  console.log("equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
let n4 = 10;
if (n4 % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let n5 = 4;
let n6 = 4;
if (n5 + n6 === 8) {
  console.log(8);
} else {
  console.log("The number is not 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 52;
let shippingCost = 10;
if (totalShoppingCart > 50) {
  shippingCost = 0;
} else {
  shippingCost = 10;
}
let checkout = totalShoppingCart + shippingCost;
console.log(checkout);

/* ESERCIZIO 6
Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let BlackFriday = totalShoppingCart * 0.2;
let discountedCart = totalShoppingCart - BlackFriday;
if (discountedCart > 50) {
  shippingCost = 0;
} else {
  shippingCost = 10;
}
let BlackFridayCheckout = discountedCart + shippingCost;
console.log(BlackFridayCheckout);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let nr1 = 17;
let nr2 = 9;
let nr3 = 2;
let max, mid, min;
if (nr1 >= nr2 && nr1 >= nr3) {
  max = nr1;
  if (nr2 >= nr3) {
    mid = nr2;
    min = nr3;
  } else {
    mid = nr3;
    min = nr2;
  }
} else if (nr2 >= nr1 && nr2 >= nr3) {
  max = nr2;
  if (nr1 >= nr3) {
    mid = nr1;
    min = nr3;
  } else {
    mid = nr3;
    min = nr1;
  }
} else {
  max = nr3;
  if (nr1 >= nr2) {
    mid = nr1;
    min = nr2;
  } else {
    mid = nr2;
    min = nr1;
  }
}
console.log(+max + "," + mid + "," + min);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let myAge = 22;
if (typeof myAge === "number") {
  console.log("The value entered is a number");
} else {
  console.log("The value entered is not a number");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let testNumber = 10;
if (testNumber % 2 === 0) {
  console.log("The number " + testNumber + " is even.");
} else {
  console.log("The number " + testNumber + " is odd.");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
numbers[numbers.length - 1] = 100;
console.log(numbers);
