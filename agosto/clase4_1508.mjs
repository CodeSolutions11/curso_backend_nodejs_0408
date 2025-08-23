// Objetos
/*
const carro = {
    marca: "Toyota",
    modelo:"Corolla"
}

// ? Desestructurar objetos
let { modelo } = carro
console.log(modelo)
*/

// import data from "./constants.mjs";
// const { correo, numero, nombre } = data
// console.log(correo, numero, nombre);

// import data from "./constants.mjs";
// console.log(data)

// import { numero, nombre } from "./constants.mjs";
// console.log(numero, nombre);


//import data, { nombre, numero } from "./constants.mjs";

//console.log(data, nombre, numero);


// TODO: Callbacks, Promesas, async/await

// Callbacks: Es una funcion que recibe otra funcion como parametro

// const saludar = (callback)=>{
//     callback()
//     console.log("Hola Mundo")
// }
// saludar(()=>console.log("Hola"))

/*
const saludar = ()=>{
    console.log("Obteniendo registros")
}


saludar(setTimeout(()=> console.log("1000 Registros"), 7000))
obtenerDatosConCallback()



function obtenerDatosConCallback(){
    console.log("Iniciando Operacion")

    setTimeout(() => {
        console.log("Paso 1: Usuario Autenticado")

        setTimeout(() => {
            console.log("Paso 2: Permisos verificados")

            setTimeout(() => {
                console.log("Paso 3: Datos obtenidos")
            }, 1000)

        }, 2000)

    }, 1000)

} 

*/


// TODO: Promesas
/*

function obtenerDatosConPromesas(){

    return new Promise(resolve => {
        console.log("Iniciando operacion con promesas...")
        setTimeout(() => resolve("Usuario Autenticado"), 2000)
    })
    .then(resultado => {
        console.log("✅", resultado)
        return new Promise(resolve => {
            setTimeout(() => resolve("Permisos verificados"), 1000)
        })
    })
    .then(resultado => {
        console.log("✅", resultado)
        return new Promise(resolve => {
            setTimeout(() => resolve("Datos obtenidos"), 1500)
        })
    })
    .then(resultado => {
        console.log("✅", resultado)
        console.log("✅", "Mucho mas limpio")
    })
}

obtenerDatosConPromesas()
*/

// Este código demuestra los tres estados posibles de una Promesa en JavaScript:

// 1. Promesa Pendiente (pending):
// Crea una promesa que nunca se resuelve, quedando en estado pendiente
// ya que no se llama a 'resolve'
const promesaPendiente = new Promise(resolve => {
    console.log("Estado: Pendiente")
})

// 2. Promesa Resuelta (fulfilled):
// Crea una promesa que se resuelve inmediatamente con el valor "Éxitoo!!!"
const promesaResuelta = Promise.resolve("Éxitoo!!!")
console.log("Estado: Finalizado")

// 3. Promesa Rechazada (rejected):
// Crea una promesa que se rechaza inmediatamente con el mensaje "Error!!"
const promesaRechazada = Promise.reject("Error!!")
console.log("Estado: Rechazado")
