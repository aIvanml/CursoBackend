const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//http:/localhost:8000/ parametro
app.get("/params/:nombre", (req, res) => {
  console.log(req.params);

  res.send(`Bienvenido ${req.params.nombre}!`);
});

app.get("/dosparams/:nombre/:apellido", (req, res) => {
  console.log(req.params);

  res.send(`Bienvenido ${req.params.nombre} ${req.params.apellido}!`);
});

let users = [
  { id: 1, nombre: "Benjamin", Apellido: "Maciel" },
  { id: 2, nombre: "Alan", Apellido: "Maciel" },
  { id: 3, nombre: "Marta", Apellido: "Fernandez" },
];
// READ ____________________________________________________
//get user -> trae un usuario
app.get("/api/users/:uid", (req, res) => {
  //uid user id
  const { uid } = req.params;
  const user = users.find((user) => user.id === Number(uid));
  //console.log(req.params);
  res.send(user);
});

// Endpoint para solicitar todos los usuarios
app.get("/api/users", (req, res) => {
  //uid user id
  //const { uid } = req.params

  res.send(users);
});

//http://localhost:8000/query ? nombre=''&apellido=''
app.get("/query", (req, res) => {
  //console.log(req.query);
  //res.send(req.query)
  const { nombre, apellido } = req.query;
  const user = users.find((user) => user.nombre === nombre);

  res.status(400).send(user);
  console.log(user);
});

// CREATE __________________________________________________

// Crear un usuario
app.post("/api/users", (req, res) => {
  //POST http://localhost:8080/users
  console.log(req.body);
  const { nombre, apellido } = req.body;
  if (!nombre || !apellido) {
    return res.status(400).send({
      status: "Error",
      error: "Faltan completar campos en el formulario.",
    });
  }
  const newUser = {
    id: users.length + 1,
    nombre: nombre,
    apellido: apellido,
  };
  users.push(newUser);
  console.log(users);
  res.status(200).send({
    status: "succes",
    usersCreate: newUser,
  });
});

// UPDATE - PUT y PATCH ____________________________________

app.put("/api/users/:uid", (req, res) => {
  const { uid } = req.params;
  const { nombre, apellido } = req.body;

  const userUpdateIndex = users.findIndex((user) => user.id === parseInt(uid));
  users[userUpdateIndex] = { id: users[userUpdateIndex], nombre, apellido };
  console.log(users);

  res.status(200).send({
    status: "succes",
    message: "Usuario actualizado",
  });
});

// DELETE __________________________________________________

app.delete("/api/users/:uid", (req, res) => {
  const { uid } = req.params;
  users = users.filter((user) => user.id !== parseInt(uid));
  res.send(users);
});

app.listen(8000, () => {
  console.log("Escuchando en el puerto 8000");
});

//Codigos de estado
// 200 - 299 - Todos OK
// 300 - 399 - Redirect
// 400 - 499 - Errores del cliente
// 400 - (bad request)
// 404 - (not found)
// 500 - 599 - Errores del server

//3.57
