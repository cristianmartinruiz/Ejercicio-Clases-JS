console.log('Ejercicio Wallet');

class Movimiento {
    descripcion;
    cantidad;
    fecha;
    categoria;

    constructor(desc, cantidad, fecha, tipo, categoria) {
        this.descripcion = desc;
        this.cantidad = cantidad;
        this.fecha = fecha;
        this.tipo = tipo;
        this.categoria = categoria;
    }
}

class Wallet {
    #monto;
    #operaciones;
    
    constructor(montoInicial = 0) {
        this.#monto = montoInicial;
        this.#operaciones = [];
    }


    agregarMovimiento (movi) {
        this.#operaciones.push(movi);
        if  (movi.tipo === 'GASTO') {
            this.#monto = this.#monto - movi.cantidad;
        } else {
            this.#monto = this.#monto + movi.cantidad;
        }
    }


    obtenerGastosPorMes(mes) {
        return this.#operaciones.filter(operacion => operacion.fecha.getMonth() === mes && operacion.tipo === 'GASTO');
    }

    obtenerGananciasPorMes(mes) {
        return this.#operaciones.filter(operacion => operacion.fecha.getMonth() === mes && 
        operacion.tipo === 'GANANCIA');
    }

    obtenerGastosPorCategoria(cat) {
        return this.#operaciones.filter(Movimiento => Movimiento.tipo ===  'GASTO' && 
            Movimiento.categoria === cat);
    }

    obtenerGananciasPorCategoria(cat) {
        return this.#operaciones.filter(Movimiento => Movimiento.tipo ===  'GANANCIA' && 
            Movimiento.categoria === cat);
    }

    calcularTotalPorMes(mes) {
        return this.#operaciones
            .filter (Movimiento => Movimiento.fecha.getMonth() === mes) 
            .reduce ( (total, Movimiento) => {
                    if (Movimiento.tipo === 'GASTO') {
                        total = total - Movimiento.cantidad
                    } else { 
                        total = total + Movimiento.cantidad
                    }
                    return total;
                }, 0
            );
    }

    calcularTotalPorCategoria(cat) {
        return this.#operaciones
            .filter(Movimiento => Movimiento.categoria === cat) 
            .reduce ( (total, Movimiento) => {
                    if (Movimiento.tipo === 'GASTO') {
                    total = total - Movimiento.cantidad
                    } else { 
                    total = total + Movimiento.cantidad
                    } 
                    return total;
            },0
        );
    }

    obtenerMonto() {
        return this.#monto;
    }  
}

// PRUEBAS

let cartera = new Wallet();

let m0 = new Movimiento(
    'Ingreso de nómina', 
    3000, 
    new Date(2024, 0, 5, 0, 0, 0, 0), 
    'GANANCIA',
    'Nomina'
);
cartera.agregarMovimiento(m0);


let m1 = new Movimiento(
    'Compra de pan', 
    150, 
    new Date(2024, 1, 5, 0, 0, 0, 0), 
    'GASTO',
    'Comida'
);
cartera.agregarMovimiento(m1);


let m2 = new Movimiento(
    'Compra de gasolina', 
    120, 
    new Date(2024, 1, 6, 0, 0, 0, 0), 
    'GASTO',
    'Gasolina'
);
cartera.agregarMovimiento(m2);



console.log(cartera.obtenerGastosPorMes(1)); 
console.log(cartera.obtenerGananciasPorMes(1)); 
console.log(cartera.obtenerGastosPorCategoria('Gasolina'));
console.log(cartera.calcularTotalPorMes(1));
console.log(cartera.calcularTotalPorCategoria('Gasolina'));
console.log(cartera.obtenerMonto());