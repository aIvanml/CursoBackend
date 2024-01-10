//TRIM
const texto = "      asdasdadad              "
console.log(texto);
console.log(texto.trim())

//FLAT
const array = [
    [1,2],
    [1,2],
    [1,[2]],
];

console.log('//Array comun');
console.log(array);
console.log('//Array con flat');
console.log(array.flat(2));

//Import dynamics
console.log('Implementando ImportDynamics');
const modo = 'calculos'

const exampleImportDynamics = async () => {
    if (modo === 'calculos') {
        const { Calculadora } = await import ('./calculadora.mjs')
        let calculadora = new Calculadora()
        console.log(calculadora.suma(5,6));
        console.log(calculadora.resta(5,6));
    }
}

exampleImportDynamics()