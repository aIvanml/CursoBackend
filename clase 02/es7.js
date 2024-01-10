const numeros = [2, 3, 4, 5, 6, 7]
console.log(numeros);

//Exponencial
const numerosNuevos = numeros.map((numero) => numero ** 2);
console.log(numerosNuevos);

//Includes
const nombres = ["Matias", "Maria", "Enzo"]
const nombre = "Alan";

if(nombres.includes(nombre)){
    console.log(`${nombre} esta presente.`);
} else {
    console.log(`${nombre} no esta presente.`);
}

