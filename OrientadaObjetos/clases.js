function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    return this

}

Persona.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura}` )
}

var sacha = new Persona('Sacha','Perez','1.81')
var zequi = new Persona('Zequi','Perez','1.70')
var pepito = new Persona('Pepito','Perez','1.60')
