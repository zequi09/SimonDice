var ezequiel = {
    nombre: 'Ezequiel',
    apellido: 'Mantilla',
    edad : 20,
    peso: 87
}

console.log(`Al inicio del annio ${ezequiel.nombre} pesaba ${ezequiel.peso}kg`)

const aumentarDepeso = (persona) => persona.peso += 0.2
const perderPeso = (persona) => persona.peso -= 0.2


for(var i = 1; i <= 365; i++){
    var random = Math.random()

    if(random < 0.25){
        aumentarDepeso(ezequiel)
    } else if(random < 0.5 ){
        perderPeso(ezequiel)
    }else{

    }
}

console.log(`Al inicio del annio ${ezequiel.nombre} pesaba ${ezequiel.peso.toFixed(2)}kg`)