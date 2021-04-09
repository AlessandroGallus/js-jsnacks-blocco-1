var nome_utente = prompt("inserisci il tuo nome (assicurati di mettere la prima lettera maiuscola");
var lista_nomi = [
    "Alessandro" ,
    "Giorgio" ,
    "Luca" ,
    "Leopoldo" ,
    "Matteo" ,
    "Mattia"];

var accesso=false;

for(i=0; i<lista_nomi.length; i++){

    var nome_controllo = lista_nomi[i];
    if(nome_utente == nome_controllo){
        accesso=true;
    }

}
if(accesso){
    console.log("Goditi la festa");
}else{
    console.log("NO!");
}
