const http = require('node:http')
// http:// localhost:8080 /

const server = http.createServer((peticion, respuesta) => {
    respuesta.end('Montando el primer server')
}) //Callback - funcion pasada por parametro
server.listen(8080, () => {
    console.log('Escuhando desde el puerto 8080');

})

//44.20