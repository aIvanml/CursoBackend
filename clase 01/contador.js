class Contador {

    static contadorGlobal = 0;

    constructor(responsable) { 
        this.responsable = responsable;
        this.contador = 0;
    }

    getResponsable () {
        return `${this.responsable}`;
    }

    contar () {
        this.contador++;
        Contador.contadorGlobal++;
    }

    getCuentaIndividual () {
        return this.contador;
    }

    getCuentaGlobal() {
        return Contador.contadorGlobal;
    }
}

// Test

const contador1 = new Contador("Fulanito")
const contador2 = new Contador("Mengano")

contador1.contar();
contador2.contar();
contador1.contar();
contador2.contar();
contador1.contar();
contador2.contar();
contador1.contar();

console.log(contador1.getResponsable());
console.log(contador1.getCuentaIndividual());
console.log(contador2.getResponsable());
console.log(contador2.getCuentaIndividual());

console.log(contador2.getCuentaGlobal());