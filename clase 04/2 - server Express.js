const express = require('express')

const app = express()
//http:/localhost:8000/
app.get('/saludo', (req, res) => {
    res.send('Bienvenidos a un server express.')
})

app.get('/users', (req, res) => {
    res.send({
        nombre: 'Benjamin',
        apellido: 'Maciel'
    })
})

app.get('*', (req, res) => {
    res.send('Directorio errorneo.')
})

app.listen(8000, () => {
    console.log('Escuchando en el puerto 8000');
    
})