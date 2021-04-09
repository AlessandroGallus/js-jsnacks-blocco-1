
/* inserimento delle parole da parte dell'utente */


var parola_1 = "";
var parola_2 = "";

parola_1 = prompt("inserisci la prima parola");
parola_2 = prompt("inserisci la seconda parola");

/* confronto lunghezza parole */
var l1 = parola_1.length;
var l2 = parola_2.length;


if (l1<l2){
    console.log("la seconda parola è più lunga della prima: ");
    console.log(parola_1);
    console.log(parola_2);
}else if (l2<l1){
    console.log("la prima parola è più lunga della seconda: ");
    console.log(parola_2);
    console.log(parola_1);
}else{
    console.log("le parole hanno la stessa lungezza");
    console.log(parola_1);
    console.log(parola_2);
}
