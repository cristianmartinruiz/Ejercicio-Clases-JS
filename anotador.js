console.log ('Anotador');

class Anotador {
    #titulo;
    #notas;


    constructor(titulo) {
        this.#titulo = titulo;
        this.#notas = [];
        
    }

    agregarNota(nota) {
        this.#notas.push(nota);
    }

    actualizarNotas(id, nota) {
        this.#notas[id] = nota;
    }

    obtenerNota(id) {
        return this.#notas[id];
    }

    eliminarNota(id) {
        this.#notas.splice(id, 1);
    }

    eliminarNotas() {
        this.#notas = [];
    }

    listarNotas() {
        return this.#notas.reduce(
            (salida, nota, index) => {
                return `${salida} \n ${index+1}. ${nota}`
            }, 
            `${this.#titulo} \n-----------------\n`
        );
    }
}

//PRUEBAS

//let lista = new Anotador('Lista de la compra');
//lista.agregarNota('Patatas');
//lista.agregarNota('Pan');
//lista.agregarNota('Leche');
//lista.agregarNota('Lentejas');
//lista.agregarNota('Refrescos');
//console.log(lista.listarNotas());

//lista.actualizarNotas(2, 'Leche desnatada');
//console.log(lista.listarNotas());

//lista.actualizarNotas(4, 'Yogures');
//console.log(lista.listarNotas());
//console.log(lista.obtenerNota(4));

//lista.eliminarNota(3);
//console.log(lista.listarNotas());

//lista.eliminarNotas();
//console.log(lista.listarNotas());