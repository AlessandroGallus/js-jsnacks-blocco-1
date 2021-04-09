var numero_inserito=0;
var somma=0;

for(i=0; i<3; i++){
    var j = 0;
    j = i+1;
    numero_inserito = parseInt(prompt("Inserisci il " + j + "° numero"));
    somma = somma + numero_inserito;
}
console.log("la somma dei tuoi numeri è: " + somma);