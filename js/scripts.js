const typed = new Typed('.typed',{
   /* strings: [
    '<i class="lista">Sillas</i>',
    '<i class="lista">Roperos</i>',
    '<i class="lista">Camas</i>',
    '<i class="lista">Alacenas</i>',
    '<i class="lista">Puertas</i>',
    '<i class="lista">Mesas</i>'],*/
    
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar
    typedSpeed: 95, //Velocidad en milisegundos para poner una letra,
    startDelay: 300, //Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar.
    backSpeed: 95, //Velocidad en milisegundos para borrar una letra,
    smartBackspace: true, //Eliminar solamente las palabras que sean nuevas en una cadena de texto,
    shuffle: false, //ALterar el orden en el que escribe las palabras.
    backDelay: 1500, //Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, //Repetir el array de strings
    loopCount: false,//Cantidad de veces a repetir el array. false = infinite
    showCursor: true, //Mostrar cursor palpitanto
    cursorChar: '|', //Caracter para el cursor
    contentType: 'html' //'html' o 'null', para texto sin formato

});//el typed conlleva dos parametros, el otro es donde se registras tadas las configuraciones
