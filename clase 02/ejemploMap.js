console.log('Funcion Map');
//function cuadrado(numero) {
    //    return numero ** 2;
    //}
    
const numeros = [1, 2, 3, 4, 5];
const numerosNuevos = numeros.map((numero, index) => {
    if (index === 3) {
        return numero;
    }
    console.log(index);
    return numero ** 2;
});

console.log(numerosNuevos);

const numeros2 = [1, 2, 3, 4];

const numerosNuevos2 = numeros2.map((numeros2) => {
    return numeros2 + 1;
});

console.log(numerosNuevos2);

//Callback
console.log('Funcion Callback');

function mapCustom(array, callback) {
    let nuevoArray = [];

    for(let i = 0; i < array.length; i++) {
        let nuevoValor = callback(array[i]);
        nuevoArray.push(nuevoValor);
    }
    return nuevoArray;
}

const arrayNuevo = [10, 11, 12, 13, 14, 15];

mapCustom(array)