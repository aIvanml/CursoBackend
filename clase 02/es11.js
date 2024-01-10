const valor = 0;
const nuevoValor = valor || 0;
const nuevoValor2 = valor ?? 0;

console.log(nuevoValor);
console.log(nuevoValor2);

class Persona {
    #name //Privada
    constructor(apellido, email) {
        //this.name = name
        this.apellido = apellido
        this.email = email
        this.fullname = this.#name
    }

    #getnombre = () => this.apellido
    getFullName = () => this.#getnombre() + ' Ivan'
}

const persona = new Persona('Maciel', 'alan.maciel@gmail.com')

console.log('Email:');
console.log(persona.email);
console.log('GetNombre:');
console.log(persona.getFullName());
