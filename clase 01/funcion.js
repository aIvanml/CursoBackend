function imprimirSaludo() {
  console.log("Hola");
}

const imprimirSaludoFlecha = () => {
  console.log("Funcion flecha");
};

imprimirSaludo();
imprimirSaludoFlecha();

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  static especie = "Humano";

  hablar(texto) {
    console.log(`${this.nombre}: ${texto}`);
  }

  datos() {
    console.log(`${this.nombre} - ${this.edad}`)
  }
}

// Instancias
const lautaro = new Persona("Lautaro", 23);
const matias = new Persona("Matias", 45);

lautaro.datos();
matias.datos();

console.log(Persona.especie)
