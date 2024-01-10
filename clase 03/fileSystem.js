//const fs = require("fs");

///////////////////Sincronica de manejos de archivos

//fs.writeFileSync('./data.txt', 'Esto es un ejemplo 2', 'utf-8')
//console.log(fs.existsSync('./data.txt'));

//fs.appendFileSync('./data.txt', '\n Esto es un agregado', 'utf-8')

//const file = fs.readFileSync('./data.txt', 'utf-8')
//console.log(file);

//Borra un archivo
//fs.unlinkSync('./data.txt')

/////////////////Callback

//fs.writeFile('./data.txt', 'Hola, soy un ejemplo', 'utf-8', (err) => {
//    if(err) return console.log('Error al escribir un archivo', err);
//    //console.log(resultado);
//})

//fs.readFile('./data.txt', 'utf-8', (err, data) => {
//    if (err) return console.log('Error', err);
//    console.log(data);
//})

//fs.appendFile('./data.txt', '\n Esto es un agregado', 'utf-8', err => {
//    if(err) return console.log('Error:', err);

//    fs.readFile('./data.txt', 'utf-8', (err, data) => {
//        if (err) return console.log('Error', err);
//        console.log(data);
//    })
//})

//fs.unlink('./data.txt', err => {
//    if(err) return console.log('Error: ', err);
//    console.log('Archivo borrado');
//})

/////////////Promesas

const { error } = require("console");
const { promises: fs } = require("fs");
//fs.promises.writeFile('./data.txt', 'Esto es un ejemplo', 'utf-8')
//.then(() => console.log('Fin de escritura.'))
//.catch(err => console.log(err))

//fs.readFile('./data.txt', 'utf-8')
//.then(result => console.log(result))
//.catch(err => console.log(err))

// const readData = async () => {
//     try {
//         const file = await fs.readFile('./data.txt', 'utf-8')
//         console.log(file);
//     } catch (error) {
//         console.log(error);
//     }
// }

//readData()

const users = [
  { id: 1, first_name: "Ivan", last_name: "Maciel", email: "i@gmail.com" },
];

const handleFiles = async () => {
  try {
    // Convertimos el array de usuarios a una cadena JSON con formato y sangría
    let usersJson = JSON.stringify(users, null, 2);
    
    // Convertimos la cadena JSON de vuelta a un objeto JavaScript
    let userJs = JSON.parse(usersJson);
    
    // Imprimimos en la consola el objeto JavaScript resultante
    console.log("User JS", userJs);
    
    // Escribimos el contenido de usersJson en un archivo llamado "data.json"
    await fs.writeFile("./data.json", usersJson, "utf-8");
    
    // Leemos el contenido del archivo "data.json"
    const data = await fs.readFile("data.json");
    
    // Convertimos el contenido leído a un objeto JavaScript
    const dataJS = JSON.parse(data);
    
    // Imprimimos en la consola el objeto JavaScript resultante después de la lectura
    console.log("Esto es data", dataJS);
    
    // Descomentar la línea siguiente si se desea eliminar el archivo después de leerlo
    // await fs.unlink('./data.txt')
  } catch (error) {
    // Capturamos cualquier error y lo imprimimos en la consola
    console.log(error);
  }
};


handleFiles();
