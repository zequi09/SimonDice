var ezequiel = {
    nombre: 'Ezequiel',
    apellido: 'Mantilla',
    edad : 20,
    ingeniero: true,
    cocinero: false,
    drone: true,
    medico: false

}

function imprimirProfesiones (persona){
    console.log(`${persona.nombre} es: `)
    if(persona.ingeniero){
        console.log('Ingeniero')
    }

    if(persona.cocinero){
        console.log('Cocinero')
    }

    if(persona.drone){
        console.log('Maneja drones')
    }

    if(persona.medico){
        console.log('Medico')
    }
}

function imprimirSiesMayor(persona){
    if(persona.edad >= 18){
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`No es mayor de edad`)
    }
}

imprimirSiesMayor(ezequiel);