// TODO: DESTRUCTURACION de objetos
/*const data = {
    nombre: "Jesus",
    correo: "jesus@gmail.com"
}

// let nombre = data.nombre // ? data["nombre"]
// let correo = data.correo // ? data["correo"]

const { nombre, correo } = data 


console.log(nombre, correo)*/

// TODO: Modulos
/*
import { nombre, edad, email, city } from "../data/variables.mjs"

console.log(nombre, edad, email, city)*/

//import user from "../data/objetos.mjs";
//import { user2 } from "../data/objetos.mjs";
/*import user, { user2 } from "../data/objetos.mjs";

console.log(user);
console.log(user2);
*/

// const data = require("../data/arrays")

// console.log(data)

// TODO: Promesas, fetch, .then, async/await

/*
import names, {users} from "../data/arrays.mjs"

console.log(names[1])

console.log(users[3].name)*/

const API_PRODUCTS = "https://fakestoreapi.com/products"
const API_CATEGORIES = "https://fakestoreapi.com/products/categories"
/*
fetch(API_PRODUCTS)
.then(response => response.json())
    .then(data => console.log(data))
*/
/*
fetch(API_CATEGORIES)
.then( response => response.json())
.then( data => console.log(data))*/

// TODO: Bucle for

// import names, {users} from "../data/arrays.mjs"
// for(let i = 0;  i < 5; i++){
//     console.log(names[i])
// }

// for(let i = 0; i < 5; i++){
//     console.log(users[i].name, users[i].age)
// }

fetch(API_CATEGORIES)
    .then( response => response.json())
    .then( data => {
        for(let i = 0; i < 4; i++){
            console.log(data[i])
        }
    })

// TODO: Tarea. Crear un for que recorra todos los productos obtenidos al hacer fetch a la api de productos