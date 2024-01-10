const { promises } = require("fs");
const fs = promises;

//Leer Package.json
const leerArchivo = async () => {
  try {
    //Leer el archivo .json
    const dataJson = await fs.readFile("./package.json");
    //Convertimos a JS
    const contenidoObjeto = JSON.parse(dataJson);
    contenidoObjeto.author = "Ivan Maciel";
    console.log(contenidoObjeto);
    //Parsear a JSON
    const contenidoStr = JSON.stringify(contenidoObjeto, null, 2); //Contenido, replace, formato
    console.log(contenidoStr);
    //Escribir el archivo
    await fs.writeFile("./package.json", contenidoStr);
  } catch (error) {
    console.log(error);
  }
};

leerArchivo();
