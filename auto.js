

class Auto {
    #encendido;
    #velocidad;
    #marca;
    #modelo;
    #patente;

    constructor(marca, modelo, patente) {
        this.#encendido = false;
        this.#velocidad = 0;
        this.#marca = marca;
        this.#modelo = modelo;
        this.#patente = patente;
    }

    arrancar() {
        this.#encendido = true;
    }
    
    apagar() {
        if (this.#encendido == 0) {
            this.#encendido = false;
        } else {
            console.log("El coche va a una velocidad mayor a 0");
        }
    }

    acelerar() {
        if (this.#encendido) {
            this.#velocidad = this.#velocidad + 10;
        } else {
            console.log("El coche está apagado");
    }
}
    
    desacelerar() {
        if (this.#encendido) {
            if (this.#velocidad > 0) {
            this.#velocidad = this.#velocidad - 10;
            if (this.#velocidad < 0) {
                this.#velocidad = 0;
            }
        } else {
            console.info("El coche no puede desacelerar porque no esta andando");
        }
    } else {
        console.info("El coche no esta encendido");
    }
}

    tostring() {    
        return `${this.#marca} ${this.#modelo}, patente ${this.#patente}`;
    }
}

//PRUEBAS pendiente revision!!!

//let coche = new Auto ("Ford", "Fiesta", "ABC123");
//console.log(coche.tostring());
//coche.arrancar();
//coche.acelerar()
//coche.apagar();
//coche.desacelerar();
//console.log(coche);
//coche.desacelerar();
//console.log(coche);
