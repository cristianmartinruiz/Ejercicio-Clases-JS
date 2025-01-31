
function Usuario (nombre, apellido, edad, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.pais = pais;
}
    this.saludar = function () {
        console.log(`Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }

const u1 = new Usuario('Juan', 'Perez', 30, 'Argentina');
const u2 = new Usuario('Jose', 'Martin', 45, 'bolivia');