//siempre los nombres de las variables, metodos, funciones deben ser descriptivos
const valoresBase = [1,2,3,4];
                    //0, 1, 2, 3

            const potenciasValoresBase = valoresBase.map((numero, indice) => numero**indice);

            console.log(potenciasValoresBase);
// //single Responsability
// //SOlID
// function calcularDistancia(latitud, ongitud){
//     //trabjo la suma de dos numeros

// }

//Incudes

const nombres = ['Lao', 'Messi', 'Salva', 'Glenn'];

if (nombres.includes('Nico') === true)
{
    console.log('tenemos el elemento')
} else {
    console.log('no se encuentra el elemento')
}

    //-----> resultado un boolean true o false