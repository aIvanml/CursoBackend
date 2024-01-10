//Asincronico

setTimeout(() => {
  //Acciones
  console.log("Hola");
}, 500);

let counter = 0;
const timer = setInterval(() => {
  console.log(counter++);
  if (counter > 5) {
    clearInterval(timer);
  }
}, 2000);

console.log("Ultima accion");
