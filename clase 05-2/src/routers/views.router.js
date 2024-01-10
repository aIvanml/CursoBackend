import { Router } from "express";

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

const router = Router();

router.get('/', (req, res) => {
    const random = Math.floor(Math.random() * users.length);
    res.render("index", { user: users[random], isAdmin: users[random].role === 'admin', food })
})

export default router