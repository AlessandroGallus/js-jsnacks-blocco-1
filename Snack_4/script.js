var arr = [];
var j = 0;
var numero_utente;
for (i=0; i<6; i++){
    numero_utente = parseInt(prompt("Inserisci il numero"));
    if (numero_utente%2 != 0){
        arr[j] = numero_utente;
        j++;
    }
}
console.log(arr)