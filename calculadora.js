console.log('Calculadora.js');

class Calculadora {
    #resultado; // Declaración 
    constructor() {
        this.#resultado = 0;
    }

    obtenerResultadoresultado() {
        return this.#resultado;
    }

    reiniciar() {
        this.#resultado = 0;
    }

    //Operaciones

    sumar(numero) {
        try {
          if (isNaN(numero)) {
            throw Error('No se ha introducido un número válido')
          } else {
            this.#resultado = this.#resultado + numero
          }
        } catch (err) {
          console.error(err.message);
        }
      }

    restar(numero) {
        this.#resultado = this.#resultado - numero;
    }

    multiplicar(numero) {
        this.#resultado = this.#resultado * numero;
    }

    dividir(numero) {
        try {
          if (numero === 0 || isNaN(numero)) {
            throw Error('Se ha introducido un 0 o no se ha introducido un número válido')
          } else {
            this.#resultado = this.#resultado / numero;
          }
        } catch (error) {
          console.error(error.message);
        }
      }
    
    }

//PRUEBAS
//let calc = new Calculadora();
//console.log(calc.obtenerResultado());
//calc.sumar(5);
//console.log(calc.obtenerResultado());
//calc.dividir(2);
//console.log(calc.obtenerResultado());

//console.log(calc.obtenerResultado());
//calc.restar(2);
//console.log(calc.obtenerResultado());
//calc.multiplicar(5);
//console.log(calc.obtenerResultado());
//calc.dividir(2);
//console.log(calc.obtenerResultado());
//calc.sumar('hola');
//console.log(calc.obtenerResultado());