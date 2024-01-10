import express from "express";
import userRouter from "./routers/users.routers.js";
import petsRouter from "./routers/pets.routers.js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
//console.log(__dirname);
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/public")));

app.use("/api/users", userRouter);
app.use("/api/pets", petsRouter);

app.listen(PORT, () => {
  console.log("Escuchando puerto 8080");
});

//2.23
