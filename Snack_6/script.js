var risultato = 0;
var i = 0;
while (risultato<1000){
  risultato = Math.pow(2 , i);
  if (risultato <1000){
    console.log(risultato);
  }
  i++
}