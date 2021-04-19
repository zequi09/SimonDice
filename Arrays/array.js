var Paula = {
    nombre: 'Paula',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var Ezequiel = {
    nombre: 'Ezequiel',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var Martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var Angela = {
    nombre: 'Angela',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var Vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var Paul = {
    nombre: 'Paul',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}


const esAlta = (persona) => {
    return persona.altura > 1.8
}

const esBaja = (persona) => {
    return persona.altura <= 1.8

}

var personas = [Paula, Ezequiel, Martin, Angela, Vicky, Paul]

/* for (i = 0; i< personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} ${persona.apellido} mide ${persona.altura}`)
} */

/* const pasaraCms = persona =>{
    persona.altura *= 100
    return persona
} */

/* PARA CREAR UN NUEVO ARRAY QUE NO AFECTE AL ORIGINAL */

const pasaraCms = persona =>{
    return{
        ...persona,
      altura:  persona.altura * 100
    }
}

const reducir = (acum, persona) => {
    return acum + persona.cantidadDeLibros
}

var totalLibros = personas.reduce(reducir, 0)

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);
var personasCms = personas.map(pasaraCms);

console.log(personasAltas)
console.log(personasBajas)
console.log(personasCms)
console.log(totalLibros)