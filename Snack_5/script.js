var numero_inserito = prompt("inserisci il numero a cui arrivare");
var numeri_elevati = [];

for(var i = 0; i<numero_inserito ; i++){
  numeri_elevati[i] = Math.pow(i+1, 3);
  console.log(numeri_elevati[i]);
}
console.log(numeri_elevati);