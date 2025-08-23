// TODO: Operadores Lógicos: AND &&, OR ||
// ? AND &&

// console.log(true && "17" !== 17)
// console.log(false)

const user = "JesusDev";
const passwd = "123456"; // string
let result = user == "JesusDev" && passwd === 123456; //number
console.log(result);

// ? OR ||

console.log(true);

result = true;
console.log(result);

// TODO: Modulos: export, import, import()

// import nombre from "./modulos"
const data = require("../data/variables.js");
console.log(data);

// Objetos {}
const player = {
  name: "Mercedes",
  life: 89,
  ganarVida: function () {
    return this.life + 5;
  },
};

// let name = player.name
let { life, name } = player; // ? desestructuracion de objetos

console.log(life, name);

const alumno = { 
    nombre: "Juan", 
    correo: "juan@gmail.com", 
    curso: "Backend" 
};

// alumno.nombre = "Juan"
alumno.apellido = "Farias";

// let correo = alumno.correo
let {correo} = alumno
let email = alumno.correo

console.log(alumno.apellido, email);
