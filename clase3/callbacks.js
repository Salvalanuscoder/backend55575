const valoresOriginales = [0, 1, 2, 3, 4, 5];

const valoresConMap = valoresOriginales.map (valor=> valor + 1);

console.log(valoresConMap);
//numeros par o no par
const functionCallback = (valor) => {
    if(valor % 2 === 0){
        return (valor);
    }else{
        return 'valor no par';
    }
}

const valoresPares = valoresOriginales.map(functionCallback);

console.log(valoresPares);
//numeros pares
const miFuncionMap = (arreglo, callback) =>{
    //logica propia de mi funcion map
    const nuevoArreglo = [];
    for(let i=0; i<arreglo.length; i++){
        const nuevoValor = callback(arreglo[i]);
        nuevoArreglo.push(nuevoValor);
    }
    return nuevoArreglo;
}

const resultadoMapPropio = miFuncionMap(valoresOriginales, x => x * 2);

 console.log(resultadoMapPropio);