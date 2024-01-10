const fs = require("node:fs");
const crypto = require("node:crypto");

class UserManagerFile {
  constructor() {
    this.path = "./mockDB/Users.json";
  }

  async readFileUsers() {
    try {
      const usersData = await fs.promises.readFile(this.path, 'utf-8');
      const usersJs = await JSON.parse(usersData);
      return usersJs;
    } catch (error) {
      return [];
    }
  }
  async createUser(newUser) {
    try {
      let userList = await this.readFileUsers();
      console.log(newUser);   
      console.log(userList);        
      newUser.salt = crypto.randomBytes(128).toString('base64')
      newUser.newpass = crypto.createHmac('sha256', newUser.salt).update(newUser.password).digest('hex')
      console.log(newUser);

      userList.push(newUser)
      await fs.promises.writeFile(this.path, JSON.stringify(userList, null, 2))
    } catch (error) {
      return []
    }
  }
  async validateUser(nombre, password) {
    try {
        let users = await this.readFileUsers()
        const user = users.find(prod => prod.nombre === nombre)
        const hashPassword = crypto.createHmac('sha256', user.salt).update(password).digest('hex')
        if(hashPassword === user.newpass) {
          return console.log('Password valid');
        } 
         console.log('Password invalid');
    } catch (error) {
      console.log(error);
    }
  }
}

const users = new UserManagerFile()
/*
console.log(users.createUser({
    nombre: 'Ivan',
    apellido: 'Maciel',
    username: 'IvanUser',
    password: '123456',
}));*/

console.log(users.validateUser('Ivan', '123456'));


//3.36.54