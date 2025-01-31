const alumnos = [
    {
      id: 1,
      nombre: 'Zamora',
      edad: 15,
      master: 'FullStack'
    },
    {
      id: 2,
      nombre: 'Jose Luís',
      edad: 22,
      master: 'BlockChain'
    },
    {
      id: 3,
      nombre: 'Lucía',
      edad: 19,
      master: 'IA'
    },
    {
      id: 4,
      nombre: 'Felipe',
      edad: 49,
      master: 'FullStack'
    },
    {
      id: 5,
      nombre: 'María',
      edad: 17,
      master: 'IA'
    },
    {
      id: 6,
      nombre: 'Cecilia',
      edad: 16,
      master: 'FullStack'
    },
    {
      id: 7,
      nombre: 'Cecilia',
      edad: 16,
      master: 'BlockChain'
    }
  ];
  
  const datosAleatorios = [
    "Paisa",
    66,
    "Qué tal estás",
    {},
    { name: 'Bienve' },
    [1, 2, 3],
    ['Hola que tal'],
    true
  ]
  
//1//

//function vAbsoluto (arr){
//    return arr.map(e => Math.abs(e));
//}

//const numbers = [-1, 2, -3, 4, -5];
//console.log(numbers); // [-1, 2, -3, 4, -5]
//console.log(vAbsoluto(numbers)); // [1, 2, 3, 4, 5]

//2//

//{
//    string:'hola', 'mundo', 'hola', 'mundo', 'hola', 'mundo',
//    number: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
//    object: { nombre: 'pedro' }, { nombre: 'juan' }, { nombre: 'pepe' }
//}

//function porTipos (arr){
//    return {
//        strings: arr.filter(e => typeof e === 'string'),
//        numbers: arr.filter(e => typeof e === 'number'),
//        booleans: arr.filter(e => typeof e === 'boolean')
//    }
//}
//console.log(porTipos(datosAleatorios));

//3//

//function getFullStackStudents (arr){
//    return arr.filter(student => student.master === 'FullStack')
//}

//console.log(getFullStackStudents(alumnos));

//4//

//function nStudentFullStackReduce (arr){
//    return arr.reduce ((acumulador, student) => {
//       let master = student.master;
//        if (acumulador [master] != undefined) {
//            acumulador[master] = acumulador[master] + 1;
//        } else {
//            acumulador[master] = 1;
//        }
//        return acumulador;
//    }, {});
//}

//console.log(nStudentFullStackReduce(alumnos));

//5//

//function getAdultStudents (arr){
//    return arr.filter(student => student.edad >= 18)
//}
//console.log(getAdultStudents(alumnos));

//6//

//function mayor (arr){
//    return arr.reduce((acumulador, student) => {
//        if (student.edad > acumulador.edad){
//            return student;
//        }
//        return acumulador;
//   }, arr[0]);
//}
//console.log(mayor(alumnos));

//7//
function porTipos (arr){
    return arr.reduce ((acumulador, elemento) => {
       let tipo = typeof elemento;

        acumulador[tipo] = acumulador[tipo] ? acumulador[tipo] : [];
        acumulador[tipo].push(elemento);
        return acumulador;
    }, {});
}
console.log(porTipos(datosAleatorios));

