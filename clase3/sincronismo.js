const delay = () =>{
    for(let i=0; i<1e10; i++);
}

function hacerTarea(numeroTarea){
    console.log('haciendoTarea ....'+ numeroTarea);
    delay();
}

// console.log('xomienzo de las tareas');
// hacerTarea(1);
// hacerTarea(2);
// hacerTarea(3);
// hacerTarea(4);
// console.log('fin de las tareas');

console.log('iniciando tareas con asincronismo');

setTimeout(() =>{
    console.log('haciendo tarea asincronica')
},5000);

hacerTarea(1);
hacerTarea(2);
console.log('fin de las tareas');