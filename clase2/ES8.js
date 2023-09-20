const objeto1 = {
    impuesto1: 12,
    impuesto2: 67,
    impuesto3: 34
};

const soloPropiedades = Object.keys(objeto1)
const soloValores = Object.values(objeto1)
const entradas = Object.entries (objeto1)

console.log(soloPropiedades)
console.log(soloValores)
console.log(entradas)

// 12 + 67 + 34

// 0 + 12 = 12
// 12 + 67 = 79
// 79 + 34 = 113

const impuestosTotales = soloValores.reduce((valorInicial, valorAcumulado) => valorAcumulado + valorInicial);

console.log(impuestosTotales)