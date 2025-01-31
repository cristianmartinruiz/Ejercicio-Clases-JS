
class Television {
    #encendido = false;
    #canal = 0;
    #canales;
    #volumen = 0;
    #marca;

    constructor(marca,canales) {
        this.#marca = marca;
        this.#canales = canales;
    }

    prender() {
        this.#encendido = true;
    }

    
    apagar() {
        this.#encendido = false;
    }


    verCanalSiguiente() {
        if (this.#encendido) {
            if (this.#canal == 100) {
                this.#canal = 0;
            } else {
            this.#canal = this.#canal + 1;
            }
        } else {
            console.log('La television esta apagada');
        }
    }


    verCanalAnterior() {
        if (this.#encendido) {
            if (this.#canal == 0) {
                this.#canal = 100;
            } else {
            this.#canal = this.#canal - 1;
            }        
        } else {
            console.log('La television esta apagada');
        }
    }

    
    cambiarCanal(canal) {
        if (this.#encendido) {
            if (canal < 100 && canal > 0) {
                this.#canal = canal;
            } else {
                console.log('Este canal no existe');
            }
        } else {
            console.log('La television esta apagada');
        }
    }



    subirVolumen() {
        if (this.#encendido){
            if (this.#volumen == 100) {
                console.log('El volumen esta al maximo');
            }else{
                this.#volumen = this.#volumen + 1;
            }
        } else {
            console.log('La television esta apagada');
        }
    }
    


    bajarVolumen() {
        if (this.#encendido){
            if (this.#volumen == 100) {
                console.log('El volumen esta al minimo');
            } else {
            this.#volumen = this.#volumen - 1;
            }
        }else {
            console.log('La television esta apagada');
        }
    }
    


    toString() {
        return `Television ${this.#marca} \n - Canales: ${this.#canales} \n - Canal actual: ${this.#canal} \n - Volumen actual: ${this.#volumen} `;
    }
}


let tele = new Television('Sony', 23);
console.log(tele.toString());

//PRUEBAS//

tele.prender();
console.log(tele.toString());

tele.verCanalSiguiente();
console.log(tele.toString());

tele.subirVolumen();
console.log(tele.toString());

tele.cambiarCanal(80);
console.log(tele.toString());

tele.cambiarCanal(22);
console.log(tele.toString());

tele.cambiarCanal(99);
console.log(tele.toString());

tele.verCanalSiguiente();
console.log(tele.toString());

tele.verCanalSiguiente();
console.log(tele.toString());

tele.verCanalSiguiente();
console.log(tele.toString());

tele.verCanalSiguiente();
console.log(tele.toString());

tele.cambiarCanal(122);
console.log(tele.toString());



