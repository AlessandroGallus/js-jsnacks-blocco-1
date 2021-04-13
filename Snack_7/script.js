var numero_inserito = prompt("inserisci un numero di 4 cifre");
var cifre = [];
var somma = 0;


for(var i=0; i < numero_inserito.length; i++){
  cifre[i] = parseInt(numero_inserito.charAt(i));
  /* somma += cifre[i]; FUNZIONA SOLO IN UN CICLO SEPARATO*/
}
for(var j=0; j<cifre.length; j++){
  somma += cifre[j];
}
console.log(cifre);
console.log(somma);
