import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from './routers/views.router.js'
import { Server } from "socket.io";

const PORT = 8080;
const app = express();

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use(express.static(__dirname + '/public'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', viewsRouter);

const httpServer = app.listen(PORT, () => {
  console.log("Escuchando en el puerto 8080:");
});

const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado.");

});

//2.50
