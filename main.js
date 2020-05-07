// Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.

$('.quadrato').each(function(){
    var numeroRandom = generaNumeroRandom(0, 10);
    console.log(numeroRandom);
    $("<span></span>").appendTo(this).text(numeroRandom);
})


// Scrivo la funzione per generare un numero random tra min e max
function generaNumeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
