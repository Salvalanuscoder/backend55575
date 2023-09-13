class contador {
    static contadorGlobal = 0;

    constructor(nombre){
        this.responsable = nombre;
        this.contadorIndividual = 0;
    };
    getResponsable(){
        return this.responsable;
    };
    contar(){
        this.contadorIndividual++;
        contador.contadorGlobal++;
    };
    getCuentaIndividual(){
        return this.contadorIndividual;
    };
    getCuentaGlobal(){
        return this.contadorGlobal;
    };
}

const contador1 = contador('Juan');
const contador2 = contador('Ana');

contador1.contar();
contador1.contar();
contador2.contar();

console.log(contador1.getResponsable());
console.log(contador1.getCuentaIndividual());
console.log(contador1.getCuentaGlobal());
console.log(contador1.contadorGlobal)