//Callback
const array = [1, 2, 3]

let newArray = array.map( (num, index) => {
    return num * index
})

console.log('Funcion callback:');
console.log(newArray);