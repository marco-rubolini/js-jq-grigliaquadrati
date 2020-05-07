// Genero la griglia con jquery
for (var i = 0; i < 25; i++) {
    $('.griglia').append('<div class="quadrato"></div>');
}


// Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.

// $('.quadrato').each(function(){
//     var numeroRandom = generaNumeroRandom(0, 10);
//     console.log(numeroRandom);
//     var classe = 'verde';
//     if (numeroRandom % 2 == 0) {
//         classe = 'rosso';
//     }
//     $("<span class='"+ classe +"'></span>").appendTo(this).text(numeroRandom);
// })

$('.quadrato').each(function(){
    var numeroRandom = generaNumeroRandom(0, 10);
    console.log(numeroRandom);
    $("<span></span>").appendTo(this).text(numeroRandom);
    if (numeroRandom % 2 == 0) {
        $(this).find('span').addClass('rosso');
    } else {
        $(this).find('span').addClass('verde');
    }
})


//se il numero da inserire è pari scriverlo in rosso, se è dispari in nero, se è 0 in verde

// Scrivo la funzione per generare un numero random tra min e max
function generaNumeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
