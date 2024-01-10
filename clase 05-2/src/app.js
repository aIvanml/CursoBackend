import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from './routers/views.router.js'

const port = 8080;
const app = express();

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
    {
        nombre: "Benja",
        apellido: "Fernandez",
        edad: 1,
    telefono: 1131338860,
    email: "bf@gmail.com",
    role: 'admin'
  },
  {
    nombre: "Marta",
    apellido: "Fernandez",
    edad: 21,
    telefono: 1131338860,
    email: "bf@gmail.com",
    role: 'user'
  },
  {
    nombre: "Ivan",
    apellido: "Maciel",
    edad: 21,
    telefono: 1131338860,
    email: "bf@gmail.com",
    role: 'user'
  },
];

const food = [
    {name: 'pizza', price: 10},
    {name: 'burguer', price: 10},
    {name: 'pasta', price: 10},
    {name: 'coca', price: 7},
    {name: 'cerveza', price: 6},
    {name: 'agua', price: 5},
]

app.use('/', viewsRouter)


// app.get("/", (req, res) => {
//     const random = Math.floor(Math.random() * users.length);
//     res.render("index", { user: users[random], isAdmin: users[random].role === 'admin', food })
// });

app.listen(port, () => {
  console.log(`Escuchando sobre el puerto ${port}:`);
});

//2.45
