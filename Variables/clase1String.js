var nombre 
nombre = 'Ezequiel'
apellido = 'Mantilla'

var edad = '28 annios'
console.log('Hola ' + nombre +' '+ apellido);
console.log('Tengo '+ edad);

var nombreEnMayuscula = nombre.toUpperCase();
var apellidoEnMinuscula = apellido.toLowerCase();

 /* Primera letra de un STRING */
var primeraLetra = nombre.charAt(0);

/* CANTIDAD DE LETRAS EN UN STRING */

var cantidadDeLetras = nombre.length;

/* CONCATENAR DOS STRINGS */

var nombreCompleto = `${nombre} ${apellido}`

/* ENTRAR DE UN STRING A UNO MAS PEQUENNO */

var str = nombre.substr(7, 7);