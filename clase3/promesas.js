const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor === 0) {
            reject('No se puede hacer divisiones entre cero');
        } else {
            resolve(dividendo/divisor);
        }
    })
};

// dividir(10,2)
// //Manjear el caso de exito de nustras promesas
//     .then(resultado =>{
//         console.log(resultado)
//         return(resultado)
//     })
//     .then (resultado2 =>{
//         console.log(resultado2 * 3)
//     })
//     //Manjear el caso fallido de nustras promesas, no importa si tengo llamados encanedados, sirve solamente un vez
//     .catch(error =>{
//         console.log(error);
//     })

//este bloque tiene omportamiento asincronico
const funcionAsincronica = async() => {
    try {
        //await espera el resultado de la promesa
        const resultado = await dividir(10,2);
        console.log(resultado);
    } catch (error) {
        //obtenemos en el caso de que haya un reject en nuestra promesa
        console.log(error);
    }
}

funcionAsincronica();