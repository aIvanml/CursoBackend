import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from './routers/views.router.js'
import userRouter from './routers/users.router.js'

const port = 8080;
const app = express();

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use(express.static(__dirname + '/public'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', viewsRouter);
app.use('/api/register', userRouter);

app.listen(port, () => {
  console.log(`Escuchando sobre el puerto ${port}:`);
});

//3.24
