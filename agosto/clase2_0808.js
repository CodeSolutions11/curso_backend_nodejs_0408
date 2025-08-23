// TODO: Scope: alcance de las variables
// ! Prohibido usar  *** var ***
/*
let nombre

{
    // let nombre
   nombre = "Jesus" 
    console.log(nombre)

}

//console.log(nombre) // ! Error de alcance
console.log(nombre)

*/

// TODO: Tipos de datos: number, strings, undefined, boolean, funciones, objetos, arrays, NaN, null

// * 1. strings: cadenas de texto. "", '', `` => en windows es alt + 96, linux => ctrl + shift + u + 60

let name = "Adrian"; // ? 'Adrian', `Adrian`
console.log(typeof name);

// * 2. Number: son numeros
let num1 = 17;
console.log(typeof num1);

// * 3. Boolean: true or false => verdadero o falso
let truly = true; // 1
let falsy = false; // 0
console.log(typeof truly, typeof falsy);

// * 4. Undefined
let indefinida;
console.log(typeof indefinida);

// * 5. Null
//let nula = // ! Error
let nula = null;
console.log(typeof nula);

// * 6. NaN: not a number

let num2 = "15";
let resultado = num1 - num2; // NaN
console.log(isNaN(resultado), typeof resultado);
console.log(resultado, typeof resultado);

// Funciones: expresion, declaracion, flecha
let sumarNumeros = function () {};
console.log(sumarNumeros, typeof sumarNumeros);

// * Declaracion
/*
restarNumeros()

function restarNumeros() {
    console.log(5 - 9)
}
*/
// Expresion

//restarNumeros()// ! Error
/*
const restarNumeros = function() {
  console.log(5 - 9);
};
restarNumeros()
*/

// * Arrow function (funcion flecha)
/*
const restarNumeros = () => {
  console.log(50 - 17);
};
restarNumeros()
*/
/*
const multipliclar = (num1, num2) => {
    let result = num1 * num2
    //console.log(result)

    return result
}

// resultado = multipliclar()

console.log(multipliclar(7, 8))
console.log(multipliclar(10, 15))
console.log(multipliclar(3, 2))
console.log(multipliclar(4, 5))
*/

const saludo = nombre => "Saludos " + nombre;
/*
const saludo = (nombre) => {
  return "Saludos " + nombre
}  
*/
console.log(saludo("Adrian"))
console.log(saludo("Julio"))
console.log(saludo("Nesyabel"))


// TODO: Operadoes: aritmeticos, comparacion, logicos

// ? Aritmeticos: suma +, resta -, multiplicacion *, division /, modulo %, exponenciacion **

console.log(5 + 5)// Operado aritmetico
console.log("Hola a " + 5) // concatenar: unir

console.log( 5 % 15 ) // Modulo: resto de una division // ! en caso de que el primer digito sea menor que el segundo el resultado siempre será el valor del primer digito

console.log(4 ** 3) // 4*4*4 = 64

// ? Comparacion: igualdad ==, desigualdad !=, mayor que >, mayor o igual >=, menor que <, menor o igual <=, negacion !;
// Si la respuesta es si = true en caso contrario sera false

console.log(5 == 7, 8 == 8)

console.log(5 != 7, 8 != 8)

console.log(5 > 7, 8 >= 8)

console.log(5 < 7, 8 <= 5)

console.log(!(17*4/2 == 80), !false)

// TODO: Condicionales: if/else, switch, loops (bucles)

