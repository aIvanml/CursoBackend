const objeto1 = {
    nombre: "Carlos",
    edad: 25,
    colorFav: "Rojo"
};

const objeto2 = {
    nombre: "Pedro",
    edad: 26
};

//Spread operator
const objeto3 = {...objeto1, ... objeto2};

console.log(objeto3);

//Rest Operator

const nuevoObjeto = {
    a: "Algo",
    b: "Otro",
    c: "Este"
}

const {a, ...rest} = nuevoObjeto;
console.log(a, nuevoObjeto);
console.log(a, nuevoObjeto.c);

