const objeto = {
  nombre: "Alberto",
  edad: 25,
  colorFav: "Azul",
};

console.log('Metodo entries');
let result = Object.entries(objeto);
console.log(result)

console.log('Metodo Keys');
const propiedades = Object.keys(objeto);
propiedades.forEach((prop) => {
  console.log(prop);
});


console.log(Object.keys(objeto));
console.log(Object.values(objeto));
console.log(Object.entries(objeto));

//REDUCE
const numeros = [2, 4, 5, 56, 67];
const total = numeros.reduce(
  (valorPrevio, valorAcumulado) => valorPrevio + valorAcumulado
);
console.log(total);